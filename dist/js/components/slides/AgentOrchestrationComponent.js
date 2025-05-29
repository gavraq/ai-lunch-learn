// Agent Orchestration Component
class AgentOrchestrationComponent extends BaseComponent {
    constructor(slideData) {
        super(slideData);
        this.initialized = false;
    }
    
    createContent() {
        const container = document.createElement('div');
        container.className = 'agent-orchestration-container';
        
        // Title section with visual impact
        const titleSection = document.createElement('div');
        titleSection.className = 'title-section';
        
        const title = document.createElement('h2');
        title.className = 'slide-title';
        title.textContent = 'Agent Orchestration';
        titleSection.appendChild(title);
        
        container.appendChild(titleSection);
        
        // Introduction with visual emphasis
        const introSection = document.createElement('div');
        introSection.className = 'intro-section';
        
        const introCard = document.createElement('div');
        introCard.className = 'intro-card';
        
        const introIcon = document.createElement('div');
        introIcon.className = 'intro-icon';
        introIcon.innerHTML = '<i class="fas fa-brain"></i>';
        introCard.appendChild(introIcon);
        
        const introContent = document.createElement('div');
        introContent.className = 'intro-content';
        
        const introParagraph = document.createElement('p');
        introParagraph.className = 'intro-text';
        introParagraph.innerHTML = 'The future of AI in the workplace is not just about individual agents, but about orchestrating multiple specialized agents to work together on complex tasks. This approach allows each agent to focus on what it does best while a conductor agent coordinates their efforts.';
        introContent.appendChild(introParagraph);
        
        introCard.appendChild(introContent);
        introSection.appendChild(introCard);
        container.appendChild(introSection);
        
        // Orchestration Diagram with visual representation
        const diagramSection = document.createElement('div');
        diagramSection.className = 'diagram-section';
        
        const diagramTitle = document.createElement('h3');
        diagramTitle.className = 'section-title';
        diagramTitle.textContent = 'Agent Orchestration Model';
        diagramSection.appendChild(diagramTitle);
        
        const diagramCard = document.createElement('div');
        diagramCard.className = 'diagram-card';
        
        // Create the orchestration diagram
        const orchestrationDiagram = document.createElement('div');
        orchestrationDiagram.className = 'orchestration-diagram';
        
        // Create the conductor agent
        const conductor = document.createElement('div');
        conductor.className = 'conductor-agent';
        conductor.innerHTML = `
            <div class="agent-icon">
                <i class="fas fa-brain"></i>
            </div>
            <div class="agent-label">Conductor Agent</div>
        `;
        orchestrationDiagram.appendChild(conductor);
        
        // Create the specialized agents container
        const agentsContainer = document.createElement('div');
        agentsContainer.className = 'agents-container';
        
        // Create specialized agents
        const agents = [
            { name: 'Research Agent', icon: 'fas fa-search', color: '#0c4da2' },
            { name: 'Data Analysis Agent', icon: 'fas fa-chart-bar', color: '#e31937' },
            { name: 'Document Agent', icon: 'fas fa-file-alt', color: '#4CAF50' },
            { name: 'Code Agent', icon: 'fas fa-code', color: '#FF9800' },
            { name: 'Voice Agent', icon: 'fas fa-microphone', color: '#9C27B0' },
            { name: 'Email Agent', icon: 'fas fa-envelope', color: '#00BCD4' }
        ];
        
        agents.forEach(agent => {
            const agentNode = document.createElement('div');
            agentNode.className = 'agent-node';
            agentNode.style.borderColor = agent.color;
            
            const agentIcon = document.createElement('div');
            agentIcon.className = 'agent-icon';
            agentIcon.style.color = agent.color;
            agentIcon.innerHTML = `<i class="${agent.icon}"></i>`;
            agentNode.appendChild(agentIcon);
            
            const agentLabel = document.createElement('div');
            agentLabel.className = 'agent-label';
            agentLabel.textContent = agent.name;
            agentNode.appendChild(agentLabel);
            
            agentsContainer.appendChild(agentNode);
        });
        
        orchestrationDiagram.appendChild(agentsContainer);
        diagramCard.appendChild(orchestrationDiagram);
        
        // Create the communication lines canvas
        const canvasContainer = document.createElement('div');
        canvasContainer.className = 'canvas-container';
        
        const canvas = document.createElement('canvas');
        canvas.className = 'communication-canvas';
        canvas.width = 800;
        canvas.height = 600;
        canvasContainer.appendChild(canvas);
        
        diagramCard.appendChild(canvasContainer);
        diagramSection.appendChild(diagramCard);
        container.appendChild(diagramSection);
        
        // Workflow Example with visual timeline
        const workflowSection = document.createElement('div');
        workflowSection.className = 'workflow-section';
        
        const workflowTitle = document.createElement('h3');
        workflowTitle.className = 'section-title';
        workflowTitle.textContent = 'Example Workflow: Credit Risk Assessment';
        workflowSection.appendChild(workflowTitle);
        
        const workflowCard = document.createElement('div');
        workflowCard.className = 'workflow-card';
        
        const workflowSteps = document.createElement('div');
        workflowSteps.className = 'workflow-steps';
        
        const steps = [
            {
                title: 'Request Intake',
                description: 'Voice Agent captures credit request details from a meeting',
                agent: 'Voice Agent',
                icon: 'fa-microphone',
                color: '#9C27B0'
            },
            {
                title: 'Data Gathering',
                description: 'Research Agent collects relevant financial information',
                agent: 'Research Agent',
                icon: 'fa-search',
                color: '#0c4da2'
            },
            {
                title: 'Analysis',
                description: 'Data Analysis Agent processes financial metrics and identifies risks',
                agent: 'Data Analysis Agent',
                icon: 'fa-chart-bar',
                color: '#e31937'
            },
            {
                title: 'Documentation',
                description: 'Document Agent prepares the credit assessment report',
                agent: 'Document Agent',
                icon: 'fa-file-alt',
                color: '#4CAF50'
            },
            {
                title: 'Notification',
                description: 'Email Agent sends the report to stakeholders',
                agent: 'Email Agent',
                icon: 'fa-envelope',
                color: '#00BCD4'
            }
        ];
        
        steps.forEach((step, index) => {
            const stepItem = document.createElement('div');
            stepItem.className = 'workflow-step';
            
            const stepNumber = document.createElement('div');
            stepNumber.className = 'step-number';
            stepNumber.textContent = index + 1;
            stepItem.appendChild(stepNumber);
            
            const stepContent = document.createElement('div');
            stepContent.className = 'step-content';
            
            const stepHeader = document.createElement('div');
            stepHeader.className = 'step-header';
            
            const stepTitle = document.createElement('h4');
            stepTitle.className = 'step-title';
            stepTitle.textContent = step.title;
            stepHeader.appendChild(stepTitle);
            
            const stepAgent = document.createElement('div');
            stepAgent.className = 'step-agent';
            stepAgent.style.backgroundColor = step.color;
            stepAgent.innerHTML = `<i class="fas ${step.icon}"></i> ${step.agent}`;
            stepHeader.appendChild(stepAgent);
            
            stepContent.appendChild(stepHeader);
            
            const stepDescription = document.createElement('p');
            stepDescription.className = 'step-description';
            stepDescription.textContent = step.description;
            stepContent.appendChild(stepDescription);
            
            stepItem.appendChild(stepContent);
            workflowSteps.appendChild(stepItem);
        });
        
        workflowCard.appendChild(workflowSteps);
        workflowSection.appendChild(workflowCard);
        container.appendChild(workflowSection);
        
        // Benefits with visual cards
        const benefitsSection = document.createElement('div');
        benefitsSection.className = 'benefits-section';
        
        const benefitsTitle = document.createElement('h3');
        benefitsTitle.className = 'section-title';
        benefitsTitle.textContent = 'Benefits of Agent Orchestration';
        benefitsSection.appendChild(benefitsTitle);
        
        const benefitsGrid = document.createElement('div');
        benefitsGrid.className = 'benefits-grid';
        
        const benefits = [
            {
                icon: 'fa-puzzle-piece',
                title: 'Specialized Expertise',
                description: 'Each agent can excel at specific tasks rather than being a jack-of-all-trades'
            },
            {
                icon: 'fa-cogs',
                title: 'End-to-End Automation',
                description: 'Complex workflows can be automated across multiple domains and functions'
            },
            {
                icon: 'fa-clock',
                title: '24/7 Operation',
                description: 'Agents can work continuously without human intervention'
            },
            {
                icon: 'fa-expand-arrows-alt',
                title: 'Scalability',
                description: 'Handle multiple parallel processes simultaneously'
            },
            {
                icon: 'fa-user-shield',
                title: 'Human Oversight',
                description: 'People can focus on exception handling and strategic decisions'
            },
            {
                icon: 'fa-project-diagram',
                title: 'Complex Problem Solving',
                description: 'Tackle multi-faceted challenges that single agents struggle with'
            }
        ];
        
        benefits.forEach(benefit => {
            const benefitCard = document.createElement('div');
            benefitCard.className = 'benefit-card';
            
            const benefitIcon = document.createElement('div');
            benefitIcon.className = 'benefit-icon';
            benefitIcon.innerHTML = `<i class="fas ${benefit.icon}"></i>`;
            benefitCard.appendChild(benefitIcon);
            
            const benefitTitle = document.createElement('h4');
            benefitTitle.className = 'benefit-title';
            benefitTitle.textContent = benefit.title;
            benefitCard.appendChild(benefitTitle);
            
            const benefitDescription = document.createElement('p');
            benefitDescription.className = 'benefit-description';
            benefitDescription.textContent = benefit.description;
            benefitCard.appendChild(benefitDescription);
            
            benefitsGrid.appendChild(benefitCard);
        });
        
        benefitsSection.appendChild(benefitsGrid);
        container.appendChild(benefitsSection);
        
        // Add CSS for this component
        const style = document.createElement('style');
        style.textContent = `
            .agent-orchestration-container {
                max-width: 1200px;
                margin: 0 auto;
                padding: 1.5rem;
                font-family: 'Inter', sans-serif;
                color: #323F4B;
            }
            
            .title-section {
                margin-bottom: 2rem;
                text-align: center;
            }
            
            .slide-title {
                font-size: 1.875rem;
                font-weight: 700;
                color: #0c4da2;
                margin: 0;
                line-height: 2.25rem;
                position: relative;
                display: inline-block;
            }
            
            .slide-title:after {
                content: '';
                position: absolute;
                bottom: -10px;
                left: 25%;
                width: 50%;
                height: 4px;
                background-color: #e31937;
                border-radius: 2px;
            }
            
            .section-title {
                font-size: 1.5rem;
                font-weight: 700;
                color: #0c4da2;
                margin-top: 0;
                margin-bottom: 1.5rem;
            }
            
            .intro-section {
                margin-bottom: 2.5rem;
            }
            
            .intro-card {
                background-color: #f8fafc;
                border-radius: 0.5rem;
                padding: 1.5rem;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                display: flex;
                align-items: flex-start;
                border-left: 4px solid #0c4da2;
            }
            
            .intro-icon {
                font-size: 2rem;
                color: #0c4da2;
                margin-right: 1.5rem;
                flex-shrink: 0;
            }
            
            .intro-content {
                flex: 1;
            }
            
            .intro-text {
                font-size: 1rem;
                line-height: 1.6;
                color: #4A5568;
                margin: 0;
            }
            
            .diagram-section {
                margin-bottom: 2.5rem;
                position: relative;
            }
            
            .diagram-card {
                background-color: white;
                border-radius: 0.5rem;
                padding: 1.5rem;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                border: 1px solid #E4E7EB;
                position: relative;
                min-height: 400px;
            }
            
            .orchestration-diagram {
                position: relative;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                z-index: 10;
            }
            
            .conductor-agent {
                background-color: white;
                border-radius: 0.5rem;
                padding: 1rem;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                border: 2px solid #0c4da2;
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-bottom: 3rem;
                position: relative;
                z-index: 20;
                width: 150px;
            }
            
            .conductor-agent:after {
                content: '';
                position: absolute;
                bottom: -20px;
                left: 50%;
                transform: translateX(-50%);
                width: 0;
                height: 0;
                border-left: 10px solid transparent;
                border-right: 10px solid transparent;
                border-top: 20px solid #0c4da2;
            }
            
            .agents-container {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                gap: 1.5rem;
                width: 100%;
            }
            
            .agent-node {
                background-color: white;
                border-radius: 0.5rem;
                padding: 1rem;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                border: 2px solid #CBD2D9;
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 120px;
                transition: transform 0.2s ease-out, box-shadow 0.2s ease-out;
                position: relative;
                z-index: 20;
            }
            
            .agent-node:hover {
                transform: translateY(-5px);
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            
            .agent-icon {
                font-size: 1.5rem;
                margin-bottom: 0.5rem;
            }
            
            .agent-label {
                font-size: 0.875rem;
                font-weight: 600;
                text-align: center;
                color: #323F4B;
            }
            
            .canvas-container {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 5;
            }
            
            .communication-canvas {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
            }
            
            .workflow-section {
                margin-bottom: 2.5rem;
            }
            
            .workflow-card {
                background-color: white;
                border-radius: 0.5rem;
                padding: 1.5rem;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                border: 1px solid #E4E7EB;
            }
            
            .workflow-steps {
                display: flex;
                flex-direction: column;
                gap: 1.5rem;
            }
            
            .workflow-step {
                display: flex;
                align-items: flex-start;
                background-color: #f8fafc;
                border-radius: 0.5rem;
                padding: 1rem;
                transition: transform 0.2s ease-out, background-color 0.2s ease-out;
            }
            
            .workflow-step:hover {
                transform: translateY(-5px);
                background-color: #EBF8FF;
            }
            
            .step-number {
                width: 2rem;
                height: 2rem;
                border-radius: 50%;
                background-color: #0c4da2;
                color: white;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: 600;
                margin-right: 1rem;
                flex-shrink: 0;
            }
            
            .step-content {
                flex: 1;
            }
            
            .step-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 0.5rem;
            }
            
            .step-title {
                font-size: 1.125rem;
                font-weight: 600;
                color: #323F4B;
                margin: 0;
            }
            
            .step-agent {
                font-size: 0.75rem;
                color: white;
                padding: 0.25rem 0.5rem;
                border-radius: 1rem;
                display: flex;
                align-items: center;
                gap: 0.5rem;
            }
            
            .step-description {
                font-size: 0.875rem;
                color: #4A5568;
                margin: 0;
            }
            
            .benefits-section {
                margin-bottom: 1.5rem;
            }
            
            .benefits-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 1.5rem;
            }
            
            .benefit-card {
                background-color: white;
                border-radius: 0.5rem;
                padding: 1.5rem;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                border: 1px solid #E4E7EB;
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
                transition: transform 0.2s ease-out;
            }
            
            .benefit-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            
            .benefit-icon {
                width: 3rem;
                height: 3rem;
                border-radius: 50%;
                background-color: rgba(12, 77, 162, 0.1);
                color: #0c4da2;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.5rem;
                margin-bottom: 1rem;
            }
            
            .benefit-title {
                font-size: 1.125rem;
                font-weight: 600;
                color: #323F4B;
                margin: 0 0 0.75rem 0;
            }
            
            .benefit-description {
                font-size: 0.875rem;
                color: #4A5568;
                line-height: 1.5;
                margin: 0;
            }
            
            @media (max-width: 768px) {
                .intro-card {
                    flex-direction: column;
                }
                
                .intro-icon {
                    margin-right: 0;
                    margin-bottom: 1rem;
                }
                
                .step-header {
                    flex-direction: column;
                    align-items: flex-start;
                }
                
                .step-agent {
                    margin-top: 0.5rem;
                }
            }
        `;
        container.appendChild(style);
        
        return container;
    }
    
