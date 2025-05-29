// State Model Component
class StateModelComponent extends BaseComponent {
    constructor(slideData) {
        super(slideData);
        this.initialized = false;
    }
    
    createContent() {
        const container = document.createElement('div');
        container.className = 'state-model-container';
        
        // Title section with visual impact
        const titleSection = document.createElement('div');
        titleSection.className = 'title-section';
        
        const title = document.createElement('h2');
        title.className = 'slide-title';
        title.textContent = 'Step 6: State Model & Database Schema';
        titleSection.appendChild(title);
        
        container.appendChild(titleSection);
        
        // Introduction with visual emphasis
        const introSection = document.createElement('div');
        introSection.className = 'intro-section';
        
        const introCard = document.createElement('div');
        introCard.className = 'intro-card';
        
        const introIcon = document.createElement('div');
        introIcon.className = 'intro-icon';
        introIcon.innerHTML = '<i class="fas fa-database"></i>';
        introCard.appendChild(introIcon);
        
        const introContent = document.createElement('div');
        introContent.className = 'intro-content';
        
        const introParagraph = document.createElement('p');
        introParagraph.className = 'intro-text';
        introParagraph.innerHTML = 'After designing the architecture, the next step is to define the database schema and state model that will power the application. This is critical for workflow-based applications where state transitions are central to the functionality.';
        introContent.appendChild(introParagraph);
        
        introCard.appendChild(introContent);
        introSection.appendChild(introCard);
        container.appendChild(introSection);
        
        // Main content in a two-column layout
        const mainSection = document.createElement('div');
        mainSection.className = 'main-section';
        
        // Left column - Database Schema
        const schemaSection = document.createElement('div');
        schemaSection.className = 'schema-section';
        
        const schemaCard = document.createElement('div');
        schemaCard.className = 'content-card schema-card';
        
        const schemaHeader = document.createElement('div');
        schemaHeader.className = 'card-header';
        
        const schemaIcon = document.createElement('div');
        schemaIcon.className = 'card-icon';
        schemaIcon.innerHTML = '<i class="fas fa-table"></i>';
        schemaHeader.appendChild(schemaIcon);
        
        const schemaTitle = document.createElement('h3');
        schemaTitle.className = 'card-title';
        schemaTitle.textContent = 'Database Schema Design';
        schemaHeader.appendChild(schemaTitle);
        
        schemaCard.appendChild(schemaHeader);
        
        const schemaContent = document.createElement('div');
        schemaContent.className = 'card-content';
        
        const schemaPrompt = document.createElement('div');
        schemaPrompt.className = 'prompt-container';
        
        const schemaPromptHeader = document.createElement('div');
        schemaPromptHeader.className = 'prompt-header';
        schemaPromptHeader.innerHTML = '<i class="fas fa-code"></i> Database Schema Prompt';
        schemaPrompt.appendChild(schemaPromptHeader);
        
        const schemaPromptCode = document.createElement('div');
        schemaPromptCode.className = 'prompt-code';
        schemaPromptCode.innerHTML = `&lt;role&gt;
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
&lt;/task&gt;`;
        schemaPrompt.appendChild(schemaPromptCode);
        
        schemaContent.appendChild(schemaPrompt);
        
        // Schema key entities
        const schemaEntities = document.createElement('div');
        schemaEntities.className = 'schema-entities';
        
        const entitiesTitle = document.createElement('h4');
        entitiesTitle.className = 'entities-title';
        entitiesTitle.textContent = 'Key Entities';
        schemaEntities.appendChild(entitiesTitle);
        
        const entitiesList = document.createElement('ul');
        entitiesList.className = 'entities-list';
        
        const entities = [
            { name: 'User', icon: 'fa-user' },
            { name: 'Role', icon: 'fa-user-tag' },
            { name: 'Counterparty', icon: 'fa-building' },
            { name: 'Limit', icon: 'fa-chart-line' },
            { name: 'WorkflowState', icon: 'fa-project-diagram' },
            { name: 'CreditPaper', icon: 'fa-file-contract' },
            { name: 'Document', icon: 'fa-file-alt' }
        ];
        
        entities.forEach(entity => {
            const entityItem = document.createElement('li');
            entityItem.className = 'entity-item';
            entityItem.innerHTML = `<i class="fas ${entity.icon}"></i> ${entity.name}`;
            entitiesList.appendChild(entityItem);
        });
        
        schemaEntities.appendChild(entitiesList);
        schemaContent.appendChild(schemaEntities);
        
        schemaCard.appendChild(schemaContent);
        schemaSection.appendChild(schemaCard);
        
        // Right column - State Model
        const stateModelSection = document.createElement('div');
        stateModelSection.className = 'state-model-section';
        
        const stateModelCard = document.createElement('div');
        stateModelCard.className = 'content-card state-model-card';
        
        const stateModelHeader = document.createElement('div');
        stateModelHeader.className = 'card-header';
        
        const stateModelIcon = document.createElement('div');
        stateModelIcon.className = 'card-icon';
        stateModelIcon.innerHTML = '<i class="fas fa-project-diagram"></i>';
        stateModelHeader.appendChild(stateModelIcon);
        
        const stateModelTitle = document.createElement('h3');
        stateModelTitle.className = 'card-title';
        stateModelTitle.textContent = 'State Model Design';
        stateModelHeader.appendChild(stateModelTitle);
        
        stateModelCard.appendChild(stateModelHeader);
        
        const stateModelContent = document.createElement('div');
        stateModelContent.className = 'card-content';
        
        const stateModelPrompt = document.createElement('div');
        stateModelPrompt.className = 'prompt-container';
        
        const stateModelPromptHeader = document.createElement('div');
        stateModelPromptHeader.className = 'prompt-header';
        stateModelPromptHeader.innerHTML = '<i class="fas fa-code"></i> State Model Prompt';
        stateModelPrompt.appendChild(stateModelPromptHeader);
        
        const stateModelPromptCode = document.createElement('div');
        stateModelPromptCode.className = 'prompt-code';
        stateModelPromptCode.innerHTML = `Based on the Credit Risk Workflow PRD, the Database Schema design and the Credit-Risk-workflow-architecture documents I need to design a workflow state machine model and associated transition model. Please provide: 
1. Workflow States 
2. Role Permissions 
3. Workflow Transitions 
4. Actions required to effect Transitions 
5. Any important Notes associated with the specific transition

Also can you produce a mermaid chart for the workflow state machine model and transitions`;
        stateModelPrompt.appendChild(stateModelPromptCode);
        
        stateModelContent.appendChild(stateModelPrompt);
        
        // State diagram visualization
        const stateDiagram = document.createElement('div');
        stateDiagram.className = 'state-diagram';
        
        const stateDiagramTitle = document.createElement('h4');
        stateDiagramTitle.className = 'diagram-title';
        stateDiagramTitle.textContent = 'State Transition Flow';
        stateDiagram.appendChild(stateDiagramTitle);
        
        const diagramVisual = document.createElement('div');
        diagramVisual.className = 'diagram-visual';
        
        // Create state nodes and transitions
        const states = [
            { name: 'Draft', type: 'initial' },
            { name: 'Under Review', type: 'normal' },
            { name: 'Analysis', type: 'normal' },
            { name: 'Final Approval', type: 'normal' },
            { name: 'Approved', type: 'final' }
        ];
        
        const transitions = [
            { from: 0, to: 1, label: 'Submit' },
            { from: 1, to: 2, label: 'Approve' },
            { from: 2, to: 3, label: 'Complete' },
            { from: 3, to: 4, label: 'Approve' }
        ];
        
        // Create state nodes
        states.forEach((state, index) => {
            const stateNode = document.createElement('div');
            stateNode.className = `state-node ${state.type}`;
            stateNode.innerHTML = `<span>${state.name}</span>`;
            stateNode.setAttribute('data-index', index);
            diagramVisual.appendChild(stateNode);
            
            // Add transition arrows (except after the last state)
            if (index < states.length - 1) {
                const transition = transitions.find(t => t.from === index);
                if (transition) {
                    const arrow = document.createElement('div');
                    arrow.className = 'state-arrow';
                    arrow.innerHTML = `
                        <span>${transition.label}</span>
                        <i class="fas fa-arrow-right"></i>
                    `;
                    diagramVisual.appendChild(arrow);
                }
            }
        });
        
        stateDiagram.appendChild(diagramVisual);
        stateModelContent.appendChild(stateDiagram);
        
        stateModelCard.appendChild(stateModelContent);
        stateModelSection.appendChild(stateModelCard);
        
        // Add both columns to the main section
        const columnsLayout = document.createElement('div');
        columnsLayout.className = 'columns-layout';
        columnsLayout.appendChild(schemaSection);
        columnsLayout.appendChild(stateModelSection);
        
        mainSection.appendChild(columnsLayout);
        container.appendChild(mainSection);
        
        // Mermaid Integration
        const mermaidSection = document.createElement('div');
        mermaidSection.className = 'mermaid-section';
        
        const mermaidCard = document.createElement('div');
        mermaidCard.className = 'mermaid-card';
        
        const mermaidIcon = document.createElement('div');
        mermaidIcon.className = 'mermaid-icon';
        mermaidIcon.innerHTML = '<i class="fas fa-project-diagram"></i>';
        mermaidCard.appendChild(mermaidIcon);
        
        const mermaidContent = document.createElement('div');
        mermaidContent.className = 'mermaid-content';
        
        const mermaidTitle = document.createElement('h3');
        mermaidTitle.className = 'mermaid-title';
        mermaidTitle.textContent = 'Mermaid Diagram Integration';
        mermaidContent.appendChild(mermaidTitle);
        
        const mermaidText = document.createElement('p');
        mermaidText.className = 'mermaid-text';
        mermaidText.innerHTML = 'The Entity Relationship diagram can be viewed in Mermaid as follows:';
        mermaidContent.appendChild(mermaidText);
        
        const mermaidInstructions = document.createElement('div');
        mermaidInstructions.className = 'mermaid-instructions';
        
        const mermaidSteps = document.createElement('ol');
        mermaidSteps.className = 'mermaid-steps';
        
        const steps = [
            'Go to <a href="https://mermaid.live" target="_blank">https://mermaid.live</a>',
            'Open the file in a text editor, copy the code, and paste it into the Mermaid Live Editor',
            'The diagram will render automatically'
        ];
        
        steps.forEach(step => {
            const stepItem = document.createElement('li');
            stepItem.innerHTML = step;
            mermaidSteps.appendChild(stepItem);
        });
        
        mermaidInstructions.appendChild(mermaidSteps);
        mermaidContent.appendChild(mermaidInstructions);
        
        mermaidCard.appendChild(mermaidContent);
        mermaidSection.appendChild(mermaidCard);
        
        container.appendChild(mermaidSection);
        
        // Final Documents
        const finalSection = document.createElement('div');
        finalSection.className = 'final-section';
        
        const finalCard = document.createElement('div');
        finalCard.className = 'final-card';
        
        const finalIcon = document.createElement('div');
        finalIcon.className = 'final-icon';
        finalIcon.innerHTML = '<i class="fas fa-file-alt"></i>';
        finalCard.appendChild(finalIcon);
        
        const finalContent = document.createElement('div');
        finalContent.className = 'final-content';
        
        const finalTitle = document.createElement('h3');
        finalTitle.className = 'final-title';
        finalTitle.textContent = 'Final Documents';
        finalContent.appendChild(finalTitle);
        
        const finalList = document.createElement('ul');
        finalList.className = 'final-list';
        
        const documents = [
            'Database Design: <strong>Credit Risk Workflow System Database Schema (v3)</strong>',
            'Transition State Model: <strong>Credit Risk Workflow - Transition State Model (v3)</strong>'
        ];
        
        documents.forEach(doc => {
            const docItem = document.createElement('li');
            docItem.innerHTML = doc;
            finalList.appendChild(docItem);
        });
        
        finalContent.appendChild(finalList);
        finalCard.appendChild(finalContent);
        finalSection.appendChild(finalCard);
        
        container.appendChild(finalSection);
        
        // Add CSS for this component
        const style = document.createElement('style');
        style.textContent = `
            .state-model-container {
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
            
            .main-section {
                margin-bottom: 2.5rem;
            }
            
            .columns-layout {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
                gap: 1.5rem;
            }
            
            .content-card {
                background-color: white;
                border-radius: 0.5rem;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                border: 1px solid #E4E7EB;
                overflow: hidden;
                height: 100%;
                display: flex;
                flex-direction: column;
            }
            
            .schema-card {
                border-top: 4px solid #0c4da2;
            }
            
            .state-model-card {
                border-top: 4px solid #e31937;
            }
            
            .card-header {
                padding: 1.25rem;
                display: flex;
                align-items: center;
                border-bottom: 1px solid #E4E7EB;
                background-color: #F5F7FA;
            }
            
            .card-icon {
                font-size: 1.5rem;
                margin-right: 1rem;
                color: #4A5568;
            }
            
            .card-title {
                font-size: 1.25rem;
                font-weight: 600;
                margin: 0;
                color: #323F4B;
            }
            
            .card-content {
                padding: 1.25rem;
                flex: 1;
                display: flex;
                flex-direction: column;
                gap: 1.5rem;
            }
            
            .prompt-container {
                background-color: #1F2933;
                border-radius: 0.5rem;
                overflow: hidden;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
            }
            
            .prompt-header {
                background-color: #323F4B;
                padding: 0.75rem 1rem;
                color: white;
                font-weight: 500;
                font-size: 0.875rem;
                display: flex;
                align-items: center;
                gap: 0.5rem;
            }
            
            .prompt-code {
                padding: 1rem;
                color: #CBD2D9;
                font-family: monospace;
                white-space: pre-wrap;
                font-size: 0.875rem;
                line-height: 1.6;
                max-height: 200px;
                overflow-y: auto;
            }
            
            .schema-entities {
                background-color: #f8fafc;
                border-radius: 0.5rem;
                padding: 1.25rem;
            }
            
            .entities-title {
                font-size: 1.125rem;
                font-weight: 600;
                margin: 0 0 1rem 0;
                color: #323F4B;
            }
            
            .entities-list {
                margin: 0;
                padding: 0;
                list-style: none;
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
                gap: 0.75rem;
            }
            
            .entity-item {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                color: #4A5568;
            }
            
            .entity-item i {
                color: #0c4da2;
            }
            
            .state-diagram {
                background-color: #f8fafc;
                border-radius: 0.5rem;
                padding: 1.25rem;
            }
            
            .diagram-title {
                font-size: 1.125rem;
                font-weight: 600;
                margin: 0 0 1rem 0;
                color: #323F4B;
                text-align: center;
            }
            
            .diagram-visual {
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                justify-content: center;
                gap: 0.5rem;
            }
            
            .state-node {
                padding: 0.75rem 1.25rem;
                background-color: white;
                border: 2px solid #CBD5E0;
                border-radius: 0.25rem;
                font-weight: 500;
                color: #4A5568;
                text-align: center;
                min-width: 120px;
            }
            
            .state-node.initial {
                border-color: #38B2AC;
                background-color: #E6FFFA;
                color: #234E52;
            }
            
            .state-node.final {
                border-color: #38A169;
                background-color: #F0FFF4;
                color: #22543D;
            }
            
            .state-arrow {
                display: flex;
                flex-direction: column;
                align-items: center;
                color: #718096;
                font-size: 0.75rem;
                margin: 0 0.5rem;
            }
            
            .state-arrow i {
                font-size: 1.25rem;
                margin-top: 0.25rem;
            }
            
            .mermaid-section {
                margin-bottom: 2.5rem;
            }
            
            .mermaid-card {
                background-color: white;
                border-radius: 0.5rem;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                padding: 1.5rem;
                display: flex;
                align-items: flex-start;
                border: 1px solid #E4E7EB;
                border-left: 4px solid #805AD5;
            }
            
            .mermaid-icon {
                font-size: 2rem;
                color: #805AD5;
                margin-right: 1.5rem;
                flex-shrink: 0;
            }
            
            .mermaid-content {
                flex: 1;
            }
            
            .mermaid-title {
                font-size: 1.25rem;
                font-weight: 600;
                color: #323F4B;
                margin-top: 0;
                margin-bottom: 0.75rem;
            }
            
            .mermaid-text {
                font-size: 1rem;
                color: #4A5568;
                margin-top: 0;
                margin-bottom: 1rem;
            }
            
            .mermaid-steps {
                margin: 0;
                padding-left: 1.5rem;
            }
            
            .mermaid-steps li {
                margin-bottom: 0.5rem;
                color: #4A5568;
            }
            
            .mermaid-steps li:last-child {
                margin-bottom: 0;
            }
            
            .mermaid-steps a {
                color: #3182CE;
                text-decoration: none;
            }
            
            .mermaid-steps a:hover {
                text-decoration: underline;
            }
            
            .final-section {
                margin-bottom: 1.5rem;
            }
            
            .final-card {
                background-color: #f8fafc;
                border-radius: 0.5rem;
                padding: 1.5rem;
                display: flex;
                align-items: flex-start;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                border-left: 4px solid #38A169;
            }
            
            .final-icon {
                font-size: 2rem;
                color: #38A169;
                margin-right: 1.5rem;
                flex-shrink: 0;
            }
            
            .final-content {
                flex: 1;
            }
            
            .final-title {
                font-size: 1.25rem;
                font-weight: 600;
                color: #323F4B;
                margin-top: 0;
                margin-bottom: 1rem;
            }
            
            .final-list {
                margin: 0;
                padding-left: 1.5rem;
            }
            
            .final-list li {
                margin-bottom: 0.5rem;
                color: #4A5568;
            }
            
            .final-list li:last-child {
                margin-bottom: 0;
            }
            
            @media (max-width: 768px) {
                .columns-layout {
                    grid-template-columns: 1fr;
                }
                
                .intro-card, .final-card, .mermaid-card {
                    flex-direction: column;
                }
                
                .intro-icon, .final-icon, .mermaid-icon {
                    margin-right: 0;
                    margin-bottom: 1rem;
                }
                
                .diagram-visual {
                    flex-direction: column;
                }
                
                .state-arrow {
                    transform: rotate(90deg);
                    margin: 0.5rem 0;
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
