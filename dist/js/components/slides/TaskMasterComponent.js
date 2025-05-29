// Task Master Component
class TaskMasterComponent extends BaseComponent {
    constructor(slideData) {
        super(slideData);
        this.initialized = false;
    }
    
    createContent() {
        const container = document.createElement('div');
        container.className = 'task-master-container';
        
        // Title section with visual impact
        const titleSection = document.createElement('div');
        titleSection.className = 'title-section';
        
        const title = document.createElement('h2');
        title.className = 'slide-title';
        title.textContent = 'Step 11: Project Plan using Task Master';
        titleSection.appendChild(title);
        
        container.appendChild(titleSection);
        
        // Introduction with visual emphasis
        const introSection = document.createElement('div');
        introSection.className = 'intro-section';
        
        const introCard = document.createElement('div');
        introCard.className = 'intro-card';
        
        const introIcon = document.createElement('div');
        introIcon.className = 'intro-icon';
        introIcon.innerHTML = '<i class="fas fa-tasks"></i>';
        introCard.appendChild(introIcon);
        
        const introContent = document.createElement('div');
        introContent.className = 'intro-content';
        
        const introParagraph = document.createElement('p');
        introParagraph.className = 'intro-text';
        introParagraph.innerHTML = 'In Windsurf, I used the Claude Taskmaster MCP Server to generate a comprehensive project plan. This tool helps break down complex projects into manageable tasks and subtasks.';
        introContent.appendChild(introParagraph);
        
        introCard.appendChild(introContent);
        introSection.appendChild(introCard);
        container.appendChild(introSection);
        
        // Initializing Task Master with visual card
        const initSection = document.createElement('div');
        initSection.className = 'init-section';
        
        const initTitle = document.createElement('h3');
        initTitle.className = 'section-title';
        initTitle.textContent = 'Initializing Task Master';
        initSection.appendChild(initTitle);
        
        // Create a visually appealing prompt container
        const initContainer = document.createElement('div');
        initContainer.className = 'prompt-container';
        
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
        
        initContainer.appendChild(promptHeader);
        
        const promptCode = document.createElement('div');
        promptCode.className = 'prompt-code';
        promptCode.textContent = 'initialise task master for this project';
        initContainer.appendChild(promptCode);
        
        // Response section
        const responseContainer = document.createElement('div');
        responseContainer.className = 'response-container';
        
        const responseHeader = document.createElement('div');
        responseHeader.className = 'response-header';
        
        const responseIcon = document.createElement('div');
        responseIcon.className = 'response-icon';
        responseIcon.innerHTML = '<i class="fas fa-robot"></i>';
        responseHeader.appendChild(responseIcon);
        
        const responseHeaderText = document.createElement('div');
        responseHeaderText.className = 'response-header-text';
        responseHeaderText.textContent = 'Response';
        responseHeader.appendChild(responseHeaderText);
        
        responseContainer.appendChild(responseHeader);
        
        const responseContent = document.createElement('div');
        responseContent.className = 'response-content';
        responseContent.innerHTML = `
            <p>Task Master has been successfully initialized for your <code>credit-project</code>.</p>
            
            <p><strong>Next steps:</strong></p>
            
            <ol>
                <li>You need a <code>prd.txt</code> file (Product Requirements Document) in the <code>scripts/</code> directory (e.g., <code>scripts/prd.txt</code>). This file will be used to generate your initial set of tasks.</li>
                <li>If you already have a <code>prd.txt</code> file, I can proceed to parse it and create your tasks.</li>
                <li>If you do not have a <code>prd.txt</code> file, I can help you create one based on your project requirements or by using a template.</li>
            </ol>
            
            <p>Would you like to:</p>
            
            <ul>
                <li>Proceed with parsing an existing <code>scripts/prd.txt</code> file?</li>
                <li>Have me help you create a new <code>prd.txt</code> for your project?</li>
                <li>Review an example template first?</li>
            </ul>
            
            <p>Let me know how you'd like to proceed!</p>
        `;
        responseContainer.appendChild(responseContent);
        
        initSection.appendChild(initContainer);
        initSection.appendChild(responseContainer);
        container.appendChild(initSection);
        
        // Using Existing Documentation with visual card
        const docsSection = document.createElement('div');
        docsSection.className = 'docs-section';
        
        const docsTitle = document.createElement('h3');
        docsTitle.className = 'section-title';
        docsTitle.textContent = 'Using Existing Documentation';
        docsSection.appendChild(docsTitle);
        
        // Create a visually appealing prompt container
        const docsContainer = document.createElement('div');
        docsContainer.className = 'prompt-container';
        
        const docsPromptHeader = document.createElement('div');
        docsPromptHeader.className = 'prompt-header';
        
        const docsPromptIcon = document.createElement('div');
        docsPromptIcon.className = 'prompt-icon';
        docsPromptIcon.innerHTML = '<i class="fas fa-terminal"></i>';
        docsPromptHeader.appendChild(docsPromptIcon);
        
        const docsPromptHeaderText = document.createElement('div');
        docsPromptHeaderText.className = 'prompt-header-text';
        docsPromptHeaderText.textContent = 'Prompt';
        docsPromptHeader.appendChild(docsPromptHeaderText);
        
        docsContainer.appendChild(docsPromptHeader);
        
        const docsPromptCode = document.createElement('div');
        docsPromptCode.className = 'prompt-code';
        docsPromptCode.textContent = `I have a number of documents already prepared as follows: 
- Product Requirements Document - PRD (v3).md 
- Architecture documents:
    - Credit-Risk-workflow-architecture.md 
    - Credit Risk Workflow - Transition State Model (v3).md 
    - Credit Risk Workflow Syatem Database Schema (v3).md 
    - Credit Risk Workflow Design Brief.md 
I would like to factor in all of this pre-planning into my project plan and task list`;
        docsContainer.appendChild(docsPromptCode);
        
        // Response section
        const docsResponseContainer = document.createElement('div');
        docsResponseContainer.className = 'response-container';
        
        const docsResponseHeader = document.createElement('div');
        docsResponseHeader.className = 'response-header';
        
        const docsResponseIcon = document.createElement('div');
        docsResponseIcon.className = 'response-icon';
        docsResponseIcon.innerHTML = '<i class="fas fa-robot"></i>';
        docsResponseHeader.appendChild(docsResponseIcon);
        
        const docsResponseHeaderText = document.createElement('div');
        docsResponseHeaderText.className = 'response-header-text';
        docsResponseHeaderText.textContent = 'Response';
        docsResponseHeader.appendChild(docsResponseHeaderText);
        
        docsResponseContainer.appendChild(docsResponseHeader);
        
        const docsResponseContent = document.createElement('div');
        docsResponseContent.className = 'response-content';
        docsResponseContent.innerHTML = `
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
                <li>Combine the insights into a unified <code>prd.txt</code> in your <code>scripts/</code> directory, which will serve as the basis for parsing and generating your Task Master project plan and tasks.</li>
            </ol>
            
            <p>Let's start by locating these files in your project directory so I can review their contents.</p>
        `;
        docsResponseContainer.appendChild(docsResponseContent);
        
        docsSection.appendChild(docsContainer);
        docsSection.appendChild(docsResponseContainer);
        container.appendChild(docsSection);
        
        // Task Complexity Analysis with visual card
        const analysisSection = document.createElement('div');
        analysisSection.className = 'analysis-section';
        
        const analysisTitle = document.createElement('h3');
        analysisTitle.className = 'section-title';
        analysisTitle.textContent = 'Task Complexity Analysis';
        analysisSection.appendChild(analysisTitle);
        
        const analysisCard = document.createElement('div');
        analysisCard.className = 'analysis-card';
        
        const analysisHeader = document.createElement('div');
        analysisHeader.className = 'analysis-header';
        analysisHeader.innerHTML = '<i class="fas fa-chart-bar"></i> Summary of Task Complexity Analysis';
        analysisCard.appendChild(analysisHeader);
        
        const complexityGroups = [
            {
                title: 'High Complexity Tasks (Score 8-9)',
                items: [
                    'Database Schema Design and Implementation (Task 2, Score 8)',
                    'Workflow Engine Core Implementation (Task 4, Score 9)',
                    'Workflow Sub-process Implementation (Task 7, Score 9)',
                    'Testing and Quality Assurance (Task 18, Score 9)',
                    'Deployment and DevOps Setup (Task 19, Score 8)'
                ],
                color: '#e31937'
            },
            {
                title: 'Medium Complexity Tasks (Score 6-7)',
                items: [
                    'Project Setup and Environment Configuration (Task 1, Score 6)',
                    'Frontend Setup and Authentication UI (Task 8, Score 6)',
                    'Dashboard Implementation (Task 9, Score 7)',
                    'Document Upload and Management UI (Task 11, Score 7)',
                    'Reporting and Analytics Features (Task 14, Score 8)',
                    'System Administration UI (Task 17, Score 7)'
                ],
                color: '#0c4da2'
            },
            {
                title: 'Key Insights',
                items: [
                    'The workflow-related tasks (2, 4, 7) are the most complex due to their architectural and state management requirements',
                    'Testing and deployment are critical high-complexity tasks',
                    'Frontend tasks have moderate complexity due to UI integration and state management',
                    'The database schema is particularly complex due to its cross-domain relationships'
                ],
                color: '#38B2AC'
            },
            {
                title: 'Recommendations',
                items: [
                    'For high-complexity tasks (8+), consider breaking them down into more subtasks (recommended 10-12)',
                    'Medium-complexity tasks (6-7) should be broken down into 8-10 subtasks',
                    'Focus on proper testing and documentation for high-complexity tasks',
                    'Consider parallel development for independent tasks while focusing resources on high-complexity areas'
                ],
                color: '#38A169'
            }
        ];
        
        const complexityGrid = document.createElement('div');
        complexityGrid.className = 'complexity-grid';
        
        complexityGroups.forEach(group => {
            const groupCard = document.createElement('div');
            groupCard.className = 'complexity-group';
            groupCard.style.borderTopColor = group.color;
            
            const groupTitle = document.createElement('h4');
            groupTitle.className = 'group-title';
            groupTitle.textContent = group.title;
            groupTitle.style.color = group.color;
            groupCard.appendChild(groupTitle);
            
            const groupList = document.createElement('ul');
            groupList.className = 'group-list';
            
            group.items.forEach(item => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `<i class="fas fa-angle-right" style="color: ${group.color}"></i> ${item}`;
                groupList.appendChild(listItem);
            });
            
            groupCard.appendChild(groupList);
            complexityGrid.appendChild(groupCard);
        });
        
