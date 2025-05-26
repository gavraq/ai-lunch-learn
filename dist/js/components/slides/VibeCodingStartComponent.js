// Vibe Coding Start Component
class VibeCodingStartComponent extends BaseComponent {
    constructor(slideData) {
        super(slideData);
        this.initialized = false;
    }
    
    createContent() {
        const container = document.createElement('div');
        
        // Title
        const title = document.createElement('h2');
        title.textContent = 'Step 12: Start Vibe Coding';
        title.className = 'slide-title mb-md';
        container.appendChild(title);
        
        // Introduction
        const introSection = document.createElement('div');
        introSection.className = 'intro-section mb-lg';
        
        const introContent = document.createElement('p');
        introContent.innerHTML = 'Once all the planning has been done, it\'s time to start vibe coding! This is where all the preparation pays off, allowing you to build your prototype efficiently with AI assistance.';
        introSection.appendChild(introContent);
        
        container.appendChild(introSection);
        
        // Starting Vibe Coding
        const startSection = document.createElement('div');
        startSection.className = 'start-section mb-lg';
        
        const startTitle = document.createElement('h3');
        startTitle.textContent = 'Starting the Coding Process:';
        startSection.appendChild(startTitle);
        
        const startPrompt = document.createElement('div');
        startPrompt.className = 'prompt-preview';
        startPrompt.innerHTML = `
            <p><strong>Prompt:</strong></p>
            <pre class="prompt-code">I would like to proceed with building my project can you start at task 1</pre>
        `;
        startSection.appendChild(startPrompt);
        
        container.appendChild(startSection);
        
        // Vibe Coding Process
        const processSection = document.createElement('div');
        processSection.className = 'process-section mb-lg';
        
        const processTitle = document.createElement('h3');
        processTitle.textContent = 'The Vibe Coding Process:';
        processSection.appendChild(processTitle);
        
        // Create a visual workflow for vibe coding
        const process = document.createElement('div');
        process.className = 'vibe-process';
        process.innerHTML = `
            <div class="process-step">
                <div class="step-number">1</div>
                <div class="step-content">
                    <div class="step-title">Describe Task</div>
                    <div class="step-description">Explain what you want to build in natural language</div>
                </div>
            </div>
            <div class="process-arrow"><i class="fas fa-arrow-right"></i></div>
            <div class="process-step">
                <div class="step-number">2</div>
                <div class="step-content">
                    <div class="step-title">AI Generates Code</div>
                    <div class="step-description">AI creates code based on your description and project context</div>
                </div>
            </div>
            <div class="process-arrow"><i class="fas fa-arrow-right"></i></div>
            <div class="process-step">
                <div class="step-number">3</div>
                <div class="step-content">
                    <div class="step-title">Review & Refine</div>
                    <div class="step-description">Review the code and ask for refinements if needed</div>
                </div>
            </div>
            <div class="process-arrow"><i class="fas fa-arrow-right"></i></div>
            <div class="process-step">
                <div class="step-number">4</div>
                <div class="step-content">
                    <div class="step-title">Test & Iterate</div>
                    <div class="step-description">Test the code and iterate based on results</div>
                </div>
            </div>
        `;
        processSection.appendChild(process);
        
        container.appendChild(processSection);
        
        // Example Task Implementation
        const exampleSection = document.createElement('div');
        exampleSection.className = 'example-section mb-lg';
        
        const exampleTitle = document.createElement('h3');
        exampleTitle.textContent = 'Example Task Implementation:';
        exampleSection.appendChild(exampleTitle);
        
        // Create a two-column layout for the example
        const leftColumn = document.createElement('div');
        leftColumn.className = 'example-column';
        
        const promptTitle = document.createElement('h4');
        promptTitle.textContent = 'Your Prompt:';
        leftColumn.appendChild(promptTitle);
        
        const promptExample = document.createElement('div');
        promptExample.className = 'prompt-example';
        promptExample.innerHTML = `
            <p>Let's start with Task 1: Project Setup and Environment Configuration. We need to:</p>
            <ol>
                <li>Set up a Django project structure</li>
                <li>Configure a uv environment</li>
                <li>Create the basic project settings</li>
                <li>Set up separate settings for dev, test, and prod environments</li>
            </ol>
        `;
        leftColumn.appendChild(promptExample);
        
        const rightColumn = document.createElement('div');
        rightColumn.className = 'example-column';
        
        const responseTitle = document.createElement('h4');
        responseTitle.textContent = 'AI Response:';
        rightColumn.appendChild(responseTitle);
        
        const responseExample = document.createElement('div');
        responseExample.className = 'response-example';
        responseExample.innerHTML = `
            <p>I'll help you set up the Django project with uv for environment management. Let's start by creating the project structure and configuring the environment:</p>
            
            <p><strong>Step 1: Create project directory structure</strong></p>
            <p>I'll create the following structure:</p>
            <pre>
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
        rightColumn.appendChild(responseExample);
        
        const exampleLayout = this.createTwoColumnLayout(leftColumn, rightColumn);
        exampleSection.appendChild(exampleLayout);
        
        container.appendChild(exampleSection);
        
        // Best Practices
        const practicesSection = document.createElement('div');
        practicesSection.className = 'practices-section';
        
        const practicesTitle = document.createElement('h3');
        practicesTitle.textContent = 'Best Practices for Vibe Coding:';
        practicesSection.appendChild(practicesTitle);
        
        const practicesList = this.createList([
            'Follow the task sequence from your project plan',
            'Be specific about what you want the AI to implement',
            'Reference your architecture and design documents',
            'Test each component as it\'s built',
            'Ask the AI to explain complex code if you don\'t understand it',
            'Keep track of progress and mark tasks as complete',
            'Commit code regularly to maintain version history'
        ]);
        practicesSection.appendChild(practicesList);
        
        container.appendChild(practicesSection);
        
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