    initialize() {
        if (this.initialized) return;
        
        // Draw communication lines between agents
        const drawCommunicationLines = () => {
            const canvas = document.querySelector('.communication-canvas');
            if (!canvas) return;
            
            const ctx = canvas.getContext('2d');
            const conductor = document.querySelector('.conductor-agent');
            const agents = document.querySelectorAll('.agent-node');
            
            // Set canvas dimensions to match container
            const diagramCard = document.querySelector('.diagram-card');
            if (diagramCard) {
                const rect = diagramCard.getBoundingClientRect();
                canvas.width = rect.width;
                canvas.height = rect.height;
            }
            
            // Clear the canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            if (conductor && agents.length > 0) {
                const conductorRect = conductor.getBoundingClientRect();
                const canvasRect = canvas.getBoundingClientRect();
                
                // Calculate conductor position relative to canvas
                const conductorX = conductorRect.left + conductorRect.width / 2 - canvasRect.left;
                const conductorY = conductorRect.top + conductorRect.height / 2 - canvasRect.top;
                
                // Draw lines from conductor to each agent
                agents.forEach((agent, index) => {
                    const agentRect = agent.getBoundingClientRect();
                    const agentX = agentRect.left + agentRect.width / 2 - canvasRect.left;
                    const agentY = agentRect.top + agentRect.height / 2 - canvasRect.top;
                    
                    // Draw line
                    ctx.beginPath();
                    ctx.moveTo(conductorX, conductorY);
                    ctx.lineTo(agentX, agentY);
                    ctx.strokeStyle = 'rgba(12, 77, 162, 0.3)';
                    ctx.lineWidth = 2;
                    ctx.stroke();
                    
                    // Draw pulse that moves along the line
                    const time = (Date.now() + index * 500) % 3000 / 3000; // 0 to 1 over 3 seconds, staggered
                    const pulseX = conductorX + (agentX - conductorX) * time;
                    const pulseY = conductorY + (agentY - conductorY) * time;
                    
                    ctx.beginPath();
                    ctx.arc(pulseX, pulseY, 4, 0, Math.PI * 2);
                    ctx.fillStyle = 'rgba(12, 77, 162, 0.8)';
                    ctx.fill();
                });
            }
        };
        
