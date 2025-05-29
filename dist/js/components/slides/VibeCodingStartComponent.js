// Vibe Coding Start Component
class VibeCodingStartComponent extends BaseComponent {
    constructor(slideData) {
        super(slideData);
        this.initialized = false;
    }
    
    createContent() {
        const container = document.createElement('div');
        container.className = 'vibe-coding-container';
        
        // Title section with visual impact
        const titleSection = document.createElement('div');
        titleSection.className = 'title-section';
        
        const title = document.createElement('h2');
        title.className = 'slide-title';
        title.textContent = 'Step 12: Start Vibe Coding';
        titleSection.appendChild(title);
        
        container.appendChild(titleSection);
        
        // Introduction with visual emphasis
        const introSection = document.createElement('div');
        introSection.className = 'intro-section';
        
        const introCard = document.createElement('div');
        introCard.className = 'intro-card';
        
        const introIcon = document.createElement('div');
        introIcon.className = 'intro-icon';
        introIcon.innerHTML = '<i class="fas fa-code"></i>';
        introCard.appendChild(introIcon);
        
        const introContent = document.createElement('div');
        introContent.className = 'intro-content';
        
        const introParagraph = document.createElement('p');
        introParagraph.className = 'intro-text';
        introParagraph.innerHTML = 'Once all the planning has been done, it\'s time to start vibe coding! This is where all the preparation pays off, allowing you to build your prototype efficiently with AI assistance.';
        introContent.appendChild(introParagraph);
        
        introCard.appendChild(introContent);
        introSection.appendChild(introCard);
        container.appendChild(introSection);
        
        // Starting Vibe Coding with visual card
        const startSection = document.createElement('div');
        startSection.className = 'start-section';
        
        const startTitle = document.createElement('h3');
        startTitle.className = 'section-title';
        startTitle.textContent = 'Starting the Coding Process';
        startSection.appendChild(startTitle);
        
        // Create a visually appealing prompt container
        const promptContainer = document.createElement('div');
        promptContainer.className = 'prompt-container';
        
        const promptHeader = document.createElement('div');
        promptHeader.className = 'prompt-header';
        
        const promptIcon = document.createElement('div');
        promptIcon.className = 'prompt-icon';
        promptIcon.innerHTML = '<i class="fas fa-terminal"></i>';
        promptHeader.appendChild(promptIcon);
        
        const promptHeaderText = document.createElement('div');
        promptHeaderText.className = 'prompt-header-text';
        promptHeaderText.textContent = 'Prompt';
        promptHeader.appendChild(promptHeaderText);
        
        promptContainer.appendChild(promptHeader);
        
        const promptCode = document.createElement('div');
        promptCode.className = 'prompt-code';
        promptCode.textContent = 'I would like to proceed with building my project can you start at task 1';
        promptContainer.appendChild(promptCode);
        
        // Copy button for the prompt
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-button';
        copyButton.innerHTML = '<i class="fas fa-copy"></i> Copy';
        copyButton.setAttribute('data-code', 'I would like to proceed with building my project can you start at task 1');
        promptContainer.appendChild(copyButton);
        
        startSection.appendChild(promptContainer);
        container.appendChild(startSection);
        
        // Vibe Coding Process with visual workflow
        const processSection = document.createElement('div');
        processSection.className = 'process-section';
        
        const processTitle = document.createElement('h3');
        processTitle.className = 'section-title';
        processTitle.textContent = 'The Vibe Coding Process';
        processSection.appendChild(processTitle);
        
        // Create a visual workflow for vibe coding
        const processSteps = [
            {
                number: 1,
                title: 'Describe Task',
                description: 'Explain what you want to build in natural language',
                icon: 'fa-comment',
                color: '#0c4da2'
            },
            {
                number: 2,
                title: 'AI Generates Code',
                description: 'AI creates code based on your description and project context',
                icon: 'fa-robot',
                color: '#e31937'
            },
            {
                number: 3,
                title: 'Review & Refine',
                description: 'Review the code and ask for refinements if needed',
                icon: 'fa-search',
                color: '#38B2AC'
            },
            {
                number: 4,
                title: 'Test & Iterate',
                description: 'Test the code and iterate based on results',
                icon: 'fa-vial',
                color: '#805AD5'
            }
        ];
        
        const processFlow = document.createElement('div');
        processFlow.className = 'process-flow';
        
        processSteps.forEach((step, index) => {
            const stepCard = document.createElement('div');
            stepCard.className = 'process-step';
            
            const stepHeader = document.createElement('div');
            stepHeader.className = 'step-header';
            stepHeader.style.backgroundColor = step.color;
            
            const stepNumber = document.createElement('div');
            stepNumber.className = 'step-number';
            stepNumber.textContent = step.number;
            stepHeader.appendChild(stepNumber);
            
            const stepIcon = document.createElement('div');
            stepIcon.className = 'step-icon';
            stepIcon.innerHTML = `<i class="fas ${step.icon}"></i>`;
            stepHeader.appendChild(stepIcon);
            
            stepCard.appendChild(stepHeader);
            
            const stepBody = document.createElement('div');
            stepBody.className = 'step-body';
            
            const stepTitle = document.createElement('div');
            stepTitle.className = 'step-title';
            stepTitle.textContent = step.title;
            stepTitle.style.color = step.color;
            stepBody.appendChild(stepTitle);
            
            const stepDescription = document.createElement('div');
            stepDescription.className = 'step-description';
            stepDescription.textContent = step.description;
            stepBody.appendChild(stepDescription);
            
            stepCard.appendChild(stepBody);
            
            if (index < processSteps.length - 1) {
                const stepArrow = document.createElement('div');
                stepArrow.className = 'step-arrow';
                stepArrow.innerHTML = '<i class="fas fa-chevron-right"></i>';
                stepCard.appendChild(stepArrow);
            }
            
            processFlow.appendChild(stepCard);
        });
        
        processSection.appendChild(processFlow);
        container.appendChild(processSection);
        
        // Example Task Implementation with visual card
        const exampleSection = document.createElement('div');
        exampleSection.className = 'example-section';
        
        const exampleTitle = document.createElement('h3');
        exampleTitle.className = 'section-title';
        exampleTitle.textContent = 'Example Task Implementation';
        exampleSection.appendChild(exampleTitle);
        
        const exampleGrid = document.createElement('div');
        exampleGrid.className = 'example-grid';
        
        // Prompt Card
        const promptCard = document.createElement('div');
        promptCard.className = 'example-card prompt-card';
        
        const promptCardHeader = document.createElement('div');
        promptCardHeader.className = 'card-header';
        
        const promptCardIcon = document.createElement('div');
        promptCardIcon.className = 'card-icon';
        promptCardIcon.innerHTML = '<i class="fas fa-user"></i>';
        promptCardHeader.appendChild(promptCardIcon);
        
        const promptCardTitle = document.createElement('div');
        promptCardTitle.className = 'card-title';
        promptCardTitle.textContent = 'Your Prompt';
        promptCardHeader.appendChild(promptCardTitle);
        
        promptCard.appendChild(promptCardHeader);
        
        const promptCardContent = document.createElement('div');
        promptCardContent.className = 'card-content';
        promptCardContent.innerHTML = `
            <p>Let's start with Task 1: Project Setup and Environment Configuration. We need to:</p>
            <ol>
                <li>Set up a Django project structure</li>
                <li>Configure a uv environment</li>
                <li>Create the basic project settings</li>
                <li>Set up separate settings for dev, test, and prod environments</li>
            </ol>
        `;
        promptCard.appendChild(promptCardContent);
        
        exampleGrid.appendChild(promptCard);
        
        // Response Card
        const responseCard = document.createElement('div');
        responseCard.className = 'example-card response-card';
        
        const responseCardHeader = document.createElement('div');
        responseCardHeader.className = 'card-header';
        
        const responseCardIcon = document.createElement('div');
        responseCardIcon.className = 'card-icon';
        responseCardIcon.innerHTML = '<i class="fas fa-robot"></i>';
        responseCardHeader.appendChild(responseCardIcon);
        
        const responseCardTitle = document.createElement('div');
        responseCardTitle.className = 'card-title';
        responseCardTitle.textContent = 'AI Response';
        responseCardHeader.appendChild(responseCardTitle);
        
        responseCard.appendChild(responseCardHeader);
        
        const responseCardContent = document.createElement('div');
        responseCardContent.className = 'card-content';
        responseCardContent.innerHTML = `
            <p>I'll help you set up the Django project with uv for environment management. Let's start by creating the project structure and configuring the environment:</p>
            
            <p><strong>Step 1: Create project directory structure</strong></p>
            <p>I'll create the following structure:</p>
            <pre class="code-preview">
credit_risk_workflow/
├── .gitignore
├── README.md
├── pyproject.toml
├── manage.py
├── credit_risk_workflow/
│   ├── __init__.py
│   ├── asgi.py
│   ├── settings/
│   │   ├── __init__.py
│   │   ├── base.py
│   │   ├── dev.py
│   │   ├── test.py
│   │   └── prod.py
│   ├── urls.py
│   └── wsgi.py
└── apps/
    └── __init__.py
            </pre>
            
            <p>Let me implement this for you...</p>
        `;
        responseCard.appendChild(responseCardContent);
        
        exampleGrid.appendChild(responseCard);
        exampleSection.appendChild(exampleGrid);
        container.appendChild(exampleSection);
        
        // Best Practices with visual card
        const practicesSection = document.createElement('div');
        practicesSection.className = 'practices-section';
        
        const practicesTitle = document.createElement('h3');
        practicesTitle.className = 'section-title';
        practicesTitle.textContent = 'Best Practices for Vibe Coding';
        practicesSection.appendChild(practicesTitle);
        
        const practicesCard = document.createElement('div');
        practicesCard.className = 'practices-card';
        
        const practicesHeader = document.createElement('div');
        practicesHeader.className = 'practices-header';
        practicesHeader.innerHTML = '<i class="fas fa-check-circle"></i> Follow These Best Practices';
        practicesCard.appendChild(practicesHeader);
        
        const practicesList = document.createElement('ul');
        practicesList.className = 'practices-list';
        
        const practices = [
            'Follow the task sequence from your project plan',
            'Be specific about what you want the AI to implement',
            'Reference your architecture and design documents',
            'Test each component as it\'s built',
            'Ask the AI to explain complex code if you don\'t understand it',
            'Keep track of progress and mark tasks as complete',
            'Commit code regularly to maintain version history'
        ];
        
        practices.forEach(practice => {
            const practiceItem = document.createElement('li');
            practiceItem.className = 'practice-item';
            practiceItem.innerHTML = `<i class="fas fa-check"></i> ${practice}`;
            practicesList.appendChild(practiceItem);
        });
        
        practicesCard.appendChild(practicesList);
        practicesSection.appendChild(practicesCard);
        container.appendChild(practicesSection);
        
        // Add CSS for this component
        const style = document.createElement('style');
        style.textContent = `
            .vibe-coding-container {
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
            
            .intro-text {
                font-size: 1rem;
                line-height: 1.6;
                color: #4A5568;
                margin: 0;
            }
            
            .start-section {
                margin-bottom: 2.5rem;
            }
            
            .prompt-container {
                background-color: #1F2933;
                border-radius: 0.5rem;
                overflow: hidden;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
                position: relative;
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
            }
            
            .copy-button {
                position: absolute;
                top: 0.5rem;
                right: 0.5rem;
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
            
            .process-section {
                margin-bottom: 2.5rem;
            }
            
            .process-flow {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                align-items: stretch;
                gap: 1rem;
            }
            
            .process-step {
                background-color: white;
                border-radius: 0.5rem;
                overflow: hidden;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                border: 1px solid #E4E7EB;
                flex: 1;
                min-width: 200px;
                max-width: 250px;
                position: relative;
                transition: transform 0.2s ease-out;
            }
            
            .process-step:hover {
                transform: translateY(-5px);
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            
            .step-header {
                padding: 1.25rem;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
            }
            
            .step-number {
                width: 2rem;
                height: 2rem;
                border-radius: 50%;
                background-color: rgba(255, 255, 255, 0.2);
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: 700;
                margin-right: 0.75rem;
            }
            
            .step-icon {
                font-size: 1.5rem;
            }
            
            .step-body {
                padding: 1.25rem;
                text-align: center;
            }
            
            .step-title {
                font-weight: 600;
                font-size: 1.125rem;
                margin-bottom: 0.75rem;
            }
            
            .step-description {
                font-size: 0.875rem;
                color: #4A5568;
                line-height: 1.5;
            }
            
            .step-arrow {
                position: absolute;
                right: -1rem;
                top: 50%;
                transform: translateY(-50%);
                color: #CBD2D9;
                font-size: 1.25rem;
                z-index: 1;
            }
            
            .example-section {
                margin-bottom: 2.5rem;
            }
            
            .example-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: 1.5rem;
            }
            
            .example-card {
                background-color: white;
                border-radius: 0.5rem;
                overflow: hidden;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                border: 1px solid #E4E7EB;
                height: 100%;
                display: flex;
                flex-direction: column;
            }
            
            .prompt-card {
                border-top: 4px solid #0c4da2;
            }
            
            .response-card {
                border-top: 4px solid #e31937;
            }
            
            .card-header {
                padding: 1rem;
                background-color: #F5F7FA;
                display: flex;
                align-items: center;
                border-bottom: 1px solid #E4E7EB;
            }
            
            .card-icon {
                margin-right: 0.75rem;
                font-size: 1.25rem;
            }
            
            .prompt-card .card-icon {
                color: #0c4da2;
            }
            
            .response-card .card-icon {
                color: #e31937;
            }
            
            .card-title {
                font-weight: 600;
                color: #323F4B;
            }
            
            .card-content {
                padding: 1.25rem;
                color: #4A5568;
                font-size: 0.875rem;
                line-height: 1.6;
                flex: 1;
            }
            
            .card-content p {
                margin-top: 0;
                margin-bottom: 1rem;
            }
            
            .card-content p:last-child {
                margin-bottom: 0;
            }
            
            .card-content ol, .card-content ul {
                margin-top: 0;
                margin-bottom: 1rem;
                padding-left: 1.5rem;
            }
            
            .card-content li {
                margin-bottom: 0.5rem;
            }
            
            .code-preview {
                background-color: #1F2933;
                color: #CBD2D9;
                padding: 1rem;
                border-radius: 0.25rem;
                font-family: monospace;
                font-size: 0.75rem;
                line-height: 1.5;
                overflow-x: auto;
                white-space: pre;
            }
            
            .practices-section {
                margin-bottom: 1.5rem;
            }
            
            .practices-card {
                background-color: white;
                border-radius: 0.5rem;
                overflow: hidden;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                border: 1px solid #E4E7EB;
                border-top: 4px solid #38A169;
            }
            
            .practices-header {
                padding: 1.25rem;
                font-weight: 600;
                font-size: 1.125rem;
                color: #38A169;
                background-color: #F5F7FA;
                border-bottom: 1px solid #E4E7EB;
            }
            
            .practices-header i {
                margin-right: 0.75rem;
            }
            
            .practices-list {
                margin: 0;
                padding: 1.25rem;
                list-style: none;
            }
            
            .practice-item {
                margin-bottom: 0.75rem;
                display: flex;
                align-items: flex-start;
                color: #4A5568;
                font-size: 0.875rem;
                line-height: 1.5;
            }
            
            .practice-item:last-child {
                margin-bottom: 0;
            }
            
            .practice-item i {
                color: #38A169;
                margin-right: 0.75rem;
                margin-top: 0.25rem;
                flex-shrink: 0;
            }
            
            @media (max-width: 768px) {
                .process-flow {
                    flex-direction: column;
                    align-items: center;
                }
                
                .process-step {
                    max-width: 100%;
                    width: 100%;
                }
                
                .step-arrow {
                    right: 50%;
                    bottom: -1.5rem;
                    top: auto;
                    transform: translateX(50%) rotate(90deg);
                }
                
                .intro-card {
                    flex-direction: column;
                }
                
                .intro-icon {
                    margin-right: 0;
                    margin-bottom: 1rem;
                }
                
                .example-grid {
                    grid-template-columns: 1fr;
                }
            }
        `;
        container.appendChild(style);
        
        return container;
    }
    
    initialize() {
        if (this.initialized) return;
        
        // Add event listeners for copy buttons
        const copyButtons = document.querySelectorAll('.copy-button');
        copyButtons.forEach(button => {
            button.addEventListener('click', () => {
                const code = button.getAttribute('data-code');
                navigator.clipboard.writeText(code).then(() => {
                    const originalText = button.innerHTML;
                    button.innerHTML = '<i class="fas fa-check"></i> Copied!';
                    setTimeout(() => {
                        button.innerHTML = originalText;
                    }, 2000);
                });
            });
        });
        
        this.initialized = true;
    }

    cleanup() {
        // Clean up event listeners
        const copyButtons = document.querySelectorAll('.copy-button');
        copyButtons.forEach(button => {
            button.removeEventListener('click', () => {});
        });
        
        this.initialized = false;
    }
}
