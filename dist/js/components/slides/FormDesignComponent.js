// Form Design Component
class FormDesignComponent extends BaseComponent {
    constructor(slideData) {
        super(slideData);
        this.initialized = false;
    }
    
    createContent() {
        const container = document.createElement('div');
        
        // Title
        const title = document.createElement('h2');
        title.textContent = 'Step 4: Design Specific Forms/Screens';
        title.className = 'slide-title mb-md';
        container.appendChild(title);
        
        // Introduction
        const introSection = document.createElement('div');
        introSection.className = 'intro-section mb-lg';
        
        const introContent = document.createElement('p');
        introContent.innerHTML = 'Once you have an overall Design Brief, you can start to design specific screens based on the requirements and consistent with the design language.';
        introSection.appendChild(introContent);
        
        container.appendChild(introSection);
        
        // Example Prompt
        const promptSection = document.createElement('div');
        promptSection.className = 'prompt-section mb-lg';
        
        const promptTitle = document.createElement('h3');
        promptTitle.textContent = 'Example AI Prompt for Form Design:';
        promptSection.appendChild(promptTitle);
        
        const promptCode = `<goal>
You are an industry-veteran SaaS product designer. You've built high-touch UIs for FANG-style companies.

Your goal is to take the context below, the guidelines, and the user requirements, and design specific screens in accordance with the UX/UI design brief.
</goal>

<aesthetics>
- Bold simplicity with intuitive navigation creating frictionless experiences
- Breathable whitespace complemented by strategic color accents for visual hierarchy
...
Specific details about the design can be found in the attached document - Credit Workflow Design Brief.md
</aesthetics>

<app-overview>
The Credit Risk Workflow app is outlined in some detail in the requirements document attached - PRD (v3).md specifically in the functional requirements section which detailed the exact workflow and screens required.
</app-overview>

<task>
I need example forms to be developed in accordance with that outlined in the PRD, specifically:
Parent process:
- Credit Paper (including workflow section at the top of the Credit Paper)
Sub-processes:
- Credit Request
- Credit Review
- Business Sponsorship
- Credit Questionnaire
- Legal Review
- Credit Analysis (with all sub-sections within this form)
- Credit Paper Compilation
- Credit Approval
Dashboards:
- Request Tracking Dashboard
- Performance Metrics Dashboard
</task>

<output format>
The front end application will be built in React and Material-UI so the format should be consistent with that technology choice.
</output format>`;
        
        const codeBlock = this.createCodeBlock(promptCode);
        promptSection.appendChild(codeBlock);
        
        container.appendChild(promptSection);
        
        // Form Types
        const formTypesSection = document.createElement('div');
        formTypesSection.className = 'form-types-section mb-lg';
        
        const formTypesTitle = document.createElement('h3');
        formTypesTitle.textContent = 'Types of Forms Designed:';
        formTypesTitle.className = 'mb-sm';
        formTypesSection.appendChild(formTypesTitle);
        
        // Create cards for different form types
        const formsContainer = document.createElement('div');
        formsContainer.className = 'forms-container';
        
        const parentProcesses = this.createCard(
            'Parent Process',
            'Credit Paper (including workflow section)'
        );
        parentProcesses.className = 'card form-card';
        
        const subProcesses = this.createCard(
            'Sub-Processes',
            document.createElement('div')
        );
        subProcesses.className = 'card form-card';
        
        // Add list of sub-processes to the card
        const subProcessList = this.createList([
            'Credit Request',
            'Credit Review',
            'Business Sponsorship',
            'Credit Questionnaire',
            'Legal Review',
            'Credit Analysis',
            'Credit Paper Compilation',
            'Credit Approval'
        ]);
        subProcesses.querySelector('div').appendChild(subProcessList);
        
        const dashboards = this.createCard(
            'Dashboards',
            document.createElement('div')
        );
        dashboards.className = 'card form-card';
        
        // Add list of dashboards to the card
        const dashboardList = this.createList([
            'Request Tracking Dashboard',
            'Performance Metrics Dashboard'
        ]);
        dashboards.querySelector('div').appendChild(dashboardList);
        
        formsContainer.appendChild(parentProcesses);
        formsContainer.appendChild(subProcesses);
        formsContainer.appendChild(dashboards);
        
        formTypesSection.appendChild(formsContainer);
        container.appendChild(formTypesSection);
        
        // Example Form Components
        const exampleSection = document.createElement('div');
        exampleSection.className = 'example-section';
        
        const exampleTitle = document.createElement('h3');
        exampleTitle.textContent = 'Example Form Components:';
        exampleSection.appendChild(exampleTitle);
        
        const exampleContent = document.createElement('p');
        exampleContent.innerHTML = 'See examples in Claude Credit Workflow Design Project under:';
        exampleSection.appendChild(exampleContent);
        
        const exampleList = this.createList([
            'Credit Risk Workflow React Components (for Credit Request Form)',
            'Credit Workflow UI Design (Credit Review Form, Business Sponsorship Form, Credit Questionnaire Form and Legal Review Form)',
            'Credit Analysis Form Design (Credit analysis Form)',
            'Credit Request Tracking Dashboard Design (Dashboard Form)'
        ]);
        exampleSection.appendChild(exampleList);
        
        container.appendChild(exampleSection);
        
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
