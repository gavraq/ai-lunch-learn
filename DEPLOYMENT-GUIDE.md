# AI Lunch & Learn - Complete Deployment Guide

## Overview

This guide provides complete instructions for deploying the AI Lunch & Learn presentation application on Google Cloud Platform using Docker container, Nginx Proxy Manager, and Let's Encrypt SSL certificates.

## Final Architecture

```
Internet → GCP Firewall → Nginx Proxy Manager → Docker Container
                ↓                                        ↓
           ai.risk-agents.com                      Frontend (8081)
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
# Build and run frontend service
docker compose up --build

# Or run in background
docker compose up -d

# View logs
docker compose logs -f

# Test health endpoint
curl http://localhost:8080/health

# Stop service
docker compose down
```

The application will be available at:
- Frontend: http://localhost:8080

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
- Build and start the container
- Create a systemd service for auto-restart
- Display configuration instructions for Nginx Proxy Manager

### 2.2 Manual Production Deployment

If you prefer manual control:

```bash
# On your GCP VM
cd /home/gavin_n_slater/ai-lunch-learn

# Stop any existing containers
sudo docker compose -f docker-compose.gce.yml down

# Build and start production container
sudo docker compose -f docker-compose.gce.yml build --no-cache
sudo docker compose -f docker-compose.gce.yml up -d

# Check container status
sudo docker compose -f docker-compose.gce.yml ps

# View logs
sudo docker compose -f docker-compose.gce.yml logs -f
```

### 2.3 Verify Deployment

```bash
# Test health endpoint
curl http://localhost:8081/health

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
   - Forward Hostname/IP: `10.142.0.2`
   - Forward Port: `8081`
   - Cache Assets: ✅ Enabled
   - Block Common Exploits: ✅ Enabled

3. **SSL Tab:**
   - SSL Certificate: Request a new SSL Certificate
   - Force SSL: ✅ Enabled
   - Email Address: Your email for Let's Encrypt
   - I Agree to the Let's Encrypt Terms of Service: ✅ Enabled

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
2. **Verify SSL certificate:** Confirm the green lock icon in browser

### 5.2 Monitor Logs

```bash
# On your GCP VM
cd /home/gavin_n_slater/ai-lunch-learn

# Watch application logs
sudo docker compose -f docker-compose.gce.yml logs -f

# Check service logs
sudo docker compose -f docker-compose.gce.yml logs ai-lunch-learn-frontend
```

## Part 6: Management and Updates

### 6.1 Update the Application

```bash
# SSH into your GCP VM
cd /home/gavin_n_slater/ai-lunch-learn

# Pull latest changes
git pull origin main

# Rebuild and restart container
sudo docker compose -f docker-compose.gce.yml up -d --build
```

### 6.2 Manage Service

```bash
# Start service
sudo systemctl start ai-lunch-learn

# Stop service
sudo systemctl stop ai-lunch-learn

# Check service status
sudo systemctl status ai-lunch-learn

# View service logs
sudo journalctl -u ai-lunch-learn -f
```

### 6.3 Container Management

```bash
# Container cleanup
sudo docker system prune -f

# Check resource usage
sudo docker stats
```

## Troubleshooting

### Common Issues

1. **Container not starting:**
   ```bash
   sudo docker compose -f docker-compose.gce.yml logs
   sudo docker ps -a
   ```

2. **Port conflicts:**
   ```bash
   sudo netstat -tulpn | grep :8081
   ```

3. **SSL certificate issues:**
   - Check Nginx Proxy Manager logs
   - Verify DNS is pointing to correct IP
   - Ensure ports 80/443 are open in GCP firewall

### Useful Commands

```bash
# Check Docker container
sudo docker ps

# Restart container
sudo docker compose -f docker-compose.gce.yml restart ai-lunch-learn-frontend

# Access container shell
sudo docker compose -f docker-compose.gce.yml exec ai-lunch-learn-frontend sh

# Check disk usage
sudo docker system df
```

## Security Considerations

- Container runs as non-root user
- Health checks monitor service availability
- Security headers implemented in server and proxy
- SSL/TLS encryption for all traffic
- Block common exploits enabled in Nginx Proxy Manager

## Performance Optimization

- Static assets cached for 24 hours
- Gzip compression enabled
- Threaded HTTP server for better concurrency
- Container resource limits can be added if needed
- CDN integration possible for global distribution

---

## Quick Reference

**Health Endpoint:**
- Frontend: https://ai.risk-agents.com/health

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
- Direct Frontend: http://YOUR_VM_IP:8081