// AI Coding Tools Component
class AICodingToolsComponent extends BaseComponent {
    constructor(slideData) {
        super(slideData);
        this.initialized = false;
    }
    
    createContent() {
        const container = document.createElement('div');
        
        // Title
        const title = document.createElement('h2');
        title.textContent = 'Step 9: Set up AI Coding Tools';
        title.className = 'slide-title mb-md';
        container.appendChild(title);
        
        // Introduction
        const introSection = document.createElement('div');
        introSection.className = 'intro-section mb-lg';
        
        const introContent = document.createElement('p');
        introContent.innerHTML = 'Modern AI coding tools, as outlined in the Vibe Coding section, are the key to doing prototypes as a non-developer. These tools allow you to code using just natural language.';
        introSection.appendChild(introContent);
        
        container.appendChild(introSection);
        
        // AI Coding Tools
        const toolsSection = document.createElement('div');
        toolsSection.className = 'tools-section mb-lg';
        
        const toolsTitle = document.createElement('h3');
        toolsTitle.textContent = 'Popular AI Coding Tools:';
        toolsSection.appendChild(toolsTitle);
        
        // Create cards for different AI coding tools
        const toolsContainer = document.createElement('div');
        toolsContainer.className = 'tools-container';
        
        const tools = [
            {
                name: 'Cursor',
                url: 'https://cursor.ai/',
                description: 'AI-powered code editor with integrated LLM capabilities',
                icon: 'fa-terminal'
            },
            {
                name: 'Windsurf',
                url: 'https://windsurf.com',
                description: 'Agentic coding assistant with advanced tool integration',
                icon: 'fa-code'
            },
            {
                name: 'Lovable',
                url: 'https://lovable.dev/',
                description: 'AI-powered app development platform',
                icon: 'fa-heart'
            },
            {
                name: 'Replit',
                url: 'https://replit.com/',
                description: 'Collaborative coding platform with AI features',
                icon: 'fa-laptop-code'
            }
        ];
        
        tools.forEach(tool => {
            const toolCard = document.createElement('div');
            toolCard.className = 'tool-card';
            
            toolCard.innerHTML = `
                <div class="tool-icon">
                    <i class="fas ${tool.icon}"></i>
                </div>
                <div class="tool-name">${tool.name}</div>
                <div class="tool-description">${tool.description}</div>
                <a href="${tool.url}" target="_blank" class="tool-link">Visit Site</a>
            `;
            
            toolsContainer.appendChild(toolCard);
        });
        
        toolsSection.appendChild(toolsContainer);
        container.appendChild(toolsSection);
        
        // Low-Code Solutions
        const lowCodeSection = document.createElement('div');
        lowCodeSection.className = 'low-code-section mb-lg';
        
        const lowCodeTitle = document.createElement('h3');
        lowCodeTitle.textContent = 'Low-Code Solutions:';
        lowCodeSection.appendChild(lowCodeTitle);
        
        const lowCodeContent = document.createElement('p');
        lowCodeContent.innerHTML = 'There are also Low-Code solutions such as <a href="https://n8n.io/" target="_blank">n8n</a> which are very powerful tools, especially for workflow automation.';
        lowCodeSection.appendChild(lowCodeContent);
        
        container.appendChild(lowCodeSection);
        
        // Local Rules
        const rulesSection = document.createElement('div');
        rulesSection.className = 'rules-section mb-lg';
        
        const rulesTitle = document.createElement('h3');
        rulesTitle.textContent = 'Setting Up Local Rules:';
        rulesSection.appendChild(rulesTitle);
        
        const rulesContent = document.createElement('p');
        rulesContent.innerHTML = 'In order to get the best out of these tools, you want to keep the LLM focused on the particular coding language choices made during the technology evaluation phase of your plan. In my example that is Python Django and React.';
        rulesSection.appendChild(rulesContent);
        
        const rulesPrompt = document.createElement('div');
        rulesPrompt.className = 'prompt-preview';
        rulesPrompt.innerHTML = `
            <p><strong>Local Rules Prompt:</strong></p>
            <pre class="prompt-code">
I have added a local rules file to my credit-project entitled .windsurfrules, stored here: /Users/gavinslater/projects/credit-project. Can you use this to create your own local rules for this project.
            </pre>
        `;
        rulesSection.appendChild(rulesPrompt);
        
        container.appendChild(rulesSection);
        
        // Example Rules
        const exampleSection = document.createElement('div');
        exampleSection.className = 'example-section';
        
        const exampleTitle = document.createElement('h3');
        exampleTitle.textContent = 'Example Local Rules:';
        exampleSection.appendChild(exampleTitle);
        
        const exampleCode = `**Cascade Local Rules for credit-project**

1. Write clear, technical code with precise Django implementations.
2. Use Django's built-in features and tools wherever possible.
3. Prioritize readability and maintainability (PEP 8 compliance).
4. Use descriptive variable and function names with consistent naming conventions.
5. Structure the project in a modular way using specialized Django apps (e.g., users, workflow_engine, credit_applications, documents, core).
6. Each app should have a clear, single responsibility, with dedicated subdirectories for models, views, services, and tests.
7. Maintain separate settings files for different environments (dev, test, prod).
8. Keep frontend (React) and backend (Django) code separate but well-integrated.
9. Implement a service layer pattern to separate business logic from views and models:
    - Service classes for each domain (e.g., ApplicationService, WorkflowService)
    - Models focused on data structure and simple data access
    - Services orchestrate complex operations and handle transaction management
    - No business logic in views, forms, or serializers
    - Services for all advanced DB operations
10. Use Django CBVs for complex views, FBVs for simple logic.
11. Leverage Django ORM; avoid raw SQL unless necessary.
12. Extend Django user model for role-based permissions.
13. Use Django forms/model forms for validation.
14. Use middleware judiciously.
15. Workflow engine as a reusable, standalone app:
    - State machine architecture, DB-backed workflow definitions/instances
    - Generic relations for flexibility
    - Transition-level permission checks
    - Comprehensive audit trail of state transitions
    - Logic separated from domain-specific rules
16. Document management:
    - Use ContentType framework to attach documents
    - Define document types, allowed extensions, size limits
    - Unique storage paths, preserve original filenames
17. Always consider security, performance, and scalability from the start.
18. Avoid code duplication; reuse existing patterns and code where possible.
19. Write thorough tests for all major functionality.
20. Avoid major architectural changes unless explicitly instructed.
21. Focus only on code relevant to the task; do not touch unrelated code.
22. Never mock or stub data for dev/prod; only for tests.`;
        
        const codeBlock = this.createCodeBlock(exampleCode);
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
