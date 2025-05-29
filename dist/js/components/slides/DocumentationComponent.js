// Documentation Component
class DocumentationComponent extends BaseComponent {
    constructor(slideData) {
        super(slideData);
        this.initialized = false;
    }
    
    createContent() {
        const container = document.createElement('div');
        container.className = 'documentation-container';
        
        // Title section with visual impact
        const titleSection = document.createElement('div');
        titleSection.className = 'title-section';
        
        const title = document.createElement('h2');
        title.className = 'slide-title';
        title.textContent = 'Step 14: Documentation';
        titleSection.appendChild(title);
        
        container.appendChild(titleSection);
        
        // Introduction with visual emphasis
        const introSection = document.createElement('div');
        introSection.className = 'intro-section';
        
        const introCard = document.createElement('div');
        introCard.className = 'intro-card';
        
        const introIcon = document.createElement('div');
        introIcon.className = 'intro-icon';
        introIcon.innerHTML = '<i class="fas fa-book"></i>';
        introCard.appendChild(introIcon);
        
        const introContent = document.createElement('div');
        introContent.className = 'intro-content';
        
        const introParagraph = document.createElement('p');
        introParagraph.className = 'intro-text';
        introParagraph.innerHTML = 'Equally important as testing is to create documentation as you go. This ensures that your prototype is well-documented and makes it easier for others to understand and maintain the code.';
        introContent.appendChild(introParagraph);
        
        introCard.appendChild(introContent);
        introSection.appendChild(introCard);
        container.appendChild(introSection);
        
        // Documentation Prompt with visual card
        const promptSection = document.createElement('div');
        promptSection.className = 'prompt-section';
        
        const promptTitle = document.createElement('h3');
        promptTitle.className = 'section-title';
        promptTitle.textContent = 'Documentation Prompt';
        promptSection.appendChild(promptTitle);
        
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
        promptCode.textContent = 'Can you create a markdown file called Task 2 Documentation with information on all of the steps we just performed for task 2 and put it in a Documentation folder';
        promptContainer.appendChild(promptCode);
        
        // Copy button for the prompt
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-button';
        copyButton.innerHTML = '<i class="fas fa-copy"></i> Copy';
        copyButton.setAttribute('data-code', promptCode.textContent);
        promptContainer.appendChild(copyButton);
        
        promptSection.appendChild(promptContainer);
        container.appendChild(promptSection);
        
        // Types of Documentation with visual cards
        const typesSection = document.createElement('div');
        typesSection.className = 'types-section';
        
        const typesTitle = document.createElement('h3');
        typesTitle.className = 'section-title';
        typesTitle.textContent = 'Types of Documentation';
        typesSection.appendChild(typesTitle);
        
        const typesGrid = document.createElement('div');
        typesGrid.className = 'types-grid';
        
        // Code Documentation Card
        const codeCard = document.createElement('div');
        codeCard.className = 'type-card code-card';
        
        const codeHeader = document.createElement('div');
        codeHeader.className = 'card-header';
        
        const codeIcon = document.createElement('div');
        codeIcon.className = 'card-icon';
        codeIcon.innerHTML = '<i class="fas fa-code"></i>';
        codeHeader.appendChild(codeIcon);
        
        const codeTitle = document.createElement('h4');
        codeTitle.className = 'card-title';
        codeTitle.textContent = 'Code Documentation';
        codeHeader.appendChild(codeTitle);
        
        codeCard.appendChild(codeHeader);
        
        const codeList = document.createElement('ul');
        codeList.className = 'card-list';
        
        const codeItems = [
            'Docstrings for classes and functions',
            'Inline comments for complex logic',
            'Module-level documentation',
            'Type hints and annotations',
            'README files for each app/module'
        ];
        
        codeItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.className = 'card-item';
            listItem.innerHTML = `<i class="fas fa-check"></i> ${item}`;
            codeList.appendChild(listItem);
        });
        
        codeCard.appendChild(codeList);
        typesGrid.appendChild(codeCard);
        
        // Project Documentation Card
        const projectCard = document.createElement('div');
        projectCard.className = 'type-card project-card';
        
        const projectHeader = document.createElement('div');
        projectHeader.className = 'card-header';
        
        const projectIcon = document.createElement('div');
        projectIcon.className = 'card-icon';
        projectIcon.innerHTML = '<i class="fas fa-project-diagram"></i>';
        projectHeader.appendChild(projectIcon);
        
        const projectTitle = document.createElement('h4');
        projectTitle.className = 'card-title';
        projectTitle.textContent = 'Project Documentation';
        projectHeader.appendChild(projectTitle);
        
        projectCard.appendChild(projectHeader);
        
        const projectList = document.createElement('ul');
        projectList.className = 'card-list';
        
        const projectItems = [
            'Architecture overview',
            'Setup and installation instructions',
            'API documentation',
            'User guides',
            'Troubleshooting guides'
        ];
        
        projectItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.className = 'card-item';
            listItem.innerHTML = `<i class="fas fa-check"></i> ${item}`;
            projectList.appendChild(listItem);
        });
        
        projectCard.appendChild(projectList);
        typesGrid.appendChild(projectCard);
        
        typesSection.appendChild(typesGrid);
        container.appendChild(typesSection);
        
        // Documentation Structure with visual tree
        const structureSection = document.createElement('div');
        structureSection.className = 'structure-section';
        
        const structureTitle = document.createElement('h3');
        structureTitle.className = 'section-title';
        structureTitle.textContent = 'Documentation Structure';
        structureSection.appendChild(structureTitle);
        
        const structureCard = document.createElement('div');
        structureCard.className = 'structure-card';
        
        // Create a visual representation of the documentation structure
        const structureTree = document.createElement('div');
        structureTree.className = 'structure-tree';
        
        const structureItems = [
            {
                type: 'folder',
                name: 'Documentation/',
                children: [
                    {
                        type: 'file',
                        name: 'README.md',
                        children: []
                    },
                    {
                        type: 'folder',
                        name: 'Tasks/',
                        children: [
                            {
                                type: 'file',
                                name: 'Task1_ProjectSetup.md',
                                children: []
                            },
                            {
                                type: 'file',
                                name: 'Task2_DatabaseSchema.md',
                                children: []
                            },
                            {
                                type: 'file',
                                name: 'Task3_Authentication.md',
                                children: []
                            },
                            {
                                type: 'file',
                                name: '...',
                                children: []
                            }
                        ]
                    },
                    {
                        type: 'folder',
                        name: 'API/',
                        children: [
                            {
                                type: 'file',
                                name: 'API_Overview.md',
                                children: []
                            },
                            {
                                type: 'file',
                                name: 'Endpoints.md',
                                children: []
                            }
                        ]
                    },
                    {
                        type: 'folder',
                        name: 'Architecture/',
                        children: [
                            {
                                type: 'file',
                                name: 'Overview.md',
                                children: []
                            },
                            {
                                type: 'file',
                                name: 'Database.md',
                                children: []
                            },
                            {
                                type: 'file',
                                name: 'Workflow.md',
                                children: []
                            }
                        ]
                    },
                    {
                        type: 'folder',
                        name: 'User/',
                        children: [
                            {
                                type: 'file',
                                name: 'Installation.md',
                                children: []
                            },
                            {
                                type: 'file',
                                name: 'UserGuide.md',
                                children: []
                            }
                        ]
                    }
                ]
            }
        ];
        
        const renderStructureItem = (item, parent, level = 0) => {
            const itemElement = document.createElement('div');
            itemElement.className = `structure-item ${item.type} level-${level}`;
            
            const itemIcon = document.createElement('span');
            itemIcon.className = 'item-icon';
            itemIcon.innerHTML = item.type === 'folder' ? '<i class="fas fa-folder"></i>' : '<i class="fas fa-file-alt"></i>';
            itemElement.appendChild(itemIcon);
            
            const itemName = document.createElement('span');
            itemName.className = 'item-name';
            itemName.textContent = item.name;
            itemElement.appendChild(itemName);
            
            parent.appendChild(itemElement);
            
            if (item.children && item.children.length > 0) {
                const childrenContainer = document.createElement('div');
                childrenContainer.className = 'structure-children';
                itemElement.appendChild(childrenContainer);
                
                item.children.forEach(child => {
                    renderStructureItem(child, childrenContainer, level + 1);
                });
            }
        };
        
        structureItems.forEach(item => {
            renderStructureItem(item, structureTree);
        });
        
        structureCard.appendChild(structureTree);
        structureSection.appendChild(structureCard);
        container.appendChild(structureSection);
        
        // Example Documentation with visual card
        const exampleSection = document.createElement('div');
        exampleSection.className = 'example-section';
        
        const exampleTitle = document.createElement('h3');
        exampleTitle.className = 'section-title';
        exampleTitle.textContent = 'Example Task Documentation';
        exampleSection.appendChild(exampleTitle);
        
        const exampleCard = document.createElement('div');
        exampleCard.className = 'example-card';
        
        const exampleHeader = document.createElement('div');
        exampleHeader.className = 'example-header';
        
        const exampleIcon = document.createElement('div');
        exampleIcon.className = 'example-icon';
        exampleIcon.innerHTML = '<i class="fas fa-file-alt"></i>';
        exampleHeader.appendChild(exampleIcon);
        
        const exampleHeaderText = document.createElement('div');
        exampleHeaderText.className = 'example-header-text';
        exampleHeaderText.textContent = 'Task2_DatabaseSchema.md';
        exampleHeader.appendChild(exampleHeaderText);
        
        exampleCard.appendChild(exampleHeader);
        
        const exampleContent = document.createElement('div');
        exampleContent.className = 'example-content';
        exampleContent.innerHTML = `
            <div class="markdown-preview">
                <h1>Task 2: Database Schema Implementation</h1>
                
                <h2>Overview</h2>
                <p>This document outlines the implementation of the database schema for the Credit Risk Workflow system, completed as part of Task 2 in our project plan.</p>
                
                <h2>Steps Performed</h2>
                
                <h3>1. Model Creation</h3>
                <p>We created the following Django models:</p>
                
                <ul>
                    <li><strong>User</strong> - Extended Django's built-in User model with role-based permissions</li>
                    <li><strong>Counterparty</strong> - Represents a financial institution or entity</li>
                    <li><strong>CreditApplication</strong> - The main model tracking credit applications</li>
                    <li><strong>LimitRequest</strong> - Represents individual credit limit requests within an application</li>
                    <li><strong>WorkflowState</strong> - Defines possible states in the workflow</li>
                    <li><strong>WorkflowTransition</strong> - Defines allowed transitions between states</li>
                    <li><strong>Document</strong> - For storing uploaded documents related to credit applications</li>
                </ul>
                
                <h3>2. Model Relationships</h3>
                <p>We established the following key relationships:</p>
                
                <ul>
                    <li>A CreditApplication belongs to a Counterparty</li>
                    <li>A CreditApplication can have multiple LimitRequests</li>
                    <li>A CreditApplication is always in a specific WorkflowState</li>
                    <li>WorkflowTransitions connect WorkflowStates and define who can perform transitions</li>
                </ul>
                
                <h3>3. Database Migrations</h3>
                <p>We created and applied migrations to set up the database schema:</p>
                <pre><code>python manage.py makemigrations
python manage.py migrate</code></pre>
                
                <h3>4. Test Data</h3>
                <p>We created fixtures to populate the database with test data for development.</p>
                
                <h2>Key Design Decisions</h2>
                
                <ol>
                    <li>Used Django's ContentType framework for generic relations between documents and other models</li>
                    <li>Implemented a custom workflow engine rather than using a third-party package</li>
                    <li>Used UUID fields for primary keys instead of auto-incrementing integers for security</li>
                </ol>
                
                <h2>Next Steps</h2>
                
                <ul>
                    <li>Implement API endpoints for these models</li>
                    <li>Create forms for data entry</li>
                    <li>Develop the workflow transition logic</li>
                </ul>
            </div>
        `;
        exampleCard.appendChild(exampleContent);
        
        exampleSection.appendChild(exampleCard);
        container.appendChild(exampleSection);
        
        // Add CSS for this component
        const style = document.createElement('style');
        style.textContent = `
            .documentation-container {
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
            
            .prompt-section {
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
            
            .types-section {
                margin-bottom: 2.5rem;
            }
            
            .types-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: 1.5rem;
            }
            
            .type-card {
                background-color: white;
                border-radius: 0.5rem;
                overflow: hidden;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                border: 1px solid #E4E7EB;
                height: 100%;
                transition: transform 0.2s ease-out;
            }
            
            .type-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            
            .code-card {
                border-top: 4px solid #0c4da2;
            }
            
            .project-card {
                border-top: 4px solid #e31937;
            }
            
            .card-header {
                padding: 1.25rem;
                background-color: #F5F7FA;
                display: flex;
                align-items: center;
                border-bottom: 1px solid #E4E7EB;
            }
            
            .card-icon {
                font-size: 1.5rem;
                margin-right: 1rem;
                flex-shrink: 0;
            }
            
            .code-card .card-icon {
                color: #0c4da2;
            }
            
            .project-card .card-icon {
                color: #e31937;
            }
            
            .card-title {
                font-size: 1.125rem;
                font-weight: 600;
                margin: 0;
                color: #323F4B;
            }
            
            .card-list {
                margin: 0;
                padding: 1.25rem;
                list-style: none;
            }
            
            .card-item {
                margin-bottom: 0.75rem;
                display: flex;
                align-items: flex-start;
                line-height: 1.5;
                color: #4A5568;
                font-size: 0.875rem;
            }
            
            .card-item:last-child {
                margin-bottom: 0;
            }
            
            .card-item i {
                margin-right: 0.75rem;
                margin-top: 0.25rem;
                flex-shrink: 0;
            }
            
            .code-card .card-item i {
                color: #0c4da2;
            }
            
            .project-card .card-item i {
                color: #e31937;
            }
            
            .structure-section {
                margin-bottom: 2.5rem;
            }
            
            .structure-card {
                background-color: white;
                border-radius: 0.5rem;
                padding: 1.5rem;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                border: 1px solid #E4E7EB;
            }
            
            .structure-tree {
                font-family: monospace;
                font-size: 0.875rem;
                line-height: 1.6;
                color: #4A5568;
            }
            
            .structure-item {
                margin-bottom: 0.5rem;
                position: relative;
            }
            
            .structure-item.folder {
                font-weight: 600;
                color: #323F4B;
            }
            
            .structure-item.file {
                font-weight: normal;
            }
            
            .item-icon {
                margin-right: 0.5rem;
            }
            
            .structure-item.folder .item-icon {
                color: #0c4da2;
            }
            
            .structure-item.file .item-icon {
                color: #e31937;
            }
            
            .structure-children {
                margin-left: 1.5rem;
                padding-left: 1rem;
                border-left: 1px dashed #CBD2D9;
            }
            
            .example-section {
                margin-bottom: 1.5rem;
            }
            
            .example-card {
                background-color: white;
                border-radius: 0.5rem;
                overflow: hidden;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                border: 1px solid #E4E7EB;
            }
            
            .example-header {
                background-color: #F5F7FA;
                padding: 0.75rem 1rem;
                display: flex;
                align-items: center;
                border-bottom: 1px solid #E4E7EB;
            }
            
            .example-icon {
                color: #0c4da2;
                margin-right: 0.75rem;
            }
            
            .example-header-text {
                color: #323F4B;
                font-weight: 500;
                font-size: 0.875rem;
            }
            
            .example-content {
                padding: 1.5rem;
                max-height: 400px;
                overflow-y: auto;
            }
            
            .markdown-preview {
                font-size: 0.875rem;
                line-height: 1.6;
                color: #4A5568;
            }
            
            .markdown-preview h1 {
                font-size: 1.5rem;
                font-weight: 700;
                color: #323F4B;
                margin-top: 0;
                margin-bottom: 1rem;
            }
            
            .markdown-preview h2 {
                font-size: 1.25rem;
                font-weight: 600;
                color: #323F4B;
                margin-top: 1.5rem;
                margin-bottom: 0.75rem;
            }
            
            .markdown-preview h3 {
                font-size: 1.125rem;
                font-weight: 600;
                color: #323F4B;
                margin-top: 1.25rem;
                margin-bottom: 0.5rem;
            }
            
            .markdown-preview p {
                margin-top: 0;
                margin-bottom: 1rem;
            }
            
            .markdown-preview ul, .markdown-preview ol {
                margin-top: 0;
                margin-bottom: 1rem;
                padding-left: 1.5rem;
            }
            
            .markdown-preview li {
                margin-bottom: 0.5rem;
            }
            
            .markdown-preview pre {
                background-color: #1F2933;
                color: #CBD2D9;
                padding: 1rem;
                border-radius: 0.25rem;
                overflow-x: auto;
                margin: 1rem 0;
            }
            
            .markdown-preview code {
                font-family: monospace;
                font-size: 0.875rem;
                line-height: 1.6;
            }
            
            @media (max-width: 768px) {
                .types-grid {
                    grid-template-columns: 1fr;
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
