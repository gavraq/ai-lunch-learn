// MCP Servers Component
class MCPServersComponent extends BaseComponent {
    constructor(slideData) {
        super(slideData);
        this.initialized = false;
    }
    
    createContent() {
        const container = document.createElement('div');
        container.className = 'mcp-servers-container';
        
        // Title section with visual impact
        const titleSection = document.createElement('div');
        titleSection.className = 'title-section';
        
        const title = document.createElement('h2');
        title.className = 'slide-title';
        title.textContent = 'Step 10: Set up MCP Servers - The Future of AI Integration';
        titleSection.appendChild(title);
        
        container.appendChild(titleSection);
        
        // Introduction with visual emphasis
        const introSection = document.createElement('div');
        introSection.className = 'intro-section';
        
        const introCard = document.createElement('div');
        introCard.className = 'intro-card';
        
        const introIcon = document.createElement('div');
        introIcon.className = 'intro-icon';
        introIcon.innerHTML = '<i class="fas fa-server"></i>';
        introCard.appendChild(introIcon);
        
        const introContent = document.createElement('div');
        introContent.className = 'intro-content';
        
        const introParagraph = document.createElement('p');
        introParagraph.className = 'intro-text';
        introParagraph.innerHTML = 'Before we start coding, we want our coding IDE to make use of some additional tools. These tools give the coding editor additional super-powers to do certain tasks for example, browse the web, search for documents in your computer, or in my case access an application that helps to build project plans - claude taskmaster.';
        introContent.appendChild(introParagraph);
        
        introCard.appendChild(introContent);
        introSection.appendChild(introCard);
        container.appendChild(introSection);
        
        // What are MCP Servers with visual callout
        const mcpSection = document.createElement('div');
        mcpSection.className = 'mcp-section';
        
        const mcpTitle = document.createElement('h3');
        mcpTitle.className = 'section-title';
        mcpTitle.textContent = 'What are MCP Servers?';
        mcpSection.appendChild(mcpTitle);
        
        const mcpCard = document.createElement('div');
        mcpCard.className = 'mcp-card';
        
        const mcpContent = document.createElement('p');
        mcpContent.className = 'mcp-text';
        mcpContent.innerHTML = 'These tools can be built into your IDE using <strong>MCP-servers</strong> (Model Context Protocol Servers), which are standardized ways for AI to interact with your tools. This protocol was developed by Anthropic and made as an open standard to allow LLMs to interact with tools to perform tasks on your behalf.';
        mcpCard.appendChild(mcpContent);
        
        const mcpLink = document.createElement('a');
        mcpLink.className = 'mcp-link';
        mcpLink.href = 'https://www.anthropic.com/news/model-context-protocol';
        mcpLink.target = '_blank';
        mcpLink.innerHTML = '<i class="fas fa-external-link-alt"></i> Read Anthropic\'s MCP Paper';
        mcpCard.appendChild(mcpLink);
        
        mcpSection.appendChild(mcpCard);
        container.appendChild(mcpSection);
        
        // Traditional API vs MCP with visual comparison
        const comparisonSection = document.createElement('div');
        comparisonSection.className = 'comparison-section';
        
        const comparisonTitle = document.createElement('h3');
        comparisonTitle.className = 'section-title';
        comparisonTitle.textContent = 'Traditional APIs vs. MCP Servers';
        comparisonSection.appendChild(comparisonTitle);
        
        // Create a two-column layout for comparison
        const comparisonGrid = document.createElement('div');
        comparisonGrid.className = 'comparison-grid';
        
        // Traditional API Column
        const apiCard = document.createElement('div');
        apiCard.className = 'comparison-card api-card';
        
        const apiHeader = document.createElement('div');
        apiHeader.className = 'comparison-header';
        
        const apiIcon = document.createElement('div');
        apiIcon.className = 'comparison-icon';
        apiIcon.innerHTML = '<i class="fas fa-plug"></i>';
        apiHeader.appendChild(apiIcon);
        
        const apiHeaderText = document.createElement('h4');
        apiHeaderText.className = 'comparison-title';
        apiHeaderText.textContent = 'Traditional API Integration';
        apiHeader.appendChild(apiHeaderText);
        
        apiCard.appendChild(apiHeader);
        
        const apiList = document.createElement('ul');
        apiList.className = 'comparison-list';
        
        const apiItems = [
            'Read all documentation about how the API works',
            'Program an API endpoint with specific configuration parameters for each API function',
            'Build an integration into your app for each API',
            'If the API changes, you have to go and change all of those API endpoints'
        ];
        
        apiItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.className = 'comparison-item';
            listItem.innerHTML = `<i class="fas fa-minus"></i> ${item}`;
            apiList.appendChild(listItem);
        });
        
        apiCard.appendChild(apiList);
        comparisonGrid.appendChild(apiCard);
        
        // MCP Server Column
        const mcpCard2 = document.createElement('div');
        mcpCard2.className = 'comparison-card mcp-card';
        
        const mcpHeader = document.createElement('div');
        mcpHeader.className = 'comparison-header';
        
        const mcpIcon = document.createElement('div');
        mcpIcon.className = 'comparison-icon';
        mcpIcon.innerHTML = '<i class="fas fa-server"></i>';
        mcpHeader.appendChild(mcpIcon);
        
        const mcpHeaderText = document.createElement('h4');
        mcpHeaderText.className = 'comparison-title';
        mcpHeaderText.textContent = 'MCP Server Approach';
        mcpHeader.appendChild(mcpHeaderText);
        
        mcpCard2.appendChild(mcpHeader);
        
        const mcpList = document.createElement('ul');
        mcpList.className = 'comparison-list';
        
        const mcpItems = [
            'MCP server contains all documentation about an API',
            'MCP server has specific implementation for each API endpoint',
            'MCP server knows what types of prompts work best for each endpoint',
            'If the API changes, the MCP server automatically adapts'
        ];
        
        mcpItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.className = 'comparison-item';
            listItem.innerHTML = `<i class="fas fa-plus"></i> ${item}`;
            mcpList.appendChild(listItem);
        });
        
        mcpCard2.appendChild(mcpList);
        comparisonGrid.appendChild(mcpCard2);
        
        comparisonSection.appendChild(comparisonGrid);
        container.appendChild(comparisonSection);
        
        // How MCP Servers Work with visual workflow
        const workflowSection = document.createElement('div');
        workflowSection.className = 'workflow-section';
        
        const workflowTitle = document.createElement('h3');
        workflowTitle.className = 'section-title';
        workflowTitle.textContent = 'How MCP Servers Work';
        workflowSection.appendChild(workflowTitle);
        
        // Create a visual workflow
        const workflow = document.createElement('div');
        workflow.className = 'mcp-workflow';
        
        const workflowSteps = [
            {
                icon: 'fa-comment',
                title: 'Natural Language Request',
                description: 'User asks AI to perform a task in natural language',
                color: '#0c4da2'
            },
            {
                icon: 'fa-search',
                title: 'Tool Selection',
                description: 'AI identifies relevant tools from available MCP servers',
                color: '#e31937'
            },
            {
                icon: 'fa-cogs',
                title: 'Parameter Population',
                description: 'AI automatically populates API parameters based on documentation',
                color: '#38B2AC'
            },
            {
                icon: 'fa-play',
                title: 'Tool Execution',
                description: 'MCP server executes the tool request with the API',
                color: '#805AD5'
            },
            {
                icon: 'fa-reply',
                title: 'Result Integration',
                description: 'Results are returned to the AI and incorporated into the response',
                color: '#38A169'
            }
        ];
        
        workflowSteps.forEach((step, index) => {
            const stepCard = document.createElement('div');
            stepCard.className = 'workflow-step';
            
            const stepNumber = document.createElement('div');
            stepNumber.className = 'step-number';
            stepNumber.textContent = index + 1;
            stepNumber.style.backgroundColor = step.color;
            stepCard.appendChild(stepNumber);
            
            const stepIcon = document.createElement('div');
            stepIcon.className = 'step-icon';
            stepIcon.innerHTML = `<i class="fas ${step.icon}"></i>`;
            stepIcon.style.color = step.color;
            stepCard.appendChild(stepIcon);
            
            const stepContent = document.createElement('div');
            stepContent.className = 'step-content';
            
            const stepTitle = document.createElement('div');
            stepTitle.className = 'step-title';
            stepTitle.textContent = step.title;
            stepTitle.style.color = step.color;
            stepContent.appendChild(stepTitle);
            
            const stepDescription = document.createElement('div');
            stepDescription.className = 'step-description';
            stepDescription.textContent = step.description;
            stepContent.appendChild(stepDescription);
            
            stepCard.appendChild(stepContent);
            
            if (index < workflowSteps.length - 1) {
                const stepArrow = document.createElement('div');
                stepArrow.className = 'step-arrow';
                stepArrow.innerHTML = '<i class="fas fa-chevron-right"></i>';
                stepCard.appendChild(stepArrow);
            }
            
            workflow.appendChild(stepCard);
        });
        
        workflowSection.appendChild(workflow);
        container.appendChild(workflowSection);
        
        // Popular MCP Servers with visual cards
        const serversSection = document.createElement('div');
        serversSection.className = 'servers-section';
        
        const serversTitle = document.createElement('h3');
        serversTitle.className = 'section-title';
        serversTitle.textContent = 'Popular MCP Servers';
        serversSection.appendChild(serversTitle);
        
        const serversGrid = document.createElement('div');
        serversGrid.className = 'servers-grid';
        
        const servers = [
            {
                name: 'Brave Search',
                description: 'Web and local search capabilities',
                icon: 'fa-search',
                color: '#FB542B'
            },
            {
                name: 'Context7',
                description: 'Documentation and library reference',
                icon: 'fa-book',
                color: '#0c4da2'
            },
            {
                name: 'Taskmaster',
                description: 'Project planning and task management',
                icon: 'fa-tasks',
                color: '#38A169'
            },
            {
                name: 'GitHub',
                description: 'Repository management and code version control',
                icon: 'fa-github',
                color: '#24292E'
            },
            {
                name: 'Perplexity',
                description: 'Research and information gathering',
                icon: 'fa-brain',
                color: '#805AD5'
            }
        ];
        
        servers.forEach(server => {
            const serverCard = document.createElement('div');
            serverCard.className = 'server-card';
            
            const serverIcon = document.createElement('div');
            serverIcon.className = 'server-icon';
            serverIcon.innerHTML = `<i class="fas ${server.icon}"></i>`;
            serverIcon.style.backgroundColor = server.color;
            serverCard.appendChild(serverIcon);
            
            const serverContent = document.createElement('div');
            serverContent.className = 'server-content';
            
            const serverName = document.createElement('div');
            serverName.className = 'server-name';
            serverName.textContent = server.name;
            serverContent.appendChild(serverName);
            
            const serverDescription = document.createElement('div');
            serverDescription.className = 'server-description';
            serverDescription.textContent = server.description;
            serverContent.appendChild(serverDescription);
            
            serverCard.appendChild(serverContent);
            serversGrid.appendChild(serverCard);
        });
        
        serversSection.appendChild(serversGrid);
        container.appendChild(serversSection);
        
        // Add CSS for this component
        const style = document.createElement('style');
        style.textContent = `
            .mcp-servers-container {
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
            
            .mcp-section {
                margin-bottom: 2.5rem;
            }
            
            .mcp-card {
                background-color: white;
                border-radius: 0.5rem;
                padding: 1.5rem;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                border: 1px solid #E4E7EB;
            }
            
            .mcp-text {
                font-size: 1rem;
                line-height: 1.6;
                color: #4A5568;
                margin: 0 0 1.25rem;
            }
            
            .mcp-link {
                display: inline-flex;
                align-items: center;
                gap: 0.5rem;
                color: #0c4da2;
                text-decoration: none;
                font-weight: 500;
                transition: opacity 0.2s ease-out;
            }
            
            .mcp-link:hover {
                opacity: 0.8;
            }
            
            .comparison-section {
                margin-bottom: 2.5rem;
            }
            
            .comparison-grid {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 1.5rem;
            }
            
            .comparison-card {
                background-color: white;
                border-radius: 0.5rem;
                overflow: hidden;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                border: 1px solid #E4E7EB;
                height: 100%;
                display: flex;
                flex-direction: column;
            }
            
            .api-card {
                border-top: 4px solid #e31937;
            }
            
            .mcp-card {
                border-top: 4px solid #0c4da2;
            }
            
            .comparison-header {
                padding: 1.25rem;
                background-color: #F5F7FA;
                display: flex;
                align-items: center;
                border-bottom: 1px solid #E4E7EB;
            }
            
            .comparison-icon {
                font-size: 1.5rem;
                margin-right: 1rem;
                flex-shrink: 0;
            }
            
            .api-card .comparison-icon {
                color: #e31937;
            }
            
            .mcp-card .comparison-icon {
                color: #0c4da2;
            }
            
            .comparison-title {
                font-size: 1.125rem;
                font-weight: 600;
                margin: 0;
                color: #323F4B;
            }
            
            .comparison-list {
                margin: 0;
                padding: 1.25rem;
                list-style: none;
                flex: 1;
            }
            
            .comparison-item {
                margin-bottom: 0.75rem;
                display: flex;
                align-items: flex-start;
                line-height: 1.5;
                color: #4A5568;
            }
            
            .comparison-item:last-child {
                margin-bottom: 0;
            }
            
            .comparison-item i {
                margin-right: 0.75rem;
                margin-top: 0.25rem;
                flex-shrink: 0;
            }
            
            .api-card .comparison-item i {
                color: #e31937;
            }
            
            .mcp-card .comparison-item i {
                color: #0c4da2;
            }
            
            .workflow-section {
                margin-bottom: 2.5rem;
            }
            
            .mcp-workflow {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                align-items: flex-start;
                gap: 1rem;
                margin-bottom: 1.5rem;
            }
            
            .workflow-step {
                background-color: white;
                border-radius: 0.5rem;
                padding: 1.25rem;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                border: 1px solid #E4E7EB;
                display: flex;
                align-items: center;
                position: relative;
                flex: 1;
                min-width: 250px;
                max-width: 300px;
                transition: transform 0.2s ease-out;
            }
            
            .workflow-step:hover {
                transform: translateY(-5px);
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            
            .step-number {
                width: 2rem;
                height: 2rem;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-weight: 700;
                margin-right: 1rem;
                flex-shrink: 0;
            }
            
            .step-icon {
                font-size: 1.5rem;
                margin-right: 1rem;
                flex-shrink: 0;
            }
            
            .step-content {
                flex: 1;
            }
            
            .step-title {
                font-weight: 600;
                margin-bottom: 0.5rem;
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
            
            .servers-section {
                margin-bottom: 1.5rem;
            }
            
            .servers-grid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
                gap: 1.5rem;
            }
            
            .server-card {
                background-color: white;
                border-radius: 0.5rem;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                border: 1px solid #E4E7EB;
                overflow: hidden;
                display: flex;
                flex-direction: column;
                transition: transform 0.2s ease-out;
            }
            
            .server-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            
            .server-icon {
                height: 80px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-size: 2rem;
            }
            
            .server-content {
                padding: 1.25rem;
            }
            
            .server-name {
                font-weight: 600;
                font-size: 1.125rem;
                margin-bottom: 0.5rem;
                color: #323F4B;
            }
            
            .server-description {
                font-size: 0.875rem;
                color: #4A5568;
                line-height: 1.5;
            }
            
            @media (max-width: 768px) {
                .comparison-grid {
                    grid-template-columns: 1fr;
                }
                
                .intro-card {
                    flex-direction: column;
                }
                
                .intro-icon {
                    margin-right: 0;
                    margin-bottom: 1rem;
                }
                
                .mcp-workflow {
                    flex-direction: column;
                    align-items: center;
                }
                
                .workflow-step {
                    width: 100%;
                    max-width: 100%;
                }
                
                .step-arrow {
                    right: 50%;
                    bottom: -1.5rem;
                    top: auto;
                    transform: translateX(50%) rotate(90deg);
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
