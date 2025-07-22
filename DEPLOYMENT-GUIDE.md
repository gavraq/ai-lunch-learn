# AI Lunch & Learn - Complete Deployment Guide

## Overview

This guide provides complete instructions for deploying the AI Lunch & Learn presentation application on Google Cloud Platform using Docker containers, Nginx Proxy Manager, and Let's Encrypt SSL certificates.

## Final Architecture

```
Internet → GCP Firewall → Nginx Proxy Manager → Docker Containers
                ↓                                        ↓
           ai.risk-agents.com                    Frontend (8080) + Backend (5050)
                ↓
           Let's Encrypt SSL
```

## Prerequisites

- Google Cloud Platform account with VM instance
- Domain name (risk-agents.com) with DNS management access
- Nginx Proxy Manager already running on the GCP VM
- Basic familiarity with terminal/SSH

## Part 1: Local Development Setup

### 1.1 Clone Repository

```bash
git clone https://github.com/gavraq/ai-lunch-learn.git
cd ai-lunch-learn
```

### 1.2 Local Development with Docker

```bash
# Build and run both services
docker compose up --build

# Or run in background
docker compose up -d

# View logs
docker compose logs -f

# Test health endpoints
curl http://localhost:8080/health
curl http://localhost:5050/results

# Stop services
docker compose down
```

The application will be available at:
- Frontend: http://localhost:8080
- Backend API: http://localhost:5050

## Part 2: Production Deployment on GCP

### 2.1 Automated Deployment

The easiest way to deploy is using the automated deployment script:

```bash
# SSH into your GCP VM
ssh gavin_n_slater@YOUR_VM_IP

# Clone the repository
git clone https://github.com/gavraq/ai-lunch-learn.git
cd ai-lunch-learn

# Run the deployment script
./deploy-gce.sh
```

The script will:
- Install Docker and Docker Compose if needed
- Build and start the containers
- Create a systemd service for auto-restart
- Display configuration instructions for Nginx Proxy Manager

### 2.2 Manual Production Deployment

If you prefer manual control:

```bash
# On your GCP VM
cd /home/gavin_n_slater/ai-lunch-learn

# Stop any existing containers
sudo docker compose -f docker-compose.gce.yml down

# Build and start production containers
sudo docker compose -f docker-compose.gce.yml build --no-cache
sudo docker compose -f docker-compose.gce.yml up -d

# Check container status
sudo docker compose -f docker-compose.gce.yml ps

# View logs
sudo docker compose -f docker-compose.gce.yml logs -f
```

### 2.3 Verify Deployment

```bash
# Test health endpoints
curl http://localhost:8080/health
curl http://localhost:5050/results

# Check container logs
sudo docker compose -f docker-compose.gce.yml logs
```

## Part 3: Nginx Proxy Manager Configuration

### 3.1 Access Nginx Proxy Manager

Navigate to your Nginx Proxy Manager admin interface:
```
http://YOUR_VM_IP:81
```

### 3.2 Create Proxy Host for ai.risk-agents.com

1. **Click "Proxy Hosts" → "Add Proxy Host"**

2. **Details Tab:**
   - Domain Names: `ai.risk-agents.com`
   - Scheme: `http`
   - Forward Hostname/IP: `YOUR_VM_IP` (or `localhost`)
   - Forward Port: `8080`
   - Cache Assets: ✅ Enabled
   - Block Common Exploits: ✅ Enabled

3. **SSL Tab:**
   - SSL Certificate: Request a new SSL Certificate
   - Force SSL: ✅ Enabled
   - Email Address: Your email for Let's Encrypt
   - Use a DNS Challenge: ❌ Disabled (unless you have DNS API access)
   - I Agree to the Let's Encrypt Terms of Service: ✅ Enabled

### 3.3 Configure API Routes

Create custom location rules for the backend API:

1. **In the Proxy Host, go to "Advanced" tab**

2. **Add Custom Nginx Configuration:**
```nginx
# API routes to backend
location /vote {
    proxy_pass http://YOUR_VM_IP:5050;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_cache_bypass $http_upgrade;
}

location /results {
    proxy_pass http://YOUR_VM_IP:5050;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_cache_bypass $http_upgrade;
}

location /reset {
    proxy_pass http://YOUR_VM_IP:5050;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_cache_bypass $http_upgrade;
}
```