        analysisCard.appendChild(complexityGrid);
        analysisSection.appendChild(analysisCard);
        container.appendChild(analysisSection);
        
        // Breaking Down Complex Tasks with visual card
        const breakdownSection = document.createElement('div');
        breakdownSection.className = 'breakdown-section';
        
        const breakdownTitle = document.createElement('h3');
        breakdownTitle.className = 'section-title';
        breakdownTitle.textContent = 'Breaking Down Complex Tasks';
        breakdownSection.appendChild(breakdownTitle);
        
        // Create a visually appealing prompt container
        const breakdownContainer = document.createElement('div');
        breakdownContainer.className = 'prompt-container';
        
        const breakdownPromptHeader = document.createElement('div');
        breakdownPromptHeader.className = 'prompt-header';
        
        const breakdownPromptIcon = document.createElement('div');
        breakdownPromptIcon.className = 'prompt-icon';
        breakdownPromptIcon.innerHTML = '<i class="fas fa-terminal"></i>';
        breakdownPromptHeader.appendChild(breakdownPromptIcon);
        
        const breakdownPromptHeaderText = document.createElement('div');
        breakdownPromptHeaderText.className = 'prompt-header-text';
        breakdownPromptHeaderText.textContent = 'Prompt';
        breakdownPromptHeader.appendChild(breakdownPromptHeaderText);
        
