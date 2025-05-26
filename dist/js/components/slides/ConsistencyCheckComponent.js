// Consistency Check Component
class ConsistencyCheckComponent extends BaseComponent {
    constructor(slideData) {
        super(slideData);
        this.initialized = false;
    }
    
    createContent() {
        const container = document.createElement('div');
        
        // Title
        const title = document.createElement('h2');
        title.textContent = 'Step 7: Pre-Planning Consistency Check';
        title.className = 'slide-title mb-md';
        container.appendChild(title);
        
        // Introduction
        const introSection = document.createElement('div');
        introSection.className = 'intro-section mb-lg';
        
        const introContent = document.createElement('p');
        introContent.innerHTML = 'Before diving into the final project plan, it\'s crucial to check that all the documentation created so far is consistent. This step helps identify any contradictions or gaps across the various design documents.';
        introSection.appendChild(introContent);
        
        const introContent2 = document.createElement('p');
        introContent2.innerHTML = 'I have spent a significant amount of time getting together all of the requisite documentation, however this has been done in individual steps. I want to first check that I have all the relevant documentation and that these documents are consistent before doing the final plan.';
        introSection.appendChild(introContent2);
        
        container.appendChild(introSection);
        
        // Pre-planning Prompt
        const promptSection = document.createElement('div');
        promptSection.className = 'prompt-section mb-lg';
        
        const promptTitle = document.createElement('h3');
        promptTitle.textContent = 'Pre-planning Consistency Check Prompt:';
        promptSection.appendChild(promptTitle);
        
        const promptCode = `<Background>
I am building a Credit Risk Workflow system. I have created a Product Requirements Document - PRD (v3).md, which is attached. This requirements document outlines: 
- An overview of the requirements 
- Specific functional requirements 
- Non functional requirements 
- High level Technical Requirements and Technology choices and final selection (using python Django for backend and React for Front end) 
- A glossary of important terms 
</background>

<Technology specific requirements>
The key technology choice is using:
- Python Django with custom workflows for the backend
- React and Material-UI as a front end.
- Deployment of the python components using uv, specifically with Prefer \`uv add\` and \`uv sync\` over pip for managing dependencies.
- Postgres database and file local file storage
- Initially this will run on a local server directly but later on the plan is to "dockerise"
The specific technology details are captured in the attached document Credit-Risk-workflow-architecture.md.
</Technology specific requirements>

<Additional information>
In addition to the PRD (v3).md and Credit-Risk-workflow-architecture.md documents, there are some additional documents that can help with specific implementation details:
1) Credit Risk Workflow System Database Schema (v3).md - which has information about the specific database fields to support application forms, roles, transitions etc.
2) Credit Risk Workflow Transition State Model (v3).md - which has some further detail to assist in the build of the specific workflows 
3) Credit Workflow Design Brief.md - this provides input for the branding of the application
</Additional information>

<Your role>
I need to plan this project very carefully and perform the build in an incremental manner, this will allow:
1) Me to understand the code base as it gets built incrementally
2) Ensure that we keep good documentation as we go along 
3) Allow test cases to be developed as we build the functionality so that we have comprehensive coverage at the end 

You are both an experienced python django and react developer, as well as a seasoned project manager with experience building complex systems with many dependencies.

I need you to review all of the files provided to determine if there are any inconsistences or gaps that need further exaplanation or any other specific documents that should be provided in order to build a detailed project plan.
</Your role>

<o>
At this stage I do not want you to develop the plan itself, but only output a list of specific:
- Inconsistencies or areas that require clarification in the existing documents
- Gaps in the existing documents
- Missing documents or areas which need to be documented
in order to facilitate the next step which will be to build a comprehensive project plan.
</o>`;
        
        const codeBlock = this.createCodeBlock(promptCode);
        promptSection.appendChild(codeBlock);
        
        container.appendChild(promptSection);
        
        // Benefits of Consistency Check
        const benefitsSection = document.createElement('div');
        benefitsSection.className = 'benefits-section mb-lg';
        
        const benefitsTitle = document.createElement('h3');
        benefitsTitle.textContent = 'Benefits of Pre-Planning Consistency Check:';
        benefitsSection.appendChild(benefitsTitle);
        
        const benefitsList = this.createList([
            'Identifies contradictions between different documents',
            'Highlights missing information before development begins',
            'Ensures technical feasibility across all components',
            'Validates that requirements align with the chosen architecture',
            'Prevents costly rework during implementation',
            'Creates a solid foundation for the project plan'
        ]);
        benefitsSection.appendChild(benefitsList);
        
        container.appendChild(benefitsSection);
        
        // Common Issues Found
        const issuesSection = document.createElement('div');
        issuesSection.className = 'issues-section mb-lg';
        
        const issuesTitle = document.createElement('h3');
        issuesTitle.textContent = 'Common Issues Found During Consistency Checks:';
        issuesSection.appendChild(issuesTitle);
        
        // Create a two-column layout for the issues
        const leftColumn = document.createElement('div');
        leftColumn.className = 'issues-column';
        
        const technicalTitle = document.createElement('h4');
        technicalTitle.textContent = 'Technical Issues:';
        leftColumn.appendChild(technicalTitle);
        
        const technicalList = this.createList([
            'Mismatched field names between schema and UI designs',
            'Workflow states that don\'t align with UI screens',
            'Missing API endpoints for certain operations',
            'Incomplete permission specifications',
            'Undefined error handling scenarios'
        ]);
        leftColumn.appendChild(technicalList);
        
        const rightColumn = document.createElement('div');
        rightColumn.className = 'issues-column';
        
        const requirementsTitle = document.createElement('h4');
        requirementsTitle.textContent = 'Requirements Issues:';
        rightColumn.appendChild(requirementsTitle);
        
        const requirementsList = this.createList([
            'Ambiguous business rules',
            'Undefined edge cases',
            'Contradictory requirements across documents',
            'Missing validation rules',
            'Incomplete user journey definitions'
        ]);
        rightColumn.appendChild(requirementsList);
        
        const issuesLayout = this.createTwoColumnLayout(leftColumn, rightColumn);
        issuesSection.appendChild(issuesLayout);
        
        container.appendChild(issuesSection);
        
        // Outcome
        const outcomeSection = document.createElement('div');
        outcomeSection.className = 'outcome-section';
        
        const outcomeTitle = document.createElement('h3');
        outcomeTitle.textContent = 'Outcome:';
        outcomeSection.appendChild(outcomeTitle);
        
        const outcomeContent = document.createElement('p');
        outcomeContent.innerHTML = 'After addressing any inconsistencies and gaps identified in this step, you\'ll have a solid foundation for creating a comprehensive project plan that accurately reflects all requirements and technical considerations.';
        outcomeSection.appendChild(outcomeContent);
        
        container.appendChild(outcomeSection);
        
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
