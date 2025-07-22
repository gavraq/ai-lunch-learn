# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development Server (Local)
```bash
# Start the presentation server from the dist directory
python3 -m http.server 8080 --directory dist --bind 0.0.0.0
```


### Docker Development
```bash
# Build and run frontend service
docker compose up --build

# Run in background
docker compose up -d

# View logs
docker compose logs -f

# Stop service
docker compose down
```

### Docker Production (GCE)
```bash
# Deploy to production (use on GCE VM)
./deploy-gce.sh

# Manual production deployment
docker compose -f docker-compose.gce.yml up -d --build

# View production logs
docker compose -f docker-compose.gce.yml logs -f

# Stop production service
docker compose -f docker-compose.gce.yml down
```

### Verification
```bash
# Check component class names match their registrations
./check_components.sh

# Test Docker container health
curl http://localhost:8081/health
```

## Architecture Overview

This is a component-based web presentation application using vanilla JavaScript. Key architectural elements:

### Component System
- **BaseComponent** (`dist/js/BaseComponent.js`): Foundation class for all slide components
  - Key methods: `render()`, `initialize()`, `cleanup()`
  - Provides utilities for common UI elements
- **Component Registry** (`dist/js/components.js`): Central registration and factory for components
- **40+ Slide Components** in `dist/js/components/slides/`: Each slide is a self-contained component

### Presentation Engine
The main presentation logic (`dist/js/presentation.js`) handles:
- Navigation between slides and sections
- Dynamic component loading and rendering
- State management for current position
- Keyboard shortcuts and UI controls

### Adding New Content
1. Create component in `dist/js/components/slides/YourComponent.js` extending BaseComponent
2. Register in `dist/js/components.js`: `componentRegistry.register('YourComponent', YourComponent)`
3. Add script tag to `dist/index.html`: `<script src="js/components/slides/YourComponent.js"></script>`
4. Configure slide in `dist/js/config.js` presentation structure

### Design System
- CSS variables in `dist/css/styles.css` define colors, fonts, spacing
- Consistent component styling patterns
- Responsive design with mobile support
- Dark theme with primary color: `#00C8A0`

### No Build Process
- Pure HTML/CSS/JS - no transpilation needed
- Serve directly as static files
- External dependencies loaded via CDN (Font Awesome, Google Fonts, Mermaid.js)

### Interactive Features
- Pure frontend presentation with no backend dependencies
- Static file serving for optimal performance

## Deployment

### Production Architecture
The application is deployed on Google Cloud Platform using Docker container behind Nginx Proxy Manager:

```
Internet → GCP Firewall → Nginx Proxy Manager → Docker Container
                                ↓                        ↓
                          ai.risk-agents.com      Frontend (port 8081)
```

### Docker Service
- **Frontend**: Python HTTP server serving static files from `dist/` directory
- **Health Checks**: Built-in health monitoring for service availability
- **Security**: Non-root user execution with security headers

### Nginx Proxy Manager Configuration
Domain: `ai.risk-agents.com`
- Main site → `10.142.0.2:8081` (frontend container)
- SSL certificate via Let's Encrypt
- Security headers and caching enabled