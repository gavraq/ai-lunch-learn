// MCP Servers Component
class MCPServersComponent extends BaseComponent {
    constructor(slideData) {
        super(slideData);
        this.initialized = false;
    }
    
    createContent() {
        const container = document.createElement('div');
        
        // Title
        const title = document.createElement('h2');
        title.textContent = 'Step 10: Set up MCP Servers - The Future of AI Integration';
        title.className = 'slide-title mb-md';
        container.appendChild(title);
        
        // Introduction
        const introSection = document.createElement('div');
        introSection.className = 'intro-section mb-lg';
        
        const introContent = document.createElement('p');
        introContent.innerHTML = 'Before we start coding, we want our coding IDE to make use of some additional tools. These tools give the coding editor additional super-powers to do certain tasks for example, browse the web, search for documents in your computer, or in my case access an application that helps to build project plans - claude taskmaster.';
        introSection.appendChild(introContent);
        
        container.appendChild(introSection);
        
        // What are MCP Servers
        const mcpSection = document.createElement('div');
        mcpSection.className = 'mcp-section mb-lg';
        
        const mcpTitle = document.createElement('h3');
        mcpTitle.textContent = 'What are MCP Servers?';
        mcpSection.appendChild(mcpTitle);
        
        const mcpContent = document.createElement('p');
        mcpContent.innerHTML = 'These tools can be built into your IDE using <strong>MCP-servers</strong> (Model Context Protocol Servers), which are standardized ways for AI to interact with your tools. This protocol was developed by Anthropic and made as an open standard to allow LLMs to interact with tools to perform tasks on your behalf.';
        mcpSection.appendChild(mcpContent);
        
        const mcpLink = document.createElement('p');
        mcpLink.innerHTML = 'See Anthropic paper here: <a href="https://www.anthropic.com/news/model-context-protocol" target="_blank">https://www.anthropic.com/news/model-context-protocol</a>';
        mcpSection.appendChild(mcpLink);
        
        container.appendChild(mcpSection);
        
        // Traditional API vs MCP
        const comparisonSection = document.createElement('div');
        comparisonSection.className = 'comparison-section mb-lg';
        
        const comparisonTitle = document.createElement('h3');
        comparisonTitle.textContent = 'Traditional APIs vs. MCP Servers:';
        comparisonSection.appendChild(comparisonTitle);
        
        // Create a two-column layout for comparison
        const leftColumn = document.createElement('div');
        leftColumn.className = 'comparison-column';
        
        const apiTitle = document.createElement('h4');
        apiTitle.textContent = 'Traditional API Integration:';
        leftColumn.appendChild(apiTitle);
        
        const apiList = this.createList([
            'Read all documentation about how the API works',
            'Program an API endpoint with specific configuration parameters for each API function',
            'Build an integration into your app for each API',
            'If the API changes, you have to go and change all of those API endpoints'
        ]);
        leftColumn.appendChild(apiList);
        
        const rightColumn = document.createElement('div');
        rightColumn.className = 'comparison-column';
        
        const mcpTitle2 = document.createElement('h4');
        mcpTitle2.textContent = 'MCP Server Approach:';
        rightColumn.appendChild(mcpTitle2);
        
        const mcpList = this.createList([
            'MCP server contains all documentation about an API',
            'MCP server has specific implementation for each API endpoint',
            'MCP server knows what types of prompts work best for each endpoint',
            'If the API changes, the MCP server automatically adapts'
        ]);
        rightColumn.appendChild(mcpList);
        
        const comparisonLayout = this.createTwoColumnLayout(leftColumn, rightColumn);
        comparisonSection.appendChild(comparisonLayout);
        
        container.appendChild(comparisonSection);
        
        // How MCP Servers Work
        const workflowSection = document.createElement('div');
        workflowSection.className = 'workflow-section mb-lg';
        
        const workflowTitle = document.createElement('h3');
        workflowTitle.textContent = 'How MCP Servers Work:';
        workflowSection.appendChild(workflowTitle);
        
        // Create a visual workflow
        const workflow = document.createElement('div');
        workflow.className = 'mcp-workflow';
        workflow.innerHTML = `
            <div class="workflow-step">
                <div class="step-icon"><i class="fas fa-comment"></i></div>
                <div class="step-content">
                    <div class="step-title">Natural Language Request</div>
                    <div class="step-description">User asks AI to perform a task in natural language</div>
                </div>
            </div>
            <div class="workflow-arrow"><i class="fas fa-arrow-down"></i></div>
            <div class="workflow-step">
                <div class="step-icon"><i class="fas fa-search"></i></div>
                <div class="step-content">
                    <div class="step-title">Tool Selection</div>
                    <div class="step-description">AI identifies relevant tools from available MCP servers</div>
                </div>
            </div>
            <div class="workflow-arrow"><i class="fas fa-arrow-down"></i></div>
            <div class="workflow-step">
                <div class="step-icon"><i class="fas fa-cogs"></i></div>
                <div class="step-content">
                    <div class="step-title">Parameter Population</div>
                    <div class="step-description">AI automatically populates API parameters based on documentation</div>
                </div>
            </div>
            <div class="workflow-arrow"><i class="fas fa-arrow-down"></i></div>
            <div class="workflow-step">
                <div class="step-icon"><i class="fas fa-play"></i></div>
                <div class="step-content">
                    <div class="step-title">Tool Execution</div>
                    <div class="step-description">MCP server executes the tool request with the API</div>
                </div>
            </div>
            <div class="workflow-arrow"><i class="fas fa-arrow-down"></i></div>
            <div class="workflow-step">
                <div class="step-icon"><i class="fas fa-reply"></i></div>
                <div class="step-content">
                    <div class="step-title">Result Integration</div>
                    <div class="step-description">Results are returned to the AI and incorporated into the response</div>
                </div>
            </div>
        `;
        workflowSection.appendChild(workflow);
        
        container.appendChild(workflowSection);
        
        // Popular MCP Servers
        const serversSection = document.createElement('div');
        serversSection.className = 'servers-section';
        
        const serversTitle = document.createElement('h3');
        serversTitle.textContent = 'Popular MCP Servers:';
        serversSection.appendChild(serversTitle);
        
        const serversList = this.createList([
            '<strong>Brave Search</strong> - Web and local search capabilities',
            '<strong>Context7</strong> - Documentation and library reference',
            '<strong>Taskmaster</strong> - Project planning and task management',
            '<strong>GitHub</strong> - Repository management and code version control',
            '<strong>Perplexity</strong> - Research and information gathering'
        ]);
        serversSection.appendChild(serversList);
        
        container.appendChild(serversSection);
        
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
