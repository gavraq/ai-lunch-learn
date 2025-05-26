// UI/UX Design Component
class UiUxDesignComponent extends BaseComponent {
    constructor(slideData) {
        super(slideData);
        this.initialized = false;
    }
    
    createContent() {
        const container = document.createElement('div');
        
        // Title
        const title = document.createElement('h2');
        title.textContent = 'Step 3: UI/UX Design';
        title.className = 'slide-title mb-md';
        container.appendChild(title);
        
        // Introduction
        const introSection = document.createElement('div');
        introSection.className = 'intro-section mb-lg';
        
        const introContent = document.createElement('p');
        introContent.innerHTML = 'In our traditional approach we are so focused on trying to capture documentation of all of the detailed functionality that we forget about UI/UX design until the very end when we are performing User Acceptance testing...and by then it is too late! Even worse, we leave the UI/UX Design to backend developers who typically are not specialists in this area.';
        introSection.appendChild(introContent);
        
        const introContent2 = document.createElement('p');
        introContent2.innerHTML = 'With a prototyping approach we try to build the design aspects up front since we are trying to get something in front of end-users as quickly as possible.';
        introSection.appendChild(introContent2);
        
        container.appendChild(introSection);
        
        // Design Brief
        const designBriefSection = document.createElement('div');
        designBriefSection.className = 'design-brief-section mb-lg';
        
        const designBriefTitle = document.createElement('h3');
        designBriefTitle.textContent = 'Creating a Design Brief:';
        designBriefSection.appendChild(designBriefTitle);
        
        const designBriefContent = document.createElement('p');
        designBriefContent.innerHTML = 'It is useful to get the design and aesthetics done first to set an overall style for the app as all other aspects of the front end need to keep consistent with that design. What we are trying to get first is a <strong>Design Brief</strong>.';
        designBriefSection.appendChild(designBriefContent);
        
        container.appendChild(designBriefSection);
        
        // Example Design Brief Elements
        const elementsSection = document.createElement('div');
        elementsSection.className = 'elements-section mb-lg';
        
        const elementsTitle = document.createElement('h3');
        elementsTitle.textContent = 'Key Elements of a Design Brief:';
        elementsSection.appendChild(elementsTitle);
        
        // Create a two-column layout for design elements
        const leftElements = document.createElement('div');
        leftElements.className = 'elements-column';
        
        const colorTitle = document.createElement('h4');
        colorTitle.textContent = 'Color Palette';
        leftElements.appendChild(colorTitle);
        
        const colorList = this.createList([
            'Primary colors',
            'Secondary colors',
            'Accent colors',
            'Functional colors (success, error, etc.)',
            'Background colors'
        ]);
        leftElements.appendChild(colorList);
        
        const typographyTitle = document.createElement('h4');
        typographyTitle.textContent = 'Typography';
        leftElements.appendChild(typographyTitle);
        
        const typographyList = this.createList([
            'Font families',
            'Font weights',
            'Font styles',
            'Text sizes',
            'Heading hierarchy'
        ]);
        leftElements.appendChild(typographyList);
        
        const rightElements = document.createElement('div');
        rightElements.className = 'elements-column';
        
        const componentsTitle = document.createElement('h4');
        componentsTitle.textContent = 'Component Styling';
        rightElements.appendChild(componentsTitle);
        
        const componentsList = this.createList([
            'Button styling',
            'Card styling',
            'Input styling',
            'Icons',
            'Navigation elements'
        ]);
        rightElements.appendChild(componentsList);
        
        const spacingTitle = document.createElement('h4');
        spacingTitle.textContent = 'Spacing & Animation';
        rightElements.appendChild(spacingTitle);
        
        const spacingList = this.createList([
            'App spacing',
            'Padding and margins',
            'Motion & animation',
            'Transitions'
        ]);
        rightElements.appendChild(spacingList);
        
        const elementsLayout = this.createTwoColumnLayout(leftElements, rightElements);
        elementsSection.appendChild(elementsLayout);
        
        container.appendChild(elementsSection);
        
        // Example Prompt
        const promptSection = document.createElement('div');
        promptSection.className = 'prompt-section mb-lg';
        
        const promptTitle = document.createElement('h3');
        promptTitle.textContent = 'Example AI Prompt for Design Brief:';
        promptSection.appendChild(promptTitle);
        
        const promptCode = `<goal>
You are an industry-veteran SaaS product designer. You've built high-touch UIs for FANG-style companies.

Your goal is to take the context below, the guidelines, and the user inspiration, and turn it into a functional UX/UI style-guide
</goal>

<guidelines>
<aesthetics>
- Bold simplicity with intuitive navigation creating frictionless experiences
- Breathable whitespace complemented by strategic color accents for visual hierarchy
- Strategic negative space calibrated for cognitive breathing room
...
</aesthetics>

<practicalities>
- The organisation is a joint venture between two companies ICBC which has a red primary colour palette 
  and standard bank which has a primary blue colour as indicated below
- icbc-red: #e31937; Primary red colour
- standard bank-blue: #0c4da2; Primary blue colour
</practicalities>
</guidelines>

<context>
<app-overview>
The app is for Credit Risk Workflow, traversing the following process:
1) Credit Request: the relationship manager requests the extension of credit limits...
...
</app-overview>
</context>`;
        
        const codeBlock = this.createCodeBlock(promptCode);
        promptSection.appendChild(codeBlock);
        
        container.appendChild(promptSection);
        
        // Result
        const resultSection = document.createElement('div');
        resultSection.className = 'result-section';
        
        const resultTitle = document.createElement('h3');
        resultTitle.textContent = 'Result:';
        resultSection.appendChild(resultTitle);
        
        const resultContent = document.createElement('p');
        resultContent.innerHTML = 'See the full Design Brief in: <strong>Credit Workflow Design Brief.md</strong>';
        resultSection.appendChild(resultContent);
        
        container.appendChild(resultSection);
        
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
