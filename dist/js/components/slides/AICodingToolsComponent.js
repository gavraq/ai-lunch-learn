// AI Coding Tools Component
class AICodingToolsComponent extends BaseComponent {
    constructor(slideData) {
        super(slideData);
        this.initialized = false;
    }
    
    createContent() {
        const container = document.createElement('div');
        container.className = 'ai-coding-tools-container';
        
        // Title section with visual impact
        const titleSection = document.createElement('div');
        titleSection.className = 'title-section';
        
        const title = document.createElement('h2');
        title.className = 'slide-title';
        title.textContent = 'Step 9: Set up AI Coding Tools';
        titleSection.appendChild(title);
        
        container.appendChild(titleSection);
        
        // Introduction with visual emphasis
        const introSection = document.createElement('div');
        introSection.className = 'intro-section';
        
        const introCard = document.createElement('div');
        introCard.className = 'intro-card';
        
        const introIcon = document.createElement('div');
        introIcon.className = 'intro-icon';
        introIcon.innerHTML = '<i class="fas fa-robot"></i>';
        introCard.appendChild(introIcon);
        
        const introContent = document.createElement('div');
        introContent.className = 'intro-content';
        
        const introParagraph = document.createElement('p');
        introParagraph.className = 'intro-text';
        introParagraph.innerHTML = 'Modern AI coding tools, as outlined in the Vibe Coding section, are the key to doing prototypes as a non-developer. These tools allow you to code using just natural language.';
        introContent.appendChild(introParagraph);
        
        introCard.appendChild(introContent);
        introSection.appendChild(introCard);
        container.appendChild(introSection);
        
        // AI Coding Tools with visual cards
        const toolsSection = document.createElement('div');
        toolsSection.className = 'tools-section';
        
        const toolsTitle = document.createElement('h3');
        toolsTitle.className = 'section-title';
        toolsTitle.textContent = 'Popular AI Coding Tools';
        toolsSection.appendChild(toolsTitle);
        
        // Create cards for different AI coding tools
        const toolsGrid = document.createElement('div');
        toolsGrid.className = 'tools-grid';
        
        const tools = [
            {
                name: 'Cursor',
                url: 'https://cursor.ai/',
                description: 'AI-powered code editor with integrated LLM capabilities',
                icon: 'fa-terminal',
                color: '#4299E1'
            },
            {
                name: 'Windsurf',
                url: 'https://windsurf.com',
                description: 'Agentic coding assistant with advanced tool integration',
                icon: 'fa-code',
                color: '#0c4da2'
            },
            {
                name: 'Lovable',
                url: 'https://lovable.dev/',
                description: 'AI-powered app development platform',
                icon: 'fa-heart',
                color: '#e31937'
            },
            {
                name: 'Replit',
                url: 'https://replit.com/',
                description: 'Collaborative coding platform with AI features',
                icon: 'fa-laptop-code',
                color: '#38A169'
            }
        ];
        
        tools.forEach(tool => {
            const toolCard = document.createElement('div');
            toolCard.className = 'tool-card';
            
            const toolHeader = document.createElement('div');
            toolHeader.className = 'tool-header';
            toolHeader.style.backgroundColor = tool.color;
            
            const toolIcon = document.createElement('div');
            toolIcon.className = 'tool-icon';
            toolIcon.innerHTML = `<i class="fas ${tool.icon}"></i>`;
            toolHeader.appendChild(toolIcon);
            
            const toolName = document.createElement('div');
            toolName.className = 'tool-name';
            toolName.textContent = tool.name;
            toolHeader.appendChild(toolName);
            
            toolCard.appendChild(toolHeader);
            
            const toolBody = document.createElement('div');
            toolBody.className = 'tool-body';
            
            const toolDescription = document.createElement('div');
            toolDescription.className = 'tool-description';
            toolDescription.textContent = tool.description;
            toolBody.appendChild(toolDescription);
            
            const toolLink = document.createElement('a');
            toolLink.className = 'tool-link';
            toolLink.href = tool.url;
            toolLink.target = '_blank';
            toolLink.innerHTML = `<i class="fas fa-external-link-alt"></i> Visit Site`;
            toolLink.style.color = tool.color;
            toolBody.appendChild(toolLink);
            
            toolCard.appendChild(toolBody);
            toolsGrid.appendChild(toolCard);
        });
        
        toolsSection.appendChild(toolsGrid);
        container.appendChild(toolsSection);
        
        // Low-Code Solutions with visual callout
        const lowCodeSection = document.createElement('div');
        lowCodeSection.className = 'low-code-section';
        
        const lowCodeTitle = document.createElement('h3');
        lowCodeTitle.className = 'section-title';
        lowCodeTitle.textContent = 'Low-Code Solutions';
        lowCodeSection.appendChild(lowCodeTitle);
        
        const lowCodeCard = document.createElement('div');
        lowCodeCard.className = 'low-code-card';
        
        const lowCodeIcon = document.createElement('div');
        lowCodeIcon.className = 'low-code-icon';
        lowCodeIcon.innerHTML = '<i class="fas fa-puzzle-piece"></i>';
        lowCodeCard.appendChild(lowCodeIcon);
        
        const lowCodeContent = document.createElement('div');
        lowCodeContent.className = 'low-code-content';
        
        const lowCodeText = document.createElement('p');
        lowCodeText.className = 'low-code-text';
        lowCodeText.innerHTML = 'There are also Low-Code solutions such as <a href="https://n8n.io/" target="_blank">n8n</a> which are very powerful tools, especially for workflow automation.';
        lowCodeContent.appendChild(lowCodeText);
        
        lowCodeCard.appendChild(lowCodeContent);
        lowCodeSection.appendChild(lowCodeCard);
        
        container.appendChild(lowCodeSection);
        
        // Local Rules with visual emphasis
        const rulesSection = document.createElement('div');
        rulesSection.className = 'rules-section';
        
        const rulesTitle = document.createElement('h3');
        rulesTitle.className = 'section-title';
        rulesTitle.textContent = 'Setting Up Local Rules';
        rulesSection.appendChild(rulesTitle);
        
        const rulesCard = document.createElement('div');
        rulesCard.className = 'rules-card';
        
        const rulesContent = document.createElement('p');
        rulesContent.className = 'rules-text';
        rulesContent.innerHTML = 'In order to get the best out of these tools, you want to keep the LLM focused on the particular coding language choices made during the technology evaluation phase of your plan. In my example that is Python Django and React.';
        rulesCard.appendChild(rulesContent);
        
        // Create a visually appealing prompt container
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
        promptHeaderText.textContent = 'Local Rules Prompt';
        promptHeader.appendChild(promptHeaderText);
        
        promptContainer.appendChild(promptHeader);
        
        const promptCode = document.createElement('div');
        promptCode.className = 'prompt-code';
        promptCode.textContent = 'I have added a local rules file to my credit-project entitled .windsurfrules, stored here: /Users/gavinslater/projects/credit-project. Can you use this to create your own local rules for this project.';
        promptContainer.appendChild(promptCode);
        
        // Copy button for the prompt
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-button';
        copyButton.innerHTML = '<i class="fas fa-copy"></i> Copy';
        copyButton.setAttribute('data-code', 'I have added a local rules file to my credit-project entitled .windsurfrules, stored here: /Users/gavinslater/projects/credit-project. Can you use this to create your own local rules for this project.');
        promptContainer.appendChild(copyButton);
        
        rulesCard.appendChild(promptContainer);
        rulesSection.appendChild(rulesCard);
        
        container.appendChild(rulesSection);
        
        // Example Rules with visual styling
        const exampleSection = document.createElement('div');
        exampleSection.className = 'example-section';
        
        const exampleTitle = document.createElement('h3');
        exampleTitle.className = 'section-title';
        exampleTitle.textContent = 'Example Local Rules';
        exampleSection.appendChild(exampleTitle);
        
        // Create a visually appealing code container
        const exampleContainer = document.createElement('div');
        exampleContainer.className = 'example-container';
        
        const exampleHeader = document.createElement('div');
        exampleHeader.className = 'example-header';
        
        const exampleIcon = document.createElement('div');
        exampleIcon.className = 'example-icon';
        exampleIcon.innerHTML = '<i class="fas fa-list-ul"></i>';
        exampleHeader.appendChild(exampleIcon);
        
        const exampleHeaderText = document.createElement('div');
        exampleHeaderText.className = 'example-header-text';
        exampleHeaderText.textContent = 'Cascade Local Rules for credit-project';
        exampleHeader.appendChild(exampleHeaderText);
        
        exampleContainer.appendChild(exampleHeader);
        
        const exampleCode = document.createElement('div');
        exampleCode.className = 'example-code';
        
        const codeContent = `1. Write clear, technical code with precise Django implementations.
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
        
        exampleCode.textContent = codeContent;
        exampleContainer.appendChild(exampleCode);
        
        // Copy button for the example
        const exampleCopyButton = document.createElement('button');
        exampleCopyButton.className = 'copy-button';
        exampleCopyButton.innerHTML = '<i class="fas fa-copy"></i> Copy';
        exampleCopyButton.setAttribute('data-code', codeContent);
        exampleContainer.appendChild(exampleCopyButton);
        
        exampleSection.appendChild(exampleContainer);
        
        container.appendChild(exampleSection);
        
        // Add CSS for this component
        const style = document.createElement('style');
        style.textContent = `
            .ai-coding-tools-container {
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
            
            .tools-section {
                margin-bottom: 2.5rem;
            }
            
            .tools-grid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
                gap: 1.5rem;
            }
            
            .tool-card {
                background-color: white;
                border-radius: 0.5rem;
                overflow: hidden;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                transition: transform 0.2s ease-out, box-shadow 0.2s ease-out;
            }
            
            .tool-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            
            .tool-header {
                padding: 1.25rem;
                color: white;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                text-align: center;
            }
            
            .tool-icon {
                font-size: 2rem;
                margin-bottom: 0.75rem;
            }
            
            .tool-name {
                font-size: 1.25rem;
                font-weight: 600;
            }
            
            .tool-body {
                padding: 1.25rem;
                display: flex;
                flex-direction: column;
                height: 120px;
                justify-content: space-between;
            }
            
            .tool-description {
                color: #4A5568;
                line-height: 1.5;
                margin-bottom: 1rem;
            }
            
            .tool-link {
                display: inline-flex;
                align-items: center;
                gap: 0.5rem;
                font-weight: 500;
                text-decoration: none;
                transition: opacity 0.2s ease-out;
            }
            
            .tool-link:hover {
                opacity: 0.8;
            }
            
            .low-code-section {
                margin-bottom: 2.5rem;
            }
            
            .low-code-card {
                background-color: #f8fafc;
                border-radius: 0.5rem;
                padding: 1.5rem;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                display: flex;
                align-items: flex-start;
                border-left: 4px solid #805AD5;
            }
            
            .low-code-icon {
                font-size: 2rem;
                color: #805AD5;
                margin-right: 1.5rem;
                flex-shrink: 0;
            }
            
            .low-code-content {
                flex: 1;
            }
            
            .low-code-text {
                font-size: 1rem;
                line-height: 1.6;
                color: #4A5568;
                margin: 0;
            }
            
            .low-code-text a {
                color: #805AD5;
                text-decoration: none;
                font-weight: 500;
            }
            
            .low-code-text a:hover {
                text-decoration: underline;
            }
            
            .rules-section {
                margin-bottom: 2.5rem;
            }
            
            .rules-card {
                background-color: white;
                border-radius: 0.5rem;
                padding: 1.5rem;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
            }
            
            .rules-text {
                font-size: 1rem;
                line-height: 1.6;
                color: #4A5568;
                margin: 0 0 1.5rem;
            }
            
            .prompt-container {
                background-color: #1F2933;
                border-radius: 0.5rem;
                overflow: hidden;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
                position: relative;
                margin-bottom: 1rem;
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
            
            .example-section {
                margin-bottom: 1.5rem;
            }
            
            .example-container {
                background-color: #1F2933;
                border-radius: 0.5rem;
                overflow: hidden;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
                position: relative;
            }
            
            .example-header {
                background-color: #323F4B;
                padding: 0.75rem 1rem;
                display: flex;
                align-items: center;
            }
            
            .example-icon {
                color: #CBD2D9;
                margin-right: 0.75rem;
            }
            
            .example-header-text {
                color: white;
                font-weight: 500;
                font-size: 0.875rem;
            }
            
            .example-code {
                padding: 1.5rem;
                color: #CBD2D9;
                font-family: monospace;
                white-space: pre-wrap;
                font-size: 0.875rem;
                line-height: 1.6;
                max-height: 400px;
                overflow-y: auto;
            }
            
            @media (max-width: 768px) {
                .tools-grid {
                    grid-template-columns: 1fr;
                }
                
                .intro-card, .low-code-card {
                    flex-direction: column;
                }
                
                .intro-icon, .low-code-icon {
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
