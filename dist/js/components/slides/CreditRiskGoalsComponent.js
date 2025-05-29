// Credit Risk Goals Component
class CreditRiskGoalsComponent extends BaseComponent {
    createContent() {
        const container = document.createElement('div');
        container.style.cssText = 'max-width: 1200px; margin: 0 auto; padding: 1rem;';
        
        // The main heading is already provided by the presentation framework
        // so we don't need to add it again here
        
        // Introduction
        const intro = document.createElement('div');
        intro.className = 'intro mb-lg';
        intro.style.cssText = 'background-color: #f8fafc; border-radius: 0.5rem; padding: 1.5rem; margin-bottom: 2rem; border-left: 4px solid #0c4da2;';
        
        const introText = document.createElement('p');
        introText.className = 'large-text';
        introText.innerHTML = "Let's look at a worked example: From Emails to Apps - Credit Risk Workflow Journey";
        introText.style.cssText = 'font-size: 1.25rem; font-weight: 500; color: #4A5568; margin: 0;';
        intro.appendChild(introText);
        container.appendChild(intro);
        
        // Main content card
        const mainCard = document.createElement('div');
        mainCard.className = 'card main-card mb-lg';
        mainCard.style.cssText = 'background-color: #ffffff; border-radius: 0.5rem; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); padding: 1.5rem; margin-bottom: 2rem;';
        
        // Card header
        const cardHeader = document.createElement('div');
        cardHeader.className = 'card-header';
        cardHeader.style.cssText = 'border-bottom: 1px solid #e2e8f0; padding-bottom: 1rem; margin-bottom: 1.5rem;';
        
        // Add the credit request flow diagram to the header
        const creditFlowProcess = document.createElement('div');
        creditFlowProcess.className = 'credit-flow-process';
        creditFlowProcess.style.cssText = 'margin-top: 1.5rem; overflow-x: auto;';
        
        // Create a container with fixed height to ensure text stays on the same level
        const flowContainer = document.createElement('div');
        flowContainer.style.cssText = 'display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem; min-width: 800px;';
        
        // Define the steps in the credit request flow
        const steps = [
            { name: 'Credit Request', icon: 'fa-file-alt' },
            { name: 'Credit Review', icon: 'fa-search' },
            { name: 'Business Sponsor', icon: 'fa-handshake' },
            { name: 'Legal Review', icon: 'fa-balance-scale' },
            { name: 'Credit Analysis', icon: 'fa-chart-line' },
            { name: 'Approval', icon: 'fa-check-circle' }
        ];
        
        // Create the flow diagram
        steps.forEach((step, index) => {
            // Create step box
            const stepBox = document.createElement('div');
            stepBox.style.cssText = 'display: flex; flex-direction: column; align-items: center; padding: 0.75rem; background-color: #e6edf7; border-radius: 8px; width: 100px; height: 80px; justify-content: center; margin: 0 0.25rem; flex-shrink: 0;';
            
            // Add icon
            const icon = document.createElement('i');
            icon.className = `fas ${step.icon}`;
            icon.style.cssText = 'font-size: 1.5rem; color: #0c4da2; margin-bottom: 0.5rem;';
            stepBox.appendChild(icon);
            
            // Add label with fixed height to ensure alignment
            const label = document.createElement('div');
            label.textContent = step.name;
            label.style.cssText = 'text-align: center; font-size: 0.85rem; line-height: 1.2; color: #4a5568; height: 2.5rem; display: flex; align-items: center;';
            stepBox.appendChild(label);
            
            flowContainer.appendChild(stepBox);
            
            // Add arrow if not the last step
            if (index < steps.length - 1) {
                const arrow = document.createElement('div');
                arrow.innerHTML = '→';
                arrow.style.cssText = 'font-size: 1.25rem; margin: 0 0.5rem; color: #4a5568; flex-shrink: 0;';
                flowContainer.appendChild(arrow);
            }
        });
        
        creditFlowProcess.appendChild(flowContainer);
        
        
        const cardTitle = document.createElement('h2');
        cardTitle.textContent = 'Credit Workflow: Current State vs Desired Outcomes';
        cardTitle.style.cssText = 'font-size: 1.5rem; font-weight: 600; color: #0c4da2; margin: 0 0 1rem 0; text-align: center;';
        
        cardHeader.appendChild(cardTitle);
        cardHeader.appendChild(creditFlowProcess);
        mainCard.appendChild(cardHeader);
        
        const mainContent = document.createElement('div');
        mainContent.className = 'main-content';
        mainContent.style.cssText = 'padding: 0.5rem 0;';
        
        // Two-column layout for main content
        const mainLayout = document.createElement('div');
        mainLayout.className = 'two-column-layout';
        mainLayout.style.cssText = 'display: flex; flex-wrap: wrap; gap: 2rem; margin-bottom: 1rem;';
        
        const leftColumn = document.createElement('div');
        leftColumn.className = 'column left-column';
        leftColumn.style.cssText = 'flex: 1; min-width: 300px;';
        
        const rightColumn = document.createElement('div');
        rightColumn.className = 'column right-column';
        rightColumn.style.cssText = 'flex: 1; min-width: 300px;';
        
        mainLayout.appendChild(leftColumn);
        mainLayout.appendChild(rightColumn);
        
        // Left column - pain points
        const painPoints = document.createElement('div');
        painPoints.className = 'pain-points';
        painPoints.style.cssText = 'background-color: #fff8f8; border-radius: 0.5rem; padding: 1.5rem; border-left: 4px solid #e31937;';
        
        const painPointsTitle = document.createElement('h3');
        painPointsTitle.textContent = 'Current Pain Points:';
        painPointsTitle.style.cssText = 'font-size: 1.25rem; font-weight: 600; color: #e31937; margin-top: 0; margin-bottom: 1rem;';
        painPoints.appendChild(painPointsTitle);
        
        // Create a custom styled list for pain points
        const painPointsList = document.createElement('ul');
        painPointsList.style.cssText = 'list-style: none; padding-left: 0; margin: 0;';
        
        const painPointsItems = [
            'Manual email-based process',
            'Lack of transparency',
            '"Sarah\'s on holiday = approvals stop for a week"',
            'Version control issues ("Email_v3_final_FINAL_v2.xlsx")',
            'No audit trail',
            'Inconsistent approvals',
            'Difficult to track status'
        ];
        
        // Create list items with warning icons
        painPointsItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.style.cssText = 'margin-bottom: 0.75rem; display: flex; align-items: flex-start;';
            
            const icon = document.createElement('i');
            icon.className = 'fas fa-exclamation-circle';
            icon.style.cssText = 'color: #e31937; margin-right: 0.75rem; margin-top: 0.25rem;';
            
            const text = document.createElement('span');
            text.textContent = item;
            text.style.cssText = 'color: #4A5568;';
            
            listItem.appendChild(icon);
            listItem.appendChild(text);
            painPointsList.appendChild(listItem);
        });
        
        painPoints.appendChild(painPointsList);
        
        // Right column - desired outcomes with light green background
        const desiredOutcomes = document.createElement('div');
        desiredOutcomes.className = 'desired-outcomes';
        desiredOutcomes.style.cssText = 'background-color: #f0fff4; border-radius: 0.5rem; padding: 1.5rem; border-left: 4px solid #38a169;';
        
        const outcomesTitle = document.createElement('h3');
        outcomesTitle.textContent = 'Desired Outcomes:';
        outcomesTitle.style.cssText = 'font-size: 1.25rem; font-weight: 600; color: #38a169; margin-top: 0; margin-bottom: 1rem;';
        desiredOutcomes.appendChild(outcomesTitle);
        
        // Create a custom styled list for outcomes
        const outcomesList = document.createElement('ul');
        outcomesList.style.cssText = 'list-style: none; padding-left: 0; margin: 0;';
        
        const outcomesItems = [
            'Transparent workflow with clear status tracking',
            'Consistent approval process',
            'Reduced approval time (target: 1-2 days)',
            'Complete audit trail',
            'No dependency on individual availability',
            'Structured data collection',
            'Automated notifications'
        ];
        
        // Create list items with checkmark icons
        outcomesItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.style.cssText = 'margin-bottom: 0.75rem; display: flex; align-items: flex-start;';
            
            const icon = document.createElement('i');
            icon.className = 'fas fa-check-circle';
            icon.style.cssText = 'color: #38a169; margin-right: 0.75rem; margin-top: 0.25rem;';
            
            const text = document.createElement('span');
            text.textContent = item;
            text.style.cssText = 'color: #4A5568;';
            
            listItem.appendChild(icon);
            listItem.appendChild(text);
            outcomesList.appendChild(listItem);
        });
        
        desiredOutcomes.appendChild(outcomesList);
        
        // Add columns to layout
        leftColumn.appendChild(painPoints);
        rightColumn.appendChild(desiredOutcomes);
        
        mainContent.appendChild(mainLayout);
        mainCard.appendChild(mainContent);
        container.appendChild(mainCard);
        
        // Note: Desired Outcomes section has been moved to the right column
        
        // Note: Current Volume Metrics section has been removed to simplify the page
        
        // Add CSS for this component
        const style = document.createElement('style');
        style.textContent = `
            .email-flow {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-wrap: wrap;
                margin-bottom: var(--space-lg);
            }
            
            .email-icon {
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: var(--space-sm);
                background-color: var(--blue-light);
                border-radius: 8px;
                width: 80px;
                height: 80px;
                justify-content: center;
            }
            
            .email-icon i {
                font-size: 1.5rem;
                color: var(--standard-bank-blue);
                margin-bottom: var(--space-xs);
            }
            
            .email-arrow {
                font-size: 1.25rem;
                margin: 0 var(--space-xs);
                color: var(--neutral-600);
            }
            
            .email-problems {
                display: flex;
                justify-content: space-around;
            }
            
            .email-problem {
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: var(--space-sm);
            }
            
            .email-problem i {
                font-size: 1.25rem;
                color: var(--icbc-red);
                margin-bottom: var(--space-xs);
            }
            
            .metric-card {
                background-color: var(--neutral-100);
                border-radius: 8px;
                padding: var(--space-lg);
                text-align: center;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                flex: 1;
                margin: 0 var(--space-sm);
                border: 1px solid var(--neutral-300);
            }
            
            .metric-icon {
                font-size: 2rem;
                color: var(--standard-bank-blue);
                margin-bottom: var(--space-sm);
            }
            
            .metric-value {
                font-size: 1.5rem;
                font-weight: 700;
                margin-bottom: var(--space-xs);
            }
            
            .metric-label {
                font-size: 0.875rem;
                color: var(--neutral-700);
            }
            
            @media (max-width: 768px) {
                .email-flow {
                    flex-direction: column;
                }
                
                .email-arrow {
                    transform: rotate(90deg);
                    margin: var(--space-xs) 0;
                }
                
                .metrics-content {
                    flex-direction: column;
                }
                
                .metric-card {
                    margin: var(--space-sm) 0;
                }
            }
        `;
        container.appendChild(style);
        
        return container;
    }
}
