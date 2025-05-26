// Architecture Design Component
class ArchitectureDesignComponent extends BaseComponent {
    constructor(slideData) {
        super(slideData);
        this.initialized = false;
    }
    
    createContent() {
        const container = document.createElement('div');
        
        // Title
        const title = document.createElement('h2');
        title.textContent = 'Step 5: Architecture Design';
        title.className = 'slide-title mb-md';
        container.appendChild(title);
        
        // Introduction
        const introSection = document.createElement('div');
        introSection.className = 'intro-section mb-lg';
        
        const introContent = document.createElement('p');
        introContent.innerHTML = 'Even for a prototype you need to spend the time getting the architecture right! This step is essential if you are using a number of different technologies.';
        introSection.appendChild(introContent);
        
        const introContent2 = document.createElement('p');
        introContent2.innerHTML = 'For my prototype I chose a React Front end and Python Django backend which was established as part of my requirements gathering (see section 6.1 Technology Recommendation) when looking at the different technology options and evaluating the best options given the business requirements.';
        introSection.appendChild(introContent2);
        
        container.appendChild(introSection);
        
        // Architecture Approach
        const approachSection = document.createElement('div');
        approachSection.className = 'approach-section mb-lg';
        
        const approachTitle = document.createElement('h3');
        approachTitle.textContent = 'Two-Stage Architecture Design:';
        approachSection.appendChild(approachTitle);
        
        // Create a two-column layout for the versions
        const leftColumn = document.createElement('div');
        leftColumn.className = 'version-column';
        
        const originalTitle = document.createElement('h4');
        originalTitle.textContent = 'Original Version:';
        leftColumn.appendChild(originalTitle);
        
        const originalPrompt = document.createElement('div');
        originalPrompt.className = 'prompt-preview';
        originalPrompt.innerHTML = `
            <p><strong>Prompt:</strong></p>
            <pre class="prompt-code">
I'm working on implementing a Credit Risk Workflow Tool using Django and a custom workflow engine. The system will track credit limit requests through approval stages (from Front Office to Credit Risk to Legal to final approval). Key requirements: 
- Digital forms for complex credit requests 
- Document generation (PDFs with tables, financial data) 
- Dashboard for tracking requests 
- Email notifications 
- Role-based permissions 
I already have a PRD with detailed requirements in my Obsidian vault called "Credit Risk Workflow Tool PRD". 
Can you help me with technical advice on: 
1. Django models design for the workflow system 
2. Best approach for form handling with complex nested data 
3. PDF generation strategy for financial documents 
4. Authentication and permission system implementation
            </pre>
            <p><strong>Location:</strong> See Claude steps in Project folder in chat entitled: "Credit Risk Workflow Tool with Django"</p>
        `;
        leftColumn.appendChild(originalPrompt);
        
        const rightColumn = document.createElement('div');
        rightColumn.className = 'version-column';
        
        const newTitle = document.createElement('h4');
        newTitle.textContent = 'New Version:';
        rightColumn.appendChild(newTitle);
        
        const newPrompt = document.createElement('div');
        newPrompt.className = 'prompt-preview';
        newPrompt.innerHTML = `
            <p><strong>Prompt:</strong></p>
            <pre class="prompt-code">
I am looking to build a Credit Risk Workflow application in python django. I have already done some pre-work designing some screens for the front end using react. Would these react front end screens integrate well with a python django app or should they rather be taken as inspiration. What is best to use for the front end development?
            </pre>
            <p><strong>Location:</strong> See Claude steps in chat (not in project folder) entitled: "Integrating React Front-end within Django Credit Risk App"</p>
        `;
        rightColumn.appendChild(newPrompt);
        
        const versionsLayout = this.createTwoColumnLayout(leftColumn, rightColumn);
        approachSection.appendChild(versionsLayout);
        
        container.appendChild(approachSection);
        
        // Architecture Diagram
        const diagramSection = document.createElement('div');
        diagramSection.className = 'diagram-section mb-lg';
        
        const diagramTitle = document.createElement('h3');
        diagramTitle.textContent = 'Architecture Overview:';
        diagramSection.appendChild(diagramTitle);
        
        // Create a simple architecture diagram
        const diagram = document.createElement('div');
        diagram.className = 'architecture-diagram';
        diagram.innerHTML = `
            <div class="arch-layer frontend-layer">
                <div class="arch-component">
                    <i class="fas fa-laptop-code"></i>
                    <span>React Frontend</span>
                    <div class="tech-details">Material-UI Components</div>
                </div>
            </div>
            <div class="arch-arrow">↓</div>
            <div class="arch-layer api-layer">
                <div class="arch-component">
                    <i class="fas fa-exchange-alt"></i>
                    <span>Django REST API</span>
                    <div class="tech-details">Django REST Framework</div>
                </div>
            </div>
            <div class="arch-arrow">↓</div>
            <div class="arch-layer backend-layer">
                <div class="arch-component workflow-engine">
                    <i class="fas fa-cogs"></i>
                    <span>Workflow Engine</span>
                    <div class="tech-details">Custom Django App</div>
                </div>
                <div class="arch-component models">
                    <i class="fas fa-database"></i>
                    <span>Django Models</span>
                    <div class="tech-details">ORM + PostgreSQL</div>
                </div>
                <div class="arch-component auth">
                    <i class="fas fa-user-shield"></i>
                    <span>Authentication</span>
                    <div class="tech-details">Django Auth + JWT</div>
                </div>
            </div>
        `;
        diagramSection.appendChild(diagram);
        
        container.appendChild(diagramSection);
        
        // Final Document
        const finalSection = document.createElement('div');
        finalSection.className = 'final-section';
        
        const finalTitle = document.createElement('h3');
        finalTitle.textContent = 'Final Architecture Document:';
        finalSection.appendChild(finalTitle);
        
        const finalContent = document.createElement('p');
        finalContent.innerHTML = 'See final document entitled: <strong>Credit-Risk-workflow-architecture</strong>';
        finalSection.appendChild(finalContent);
        
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
