// Deep Research Component
class DeepResearchComponent extends BaseComponent {
    constructor(slideData) {
        super(slideData);
        this.initialized = false;
    }
    
    createContent() {
        const container = document.createElement('div');
        
        // Title
        const title = document.createElement('h2');
        title.textContent = 'Step 1: Do some Deep Research';
        title.className = 'slide-title mb-md';
        container.appendChild(title);
        
        // What is Deep Research
        const whatIsSection = document.createElement('div');
        whatIsSection.className = 'what-is-section mb-lg';
        
        const whatIsTitle = document.createElement('h3');
        whatIsTitle.textContent = 'What is Deep Research?';
        whatIsSection.appendChild(whatIsTitle);
        
        const whatIsContent = document.createElement('p');
        whatIsContent.innerHTML = 'Many of the new AI models have the ability to do <strong>Deep Research</strong> which puts the model into "thinking mode" - the difference is instead of just sending the first version of the output, it performs multiple versions of the request and evaluates the alternatives to refine the final output.';
        whatIsSection.appendChild(whatIsContent);
        
        const reinforcementContent = document.createElement('p');
        reinforcementContent.innerHTML = 'This is known as <strong>reinforcement learning</strong> and has recently become very popular after it was used by DeepSeek, a new Chinese LLM that gained popularity recently, showing the improvements that can be made through re-inforcement learning.';
        whatIsSection.appendChild(reinforcementContent);
        
        container.appendChild(whatIsSection);
        
        // Visualization of Deep Research
        const visualizationSection = document.createElement('div');
        visualizationSection.className = 'visualization-section mb-lg';
        
        const visualizationTitle = document.createElement('h3');
        visualizationTitle.textContent = 'How Deep Research Works:';
        visualizationSection.appendChild(visualizationTitle);
        
        // Create a visual representation of deep research
        const visualizationContent = document.createElement('div');
        visualizationContent.className = 'research-visualization';
        visualizationContent.innerHTML = `
            <div class="research-flow">
                <div class="research-node prompt-node">
                    <i class="fas fa-question-circle"></i>
                    <span>Initial Prompt</span>
                </div>
                <div class="research-arrow">→</div>
                <div class="research-node thinking-node">
                    <i class="fas fa-brain"></i>
                    <span>Multiple Drafts</span>
                </div>
                <div class="research-arrow">→</div>
                <div class="research-node evaluation-node">
                    <i class="fas fa-balance-scale"></i>
                    <span>Self-Evaluation</span>
                </div>
                <div class="research-arrow">→</div>
                <div class="research-node refinement-node">
                    <i class="fas fa-edit"></i>
                    <span>Refinement</span>
                </div>
                <div class="research-arrow">→</div>
                <div class="research-node output-node">
                    <i class="fas fa-check-circle"></i>
                    <span>Final Output</span>
                </div>
            </div>
        `;
        visualizationSection.appendChild(visualizationContent);
        
        container.appendChild(visualizationSection);
        
        // Benefits of Deep Research
        const benefitsSection = document.createElement('div');
        benefitsSection.className = 'benefits-section mb-lg';
        
        const benefitsTitle = document.createElement('h3');
        benefitsTitle.textContent = 'Benefits for Prototyping:';
        benefitsSection.appendChild(benefitsTitle);
        
        const benefitsList = this.createList([
            'More thorough exploration of solution space',
            'Higher quality initial designs',
            'Reduced need for major revisions later',
            'Better understanding of technical constraints',
            'More comprehensive consideration of alternatives'
        ]);
        benefitsSection.appendChild(benefitsList);
        
        container.appendChild(benefitsSection);
        
        // Example prompt reference
        const exampleSection = document.createElement('div');
        exampleSection.className = 'example-section';
        
        const exampleTitle = document.createElement('h3');
        exampleTitle.textContent = 'Example:';
        exampleSection.appendChild(exampleTitle);
        
        const exampleContent = document.createElement('p');
        exampleContent.innerHTML = 'See example in project folder: <strong>Credit Workflow System - Deep Research Prompt</strong>';
        exampleSection.appendChild(exampleContent);
        
        container.appendChild(exampleSection);
        
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
