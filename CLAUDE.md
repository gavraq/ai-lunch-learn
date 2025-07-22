# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development Server (Local)
```bash
# Start the presentation server from the dist directory
python3 -m http.server 8080 --directory dist --bind 0.0.0.0
```

### Poll Backend (optional for interactive features)
```bash
# Install dependencies
pip install flask flask-cors

# Run the poll backend
python poll_backend.py
```

### Docker Development
```bash
# Build and run both frontend and backend services
docker compose up --build

# Run in background
docker compose up -d

# View logs
docker compose logs -f

# Stop services
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

# Stop production services
docker compose -f docker-compose.gce.yml down
```

### Verification
```bash
# Check component class names match their registrations
./check_components.sh

# Test Docker containers health
curl http://localhost:8080/health
curl http://localhost:5050/results
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
- Optional Flask backend (`poll_backend.py`) for live polls
- Frontend polls work standalone without backend
- WebSocket-style updates for real-time results

## Deployment

### Production Architecture
The application is deployed on Google Cloud Platform using Docker containers behind Nginx Proxy Manager:

```
Internet → GCP Firewall → Nginx Proxy Manager → Docker Containers
                                ↓                        ↓
                          ai.risk-agents.com    Frontend (port 8080)
                                                Backend (port 5050)
```

### Docker Services
- **Frontend**: Python HTTP server serving static files from `dist/` directory
- **Backend**: Flask API for poll functionality with CORS enabled
- **Network**: Custom bridge network for inter-service communication
- **Health Checks**: Built-in health monitoring for both services

### Nginx Proxy Manager Configuration
Domain: `ai.risk-agents.com`
- Main site → `localhost:8080` (frontend)
- API routes (`/vote`, `/results`, `/reset`) → `localhost:5050` (backend)
- SSL certificate via Let's Encrypt
- Security headers and caching enabled