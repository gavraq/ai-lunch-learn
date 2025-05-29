// Deep Research Component
class DeepResearchComponent extends BaseComponent {
    constructor(slideData) {
        super(slideData);
        this.initialized = false;
    }
    
    createContent() {
        const container = document.createElement('div');
        container.className = 'deep-research-container';
        
        // Title section with visual impact
        const titleSection = document.createElement('div');
        titleSection.className = 'title-section';
        
        const title = document.createElement('h2');
        title.className = 'slide-title';
        title.textContent = 'Step 1: Do some Deep Research';
        titleSection.appendChild(title);
        
        container.appendChild(titleSection);
        
        // Two-column layout for main content
        const mainContent = document.createElement('div');
        mainContent.className = 'main-content';
        
        // Left column: What is Deep Research
        const whatIsSection = document.createElement('div');
        whatIsSection.className = 'what-is-section';
        
        const whatIsCard = document.createElement('div');
        whatIsCard.className = 'info-card';
        
        const whatIsTitle = document.createElement('h3');
        whatIsTitle.className = 'section-title';
        whatIsTitle.textContent = 'What is Deep Research?';
        whatIsCard.appendChild(whatIsTitle);
        
        const whatIsContent = document.createElement('p');
        whatIsContent.className = 'info-text';
        whatIsContent.innerHTML = 'Many of the new AI models have the ability to do <strong>Deep Research</strong> which puts the model into "thinking mode" - the difference is instead of just sending the first version of the output, it performs multiple versions of the request and evaluates the alternatives to refine the final output.';
        whatIsCard.appendChild(whatIsContent);
        
        const reinforcementContent = document.createElement('p');
        reinforcementContent.className = 'info-text';
        reinforcementContent.innerHTML = 'This is known as <strong>reinforcement learning</strong> and has recently become very popular after it was used by DeepSeek, a new Chinese LLM that gained popularity recently, showing the improvements that can be made through re-inforcement learning.';
        whatIsCard.appendChild(reinforcementContent);
        
        whatIsSection.appendChild(whatIsCard);
        mainContent.appendChild(whatIsSection);
        
        // Right column: Benefits of Deep Research
        const benefitsSection = document.createElement('div');
        benefitsSection.className = 'benefits-section';
        
        const benefitsCard = document.createElement('div');
        benefitsCard.className = 'info-card benefits-card';
        
        const benefitsTitle = document.createElement('h3');
        benefitsTitle.className = 'section-title';
        benefitsTitle.textContent = 'Benefits for Prototyping:';
        benefitsCard.appendChild(benefitsTitle);
        
        const benefitsList = document.createElement('ul');
        benefitsList.className = 'benefits-list';
        
        const benefits = [
            'More thorough exploration of solution space',
            'Higher quality initial designs',
            'Reduced need for major revisions later',
            'Better understanding of technical constraints',
            'More comprehensive consideration of alternatives'
        ];
        
        benefits.forEach(benefit => {
            const benefitItem = document.createElement('li');
            benefitItem.className = 'benefit-item';
            
            const checkIcon = document.createElement('span');
            checkIcon.className = 'check-icon';
            checkIcon.innerHTML = '<i class="fas fa-check-circle"></i>';
            benefitItem.appendChild(checkIcon);
            
            const benefitText = document.createElement('span');
            benefitText.className = 'benefit-text';
            benefitText.textContent = benefit;
            benefitItem.appendChild(benefitText);
            
            benefitsList.appendChild(benefitItem);
        });
        
        benefitsCard.appendChild(benefitsList);
        benefitsSection.appendChild(benefitsCard);
        mainContent.appendChild(benefitsSection);
        
        container.appendChild(mainContent);
        
        // Visualization of Deep Research Process with animated styling
        const visualizationSection = document.createElement('div');
        visualizationSection.className = 'visualization-section';
        
        const visualizationTitle = document.createElement('h3');
        visualizationTitle.className = 'section-title';
        visualizationTitle.textContent = 'How Deep Research Works:';
        visualizationSection.appendChild(visualizationTitle);
        
        // Create a visual representation of deep research with modern styling
        const visualizationContent = document.createElement('div');
        visualizationContent.className = 'research-visualization';
        
        const researchSteps = [
            { name: 'Initial Prompt', icon: 'fa-question-circle', description: 'User provides a detailed prompt with requirements', color: '#4299E1' },
            { name: 'Multiple Drafts', icon: 'fa-brain', description: 'AI generates several different approaches internally', color: '#805AD5' },
            { name: 'Self-Evaluation', icon: 'fa-balance-scale', description: 'AI evaluates each draft against requirements', color: '#DD6B20' },
            { name: 'Refinement', icon: 'fa-edit', description: 'AI refines the best approach based on evaluation', color: '#E53E3E' },
            { name: 'Final Output', icon: 'fa-check-circle', description: 'Optimized result delivered to the user', color: '#38B2AC' }
        ];
        
        const researchFlow = document.createElement('div');
        researchFlow.className = 'research-flow';
        
        researchSteps.forEach((step, index) => {
            // Create step node
            const stepNode = document.createElement('div');
            stepNode.className = 'research-node';
            
            const stepIcon = document.createElement('div');
            stepIcon.className = 'node-icon';
            stepIcon.style.backgroundColor = step.color;
            stepIcon.innerHTML = `<i class="fas ${step.icon}"></i>`;
            stepNode.appendChild(stepIcon);
            
            const stepContent = document.createElement('div');
            stepContent.className = 'node-content';
            
            const stepName = document.createElement('div');
            stepName.className = 'node-name';
            stepName.textContent = step.name;
            stepContent.appendChild(stepName);
            
            const stepDescription = document.createElement('div');
            stepDescription.className = 'node-description';
            stepDescription.textContent = step.description;
            stepContent.appendChild(stepDescription);
            
            stepNode.appendChild(stepContent);
            researchFlow.appendChild(stepNode);
            
            // Add connector if not the last step
            if (index < researchSteps.length - 1) {
                const connector = document.createElement('div');
                connector.className = 'flow-connector';
                connector.innerHTML = '<i class="fas fa-chevron-right"></i>';
                researchFlow.appendChild(connector);
            }
        });
        
        visualizationContent.appendChild(researchFlow);
        visualizationSection.appendChild(visualizationContent);
        
        container.appendChild(visualizationSection);
        
        // Example reference with visual callout
        const exampleSection = document.createElement('div');
        exampleSection.className = 'example-section';
        
        const exampleCard = document.createElement('div');
        exampleCard.className = 'example-card';
        
        const exampleIcon = document.createElement('div');
        exampleIcon.className = 'example-icon';
        exampleIcon.innerHTML = '<i class="fas fa-file-alt"></i>';
        exampleCard.appendChild(exampleIcon);
        
        const exampleContent = document.createElement('div');
        exampleContent.className = 'example-content';
        
        const exampleTitle = document.createElement('h3');
        exampleTitle.className = 'example-title';
        exampleTitle.textContent = 'Example Document:';
        exampleContent.appendChild(exampleTitle);
        
        const exampleText = document.createElement('p');
        exampleText.className = 'example-text';
        exampleText.innerHTML = 'See example in project folder: <strong>Credit Workflow System - Deep Research Prompt</strong>';
        exampleContent.appendChild(exampleText);
        
        exampleCard.appendChild(exampleContent);
        exampleSection.appendChild(exampleCard);
        
        container.appendChild(exampleSection);
        
        // Add CSS for this component
        const style = document.createElement('style');
        style.textContent = `
            .deep-research-container {
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
                margin-bottom: 1.25rem;
            }
            
            .main-content {
                display: flex;
                gap: 2rem;
                margin-bottom: 2.5rem;
            }
            
            .what-is-section, .benefits-section {
                flex: 1;
                min-width: 0;
            }
            
            .info-card {
                background-color: white;
                border-radius: 0.5rem;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                border: 1px solid #E4E7EB;
                padding: 1.5rem;
                height: 100%;
            }
            
            .benefits-card {
                border-left: 4px solid #38B2AC;
            }
            
            .info-text {
                color: #4A5568;
                line-height: 1.6;
                margin-bottom: 1rem;
            }
            
            .info-text:last-child {
                margin-bottom: 0;
            }
            
            .benefits-list {
                margin: 0;
                padding: 0;
                list-style: none;
            }
            
            .benefit-item {
                display: flex;
                align-items: flex-start;
                margin-bottom: 1rem;
            }
            
            .benefit-item:last-child {
                margin-bottom: 0;
            }
            
            .check-icon {
                color: #38B2AC;
                margin-right: 0.75rem;
                flex-shrink: 0;
                margin-top: 0.25rem;
            }
            
            .benefit-text {
                color: #4A5568;
                line-height: 1.5;
            }
            
            .visualization-section {
                margin-bottom: 2.5rem;
            }
            
            .research-visualization {
                background-color: #F5F7FA;
                border-radius: 0.5rem;
                padding: 2rem 1rem;
                overflow-x: auto;
            }
            
            .research-flow {
                display: flex;
                align-items: center;
                justify-content: space-between;
                flex-wrap: nowrap;
                min-width: 800px;
                margin: 0 auto;
            }
            
            .research-node {
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 160px;
            }
            
            .node-icon {
                width: 60px;
                height: 60px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 1rem;
                color: white;
                font-size: 1.5rem;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                border: 3px solid white;
                transition: transform 0.2s ease-out;
            }
            
            .research-node:hover .node-icon {
                transform: scale(1.1);
            }
            
            .node-content {
                text-align: center;
            }
            
            .node-name {
                font-weight: 600;
                color: #323F4B;
                margin-bottom: 0.5rem;
            }
            
            .node-description {
                font-size: 0.75rem;
                color: #4A5568;
                line-height: 1.4;
            }
            
            .flow-connector {
                color: #9AA5B1;
                font-size: 1.5rem;
                margin: 0 -0.5rem;
            }
            
            .example-section {
                margin-bottom: 1.5rem;
            }
            
            .example-card {
                background-color: #e6edf7;
                border-radius: 0.5rem;
                padding: 1.5rem;
                display: flex;
                align-items: center;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                border-left: 4px solid #0c4da2;
            }
            
            .example-icon {
                font-size: 2rem;
                color: #0c4da2;
                margin-right: 1.5rem;
                flex-shrink: 0;
            }
            
            .example-content {
                flex: 1;
            }
            
            .example-title {
                font-size: 1.25rem;
                font-weight: 600;
                color: #323F4B;
                margin-top: 0;
                margin-bottom: 0.5rem;
            }
            
            .example-text {
                color: #4A5568;
                margin: 0;
                line-height: 1.5;
            }
            
            @media (max-width: 768px) {
                .main-content {
                    flex-direction: column;
                }
                
                .research-flow {
                    flex-direction: column;
                    min-width: 0;
                }
                
                .research-node {
                    width: 100%;
                    flex-direction: row;
                    align-items: flex-start;
                    margin-bottom: 1.5rem;
                    text-align: left;
                }
                
                .node-icon {
                    margin-right: 1rem;
                    margin-bottom: 0;
                }
                
                .node-content {
                    text-align: left;
                    flex: 1;
                }
                
                .flow-connector {
                    transform: rotate(90deg);
                    margin: 0.5rem 0;
                }
                
                .example-card {
                    flex-direction: column;
                    text-align: center;
                }
                
                .example-icon {
                    margin-right: 0;
                    margin-bottom: 1rem;
                }
            }
        `;
        container.appendChild(style);
        
        return container;
    }
    
    initialize() {
        if (this.initialized) return;
        // Add any interactive elements or event listeners here
        this.initialized = true;
    }

    cleanup() {
        // Clean up event listeners
        this.initialized = false;
    }
}
