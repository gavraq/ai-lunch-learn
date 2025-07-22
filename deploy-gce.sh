#!/bin/bash

# AI Lunch & Learn - GCE Deployment Script
# For deployment on Google Compute Engine with Nginx Proxy Manager

set -e  # Exit on any error

echo "🎓 AI Lunch & Learn - GCE Deployment"
echo "====================================="

# Configuration
DOMAIN="ai.risk-agents.com"
REPO_URL="https://github.com/gavraq/ai-lunch-learn.git"
PROJECT_DIR="/home/gavin_n_slater/ai-lunch-learn"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if running as the correct user
if [ "$USER" != "gavin_n_slater" ]; then
    print_error "Please run this script as gavin_n_slater user"
    exit 1
fi

# Update system packages
print_status "Updating system packages..."
sudo apt update && sudo apt upgrade -y

# Install basic required packages
print_status "Installing basic packages..."
sudo apt install -y git curl wget gnupg lsb-release ca-certificates software-properties-common

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    print_status "Installing Docker..."
    
    # Install Docker using official Docker repository
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
    echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
    
    sudo apt update
    sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
    
    # Add user to docker group
    sudo usermod -aG docker gavin_n_slater
    print_warning "You may need to log out and back in for docker group changes to take effect"
    
    # Enable and start Docker
    sudo systemctl enable docker
    sudo systemctl start docker
else
    print_success "Docker is already installed"
fi

# Alternative: Install docker-compose standalone if plugin fails
if ! command -v docker compose &> /dev/null; then
    print_status "Installing Docker Compose standalone..."
    DOCKER_COMPOSE_VERSION=$(curl -s https://api.github.com/repos/docker/compose/releases/latest | grep 'tag_name' | cut -d\" -f4)
    sudo curl -L "https://github.com/docker/compose/releases/download/${DOCKER_COMPOSE_VERSION}/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    sudo chmod +x /usr/local/bin/docker-compose
    # Create alias for consistency
    echo 'alias docker compose="docker-compose"' >> ~/.bashrc
fi

# Test Docker installation
print_status "Testing Docker installation..."
if sudo docker run hello-world >/dev/null 2>&1; then
    print_success "Docker is working correctly"
else
    print_error "Docker installation failed"
    exit 1
fi

# Clone or update the repository
if [ -d "$PROJECT_DIR" ]; then
    print_status "Updating existing repository..."
    cd "$PROJECT_DIR"
    git pull origin main
else
    print_status "Cloning repository..."
    git clone "$REPO_URL" "$PROJECT_DIR"
    cd "$PROJECT_DIR"
fi

# Stop any existing containers
print_status "Stopping existing containers..."
sudo docker compose -f docker-compose.gce.yml down --remove-orphans 2>/dev/null || true

# Build and start the Docker containers
print_status "Building and starting Docker containers..."
sudo docker compose -f docker-compose.gce.yml build --no-cache
sudo docker compose -f docker-compose.gce.yml up -d

# Wait for containers to be healthy
print_status "Waiting for containers to be healthy..."
sleep 20

# Check container health
if sudo docker compose -f docker-compose.gce.yml ps | grep -q "healthy\|Up"; then
    print_success "Containers are running successfully"
else
    print_error "Containers failed to start properly"
    sudo docker compose -f docker-compose.gce.yml logs
    exit 1
fi

# Create systemd service for auto-start
print_status "Creating systemd service..."
sudo tee /etc/systemd/system/ai-lunch-learn.service > /dev/null <<EOF
[Unit]
Description=AI Lunch & Learn Application
Requires=docker.service
After=docker.service

[Service]
Type=oneshot
RemainAfterExit=yes
WorkingDirectory=$PROJECT_DIR
ExecStart=/usr/bin/docker compose -f docker-compose.gce.yml up -d
ExecStop=/usr/bin/docker compose -f docker-compose.gce.yml down
TimeoutStartSec=0
User=root

[Install]
WantedBy=multi-user.target
EOF

sudo systemctl enable ai-lunch-learn.service

# Display final status
print_success "Deployment completed successfully!"
echo ""
echo "📊 Service Status:"
echo "=================="
echo "🐳 Docker Containers:"
sudo docker compose -f docker-compose.gce.yml ps
echo ""
echo "🔗 Access URLs:"
echo "  Frontend Health: curl http://localhost:8080/health"
echo "  Backend Health: curl http://localhost:5050/results"
echo "  Local Frontend: http://$(curl -s ifconfig.me):8080"
echo "  Local Backend: http://$(curl -s ifconfig.me):5050"
echo ""
echo "📋 Management Commands:"
echo "  View logs: cd $PROJECT_DIR && sudo docker compose -f docker-compose.gce.yml logs -f"
echo "  Restart: cd $PROJECT_DIR && sudo docker compose -f docker-compose.gce.yml restart"
echo "  Update: cd $PROJECT_DIR && git pull && sudo docker compose -f docker-compose.gce.yml up -d --build"
echo ""
echo "🌐 Nginx Proxy Manager Configuration:"
echo "====================================="
echo "To complete the setup, configure Nginx Proxy Manager at http://$(curl -s ifconfig.me):81"
echo ""
echo "Create a new Proxy Host with:"
echo "  Domain Names: ai.risk-agents.com"
echo "  Scheme: http"
echo "  Forward Hostname/IP: $(curl -s ifconfig.me)"
echo "  Forward Port: 8080"
echo "  Cache Assets: Yes"
echo "  Block Common Exploits: Yes"
echo ""
echo "For API endpoints, create additional location rules:"
echo "  Location: /vote"
echo "  Scheme: http"
echo "  Forward Hostname/IP: $(curl -s ifconfig.me)"
echo "  Forward Port: 5050"
echo ""
echo "  Location: /results"
echo "  Scheme: http" 
echo "  Forward Hostname/IP: $(curl -s ifconfig.me)"
echo "  Forward Port: 5050"
echo ""
echo "  Location: /reset"
echo "  Scheme: http"
echo "  Forward Hostname/IP: $(curl -s ifconfig.me)"
echo "  Forward Port: 5050"
echo ""
echo "🔒 Next Steps:"
echo "  1. Configure Nginx Proxy Manager for ai.risk-agents.com"
echo "  2. Request SSL certificate through Nginx Proxy Manager"
echo "  3. Test the application: https://ai.risk-agents.com"
echo "  4. Test poll functionality to ensure backend connectivity"

print_success "Repository configured for https://github.com/gavraq/ai-lunch-learn.git"