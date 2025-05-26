// Project Plan Component
class ProjectPlanComponent extends BaseComponent {
    constructor(slideData) {
        super(slideData);
        this.initialized = false;
    }
    
    createContent() {
        const container = document.createElement('div');
        
        // Title
        const title = document.createElement('h2');
        title.textContent = 'Step 8: Project Plan';
        title.className = 'slide-title mb-md';
        container.appendChild(title);
        
        // Introduction
        const introSection = document.createElement('div');
        introSection.className = 'intro-section mb-lg';
        
        const introContent = document.createElement('p');
        introContent.innerHTML = 'After ensuring consistency across all documentation, the next step is to create a comprehensive project plan that breaks down the implementation into manageable tasks.';
        introSection.appendChild(introContent);
        
        container.appendChild(introSection);
        
        // Project Plan Prompt
        const promptSection = document.createElement('div');
        promptSection.className = 'prompt-section mb-lg';
        
        const promptTitle = document.createElement('h3');
        promptTitle.textContent = 'Project Plan Prompt:';
        promptSection.appendChild(promptTitle);
        
        const promptCode = `Background:
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
        
        const codeBlock = this.createCodeBlock(promptCode);
        promptSection.appendChild(codeBlock);
        
        container.appendChild(promptSection);
        
        // Project Plan Structure
        const structureSection = document.createElement('div');
        structureSection.className = 'structure-section mb-lg';
        
        const structureTitle = document.createElement('h3');
        structureTitle.textContent = 'Project Plan Structure:';
        structureSection.appendChild(structureTitle);
        
        // Create a visual representation of the project plan structure
        const structureContent = document.createElement('div');
        structureContent.className = 'plan-structure';
        structureContent.innerHTML = `
            <div class="plan-section">
                <div class="plan-header">
                    <i class="fas fa-project-diagram"></i>
                    <span>Project Overview</span>
                </div>
                <div class="plan-items">
                    <div class="plan-item">Objectives</div>
                    <div class="plan-item">Scope</div>
                    <div class="plan-item">Timeline</div>
                    <div class="plan-item">Resources</div>
                </div>
            </div>
            
            <div class="plan-section">
                <div class="plan-header">
                    <i class="fas fa-tasks"></i>
                    <span>Phase 1: Setup & Foundation</span>
                </div>
                <div class="plan-items">
                    <div class="plan-item">Environment Setup</div>
                    <div class="plan-item">Project Structure</div>
                    <div class="plan-item">Core Models</div>
                    <div class="plan-item">Authentication</div>
                </div>
            </div>
            
            <div class="plan-section">
                <div class="plan-header">
                    <i class="fas fa-cogs"></i>
                    <span>Phase 2: Core Functionality</span>
                </div>
                <div class="plan-items">
                    <div class="plan-item">Workflow Engine</div>
                    <div class="plan-item">Form Handling</div>
                    <div class="plan-item">API Development</div>
                    <div class="plan-item">Testing Framework</div>
                </div>
            </div>
            
            <div class="plan-section">
                <div class="plan-header">
                    <i class="fas fa-laptop-code"></i>
                    <span>Phase 3: Frontend & Integration</span>
                </div>
                <div class="plan-items">
                    <div class="plan-item">React Setup</div>
                    <div class="plan-item">UI Components</div>
                    <div class="plan-item">API Integration</div>
                    <div class="plan-item">Form Validation</div>
                </div>
            </div>
            
            <div class="plan-section">
                <div class="plan-header">
                    <i class="fas fa-check-circle"></i>
                    <span>Phase 4: Testing & Deployment</span>
                </div>
                <div class="plan-items">
                    <div class="plan-item">Unit Testing</div>
                    <div class="plan-item">Integration Testing</div>
                    <div class="plan-item">Containerization</div>
                    <div class="plan-item">Deployment</div>
                </div>
            </div>
        `;
        structureSection.appendChild(structureContent);
        
        container.appendChild(structureSection);
        
        // Task Breakdown Example
        const taskSection = document.createElement('div');
        taskSection.className = 'task-section mb-lg';
        
        const taskTitle = document.createElement('h3');
        taskTitle.textContent = 'Example Task Breakdown:';
        taskSection.appendChild(taskTitle);
        
        const taskExample = document.createElement('div');
        taskExample.className = 'task-example';
        taskExample.innerHTML = `
            <div class="task-header">
                <span class="task-id">Task 4:</span>
                <span class="task-name">Workflow Engine Implementation</span>
            </div>
            <div class="task-details">
                <div class="task-description">
                    <strong>Description:</strong> Develop the core workflow engine that will manage state transitions for credit requests
                </div>
                <div class="task-skills">
                    <strong>Skills Required:</strong> Python, Django, State Machine Design
                </div>
                <div class="task-steps">
                    <strong>Steps:</strong>
                    <ol>
                        <li>Create WorkflowState model</li>
                        <li>Create WorkflowTransition model</li>
                        <li>Implement state transition logic</li>
                        <li>Add permission checks for transitions</li>
                        <li>Create workflow history tracking</li>
                    </ol>
                </div>
                <div class="task-deliverables">
                    <strong>Deliverables:</strong> Functioning workflow engine with state transitions and permissions
                </div>
                <div class="task-tests">
                    <strong>Test Cases:</strong> State transitions, permission validation, history tracking
                </div>
            </div>
        `;
        taskSection.appendChild(taskExample);
        
        container.appendChild(taskSection);
        
        // Final Document
        const finalSection = document.createElement('div');
        finalSection.className = 'final-section';
        
        const finalTitle = document.createElement('h3');
        finalTitle.textContent = 'Final Project Plan:';
        finalSection.appendChild(finalTitle);
        
        const finalContent = document.createElement('p');
        finalContent.innerHTML = 'See the complete version here: <strong>Credit Risk Workflow - Project Plan FINAL</strong>';
        finalSection.appendChild(finalContent);
        
        const taskMasterNote = document.createElement('p');
        taskMasterNote.innerHTML = 'In version 3 I used Claude Taskmaster (<a href="https://github.com/eyaltoledano/claude-task-master" target="_blank">https://github.com/eyaltoledano/claude-task-master</a>) to generate the plan which is embedded into the Code editor (Windsurf) using an MCP-Server.';
        finalSection.appendChild(taskMasterNote);
        
        container.appendChild(finalSection);
        
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