Replace `YOUR_VM_IP` with your actual VM IP address or use `localhost`.

## Part 4: DNS Configuration

### 4.1 Add DNS Record

In your domain DNS management (wherever risk-agents.com is managed):

1. Add an A record:
   - Name: `ai`
   - Type: `A`
   - Value: `YOUR_GCP_VM_IP`
   - TTL: `300` (5 minutes)

### 4.2 Verify DNS

```bash
# Test DNS resolution
nslookup ai.risk-agents.com

# Should return your GCP VM IP
```

## Part 5: Testing and Verification

### 5.1 Test the Application

1. **Access the site:** https://ai.risk-agents.com
2. **Test poll functionality:** Try voting in the interactive polls
3. **Check SSL certificate:** Verify the green lock icon in browser

### 5.2 Monitor Logs

```bash
# On your GCP VM
cd /home/gavin_n_slater/ai-lunch-learn

# Watch application logs
sudo docker compose -f docker-compose.gce.yml logs -f

# Check specific service logs
sudo docker compose -f docker-compose.gce.yml logs -f ai-lunch-learn-frontend
sudo docker compose -f docker-compose.gce.yml logs -f ai-lunch-learn-backend
```

## Part 6: Management and Updates

### 6.1 Update the Application

```bash
# SSH into your GCP VM
cd /home/gavin_n_slater/ai-lunch-learn

# Pull latest changes
git pull origin main

# Rebuild and restart containers
sudo docker compose -f docker-compose.gce.yml up -d --build
```

### 6.2 Manage Services

```bash
# Start services
sudo systemctl start ai-lunch-learn

# Stop services
sudo systemctl stop ai-lunch-learn

# Check service status
sudo systemctl status ai-lunch-learn

# View service logs
sudo journalctl -u ai-lunch-learn -f
```

### 6.3 Backup and Restore

```bash
# Backup poll data (if persistent storage is added later)
sudo docker compose -f docker-compose.gce.yml exec ai-lunch-learn-backend \
    curl http://localhost:5050/results > poll_backup.json

# Container cleanup
sudo docker system prune -f
```

## Troubleshooting

### Common Issues

1. **Containers not starting:**
   ```bash
   sudo docker compose -f docker-compose.gce.yml logs
   sudo docker ps -a
   ```

2. **Port conflicts:**
   ```bash
   sudo netstat -tulpn | grep :8080
   sudo netstat -tulpn | grep :5050
   ```

3. **SSL certificate issues:**
   - Check Nginx Proxy Manager logs
   - Verify DNS is pointing to correct IP
   - Ensure ports 80/443 are open in GCP firewall

4. **API not working:**
   - Test backend directly: `curl http://localhost:5050/results`
   - Check Nginx Proxy Manager advanced configuration
   - Verify container networking

### Useful Commands

```bash
# Check Docker containers
sudo docker ps

# Restart specific container
sudo docker compose -f docker-compose.gce.yml restart ai-lunch-learn-frontend

# Access container shell
sudo docker compose -f docker-compose.gce.yml exec ai-lunch-learn-frontend sh

# Check disk usage
sudo docker system df

# View container resource usage
sudo docker stats
```

## Security Considerations

- Containers run as non-root users
- Health checks monitor service availability
- Security headers implemented in both server and proxy
- SSL/TLS encryption for all traffic
- CORS configured for domain-specific access
- Block common exploits enabled in Nginx Proxy Manager

## Performance Optimization

- Static assets cached for 24 hours
- Gzip compression enabled
- Threaded HTTP server for better concurrency
- Container resource limits can be added if needed
- CDN integration possible for global distribution

---

## Quick Reference

**Health Endpoints:**
- Frontend: https://ai.risk-agents.com/health
- Backend: http://YOUR_VM_IP:5050/results

**Management Commands:**
```bash
# Start: sudo docker compose -f docker-compose.gce.yml up -d
# Stop: sudo docker compose -f docker-compose.gce.yml down
# Logs: sudo docker compose -f docker-compose.gce.yml logs -f
# Update: git pull && sudo docker compose -f docker-compose.gce.yml up -d --build
```

**Service Access:**
- Production Site: https://ai.risk-agents.com
- Nginx Proxy Manager: http://YOUR_VM_IP:81
- Direct Frontend: http://YOUR_VM_IP:8080
- Direct Backend: http://YOUR_VM_IP:5050