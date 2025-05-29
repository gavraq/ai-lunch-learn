// Project Plan Component
class ProjectPlanComponent extends BaseComponent {
    constructor(slideData) {
        super(slideData);
        this.initialized = false;
    }
    
    createContent() {
        const container = document.createElement('div');
        container.className = 'project-plan-container';
        
        // Title section with visual impact
        const titleSection = document.createElement('div');
        titleSection.className = 'title-section';
        
        const title = document.createElement('h2');
        title.className = 'slide-title';
        title.textContent = 'Step 8: Project Plan';
        titleSection.appendChild(title);
        
        container.appendChild(titleSection);
        
        // Introduction with visual emphasis
        const introSection = document.createElement('div');
        introSection.className = 'intro-section';
        
        const introCard = document.createElement('div');
        introCard.className = 'intro-card';
        
        const introIcon = document.createElement('div');
        introIcon.className = 'intro-icon';
        introIcon.innerHTML = '<i class="fas fa-clipboard-list"></i>';
        introCard.appendChild(introIcon);
        
        const introContent = document.createElement('div');
        introContent.className = 'intro-content';
        
        const introParagraph = document.createElement('p');
        introParagraph.className = 'intro-text';
        introParagraph.innerHTML = 'After ensuring consistency across all documentation, the next step is to create a comprehensive project plan that breaks down the implementation into manageable tasks.';
        introContent.appendChild(introParagraph);
        
        introCard.appendChild(introContent);
        introSection.appendChild(introCard);
        container.appendChild(introSection);
        
        // Project Plan Prompt
        const promptSection = document.createElement('div');
        promptSection.className = 'prompt-section';
        
        const promptTitle = document.createElement('h3');
        promptTitle.className = 'section-title';
        promptTitle.textContent = 'Project Plan Prompt';
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
        promptHeaderText.textContent = 'Project Plan Prompt';
        promptHeader.appendChild(promptHeaderText);
        
        promptContainer.appendChild(promptHeader);
        
        const promptCode = document.createElement('div');
        promptCode.className = 'prompt-code';
        
        const codeContent = `Background:
I am building a Credit Risk Workflow system. I have created a Product Requirements Document - PRD (v3).md, which is attached. This requirements document outlines: 
- An overview of the requirements 
- Specific functional requirements 
- Non functional requirements 
- Technology choices and final selection (using python Django) 
- Post go live requirements such as training and support 
- A glossary of important terms 

Technology specific requirements: 
The key technology choice is using Python Django with custom workflows. As a further enhancement I would like to ustilise a hybrid approach whereby I:
1. Start with a \`uv\` environment for initial Django development - using uv since it is based on Rust and works faster than a traditional Python virtual environment using pip 
2. Develop core functionality (models, workflow engine, basic views) 
3. Once the core functionality of the application is working, then "Dockerise" the application to run in a Docker container 
4. Complete the remaining development in the containerized environment 

Additional information:
In addition to the PRD, there are some additional documents that can help with specific implementation ideas: 
1) workflow_transitions.md - which has some further detail to assist in the build of the specific workflows 
2) role_implementation.md - which has some information about implementing roles
3) .css files for both the main application as well as the admin screens - this provides input for the branding of the application 

Your role:
This is an extremely ambitious project, in particular because I am not an experienced developer and only have a high level understanding of the chosen technology. For this reason we need to plan this project very carefully and perform the build in an incremental manner, this will allow:
1) Me to understand the code base as it gets built incrementally - so you will be teaching me as we go 
2) Ensure that we keep good documentation as we go along 
3) Allow test cases to be developed as we build the functionality so that we have comprehensive coverage at the end 

You are both an experienced python developer, experienced project manager as well as a great teacher to succeed in this project - you will need all of these skills but each of these skills will be needed in very specific phases. 

What you need to output:
I need you to build a comprehensive project plan (in markdown format) with specific steps that will be needed in order to achieve the final goal of a working Credit Risk Workflow system 
I need you to identify the specific skills that will be need for each step. 
I need a checklist that identified each step so we can keep track of progress and mark-off each step as it is done`;
        
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
        
        // Project Plan Structure with visual cards
        const structureSection = document.createElement('div');
        structureSection.className = 'structure-section';
        
        const structureTitle = document.createElement('h3');
        structureTitle.className = 'section-title';
        structureTitle.textContent = 'Project Plan Structure';
        structureSection.appendChild(structureTitle);
        
        // Create a visual representation of the project plan structure
        const phaseGrid = document.createElement('div');
        phaseGrid.className = 'phase-grid';
        
        const phases = [
            {
                icon: 'fa-project-diagram',
                title: 'Project Overview',
                items: ['Objectives', 'Scope', 'Timeline', 'Resources'],
                color: '#0c4da2'
            },
            {
                icon: 'fa-tasks',
                title: 'Phase 1: Setup & Foundation',
                items: ['Environment Setup', 'Project Structure', 'Core Models', 'Authentication'],
                color: '#e31937'
            },
            {
                icon: 'fa-cogs',
                title: 'Phase 2: Core Functionality',
                items: ['Workflow Engine', 'Form Handling', 'API Development', 'Testing Framework'],
                color: '#38B2AC'
            },
            {
                icon: 'fa-laptop-code',
                title: 'Phase 3: Frontend & Integration',
                items: ['React Setup', 'UI Components', 'API Integration', 'Form Validation'],
                color: '#805AD5'
            },
            {
                icon: 'fa-check-circle',
                title: 'Phase 4: Testing & Deployment',
                items: ['Unit Testing', 'Integration Testing', 'Containerization', 'Deployment'],
                color: '#38A169'
            }
        ];
        
        phases.forEach(phase => {
            const phaseCard = document.createElement('div');
            phaseCard.className = 'phase-card';
            phaseCard.style.borderTopColor = phase.color;
            
            const phaseHeader = document.createElement('div');
            phaseHeader.className = 'phase-header';
            
            const phaseIcon = document.createElement('div');
            phaseIcon.className = 'phase-icon';
            phaseIcon.style.color = phase.color;
            phaseIcon.innerHTML = `<i class="fas ${phase.icon}"></i>`;
            phaseHeader.appendChild(phaseIcon);
            
            const phaseTitle = document.createElement('h4');
            phaseTitle.className = 'phase-title';
            phaseTitle.textContent = phase.title;
            phaseHeader.appendChild(phaseTitle);
            
            phaseCard.appendChild(phaseHeader);
            
            const phaseItems = document.createElement('ul');
            phaseItems.className = 'phase-items';
            
            phase.items.forEach(item => {
                const phaseItem = document.createElement('li');
                phaseItem.className = 'phase-item';
                phaseItem.innerHTML = `<i class="fas fa-angle-right" style="color: ${phase.color}"></i> ${item}`;
                phaseItems.appendChild(phaseItem);
            });
            
            phaseCard.appendChild(phaseItems);
            phaseGrid.appendChild(phaseCard);
        });
        
        structureSection.appendChild(phaseGrid);
        container.appendChild(structureSection);
        
        // Task Breakdown Example with visual styling
        const taskSection = document.createElement('div');
        taskSection.className = 'task-section';
        
        const taskTitle = document.createElement('h3');
        taskTitle.className = 'section-title';
        taskTitle.textContent = 'Example Task Breakdown';
        taskSection.appendChild(taskTitle);
        
        const taskCard = document.createElement('div');
        taskCard.className = 'task-card';
        
        const taskHeader = document.createElement('div');
        taskHeader.className = 'task-header';
        
        const taskId = document.createElement('div');
        taskId.className = 'task-id';
        taskId.textContent = 'Task 4';
        taskHeader.appendChild(taskId);
        
        const taskName = document.createElement('div');
        taskName.className = 'task-name';
        taskName.textContent = 'Workflow Engine Implementation';
        taskHeader.appendChild(taskName);
        
        taskCard.appendChild(taskHeader);
        
        const taskContent = document.createElement('div');
        taskContent.className = 'task-content';
        
        const taskDetails = [
            {
                label: 'Description',
                content: 'Develop the core workflow engine that will manage state transitions for credit requests',
                icon: 'fa-info-circle'
            },
            {
                label: 'Skills Required',
                content: 'Python, Django, State Machine Design',
                icon: 'fa-code'
            },
            {
                label: 'Steps',
                content: `<ol>
                    <li>Create WorkflowState model</li>
                    <li>Create WorkflowTransition model</li>
                    <li>Implement state transition logic</li>
                    <li>Add permission checks for transitions</li>
                    <li>Create workflow history tracking</li>
                </ol>`,
                icon: 'fa-list-ol'
            },
            {
                label: 'Deliverables',
                content: 'Functioning workflow engine with state transitions and permissions',
                icon: 'fa-clipboard-check'
            },
            {
                label: 'Test Cases',
                content: 'State transitions, permission validation, history tracking',
                icon: 'fa-vial'
            }
        ];
        
        taskDetails.forEach(detail => {
            const detailRow = document.createElement('div');
            detailRow.className = 'task-detail-row';
            
            const detailIcon = document.createElement('div');
            detailIcon.className = 'detail-icon';
            detailIcon.innerHTML = `<i class="fas ${detail.icon}"></i>`;
            detailRow.appendChild(detailIcon);
            
            const detailContent = document.createElement('div');
            detailContent.className = 'detail-content';
            
            const detailLabel = document.createElement('div');
            detailLabel.className = 'detail-label';
            detailLabel.textContent = detail.label;
            detailContent.appendChild(detailLabel);
            
            const detailText = document.createElement('div');
            detailText.className = 'detail-text';
            detailText.innerHTML = detail.content;
            detailContent.appendChild(detailText);
            
            detailRow.appendChild(detailContent);
            taskContent.appendChild(detailRow);
        });
        
        taskCard.appendChild(taskContent);
        taskSection.appendChild(taskCard);
        
        container.appendChild(taskSection);
        
        // Final Document with visual callout
        const finalSection = document.createElement('div');
        finalSection.className = 'final-section';
        
        const finalCard = document.createElement('div');
        finalCard.className = 'final-card';
        
        const finalIcon = document.createElement('div');
        finalIcon.className = 'final-icon';
        finalIcon.innerHTML = '<i class="fas fa-file-alt"></i>';
        finalCard.appendChild(finalIcon);
        
        const finalContent = document.createElement('div');
        finalContent.className = 'final-content';
        
        const finalTitle = document.createElement('h3');
        finalTitle.className = 'final-title';
        finalTitle.textContent = 'Final Project Plan';
        finalContent.appendChild(finalTitle);
        
        const finalText = document.createElement('p');
        finalText.className = 'final-text';
        finalText.innerHTML = 'See the complete version here: <strong>Credit Risk Workflow - Project Plan FINAL</strong>';
        finalContent.appendChild(finalText);
        
        const taskMasterNote = document.createElement('div');
        taskMasterNote.className = 'taskmaster-note';
        taskMasterNote.innerHTML = `
            <div class="note-icon"><i class="fas fa-robot"></i></div>
            <div class="note-text">
                In version 3 I used Claude Taskmaster (<a href="https://github.com/eyaltoledano/claude-task-master" target="_blank">https://github.com/eyaltoledano/claude-task-master</a>) to generate the plan which is embedded into the Code editor (Windsurf) using an MCP-Server.
            </div>
        `;
        finalContent.appendChild(taskMasterNote);
        
        finalCard.appendChild(finalContent);
        finalSection.appendChild(finalCard);
        
        container.appendChild(finalSection);
        
        // Add CSS for this component
        const style = document.createElement('style');
        style.textContent = `
            .project-plan-container {
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
                max-height: 300px;
                overflow-y: auto;
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
            
            .structure-section {
                margin-bottom: 2.5rem;
            }
            
            .phase-grid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                gap: 1.5rem;
            }
            
            .phase-card {
                background-color: white;
                border-radius: 0.5rem;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                border: 1px solid #E4E7EB;
                border-top-width: 4px;
                overflow: hidden;
                transition: transform 0.2s ease-out;
            }
            
            .phase-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            
            .phase-header {
                padding: 1.25rem;
                display: flex;
                align-items: center;
                border-bottom: 1px solid #E4E7EB;
                background-color: #F5F7FA;
            }
            
            .phase-icon {
                font-size: 1.5rem;
                margin-right: 1rem;
                flex-shrink: 0;
            }
            
            .phase-title {
                font-size: 1.125rem;
                font-weight: 600;
                margin: 0;
                color: #323F4B;
            }
            
            .phase-items {
                margin: 0;
                padding: 1.25rem;
                list-style: none;
            }
            
            .phase-item {
                margin-bottom: 0.75rem;
                display: flex;
                align-items: flex-start;
            }
            
            .phase-item:last-child {
                margin-bottom: 0;
            }
            
            .phase-item i {
                margin-right: 0.75rem;
                margin-top: 0.25rem;
                flex-shrink: 0;
            }
            
            .task-section {
                margin-bottom: 2.5rem;
            }
            
            .task-card {
                background-color: white;
                border-radius: 0.5rem;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                border: 1px solid #E4E7EB;
                overflow: hidden;
            }
            
            .task-header {
                padding: 1.25rem;
                display: flex;
                align-items: center;
                background-color: #0c4da2;
                color: white;
            }
            
            .task-id {
                font-weight: 700;
                font-size: 1.125rem;
                margin-right: 1rem;
                padding: 0.25rem 0.75rem;
                background-color: rgba(255, 255, 255, 0.2);
                border-radius: 0.25rem;
            }
            
            .task-name {
                font-size: 1.25rem;
                font-weight: 600;
            }
            
            .task-content {
                padding: 1.25rem;
            }
            
            .task-detail-row {
                display: flex;
                margin-bottom: 1.25rem;
                align-items: flex-start;
            }
            
            .task-detail-row:last-child {
                margin-bottom: 0;
            }
            
            .detail-icon {
                font-size: 1.25rem;
                color: #0c4da2;
                margin-right: 1rem;
                flex-shrink: 0;
                margin-top: 0.25rem;
            }
            
            .detail-content {
                flex: 1;
            }
            
            .detail-label {
                font-weight: 600;
                color: #4A5568;
                margin-bottom: 0.5rem;
            }
            
            .detail-text {
                color: #4A5568;
                line-height: 1.5;
            }
            
            .detail-text ol {
                margin: 0;
                padding-left: 1.5rem;
            }
            
            .detail-text li {
                margin-bottom: 0.5rem;
            }
            
            .detail-text li:last-child {
                margin-bottom: 0;
            }
            
            .final-section {
                margin-bottom: 1.5rem;
            }
            
            .final-card {
                background-color: #f8fafc;
                border-radius: 0.5rem;
                padding: 1.5rem;
                display: flex;
                align-items: flex-start;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                border-left: 4px solid #38A169;
            }
            
            .final-icon {
                font-size: 2rem;
                color: #38A169;
                margin-right: 1.5rem;
                flex-shrink: 0;
            }
            
            .final-content {
                flex: 1;
            }
            
            .final-title {
                font-size: 1.25rem;
                font-weight: 600;
                color: #323F4B;
                margin-top: 0;
                margin-bottom: 0.75rem;
            }
            
            .final-text {
                font-size: 1rem;
                color: #4A5568;
                margin: 0 0 1.25rem;
                line-height: 1.6;
            }
            
            .taskmaster-note {
                display: flex;
                align-items: flex-start;
                background-color: #EBF8FF;
                padding: 1rem;
                border-radius: 0.5rem;
                border-left: 3px solid #4299E1;
            }
            
            .note-icon {
                font-size: 1.5rem;
                color: #4299E1;
                margin-right: 1rem;
                flex-shrink: 0;
            }
            
            .note-text {
                flex: 1;
                font-size: 0.875rem;
                color: #2C5282;
                line-height: 1.5;
            }
            
            .note-text a {
                color: #3182CE;
                text-decoration: none;
            }
            
            .note-text a:hover {
                text-decoration: underline;
            }
            
            @media (max-width: 768px) {
                .phase-grid {
                    grid-template-columns: 1fr;
                }
                
                .intro-card, .final-card {
                    flex-direction: column;
                }
                
                .intro-icon, .final-icon {
                    margin-right: 0;
                    margin-bottom: 1rem;
                }
                
                .task-header {
                    flex-direction: column;
                    align-items: flex-start;
                }
                
                .task-id {
                    margin-right: 0;
                    margin-bottom: 0.5rem;
                }
                
                .taskmaster-note {
                    flex-direction: column;
                }
                
                .note-icon {
                    margin-right: 0;
                    margin-bottom: 0.5rem;
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
