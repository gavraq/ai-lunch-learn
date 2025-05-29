// Live Demo Component
class LiveDemoComponent extends BaseComponent {
    constructor(slideData) {
        super(slideData);
        this.initialized = false;
    }
    
    createContent() {
        const container = document.createElement('div');
        container.className = 'live-demo-container';
        
        // Title section with visual impact
        const titleSection = document.createElement('div');
        titleSection.className = 'title-section';
        
        const title = document.createElement('h2');
        title.className = 'slide-title';
        title.textContent = 'Live Demo';
        titleSection.appendChild(title);
        
        container.appendChild(titleSection);
        
        // Introduction with visual emphasis
        const introSection = document.createElement('div');
        introSection.className = 'intro-section';
        
        const introCard = document.createElement('div');
        introCard.className = 'intro-card';
        
        const introIcon = document.createElement('div');
        introIcon.className = 'intro-icon';
        introIcon.innerHTML = '<i class="fas fa-laptop-code"></i>';
        introCard.appendChild(introIcon);
        
        const introContent = document.createElement('div');
        introContent.className = 'intro-content';
        
        const introParagraph = document.createElement('p');
        introParagraph.className = 'intro-text';
        introParagraph.innerHTML = 'After following all the previous steps, we now have a working prototype of our Credit Risk Workflow system. Let\'s take a look at the actual working system.';
        introContent.appendChild(introParagraph);
        
        introCard.appendChild(introContent);
        introSection.appendChild(introCard);
        container.appendChild(introSection);
        
        // Demo Highlights with visual card
        const highlightsSection = document.createElement('div');
        highlightsSection.className = 'highlights-section';
        
        const highlightsTitle = document.createElement('h3');
        highlightsTitle.className = 'section-title';
        highlightsTitle.textContent = 'Key Highlights';
        highlightsSection.appendChild(highlightsTitle);
        
        const highlightsCard = document.createElement('div');
        highlightsCard.className = 'highlights-card';
        
        const highlightsList = document.createElement('ul');
        highlightsList.className = 'highlights-list';
        
        const highlights = [
            {
                text: '<strong>Built by a non-developer</strong> using AI-assisted coding',
                icon: 'fa-user',
                color: '#0c4da2'
            },
            {
                text: 'Fully functional workflow system with state transitions',
                icon: 'fa-project-diagram',
                color: '#e31937'
            },
            {
                text: 'Role-based permissions and access control',
                icon: 'fa-user-shield',
                color: '#38B2AC'
            },
            {
                text: 'Interactive forms for data entry and validation',
                icon: 'fa-clipboard-list',
                color: '#805AD5'
            },
            {
                text: 'Dashboard for tracking requests and monitoring progress',
                icon: 'fa-chart-bar',
                color: '#38A169'
            },
            {
                text: 'Document upload and management capabilities',
                icon: 'fa-file-upload',
                color: '#DD6B20'
            },
            {
                text: 'Responsive design that works on desktop and mobile',
                icon: 'fa-mobile-alt',
                color: '#3182CE'
            }
        ];
        
        highlights.forEach(highlight => {
            const highlightItem = document.createElement('li');
            highlightItem.className = 'highlight-item';
            
            const highlightIcon = document.createElement('div');
            highlightIcon.className = 'highlight-icon';
            highlightIcon.innerHTML = `<i class="fas ${highlight.icon}"></i>`;
            highlightIcon.style.backgroundColor = highlight.color;
            highlightItem.appendChild(highlightIcon);
            
            const highlightText = document.createElement('div');
            highlightText.className = 'highlight-text';
            highlightText.innerHTML = highlight.text;
            highlightItem.appendChild(highlightText);
            
            highlightsList.appendChild(highlightItem);
        });
        
        highlightsCard.appendChild(highlightsList);
        highlightsSection.appendChild(highlightsCard);
        container.appendChild(highlightsSection);
        
        // Demo Instructions with visual card
        const instructionsSection = document.createElement('div');
        instructionsSection.className = 'instructions-section';
        
        const instructionsTitle = document.createElement('h3');
        instructionsTitle.className = 'section-title';
        instructionsTitle.textContent = 'Demo Instructions';
        instructionsSection.appendChild(instructionsTitle);
        
        const instructionsCard = document.createElement('div');
        instructionsCard.className = 'instructions-card';
        
        const instructionsSteps = [
            {
                number: 1,
                title: 'Start the application server',
                details: 'python manage.py runserver',
                isCode: true,
                color: '#0c4da2'
            },
            {
                number: 2,
                title: 'Log in as a Relationship Manager',
                details: 'Username: rm@example.com<br>Password: demo1234',
                isCode: false,
                color: '#e31937'
            },
            {
                number: 3,
                title: 'Create a new Credit Request',
                details: 'Fill out the Credit Request form with sample data',
                isCode: false,
                color: '#38B2AC'
            },
            {
                number: 4,
                title: 'Follow the workflow',
                details: 'Log in as different users to see the workflow in action',
                isCode: false,
                color: '#805AD5'
            }
        ];
        
        instructionsSteps.forEach(step => {
            const stepCard = document.createElement('div');
            stepCard.className = 'instruction-step';
            
            const stepNumber = document.createElement('div');
            stepNumber.className = 'step-number';
            stepNumber.textContent = step.number;
            stepNumber.style.backgroundColor = step.color;
            stepCard.appendChild(stepNumber);
            
            const stepContent = document.createElement('div');
            stepContent.className = 'step-content';
            
            const stepTitle = document.createElement('div');
            stepTitle.className = 'step-title';
            stepTitle.textContent = step.title;
            stepContent.appendChild(stepTitle);
            
            const stepDetails = document.createElement('div');
            stepDetails.className = step.isCode ? 'step-code' : 'step-details';
            stepDetails.innerHTML = step.details;
            stepContent.appendChild(stepDetails);
            
            stepCard.appendChild(stepContent);
            instructionsCard.appendChild(stepCard);
        });
        
        instructionsSection.appendChild(instructionsCard);
        container.appendChild(instructionsSection);
        
        // Demo Screenshot with visual card
        const screenshotSection = document.createElement('div');
        screenshotSection.className = 'screenshot-section';
        
        const screenshotTitle = document.createElement('h3');
        screenshotTitle.className = 'section-title';
        screenshotTitle.textContent = 'Demo Preview';
        screenshotSection.appendChild(screenshotTitle);
        
        const screenshotCard = document.createElement('div');
        screenshotCard.className = 'screenshot-card';
        
        const screenshotFrame = document.createElement('div');
        screenshotFrame.className = 'screenshot-frame';
        
        // Browser-like header
        const screenshotHeader = document.createElement('div');
        screenshotHeader.className = 'screenshot-header';
        
        const screenshotControls = document.createElement('div');
        screenshotControls.className = 'screenshot-controls';
        screenshotControls.innerHTML = `
            <span class="control red"></span>
            <span class="control yellow"></span>
            <span class="control green"></span>
        `;
        screenshotHeader.appendChild(screenshotControls);
        
        const screenshotTitle2 = document.createElement('div');
        screenshotTitle2.className = 'screenshot-title';
        screenshotTitle2.textContent = 'Credit Risk Workflow Dashboard';
        screenshotHeader.appendChild(screenshotTitle2);
        
        screenshotFrame.appendChild(screenshotHeader);
        
        // Main content area
        const screenshotContent = document.createElement('div');
        screenshotContent.className = 'screenshot-content';
        
        // Sidebar
        const screenshotSidebar = document.createElement('div');
        screenshotSidebar.className = 'screenshot-sidebar';
        
        const sidebarItems = ['Dashboard', 'Credit Requests', 'Approvals', 'Reports', 'Settings'];
        sidebarItems.forEach((item, index) => {
            const sidebarItem = document.createElement('div');
            sidebarItem.className = `sidebar-item${index === 0 ? ' active' : ''}`;
            sidebarItem.textContent = item;
            screenshotSidebar.appendChild(sidebarItem);
        });
        
        screenshotContent.appendChild(screenshotSidebar);
        
        // Main area
        const screenshotMain = document.createElement('div');
        screenshotMain.className = 'screenshot-main';
        
        const mainHeader = document.createElement('div');
        mainHeader.className = 'main-header';
        mainHeader.innerHTML = '<h3>Credit Request Dashboard</h3>';
        screenshotMain.appendChild(mainHeader);
        
        const mainContent = document.createElement('div');
        mainContent.className = 'main-content';
        
        // Dashboard cards
        const dashboardCards = document.createElement('div');
        dashboardCards.className = 'dashboard-cards';
        
        const cardData = [
            { value: '12', label: 'Pending Requests', color: '#0c4da2' },
            { value: '5', label: 'Under Review', color: '#e31937' },
            { value: '8', label: 'Approved', color: '#38A169' },
            { value: '3', label: 'Rejected', color: '#E53E3E' }
        ];
        
        cardData.forEach(card => {
            const dashboardCard = document.createElement('div');
            dashboardCard.className = 'dashboard-card';
            dashboardCard.style.borderTopColor = card.color;
            
            const cardValue = document.createElement('div');
            cardValue.className = 'card-value';
            cardValue.textContent = card.value;
            cardValue.style.color = card.color;
            dashboardCard.appendChild(cardValue);
            
            const cardLabel = document.createElement('div');
            cardLabel.className = 'card-label';
            cardLabel.textContent = card.label;
            dashboardCard.appendChild(cardLabel);
            
            dashboardCards.appendChild(dashboardCard);
        });
        
        mainContent.appendChild(dashboardCards);
        
        // Dashboard table
        const dashboardTable = document.createElement('div');
        dashboardTable.className = 'dashboard-table';
        
        const tableHeader = document.createElement('div');
        tableHeader.className = 'table-header';
        
        const headerCells = ['ID', 'Counterparty', 'Status', 'Submitted', 'Actions'];
        headerCells.forEach(cell => {
            const headerCell = document.createElement('div');
            headerCell.className = 'header-cell';
            headerCell.textContent = cell;
            tableHeader.appendChild(headerCell);
        });
        
        dashboardTable.appendChild(tableHeader);
        
        const tableData = [
            { id: 'CR-2025-001', counterparty: 'ACME Corp', status: 'Pending', date: '2025-05-20' },
            { id: 'CR-2025-002', counterparty: 'Global Bank', status: 'Review', date: '2025-05-18' },
            { id: 'CR-2025-003', counterparty: 'Finance Inc', status: 'Approved', date: '2025-05-15' }
        ];
        
        tableData.forEach(row => {
            const tableRow = document.createElement('div');
            tableRow.className = 'table-row';
            
            const idCell = document.createElement('div');
            idCell.className = 'table-cell';
            idCell.textContent = row.id;
            tableRow.appendChild(idCell);
            
            const counterpartyCell = document.createElement('div');
            counterpartyCell.className = 'table-cell';
            counterpartyCell.textContent = row.counterparty;
            tableRow.appendChild(counterpartyCell);
            
            const statusCell = document.createElement('div');
            statusCell.className = 'table-cell';
            statusCell.innerHTML = `<span class="status ${row.status.toLowerCase()}">${row.status}</span>`;
            tableRow.appendChild(statusCell);
            
            const dateCell = document.createElement('div');
            dateCell.className = 'table-cell';
            dateCell.textContent = row.date;
            tableRow.appendChild(dateCell);
            
            const actionsCell = document.createElement('div');
            actionsCell.className = 'table-cell';
            actionsCell.innerHTML = '<button class="view-btn">View</button>';
            tableRow.appendChild(actionsCell);
            
            dashboardTable.appendChild(tableRow);
        });
        
        mainContent.appendChild(dashboardTable);
        screenshotMain.appendChild(mainContent);
        screenshotContent.appendChild(screenshotMain);
        
        screenshotFrame.appendChild(screenshotContent);
        screenshotCard.appendChild(screenshotFrame);
        screenshotSection.appendChild(screenshotCard);
        container.appendChild(screenshotSection);
        
        // Key Takeaway with visual card
        const takeawaySection = document.createElement('div');
        takeawaySection.className = 'takeaway-section';
        
        const takeawayTitle = document.createElement('h3');
        takeawayTitle.className = 'section-title';
        takeawayTitle.textContent = 'Key Takeaway';
        takeawaySection.appendChild(takeawayTitle);
        
        const takeawayCard = document.createElement('div');
        takeawayCard.className = 'takeaway-card';
        
        const quoteIcon = document.createElement('div');
        quoteIcon.className = 'quote-icon';
        quoteIcon.innerHTML = '<i class="fas fa-quote-left"></i>';
        takeawayCard.appendChild(quoteIcon);
        
        const takeawayQuote = document.createElement('blockquote');
        takeawayQuote.className = 'quote';
        takeawayQuote.innerHTML = '<p class="large-text">"With AI-assisted development, non-developers can build functional prototypes that would traditionally require professional development teams."</p>';
        takeawayCard.appendChild(takeawayQuote);
        
        takeawaySection.appendChild(takeawayCard);
        container.appendChild(takeawaySection);
        
        // Add CSS for this component
        const style = document.createElement('style');
        style.textContent = `
            .live-demo-container {
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
            
            .highlights-section {
                margin-bottom: 2.5rem;
            }
            
            .highlights-card {
                background-color: white;
                border-radius: 0.5rem;
                padding: 1.5rem;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                border: 1px solid #E4E7EB;
            }
            
            .highlights-list {
                margin: 0;
                padding: 0;
                list-style: none;
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                gap: 1rem;
            }
            
            .highlight-item {
                display: flex;
                align-items: center;
                margin-bottom: 1rem;
            }
            
            .highlight-icon {
                width: 2.5rem;
                height: 2.5rem;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                margin-right: 1rem;
                flex-shrink: 0;
            }
            
            .highlight-text {
                font-size: 0.875rem;
                line-height: 1.5;
                color: #4A5568;
            }
            
            .highlight-text strong {
                color: #323F4B;
            }
            
            .instructions-section {
                margin-bottom: 2.5rem;
            }
            
            .instructions-card {
                background-color: white;
                border-radius: 0.5rem;
                padding: 1.5rem;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                border: 1px solid #E4E7EB;
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
                gap: 1.5rem;
            }
            
            .instruction-step {
                display: flex;
                align-items: flex-start;
                background-color: #F8FAFC;
                border-radius: 0.5rem;
                padding: 1.25rem;
                box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
                transition: transform 0.2s ease-out;
            }
            
            .instruction-step:hover {
                transform: translateY(-5px);
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            
            .step-number {
                width: 2rem;
                height: 2rem;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-weight: 700;
                margin-right: 1rem;
                flex-shrink: 0;
            }
            
            .step-content {
                flex: 1;
            }
            
            .step-title {
                font-weight: 600;
                color: #323F4B;
                margin-bottom: 0.5rem;
            }
            
            .step-details {
                font-size: 0.875rem;
                color: #4A5568;
                line-height: 1.5;
            }
            
            .step-code {
                background-color: #1F2933;
                color: #CBD2D9;
                padding: 0.5rem 0.75rem;
                border-radius: 0.25rem;
                font-family: monospace;
                font-size: 0.875rem;
                line-height: 1.5;
            }
            
            .screenshot-section {
                margin-bottom: 2.5rem;
            }
            
            .screenshot-card {
                background-color: white;
                border-radius: 0.5rem;
                padding: 1.5rem;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                border: 1px solid #E4E7EB;
            }
            
            .screenshot-frame {
                border-radius: 0.5rem;
                overflow: hidden;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                border: 1px solid #E4E7EB;
            }
            
            .screenshot-header {
                background-color: #F5F7FA;
                padding: 0.5rem 1rem;
                display: flex;
                align-items: center;
                border-bottom: 1px solid #E4E7EB;
            }
            
            .screenshot-controls {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                margin-right: 1rem;
            }
            
            .control {
                width: 0.75rem;
                height: 0.75rem;
                border-radius: 50%;
            }
            
            .control.red {
                background-color: #FC8181;
            }
            
            .control.yellow {
                background-color: #F6E05E;
            }
            
            .control.green {
                background-color: #68D391;
            }
            
            .screenshot-title {
                font-size: 0.875rem;
                color: #4A5568;
                flex: 1;
                text-align: center;
            }
            
            .screenshot-content {
                display: flex;
                height: 500px;
            }
            
            .screenshot-sidebar {
                width: 200px;
                background-color: #1F2933;
                padding: 1.25rem 0;
                flex-shrink: 0;
            }
            
            .sidebar-item {
                padding: 0.75rem 1.25rem;
                color: #CBD2D9;
                font-size: 0.875rem;
                cursor: pointer;
                transition: background-color 0.2s ease-out;
            }
            
            .sidebar-item:hover {
                background-color: #323F4B;
            }
            
            .sidebar-item.active {
                background-color: #0c4da2;
                color: white;
                font-weight: 500;
            }
            
            .screenshot-main {
                flex: 1;
                background-color: #F8FAFC;
                overflow-y: auto;
            }
            
            .main-header {
                padding: 1.25rem;
                border-bottom: 1px solid #E4E7EB;
            }
            
            .main-header h3 {
                margin: 0;
                font-size: 1.25rem;
                color: #323F4B;
            }
            
            .main-content {
                padding: 1.25rem;
            }
            
            .dashboard-cards {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
                gap: 1rem;
                margin-bottom: 1.5rem;
            }
            
            .dashboard-card {
                background-color: white;
                border-radius: 0.5rem;
                padding: 1.25rem;
                box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
                text-align: center;
                border-top: 3px solid #0c4da2;
            }
            
            .card-value {
                font-size: 1.875rem;
                font-weight: 700;
                margin-bottom: 0.5rem;
            }
            
            .card-label {
                font-size: 0.75rem;
                color: #4A5568;
            }
            
            .dashboard-table {
                background-color: white;
                border-radius: 0.5rem;
                overflow: hidden;
                box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
            }
            
            .table-header {
                display: grid;
                grid-template-columns: 1fr 1.5fr 1fr 1fr 0.8fr;
                background-color: #F5F7FA;
                border-bottom: 1px solid #E4E7EB;
            }
            
            .header-cell {
                padding: 0.75rem 1rem;
                font-weight: 600;
                font-size: 0.75rem;
                color: #4A5568;
                text-transform: uppercase;
            }
            
            .table-row {
                display: grid;
                grid-template-columns: 1fr 1.5fr 1fr 1fr 0.8fr;
                border-bottom: 1px solid #E4E7EB;
            }
            
            .table-row:last-child {
                border-bottom: none;
            }
            
            .table-cell {
                padding: 0.75rem 1rem;
                font-size: 0.875rem;
                color: #4A5568;
                display: flex;
                align-items: center;
            }
            
            .status {
                padding: 0.25rem 0.5rem;
                border-radius: 0.25rem;
                font-size: 0.75rem;
                font-weight: 500;
                text-transform: uppercase;
            }
            
            .status.pending {
                background-color: #EBF8FF;
                color: #3182CE;
            }
            
            .status.review {
                background-color: #FEFCBF;
                color: #D69E2E;
            }
            
            .status.approved {
                background-color: #E6FFFA;
                color: #38A169;
            }
            
            .view-btn {
                background-color: #0c4da2;
                color: white;
                border: none;
                border-radius: 0.25rem;
                padding: 0.25rem 0.5rem;
                font-size: 0.75rem;
                cursor: pointer;
                transition: background-color 0.2s ease-out;
            }
            
            .view-btn:hover {
                background-color: #0A3D82;
            }
            
            .takeaway-section {
                margin-bottom: 1.5rem;
            }
            
            .takeaway-card {
                background-color: #f8fafc;
                border-radius: 0.5rem;
                padding: 2rem;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                border-left: 4px solid #e31937;
                position: relative;
            }
            
            .quote-icon {
                position: absolute;
                top: 1.5rem;
                left: 1.5rem;
                font-size: 2rem;
                color: rgba(12, 77, 162, 0.1);
            }
            
            .quote {
                margin: 0;
                padding-left: 3rem;
            }
            
            .large-text {
                font-size: 1.25rem;
                line-height: 1.6;
                color: #323F4B;
                font-weight: 500;
                font-style: italic;
            }
            
            @media (max-width: 768px) {
                .highlights-list, .instructions-card {
                    grid-template-columns: 1fr;
                }
                
                .intro-card {
                    flex-direction: column;
                }
                
                .intro-icon {
                    margin-right: 0;
                    margin-bottom: 1rem;
                }
                
                .screenshot-content {
                    flex-direction: column;
                    height: auto;
                }
                
                .screenshot-sidebar {
                    width: 100%;
                    display: flex;
                    overflow-x: auto;
                    padding: 0.5rem;
                }
                
                .sidebar-item {
                    padding: 0.5rem 0.75rem;
                    white-space: nowrap;
                }
                
                .dashboard-cards {
                    grid-template-columns: repeat(2, 1fr);
                }
                
                .table-header, .table-row {
                    grid-template-columns: 1fr 1.5fr 1fr;
                }
                
                .header-cell:nth-child(4), .header-cell:nth-child(5),
                .table-cell:nth-child(4), .table-cell:nth-child(5) {
                    display: none;
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
