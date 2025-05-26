// Documentation Component
class DocumentationComponent extends BaseComponent {
    constructor(slideData) {
        super(slideData);
        this.initialized = false;
    }
    
    createContent() {
        const container = document.createElement('div');
        
        // Title
        const title = document.createElement('h2');
        title.textContent = 'Step 14: Documentation';
        title.className = 'slide-title mb-md';
        container.appendChild(title);
        
        // Introduction
        const introSection = document.createElement('div');
        introSection.className = 'intro-section mb-lg';
        
        const introContent = document.createElement('p');
        introContent.innerHTML = 'Equally important as testing is to create documentation as you go. This ensures that your prototype is well-documented and makes it easier for others to understand and maintain the code.';
        introSection.appendChild(introContent);
        
        container.appendChild(introSection);
        
        // Documentation Prompt
        const promptSection = document.createElement('div');
        promptSection.className = 'prompt-section mb-lg';
        
        const promptTitle = document.createElement('h3');
        promptTitle.textContent = 'Documentation Prompt:';
        promptSection.appendChild(promptTitle);
        
        const promptExample = document.createElement('div');
        promptExample.className = 'prompt-preview';
        promptExample.innerHTML = `
            <p><strong>Prompt:</strong></p>
            <pre class="prompt-code">Can you create a markdown file called Task 2 Documentation with information on all of the steps we just performed for task 2 and put it in a Documentation folder</pre>
        `;
        promptSection.appendChild(promptExample);
        
        container.appendChild(promptSection);
        
        // Types of Documentation
        const typesSection = document.createElement('div');
        typesSection.className = 'types-section mb-lg';
        
        const typesTitle = document.createElement('h3');
        typesTitle.textContent = 'Types of Documentation:';
        typesSection.appendChild(typesTitle);
        
        // Create a two-column layout for documentation types
        const leftColumn = document.createElement('div');
        leftColumn.className = 'docs-column';
        
        const codeTitle = document.createElement('h4');
        codeTitle.textContent = 'Code Documentation:';
        leftColumn.appendChild(codeTitle);
        
        const codeList = this.createList([
            'Docstrings for classes and functions',
            'Inline comments for complex logic',
            'Module-level documentation',
            'Type hints and annotations',
            'README files for each app/module'
        ]);
        leftColumn.appendChild(codeList);
        
        const rightColumn = document.createElement('div');
        rightColumn.className = 'docs-column';
        
        const projectTitle = document.createElement('h4');
        projectTitle.textContent = 'Project Documentation:';
        rightColumn.appendChild(projectTitle);
        
        const projectList = this.createList([
            'Architecture overview',
            'Setup and installation instructions',
            'API documentation',
            'User guides',
            'Troubleshooting guides'
        ]);
        rightColumn.appendChild(projectList);
        
        const typesLayout = this.createTwoColumnLayout(leftColumn, rightColumn);
        typesSection.appendChild(typesLayout);
        
        container.appendChild(typesSection);
        
        // Documentation Structure
        const structureSection = document.createElement('div');
        structureSection.className = 'structure-section mb-lg';
        
        const structureTitle = document.createElement('h3');
        structureTitle.textContent = 'Documentation Structure:';
        structureSection.appendChild(structureTitle);
        
        // Create a visual representation of the documentation structure
        const structure = document.createElement('div');
        structure.className = 'docs-structure';
        structure.innerHTML = `
            <div class="structure-item root">
                <i class="fas fa-folder"></i>
                <span>Documentation/</span>
                <div class="structure-children">
                    <div class="structure-item">
                        <i class="fas fa-file-alt"></i>
                        <span>README.md</span>
                    </div>
                    <div class="structure-item">
                        <i class="fas fa-folder"></i>
                        <span>Tasks/</span>
                        <div class="structure-children">
                            <div class="structure-item">
                                <i class="fas fa-file-alt"></i>
                                <span>Task1_ProjectSetup.md</span>
                            </div>
                            <div class="structure-item">
                                <i class="fas fa-file-alt"></i>
                                <span>Task2_DatabaseSchema.md</span>
                            </div>
                            <div class="structure-item">
                                <i class="fas fa-file-alt"></i>
                                <span>Task3_Authentication.md</span>
                            </div>
                            <div class="structure-item">
                                <i class="fas fa-file-alt"></i>
                                <span>...</span>
                            </div>
                        </div>
                    </div>
                    <div class="structure-item">
                        <i class="fas fa-folder"></i>
                        <span>API/</span>
                        <div class="structure-children">
                            <div class="structure-item">
                                <i class="fas fa-file-alt"></i>
                                <span>API_Overview.md</span>
                            </div>
                            <div class="structure-item">
                                <i class="fas fa-file-alt"></i>
                                <span>Endpoints.md</span>
                            </div>
                        </div>
                    </div>
                    <div class="structure-item">
                        <i class="fas fa-folder"></i>
                        <span>Architecture/</span>
                        <div class="structure-children">
                            <div class="structure-item">
                                <i class="fas fa-file-alt"></i>
                                <span>Overview.md</span>
                            </div>
                            <div class="structure-item">
                                <i class="fas fa-file-alt"></i>
                                <span>Database.md</span>
                            </div>
                            <div class="structure-item">
                                <i class="fas fa-file-alt"></i>
                                <span>Workflow.md</span>
                            </div>
                        </div>
                    </div>
                    <div class="structure-item">
                        <i class="fas fa-folder"></i>
                        <span>User/</span>
                        <div class="structure-children">
                            <div class="structure-item">
                                <i class="fas fa-file-alt"></i>
                                <span>Installation.md</span>
                            </div>
                            <div class="structure-item">
                                <i class="fas fa-file-alt"></i>
                                <span>UserGuide.md</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        structureSection.appendChild(structure);
        
        container.appendChild(structureSection);
        
        // Example Documentation
        const exampleSection = document.createElement('div');
        exampleSection.className = 'example-section';
        
        const exampleTitle = document.createElement('h3');
        exampleTitle.textContent = 'Example Task Documentation:';
        exampleSection.appendChild(exampleTitle);
        
        const exampleCode = `# Task 2: Database Schema Implementation

## Overview
This document outlines the implementation of the database schema for the Credit Risk Workflow system, completed as part of Task 2 in our project plan.

## Steps Performed

### 1. Model Creation
We created the following Django models:

- **User** - Extended Django's built-in User model with role-based permissions
- **Counterparty** - Represents a financial institution or entity
- **CreditApplication** - The main model tracking credit applications
- **LimitRequest** - Represents individual credit limit requests within an application
- **WorkflowState** - Defines possible states in the workflow
- **WorkflowTransition** - Defines allowed transitions between states
- **Document** - For storing uploaded documents related to credit applications

### 2. Model Relationships
We established the following key relationships:

- A CreditApplication belongs to a Counterparty
- A CreditApplication can have multiple LimitRequests
- A CreditApplication is always in a specific WorkflowState
- WorkflowTransitions connect WorkflowStates and define who can perform transitions

### 3. Database Migrations
We created and applied migrations to set up the database schema:
\`\`\`bash
python manage.py makemigrations
python manage.py migrate
\`\`\`

### 4. Test Data
We created fixtures to populate the database with test data for development.

## Key Design Decisions

1. Used Django's ContentType framework for generic relations between documents and other models
2. Implemented a custom workflow engine rather than using a third-party package
3. Used UUID fields for primary keys instead of auto-incrementing integers for security

## Next Steps

- Implement API endpoints for these models
- Create forms for data entry
- Develop the workflow transition logic`;
        
        const codeBlock = this.createCodeBlock(exampleCode, 'markdown');
        exampleSection.appendChild(codeBlock);
        
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
