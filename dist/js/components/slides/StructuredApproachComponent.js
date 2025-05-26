// Structured Approach Component
class StructuredApproachComponent extends BaseComponent {
    constructor(slideData) {
        super(slideData);
        this.initialized = false;
    }
    
    createContent() {
        const container = document.createElement('div');
        
        // Title
        const title = document.createElement('h2');
        title.textContent = 'A Structured Prototyping Approach & Steps Involved';
        title.className = 'slide-title mb-md';
        container.appendChild(title);
        
        // Main approach
        const approachSection = document.createElement('div');
        approachSection.className = 'approach-section mb-lg';
        
        const approachTitle = document.createElement('h3');
        approachTitle.textContent = 'Plan Before Code Approach:';
        approachSection.appendChild(approachTitle);
        
        const approachSteps = document.createElement('div');
        approachSteps.className = 'approach-steps';
        approachSteps.innerHTML = `
            <div class="step-flow">
                <div class="step">Explore</div>
                <div class="step-arrow">→</div>
                <div class="step">Plan</div>
                <div class="step-arrow">→</div>
                <div class="step">Confirm</div>
                <div class="step-arrow">→</div>
                <div class="step">Code</div>
                <div class="step-arrow">→</div>
                <div class="step">Commit</div>
            </div>
        `;
        approachSection.appendChild(approachSteps);
        
        // Key quote
        const quoteDiv = document.createElement('div');
        quoteDiv.className = 'quote-container mt-md mb-lg';
        
        const quote = document.createElement('blockquote');
        quote.className = 'quote';
        quote.innerHTML = '<p>"75% of real software application development is done during the planning phase"</p>';
        quoteDiv.appendChild(quote);
        approachSection.appendChild(quoteDiv);
        
        container.appendChild(approachSection);
        
        // Alternative workflows
        const alternativeSection = document.createElement('div');
        alternativeSection.className = 'alternative-section mb-lg';
        
        const alternativeTitle = document.createElement('h3');
        alternativeTitle.textContent = 'Alternative Workflows:';
        alternativeSection.appendChild(alternativeTitle);
        
        const alternativeList = this.createList([
            'Write tests → commit → code → iterate → commit',
            'Write code → screenshot → iterate'
        ]);
        alternativeSection.appendChild(alternativeList);
        
        container.appendChild(alternativeSection);
        
        // Steps overview
        const stepsSection = document.createElement('div');
        stepsSection.className = 'steps-section';
        
        const stepsTitle = document.createElement('h3');
        stepsTitle.textContent = 'The 15-Step Process:';
        stepsSection.appendChild(stepsTitle);
        
        // Create a two-column layout for the steps
        const stepsLeft = document.createElement('div');
        stepsLeft.className = 'steps-column';
        
        const stepsRight = document.createElement('div');
        stepsRight.className = 'steps-column';
        
        // Left column steps (1-8)
        const leftSteps = [
            '1. Do some Deep Research',
            '2. Gather Comprehensive Business Requirements',
            '3. UI/UX Design',
            '4. Design Specific Forms/Screens',
            '5. Architecture design',
            '6. State Model & Database Schema',
            '7. Pre-Planning Consistency Check',
            '8. Project Plan'
        ];
        
        const leftStepsList = this.createList(leftSteps);
        stepsLeft.appendChild(leftStepsList);
        
        // Right column steps (9-15)
        const rightSteps = [
            '9. Set up AI Coding Tools',
            '10. Set up MCP Servers',
            '11. Project Plan using Task Master',
            '12. Start Vibe Coding',
            '13. Testing',
            '14. Documentation',
            '15. Regular backups'
        ];
        
        const rightStepsList = this.createList(rightSteps);
        stepsRight.appendChild(rightStepsList);
        
        // Add the columns to a two-column layout
        const stepsLayout = this.createTwoColumnLayout(stepsLeft, stepsRight);
        stepsSection.appendChild(stepsLayout);
        
        container.appendChild(stepsSection);
        
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
