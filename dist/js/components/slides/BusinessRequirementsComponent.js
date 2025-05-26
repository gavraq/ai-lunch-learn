// Business Requirements Component
class BusinessRequirementsComponent extends BaseComponent {
    constructor(slideData) {
        super(slideData);
        this.initialized = false;
    }
    
    createContent() {
        const container = document.createElement('div');
        
        // Title
        const title = document.createElement('h2');
        title.textContent = 'Step 2: Gather Comprehensive Business Requirements';
        title.className = 'slide-title mb-md';
        container.appendChild(title);
        
        // Introduction
        const introSection = document.createElement('div');
        introSection.className = 'intro-section mb-lg';
        
        const introContent = document.createElement('p');
        introContent.innerHTML = 'A PRD/BRD is only one artifact that helps to gather good requirements. This should also include other visuals which can help to bring the requirements to life.';
        introSection.appendChild(introContent);
        
        container.appendChild(introSection);
        
        // Two-column layout for requirements artifacts
        const leftColumn = document.createElement('div');
        leftColumn.className = 'requirements-column';
        
        const documentsTitle = document.createElement('h3');
        documentsTitle.textContent = 'Key Documents:';
        leftColumn.appendChild(documentsTitle);
        
        const documentsList = this.createList([
            'Product Requirements Document (PRD)',
            'Business Requirements Document (BRD)',
            'User Stories',
            'Use Cases',
            'Functional Requirements',
            'Non-Functional Requirements'
        ]);
        leftColumn.appendChild(documentsList);
        
        const rightColumn = document.createElement('div');
        rightColumn.className = 'visuals-column';
        
        const visualsTitle = document.createElement('h3');
        visualsTitle.textContent = 'Visual Artifacts:';
        rightColumn.appendChild(visualsTitle);
        
        const visualsList = this.createList([
            'State Transition Diagrams',
            'Workflow Diagrams',
            'Entity Relationship Diagrams',
            'User Journey Maps',
            'Wireframes',
            'Mockups'
        ]);
        rightColumn.appendChild(visualsList);
        
        const columnsLayout = this.createTwoColumnLayout(leftColumn, rightColumn);
        container.appendChild(columnsLayout);
        
        // Mermaid examples section
        const mermaidSection = document.createElement('div');
        mermaidSection.className = 'mermaid-section mt-lg mb-lg';
        
        const mermaidTitle = document.createElement('h3');
        mermaidTitle.textContent = 'Example Mermaid Diagrams:';
        mermaidSection.appendChild(mermaidTitle);
        
        const mermaidExamples = document.createElement('div');
        mermaidExamples.className = 'mermaid-examples';
        
        // Create cards for each example
        const example1 = this.createCard(
            'State Transition Model',
            'Credit Risk Workflow - Transition State Model (v3)'
        );
        example1.className = 'card mermaid-card';
        
        const example2 = this.createCard(
            'Workflow Diagram',
            'Credit Workflow - Mermaid Charts - State Transition & Workflow (v3)'
        );
        example2.className = 'card mermaid-card';
        
        const example3 = this.createCard(
            'Entity Relationship Diagram',
            'Credit Workflow - Mermaid Chart - Entity Relationship Diagram (v3)'
        );
        example3.className = 'card mermaid-card';
        
        mermaidExamples.appendChild(example1);
        mermaidExamples.appendChild(example2);
        mermaidExamples.appendChild(example3);
        
        mermaidSection.appendChild(mermaidExamples);
        container.appendChild(mermaidSection);
        
        // Best practices
        const bestPracticesSection = document.createElement('div');
        bestPracticesSection.className = 'best-practices-section';
        
        const bestPracticesTitle = document.createElement('h3');
        bestPracticesTitle.textContent = 'Best Practices:';
        bestPracticesSection.appendChild(bestPracticesTitle);
        
        const bestPracticesList = this.createList([
            'Use AI to generate initial drafts of all requirements documents',
            'Validate requirements with stakeholders using visual artifacts',
            'Maintain traceability between requirements and implementation',
            'Prioritize requirements based on business value and technical complexity',
            'Keep requirements documents living and updated throughout the project'
        ]);
        bestPracticesSection.appendChild(bestPracticesList);
        
        container.appendChild(bestPracticesSection);
        
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
