// Credit Risk Goals Component
class CreditRiskGoalsComponent extends BaseComponent {
    createContent() {
        const container = document.createElement('div');
        
        // Introduction
        const intro = document.createElement('div');
        intro.className = 'intro mb-lg';
        
        const introText = document.createElement('p');
        introText.className = 'large-text';
        introText.innerHTML = "Let's look at a worked example: From Emails to Apps - Credit Risk Workflow Journey";
        intro.appendChild(introText);
        container.appendChild(intro);
        
        // Current state card
        const currentStateCard = this.createCard('Current State', null);
        currentStateCard.className = 'card current-state-card mb-lg';
        
        const currentStateContent = document.createElement('div');
        currentStateContent.className = 'current-state-content';
        
        // Two-column layout for current state
        const currentStateLayout = this.createTwoColumnLayout(null, null);
        
        // Left column - pain points
        const painPoints = document.createElement('div');
        painPoints.className = 'pain-points';
        
        const painPointsTitle = document.createElement('h3');
        painPointsTitle.textContent = 'Current Pain Points:';
        painPoints.appendChild(painPointsTitle);
        
        const painPointsList = this.createList([
            'Manual email-based process',
            'Lack of transparency',
            '"Sarah\'s on holiday = approvals stop for a week"',
            'Version control issues ("Email_v3_final_FINAL_v2.xlsx")',
            'No audit trail',
            'Inconsistent approvals',
            'Difficult to track status'
        ]);
        painPoints.appendChild(painPointsList);
        
        // Right column - visualization
        const visualization = document.createElement('div');
        visualization.className = 'visualization';
        
        const emailProcess = document.createElement('div');
        emailProcess.className = 'email-process';
        emailProcess.innerHTML = `
            <div class="email-flow">
                <div class="email-icon">
                    <i class="fas fa-envelope"></i>
                    <span>Request</span>
                </div>
                <div class="email-arrow">→</div>
                <div class="email-icon">
                    <i class="fas fa-user"></i>
                    <span>Approver 1</span>
                </div>
                <div class="email-arrow">→</div>
                <div class="email-icon">
                    <i class="fas fa-user"></i>
                    <span>Approver 2</span>
                </div>
                <div class="email-arrow">→</div>
                <div class="email-icon">
                    <i class="fas fa-user"></i>
                    <span>Approver 3</span>
                </div>
                <div class="email-arrow">→</div>
                <div class="email-icon">
                    <i class="fas fa-check-circle"></i>
                    <span>Approval</span>
                </div>
            </div>
            <div class="email-problems">
                <div class="email-problem">
                    <i class="fas fa-exclamation-triangle"></i>
                    <span>Delays</span>
                </div>
                <div class="email-problem">
                    <i class="fas fa-question-circle"></i>
                    <span>Lost Emails</span>
                </div>
                <div class="email-problem">
                    <i class="fas fa-clock"></i>
                    <span>3-5 Days</span>
                </div>
            </div>
        `;
        visualization.appendChild(emailProcess);
        
        // Add columns to layout
        currentStateLayout.children[0].appendChild(painPoints);
        currentStateLayout.children[1].appendChild(visualization);
        
        currentStateContent.appendChild(currentStateLayout);
        currentStateCard.appendChild(currentStateContent);
        container.appendChild(currentStateCard);
        
        // Desired outcomes
        const desiredOutcomes = document.createElement('div');
        desiredOutcomes.className = 'desired-outcomes mb-lg';
        
        const outcomesTitle = document.createElement('h3');
        outcomesTitle.textContent = 'Desired Outcomes:';
        desiredOutcomes.appendChild(outcomesTitle);
        
        const outcomesList = this.createList([
            'Transparent workflow with clear status tracking',
            'Consistent approval process',
            'Reduced approval time (target: 1-2 days)',
            'Complete audit trail',
            'No dependency on individual availability',
            'Structured data collection',
            'Automated notifications'
        ]);
        desiredOutcomes.appendChild(outcomesList);
        container.appendChild(desiredOutcomes);
        
        // Volume metrics
        const volumeMetrics = document.createElement('div');
        volumeMetrics.className = 'volume-metrics';
        
        const metricsTitle = document.createElement('h3');
        metricsTitle.textContent = 'Current Process Metrics:';
        volumeMetrics.appendChild(metricsTitle);
        
        const metricsContent = document.createElement('div');
        metricsContent.className = 'metrics-content flex justify-between';
        
        const metrics = [
            { label: 'Monthly Volume', value: '150', icon: 'fa-chart-line' },
            { label: 'Avg. Approval Time', value: '3-5 days', icon: 'fa-clock' },
            { label: 'Stakeholders Involved', value: '5', icon: 'fa-users' }
        ];
        
        metrics.forEach(metric => {
            const metricCard = document.createElement('div');
            metricCard.className = 'metric-card';
            metricCard.innerHTML = `
                <div class="metric-icon">
                    <i class="fas ${metric.icon}"></i>
                </div>
                <div class="metric-value">${metric.value}</div>
                <div class="metric-label">${metric.label}</div>
            `;
            metricsContent.appendChild(metricCard);
        });
        
        volumeMetrics.appendChild(metricsContent);
        container.appendChild(volumeMetrics);
        
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
