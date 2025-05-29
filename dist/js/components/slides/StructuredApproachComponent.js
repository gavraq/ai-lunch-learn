// Structured Approach Component
class StructuredApproachComponent extends BaseComponent {
    constructor(slideData) {
        super(slideData);
        this.initialized = false;
    }
    
    createContent() {
        const container = document.createElement('div');
        container.className = 'structured-approach-container';
        
        // Title section with visual impact
        const titleSection = document.createElement('div');
        titleSection.className = 'title-section';
        
        const title = document.createElement('h2');
        title.className = 'slide-title';
        title.textContent = 'A Structured Prototyping Approach & Steps Involved';
        titleSection.appendChild(title);
        
        container.appendChild(titleSection);
        
        // Main approach with visually appealing flow
        const approachSection = document.createElement('div');
        approachSection.className = 'approach-section';
        
        const approachTitle = document.createElement('h3');
        approachTitle.className = 'section-title';
        approachTitle.textContent = 'Plan Before Code Approach:';
        approachSection.appendChild(approachTitle);
        
        // Create a visually appealing flow diagram
        const flowDiagram = document.createElement('div');
        flowDiagram.className = 'flow-diagram';
        
        const steps = [
            { name: 'Explore', icon: 'fa-search', color: '#4299E1' },
            { name: 'Plan', icon: 'fa-project-diagram', color: '#48BB78' },
            { name: 'Confirm', icon: 'fa-check-circle', color: '#805AD5' },
            { name: 'Code', icon: 'fa-code', color: '#E53E3E' },
            { name: 'Commit', icon: 'fa-save', color: '#DD6B20' }
        ];
        
        steps.forEach((step, index) => {
            const stepBox = document.createElement('div');
            stepBox.className = 'step-box';
            
            const stepIcon = document.createElement('div');
            stepIcon.className = 'step-icon';
            stepIcon.style.backgroundColor = step.color;
            stepIcon.innerHTML = `<i class="fas ${step.icon}"></i>`;
            stepBox.appendChild(stepIcon);
            
            const stepName = document.createElement('div');
            stepName.className = 'step-name';
            stepName.textContent = step.name;
            stepBox.appendChild(stepName);
            
            flowDiagram.appendChild(stepBox);
            
            // Add arrow if not the last step
            if (index < steps.length - 1) {
                const arrow = document.createElement('div');
                arrow.className = 'flow-arrow';
                arrow.innerHTML = '<i class="fas fa-long-arrow-alt-right"></i>';
                flowDiagram.appendChild(arrow);
            }
        });
        
        approachSection.appendChild(flowDiagram);
        
        // Key quote with visual emphasis
        const quoteCard = document.createElement('div');
        quoteCard.className = 'quote-card';
        
        const quoteText = document.createElement('p');
        quoteText.className = 'quote-text';
        quoteText.innerHTML = '<strong>"75% of real software application development is done during the planning phase"</strong>';
        quoteCard.appendChild(quoteText);
        
        approachSection.appendChild(quoteCard);
        container.appendChild(approachSection);
        
        // Alternative workflows with visual distinction
        const alternativeSection = document.createElement('div');
        alternativeSection.className = 'alternative-section';
        
        const alternativeTitle = document.createElement('h3');
        alternativeTitle.className = 'section-title';
        alternativeTitle.textContent = 'Alternative Workflows:';
        alternativeSection.appendChild(alternativeTitle);
        
        const alternativeCards = document.createElement('div');
        alternativeCards.className = 'alternative-cards';
        
        const alternatives = [
            { 
                title: 'Test-Driven', 
                steps: ['Write tests', 'Commit', 'Code', 'Iterate', 'Commit'],
                icon: 'fa-vial',
                color: '#3182CE'
            },
            { 
                title: 'Screenshot-Driven', 
                steps: ['Write code', 'Screenshot', 'Iterate'],
                icon: 'fa-camera',
                color: '#9F7AEA'
            }
        ];
        
        alternatives.forEach(alt => {
            const altCard = document.createElement('div');
            altCard.className = 'alternative-card';
            
            const altHeader = document.createElement('div');
            altHeader.className = 'alt-header';
            
            const altIcon = document.createElement('div');
            altIcon.className = 'alt-icon';
            altIcon.style.backgroundColor = alt.color;
            altIcon.innerHTML = `<i class="fas ${alt.icon}"></i>`;
            altHeader.appendChild(altIcon);
            
            const altTitle = document.createElement('h4');
            altTitle.className = 'alt-title';
            altTitle.textContent = alt.title;
            altHeader.appendChild(altTitle);
            
            altCard.appendChild(altHeader);
            
            const altSteps = document.createElement('div');
            altSteps.className = 'alt-steps';
            
            alt.steps.forEach((step, index) => {
                const stepItem = document.createElement('div');
                stepItem.className = 'alt-step-item';
                
                const stepText = document.createElement('span');
                stepText.className = 'alt-step-text';
                stepText.textContent = step;
                stepItem.appendChild(stepText);
                
                // Add arrow if not the last step
                if (index < alt.steps.length - 1) {
                    const stepArrow = document.createElement('span');
                    stepArrow.className = 'alt-step-arrow';
                    stepArrow.innerHTML = ' → ';
                    stepItem.appendChild(stepArrow);
                }
                
                altSteps.appendChild(stepItem);
            });
            
            altCard.appendChild(altSteps);
            alternativeCards.appendChild(altCard);
        });
        
        alternativeSection.appendChild(alternativeCards);
        container.appendChild(alternativeSection);
        
        // 15-Step Process with visual organization
        const processSection = document.createElement('div');
        processSection.className = 'process-section';
        
        const processTitle = document.createElement('h3');
        processTitle.className = 'section-title';
        processTitle.textContent = 'The 15-Step Process:';
        processSection.appendChild(processTitle);
        
        // Create a visually appealing grid for the steps
        const stepsGrid = document.createElement('div');
        stepsGrid.className = 'steps-grid';
        
        const allSteps = [
            { number: '1', title: 'Do some Deep Research', icon: 'fa-search', phase: 'planning' },
            { number: '2', title: 'Gather Comprehensive Business Requirements', icon: 'fa-clipboard-list', phase: 'planning' },
            { number: '3', title: 'UI/UX Design', icon: 'fa-paint-brush', phase: 'planning' },
            { number: '4', title: 'Design Specific Forms/Screens', icon: 'fa-desktop', phase: 'planning' },
            { number: '5', title: 'Architecture design', icon: 'fa-sitemap', phase: 'planning' },
            { number: '6', title: 'State Model & Database Schema', icon: 'fa-database', phase: 'planning' },
            { number: '7', title: 'Pre-Planning Consistency Check', icon: 'fa-check-double', phase: 'planning' },
            { number: '8', title: 'Project Plan', icon: 'fa-tasks', phase: 'planning' },
            { number: '9', title: 'Set up AI Coding Tools', icon: 'fa-tools', phase: 'setup' },
            { number: '10', title: 'Set up MCP Servers', icon: 'fa-server', phase: 'setup' },
            { number: '11', title: 'Project Plan using Task Master', icon: 'fa-list-check', phase: 'setup' },
            { number: '12', title: 'Start Vibe Coding', icon: 'fa-code', phase: 'execution' },
            { number: '13', title: 'Testing', icon: 'fa-vial', phase: 'execution' },
            { number: '14', title: 'Documentation', icon: 'fa-file-alt', phase: 'execution' },
            { number: '15', title: 'Regular backups', icon: 'fa-cloud-upload-alt', phase: 'execution' }
        ];
        
        allSteps.forEach(step => {
            const stepCard = document.createElement('div');
            stepCard.className = `step-card ${step.phase}-phase`;
            
            const stepNumber = document.createElement('div');
            stepNumber.className = 'step-number';
            stepNumber.textContent = step.number;
            stepCard.appendChild(stepNumber);
            
            const stepContent = document.createElement('div');
            stepContent.className = 'step-content';
            
            const stepIcon = document.createElement('i');
            stepIcon.className = `fas ${step.icon} step-icon`;
            stepContent.appendChild(stepIcon);
            
            const stepTitle = document.createElement('div');
            stepTitle.className = 'step-title';
            stepTitle.textContent = step.title;
            stepContent.appendChild(stepTitle);
            
            stepCard.appendChild(stepContent);
            stepsGrid.appendChild(stepCard);
        });
        
        processSection.appendChild(stepsGrid);
        
        // Legend for the phases
        const legend = document.createElement('div');
        legend.className = 'phase-legend';
        
        const phases = [
            { name: 'Planning Phase', color: '#4299E1', class: 'planning' },
            { name: 'Setup Phase', color: '#9F7AEA', class: 'setup' },
            { name: 'Execution Phase', color: '#48BB78', class: 'execution' }
        ];
        
        phases.forEach(phase => {
            const phaseItem = document.createElement('div');
            phaseItem.className = 'phase-item';
            
            const phaseColor = document.createElement('div');
            phaseColor.className = `phase-color ${phase.class}-color`;
            phaseItem.appendChild(phaseColor);
            
            const phaseName = document.createElement('div');
            phaseName.className = 'phase-name';
            phaseName.textContent = phase.name;
            phaseItem.appendChild(phaseName);
            
            legend.appendChild(phaseItem);
        });
        
        processSection.appendChild(legend);
        container.appendChild(processSection);
        
        // Add CSS for this component
        const style = document.createElement('style');
        style.textContent = `
            .structured-approach-container {
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
            
            .approach-section {
                margin-bottom: 2.5rem;
            }
            
            .flow-diagram {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-wrap: wrap;
                margin-bottom: 2rem;
                gap: 0.5rem;
            }
            
            .step-box {
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 1rem;
                background-color: white;
                border-radius: 0.5rem;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                width: 100px;
                transition: transform 0.2s ease-out;
            }
            
            .step-box:hover {
                transform: translateY(-5px);
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            
            .step-icon {
                width: 50px;
                height: 50px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 0.75rem;
                color: white;
                font-size: 1.5rem;
            }
            
            .step-name {
                font-weight: 600;
                font-size: 0.875rem;
                text-align: center;
            }
            
            .flow-arrow {
                font-size: 1.5rem;
                color: #9AA5B1;
                margin: 0 0.25rem;
            }
            
            .quote-card {
                background-color: #e6edf7;
                border-radius: 0.5rem;
                padding: 1.5rem;
                text-align: center;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                border-left: 4px solid #0c4da2;
                margin-top: 1.5rem;
            }
            
            .quote-text {
                font-size: 1.25rem;
                color: #323F4B;
                margin: 0;
                line-height: 1.5;
            }
            
            .alternative-section {
                margin-bottom: 2.5rem;
            }
            
            .alternative-cards {
                display: flex;
                gap: 1.5rem;
                flex-wrap: wrap;
            }
            
            .alternative-card {
                background-color: white;
                border-radius: 0.5rem;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                border: 1px solid #E4E7EB;
                overflow: hidden;
                flex: 1;
                min-width: 250px;
                transition: transform 0.2s ease-out;
            }
            
            .alternative-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            
            .alt-header {
                padding: 1rem;
                display: flex;
                align-items: center;
                border-bottom: 1px solid #E4E7EB;
                background-color: #F5F7FA;
            }
            
            .alt-icon {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: 1rem;
                color: white;
                font-size: 1.25rem;
            }
            
            .alt-title {
                font-size: 1.125rem;
                font-weight: 600;
                margin: 0;
                color: #323F4B;
            }
            
            .alt-steps {
                padding: 1.25rem;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .alt-step-item {
                display: flex;
                align-items: center;
            }
            
            .alt-step-text {
                font-weight: 500;
                color: #4A5568;
            }
            
            .alt-step-arrow {
                color: #9AA5B1;
                margin: 0 0.5rem;
            }
            
            .process-section {
                margin-bottom: 1.5rem;
            }
            
            .steps-grid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
                gap: 1rem;
                margin-bottom: 1.5rem;
            }
            
            .step-card {
                background-color: white;
                border-radius: 0.5rem;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                border: 1px solid #E4E7EB;
                padding: 1rem;
                display: flex;
                align-items: center;
                transition: transform 0.2s ease-out;
            }
            
            .step-card:hover {
                transform: translateY(-3px);
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            
            .planning-phase {
                border-left: 4px solid #4299E1;
            }
            
            .setup-phase {
                border-left: 4px solid #9F7AEA;
            }
            
            .execution-phase {
                border-left: 4px solid #48BB78;
            }
            
            .step-number {
                font-size: 1.25rem;
                font-weight: 700;
                color: #9AA5B1;
                margin-right: 1rem;
                min-width: 24px;
                text-align: center;
            }
            
            .step-content {
                display: flex;
                align-items: center;
            }
            
            .step-icon {
                margin-right: 0.75rem;
                color: #4A5568;
            }
            
            .step-title {
                font-weight: 500;
                color: #323F4B;
                font-size: 0.875rem;
            }
            
            .phase-legend {
                display: flex;
                justify-content: center;
                gap: 1.5rem;
                flex-wrap: wrap;
            }
            
            .phase-item {
                display: flex;
                align-items: center;
            }
            
            .phase-color {
                width: 16px;
                height: 16px;
                border-radius: 4px;
                margin-right: 0.5rem;
            }
            
            .planning-color {
                background-color: #4299E1;
            }
            
            .setup-color {
                background-color: #9F7AEA;
            }
            
            .execution-color {
                background-color: #48BB78;
            }
            
            .phase-name {
                font-size: 0.875rem;
                color: #4A5568;
                font-weight: 500;
            }
            
            @media (max-width: 768px) {
                .flow-diagram {
                    flex-direction: column;
                    align-items: stretch;
                }
                
                .step-box {
                    width: auto;
                    flex-direction: row;
                    justify-content: flex-start;
                }
                
                .step-icon {
                    margin-right: 1rem;
                    margin-bottom: 0;
                }
                
                .flow-arrow {
                    transform: rotate(90deg);
                    margin: 0.5rem 0;
                }
                
                .alternative-cards {
                    flex-direction: column;
                }
                
                .steps-grid {
                    grid-template-columns: 1fr;
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
