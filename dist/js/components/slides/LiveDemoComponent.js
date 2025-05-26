// Live Demo Component
class LiveDemoComponent extends BaseComponent {
    constructor(slideData) {
        super(slideData);
        this.initialized = false;
    }
    
    createContent() {
        const container = document.createElement('div');
        
        // Title
        const title = document.createElement('h2');
        title.textContent = 'Live Demo';
        title.className = 'slide-title mb-md';
        container.appendChild(title);
        
        // Introduction
        const introSection = document.createElement('div');
        introSection.className = 'intro-section mb-lg';
        
        const introContent = document.createElement('p');
        introContent.innerHTML = 'After following all the previous steps, we now have a working prototype of our Credit Risk Workflow system. Let\'s take a look at the actual working system.';
        introSection.appendChild(introContent);
        
        container.appendChild(introSection);
        
        // Demo Highlights
        const highlightsSection = document.createElement('div');
        highlightsSection.className = 'highlights-section mb-lg';
        
        const highlightsTitle = document.createElement('h3');
        highlightsTitle.textContent = 'Key Highlights:';
        highlightsSection.appendChild(highlightsTitle);
        
        const highlightsList = this.createList([
            '<strong>Built by a non-developer</strong> using AI-assisted coding',
            'Fully functional workflow system with state transitions',
            'Role-based permissions and access control',
            'Interactive forms for data entry and validation',
            'Dashboard for tracking requests and monitoring progress',
            'Document upload and management capabilities',
            'Responsive design that works on desktop and mobile'
        ]);
        highlightsSection.appendChild(highlightsList);
        
        container.appendChild(highlightsSection);
        
        // Demo Instructions
        const instructionsSection = document.createElement('div');
        instructionsSection.className = 'instructions-section mb-lg';
        
        const instructionsTitle = document.createElement('h3');
        instructionsTitle.textContent = 'Demo Instructions:';
        instructionsSection.appendChild(instructionsTitle);
        
        // Create a card for demo instructions
        const instructionsCard = document.createElement('div');
        instructionsCard.className = 'demo-instructions-card';
        
        instructionsCard.innerHTML = `
            <div class="instruction-step">
                <div class="step-number">1</div>
                <div class="step-content">
                    <div class="step-title">Start the application server</div>
                    <div class="step-code">python manage.py runserver</div>
                </div>
            </div>
            <div class="instruction-step">
                <div class="step-number">2</div>
                <div class="step-content">
                    <div class="step-title">Log in as a Relationship Manager</div>
                    <div class="step-details">Username: rm@example.com<br>Password: demo1234</div>
                </div>
            </div>
            <div class="instruction-step">
                <div class="step-number">3</div>
                <div class="step-content">
                    <div class="step-title">Create a new Credit Request</div>
                    <div class="step-details">Fill out the Credit Request form with sample data</div>
                </div>
            </div>
            <div class="instruction-step">
                <div class="step-number">4</div>
                <div class="step-content">
                    <div class="step-title">Follow the workflow</div>
                    <div class="step-details">Log in as different users to see the workflow in action</div>
                </div>
            </div>
        `;
        
        instructionsSection.appendChild(instructionsCard);
        container.appendChild(instructionsSection);
        
        // Demo Screenshot
        const screenshotSection = document.createElement('div');
        screenshotSection.className = 'screenshot-section mb-lg';
        
        const screenshotTitle = document.createElement('h3');
        screenshotTitle.textContent = 'Demo Preview:';
        screenshotSection.appendChild(screenshotTitle);
        
        // Create a placeholder for the demo screenshot
        const screenshotPlaceholder = document.createElement('div');
        screenshotPlaceholder.className = 'demo-screenshot-placeholder';
        screenshotPlaceholder.innerHTML = `
            <div class="screenshot-frame">
                <div class="screenshot-header">
                    <div class="screenshot-controls">
                        <span class="control red"></span>
                        <span class="control yellow"></span>
                        <span class="control green"></span>
                    </div>
                    <div class="screenshot-title">Credit Risk Workflow Dashboard</div>
                </div>
                <div class="screenshot-content">
                    <div class="screenshot-sidebar">
                        <div class="sidebar-item active">Dashboard</div>
                        <div class="sidebar-item">Credit Requests</div>
                        <div class="sidebar-item">Approvals</div>
                        <div class="sidebar-item">Reports</div>
                        <div class="sidebar-item">Settings</div>
                    </div>
                    <div class="screenshot-main">
                        <div class="main-header">
                            <h3>Credit Request Dashboard</h3>
                        </div>
                        <div class="main-content">
                            <div class="dashboard-cards">
                                <div class="dashboard-card">
                                    <div class="card-value">12</div>
                                    <div class="card-label">Pending Requests</div>
                                </div>
                                <div class="dashboard-card">
                                    <div class="card-value">5</div>
                                    <div class="card-label">Under Review</div>
                                </div>
                                <div class="dashboard-card">
                                    <div class="card-value">8</div>
                                    <div class="card-label">Approved</div>
                                </div>
                                <div class="dashboard-card">
                                    <div class="card-value">3</div>
                                    <div class="card-label">Rejected</div>
                                </div>
                            </div>
                            <div class="dashboard-table">
                                <div class="table-header">
                                    <div class="header-cell">ID</div>
                                    <div class="header-cell">Counterparty</div>
                                    <div class="header-cell">Status</div>
                                    <div class="header-cell">Submitted</div>
                                    <div class="header-cell">Actions</div>
                                </div>
                                <div class="table-row">
                                    <div class="table-cell">CR-2025-001</div>
                                    <div class="table-cell">ACME Corp</div>
                                    <div class="table-cell"><span class="status pending">Pending</span></div>
                                    <div class="table-cell">2025-05-20</div>
                                    <div class="table-cell"><button class="view-btn">View</button></div>
                                </div>
                                <div class="table-row">
                                    <div class="table-cell">CR-2025-002</div>
                                    <div class="table-cell">Global Bank</div>
                                    <div class="table-cell"><span class="status review">Review</span></div>
                                    <div class="table-cell">2025-05-18</div>
                                    <div class="table-cell"><button class="view-btn">View</button></div>
                                </div>
                                <div class="table-row">
                                    <div class="table-cell">CR-2025-003</div>
                                    <div class="table-cell">Finance Inc</div>
                                    <div class="table-cell"><span class="status approved">Approved</span></div>
                                    <div class="table-cell">2025-05-15</div>
                                    <div class="table-cell"><button class="view-btn">View</button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        screenshotSection.appendChild(screenshotPlaceholder);
        
        container.appendChild(screenshotSection);
        
        // Key Takeaway
        const takeawaySection = document.createElement('div');
        takeawaySection.className = 'takeaway-section';
        
        const takeawayTitle = document.createElement('h3');
        takeawayTitle.textContent = 'Key Takeaway:';
        takeawaySection.appendChild(takeawayTitle);
        
        const takeawayContent = document.createElement('div');
        takeawayContent.className = 'takeaway-content';
        
        const takeawayQuote = document.createElement('blockquote');
        takeawayQuote.className = 'quote';
        takeawayQuote.innerHTML = '<p class="large-text">"With AI-assisted development, non-developers can build functional prototypes that would traditionally require professional development teams."</p>';
        takeawayContent.appendChild(takeawayQuote);
        
        takeawaySection.appendChild(takeawayContent);
        
        container.appendChild(takeawaySection);
        
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
