// Agentic World Component
class AgenticWorldComponent extends BaseComponent {
    constructor(slideData) {
        super(slideData);
        console.log('AgenticWorldComponent constructor called');
    }
    
    createContent() {
        console.log('AgenticWorldComponent createContent called');
        const container = document.createElement('div');
        container.className = 'agentic-world-container';
        
        // Main message
        const mainMessage = document.createElement('div');
        mainMessage.className = 'main-message mb-lg';
        
        const quote = document.createElement('blockquote');
        quote.className = 'quote';
        quote.innerHTML = '<p class="large-text">"Right now, you\'re AI users. In 2 years, you could be managing teams of AI agents!"</p>';
        mainMessage.appendChild(quote);
        container.appendChild(mainMessage);
        
        // What is an Agent section
        const agentSection = document.createElement('div');
        agentSection.className = 'agent-section mb-lg';
        
        const agentTitle = document.createElement('h3');
        agentTitle.textContent = 'What exactly is an Agent?';
        agentSection.appendChild(agentTitle);
        
        const agentDefinition = document.createElement('p');
        agentDefinition.innerHTML = '<strong>AI Agents</strong>: Autonomous AI assistants that can perform multi-step tasks';
        agentSection.appendChild(agentDefinition);
        
        const agentExample = document.createElement('p');
        agentExample.innerHTML = '<strong>Example</strong>: "An agent that monitors risk limits, drafts exception reports, and schedules approval meetings"';
        agentSection.appendChild(agentExample);
        
        container.appendChild(agentSection);
        
        // Resources section
        const resourcesSection = document.createElement('div');
        resourcesSection.className = 'resources-section mb-lg';
        
        const resourcesTitle = document.createElement('h3');
        resourcesTitle.textContent = 'Research Papers on AI Agents:';
        resourcesSection.appendChild(resourcesTitle);
        
        const resourcesList = document.createElement('ul');
        resourcesList.className = 'resources-list';
        
        const resources = [
            {
                name: 'Anthropic',
                url: 'https://www.anthropic.com/engineering/building-effective-agents',
                description: 'Building Effective Agents'
            },
            {
                name: 'Google',
                url: 'https://ia600601.us.archive.org/15/items/google-ai-agents-whitepaper/Newwhitepaper_Agents.pdf',
                description: 'AI Agents Whitepaper'
            },
            {
                name: 'OpenAI',
                url: 'https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf',
                description: 'A Practical Guide to Building Agents'
            }
        ];
        
        resources.forEach(resource => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<strong>${resource.name}</strong>: <a href="${resource.url}" target="_blank">${resource.description}</a>`;
            resourcesList.appendChild(listItem);
        });
        
        resourcesSection.appendChild(resourcesList);
        container.appendChild(resourcesSection);
        
        // Agent visualization
        const agentVisualization = document.createElement('div');
        agentVisualization.className = 'agent-visualization mb-lg';
        
        const visualizationTitle = document.createElement('h3');
        visualizationTitle.textContent = 'How Agents Work:';
        agentVisualization.appendChild(visualizationTitle);
        
        const visualizationContent = document.createElement('div');
        visualizationContent.className = 'visualization-content';
        visualizationContent.innerHTML = `
            <div class="agent-diagram">
                <div class="agent-node agent-planner">
                    <i class="fas fa-brain"></i>
                    <span>Planning</span>
                </div>
                <div class="agent-arrow">→</div>
                <div class="agent-node agent-executor">
                    <i class="fas fa-cogs"></i>
                    <span>Execution</span>
                </div>
                <div class="agent-arrow">→</div>
                <div class="agent-node agent-observer">
                    <i class="fas fa-eye"></i>
                    <span>Observation</span>
                </div>
                <div class="agent-arrow">→</div>
                <div class="agent-node agent-reflector">
                    <i class="fas fa-sync"></i>
                    <span>Reflection</span>
                </div>
            </div>
            <p class="agent-caption">Agents follow a continuous loop of planning, execution, observation, and reflection.</p>
        `;
        agentVisualization.appendChild(visualizationContent);
        container.appendChild(agentVisualization);
        
        // Future vision
        const futureVision = document.createElement('div');
        futureVision.className = 'future-vision';
        
        const futureTitle = document.createElement('h3');
        futureTitle.textContent = 'The Future of Work with AI Agents:';
        futureVision.appendChild(futureTitle);
        
        const futureContent = document.createElement('p');
        futureContent.innerHTML = 'This may seem far-fetched now, but I am going to walk you through an example of how this might actually work and at the end we can see if that statement is just a pipe-dream or a future possibility.';
        futureVision.appendChild(futureContent);
        
        container.appendChild(futureVision);
        
        // Add CSS for this component
        const style = document.createElement('style');
        style.textContent = `
            .quote {
                border-left: 4px solid var(--standard-bank-blue);
                padding-left: var(--space-lg);
                font-style: italic;
            }
            
            .agent-diagram {
                display: flex;
                align-items: center;
                justify-content: center;
                margin: var(--space-lg) 0;
                flex-wrap: wrap;
            }
            
            .agent-node {
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: var(--space-md);
                background-color: var(--blue-light);
                border-radius: 8px;
                width: 100px;
                height: 100px;
                justify-content: center;
            }
            
            .agent-node i {
                font-size: 2rem;
                color: var(--standard-bank-blue);
                margin-bottom: var(--space-xs);
            }
            
            .agent-arrow {
                font-size: 1.5rem;
                margin: 0 var(--space-sm);
                color: var(--neutral-600);
            }
            
            .agent-caption {
                text-align: center;
                font-size: 0.875rem;
                color: var(--neutral-700);
            }
            
            @media (max-width: 768px) {
                .agent-diagram {
                    flex-direction: column;
                }
                
                .agent-arrow {
                    transform: rotate(90deg);
                    margin: var(--space-sm) 0;
                }
            }
        `;
        container.appendChild(style);
        
        return container;
    }
}
