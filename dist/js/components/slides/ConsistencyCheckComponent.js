// Consistency Check Component
class ConsistencyCheckComponent extends BaseComponent {
    constructor(slideData) {
        super(slideData);
        this.initialized = false;
    }
    
    createContent() {
        const container = document.createElement('div');
        container.className = 'consistency-check-container';
        
        // Title section with visual impact
        const titleSection = document.createElement('div');
        titleSection.className = 'title-section';
        
        const title = document.createElement('h2');
        title.className = 'slide-title';
        title.textContent = 'Step 7: Pre-Planning Consistency Check';
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
        
        const introParagraph1 = document.createElement('p');
        introParagraph1.className = 'intro-text';
        introParagraph1.innerHTML = 'Before diving into the final project plan, it\'s crucial to check that all the documentation created so far is consistent. This step helps identify any contradictions or gaps across the various design documents.';
        introContent.appendChild(introParagraph1);
        
        const introParagraph2 = document.createElement('p');
        introParagraph2.className = 'intro-text highlight-text';
        introParagraph2.innerHTML = 'I have spent a significant amount of time getting together all of the requisite documentation, however this has been done in individual steps. I want to first check that I have all the relevant documentation and that these documents are consistent before doing the final plan.';
        introContent.appendChild(introParagraph2);
        
        introCard.appendChild(introContent);
        introSection.appendChild(introCard);
        container.appendChild(introSection);
        
        // Consistency Check Process
        const processSection = document.createElement('div');
        processSection.className = 'process-section';
        
        const processTitle = document.createElement('h3');
        processTitle.className = 'section-title';
        processTitle.textContent = 'Consistency Check Process';
        processSection.appendChild(processTitle);
        
        // Process steps
        const processSteps = document.createElement('div');
        processSteps.className = 'process-steps';
        
        const steps = [
            {
                icon: 'fa-file-alt',
                title: 'Gather Documents',
                description: 'Collect all design documents, requirements, and technical specifications.'
            },
            {
                icon: 'fa-search',
                title: 'Review for Gaps',
                description: 'Identify missing information or undocumented requirements.'
            },
            {
                icon: 'fa-exclamation-triangle',
                title: 'Identify Contradictions',
                description: 'Find conflicting requirements or specifications across documents.'
            },
            {
                icon: 'fa-check-double',
                title: 'Verify Technical Feasibility',
                description: 'Ensure all requirements can be implemented with the chosen technology stack.'
            },
            {
                icon: 'fa-list-ol',
                title: 'Document Findings',
                description: 'Create a comprehensive list of issues to be addressed before planning.'
            }
        ];
        
        steps.forEach((step, index) => {
            const stepCard = document.createElement('div');
            stepCard.className = 'step-card';
            
            const stepNumber = document.createElement('div');
            stepNumber.className = 'step-number';
            stepNumber.textContent = index + 1;
            stepCard.appendChild(stepNumber);
            
            const stepIcon = document.createElement('div');
            stepIcon.className = 'step-icon';
            stepIcon.innerHTML = `<i class="fas ${step.icon}"></i>`;
            stepCard.appendChild(stepIcon);
            
            const stepContent = document.createElement('div');
            stepContent.className = 'step-content';
            
            const stepTitle = document.createElement('h4');
            stepTitle.className = 'step-title';
            stepTitle.textContent = step.title;
            stepContent.appendChild(stepTitle);
            
            const stepDescription = document.createElement('p');
            stepDescription.className = 'step-description';
            stepDescription.textContent = step.description;
            stepContent.appendChild(stepDescription);
            
            stepCard.appendChild(stepContent);
            processSteps.appendChild(stepCard);
        });
        
        processSection.appendChild(processSteps);
        container.appendChild(processSection);
        
        // Pre-planning Prompt
        const promptSection = document.createElement('div');
        promptSection.className = 'prompt-section';
        
        const promptTitle = document.createElement('h3');
        promptTitle.className = 'section-title';
        promptTitle.textContent = 'Pre-planning Consistency Check Prompt';
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
        promptHeaderText.textContent = 'Consistency Check Prompt';
        promptHeader.appendChild(promptHeaderText);
        
        promptContainer.appendChild(promptHeader);
        
        const promptCode = document.createElement('div');
        promptCode.className = 'prompt-code';
        
        const codeContent = `<Background>
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
        
        // Benefits and Issues in a two-column layout
        const benefitsIssuesSection = document.createElement('div');
        benefitsIssuesSection.className = 'benefits-issues-section';
        
        // Left column - Benefits
        const benefitsColumn = document.createElement('div');
        benefitsColumn.className = 'column benefits-column';
        
        const benefitsCard = document.createElement('div');
        benefitsCard.className = 'content-card benefits-card';
        
        const benefitsHeader = document.createElement('div');
        benefitsHeader.className = 'card-header';
        
        const benefitsIcon = document.createElement('div');
        benefitsIcon.className = 'card-icon';
        benefitsIcon.innerHTML = '<i class="fas fa-check-circle"></i>';
        benefitsHeader.appendChild(benefitsIcon);
        
        const benefitsTitle = document.createElement('h3');
        benefitsTitle.className = 'card-title';
        benefitsTitle.textContent = 'Benefits of Consistency Check';
        benefitsHeader.appendChild(benefitsTitle);
        
        benefitsCard.appendChild(benefitsHeader);
        
        const benefitsContent = document.createElement('div');
        benefitsContent.className = 'card-content';
        
        const benefitsList = document.createElement('ul');
        benefitsList.className = 'benefits-list';
        
        const benefits = [
            'Identifies contradictions between different documents',
            'Highlights missing information before development begins',
            'Ensures technical feasibility across all components',
            'Validates that requirements align with the chosen architecture',
            'Prevents costly rework during implementation',
            'Creates a solid foundation for the project plan'
        ];
        
        benefits.forEach(benefit => {
            const benefitItem = document.createElement('li');
            benefitItem.className = 'benefit-item';
            benefitItem.innerHTML = `<i class="fas fa-check"></i> ${benefit}`;
            benefitsList.appendChild(benefitItem);
        });
        
        benefitsContent.appendChild(benefitsList);
        benefitsCard.appendChild(benefitsContent);
        benefitsColumn.appendChild(benefitsCard);
        
        // Right column - Common Issues
        const issuesColumn = document.createElement('div');
        issuesColumn.className = 'column issues-column';
        
        const issuesCard = document.createElement('div');
        issuesCard.className = 'content-card issues-card';
        
        const issuesHeader = document.createElement('div');
        issuesHeader.className = 'card-header';
        
        const issuesIcon = document.createElement('div');
        issuesIcon.className = 'card-icon';
        issuesIcon.innerHTML = '<i class="fas fa-exclamation-triangle"></i>';
        issuesHeader.appendChild(issuesIcon);
        
        const issuesTitle = document.createElement('h3');
        issuesTitle.className = 'card-title';
        issuesTitle.textContent = 'Common Issues Found';
        issuesHeader.appendChild(issuesTitle);
        
        issuesCard.appendChild(issuesHeader);
        
        const issuesContent = document.createElement('div');
        issuesContent.className = 'card-content';
        
        // Technical Issues
        const technicalIssuesTitle = document.createElement('h4');
        technicalIssuesTitle.className = 'issues-subtitle';
        technicalIssuesTitle.textContent = 'Technical Issues:';
        issuesContent.appendChild(technicalIssuesTitle);
        
        const technicalIssuesList = document.createElement('ul');
        technicalIssuesList.className = 'issues-list technical-list';
        
        const technicalIssues = [
            'Mismatched field names between schema and UI designs',
            'Workflow states that don\'t align with UI screens',
            'Missing API endpoints for certain operations',
            'Incomplete permission specifications',
            'Undefined error handling scenarios'
        ];
        
        technicalIssues.forEach(issue => {
            const issueItem = document.createElement('li');
            issueItem.className = 'issue-item';
            issueItem.innerHTML = `<i class="fas fa-times"></i> ${issue}`;
            technicalIssuesList.appendChild(issueItem);
        });
        
        issuesContent.appendChild(technicalIssuesList);
        
        // Requirements Issues
        const requirementsIssuesTitle = document.createElement('h4');
        requirementsIssuesTitle.className = 'issues-subtitle';
        requirementsIssuesTitle.textContent = 'Requirements Issues:';
        issuesContent.appendChild(requirementsIssuesTitle);
        
        const requirementsIssuesList = document.createElement('ul');
        requirementsIssuesList.className = 'issues-list requirements-list';
        
        const requirementsIssues = [
            'Ambiguous business rules',
            'Undefined edge cases',
            'Contradictory requirements across documents',
            'Missing validation rules',
            'Incomplete user journey definitions'
        ];
        
        requirementsIssues.forEach(issue => {
            const issueItem = document.createElement('li');
            issueItem.className = 'issue-item';
            issueItem.innerHTML = `<i class="fas fa-times"></i> ${issue}`;
            requirementsIssuesList.appendChild(issueItem);
        });
        
        issuesContent.appendChild(requirementsIssuesList);
        
        issuesCard.appendChild(issuesContent);
        issuesColumn.appendChild(issuesCard);
        
        // Add both columns to the section
        const columnsLayout = document.createElement('div');
        columnsLayout.className = 'columns-layout';
        columnsLayout.appendChild(benefitsColumn);
        columnsLayout.appendChild(issuesColumn);
        
        benefitsIssuesSection.appendChild(columnsLayout);
        container.appendChild(benefitsIssuesSection);
        
        // Outcome
        const outcomeSection = document.createElement('div');
        outcomeSection.className = 'outcome-section';
        
        const outcomeCard = document.createElement('div');
        outcomeCard.className = 'outcome-card';
        
        const outcomeIcon = document.createElement('div');
        outcomeIcon.className = 'outcome-icon';
        outcomeIcon.innerHTML = '<i class="fas fa-flag-checkered"></i>';
        outcomeCard.appendChild(outcomeIcon);
        
        const outcomeContent = document.createElement('div');
        outcomeContent.className = 'outcome-content';
        
        const outcomeTitle = document.createElement('h3');
        outcomeTitle.className = 'outcome-title';
        outcomeTitle.textContent = 'Outcome';
        outcomeContent.appendChild(outcomeTitle);
        
        const outcomeText = document.createElement('p');
        outcomeText.className = 'outcome-text';
        outcomeText.innerHTML = 'After addressing any inconsistencies and gaps identified in this step, you\'ll have a solid foundation for creating a comprehensive project plan that accurately reflects all requirements and technical considerations.';
        outcomeContent.appendChild(outcomeText);
        
        outcomeCard.appendChild(outcomeContent);
        outcomeSection.appendChild(outcomeCard);
        
        container.appendChild(outcomeSection);
        
        // Add CSS for this component
        const style = document.createElement('style');
        style.textContent = `
            .consistency-check-container {
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
                margin: 0 0 1rem;
            }
            
            .intro-text:last-child {
                margin-bottom: 0;
            }
            
            .highlight-text {
                font-weight: 500;
                color: #2D3748;
                background-color: #EBF8FF;
                padding: 0.75rem;
                border-radius: 0.25rem;
                border-left: 3px solid #4299E1;
            }
            
            .process-section {
                margin-bottom: 2.5rem;
            }
            
            .process-steps {
                display: flex;
                flex-wrap: wrap;
                gap: 1rem;
                justify-content: center;
            }
            
            .step-card {
                background-color: white;
                border-radius: 0.5rem;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                padding: 1.25rem;
                display: flex;
                align-items: flex-start;
                width: calc(33.333% - 1rem);
                min-width: 250px;
                border-top: 3px solid #4299E1;
                position: relative;
                transition: transform 0.2s ease-out;
            }
            
            .step-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            
            .step-number {
                position: absolute;
                top: -15px;
                left: 20px;
                width: 30px;
                height: 30px;
                background-color: #4299E1;
                color: white;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: 700;
                font-size: 0.875rem;
            }
            
            .step-icon {
                font-size: 1.5rem;
                color: #4299E1;
                margin-right: 1rem;
                flex-shrink: 0;
            }
            
            .step-content {
                flex: 1;
            }
            
            .step-title {
                font-size: 1.125rem;
                font-weight: 600;
                margin: 0 0 0.5rem;
                color: #2D3748;
            }
            
            .step-description {
                font-size: 0.875rem;
                color: #4A5568;
                margin: 0;
                line-height: 1.5;
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
            
            .benefits-issues-section {
                margin-bottom: 2.5rem;
            }
            
            .columns-layout {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
                gap: 1.5rem;
            }
            
            .content-card {
                background-color: white;
                border-radius: 0.5rem;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                border: 1px solid #E4E7EB;
                overflow: hidden;
                height: 100%;
                display: flex;
                flex-direction: column;
            }
            
            .benefits-card {
                border-top: 4px solid #38A169;
            }
            
            .issues-card {
                border-top: 4px solid #E53E3E;
            }
            
            .card-header {
                padding: 1.25rem;
                display: flex;
                align-items: center;
                border-bottom: 1px solid #E4E7EB;
                background-color: #F5F7FA;
            }
            
            .card-icon {
                font-size: 1.5rem;
                margin-right: 1rem;
                color: #4A5568;
            }
            
            .benefits-card .card-icon {
                color: #38A169;
            }
            
            .issues-card .card-icon {
                color: #E53E3E;
            }
            
            .card-title {
                font-size: 1.25rem;
                font-weight: 600;
                margin: 0;
                color: #323F4B;
            }
            
            .card-content {
                padding: 1.25rem;
                flex: 1;
            }
            
            .issues-subtitle {
                font-size: 1.125rem;
                font-weight: 600;
                margin: 0 0 1rem;
                color: #4A5568;
            }
            
            .issues-subtitle:not(:first-child) {
                margin-top: 1.5rem;
            }
            
            .benefits-list, .issues-list {
                margin: 0;
                padding: 0;
                list-style: none;
            }
            
            .benefit-item, .issue-item {
                margin-bottom: 0.75rem;
                display: flex;
                align-items: flex-start;
            }
            
            .benefit-item:last-child, .issue-item:last-child {
                margin-bottom: 0;
            }
            
            .benefit-item i, .issue-item i {
                margin-right: 0.75rem;
                margin-top: 0.25rem;
                flex-shrink: 0;
            }
            
            .benefit-item i {
                color: #38A169;
            }
            
            .technical-list i {
                color: #DD6B20;
            }
            
            .requirements-list i {
                color: #E53E3E;
            }
            
            .outcome-section {
                margin-bottom: 1.5rem;
            }
            
            .outcome-card {
                background-color: #f8fafc;
                border-radius: 0.5rem;
                padding: 1.5rem;
                display: flex;
                align-items: flex-start;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                border-left: 4px solid #805AD5;
            }
            
            .outcome-icon {
                font-size: 2rem;
                color: #805AD5;
                margin-right: 1.5rem;
                flex-shrink: 0;
            }
            
            .outcome-content {
                flex: 1;
            }
            
            .outcome-title {
                font-size: 1.25rem;
                font-weight: 600;
                color: #323F4B;
                margin-top: 0;
                margin-bottom: 0.75rem;
            }
            
            .outcome-text {
                font-size: 1rem;
                color: #4A5568;
                margin: 0;
                line-height: 1.6;
            }
            
            @media (max-width: 768px) {
                .process-steps {
                    flex-direction: column;
                    align-items: center;
                }
                
                .step-card {
                    width: 100%;
                }
                
                .columns-layout {
                    grid-template-columns: 1fr;
                }
                
                .intro-card, .outcome-card {
                    flex-direction: column;
                }
                
                .intro-icon, .outcome-icon {
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
