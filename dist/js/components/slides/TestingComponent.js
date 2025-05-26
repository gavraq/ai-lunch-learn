// Testing Component
class TestingComponent extends BaseComponent {
    constructor(slideData) {
        super(slideData);
        this.initialized = false;
    }
    
    createContent() {
        const container = document.createElement('div');
        
        // Title
        const title = document.createElement('h2');
        title.textContent = 'Step 13: Testing';
        title.className = 'slide-title mb-md';
        container.appendChild(title);
        
        // Introduction
        const introSection = document.createElement('div');
        introSection.className = 'intro-section mb-lg';
        
        const introContent = document.createElement('p');
        introContent.innerHTML = 'As functionality is built, it\'s best practice to build test cases as you go and ask the LLM to perform the tests and generate a test report. This ensures that your prototype is working correctly and helps identify issues early.';
        introSection.appendChild(introContent);
        
        container.appendChild(introSection);
        
        // Testing Approach
        const approachSection = document.createElement('div');
        approachSection.className = 'approach-section mb-lg';
        
        const approachTitle = document.createElement('h3');
        approachTitle.textContent = 'Testing Approach:';
        approachSection.appendChild(approachTitle);
        
        // Create a two-column layout for testing types
        const leftColumn = document.createElement('div');
        leftColumn.className = 'testing-column';
        
        const unitTitle = document.createElement('h4');
        unitTitle.textContent = 'Unit Testing:';
        leftColumn.appendChild(unitTitle);
        
        const unitList = this.createList([
            'Test individual components in isolation',
            'Verify models, views, and services work correctly',
            'Mock dependencies to focus on specific functionality',
            'Use Django\'s TestCase class for database tests',
            'Implement test fixtures for consistent test data'
        ]);
        leftColumn.appendChild(unitList);
        
        const rightColumn = document.createElement('div');
        rightColumn.className = 'testing-column';
        
        const integrationTitle = document.createElement('h4');
        integrationTitle.textContent = 'Integration Testing:';
        rightColumn.appendChild(integrationTitle);
        
        const integrationList = this.createList([
            'Test interactions between components',
            'Verify API endpoints work correctly',
            'Test workflow transitions and state changes',
            'Validate form submissions and data processing',
            'Test authentication and authorization flows'
        ]);
        rightColumn.appendChild(integrationList);
        
        const testingLayout = this.createTwoColumnLayout(leftColumn, rightColumn);
        approachSection.appendChild(testingLayout);
        
        container.appendChild(approachSection);
        
        // AI-Assisted Testing
        const aiTestingSection = document.createElement('div');
        aiTestingSection.className = 'ai-testing-section mb-lg';
        
        const aiTestingTitle = document.createElement('h3');
        aiTestingTitle.textContent = 'AI-Assisted Testing:';
        aiTestingSection.appendChild(aiTestingTitle);
        
        const aiTestingContent = document.createElement('p');
        aiTestingContent.innerHTML = 'You can leverage AI to help with various aspects of testing:';
        aiTestingSection.appendChild(aiTestingContent);
        
        const aiTestingList = this.createList([
            'Generating test cases based on requirements',
            'Writing unit and integration tests',
            'Creating test fixtures and mock data',
            'Analyzing test coverage and suggesting improvements',
            'Interpreting test results and suggesting fixes'
        ]);
        aiTestingSection.appendChild(aiTestingList);
        
        container.appendChild(aiTestingSection);
        
        // Example Test Case Generation
        const exampleSection = document.createElement('div');
        exampleSection.className = 'example-section mb-lg';
        
        const exampleTitle = document.createElement('h3');
        exampleTitle.textContent = 'Example Test Case Generation:';
        exampleSection.appendChild(exampleTitle);
        
        const examplePrompt = document.createElement('div');
        examplePrompt.className = 'prompt-preview';
        examplePrompt.innerHTML = `
            <p><strong>Prompt:</strong></p>
            <pre class="prompt-code">
Can you write unit tests for the WorkflowState and WorkflowTransition models we just created? 
The tests should verify:
1. State creation and validation
2. Transition creation and validation
3. Permission checks for transitions
4. State transition logic
            </pre>
            
            <p><strong>Response (Example):</strong></p>
            <pre class="code-preview">
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
            </pre>
        `;
        exampleSection.appendChild(examplePrompt);
        
        container.appendChild(exampleSection);
        
        // Test Report Generation
        const reportSection = document.createElement('div');
        reportSection.className = 'report-section';
        
        const reportTitle = document.createElement('h3');
        reportTitle.textContent = 'Test Report Generation:';
        reportSection.appendChild(reportTitle);
        
        const reportPrompt = document.createElement('div');
        reportPrompt.className = 'prompt-preview';
        reportPrompt.innerHTML = `
            <p><strong>Prompt:</strong></p>
            <pre class="prompt-code">
Can you run the tests we've created and generate a test report that summarizes:
1. Number of tests run
2. Pass/fail status
3. Test coverage
4. Any issues identified
5. Recommendations for improving test coverage
            </pre>
        `;
        reportSection.appendChild(reportPrompt);
        
        const reportNote = document.createElement('p');
        reportNote.innerHTML = 'The AI can analyze test results and provide insights to help improve your test coverage and fix any issues.';
        reportSection.appendChild(reportNote);
        
        container.appendChild(reportSection);
        
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
