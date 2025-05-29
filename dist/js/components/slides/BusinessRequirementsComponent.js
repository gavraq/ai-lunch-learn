// Business Requirements Component
class BusinessRequirementsComponent extends BaseComponent {
    constructor(slideData) {
        super(slideData);
        this.initialized = false;
    }
    
    createContent() {
        const container = document.createElement('div');
        container.className = 'business-requirements-container';
        
        // Title section with visual impact
        const titleSection = document.createElement('div');
        titleSection.className = 'title-section';
        
        const title = document.createElement('h2');
        title.className = 'slide-title';
        title.textContent = 'Step 2: Gather Comprehensive Business Requirements';
        titleSection.appendChild(title);
        
        container.appendChild(titleSection);
        
        // Introduction with visual emphasis
        const introSection = document.createElement('div');
        introSection.className = 'intro-section';
        
        const introCard = document.createElement('div');
        introCard.className = 'intro-card';
        
        const introContent = document.createElement('p');
        introContent.className = 'intro-text';
        introContent.innerHTML = 'A PRD/BRD is only one artifact that helps to gather good requirements. This should also include other visuals which can help to bring the requirements to life.';
        introCard.appendChild(introContent);
        
        introSection.appendChild(introCard);
        container.appendChild(introSection);
        
        // Requirements artifacts in a modern card layout
        const artifactsSection = document.createElement('div');
        artifactsSection.className = 'artifacts-section';
        
        // Create document types column
        const documentsCard = document.createElement('div');
        documentsCard.className = 'artifacts-card documents-card';
        
        const documentsHeader = document.createElement('div');
        documentsHeader.className = 'card-header';
        
        const documentsIcon = document.createElement('div');
        documentsIcon.className = 'header-icon';
        documentsIcon.innerHTML = '<i class="fas fa-file-alt"></i>';
        documentsHeader.appendChild(documentsIcon);
        
        const documentsTitle = document.createElement('h3');
        documentsTitle.className = 'card-title';
        documentsTitle.textContent = 'Key Documents';
        documentsHeader.appendChild(documentsTitle);
        
        documentsCard.appendChild(documentsHeader);
        
        const documentsList = document.createElement('ul');
        documentsList.className = 'artifacts-list';
        
        const documents = [
            { name: 'Product Requirements Document (PRD)', icon: 'fa-file-contract' },
            { name: 'Business Requirements Document (BRD)', icon: 'fa-file-invoice' },
            { name: 'User Stories', icon: 'fa-user-edit' },
            { name: 'Use Cases', icon: 'fa-sitemap' },
            { name: 'Functional Requirements', icon: 'fa-list-check' },
            { name: 'Non-Functional Requirements', icon: 'fa-shield-alt' }
        ];
        
        documents.forEach(doc => {
            const listItem = document.createElement('li');
            listItem.className = 'artifact-item';
            
            const itemIcon = document.createElement('span');
            itemIcon.className = 'item-icon';
            itemIcon.innerHTML = `<i class="fas ${doc.icon}"></i>`;
            listItem.appendChild(itemIcon);
            
            const itemText = document.createElement('span');
            itemText.className = 'item-text';
            itemText.textContent = doc.name;
            listItem.appendChild(itemText);
            
            documentsList.appendChild(listItem);
        });
        
        documentsCard.appendChild(documentsList);
        artifactsSection.appendChild(documentsCard);
        
        // Create visual artifacts column
        const visualsCard = document.createElement('div');
        visualsCard.className = 'artifacts-card visuals-card';
        
        const visualsHeader = document.createElement('div');
        visualsHeader.className = 'card-header';
        
        const visualsIcon = document.createElement('div');
        visualsIcon.className = 'header-icon';
        visualsIcon.innerHTML = '<i class="fas fa-chart-network"></i>';
        visualsHeader.appendChild(visualsIcon);
        
        const visualsTitle = document.createElement('h3');
        visualsTitle.className = 'card-title';
        visualsTitle.textContent = 'Visual Artifacts';
        visualsHeader.appendChild(visualsTitle);
        
        visualsCard.appendChild(visualsHeader);
        
        const visualsList = document.createElement('ul');
        visualsList.className = 'artifacts-list';
        
        const visuals = [
            { name: 'State Transition Diagrams', icon: 'fa-project-diagram' },
            { name: 'Workflow Diagrams', icon: 'fa-random' },
            { name: 'Entity Relationship Diagrams', icon: 'fa-database' },
            { name: 'User Journey Maps', icon: 'fa-route' },
            { name: 'Wireframes', icon: 'fa-pencil-ruler' },
            { name: 'Mockups', icon: 'fa-desktop' }
        ];
        
        visuals.forEach(visual => {
            const listItem = document.createElement('li');
            listItem.className = 'artifact-item';
            
            const itemIcon = document.createElement('span');
            itemIcon.className = 'item-icon';
            itemIcon.innerHTML = `<i class="fas ${visual.icon}"></i>`;
            listItem.appendChild(itemIcon);
            
            const itemText = document.createElement('span');
            itemText.className = 'item-text';
            itemText.textContent = visual.name;
            listItem.appendChild(itemText);
            
            visualsList.appendChild(listItem);
        });
        
        visualsCard.appendChild(visualsList);
        artifactsSection.appendChild(visualsCard);
        
        container.appendChild(artifactsSection);
        
        // Mermaid examples with visual cards
        const mermaidSection = document.createElement('div');
        mermaidSection.className = 'mermaid-section';
        
        const mermaidTitle = document.createElement('h3');
        mermaidTitle.className = 'section-title';
        mermaidTitle.textContent = 'Example Mermaid Diagrams';
        mermaidSection.appendChild(mermaidTitle);
        
        const mermaidExamples = document.createElement('div');
        mermaidExamples.className = 'mermaid-examples';
        
        const examples = [
            { 
                title: 'State Transition Model', 
                description: 'Credit Risk Workflow - Transition State Model (v3)',
                icon: 'fa-project-diagram',
                color: '#4299E1'
            },
            { 
                title: 'Workflow Diagram', 
                description: 'Credit Workflow - Mermaid Charts - State Transition & Workflow (v3)',
                icon: 'fa-random',
                color: '#805AD5'
            },
            { 
                title: 'Entity Relationship Diagram', 
                description: 'Credit Workflow - Mermaid Chart - Entity Relationship Diagram (v3)',
                icon: 'fa-database',
                color: '#38B2AC'
            }
        ];
        
        examples.forEach(example => {
            const exampleCard = document.createElement('div');
            exampleCard.className = 'mermaid-card';
            
            const cardIcon = document.createElement('div');
            cardIcon.className = 'mermaid-icon';
            cardIcon.style.backgroundColor = example.color;
            cardIcon.innerHTML = `<i class="fas ${example.icon}"></i>`;
            exampleCard.appendChild(cardIcon);
            
            const cardContent = document.createElement('div');
            cardContent.className = 'mermaid-content';
            
            const cardTitle = document.createElement('h4');
            cardTitle.className = 'mermaid-title';
            cardTitle.textContent = example.title;
            cardContent.appendChild(cardTitle);
            
            const cardDescription = document.createElement('p');
            cardDescription.className = 'mermaid-description';
            cardDescription.textContent = example.description;
            cardContent.appendChild(cardDescription);
            
            exampleCard.appendChild(cardContent);
            mermaidExamples.appendChild(exampleCard);
        });
        
        mermaidSection.appendChild(mermaidExamples);
        container.appendChild(mermaidSection);
        
        // Best practices with visual callout
        const bestPracticesSection = document.createElement('div');
        bestPracticesSection.className = 'best-practices-section';
        
        const practicesCard = document.createElement('div');
        practicesCard.className = 'practices-card';
        
        const practicesHeader = document.createElement('div');
        practicesHeader.className = 'practices-header';
        
        const practicesIcon = document.createElement('div');
        practicesIcon.className = 'practices-icon';
        practicesIcon.innerHTML = '<i class="fas fa-lightbulb"></i>';
        practicesHeader.appendChild(practicesIcon);
        
        const practicesTitle = document.createElement('h3');
        practicesTitle.className = 'practices-title';
        practicesTitle.textContent = 'Best Practices';
        practicesHeader.appendChild(practicesTitle);
        
        practicesCard.appendChild(practicesHeader);
        
        const practicesList = document.createElement('ul');
        practicesList.className = 'practices-list';
        
        const practices = [
            'Use AI to generate initial drafts of all requirements documents',
            'Validate requirements with stakeholders using visual artifacts',
            'Maintain traceability between requirements and implementation',
            'Prioritize requirements based on business value and technical complexity',
            'Keep requirements documents living and updated throughout the project'
        ];
        
        practices.forEach(practice => {
            const listItem = document.createElement('li');
            listItem.className = 'practice-item';
            
            const checkIcon = document.createElement('span');
            checkIcon.className = 'check-icon';
            checkIcon.innerHTML = '<i class="fas fa-check-circle"></i>';
            listItem.appendChild(checkIcon);
            
            const practiceText = document.createElement('span');
            practiceText.className = 'practice-text';
            practiceText.textContent = practice;
            listItem.appendChild(practiceText);
            
            practicesList.appendChild(listItem);
        });
        
        practicesCard.appendChild(practicesList);
        bestPracticesSection.appendChild(practicesCard);
        
        container.appendChild(bestPracticesSection);
        
        // Add CSS for this component
        const style = document.createElement('style');
        style.textContent = `
            .business-requirements-container {
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
                margin-bottom: 1.5rem;
            }
            
            .intro-section {
                margin-bottom: 2rem;
            }
            
            .intro-card {
                background-color: #e6edf7;
                border-radius: 0.5rem;
                padding: 1.5rem;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                border-left: 4px solid #0c4da2;
            }
            
            .intro-text {
                font-size: 1.125rem;
                line-height: 1.6;
                color: #323F4B;
                margin: 0;
            }
            
            .artifacts-section {
                display: flex;
                gap: 2rem;
                margin-bottom: 2.5rem;
            }
            
            .artifacts-card {
                background-color: white;
                border-radius: 0.5rem;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                border: 1px solid #E4E7EB;
                flex: 1;
                overflow: hidden;
                transition: transform 0.2s ease-out;
            }
            
            .artifacts-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            
            .documents-card {
                border-top: 4px solid #0c4da2;
            }
            
            .visuals-card {
                border-top: 4px solid #e31937;
            }
            
            .card-header {
                padding: 1.25rem;
                display: flex;
                align-items: center;
                border-bottom: 1px solid #E4E7EB;
                background-color: #F5F7FA;
            }
            
            .header-icon {
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
            
            .artifacts-list {
                list-style: none;
                margin: 0;
                padding: 1.25rem;
            }
            
            .artifact-item {
                display: flex;
                align-items: center;
                margin-bottom: 1rem;
            }
            
            .artifact-item:last-child {
                margin-bottom: 0;
            }
            
            .item-icon {
                color: #4A5568;
                margin-right: 0.75rem;
                width: 20px;
                text-align: center;
            }
            
            .item-text {
                color: #4A5568;
                line-height: 1.5;
            }
            
            .mermaid-section {
                margin-bottom: 2.5rem;
            }
            
            .mermaid-examples {
                display: flex;
                gap: 1.5rem;
                flex-wrap: wrap;
            }
            
            .mermaid-card {
                background-color: white;
                border-radius: 0.5rem;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                border: 1px solid #E4E7EB;
                padding: 1.5rem;
                display: flex;
                align-items: center;
                flex: 1;
                min-width: 250px;
                transition: transform 0.2s ease-out;
            }
            
            .mermaid-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            
            .mermaid-icon {
                width: 50px;
                height: 50px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: 1rem;
                color: white;
                font-size: 1.5rem;
                flex-shrink: 0;
            }
            
            .mermaid-content {
                flex: 1;
            }
            
            .mermaid-title {
                font-size: 1.125rem;
                font-weight: 600;
                margin: 0 0 0.5rem;
                color: #323F4B;
            }
            
            .mermaid-description {
                font-size: 0.875rem;
                color: #4A5568;
                margin: 0;
                line-height: 1.5;
            }
            
            .best-practices-section {
                margin-bottom: 1.5rem;
            }
            
            .practices-card {
                background-color: #fef6e7;
                border-radius: 0.5rem;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                border-left: 4px solid #dd6b20;
                overflow: hidden;
            }
            
            .practices-header {
                padding: 1.25rem;
                display: flex;
                align-items: center;
                border-bottom: 1px solid rgba(221, 107, 32, 0.2);
            }
            
            .practices-icon {
                font-size: 1.5rem;
                margin-right: 1rem;
                color: #dd6b20;
            }
            
            .practices-title {
                font-size: 1.25rem;
                font-weight: 600;
                margin: 0;
                color: #323F4B;
            }
            
            .practices-list {
                list-style: none;
                margin: 0;
                padding: 1.25rem;
            }
            
            .practice-item {
                display: flex;
                align-items: flex-start;
                margin-bottom: 1rem;
            }
            
            .practice-item:last-child {
                margin-bottom: 0;
            }
            
            .check-icon {
                color: #dd6b20;
                margin-right: 0.75rem;
                margin-top: 0.25rem;
                flex-shrink: 0;
            }
            
            .practice-text {
                color: #4A5568;
                line-height: 1.5;
            }
            
            @media (max-width: 768px) {
                .artifacts-section {
                    flex-direction: column;
                }
                
                .mermaid-examples {
                    flex-direction: column;
                }
                
                .mermaid-card {
                    width: 100%;
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
