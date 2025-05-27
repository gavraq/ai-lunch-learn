// Old vs New Approach Component
class OldVsNewComponent extends BaseComponent {
    constructor(slideData) {
        super(slideData);
        this.initialized = false;
    }

    createContent() {
        const container = document.createElement('div');
        container.className = 'approach-container';
        
        // Introduction section with highlight box
        const intro = document.createElement('div');
        intro.className = 'approach-intro';
        
        const introText = document.createElement('p');
        introText.className = 'approach-intro-text';
        introText.innerHTML = "Using AI to create requirement documents is just the tip of the iceberg. We can transform our entire change project approach with AI in all steps.";
        intro.appendChild(introText);
        container.appendChild(intro);
        
        // Main content section - Traditional vs New
        const approachesSection = document.createElement('div');
        approachesSection.className = 'approaches-section';
        
        // Section title
        const sectionTitle = document.createElement('h3');
        sectionTitle.className = 'approach-section-title';
        sectionTitle.textContent = 'Traditional vs Prototype-Driven Approach';
        approachesSection.appendChild(sectionTitle);
        
        // Create the comparison container - stacked vertically
        const comparisonContainer = document.createElement('div');
        comparisonContainer.className = 'comparison-container';
        
        // Traditional approach column
        const traditionalColumn = document.createElement('div');
        traditionalColumn.className = 'approach-column traditional-column';
        
        const traditionalHeader = document.createElement('div');
        traditionalHeader.className = 'approach-header';
        
        const traditionalIcon = document.createElement('div');
        traditionalIcon.className = 'approach-icon traditional-icon';
        traditionalIcon.innerHTML = '<i class="fas fa-file-alt"></i>';
        traditionalHeader.appendChild(traditionalIcon);
        
        const traditionalTitle = document.createElement('h4');
        traditionalTitle.className = 'approach-title';
        traditionalTitle.textContent = 'Traditional Document-Driven';
        traditionalHeader.appendChild(traditionalTitle);
        
        traditionalColumn.appendChild(traditionalHeader);
        
        // Traditional approach workflow - horizontal flow
        const traditionalWorkflow = document.createElement('div');
        traditionalWorkflow.className = 'approach-workflow traditional-workflow';
        
        const traditionalSteps = [
            { label: 'Business Requirements Document', icon: 'fa-file-contract' },
            { label: 'Technical Requirements Document', icon: 'fa-file-code' },
            { label: 'Code', icon: 'fa-code' },
            { label: 'Unit & Integration Testing', icon: 'fa-vial' },
            { label: 'UAT', icon: 'fa-user-check' },
            { label: 'Release', icon: 'fa-rocket' }
        ];
        
        traditionalSteps.forEach((step, index) => {
            const stepContainer = document.createElement('div');
            stepContainer.className = 'approach-step';
            
            const stepIcon = document.createElement('div');
            stepIcon.className = 'step-icon traditional-step-icon';
            stepIcon.innerHTML = `<i class="fas ${step.icon}"></i>`;
            stepContainer.appendChild(stepIcon);
            
            const stepLabel = document.createElement('div');
            stepLabel.className = 'step-label';
            stepLabel.textContent = step.label;
            stepContainer.appendChild(stepLabel);
            
            traditionalWorkflow.appendChild(stepContainer);
            
            // Add arrow if not the last step
            if (index < traditionalSteps.length - 1) {
                const arrow = document.createElement('div');
                arrow.className = 'step-arrow';
                arrow.innerHTML = '<i class="fas fa-long-arrow-alt-right"></i>';
                traditionalWorkflow.appendChild(arrow);
            }
        });
        
        traditionalColumn.appendChild(traditionalWorkflow);
        
        // Traditional approach drawbacks
        const traditionalDrawbacks = document.createElement('div');
        traditionalDrawbacks.className = 'approach-drawbacks';
        
        const drawbacksTitle = document.createElement('h5');
        drawbacksTitle.className = 'drawbacks-title';
        drawbacksTitle.textContent = 'Drawbacks:';
        traditionalDrawbacks.appendChild(drawbacksTitle);
        
        const drawbacksList = document.createElement('ul');
        drawbacksList.className = 'drawbacks-list';
        
        const drawbacks = [
            'Difficult to fully explain functionality in documents',
            'Long feedback cycles',
            'Requirements can become outdated (e.g., FMDM project)',
            'Limited end-user involvement until late stages'
        ];
        
        drawbacks.forEach(drawback => {
            const li = document.createElement('li');
            li.textContent = drawback;
            drawbacksList.appendChild(li);
        });
        
        traditionalDrawbacks.appendChild(drawbacksList);
        traditionalColumn.appendChild(traditionalDrawbacks);
        
        comparisonContainer.appendChild(traditionalColumn);
        
        // New approach column
        const newColumn = document.createElement('div');
        newColumn.className = 'approach-column new-column';
        
        const newHeader = document.createElement('div');
        newHeader.className = 'approach-header';
        
        const newIcon = document.createElement('div');
        newIcon.className = 'approach-icon new-icon';
        newIcon.innerHTML = '<i class="fas fa-project-diagram"></i>';
        newHeader.appendChild(newIcon);
        
        const newTitle = document.createElement('h4');
        newTitle.className = 'approach-title';
        newTitle.textContent = 'AI-Powered Prototype-Driven';
        newHeader.appendChild(newTitle);
        
        newColumn.appendChild(newHeader);
        
        // New approach workflow
        const newWorkflow = document.createElement('div');
        newWorkflow.className = 'approach-workflow new-workflow';
        
        // Create prototype-driven approach workflow (cycle)
        const newWorkflowContainer = document.createElement('div');
        newWorkflowContainer.style.cssText = 'width: 100%; display: flex; justify-content: center;';
        
        const cycleDiagram = document.createElement('div');
        cycleDiagram.className = 'cycle-diagram';
        cycleDiagram.style.cssText = 'position: relative; width: 400px; height: 400px; margin: 1rem 0 2rem;';
        
        // Cycle steps
        const cycleSteps = [
            { label: 'Requirements', icon: 'fa-file-alt', color: '#4299E1' },
            { label: 'Prototype', icon: 'fa-pencil-ruler', color: '#48BB78' },
            { label: 'User Feedback', icon: 'fa-comments', color: '#805AD5' },
            { label: 'Refine', icon: 'fa-sliders-h', color: '#ED8936' },
            { label: 'Develop', icon: 'fa-code', color: '#E53E3E' },
            { label: 'Test & Release', icon: 'fa-rocket', color: '#3182CE' }
        ];
        
        cycleSteps.forEach((step, index) => {
            const cycleStep = document.createElement('div');
            cycleStep.className = 'cycle-step';
            
            const cycleIcon = document.createElement('div');
            cycleIcon.className = 'cycle-icon';
            cycleIcon.style.backgroundColor = step.color;
            cycleIcon.innerHTML = `<i class="fas ${step.icon}"></i>`;
            cycleStep.appendChild(cycleIcon);
            
            const cycleLabel = document.createElement('div');
            cycleLabel.className = 'cycle-label';
            cycleLabel.textContent = step.label;
            cycleStep.appendChild(cycleLabel);
            
            // Position the step in a circle
            const angle = (index * (360 / cycleSteps.length)) * (Math.PI / 180);
            const radius = 160; // Radius of the circle
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            
            cycleStep.style.position = 'absolute';
            cycleStep.style.left = '50%';
            cycleStep.style.top = '50%';
            cycleStep.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
            
            cycleDiagram.appendChild(cycleStep);
        });
        
        // Add center text with improved visibility
        const cycleCenter = document.createElement('div');
        cycleCenter.className = 'cycle-center';
        cycleCenter.style.cssText = 'position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); background-color: #0c4da2; color: white; width: 110px; height: 110px; border-radius: 50%; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; font-weight: 700; font-size: 1.1rem; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25); z-index: 10; border: 3px solid white;';
        
        // Add text with better contrast
        const centerText = document.createElement('div');
        centerText.style.cssText = 'line-height: 1.4; text-shadow: 0 1px 3px rgba(0,0,0,0.8);';
        centerText.innerHTML = 'Iterate<br>Multiple<br>Times';
        cycleCenter.appendChild(centerText);
        
        cycleDiagram.appendChild(cycleCenter);
        newWorkflowContainer.appendChild(cycleDiagram);
        newWorkflow.appendChild(newWorkflowContainer);
        
        newColumn.appendChild(newWorkflow);
        
        // New approach benefits
        const newBenefits = document.createElement('div');
        newBenefits.className = 'approach-benefits';
        
        const benefitsTitle = document.createElement('h5');
        benefitsTitle.className = 'benefits-title';
        benefitsTitle.textContent = 'Benefits:';
        newBenefits.appendChild(benefitsTitle);
        
        const benefitsList = document.createElement('ul');
        benefitsList.className = 'benefits-list';
        
        const benefits = [
            'Early feedback from actual end-users',
            'Visualize functionality instead of just describing it',
            'Adapt to changing requirements',
            'Same steps but more iterative flow',
            'AI accelerates each step of the process'
        ];
        
        benefits.forEach(benefit => {
            const li = document.createElement('li');
            li.textContent = benefit;
            benefitsList.appendChild(li);
        });
        
        newBenefits.appendChild(benefitsList);
        newColumn.appendChild(newBenefits);
        
        comparisonContainer.appendChild(newColumn);
        approachesSection.appendChild(comparisonContainer);
        
        // Key lesson learned
        const lessonSection = document.createElement('div');
        lessonSection.className = 'lesson-section';
        
        const lessonBox = document.createElement('div');
        lessonBox.className = 'lesson-box';
        
        const lessonIcon = document.createElement('div');
        lessonIcon.className = 'lesson-icon';
        lessonIcon.innerHTML = '<i class="fas fa-lightbulb"></i>';
        lessonBox.appendChild(lessonIcon);
        
        const lessonContent = document.createElement('div');
        lessonContent.className = 'lesson-content';
        
        const lessonTitle = document.createElement('h5');
        lessonTitle.className = 'lesson-title';
        lessonTitle.textContent = 'Key Lesson Learned:';
        lessonContent.appendChild(lessonTitle);
        
        const lessonText = document.createElement('p');
        lessonText.className = 'lesson-text';
        lessonText.innerHTML = "From our FMDM project experience, we learned that functionality tested today is quite different from what was envisioned and documented 5 years ago. Prototyping provides a better mechanism for early feedback and adaptation.";
        lessonContent.appendChild(lessonText);
        
        lessonBox.appendChild(lessonContent);
        lessonSection.appendChild(lessonBox);
        
        approachesSection.appendChild(lessonSection);
        container.appendChild(approachesSection);
        
        // Add CSS for this component
        const style = document.createElement('style');
        style.textContent = `
            .approach-container {
                max-width: 1200px;
                margin: 0 auto;
                padding: 0 1rem;
                font-family: "Inter", sans-serif;
            }
            
            .approach-intro {
                background-color: #e6edf7;
                border-radius: 0.5rem;
                padding: 1.5rem;
                margin-bottom: 2rem;
                border-left: 4px solid #0c4da2;
            }
            
            .approach-intro-text {
                font-size: 1.25rem;
                font-weight: 500;
                color: #323F4B;
                margin: 0;
            }
            
            .approaches-section {
                margin-bottom: 2rem;
            }
            
            .approach-section-title {
                font-size: 1.5rem;
                font-weight: 700;
                color: #0c4da2;
                margin-top: 0;
                margin-bottom: 1.5rem;
                text-align: center;
            }
            
            .comparison-container {
                display: flex;
                flex-direction: column;
                gap: 2rem;
                margin-bottom: 2rem;
            }
            
            .approach-column {
                width: 100%;
                display: flex;
                flex-direction: column;
            }
            
            .approach-header {
                display: flex;
                align-items: center;
                margin-bottom: 1.5rem;
                padding-bottom: 0.75rem;
                border-bottom: 2px solid #E4E7EB;
            }
            
            .approach-icon {
                width: 48px;
                height: 48px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: 1rem;
            }
            
            .traditional-icon {
                background-color: #718096;
            }
            
            .new-icon {
                background-color: #0c4da2;
            }
            
            .approach-icon i {
                color: white;
                font-size: 1.5rem;
            }
            
            .approach-title {
                font-size: 1.25rem;
                font-weight: 600;
                color: #323F4B;
                margin: 0;
            }
            
            .approach-workflow {
                margin-bottom: 2rem;
                flex-grow: 1;
            }
            
            .traditional-workflow {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                flex-wrap: wrap;
                gap: 0.5rem;
                padding: 1rem;
            }
            
            .approach-step {
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
                width: 120px;
            }
            
            .step-icon {
                width: 48px;
                height: 48px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 0.5rem;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }
            
            .traditional-step-icon {
                background-color: #718096;
            }
            
            .step-icon i {
                color: white;
                font-size: 1.25rem;
            }
            
            .step-label {
                font-weight: 500;
                color: #4A5568;
                font-size: 0.85rem;
                line-height: 1.2;
                height: 40px;
                display: flex;
                align-items: center;
            }
            
            .step-arrow {
                font-size: 1.5rem;
                color: #718096;
                margin: 0 0.5rem;
                display: flex;
                align-items: center;
            }
            
            .approach-drawbacks, .approach-benefits {
                background-color: #ffffff;
                border-radius: 0.5rem;
                padding: 1.25rem;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                border: 1px solid #E4E7EB;
            }
            
            .drawbacks-title, .benefits-title {
                font-size: 1.125rem;
                font-weight: 600;
                color: #323F4B;
                margin-top: 0;
                margin-bottom: 0.75rem;
            }
            
            .drawbacks-list, .benefits-list {
                margin: 0;
                padding-left: 1.5rem;
            }
            
            .drawbacks-list li, .benefits-list li {
                margin-bottom: 0.5rem;
                color: #4A5568;
            }
            
            .approach-drawbacks {
                border-left: 4px solid #e53e3e;
            }
            
            .approach-benefits {
                border-left: 4px solid #38a169;
            }
            
            .cycle-diagram {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 400px;
                position: relative;
                margin: 1rem 0 2rem;
                overflow: visible;
            }
            
            .cycle-container {
                position: relative;
                width: 400px;
                height: 400px;
                margin: 0 auto;
            }
            
            .cycle-step {
                position: absolute;
                top: 50%;
                left: 50%;
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 100px;
                transform: translate(-50%, -50%);
                z-index: 5;
            }
            
            .cycle-icon {
                width: 56px;
                height: 56px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 0.75rem;
                box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
                border: 2px solid white;
            }
            
            .cycle-icon i {
                color: white;
                font-size: 1.5rem;
            }
            
            .cycle-label {
                font-weight: 500;
                color: #4A5568;
                text-align: center;
                font-size: 0.9rem;
                background-color: rgba(255, 255, 255, 0.9);
                padding: 0.25rem 0.5rem;
                border-radius: 0.25rem;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                max-width: 100%;
            }
            
            .cycle-center {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background-color: #0c4da2;
                color: white;
                width: 100px;
                height: 100px;
                border-radius: 50%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                text-align: center;
                font-weight: 700;
                font-size: 1rem;
                box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
                z-index: 10;
                border: 3px solid white;
            }
            
            .lesson-section {
                margin-top: 2rem;
            }
            
            .lesson-box {
                background-color: #fef6e7;
                border-radius: 0.5rem;
                padding: 1.25rem;
                display: flex;
                border-left: 4px solid #dd6b20;
            }
            
            .lesson-icon {
                color: #dd6b20;
                font-size: 2rem;
                margin-right: 1rem;
                display: flex;
                align-items: center;
            }
            
            .lesson-content {
                flex: 1;
            }
            
            .lesson-title {
                font-size: 1.125rem;
                font-weight: 600;
                color: #323F4B;
                margin-top: 0;
                margin-bottom: 0.5rem;
            }
            
            .lesson-text {
                color: #4A5568;
                margin: 0;
                line-height: 1.5;
            }
            
            @media (max-width: 768px) {
                .comparison-container {
                    flex-direction: column;
                }
                
                .cycle-diagram {
                    height: 400px;
                }
                
                .cycle-container {
                    transform: scale(0.8);
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