        breakdownContainer.appendChild(breakdownPromptHeader);
        
        const breakdownPromptCode = document.createElement('div');
        breakdownPromptCode.className = 'prompt-code';
        breakdownPromptCode.textContent = 'Can you expand the high complexity tasks into more detailed sub-tasks';
        breakdownContainer.appendChild(breakdownPromptCode);
        
        // Response section
        const breakdownResponseContainer = document.createElement('div');
        breakdownResponseContainer.className = 'response-container';
        
        const breakdownResponseHeader = document.createElement('div');
        breakdownResponseHeader.className = 'response-header';
        
        const breakdownResponseIcon = document.createElement('div');
        breakdownResponseIcon.className = 'response-icon';
        breakdownResponseIcon.innerHTML = '<i class="fas fa-robot"></i>';
        breakdownResponseHeader.appendChild(breakdownResponseIcon);
        
        const breakdownResponseHeaderText = document.createElement('div');
        breakdownResponseHeaderText.className = 'response-header-text';
        breakdownResponseHeaderText.textContent = 'Response';
        breakdownResponseHeader.appendChild(breakdownResponseHeaderText);
        
        breakdownResponseContainer.appendChild(breakdownResponseHeader);
        
        const breakdownResponseContent = document.createElement('div');
        breakdownResponseContent.className = 'response-content';
        breakdownResponseContent.innerHTML = `
            <p>I've successfully broken down the Workflow Engine Core Implementation (Task 4) into 11 detailed subtasks, following the recommended complexity score of 9. Each subtask is focused on a specific aspect of the workflow engine and includes clear implementation details, dependencies, and test requirements.</p>
            
            <p>Would you like me to:</p>
            
            <ol>
                <li>Break down another high-complexity task (like Database Schema or Testing)?</li>
                <li>Review and adjust the dependencies between subtasks?</li>
                <li>Add more detailed implementation steps to any specific subtask?</li>
            </ol>
            
            <p>Let me know how you'd like to proceed!</p>
        `;
        breakdownResponseContainer.appendChild(breakdownResponseContent);
        