        // Start animation
        this.animationInterval = setInterval(drawCommunicationLines, 50);
        
        // Handle window resize
        this.handleResize = () => {
            drawCommunicationLines();
        };
        
        window.addEventListener('resize', this.handleResize);
        
        // Add hover effects to agent nodes
        const agentNodes = document.querySelectorAll('.agent-node');
        agentNodes.forEach(node => {
            node.addEventListener('mouseenter', () => {
                node.style.transform = 'translateY(-5px) scale(1.05)';
                node.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.1)';
                node.style.transition = 'all 0.3s ease';
                node.style.zIndex = '30';
            });
            
            node.addEventListener('mouseleave', () => {
                node.style.transform = '';
                node.style.boxShadow = '';
                node.style.zIndex = '20';
            });
        });
        
        // Add animation to workflow steps
        const workflowSteps = document.querySelectorAll('.workflow-step');
        workflowSteps.forEach((step, index) => {
            // Add staggered entrance animation
            step.style.opacity = '0';
            step.style.transform = 'translateX(-20px)';
            
            setTimeout(() => {
                step.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                step.style.opacity = '1';
                step.style.transform = 'translateX(0)';
            }, 200 * index);
        });
        
        this.initialized = true;
    }
    
    cleanup() {
        // Clean up animation interval
        if (this.animationInterval) {
            clearInterval(this.animationInterval);
        }
        
        // Remove resize event listener
        if (this.handleResize) {
            window.removeEventListener('resize', this.handleResize);
        }
        
        // Clean up event listeners
        const agentNodes = document.querySelectorAll('.agent-node');
        agentNodes.forEach(node => {
            node.replaceWith(node.cloneNode(true));
        });
        
        this.initialized = false;
    }
}
