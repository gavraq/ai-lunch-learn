// State Model Component
class StateModelComponent extends BaseComponent {
    constructor(slideData) {
        super(slideData);
        this.initialized = false;
    }
    
    createContent() {
        const container = document.createElement('div');
        
        // Title
        const title = document.createElement('h2');
        title.textContent = 'Step 6: State Model & Database Schema';
        title.className = 'slide-title mb-md';
        container.appendChild(title);
        
        // Introduction
        const introSection = document.createElement('div');
        introSection.className = 'intro-section mb-lg';
        
        const introContent = document.createElement('p');
        introContent.innerHTML = 'After designing the architecture, the next step is to define the database schema and state model that will power the application. This is critical for workflow-based applications where state transitions are central to the functionality.';
        introSection.appendChild(introContent);
        
        container.appendChild(introSection);
        
        // Database Schema
        const schemaSection = document.createElement('div');
        schemaSection.className = 'schema-section mb-lg';
        
        const schemaTitle = document.createElement('h3');
        schemaTitle.textContent = 'Database Schema Design:';
        schemaSection.appendChild(schemaTitle);
        
        const schemaPrompt = document.createElement('div');
        schemaPrompt.className = 'prompt-preview';
        schemaPrompt.innerHTML = `
            <p><strong>Database Schema Prompt:</strong></p>
            <pre class="prompt-code">
&lt;role&gt;
You are a database design specialist.
&lt;/role&gt;

&lt;context&gt;
I am building a Credit Risk Workflow system. The requirements are captured a Product Requirements Document - PRD (v3).md. which is stored in my Obsidian vault in the Credit Risk Workflow folder.
&lt;/context&gt;

&lt;task&gt;
I need you to design a database schema consistent with the PRD. Please create: 
1. An entity-relationship diagram showing all major entities 
2. Description of key relationships 
3. Suggested fields for each model including data types Focus on these key components from the PRD: 
- User roles (Credit Analyst, Relationship Manager, etc.)
- Counterparty
- Limit
- Workflow states and transitions 
- Credit Paper forms and their components (Credit Request, Credit Review, Business Sponsorship, Legal Review, Credit Questionnaire, Credit Analysis, Credit Compilation, Credit Approval etc.)
- Document management
&lt;/task&gt;
            </pre>
        `;
        schemaSection.appendChild(schemaPrompt);
        
        container.appendChild(schemaSection);
        
        // State Model
        const stateModelSection = document.createElement('div');
        stateModelSection.className = 'state-model-section mb-lg';
        
        const stateModelTitle = document.createElement('h3');
        stateModelTitle.textContent = 'State Model Design:';
        stateModelSection.appendChild(stateModelTitle);
        
        const stateModelPrompt = document.createElement('div');
        stateModelPrompt.className = 'prompt-preview';
        stateModelPrompt.innerHTML = `
            <p><strong>State Model Prompt:</strong></p>
            <pre class="prompt-code">
Based on the Credit Risk Workflow PRD, the Database Schema design and the Credit-Risk-workflow-architecture documents I need to design a workflow state machine model and associated transition model. Please provide: 
1. Workflow States 
2. Role Permissions 
3. Workflow Transitions 
4. Actions required to effect Transitions 
5. Any important Notes associated with the specific transition

Also can you produce a mermaid chart for the workflow state machine model and transitions
            </pre>
        `;
        stateModelSection.appendChild(stateModelPrompt);
        
        container.appendChild(stateModelSection);
        
        // Mermaid Integration
        const mermaidSection = document.createElement('div');
        mermaidSection.className = 'mermaid-section mb-lg';
        
        const mermaidTitle = document.createElement('h3');
        mermaidTitle.textContent = 'Mermaid Diagram Integration:';
        mermaidSection.appendChild(mermaidTitle);
        
        const mermaidContent = document.createElement('p');
        mermaidContent.innerHTML = 'The Entity Relationship diagram can be viewed in Mermaid as follows:';
        mermaidSection.appendChild(mermaidContent);
        
        const mermaidInstructions = document.createElement('div');
        mermaidInstructions.className = 'mermaid-instructions';
        mermaidInstructions.innerHTML = `
            <p><strong>Online Mermaid Live Editor:</strong></p>
            <ol>
                <li>Go to <a href="https://mermaid.live" target="_blank">https://mermaid.live</a></li>
                <li>Open the file in a text editor, copy the code, and paste it into the Mermaid Live Editor</li>
                <li>The diagram will render automatically</li>
            </ol>
        `;
        mermaidSection.appendChild(mermaidInstructions);
        
        container.appendChild(mermaidSection);
        
        // Example Diagram Preview
        const diagramPreviewSection = document.createElement('div');
        diagramPreviewSection.className = 'diagram-preview-section mb-lg';
        
        const diagramPreviewTitle = document.createElement('h3');
        diagramPreviewTitle.textContent = 'Example State Transition Diagram:';
        diagramPreviewSection.appendChild(diagramPreviewTitle);
        
        // Simple visualization of a state transition diagram
        const diagramPreview = document.createElement('div');
        diagramPreview.className = 'state-diagram-preview';
        diagramPreview.innerHTML = `
            <div class="state-node initial">
                <span>Draft</span>
            </div>
            <div class="state-arrow">
                <span>Submit</span>
                <i class="fas fa-arrow-right"></i>
            </div>
            <div class="state-node">
                <span>Under Review</span>
            </div>
            <div class="state-arrow">
                <span>Approve</span>
                <i class="fas fa-arrow-right"></i>
            </div>
            <div class="state-node">
                <span>Analysis</span>
            </div>
            <div class="state-arrow">
                <span>Complete</span>
                <i class="fas fa-arrow-right"></i>
            </div>
            <div class="state-node">
                <span>Final Approval</span>
            </div>
            <div class="state-arrow">
                <span>Approve</span>
                <i class="fas fa-arrow-right"></i>
            </div>
            <div class="state-node final">
                <span>Approved</span>
            </div>
        `;
        diagramPreviewSection.appendChild(diagramPreview);
        
        container.appendChild(diagramPreviewSection);
        
        // Final Documents
        const finalSection = document.createElement('div');
        finalSection.className = 'final-section';
        
        const finalTitle = document.createElement('h3');
        finalTitle.textContent = 'Final Documents:';
        finalSection.appendChild(finalTitle);
        
        const finalList = this.createList([
            'Database Design: <strong>Credit Risk Workflow System Database Schema (v3)</strong>',
            'Transition State Model: <strong>Credit Risk Workflow - Transition State Model (v3)</strong>'
        ]);
        finalSection.appendChild(finalList);
        
        container.appendChild(finalSection);
        
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
