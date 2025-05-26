// Agent Orchestration Component
class AgentOrchestrationComponent extends BaseComponent {
    constructor(slideData) {
        super(slideData);
        this.initialized = false;
    }

    createContent() {
        const container = document.createElement('div');
        
        // Introduction
        const intro = document.createElement('div');
        intro.className = 'intro mb-lg';
        
        const introText = document.createElement('p');
        introText.className = 'large-text';
        introText.innerHTML = 'The future of AI in the workplace is not just about individual agents, but about orchestrating multiple specialized agents to work together on complex tasks.';
        intro.appendChild(introText);
        
        container.appendChild(intro);
        
        // Orchestration diagram
        const orchestrationSection = document.createElement('div');
        orchestrationSection.className = 'orchestration-section mb-lg';
        
        const orchestrationTitle = document.createElement('h3');
        orchestrationTitle.textContent = 'Agent Orchestration';
        orchestrationSection.appendChild(orchestrationTitle);
        
        const orchestrationDiagram = document.createElement('div');
        orchestrationDiagram.className = 'orchestration-diagram';
        
        // Create the conductor agent
        const conductor = document.createElement('div');
        conductor.className = 'conductor';
        conductor.innerHTML = `
            <div class="agent-icon">
                <i class="fas fa-brain"></i>
            </div>
            <div class="agent-label">Conductor Agent</div>
        `;
        orchestrationDiagram.appendChild(conductor);
        
        // Create the communication canvas
        const canvas = document.createElement('canvas');
        canvas.className = 'communication-canvas';
        orchestrationDiagram.appendChild(canvas);
        
        // Create specialized agents
        const agents = [
            { name: 'Research Agent', icon: 'fas fa-search' },
            { name: 'Data Analysis Agent', icon: 'fas fa-chart-bar' },
            { name: 'Document Agent', icon: 'fas fa-file-alt' },
            { name: 'Code Agent', icon: 'fas fa-code' },
            { name: 'Voice Agent', icon: 'fas fa-microphone' },
            { name: 'Email Agent', icon: 'fas fa-envelope' }
        ];
        
        const agentContainer = document.createElement('div');
        agentContainer.className = 'agent-container';
        
        agents.forEach(agent => {
            const agentNode = document.createElement('div');
            agentNode.className = 'agent-node';
            agentNode.innerHTML = `
                <div class="agent-icon">
                    <i class="${agent.icon}"></i>
                </div>
                <div class="agent-label">${agent.name}</div>
            `;
            agentContainer.appendChild(agentNode);
        });
        
        orchestrationDiagram.appendChild(agentContainer);
        orchestrationSection.appendChild(orchestrationDiagram);
        container.appendChild(orchestrationSection);
        
        // Workflow section
        const workflowSection = document.createElement('div');
        workflowSection.className = 'workflow-section';
        
        const workflowTitle = document.createElement('h3');
        workflowTitle.textContent = 'Example Workflow: Credit Risk Assessment';
        workflowSection.appendChild(workflowTitle);
        
        const workflowSteps = document.createElement('div');
        workflowSteps.className = 'workflow-steps';
        
        const steps = [
            {
                title: 'Request Intake',
                description: 'Voice Agent captures credit request details from a meeting',
                agent: 'Voice Agent'
            },
            {
                title: 'Data Gathering',
                description: 'Research Agent collects relevant financial information',
                agent: 'Research Agent'
            },
            {
                title: 'Analysis',
                description: 'Data Analysis Agent processes financial metrics and identifies risks',
                agent: 'Data Analysis Agent'
            },
            {
                title: 'Documentation',
                description: 'Document Agent prepares the credit assessment report',
                agent: 'Document Agent'
            },
            {
                title: 'Notification',
                description: 'Email Agent sends the report to stakeholders',
                agent: 'Email Agent'
            }
        ];
        
        steps.forEach(step => {
            const workflowStep = document.createElement('div');
            workflowStep.className = 'workflow-step';
            
            const stepTitle = document.createElement('h4');
            stepTitle.textContent = step.title;
            workflowStep.appendChild(stepTitle);
            
            const stepDesc = document.createElement('p');
            stepDesc.textContent = step.description;
            workflowStep.appendChild(stepDesc);
            
            const stepAgent = document.createElement('div');
            stepAgent.className = 'step-agent';
            stepAgent.textContent = step.agent;
            workflowStep.appendChild(stepAgent);
            
            workflowSteps.appendChild(workflowStep);
        });
        
        workflowSection.appendChild(workflowSteps);
        container.appendChild(workflowSection);
        
        // Benefits section
        const benefitsSection = document.createElement('div');
        benefitsSection.className = 'benefits-section mt-lg';
        
        const benefitsTitle = document.createElement('h3');
        benefitsTitle.textContent = 'Benefits of Agent Orchestration';
        benefitsSection.appendChild(benefitsTitle);
        
        const benefitsList = this.createList([
            'Specialized agents can excel at specific tasks',
            'Complex workflows can be automated end-to-end',
            'Agents can work 24/7 without human intervention',
            'Scalable approach to handling multiple parallel processes',
            'Humans can focus on oversight and exception handling'
        ]);
        
        benefitsSection.appendChild(benefitsList);
        container.appendChild(benefitsSection);
        
        return container;
    }

