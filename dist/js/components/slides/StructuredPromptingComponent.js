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
        container.className = 'structured-prompting-container';
        
        // Introduction
        const intro = document.createElement('div');
        intro.className = 'intro mb-lg';
        
        const introText = document.createElement('p');
        introText.className = 'large-text';
        introText.textContent = "Let's explore how structured prompting can dramatically improve your AI interactions.";
        intro.appendChild(introText);
        
        container.appendChild(intro);
        
        // Scenario
        const scenario = document.createElement('div');
        scenario.className = 'scenario mb-lg';
        
        const scenarioTitle = document.createElement('h3');
        scenarioTitle.textContent = 'Scenario: Creating a Business Requirements Document';
        scenario.appendChild(scenarioTitle);
        
        const scenarioText = document.createElement('p');
        scenarioText.textContent = 'You need to create a Business Requirements Document (BRD) for a new credit risk workflow system.';
        scenario.appendChild(scenarioText);
        
        container.appendChild(scenario);
        
        // Prompts Comparison
        const promptsComparison = document.createElement('div');
        promptsComparison.className = 'prompts-comparison mb-lg';
        
        const twoCol = document.createElement('div');
        twoCol.className = 'two-col';
        
        // Bad Prompt Column
        const badColumn = document.createElement('div');
        badColumn.className = 'column';
        
        const badPrompt = document.createElement('div');
        badPrompt.className = 'bad-prompt';
        
        const badTitle = document.createElement('h3');
        badTitle.innerHTML = '<i class="fas fa-times-circle" style="color: var(--error);"></i> Bad Prompt';
        badPrompt.appendChild(badTitle);
        
        const badCode = document.createElement('pre');
        badCode.className = 'code-block';
        badCode.textContent = '"Write a BRD for a credit risk workflow system"';
        badPrompt.appendChild(badCode);
        
        const promptIssues = document.createElement('div');
        promptIssues.className = 'prompt-issues';
        
        const issuesTitle = document.createElement('h4');
        issuesTitle.textContent = 'Issues:';
        promptIssues.appendChild(issuesTitle);
        
        const issuesList = document.createElement('ul');
        const issues = [
            'Lacks specific context about your organization',
            'No information about intended users or stakeholders',
            'No format or structure specified',
            'No mention of key requirements or constraints',
            'No guidance on level of detail needed'
        ];
        
        issues.forEach(issue => {
            const li = document.createElement('li');
            li.textContent = issue;
            issuesList.appendChild(li);
        });
        
        promptIssues.appendChild(issuesList);
        badPrompt.appendChild(promptIssues);
        badColumn.appendChild(badPrompt);
        
        // Good Prompt Column
        const goodColumn = document.createElement('div');
        goodColumn.className = 'column';
        
        const goodPrompt = document.createElement('div');
        goodPrompt.className = 'good-prompt';
        
        const goodTitle = document.createElement('h3');
        goodTitle.innerHTML = '<i class="fas fa-check-circle" style="color: var(--success);"></i> Good Prompt';
        goodPrompt.appendChild(goodTitle);
        
        const goodCode = document.createElement('pre');
        goodCode.className = 'code-block';
        goodCode.innerHTML = `&lt;context&gt;
  I work at Standard Bank, a large financial institution in South Africa.
  We need to create a new credit risk workflow system to streamline
  our credit approval process for corporate clients.
&lt;/context&gt;

&lt;task&gt;
  Create a Business Requirements Document (BRD) for this system.
&lt;/task&gt;

&lt;audience&gt;
  The document will be reviewed by IT leadership, credit risk officers,
  and business stakeholders.
&lt;/audience&gt;

&lt;requirements&gt;
  - Must include user stories for relationship managers, credit analysts,
    and credit committee members
  - Must integrate with our existing CRM system (Salesforce)
  - Must comply with Basel III regulatory requirements
  - Must support workflow for credit requests from R5M to R500M
&lt;/requirements&gt;

&lt;format&gt;
  Use a formal BRD template with executive summary, scope, functional
  requirements, non-functional requirements, and success criteria.
&lt;/format&gt;`;
        goodPrompt.appendChild(goodCode);
        
        const promptBenefits = document.createElement('div');
        promptBenefits.className = 'prompt-benefits';
        
        const benefitsTitle = document.createElement('h4');
        benefitsTitle.textContent = 'Benefits:';
        promptBenefits.appendChild(benefitsTitle);
        
        const benefitsList = document.createElement('ul');
        const benefits = [
            'Clear XML-like structure makes intent explicit',
            'Provides specific organizational context',
            'Identifies the audience for appropriate tone/detail',
            'Lists specific requirements and constraints',
            'Specifies desired format and structure'
        ];
        
        benefits.forEach(benefit => {
            const li = document.createElement('li');
            li.textContent = benefit;
            benefitsList.appendChild(li);
        });
        
        promptBenefits.appendChild(benefitsList);
        goodPrompt.appendChild(promptBenefits);
        goodColumn.appendChild(goodPrompt);
        
        twoCol.appendChild(badColumn);
        twoCol.appendChild(goodColumn);
        promptsComparison.appendChild(twoCol);
        
        container.appendChild(promptsComparison);
        
        // Best Practices
        const bestPractices = document.createElement('div');
        bestPractices.className = 'best-practices mb-lg';
        
        const practicesTitle = document.createElement('h3');
        practicesTitle.textContent = 'Structured Prompting Best Practices';
        bestPractices.appendChild(practicesTitle);
        
        const practicesList = document.createElement('ul');
        const practices = [
            'Use XML-like tags to separate different parts of your prompt',
            'Provide relevant context about your organization and situation',
            'Be explicit about your audience and their needs',
            'Specify format requirements and level of detail needed',
            'Include constraints, limitations, or specific requirements'
        ];
        
        practices.forEach(practice => {
            const li = document.createElement('li');
            li.textContent = practice;
            practicesList.appendChild(li);
        });
        
        bestPractices.appendChild(practicesList);
        container.appendChild(bestPractices);
        
        // Conclusion
        const conclusion = document.createElement('div');
        conclusion.className = 'conclusion';
        
        const conclusionText = document.createElement('p');
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
