// Power of Voice Component
class PowerOfVoiceComponent extends BaseComponent {
    createContent() {
        const container = document.createElement('div');
        
        // Introduction
        const intro = document.createElement('div');
        intro.className = 'intro mb-lg';
        
        const introText = document.createElement('p');
        introText.className = 'large-text';
        introText.innerHTML = "Remember our Superwhisper example earlier? Let's explore how voice-to-text can transform your workflow.";
        intro.appendChild(introText);
        container.appendChild(intro);
        
        // Main content
        const mainContent = document.createElement('div');
        mainContent.className = 'main-content mb-lg';
        
        const mainQuestion = document.createElement('h3');
        mainQuestion.textContent = 'Why capture detailed notes in a meeting when AI can do it for you?';
        mainContent.appendChild(mainQuestion);
        
        const mainExplanation = document.createElement('p');
        mainExplanation.innerHTML = 'This is an obvious use case we are already using, but taking these notes to the next level we can use LLMs to directly create BRDs from meeting notes - we should be doing this today!';
        mainContent.appendChild(mainExplanation);
        container.appendChild(mainContent);
        
        // Voice options card
        const voiceOptionsCard = this.createCard('Voice Capture Options', null);
        voiceOptionsCard.className = 'card voice-options-card mb-lg';
        
        // Two-column layout for voice options
        const optionsLayout = this.createTwoColumnLayout(null, null);
        
        // Teams column
        const teamsCol = document.createElement('div');
        teamsCol.className = 'teams-options';
        
        const teamsTitle = document.createElement('h3');
        teamsTitle.innerHTML = '<i class="fab fa-microsoft"></i> Microsoft Teams';
        teamsCol.appendChild(teamsTitle);
        
        const teamsList = this.createList([
            'Built-in meeting transcription',
            'Automatic speaker identification',
            'Searchable transcripts',
            'Integration with other Microsoft tools',
            'Easy to share with meeting participants'
        ]);
        teamsCol.appendChild(teamsList);
        
        // Other options column
        const otherCol = document.createElement('div');
        otherCol.className = 'other-options';
        
        const otherTitle = document.createElement('h3');
        otherTitle.innerHTML = '<i class="fas fa-mobile-alt"></i> Mobile Options';
        otherCol.appendChild(otherTitle);
        
        const otherText = document.createElement('p');
        otherText.innerHTML = 'What about meetings that are not on Teams? You have a phone already which has capabilities to support this:';
        otherCol.appendChild(otherText);
        
        const otherList = this.createList([
            'Simple Voice memos',
            'Using an app such as Otter.ai (has limited free use but enough for shorter meetings - less than 40mins)'
        ]);
        otherCol.appendChild(otherList);
        
        // Add image placeholder for Otter.ai
        const otterImage = document.createElement('div');
        otterImage.className = 'otter-image';
        otterImage.innerHTML = `
            <img src="https://placehold.co/300x150/e6edf7/0c4da2?text=Otter.ai+Screenshot" alt="Otter.ai Screenshot">
        `;
        otherCol.appendChild(otterImage);
        
        // Add columns to layout
        optionsLayout.children[0].appendChild(teamsCol);
        optionsLayout.children[1].appendChild(otherCol);
        
        voiceOptionsCard.appendChild(optionsLayout);
        container.appendChild(voiceOptionsCard);
        
        // Workflow diagram
        const workflowSection = document.createElement('div');
        workflowSection.className = 'workflow-section mb-lg';
        
        const workflowTitle = document.createElement('h3');
        workflowTitle.textContent = 'Voice-to-Document Workflow:';
        workflowSection.appendChild(workflowTitle);
        
        const workflowDiagram = document.createElement('div');
        workflowDiagram.className = 'workflow-diagram';
        workflowDiagram.innerHTML = `
            <div class="workflow-step">
                <div class="workflow-icon">
                    <i class="fas fa-microphone"></i>
                </div>
                <div class="workflow-label">Record Meeting</div>
            </div>
            <div class="workflow-arrow">→</div>
            <div class="workflow-step">
                <div class="workflow-icon">
                    <i class="fas fa-file-alt"></i>
                </div>
                <div class="workflow-label">Transcribe</div>
            </div>
            <div class="workflow-arrow">→</div>
            <div class="workflow-step">
                <div class="workflow-icon">
                    <i class="fas fa-robot"></i>
                </div>
                <div class="workflow-label">Process with LLM</div>
            </div>
            <div class="workflow-arrow">→</div>
            <div class="workflow-step">
                <div class="workflow-icon">
                    <i class="fas fa-file-word"></i>
                </div>
                <div class="workflow-label">Generate Document</div>
            </div>
        `;
        workflowSection.appendChild(workflowDiagram);
        container.appendChild(workflowSection);
        
        // Benefits section
        const benefitsSection = document.createElement('div');
        benefitsSection.className = 'benefits-section';
        
        const benefitsTitle = document.createElement('h3');
        benefitsTitle.textContent = 'Benefits for Risk Change and Risk IT Teams:';
        benefitsSection.appendChild(benefitsTitle);
        
        const benefitCards = document.createElement('div');
        benefitCards.className = 'benefit-cards';
        
        const benefits = [
            { title: 'Time Savings', icon: 'fa-clock', description: 'Reduce documentation time by up to 70%' },
            { title: 'Accuracy', icon: 'fa-check-double', description: 'Capture all details without human error' },
            { title: 'Consistency', icon: 'fa-sync', description: 'Standardized format for all documentation' },
            { title: 'Participation', icon: 'fa-users', description: 'Focus on discussion instead of note-taking' }
        ];
        
        benefits.forEach(benefit => {
            const benefitCard = document.createElement('div');
            benefitCard.className = 'benefit-card';
            benefitCard.innerHTML = `
                <div class="benefit-icon">
                    <i class="fas ${benefit.icon}"></i>
                </div>
                <h4 class="benefit-title">${benefit.title}</h4>
                <p class="benefit-description">${benefit.description}</p>
            `;
            benefitCards.appendChild(benefitCard);
        });
        
        benefitsSection.appendChild(benefitCards);
        container.appendChild(benefitsSection);
        
        // Add CSS for this component
        const style = document.createElement('style');
        style.textContent = `
            .workflow-diagram {
                display: flex;
                align-items: center;
                justify-content: center;
                margin: var(--space-lg) 0;
                flex-wrap: wrap;
            }
            
            .workflow-step {
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: var(--space-md);
                background-color: var(--blue-light);
                border-radius: 8px;
                width: 120px;
                height: 120px;
                justify-content: center;
            }
            
            .workflow-icon {
                font-size: 2rem;
                color: var(--standard-bank-blue);
                margin-bottom: var(--space-sm);
            }
            
            .workflow-label {
                text-align: center;
                font-weight: 500;
            }
            
            .workflow-arrow {
                font-size: 1.5rem;
                margin: 0 var(--space-sm);
                color: var(--neutral-600);
            }
            
            .benefit-cards {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: var(--space-md);
                margin-top: var(--space-lg);
            }
            
            .benefit-card {
                background-color: var(--neutral-100);
                border-radius: 8px;
                padding: var(--space-lg);
                text-align: center;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                border: 1px solid var(--neutral-300);
            }
            
            .benefit-icon {
                font-size: 2rem;
                color: var(--standard-bank-blue);
                margin-bottom: var(--space-sm);
            }
            
            .benefit-title {
                margin-bottom: var(--space-sm);
            }
            
            .benefit-description {
                font-size: 0.875rem;
                color: var(--neutral-700);
            }
            
            .otter-image {
                margin-top: var(--space-md);
                text-align: center;
            }
            
            @media (max-width: 768px) {
                .workflow-diagram {
                    flex-direction: column;
                }
                
                .workflow-arrow {
                    transform: rotate(90deg);
                    margin: var(--space-sm) 0;
                }
                
                .benefit-cards {
                    grid-template-columns: 1fr;
                }
            }
        `;
        container.appendChild(style);
        
        return container;
    }
}