    initialize() {
        if (this.initialized) return;
        
        // Add animation to the orchestration diagram
        const conductor = document.querySelector('.conductor');
        const agentNodes = document.querySelectorAll('.agent-node');
        
        if (conductor && agentNodes.length > 0) {
            // Add a subtle pulse animation to the conductor
            conductor.style.animation = 'pulse 2s infinite';
            
            // Add keyframes for the pulse animation if they don't exist
            if (!document.querySelector('#orchestration-animations')) {
                const style = document.createElement('style');
                style.id = 'orchestration-animations';
                style.textContent = `
                    @keyframes pulse {
                        0% { transform: scale(1); }
                        50% { transform: scale(1.05); }
                        100% { transform: scale(1); }
                    }
                    
                    @keyframes highlight {
                        0% { transform: scale(1); box-shadow: 0 0 0 rgba(12, 77, 162, 0); }
                        50% { transform: scale(1.1); box-shadow: 0 0 10px rgba(12, 77, 162, 0.5); }
                        100% { transform: scale(1); box-shadow: 0 0 0 rgba(12, 77, 162, 0); }
                    }
                `;
                document.head.appendChild(style);
            }
            
            // Add hover effect and click interaction to agent nodes
            agentNodes.forEach((node, index) => {
                // Add hover effect
                node.addEventListener('mouseenter', () => {
                    node.style.transform = 'scale(1.1)';
                    node.style.transition = 'transform 0.3s ease';
                });
                
                node.addEventListener('mouseleave', () => {
                    node.style.transform = 'scale(1)';
                });
                
                // Add click interaction
                node.addEventListener('click', () => {
                    // Remove any existing animations
                    agentNodes.forEach(n => {
                        n.style.animation = '';
                    });
                    
                    // Add highlight animation to the clicked node
                    node.style.animation = 'highlight 2s';
                    
                    // Show a tooltip or information about this agent
                    const agentInfo = this.getAgentInfo(index);
                    this.showAgentInfo(agentInfo, node);
                });
            });
            
            // Simulate communication between agents with lines/pulses
            this.simulateAgentCommunication(agentNodes);
        }
        
        // Add animation to the workflow steps
        const workflowSteps = document.querySelectorAll('.workflow-step');
        if (workflowSteps.length > 0) {
            workflowSteps.forEach((step, index) => {
                // Add a staggered entrance animation
                step.style.opacity = '0';
                step.style.transform = 'translateX(-20px)';
                step.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                
                setTimeout(() => {
                    step.style.opacity = '1';
                    step.style.transform = 'translateX(0)';
                }, 200 * index);
                
                // Add hover effect
                step.addEventListener('mouseenter', () => {
                    step.style.backgroundColor = 'var(--blue-light)';
                    step.style.transition = 'background-color 0.3s ease';
                });
                
                step.addEventListener('mouseleave', () => {
                    step.style.backgroundColor = 'var(--neutral-200)';
                });
            });
        }
        
        this.initialized = true;
    }
    
