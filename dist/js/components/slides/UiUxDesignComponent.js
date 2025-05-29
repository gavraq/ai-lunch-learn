// UI/UX Design Component
class UiUxDesignComponent extends BaseComponent {
    constructor(slideData) {
        super(slideData);
        this.initialized = false;
    }
    
    createContent() {
        const container = document.createElement('div');
        container.className = 'uiux-design-container';
        
        // Title section with visual impact
        const titleSection = document.createElement('div');
        titleSection.className = 'title-section';
        
        const title = document.createElement('h2');
        title.className = 'slide-title';
        title.textContent = 'Step 3: UI/UX Design';
        titleSection.appendChild(title);
        
        container.appendChild(titleSection);
        
        // Introduction with visual emphasis
        const introSection = document.createElement('div');
        introSection.className = 'intro-section';
        
        const introCard = document.createElement('div');
        introCard.className = 'intro-card';
        
        const introQuote = document.createElement('div');
        introQuote.className = 'intro-quote';
        introQuote.innerHTML = '<i class="fas fa-quote-left"></i>';
        introCard.appendChild(introQuote);
        
        const introContent = document.createElement('div');
        introContent.className = 'intro-content';
        
        const introParagraph1 = document.createElement('p');
        introParagraph1.className = 'intro-text';
        introParagraph1.innerHTML = 'In our traditional approach we are so focused on trying to capture documentation of all of the detailed functionality that we forget about UI/UX design until the very end when we are performing User Acceptance testing...and by then it is too late! Even worse, we leave the UI/UX Design to backend developers who typically are not specialists in this area.';
        introContent.appendChild(introParagraph1);
        
        const introParagraph2 = document.createElement('p');
        introParagraph2.className = 'intro-text highlight-text';
        introParagraph2.innerHTML = 'With a prototyping approach we try to build the design aspects up front since we are trying to get something in front of end-users as quickly as possible.';
        introContent.appendChild(introParagraph2);
        
        introCard.appendChild(introContent);
        introSection.appendChild(introCard);
        container.appendChild(introSection);
        
        // Design Brief section with visual styling
        const designBriefSection = document.createElement('div');
        designBriefSection.className = 'design-brief-section';
        
        const briefTitle = document.createElement('h3');
        briefTitle.className = 'section-title';
        briefTitle.textContent = 'Creating a Design Brief';
        designBriefSection.appendChild(briefTitle);
        
        const briefContent = document.createElement('p');
        briefContent.className = 'brief-text';
        briefContent.innerHTML = 'It is useful to get the design and aesthetics done first to set an overall style for the app as all other aspects of the front end need to keep consistent with that design. What we are trying to get first is a <strong>Design Brief</strong>.';
        designBriefSection.appendChild(briefContent);
        
        // Visual representation of design brief elements
        const designElementsGrid = document.createElement('div');
        designElementsGrid.className = 'design-elements-grid';
        
        const designElements = [
            { 
                category: 'Color Palette', 
                icon: 'fa-palette',
                items: [
                    'Primary colors',
                    'Secondary colors',
                    'Accent colors',
                    'Functional colors',
                    'Background colors'
                ],
                color: '#4299E1'
            },
            { 
                category: 'Typography', 
                icon: 'fa-font',
                items: [
                    'Font families',
                    'Font weights',
                    'Font styles',
                    'Text sizes',
                    'Heading hierarchy'
                ],
                color: '#805AD5'
            },
            { 
                category: 'Component Styling', 
                icon: 'fa-layer-group',
                items: [
                    'Button styling',
                    'Card styling',
                    'Input styling',
                    'Icons',
                    'Navigation elements'
                ],
                color: '#38B2AC'
            },
            { 
                category: 'Spacing & Animation', 
                icon: 'fa-ruler-combined',
                items: [
                    'App spacing',
                    'Padding and margins',
                    'Motion & animation',
                    'Transitions'
                ],
                color: '#DD6B20'
            }
        ];
        
        designElements.forEach(element => {
            const elementCard = document.createElement('div');
            elementCard.className = 'element-card';
            
            const cardHeader = document.createElement('div');
            cardHeader.className = 'element-header';
            cardHeader.style.backgroundColor = element.color;
            
            const headerIcon = document.createElement('div');
            headerIcon.className = 'element-icon';
            headerIcon.innerHTML = `<i class="fas ${element.icon}"></i>`;
            cardHeader.appendChild(headerIcon);
            
            const headerTitle = document.createElement('h4');
            headerTitle.className = 'element-title';
            headerTitle.textContent = element.category;
            cardHeader.appendChild(headerTitle);
            
            elementCard.appendChild(cardHeader);
            
            const itemsList = document.createElement('ul');
            itemsList.className = 'element-items';
            
            element.items.forEach(item => {
                const listItem = document.createElement('li');
                listItem.textContent = item;
                itemsList.appendChild(listItem);
            });
            
            elementCard.appendChild(itemsList);
            designElementsGrid.appendChild(elementCard);
        });
        
        designBriefSection.appendChild(designElementsGrid);
        container.appendChild(designBriefSection);
        
        // Example Prompt with visual styling
        const promptSection = document.createElement('div');
        promptSection.className = 'prompt-section';
        
        const promptTitle = document.createElement('h3');
        promptTitle.className = 'section-title';
        promptTitle.textContent = 'Example AI Prompt for Design Brief';
        promptSection.appendChild(promptTitle);
        
        // Create a visually appealing code block
        const promptContainer = document.createElement('div');
        promptContainer.className = 'prompt-container';
        
        const promptHeader = document.createElement('div');
        promptHeader.className = 'prompt-header';
        
        const promptIcon = document.createElement('div');
        promptIcon.className = 'prompt-icon';
        promptIcon.innerHTML = '<i class="fas fa-code"></i>';
        promptHeader.appendChild(promptIcon);
        
        const promptHeaderText = document.createElement('div');
        promptHeaderText.className = 'prompt-header-text';
        promptHeaderText.textContent = 'Design Brief Prompt';
        promptHeader.appendChild(promptHeaderText);
        
        promptContainer.appendChild(promptHeader);
        
        const promptCode = document.createElement('div');
        promptCode.className = 'prompt-code';
        
        const codeContent = `<goal>
You are an industry-veteran SaaS product designer. You've built high-touch UIs for FANG-style companies.

Your goal is to take the context below, the guidelines, and the user inspiration, and turn it into a functional UX/UI style-guide
</goal>

<guidelines>
<aesthetics>
- Bold simplicity with intuitive navigation creating frictionless experiences
- Breathable whitespace complemented by strategic color accents for visual hierarchy
- Strategic negative space calibrated for cognitive breathing room
...
</aesthetics>

<practicalities>
- The organisation is a joint venture between two companies ICBC which has a red primary colour palette 
  and standard bank which has a primary blue colour as indicated below
- icbc-red: #e31937; Primary red colour
- standard bank-blue: #0c4da2; Primary blue colour
</practicalities>
</guidelines>

<context>
<app-overview>
The app is for Credit Risk Workflow, traversing the following process:
1) Credit Request: the relationship manager requests the extension of credit limits...
...
</app-overview>
</context>`;
        
        promptCode.textContent = codeContent;
        promptContainer.appendChild(promptCode);
        
        // Copy button for the prompt
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-button';
        copyButton.innerHTML = '<i class="fas fa-copy"></i> Copy';
        copyButton.setAttribute('data-code', codeContent);
        promptContainer.appendChild(copyButton);
        
        promptSection.appendChild(promptContainer);
        container.appendChild(promptSection);
        
        // Result section with visual callout
        const resultSection = document.createElement('div');
        resultSection.className = 'result-section';
        
        const resultCard = document.createElement('div');
        resultCard.className = 'result-card';
        
        const resultIcon = document.createElement('div');
        resultIcon.className = 'result-icon';
        resultIcon.innerHTML = '<i class="fas fa-check-circle"></i>';
        resultCard.appendChild(resultIcon);
        
        const resultContent = document.createElement('div');
        resultContent.className = 'result-content';
        
        const resultTitle = document.createElement('h3');
        resultTitle.className = 'result-title';
        resultTitle.textContent = 'Result';
        resultContent.appendChild(resultTitle);
        
        const resultText = document.createElement('p');
        resultText.className = 'result-text';
        resultText.innerHTML = 'See the full Design Brief in: <strong>Credit Workflow Design Brief.md</strong>';
        resultContent.appendChild(resultText);
        
        resultCard.appendChild(resultContent);
        resultSection.appendChild(resultCard);
        
        container.appendChild(resultSection);
        
        // Design Process Flow
        const processSection = document.createElement('div');
        processSection.className = 'process-section';
        
        const processTitle = document.createElement('h3');
        processTitle.className = 'section-title';
        processTitle.textContent = 'Design Process Flow';
        processSection.appendChild(processTitle);
        
        const processFlow = document.createElement('div');
        processFlow.className = 'process-flow';
        
        const processSteps = [
            { name: 'Design Brief', description: 'Overall style guide', icon: 'fa-paint-brush' },
            { name: 'Form Design', description: 'Specific screens', icon: 'fa-window-maximize' },
            { name: 'User Testing', description: 'Early feedback', icon: 'fa-users' },
            { name: 'Refinement', description: 'Iterative improvement', icon: 'fa-sliders-h' }
        ];
        
        processSteps.forEach((step, index) => {
            const stepBox = document.createElement('div');
            stepBox.className = 'process-step';
            
            const stepIcon = document.createElement('div');
            stepIcon.className = 'step-icon';
            stepIcon.innerHTML = `<i class="fas ${step.icon}"></i>`;
            stepBox.appendChild(stepIcon);
            
            const stepContent = document.createElement('div');
            stepContent.className = 'step-content';
            
            const stepName = document.createElement('div');
            stepName.className = 'step-name';
            stepName.textContent = step.name;
            stepContent.appendChild(stepName);
            
            const stepDescription = document.createElement('div');
            stepDescription.className = 'step-description';
            stepDescription.textContent = step.description;
            stepContent.appendChild(stepDescription);
            
            stepBox.appendChild(stepContent);
            processFlow.appendChild(stepBox);
            
            // Add arrow if not the last step
            if (index < processSteps.length - 1) {
                const arrow = document.createElement('div');
                arrow.className = 'process-arrow';
                arrow.innerHTML = '<i class="fas fa-long-arrow-alt-right"></i>';
                processFlow.appendChild(arrow);
            }
        });
        
        processSection.appendChild(processFlow);
        container.appendChild(processSection);
        
        // Add CSS for this component
        const style = document.createElement('style');
        style.textContent = `
            .uiux-design-container {
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
                background-color: #e6edf7;
                border-radius: 0.5rem;
                padding: 1.5rem;
                display: flex;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                border-left: 4px solid #0c4da2;
            }
            
            .intro-quote {
                font-size: 2rem;
                color: #0c4da2;
                margin-right: 1.5rem;
                flex-shrink: 0;
                opacity: 0.5;
            }
            
            .intro-content {
                flex: 1;
            }
            
            .intro-text {
                font-size: 1rem;
                line-height: 1.6;
                color: #323F4B;
                margin: 0 0 1rem;
            }
            
            .intro-text:last-child {
                margin-bottom: 0;
            }
            
            .highlight-text {
                font-weight: 500;
                color: #0c4da2;
            }
            
            .design-brief-section {
                margin-bottom: 2.5rem;
            }
            
            .brief-text {
                font-size: 1.125rem;
                line-height: 1.6;
                color: #323F4B;
                margin-bottom: 1.5rem;
            }
            
            .design-elements-grid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
                gap: 1.5rem;
                margin-bottom: 1.5rem;
            }
            
            .element-card {
                background-color: white;
                border-radius: 0.5rem;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                border: 1px solid #E4E7EB;
                overflow: hidden;
                transition: transform 0.2s ease-out;
            }
            
            .element-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            
            .element-header {
                padding: 1rem;
                display: flex;
                align-items: center;
                color: white;
            }
            
            .element-icon {
                margin-right: 0.75rem;
                font-size: 1.25rem;
            }
            
            .element-title {
                font-size: 1.125rem;
                font-weight: 600;
                margin: 0;
            }
            
            .element-items {
                list-style: none;
                margin: 0;
                padding: 1rem;
            }
            
            .element-items li {
                padding: 0.5rem 0;
                border-bottom: 1px solid #E4E7EB;
                color: #4A5568;
            }
            
            .element-items li:last-child {
                border-bottom: none;
            }
            
            .prompt-section {
                margin-bottom: 2.5rem;
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
                display: flex;
                align-items: center;
            }
            
            .prompt-icon {
                color: #CBD2D9;
                margin-right: 0.75rem;
            }
            
            .prompt-header-text {
                color: white;
                font-weight: 500;
                font-size: 0.875rem;
            }
            
            .prompt-code {
                padding: 1.5rem;
                color: #CBD2D9;
                font-family: monospace;
                white-space: pre-wrap;
                font-size: 0.875rem;
                line-height: 1.6;
                max-height: 300px;
                overflow-y: auto;
            }
            
            .copy-button {
                position: relative;
                float: right;
                margin: 0.5rem;
                background-color: #4A5568;
                color: white;
                border: none;
                border-radius: 0.25rem;
                padding: 0.5rem 0.75rem;
                font-size: 0.75rem;
                cursor: pointer;
                display: flex;
                align-items: center;
                gap: 0.5rem;
                transition: background-color 0.2s ease-out;
            }
            
            .copy-button:hover {
                background-color: #2D3748;
            }
            
            .result-section {
                margin-bottom: 2.5rem;
            }
            
            .result-card {
                background-color: #d1fae5;
                border-radius: 0.5rem;
                padding: 1.5rem;
                display: flex;
                align-items: center;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                border-left: 4px solid #38B2AC;
            }
            
            .result-icon {
                font-size: 2rem;
                color: #38B2AC;
                margin-right: 1.5rem;
                flex-shrink: 0;
            }
            
            .result-content {
                flex: 1;
            }
            
            .result-title {
                font-size: 1.25rem;
                font-weight: 600;
                color: #065f46;
                margin-top: 0;
                margin-bottom: 0.5rem;
            }
            
            .result-text {
                color: #065f46;
                margin: 0;
                line-height: 1.5;
            }
            
            .process-section {
                margin-bottom: 1.5rem;
            }
            
            .process-flow {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-wrap: wrap;
                gap: 1rem;
                margin-top: 2rem;
            }
            
            .process-step {
                background-color: white;
                border-radius: 0.5rem;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                border: 1px solid #E4E7EB;
                padding: 1.25rem;
                display: flex;
                align-items: center;
                width: 180px;
                transition: transform 0.2s ease-out;
            }
            
            .process-step:hover {
                transform: translateY(-5px);
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            
            .step-icon {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background-color: #0c4da2;
                color: white;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: 1rem;
                flex-shrink: 0;
            }
            
            .step-content {
                flex: 1;
            }
            
            .step-name {
                font-weight: 600;
                color: #323F4B;
                margin-bottom: 0.25rem;
            }
            
            .step-description {
                font-size: 0.75rem;
                color: #4A5568;
            }
            
            .process-arrow {
                font-size: 1.5rem;
                color: #9AA5B1;
            }
            
            @media (max-width: 768px) {
                .intro-card {
                    flex-direction: column;
                }
                
                .intro-quote {
                    margin-right: 0;
                    margin-bottom: 1rem;
                    text-align: center;
                }
                
                .design-elements-grid {
                    grid-template-columns: 1fr;
                }
                
                .process-flow {
                    flex-direction: column;
                    align-items: stretch;
                }
                
                .process-step {
                    width: auto;
                }
                
                .process-arrow {
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
        
        // Add event listener for copy button
        const copyButton = container.querySelector('.copy-button');
        if (copyButton) {
            copyButton.addEventListener('click', () => {
                const codeText = copyButton.getAttribute('data-code');
                navigator.clipboard.writeText(codeText).then(() => {
                    // Show copied feedback
                    const originalText = copyButton.innerHTML;
                    copyButton.innerHTML = '<i class="fas fa-check"></i> Copied!';
                    setTimeout(() => {
                        copyButton.innerHTML = originalText;
                    }, 2000);
                });
            });
        }
        
        this.initialized = true;
    }

    cleanup() {
        // Clean up event listeners
        const copyButton = container.querySelector('.copy-button');
        if (copyButton) {
            copyButton.removeEventListener('click', null);
        }
        
        this.initialized = false;
    }
}
