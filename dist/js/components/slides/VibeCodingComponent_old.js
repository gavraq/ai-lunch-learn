// Vibe Coding Component
class VibeCodingComponent extends BaseComponent {
    constructor(slideData) {
        super(slideData);
        this.initialized = false;
    }

    createContent() {
        const container = document.createElement('div');
        container.className = 'vibe-coding-container';
        
        // Add intro text
        const intro = document.createElement('div');
        intro.className = 'intro mb-lg';
        const introText = document.createElement('p');
        introText.className = 'large-text';
        introText.textContent = "Vibe coding is an emerging approach to software development that leverages AI to accelerate the prototyping and implementation process.";
        intro.appendChild(introText);
        container.appendChild(intro);
        
        // What is Vibe Coding section
        const definitionSection = document.createElement('div');
        definitionSection.className = 'definition-section mb-lg';
        
        const definitionTitle = document.createElement('h3');
        definitionTitle.textContent = 'What is Vibe Coding?';
        definitionSection.appendChild(definitionTitle);
        
        const definitionText = document.createElement('p');
        definitionText.innerHTML = 'Vibe coding is a collaborative approach between human developers and AI assistants where:<ul>' +
            '<li>Developers describe their intent in natural language</li>' +
            '<li>AI generates code based on that intent</li>' +
            '<li>Developers review, modify, and integrate the code</li>' +
            '<li>The process iterates rapidly to build functional prototypes</li>' +
            '</ul>';
        definitionSection.appendChild(definitionText);
        container.appendChild(definitionSection);
        
        // Benefits section
        const benefitsSection = document.createElement('div');
        benefitsSection.className = 'benefits-section mb-lg';
        
        const benefitsTitle = document.createElement('h3');
        benefitsTitle.textContent = 'Benefits for Prototyping';
        benefitsSection.appendChild(benefitsTitle);
        
        const benefitsList = this.createList([
            'Rapid implementation of ideas without getting bogged down in syntax',
            'Exploration of multiple approaches in parallel',
            'Automatic documentation generation during development',
            'Reduced cognitive load for developers',
            'Faster iteration cycles for testing concepts'
        ]);
        benefitsSection.appendChild(benefitsList);
        container.appendChild(benefitsSection);
        
        // Best Practices section
        const practicesSection = document.createElement('div');
        practicesSection.className = 'practices-section mb-lg';
        
        const practicesTitle = document.createElement('h3');
        practicesTitle.textContent = 'Best Practices';
        practicesSection.appendChild(practicesTitle);
        
        const practicesList = this.createList([
            'Start with clear requirements and constraints',
            'Use structured prompting for more precise code generation',
            'Review generated code carefully before integration',
            'Maintain a consistent architecture across generated components',
            'Document the reasoning behind design decisions',
            'Test generated code thoroughly'
        ]);
        practicesSection.appendChild(practicesList);
        container.appendChild(practicesSection);
        
        // Example workflow
        const workflowSection = document.createElement('div');
        workflowSection.className = 'workflow-section';
        
        const workflowTitle = document.createElement('h3');
        workflowTitle.textContent = 'Example Workflow';
        workflowSection.appendChild(workflowTitle);
        
        const workflow = document.createElement('div');
        workflow.className = 'workflow-steps';
        
        const steps = [
            { number: '1', title: 'Define Component', description: 'Describe the component purpose and requirements' },
            { number: '2', title: 'Generate Code', description: 'Use AI to generate initial implementation' },
            { number: '3', title: 'Review & Refine', description: 'Review the code and request improvements' },
            { number: '4', title: 'Test', description: 'Test the component functionality' },
            { number: '5', title: 'Integrate', description: 'Integrate with the rest of the application' }
        ];
        
        steps.forEach(step => {
            const stepElement = document.createElement('div');
            stepElement.className = 'workflow-step';
            
            const stepNumber = document.createElement('div');
            stepNumber.className = 'step-number';
            stepNumber.textContent = step.number;
            stepElement.appendChild(stepNumber);
            
            const stepContent = document.createElement('div');
            stepContent.className = 'step-content';
            
            const stepTitle = document.createElement('h4');
            stepTitle.textContent = step.title;
            stepContent.appendChild(stepTitle);
            
            const stepDescription = document.createElement('p');
            stepDescription.textContent = step.description;
            stepContent.appendChild(stepDescription);
            
            stepElement.appendChild(stepContent);
            workflow.appendChild(stepElement);
        });
        
        workflowSection.appendChild(workflow);
        container.appendChild(workflowSection);
        
        return container;
    }
    
    initialize() {
        if (this.initialized) return;
        
        // Add any interactive elements or event listeners here
        
        this.initialized = true;
    }
    
    cleanup() {
        // Clean up any event listeners or resources
        
        this.initialized = false;
    }
}
