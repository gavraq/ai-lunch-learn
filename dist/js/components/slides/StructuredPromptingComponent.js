// Structured Prompting Component
class StructuredPromptingComponent extends BaseComponent {
    // Explicitly expose to global scope
    static {console.log('StructuredPromptingComponent component defined');}
    
    constructor(slideData) {
        super(slideData);
        this.initialized = false;
    }
    
    createContent() {
        const container = document.createElement('div');
        container.style.cssText = 'max-width: 1200px; margin: 0 auto; padding: 0 1rem; font-family: "Inter", sans-serif;';
        
        // Introduction
        const intro = document.createElement('div');
        intro.style.cssText = 'margin-bottom: 1.5rem; text-align: center;';
        
        const introText = document.createElement('p');
        introText.style.cssText = 'font-size: 1.25rem; font-weight: 500; color: #4A5568; margin: 0;';
        introText.textContent = "Let's explore how structured prompting can dramatically improve your AI interactions.";
        intro.appendChild(introText);
        
        container.appendChild(intro);
        
        // Scenario
        const scenario = document.createElement('div');
        scenario.style.cssText = 'background-color: #e6edf7; border-radius: 0.5rem; padding: 1rem 1.5rem; margin-bottom: 1.5rem; border-left: 4px solid #0c4da2;';
        
        const scenarioTitle = document.createElement('h3');
        scenarioTitle.style.cssText = 'font-size: 1.125rem; font-weight: 600; color: #0c4da2; margin-top: 0; margin-bottom: 0.5rem;';
        scenarioTitle.textContent = 'Scenario: Creating a Business Requirements Document';
        scenario.appendChild(scenarioTitle);
        
        const scenarioText = document.createElement('p');
        scenarioText.style.cssText = 'font-size: 1rem; color: #323F4B; margin: 0;';
        scenarioText.textContent = 'You need to create a Business Requirements Document (BRD) for a new credit risk workflow system.';
        scenario.appendChild(scenarioText);
        
        container.appendChild(scenario);
        
        // Prompts Comparison
        const promptsComparison = document.createElement('div');
        promptsComparison.style.cssText = 'margin-bottom: 2rem; display: flex; flex-direction: column; gap: 1.5rem;';
        
        // Bad Prompt Section
        const badPrompt = document.createElement('div');
        badPrompt.style.cssText = 'background-color: #fde8eb; border-radius: 0.5rem; border: 1px solid #e31937; padding: 1.5rem; width: 100%;';
        
        const badTitle = document.createElement('h3');
        badTitle.style.cssText = 'font-size: 1.125rem; font-weight: 600; color: #e31937; margin-top: 0; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;';
        badTitle.innerHTML = '<i class="fas fa-times-circle"></i> Bad Prompt';
        badPrompt.appendChild(badTitle);
        
        const badCode = document.createElement('pre');
        badCode.style.cssText = 'background-color: #ffffff; border-radius: 0.375rem; padding: 1rem; font-family: monospace; font-size: 1rem; margin-bottom: 1rem; border: 1px solid #E4E7EB; text-align: center; white-space: pre-wrap; word-break: break-word;';
        badCode.textContent = '"Write a BRD for a credit risk workflow system"';
        badPrompt.appendChild(badCode);
        
        const promptIssues = document.createElement('div');
        
        const issuesTitle = document.createElement('h4');
        issuesTitle.style.cssText = 'font-size: 1rem; font-weight: 600; color: #323F4B; margin-top: 0; margin-bottom: 0.5rem;';
        issuesTitle.textContent = 'Issues:';
        promptIssues.appendChild(issuesTitle);
        
        const issuesList = document.createElement('ul');
        issuesList.style.cssText = 'margin-top: 0.5rem; padding-left: 1.5rem;';
        const issues = [
            'Lacks specific context about your organization',
            'No information about intended users or stakeholders',
            'No format or structure specified',
            'No mention of key requirements or constraints',
            'No guidance on level of detail needed'
        ];
        
        issues.forEach(issue => {
            const li = document.createElement('li');
            li.style.cssText = 'margin-bottom: 0.5rem; color: #4A5568;';
            li.textContent = issue;
            issuesList.appendChild(li);
        });
        
        promptIssues.appendChild(issuesList);
        badPrompt.appendChild(promptIssues);
        promptsComparison.appendChild(badPrompt);
        
        // Good Prompt Section
        const goodPrompt = document.createElement('div');
        goodPrompt.style.cssText = 'background-color: #f0fff4; border-radius: 0.5rem; border: 1px solid #38B2AC; padding: 1.5rem; width: 100%;';
        
        const goodTitle = document.createElement('h3');
        goodTitle.style.cssText = 'font-size: 1.125rem; font-weight: 600; color: #38B2AC; margin-top: 0; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;';
        goodTitle.innerHTML = '<i class="fas fa-check-circle"></i> Good Prompt';
        goodPrompt.appendChild(goodTitle);
        
        const goodCode = document.createElement('pre');
        goodCode.style.cssText = 'background-color: #ffffff; border-radius: 0.375rem; padding: 1.5rem; font-family: monospace; font-size: 0.9rem; margin-bottom: 1rem; border: 1px solid #E4E7EB; max-height: 350px; overflow-y: auto; line-height: 1.5; white-space: pre-wrap; word-break: break-word;';
        goodCode.innerHTML = `&lt;context&gt;
I work at ICBC Standard Bank, a large financial institution. We need to create a new credit risk workflow system to streamline our credit approval process.
Current Process: Currently use email of files and approvals through 5 different stakeholders
Pain points: Lost emails, version control issues, no audit trail
&lt;/context&gt;

&lt;task&gt;
Create a comprehensive Business Requirements Document for a new Credit Risk Workflow System
Ask me questions to help fill out any gaps.
&lt;/task&gt;

&lt;requirements&gt;
- Executive summary (max 200 words)
- Current state analysis with process flow
- Future state vision with measurable benefits
- Functional requirements (categorized by priority)
- Non-functional requirements (performance, security, audit)
- Success metrics and KPIs
&lt;/requirements&gt;

&lt;format&gt;
- Use numbered sections with clear headings
- Include a requirements traceability matrix
- Add diagrams using mermaid syntax for process flows
- Create user stories in "As a... I want... So that..." format
&lt;/format&gt;

&lt;stakeholders&gt;
Front Office Relationship Manager, Senior Business Sponsors, Credit Risk Analysts, Credit Approvers, Legal, IT
&lt;/stakeholders&gt;`;
        goodPrompt.appendChild(goodCode);
        
        const promptBenefits = document.createElement('div');
        
        const benefitsTitle = document.createElement('h4');
        benefitsTitle.style.cssText = 'font-size: 1rem; font-weight: 600; color: #323F4B; margin-top: 0; margin-bottom: 0.5rem;';
        benefitsTitle.textContent = 'Benefits:';
        promptBenefits.appendChild(benefitsTitle);
        
        const benefitsList = document.createElement('ul');
        benefitsList.style.cssText = 'margin-top: 0.5rem; padding-left: 1.5rem;';
        const benefits = [
            'Clear XML-like structure makes intent explicit',
            'Provides specific context including current pain points',
            'Identifies all relevant stakeholders',
            'Specifies detailed document requirements and structure',
            'Includes format guidance with specific diagram syntax'
        ];
        
        benefits.forEach(benefit => {
            const li = document.createElement('li');
            li.style.cssText = 'margin-bottom: 0.5rem; color: #4A5568;';
            li.textContent = benefit;
            benefitsList.appendChild(li);
        });
        
        promptBenefits.appendChild(benefitsList);
        goodPrompt.appendChild(promptBenefits);
        promptsComparison.appendChild(goodPrompt);
        
        container.appendChild(promptsComparison);
        
        // Best Practices
        const bestPractices = document.createElement('div');
        bestPractices.style.cssText = 'background-color: #ffffff; border-radius: 0.5rem; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); padding: 1.5rem; margin-bottom: 1.5rem; border: 1px solid #E4E7EB;';
        
        const practicesTitle = document.createElement('h3');
        practicesTitle.style.cssText = 'font-size: 1.125rem; font-weight: 600; color: #0c4da2; margin-top: 0; margin-bottom: 1rem;';
        practicesTitle.textContent = 'Structured Prompting Best Practices';
        bestPractices.appendChild(practicesTitle);
        
        const practicesList = document.createElement('ul');
        practicesList.style.cssText = 'margin-top: 0; padding-left: 1.5rem; columns: 2; column-gap: 2rem;';
        const practices = [
            'Use XML-like tags to separate different parts of your prompt',
            'Provide relevant context about your organization and situation',
            'Be explicit about your audience and their needs',
            'Specify format requirements and level of detail needed',
            'Include constraints, limitations, or specific requirements'
        ];
        
        practices.forEach(practice => {
            const li = document.createElement('li');
            li.style.cssText = 'margin-bottom: 0.75rem; color: #4A5568; break-inside: avoid;';
            li.textContent = practice;
            practicesList.appendChild(li);
        });
        
        bestPractices.appendChild(practicesList);
        container.appendChild(bestPractices);
        
        // Conclusion
        const conclusion = document.createElement('div');
        conclusion.style.cssText = 'background-color: #e6edf7; border-radius: 0.5rem; padding: 1rem 1.5rem; text-align: center;';
        
        const conclusionText = document.createElement('p');
        conclusionText.style.cssText = 'font-size: 1.125rem; font-weight: 500; color: #0c4da2; margin: 0;';
        conclusionText.textContent = 'Structured prompting is one of the most effective ways to improve your results with AI. Start using it today!';
        conclusion.appendChild(conclusionText);
        
        container.appendChild(conclusion);
        
        return container;
    }
    
    initialize() {
        if (this.initialized) return;
        
        // Add animation to the code blocks
        const codeBlocks = document.querySelectorAll('.code-block');
        codeBlocks.forEach(block => {
            block.style.transition = 'all 0.3s ease';
            
            block.addEventListener('mouseenter', () => {
                block.style.transform = 'scale(1.02)';
                block.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
            });
            
            block.addEventListener('mouseleave', () => {
                block.style.transform = 'scale(1)';
                block.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
            });
        });
        
        this.initialized = true;
    }
    
    cleanup() {
        // Clean up event listeners
        const codeBlocks = document.querySelectorAll('.code-block');
        codeBlocks.forEach(block => {
            block.replaceWith(block.cloneNode(true));
            block.style.transform = '';
            block.style.boxShadow = '';
            block.style.transition = '';
        });
        
        this.initialized = false;
    }
}
