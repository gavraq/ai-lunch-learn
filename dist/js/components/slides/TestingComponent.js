// Testing Component
class TestingComponent extends BaseComponent {
    constructor(slideData) {
        super(slideData);
        this.initialized = false;
    }
    
    createContent() {
        const container = document.createElement('div');
        container.className = 'testing-container';
        
        // Title section with visual impact
        const titleSection = document.createElement('div');
        titleSection.className = 'title-section';
        
        const title = document.createElement('h2');
        title.className = 'slide-title';
        title.textContent = 'Step 13: Testing';
        titleSection.appendChild(title);
        
        container.appendChild(titleSection);
        
        // Introduction with visual emphasis
        const introSection = document.createElement('div');
        introSection.className = 'intro-section';
        
        const introCard = document.createElement('div');
        introCard.className = 'intro-card';
        
        const introIcon = document.createElement('div');
        introIcon.className = 'intro-icon';
        introIcon.innerHTML = '<i class="fas fa-vial"></i>';
        introCard.appendChild(introIcon);
        
        const introContent = document.createElement('div');
        introContent.className = 'intro-content';
        
        const introParagraph = document.createElement('p');
        introParagraph.className = 'intro-text';
        introParagraph.innerHTML = 'As functionality is built, it\'s best practice to build test cases as you go and ask the LLM to perform the tests and generate a test report. This ensures that your prototype is working correctly and helps identify issues early.';
        introContent.appendChild(introParagraph);
        
        introCard.appendChild(introContent);
        introSection.appendChild(introCard);
        container.appendChild(introSection);
        
        // Testing Approach with visual cards
        const approachSection = document.createElement('div');
        approachSection.className = 'approach-section';
        
        const approachTitle = document.createElement('h3');
        approachTitle.className = 'section-title';
        approachTitle.textContent = 'Testing Approach';
        approachSection.appendChild(approachTitle);
        
        const approachGrid = document.createElement('div');
        approachGrid.className = 'approach-grid';
        
        // Unit Testing Card
        const unitCard = document.createElement('div');
        unitCard.className = 'approach-card unit-card';
        
        const unitHeader = document.createElement('div');
        unitHeader.className = 'card-header';
        
        const unitIcon = document.createElement('div');
        unitIcon.className = 'card-icon';
        unitIcon.innerHTML = '<i class="fas fa-cube"></i>';
        unitHeader.appendChild(unitIcon);
        
        const unitTitle = document.createElement('h4');
        unitTitle.className = 'card-title';
        unitTitle.textContent = 'Unit Testing';
        unitHeader.appendChild(unitTitle);
        
        unitCard.appendChild(unitHeader);
        
        const unitList = document.createElement('ul');
        unitList.className = 'card-list';
        
        const unitItems = [
            'Test individual components in isolation',
            'Verify models, views, and services work correctly',
            'Mock dependencies to focus on specific functionality',
            'Use Django\'s TestCase class for database tests',
            'Implement test fixtures for consistent test data'
        ];
        
        unitItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.className = 'card-item';
            listItem.innerHTML = `<i class="fas fa-check"></i> ${item}`;
            unitList.appendChild(listItem);
        });
        
        unitCard.appendChild(unitList);
        approachGrid.appendChild(unitCard);
        
        // Integration Testing Card
        const integrationCard = document.createElement('div');
        integrationCard.className = 'approach-card integration-card';
        
        const integrationHeader = document.createElement('div');
        integrationHeader.className = 'card-header';
        
        const integrationIcon = document.createElement('div');
        integrationIcon.className = 'card-icon';
        integrationIcon.innerHTML = '<i class="fas fa-puzzle-piece"></i>';
        integrationHeader.appendChild(integrationIcon);
        
        const integrationTitle = document.createElement('h4');
        integrationTitle.className = 'card-title';
        integrationTitle.textContent = 'Integration Testing';
        integrationHeader.appendChild(integrationTitle);
        
        integrationCard.appendChild(integrationHeader);
        
        const integrationList = document.createElement('ul');
        integrationList.className = 'card-list';
        
        const integrationItems = [
            'Test interactions between components',
            'Verify API endpoints work correctly',
            'Test workflow transitions and state changes',
            'Validate form submissions and data processing',
            'Test authentication and authorization flows'
        ];
        
        integrationItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.className = 'card-item';
            listItem.innerHTML = `<i class="fas fa-check"></i> ${item}`;
            integrationList.appendChild(listItem);
        });
        
        integrationCard.appendChild(integrationList);
        approachGrid.appendChild(integrationCard);
        
        approachSection.appendChild(approachGrid);
        container.appendChild(approachSection);
        
        // AI-Assisted Testing with visual card
        const aiTestingSection = document.createElement('div');
        aiTestingSection.className = 'ai-testing-section';
        
        const aiTestingTitle = document.createElement('h3');
        aiTestingTitle.className = 'section-title';
        aiTestingTitle.textContent = 'AI-Assisted Testing';
        aiTestingSection.appendChild(aiTestingTitle);
        
        const aiTestingCard = document.createElement('div');
        aiTestingCard.className = 'ai-testing-card';
        
        const aiTestingHeader = document.createElement('div');
        aiTestingHeader.className = 'ai-testing-header';
        aiTestingHeader.innerHTML = '<i class="fas fa-robot"></i> How AI Can Help with Testing';
        aiTestingCard.appendChild(aiTestingHeader);
        
        const aiTestingGrid = document.createElement('div');
        aiTestingGrid.className = 'ai-testing-grid';
        
        const aiTestingItems = [
            {
                icon: 'fa-code',
                text: 'Generating test cases based on requirements'
            },
            {
                icon: 'fa-vial',
                text: 'Writing unit and integration tests'
            },
            {
                icon: 'fa-database',
                text: 'Creating test fixtures and mock data'
            },
            {
                icon: 'fa-chart-pie',
                text: 'Analyzing test coverage and suggesting improvements'
            },
            {
                icon: 'fa-bug',
                text: 'Interpreting test results and suggesting fixes'
            }
        ];
        
        aiTestingItems.forEach(item => {
            const itemCard = document.createElement('div');
            itemCard.className = 'ai-testing-item';
            
            const itemIcon = document.createElement('div');
            itemIcon.className = 'item-icon';
            itemIcon.innerHTML = `<i class="fas ${item.icon}"></i>`;
            itemCard.appendChild(itemIcon);
            
            const itemText = document.createElement('div');
            itemText.className = 'item-text';
            itemText.textContent = item.text;
            itemCard.appendChild(itemText);
            
            aiTestingGrid.appendChild(itemCard);
        });
        
        aiTestingCard.appendChild(aiTestingGrid);
        aiTestingSection.appendChild(aiTestingCard);
        container.appendChild(aiTestingSection);
        
        // Example Test Case Generation with visual card
        const exampleSection = document.createElement('div');
        exampleSection.className = 'example-section';
        
        const exampleTitle = document.createElement('h3');
        exampleTitle.className = 'section-title';
        exampleTitle.textContent = 'Example Test Case Generation';
        exampleSection.appendChild(exampleTitle);
        
        // Create a visually appealing prompt container
        const promptContainer = document.createElement('div');
        promptContainer.className = 'prompt-container';
        
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
        
        promptContainer.appendChild(promptHeader);
        
        const promptCode = document.createElement('div');
        promptCode.className = 'prompt-code';
        promptCode.textContent = `Can you write unit tests for the WorkflowState and WorkflowTransition models we just created? 
The tests should verify:
1. State creation and validation
2. Transition creation and validation
3. Permission checks for transitions
4. State transition logic`;
        promptContainer.appendChild(promptCode);
        
        // Copy button for the prompt
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-button';
        copyButton.innerHTML = '<i class="fas fa-copy"></i> Copy';
        copyButton.setAttribute('data-code', promptCode.textContent);
        promptContainer.appendChild(copyButton);
        
        exampleSection.appendChild(promptContainer);
        
        // Response container
        const responseContainer = document.createElement('div');
        responseContainer.className = 'response-container';
        
        const responseHeader = document.createElement('div');
        responseHeader.className = 'response-header';
        
        const responseIcon = document.createElement('div');
        responseIcon.className = 'response-icon';
        responseIcon.innerHTML = '<i class="fas fa-code"></i>';
        responseHeader.appendChild(responseIcon);
        
        const responseHeaderText = document.createElement('div');
        responseHeaderText.className = 'response-header-text';
        responseHeaderText.textContent = 'Response (Example)';
        responseHeader.appendChild(responseHeaderText);
        
        responseContainer.appendChild(responseHeader);
        
        const responseCode = document.createElement('div');
        responseCode.className = 'response-code';
        responseCode.innerHTML = `<pre>
import uuid
from django.test import TestCase
from django.contrib.auth import get_user_model
from apps.workflow.models import WorkflowState, WorkflowTransition
from apps.workflow.exceptions import InvalidTransitionError

User = get_user_model()

class WorkflowStateTests(TestCase):
    def setUp(self):
        self.draft_state = WorkflowState.objects.create(
            name="Draft",
            description="Initial draft state",
            is_initial=True
        )
        self.review_state = WorkflowState.objects.create(
            name="Under Review",
            description="Being reviewed by credit analyst"
        )
        
    def test_state_creation(self):
        """Test that workflow states can be created correctly"""
        self.assertEqual(self.draft_state.name, "Draft")
        self.assertEqual(self.draft_state.description, "Initial draft state")
        self.assertTrue(self.draft_state.is_initial)
        self.assertFalse(self.draft_state.is_final)
        
    def test_unique_initial_state(self):
        """Test that there can only be one initial state"""
        with self.assertRaises(Exception):
            WorkflowState.objects.create(
                name="Another Initial",
                description="This should fail",
                is_initial=True
            )
            
# More tests for WorkflowTransition...
</pre>`;
        responseContainer.appendChild(responseCode);
        
        exampleSection.appendChild(responseContainer);
        container.appendChild(exampleSection);
        
        // Test Report Generation with visual card
        const reportSection = document.createElement('div');
        reportSection.className = 'report-section';
        
        const reportTitle = document.createElement('h3');
        reportTitle.className = 'section-title';
        reportTitle.textContent = 'Test Report Generation';
        reportSection.appendChild(reportTitle);
        
        // Create a visually appealing prompt container
        const reportPromptContainer = document.createElement('div');
        reportPromptContainer.className = 'prompt-container';
        
        const reportPromptHeader = document.createElement('div');
        reportPromptHeader.className = 'prompt-header';
        
        const reportPromptIcon = document.createElement('div');
        reportPromptIcon.className = 'prompt-icon';
        reportPromptIcon.innerHTML = '<i class="fas fa-terminal"></i>';
        reportPromptHeader.appendChild(reportPromptIcon);
        
        const reportPromptHeaderText = document.createElement('div');
        reportPromptHeaderText.className = 'prompt-header-text';
        reportPromptHeaderText.textContent = 'Prompt';
        reportPromptHeader.appendChild(reportPromptHeaderText);
        
        reportPromptContainer.appendChild(reportPromptHeader);
        
        const reportPromptCode = document.createElement('div');
        reportPromptCode.className = 'prompt-code';
        reportPromptCode.textContent = `Can you run the tests we've created and generate a test report that summarizes:
1. Number of tests run
2. Pass/fail status
3. Test coverage
4. Any issues identified
5. Recommendations for improving test coverage`;
        reportPromptContainer.appendChild(reportPromptCode);
        
        // Copy button for the prompt
        const reportCopyButton = document.createElement('button');
        reportCopyButton.className = 'copy-button';
        reportCopyButton.innerHTML = '<i class="fas fa-copy"></i> Copy';
        reportCopyButton.setAttribute('data-code', reportPromptCode.textContent);
        reportPromptContainer.appendChild(reportCopyButton);
        
        reportSection.appendChild(reportPromptContainer);
        
        const reportNote = document.createElement('div');
        reportNote.className = 'report-note';
        reportNote.innerHTML = '<i class="fas fa-info-circle"></i> The AI can analyze test results and provide insights to help improve your test coverage and fix any issues.';
        reportSection.appendChild(reportNote);
        
        container.appendChild(reportSection);
        
        // Add CSS for this component
        const style = document.createElement('style');
        style.textContent = `
            .testing-container {
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
            
            .approach-section {
                margin-bottom: 2.5rem;
            }
            
            .approach-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: 1.5rem;
            }
            
            .approach-card {
                background-color: white;
                border-radius: 0.5rem;
                overflow: hidden;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                border: 1px solid #E4E7EB;
                height: 100%;
                transition: transform 0.2s ease-out;
            }
            
            .approach-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            
            .unit-card {
                border-top: 4px solid #0c4da2;
            }
            
            .integration-card {
                border-top: 4px solid #e31937;
            }
            
            .card-header {
                padding: 1.25rem;
                background-color: #F5F7FA;
                display: flex;
                align-items: center;
                border-bottom: 1px solid #E4E7EB;
            }
            
            .card-icon {
                font-size: 1.5rem;
                margin-right: 1rem;
                flex-shrink: 0;
            }
            
            .unit-card .card-icon {
                color: #0c4da2;
            }
            
            .integration-card .card-icon {
                color: #e31937;
            }
            
            .card-title {
                font-size: 1.125rem;
                font-weight: 600;
                margin: 0;
                color: #323F4B;
            }
            
            .card-list {
                margin: 0;
                padding: 1.25rem;
                list-style: none;
            }
            
            .card-item {
                margin-bottom: 0.75rem;
                display: flex;
                align-items: flex-start;
                line-height: 1.5;
                color: #4A5568;
                font-size: 0.875rem;
            }
            
            .card-item:last-child {
                margin-bottom: 0;
            }
            
            .card-item i {
                margin-right: 0.75rem;
                margin-top: 0.25rem;
                flex-shrink: 0;
            }
            
            .unit-card .card-item i {
                color: #0c4da2;
            }
            
            .integration-card .card-item i {
                color: #e31937;
            }
            
            .ai-testing-section {
                margin-bottom: 2.5rem;
            }
            
            .ai-testing-card {
                background-color: white;
                border-radius: 0.5rem;
                overflow: hidden;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                border: 1px solid #E4E7EB;
                border-top: 4px solid #805AD5;
            }
            
            .ai-testing-header {
                padding: 1.25rem;
                background-color: #F5F7FA;
                font-weight: 600;
                font-size: 1.125rem;
                color: #805AD5;
                border-bottom: 1px solid #E4E7EB;
            }
            
            .ai-testing-header i {
                margin-right: 0.75rem;
            }
            
            .ai-testing-grid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
                gap: 1rem;
                padding: 1.25rem;
            }
            
            .ai-testing-item {
                background-color: #F8FAFC;
                border-radius: 0.5rem;
                padding: 1rem;
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
                transition: transform 0.2s ease-out;
            }
            
            .ai-testing-item:hover {
                transform: translateY(-5px);
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }
            
            .item-icon {
                font-size: 1.5rem;
                color: #805AD5;
                margin-bottom: 0.75rem;
            }
            
            .item-text {
                font-size: 0.875rem;
                color: #4A5568;
                line-height: 1.5;
            }
            
            .example-section {
                margin-bottom: 2.5rem;
            }
            
            .prompt-container {
                background-color: #1F2933;
                border-radius: 0.5rem;
                overflow: hidden;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
                position: relative;
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
            
            .response-container {
                background-color: white;
                border-radius: 0.5rem;
                overflow: hidden;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                border: 1px solid #E4E7EB;
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
            
            .response-code {
                padding: 0;
                color: #4A5568;
                font-size: 0.875rem;
                line-height: 1.6;
                max-height: 400px;
                overflow-y: auto;
            }
            
            .response-code pre {
                margin: 0;
                padding: 1.5rem;
                background-color: #1F2933;
                color: #CBD2D9;
                font-family: monospace;
                font-size: 0.875rem;
                line-height: 1.6;
                white-space: pre;
                overflow-x: auto;
            }
            
            .report-section {
                margin-bottom: 1.5rem;
            }
            
            .report-note {
                background-color: #EBF8FF;
                border-radius: 0.5rem;
                padding: 1rem;
                color: #2C5282;
                font-size: 0.875rem;
                line-height: 1.5;
                border-left: 3px solid #4299E1;
                margin-top: 1rem;
            }
            
            .report-note i {
                color: #4299E1;
                margin-right: 0.5rem;
            }
            
            @media (max-width: 768px) {
                .approach-grid, .ai-testing-grid {
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
        
        // Add event listeners for copy buttons
        const copyButtons = document.querySelectorAll('.copy-button');
        copyButtons.forEach(button => {
            button.addEventListener('click', () => {
                const code = button.getAttribute('data-code');
                navigator.clipboard.writeText(code).then(() => {
                    const originalText = button.innerHTML;
                    button.innerHTML = '<i class="fas fa-check"></i> Copied!';
                    setTimeout(() => {
                        button.innerHTML = originalText;
                    }, 2000);
                });
            });
        });
        
        this.initialized = true;
    }

    cleanup() {
        // Clean up event listeners
        const copyButtons = document.querySelectorAll('.copy-button');
        copyButtons.forEach(button => {
            button.removeEventListener('click', () => {});
        });
        
        this.initialized = false;
    }
}