        breakdownSection.appendChild(breakdownContainer);
        breakdownSection.appendChild(breakdownResponseContainer);
        
        const breakdownNote = document.createElement('div');
        breakdownNote.className = 'breakdown-note';
        breakdownNote.innerHTML = '<i class="fas fa-info-circle"></i> Continue to iterate until the tasks are all at the appropriate level and any other details are ironed out appropriately.';
        breakdownSection.appendChild(breakdownNote);
        
        container.appendChild(breakdownSection);
        
        // Add CSS for this component
        const style = document.createElement('style');
        style.textContent = `
            .task-master-container {
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
            
            .init-section, .docs-section, .breakdown-section {
                margin-bottom: 2.5rem;
            }
            
            .prompt-container {
                background-color: #1F2933;
                border-radius: 0.5rem;
                overflow: hidden;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
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
            
            .response-container {
                background-color: white;
                border-radius: 0.5rem;
                overflow: hidden;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                border: 1px solid #E4E7EB;
                margin-bottom: 1.5rem;
            }
            
            .response-header {
                background-color: #F5F7FA;
                padding: 0.75rem 1rem;
                display: flex;
                align-items: center;
                border-bottom: 1px solid #E4E7EB;
            }
            
            .response-icon {
                color: #0c4da2;
                margin-right: 0.75rem;
            }
            
            .response-header-text {
                color: #323F4B;
                font-weight: 500;
                font-size: 0.875rem;
            }
            
            .response-content {
                padding: 1.5rem;
                color: #4A5568;
                font-size: 0.875rem;
                line-height: 1.6;
            }
            
            .response-content p {
                margin-top: 0;
                margin-bottom: 1rem;
            }
            
            .response-content p:last-child {
                margin-bottom: 0;
            }
            
            .response-content ul, .response-content ol {
                margin-top: 0;
                margin-bottom: 1rem;
                padding-left: 1.5rem;
            }
            
            .response-content li {
                margin-bottom: 0.5rem;
            }
            
            .response-content code {
                background-color: #F5F7FA;
                padding: 0.125rem 0.25rem;
                border-radius: 0.25rem;
                font-family: monospace;
                font-size: 0.875rem;
                color: #e31937;
            }
            
            .analysis-section {
                margin-bottom: 2.5rem;
            }
            
            .analysis-card {
                background-color: white;
                border-radius: 0.5rem;
                overflow: hidden;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                border: 1px solid #E4E7EB;
            }
            
            .analysis-header {
                background-color: #F5F7FA;
                padding: 1rem 1.5rem;
                font-weight: 600;
                color: #323F4B;
                font-size: 1.125rem;
                border-bottom: 1px solid #E4E7EB;
            }
            
            .analysis-header i {
                margin-right: 0.75rem;
                color: #0c4da2;
            }
            
            .complexity-grid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                gap: 1.5rem;
                padding: 1.5rem;
            }
            
            .complexity-group {
                background-color: #F8FAFC;
                border-radius: 0.5rem;
                padding: 1.25rem;
                border-top: 4px solid #0c4da2;
            }
            
            .group-title {
                font-size: 1.125rem;
                font-weight: 600;
                margin-top: 0;
                margin-bottom: 1rem;
            }
            
            .group-list {
                margin: 0;
                padding: 0;
                list-style: none;
            }
            
            .group-list li {
                margin-bottom: 0.75rem;
                display: flex;
                align-items: flex-start;
                line-height: 1.5;
                font-size: 0.875rem;
                color: #4A5568;
            }
            
            .group-list li:last-child {
                margin-bottom: 0;
            }
            
            .group-list li i {
                margin-right: 0.75rem;
                margin-top: 0.25rem;
                flex-shrink: 0;
            }
            
            .breakdown-note {
                background-color: #EBF8FF;
                border-radius: 0.5rem;
                padding: 1rem;
                color: #2C5282;
                font-size: 0.875rem;
                line-height: 1.5;
                border-left: 3px solid #4299E1;
            }
            
            .breakdown-note i {
                color: #4299E1;
                margin-right: 0.5rem;
            }
            
            @media (max-width: 768px) {
                .complexity-grid {
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
        // Add any interactive elements or event listeners here
        this.initialized = true;
    }

    cleanup() {
        // Clean up event listeners
        this.initialized = false;
    }
}