    // Helper method to get information about each agent
    getAgentInfo(index) {
        const agentInfoList = [
            {
                title: "Requirements Agent",
                description: "Analyzes business needs and translates them into detailed specifications.",
                capabilities: [
                    "Conducts stakeholder interviews",
                    "Identifies key requirements",
                    "Prioritizes features",
                    "Creates user stories"
                ]
            },
            {
                title: "Design Agent",
                description: "Creates visual and interaction designs based on requirements.",
                capabilities: [
                    "Wireframing",
                    "UI component design",
                    "Style guide creation",
                    "Responsive layouts"
                ]
            },
            {
                title: "Coding Agent",
                description: "Transforms designs and specifications into working code.",
                capabilities: [
                    "Multi-language programming",
                    "Code optimization",
                    "API integration",
                    "Database management"
                ]
            },
            {
                title: "Testing Agent",
                description: "Ensures quality through comprehensive testing.",
                capabilities: [
                    "Unit testing",
                    "Integration testing",
                    "Performance testing",
                    "Security validation"
                ]
            },
            {
                title: "Documentation Agent",
                description: "Creates comprehensive documentation for all aspects of the project.",
                capabilities: [
                    "User guides",
                    "Technical documentation",
                    "API references",
                    "Process workflows"
                ]
            },
            {
                title: "Deployment Agent",
                description: "Handles the deployment and maintenance of the application.",
                capabilities: [
                    "CI/CD pipeline setup",
                    "Cloud infrastructure management",
                    "Monitoring configuration",
                    "Scaling optimization"
                ]
            }
        ];
        
        return agentInfoList[index] || {
            title: "Specialized Agent",
            description: "A specialized AI agent focused on a specific task.",
            capabilities: [
                "Task automation",
                "Data processing",
                "Decision support",
                "Integration with other agents"
            ]
        };
    }
    
