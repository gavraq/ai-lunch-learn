// Task Master Component
class TaskMasterComponent extends BaseComponent {
    constructor(slideData) {
        super(slideData);
        this.initialized = false;
    }
    
    createContent() {
        const container = document.createElement('div');
        
        // Title
        const title = document.createElement('h2');
        title.textContent = 'Step 11: Project Plan using Task Master';
        title.className = 'slide-title mb-md';
        container.appendChild(title);
        
        // Introduction
        const introSection = document.createElement('div');
        introSection.className = 'intro-section mb-lg';
        
        const introContent = document.createElement('p');
        introContent.innerHTML = 'In Windsurf, I used the Claude Taskmaster MCP Server to generate a comprehensive project plan. This tool helps break down complex projects into manageable tasks and subtasks.';
        introSection.appendChild(introContent);
        
        container.appendChild(introSection);
        
        // Initializing Task Master
        const initSection = document.createElement('div');
        initSection.className = 'init-section mb-lg';
        
        const initTitle = document.createElement('h3');
        initTitle.textContent = 'Initializing Task Master:';
        initSection.appendChild(initTitle);
        
        const initPrompt = document.createElement('div');
        initPrompt.className = 'prompt-preview';
        initPrompt.innerHTML = `
            <p><strong>Prompt:</strong></p>
            <pre class="prompt-code">initialise task master for this project</pre>
            
            <p><strong>Response:</strong></p>
            <div class="response-preview">
                <p>Task Master has been successfully initialized for your \`credit-project\`.</p>
                
                <p><strong>Next steps:</strong></p>
                
                <ol>
                    <li>You need a \`prd.txt\` file (Product Requirements Document) in the \`scripts/\` directory (e.g., \`scripts/prd.txt\`). This file will be used to generate your initial set of tasks.</li>
                    <li>If you already have a \`prd.txt\` file, I can proceed to parse it and create your tasks.</li>
                    <li>If you do not have a \`prd.txt\` file, I can help you create one based on your project requirements or by using a template.</li>
                </ol>
                
                <p>Would you like to:</p>
                
                <ul>
                    <li>Proceed with parsing an existing \`scripts/prd.txt\` file?</li>
                    <li>Have me help you create a new \`prd.txt\` for your project?</li>
                    <li>Review an example template first?</li>
                </ul>
                
                <p>Let me know how you'd like to proceed!</p>
            </div>
        `;
        initSection.appendChild(initPrompt);
        
        container.appendChild(initSection);
        
        // Using Existing Documentation
        const docsSection = document.createElement('div');
        docsSection.className = 'docs-section mb-lg';
        
        const docsTitle = document.createElement('h3');
        docsTitle.textContent = 'Using Existing Documentation:';
        docsSection.appendChild(docsTitle);
        
        const docsPrompt = document.createElement('div');
        docsPrompt.className = 'prompt-preview';
        docsPrompt.innerHTML = `
            <p><strong>Prompt:</strong></p>
            <pre class="prompt-code">
I have a number of documents already prepared as follows: 
- Product Requirements Document - PRD (v3).md 
- Architecture documents:
    - Credit-Risk-workflow-architecture.md 
    - Credit Risk Workflow - Transition State Model (v3).md 
    - Credit Risk Workflow Syatem Database Schema (v3).md 
    - Credit Risk Workflow Design Brief.md 
I would like to factor in all of this pre-planning into my project plan and task list
            </pre>
            
            <p><strong>Response:</strong></p>
            <div class="response-preview">
                <p>Great, you have a comprehensive set of planning documents! To ensure your project plan and task list are as thorough and accurate as possible, I will:</p>
                
                <ol>
                    <li>Locate and review each of the following documents in your project:
                        <ul>
                            <li>Product Requirements Document - PRD (v3).md</li>
                            <li>Credit-Risk-workflow-architecture.md</li>
                            <li>Credit Risk Workflow - Transition State Model (v3).md</li>
                            <li>Credit Risk Workflow Syatem Database Schema (v3).md</li>
                            <li>Credit Risk Workflow Design Brief.md</li>
                        </ul>
                    </li>
                    <li>Synthesize the key requirements, architecture, workflow, and design elements from all these documents.</li>
                    <li>Combine the insights into a unified \`prd.txt\` in your \`scripts/\` directory, which will serve as the basis for parsing and generating your Task Master project plan and tasks.</li>
                </ol>
                
                <p>Let's start by locating these files in your project directory so I can review their contents.</p>
            </div>
        `;
        docsSection.appendChild(docsPrompt);
        
        container.appendChild(docsSection);
        
        // Task Complexity Analysis
        const analysisSection = document.createElement('div');
        analysisSection.className = 'analysis-section mb-lg';
        
        const analysisTitle = document.createElement('h3');
        analysisTitle.textContent = 'Task Complexity Analysis:';
        analysisSection.appendChild(analysisTitle);
        
        const analysisContent = document.createElement('div');
        analysisContent.className = 'analysis-content';
        analysisContent.innerHTML = `
            <div class="analysis-summary">
                <h4>Summary of Task Complexity Analysis:</h4>
                
                <div class="complexity-group">
                    <h5>High Complexity Tasks (Score 8-9):</h5>
                    <ul>
                        <li>Database Schema Design and Implementation (Task 2, Score 8)</li>
                        <li>Workflow Engine Core Implementation (Task 4, Score 9)</li>
                        <li>Workflow Sub-process Implementation (Task 7, Score 9)</li>
                        <li>Testing and Quality Assurance (Task 18, Score 9)</li>
                        <li>Deployment and DevOps Setup (Task 19, Score 8)</li>
                    </ul>
                </div>
                
                <div class="complexity-group">
                    <h5>Medium Complexity Tasks (Score 6-7):</h5>
                    <ul>
                        <li>Project Setup and Environment Configuration (Task 1, Score 6)</li>
                        <li>Frontend Setup and Authentication UI (Task 8, Score 6)</li>
                        <li>Dashboard Implementation (Task 9, Score 7)</li>
                        <li>Document Upload and Management UI (Task 11, Score 7)</li>
                        <li>Reporting and Analytics Features (Task 14, Score 8)</li>
                        <li>System Administration UI (Task 17, Score 7)</li>
                    </ul>
                </div>
                
                <div class="complexity-group">
                    <h5>Key Insights:</h5>
                    <ul>
                        <li>The workflow-related tasks (2, 4, 7) are the most complex due to their architectural and state management requirements</li>
                        <li>Testing and deployment are critical high-complexity tasks</li>
                        <li>Frontend tasks have moderate complexity due to UI integration and state management</li>
                        <li>The database schema is particularly complex due to its cross-domain relationships</li>
                    </ul>
                </div>
                
                <div class="complexity-group">
                    <h5>Recommendations:</h5>
                    <ul>
                        <li>For high-complexity tasks (8+), consider breaking them down into more subtasks (recommended 10-12)</li>
                        <li>Medium-complexity tasks (6-7) should be broken down into 8-10 subtasks</li>
                        <li>Focus on proper testing and documentation for high-complexity tasks</li>
                        <li>Consider parallel development for independent tasks while focusing resources on high-complexity areas</li>
                    </ul>
                </div>
            </div>
        `;
        analysisSection.appendChild(analysisContent);
        
        container.appendChild(analysisSection);
        
        // Breaking Down Complex Tasks
        const breakdownSection = document.createElement('div');
        breakdownSection.className = 'breakdown-section';
        
        const breakdownTitle = document.createElement('h3');
        breakdownTitle.textContent = 'Breaking Down Complex Tasks:';
        breakdownSection.appendChild(breakdownTitle);
        
        const breakdownPrompt = document.createElement('div');
        breakdownPrompt.className = 'prompt-preview';
        breakdownPrompt.innerHTML = `
            <p><strong>Prompt:</strong></p>
            <pre class="prompt-code">Can you expand the high complexity tasks into more detailed sub-tasks</pre>
            
            <p><strong>Response:</strong></p>
            <div class="response-preview">
                <p>I've successfully broken down the Workflow Engine Core Implementation (Task 4) into 11 detailed subtasks, following the recommended complexity score of 9. Each subtask is focused on a specific aspect of the workflow engine and includes clear implementation details, dependencies, and test requirements.</p>
                
                <p>Would you like me to:</p>
                
                <ol>
                    <li>Break down another high-complexity task (like Database Schema or Testing)?</li>
                    <li>Review and adjust the dependencies between subtasks?</li>
                    <li>Add more detailed implementation steps to any specific subtask?</li>
                </ol>
                
                <p>Let me know how you'd like to proceed!</p>
            </div>
        `;
        breakdownSection.appendChild(breakdownPrompt);
        
        const breakdownNote = document.createElement('p');
        breakdownNote.innerHTML = 'Continue to iterate until the tasks are all at the appropriate level and any other details are ironed out appropriately.';
        breakdownSection.appendChild(breakdownNote);
        
        container.appendChild(breakdownSection);
        
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
