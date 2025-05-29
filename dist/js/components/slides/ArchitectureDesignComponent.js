// Architecture Design Component
class ArchitectureDesignComponent extends BaseComponent {
    constructor(slideData) {
        super(slideData);
        this.initialized = false;
    }
    
    createContent() {
        const container = document.createElement('div');
        container.className = 'architecture-design-container';
        
        // Title section with visual impact
        const titleSection = document.createElement('div');
        titleSection.className = 'title-section';
        
        const title = document.createElement('h2');
        title.className = 'slide-title';
        title.textContent = 'Step 5: Architecture Design';
        titleSection.appendChild(title);
        
        container.appendChild(titleSection);
        
        // Introduction with visual emphasis
        const introSection = document.createElement('div');
        introSection.className = 'intro-section';
        
        const introCard = document.createElement('div');
        introCard.className = 'intro-card';
        
        const introIcon = document.createElement('div');
        introIcon.className = 'intro-icon';
        introIcon.innerHTML = '<i class="fas fa-drafting-compass"></i>';
        introCard.appendChild(introIcon);
        
        const introContent = document.createElement('div');
        introContent.className = 'intro-content';
        
        const introTitle = document.createElement('h3');
        introTitle.className = 'intro-title';
        introTitle.textContent = 'Why Architecture Matters';
        introContent.appendChild(introTitle);
        
        const introParagraph1 = document.createElement('p');
        introParagraph1.className = 'intro-text';
        introParagraph1.innerHTML = 'Even for a prototype you need to spend the time getting the architecture right! This step is essential if you are using a number of different technologies.';
        introContent.appendChild(introParagraph1);
        
        const introParagraph2 = document.createElement('p');
        introParagraph2.className = 'intro-text';
        introParagraph2.innerHTML = 'For my prototype I chose a React Front end and Python Django backend which was established as part of my requirements gathering (see section 6.1 Technology Recommendation) when looking at the different technology options and evaluating the best options given the business requirements.';
        introContent.appendChild(introParagraph2);
        
        introCard.appendChild(introContent);
        introSection.appendChild(introCard);
        container.appendChild(introSection);
        
        // Two-Stage Architecture Design with visual comparison
        const approachSection = document.createElement('div');
        approachSection.className = 'approach-section';
        
        const approachTitle = document.createElement('h3');
        approachTitle.className = 'section-title';
        approachTitle.textContent = 'Two-Stage Architecture Design';
        approachSection.appendChild(approachTitle);
        
        // Create a comparison container
        const comparisonContainer = document.createElement('div');
        comparisonContainer.className = 'comparison-container';
        
        // Original Version Card
        const originalCard = document.createElement('div');
        originalCard.className = 'comparison-card original-card';
        
        const originalHeader = document.createElement('div');
        originalHeader.className = 'card-header';
        
        const originalIcon = document.createElement('div');
        originalIcon.className = 'card-icon';
        originalIcon.innerHTML = '<i class="fas fa-code"></i>';
        originalHeader.appendChild(originalIcon);
        
        const originalTitle = document.createElement('h4');
        originalTitle.className = 'card-title';
        originalTitle.textContent = 'Original Version';
        originalHeader.appendChild(originalTitle);
        
        originalCard.appendChild(originalHeader);
        
        const originalContent = document.createElement('div');
        originalContent.className = 'card-content';
        
        const originalPromptLabel = document.createElement('div');
        originalPromptLabel.className = 'prompt-label';
        originalPromptLabel.innerHTML = '<i class="fas fa-terminal"></i> Prompt:';
        originalContent.appendChild(originalPromptLabel);
        
        const originalPrompt = document.createElement('div');
        originalPrompt.className = 'prompt-code';
        originalPrompt.textContent = `I'm working on implementing a Credit Risk Workflow Tool using Django and a custom workflow engine. The system will track credit limit requests through approval stages (from Front Office to Credit Risk to Legal to final approval). Key requirements: 
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
4. Authentication and permission system implementation`;
        originalContent.appendChild(originalPrompt);
        
        const originalLocation = document.createElement('div');
        originalLocation.className = 'prompt-location';
        originalLocation.innerHTML = '<i class="fas fa-map-marker-alt"></i> <strong>Location:</strong> See Claude steps in Project folder in chat entitled: "Credit Risk Workflow Tool with Django"';
        originalContent.appendChild(originalLocation);
        
        originalCard.appendChild(originalContent);
        comparisonContainer.appendChild(originalCard);
        
        // New Version Card
        const newCard = document.createElement('div');
        newCard.className = 'comparison-card new-card';
        
        const newHeader = document.createElement('div');
        newHeader.className = 'card-header';
        
        const newIcon = document.createElement('div');
        newIcon.className = 'card-icon';
        newIcon.innerHTML = '<i class="fas fa-code-branch"></i>';
        newHeader.appendChild(newIcon);
        
        const newTitle = document.createElement('h4');
        newTitle.className = 'card-title';
        newTitle.textContent = 'New Version';
        newHeader.appendChild(newTitle);
        
        newCard.appendChild(newHeader);
        
        const newContent = document.createElement('div');
        newContent.className = 'card-content';
        
        const newPromptLabel = document.createElement('div');
        newPromptLabel.className = 'prompt-label';
        newPromptLabel.innerHTML = '<i class="fas fa-terminal"></i> Prompt:';
        newContent.appendChild(newPromptLabel);
        
        const newPrompt = document.createElement('div');
        newPrompt.className = 'prompt-code';
        newPrompt.textContent = `I am looking to build a Credit Risk Workflow application in python django. I have already done some pre-work designing some screens for the front end using react. Would these react front end screens integrate well with a python django app or should they rather be taken as inspiration. What is best to use for the front end development?`;
        newContent.appendChild(newPrompt);
        
        const newLocation = document.createElement('div');
        newLocation.className = 'prompt-location';
        newLocation.innerHTML = '<i class="fas fa-map-marker-alt"></i> <strong>Location:</strong> See Claude steps in chat (not in project folder) entitled: "Integrating React Front-end within Django Credit Risk App"';
        newContent.appendChild(newLocation);
        
        newCard.appendChild(newContent);
        comparisonContainer.appendChild(newCard);
        
        approachSection.appendChild(comparisonContainer);
        container.appendChild(approachSection);
        
        // Architecture Diagram with visual appeal
        const diagramSection = document.createElement('div');
        diagramSection.className = 'diagram-section';
        
        const diagramTitle = document.createElement('h3');
        diagramTitle.className = 'section-title';
        diagramTitle.textContent = 'Architecture Overview';
        diagramSection.appendChild(diagramTitle);
        
        // Create a modern architecture diagram
        const diagram = document.createElement('div');
        diagram.className = 'architecture-diagram';
        
        // Frontend Layer
        const frontendLayer = document.createElement('div');
        frontendLayer.className = 'arch-layer frontend-layer';
        
        const frontendComponent = document.createElement('div');
        frontendComponent.className = 'arch-component';
        
        const frontendIcon = document.createElement('div');
        frontendIcon.className = 'component-icon';
        frontendIcon.innerHTML = '<i class="fas fa-laptop-code"></i>';
        frontendComponent.appendChild(frontendIcon);
        
        const frontendContent = document.createElement('div');
        frontendContent.className = 'component-content';
        
        const frontendTitle = document.createElement('h4');
        frontendTitle.className = 'component-title';
        frontendTitle.textContent = 'React Frontend';
        frontendContent.appendChild(frontendTitle);
        
        const frontendDetails = document.createElement('div');
        frontendDetails.className = 'component-details';
        frontendDetails.textContent = 'Material-UI Components';
        frontendContent.appendChild(frontendDetails);
        
        frontendComponent.appendChild(frontendContent);
        frontendLayer.appendChild(frontendComponent);
        
        // Arrow
        const arrow1 = document.createElement('div');
        arrow1.className = 'arch-arrow';
        arrow1.innerHTML = '<i class="fas fa-long-arrow-alt-down"></i>';
        
        // API Layer
        const apiLayer = document.createElement('div');
        apiLayer.className = 'arch-layer api-layer';
        
        const apiComponent = document.createElement('div');
        apiComponent.className = 'arch-component';
        
        const apiIcon = document.createElement('div');
        apiIcon.className = 'component-icon';
        apiIcon.innerHTML = '<i class="fas fa-exchange-alt"></i>';
        apiComponent.appendChild(apiIcon);
        
        const apiContent = document.createElement('div');
        apiContent.className = 'component-content';
        
        const apiTitle = document.createElement('h4');
        apiTitle.className = 'component-title';
        apiTitle.textContent = 'Django REST API';
        apiContent.appendChild(apiTitle);
        
        const apiDetails = document.createElement('div');
        apiDetails.className = 'component-details';
        apiDetails.textContent = 'Django REST Framework';
        apiContent.appendChild(apiDetails);
        
        apiComponent.appendChild(apiContent);
        apiLayer.appendChild(apiComponent);
        
        // Arrow
        const arrow2 = document.createElement('div');
        arrow2.className = 'arch-arrow';
        arrow2.innerHTML = '<i class="fas fa-long-arrow-alt-down"></i>';
        
        // Backend Layer
        const backendLayer = document.createElement('div');
        backendLayer.className = 'arch-layer backend-layer';
        
        // Workflow Engine Component
        const workflowComponent = document.createElement('div');
        workflowComponent.className = 'arch-component workflow-component';
        
        const workflowIcon = document.createElement('div');
        workflowIcon.className = 'component-icon';
        workflowIcon.innerHTML = '<i class="fas fa-cogs"></i>';
        workflowComponent.appendChild(workflowIcon);
        
        const workflowContent = document.createElement('div');
        workflowContent.className = 'component-content';
        
        const workflowTitle = document.createElement('h4');
        workflowTitle.className = 'component-title';
        workflowTitle.textContent = 'Workflow Engine';
        workflowContent.appendChild(workflowTitle);
        
        const workflowDetails = document.createElement('div');
        workflowDetails.className = 'component-details';
        workflowDetails.textContent = 'Custom Django App';
        workflowContent.appendChild(workflowDetails);
        
        workflowComponent.appendChild(workflowContent);
        backendLayer.appendChild(workflowComponent);
        
        // Models Component
        const modelsComponent = document.createElement('div');
        modelsComponent.className = 'arch-component models-component';
        
        const modelsIcon = document.createElement('div');
        modelsIcon.className = 'component-icon';
        modelsIcon.innerHTML = '<i class="fas fa-database"></i>';
        modelsComponent.appendChild(modelsIcon);
        
        const modelsContent = document.createElement('div');
        modelsContent.className = 'component-content';
        
        const modelsTitle = document.createElement('h4');
        modelsTitle.className = 'component-title';
        modelsTitle.textContent = 'Django Models';
        modelsContent.appendChild(modelsTitle);
        
        const modelsDetails = document.createElement('div');
        modelsDetails.className = 'component-details';
        modelsDetails.textContent = 'ORM + PostgreSQL';
        modelsContent.appendChild(modelsDetails);
        
        modelsComponent.appendChild(modelsContent);
        backendLayer.appendChild(modelsComponent);
        
        // Auth Component
        const authComponent = document.createElement('div');
        authComponent.className = 'arch-component auth-component';
        
        const authIcon = document.createElement('div');
        authIcon.className = 'component-icon';
        authIcon.innerHTML = '<i class="fas fa-user-shield"></i>';
        authComponent.appendChild(authIcon);
        
        const authContent = document.createElement('div');
        authContent.className = 'component-content';
        
        const authTitle = document.createElement('h4');
        authTitle.className = 'component-title';
        authTitle.textContent = 'Authentication';
        authContent.appendChild(authTitle);
        
        const authDetails = document.createElement('div');
        authDetails.className = 'component-details';
        authDetails.textContent = 'Django Auth + JWT';
        authContent.appendChild(authDetails);
        
        authComponent.appendChild(authContent);
        backendLayer.appendChild(authComponent);
        
        diagram.appendChild(frontendLayer);
        diagram.appendChild(arrow1);
        diagram.appendChild(apiLayer);
        diagram.appendChild(arrow2);
        diagram.appendChild(backendLayer);
        
        diagramSection.appendChild(diagram);
        container.appendChild(diagramSection);
        
        // Architecture Benefits
        const benefitsSection = document.createElement('div');
        benefitsSection.className = 'benefits-section';
        
        const benefitsTitle = document.createElement('h3');
        benefitsTitle.className = 'section-title';
        benefitsTitle.textContent = 'Architecture Benefits';
        benefitsSection.appendChild(benefitsTitle);
        
        // Create a grid of benefit cards
        const benefitsGrid = document.createElement('div');
        benefitsGrid.className = 'benefits-grid';
        
        const benefits = [
            {
                title: 'Separation of Concerns',
                description: 'Clear division between frontend UI and backend logic',
                icon: 'fa-layer-group',
                color: '#0c4da2'
            },
            {
                title: 'Scalability',
                description: 'Independent scaling of frontend and backend components',
                icon: 'fa-expand-arrows-alt',
                color: '#e31937'
            },
            {
                title: 'Maintainability',
                description: 'Modular components that can be updated independently',
                icon: 'fa-tools',
                color: '#38B2AC'
            },
            {
                title: 'Security',
                description: 'JWT-based authentication and Django\'s security features',
                icon: 'fa-shield-alt',
                color: '#805AD5'
            }
        ];
        
        benefits.forEach(benefit => {
            const benefitCard = document.createElement('div');
            benefitCard.className = 'benefit-card';
            
            const benefitIcon = document.createElement('div');
            benefitIcon.className = 'benefit-icon';
            benefitIcon.style.backgroundColor = benefit.color;
            benefitIcon.innerHTML = `<i class="fas ${benefit.icon}"></i>`;
            benefitCard.appendChild(benefitIcon);
            
            const benefitContent = document.createElement('div');
            benefitContent.className = 'benefit-content';
            
            const benefitTitle = document.createElement('h4');
            benefitTitle.className = 'benefit-title';
            benefitTitle.textContent = benefit.title;
            benefitContent.appendChild(benefitTitle);
            
            const benefitDescription = document.createElement('p');
            benefitDescription.className = 'benefit-description';
            benefitDescription.textContent = benefit.description;
            benefitContent.appendChild(benefitDescription);
            
            benefitCard.appendChild(benefitContent);
            benefitsGrid.appendChild(benefitCard);
        });
        
        benefitsSection.appendChild(benefitsGrid);
        container.appendChild(benefitsSection);
        
        // Final Document with visual callout
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
        finalTitle.textContent = 'Final Architecture Document';
        finalContent.appendChild(finalTitle);
        
        const finalText = document.createElement('p');
        finalText.className = 'final-text';
        finalText.innerHTML = 'See final document entitled: <strong>Credit-Risk-workflow-architecture</strong>';
        finalContent.appendChild(finalText);
        
        finalCard.appendChild(finalContent);
        finalSection.appendChild(finalCard);
        
        container.appendChild(finalSection);
        
        // Add CSS for this component
        const style = document.createElement('style');
        style.textContent = `
            .architecture-design-container {
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
            
            .intro-title {
                font-size: 1.25rem;
                font-weight: 600;
                color: #0c4da2;
                margin-top: 0;
                margin-bottom: 1rem;
            }
            
            .intro-text {
                font-size: 1rem;
                line-height: 1.6;
                color: #4A5568;
                margin: 0 0 1rem;
            }
            
            .intro-text:last-child {
                margin-bottom: 0;
            }
            
            .approach-section {
                margin-bottom: 2.5rem;
            }
            
            .comparison-container {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: 1.5rem;
            }
            
            .comparison-card {
                background-color: white;
                border-radius: 0.5rem;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                border: 1px solid #E4E7EB;
                overflow: hidden;
                transition: transform 0.2s ease-out;
            }
            
            .comparison-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            
            .original-card {
                border-top: 4px solid #0c4da2;
            }
            
            .new-card {
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
            }
            
            .prompt-label {
                font-weight: 600;
                margin-bottom: 0.75rem;
                color: #4A5568;
                display: flex;
                align-items: center;
                gap: 0.5rem;
            }
            
            .prompt-code {
                background-color: #F5F7FA;
                padding: 1rem;
                border-radius: 0.25rem;
                font-family: monospace;
                font-size: 0.875rem;
                line-height: 1.6;
                color: #4A5568;
                white-space: pre-wrap;
                margin-bottom: 1rem;
                border-left: 3px solid #CBD2D9;
            }
            
            .prompt-location {
                font-size: 0.875rem;
                color: #4A5568;
                display: flex;
                align-items: center;
                gap: 0.5rem;
            }
            
            .diagram-section {
                margin-bottom: 2.5rem;
            }
            
            .architecture-diagram {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 1rem;
                padding: 1.5rem;
                background-color: #f8fafc;
                border-radius: 0.5rem;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
            }
            
            .arch-layer {
                width: 100%;
                display: flex;
                justify-content: center;
                gap: 1.5rem;
                flex-wrap: wrap;
            }
            
            .frontend-layer .arch-component {
                background-color: #ebf4ff;
                border-left: 4px solid #0c4da2;
            }
            
            .api-layer .arch-component {
                background-color: #fef6e7;
                border-left: 4px solid #dd6b20;
            }
            
            .backend-layer .arch-component {
                background-color: #e6fffa;
                border-left: 4px solid #38B2AC;
            }
            
            .arch-component {
                padding: 1rem;
                border-radius: 0.25rem;
                display: flex;
                align-items: center;
                min-width: 250px;
                box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
            }
            
            .component-icon {
                font-size: 1.5rem;
                margin-right: 1rem;
                color: #4A5568;
            }
            
            .component-content {
                flex: 1;
            }
            
            .component-title {
                font-size: 1rem;
                font-weight: 600;
                margin: 0 0 0.25rem;
                color: #323F4B;
            }
            
            .component-details {
                font-size: 0.75rem;
                color: #718096;
            }
            
            .arch-arrow {
                font-size: 1.5rem;
                color: #718096;
            }
            
            .benefits-section {
                margin-bottom: 2.5rem;
            }
            
            .benefits-grid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
                gap: 1.5rem;
            }
            
            .benefit-card {
                background-color: white;
                border-radius: 0.5rem;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                padding: 1.5rem;
                display: flex;
                align-items: flex-start;
                transition: transform 0.2s ease-out;
                border: 1px solid #E4E7EB;
            }
            
            .benefit-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            
            .benefit-icon {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: 1rem;
                color: white;
                font-size: 1.25rem;
                flex-shrink: 0;
            }
            
            .benefit-content {
                flex: 1;
            }
            
            .benefit-title {
                font-size: 1.125rem;
                font-weight: 600;
                margin: 0 0 0.5rem;
                color: #323F4B;
            }
            
            .benefit-description {
                font-size: 0.875rem;
                color: #4A5568;
                margin: 0;
                line-height: 1.5;
            }
            
            .final-section {
                margin-bottom: 1.5rem;
            }
            
            .final-card {
                background-color: #e6edf7;
                border-radius: 0.5rem;
                padding: 1.5rem;
                display: flex;
                align-items: center;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
            }
            
            .final-icon {
                font-size: 2rem;
                color: #0c4da2;
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
                margin-bottom: 0.5rem;
            }
            
            .final-text {
                font-size: 1rem;
                color: #4A5568;
                margin: 0;
            }
            
            @media (max-width: 768px) {
                .comparison-container {
                    grid-template-columns: 1fr;
                }
                
                .arch-layer {
                    flex-direction: column;
                    align-items: center;
                }
                
                .benefits-grid {
                    grid-template-columns: 1fr;
                }
                
                .final-card {
                    flex-direction: column;
                    text-align: center;
                }
                
                .final-icon {
                    margin-right: 0;
                    margin-bottom: 1rem;
                }
                
                .intro-card {
                    flex-direction: column;
                }
                
                .intro-icon {
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