    // Helper method to show agent information
    showAgentInfo(agentInfo, node) {
        // Remove any existing info panels
        const existingPanel = document.querySelector('.agent-info-panel');
        if (existingPanel) {
            existingPanel.remove();
        }
        
        // Create a new info panel
        const infoPanel = document.createElement('div');
        infoPanel.className = 'agent-info-panel';
        infoPanel.innerHTML = `
            <h4>${agentInfo.title}</h4>
            <p>${agentInfo.description}</p>
            <h5>Capabilities:</h5>
            <ul>
                ${agentInfo.capabilities.map(cap => `<li>${cap}</li>`).join('')}
            </ul>
            <button class="close-btn"><i class="fas fa-times"></i></button>
        `;
        
        // Style the panel
        infoPanel.style.position = 'absolute';
        infoPanel.style.backgroundColor = 'white';
        infoPanel.style.padding = '15px';
        infoPanel.style.borderRadius = '8px';
        infoPanel.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
        infoPanel.style.zIndex = '100';
        infoPanel.style.maxWidth = '300px';
        infoPanel.style.transition = 'opacity 0.3s ease';
        infoPanel.style.opacity = '0';
        
        // Position the panel near the node
        const nodeRect = node.getBoundingClientRect();
        const orchestrationDiagram = document.querySelector('.orchestration-diagram');
        const diagramRect = orchestrationDiagram.getBoundingClientRect();
        
        infoPanel.style.top = `${nodeRect.top - diagramRect.top + 60}px`;
        infoPanel.style.left = `${nodeRect.left - diagramRect.left - 100}px`;
        
        // Add the panel to the diagram
        orchestrationDiagram.appendChild(infoPanel);
        
        // Fade in the panel
        setTimeout(() => {
            infoPanel.style.opacity = '1';
        }, 10);
        
        // Add close button functionality
        const closeBtn = infoPanel.querySelector('.close-btn');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                infoPanel.style.opacity = '0';
                setTimeout(() => {
                    infoPanel.remove();
                }, 300);
            });
        }
    }
    
    // Helper method to simulate communication between agents
    simulateAgentCommunication(agentNodes) {
        // Create a canvas for drawing communication lines
        const orchestrationDiagram = document.querySelector('.orchestration-diagram');
        if (!orchestrationDiagram) return;
        
        const canvas = document.createElement('canvas');
        canvas.className = 'communication-canvas';
        canvas.style.position = 'absolute';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.pointerEvents = 'none';
        canvas.style.zIndex = '50';
        
        orchestrationDiagram.appendChild(canvas);
        
        // Set canvas size to match container
        const resizeCanvas = () => {
            const rect = orchestrationDiagram.getBoundingClientRect();
            canvas.width = rect.width;
            canvas.height = rect.height;
        };
        
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        
        // Periodically draw communication lines between random agents
        const ctx = canvas.getContext('2d');
        
        const drawCommunication = () => {
            // Clear the canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Select two random agents to communicate
            const sourceIndex = Math.floor(Math.random() * agentNodes.length);
            let targetIndex = Math.floor(Math.random() * agentNodes.length);
            while (targetIndex === sourceIndex) {
                targetIndex = Math.floor(Math.random() * agentNodes.length);
            }
            
            const sourceNode = agentNodes[sourceIndex];
            const targetNode = agentNodes[targetIndex];
            
            // Get positions relative to the canvas
            const sourceRect = sourceNode.getBoundingClientRect();
            const targetRect = targetNode.getBoundingClientRect();
            const canvasRect = canvas.getBoundingClientRect();
            
            const sourceX = sourceRect.left + sourceRect.width / 2 - canvasRect.left;
            const sourceY = sourceRect.top + sourceRect.height / 2 - canvasRect.top;
            const targetX = targetRect.left + targetRect.width / 2 - canvasRect.left;
            const targetY = targetRect.top + targetRect.height / 2 - canvasRect.top;
            
            // Draw a line with a moving pulse
            ctx.beginPath();
            ctx.moveTo(sourceX, sourceY);
            ctx.lineTo(targetX, targetY);
            ctx.strokeStyle = 'rgba(12, 77, 162, 0.3)';
            ctx.lineWidth = 2;
            ctx.stroke();
            
            // Draw a pulse that moves along the line
            const time = Date.now() % 2000 / 2000; // 0 to 1 over 2 seconds
            const pulseX = sourceX + (targetX - sourceX) * time;
            const pulseY = sourceY + (targetY - sourceY) * time;
            
            ctx.beginPath();
            ctx.arc(pulseX, pulseY, 5, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(12, 77, 162, 0.8)';
            ctx.fill();
        };
        
        // Start the animation
        const animationInterval = setInterval(drawCommunication, 50);
        
        // Store the interval ID for cleanup
        this.animationInterval = animationInterval;
    }
    
    cleanup() {
        // Clean up any event listeners or resources when navigating away from this slide
        const conductor = document.querySelector('.conductor');
        const agentNodes = document.querySelectorAll('.agent-node');
        const workflowSteps = document.querySelectorAll('.workflow-step');
        
        if (conductor) {
            conductor.style.animation = '';
        }
        
        agentNodes.forEach(node => {
            node.replaceWith(node.cloneNode(true));
        });
        
        workflowSteps.forEach(step => {
            step.replaceWith(step.cloneNode(true));
        });
        
        // Remove the animations style element
        const animationsStyle = document.getElementById('orchestration-animations');
        if (animationsStyle) {
            animationsStyle.remove();
        }
        
        // Remove any info panels
        const infoPanel = document.querySelector('.agent-info-panel');
        if (infoPanel) {
            infoPanel.remove();
        }
        
        // Remove the communication canvas
        const canvas = document.querySelector('.communication-canvas');
        if (canvas) {
            canvas.remove();
        }
        
        // Clear the animation interval
        if (this.animationInterval) {
            clearInterval(this.animationInterval);
        }
        
        // Remove resize event listener
        window.removeEventListener('resize', this.resizeCanvas);
        
        this.initialized = false;
    }
}
