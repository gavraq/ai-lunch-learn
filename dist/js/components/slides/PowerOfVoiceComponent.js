// Power of Voice Component
class PowerOfVoiceComponent extends BaseComponent {
    createContent() {
        const container = document.createElement('div');
        container.className = 'voice-container';
        
        // Introduction section with highlight box
        const intro = document.createElement('div');
        intro.className = 'voice-intro';
        
        const introText = document.createElement('p');
        introText.className = 'voice-intro-text';
        introText.innerHTML = "Remember our Superwhisper example earlier? Let's explore how voice-to-text can transform your workflow.";
        intro.appendChild(introText);
        container.appendChild(intro);
        
        // Main content section
        const mainContent = document.createElement('div');
        mainContent.className = 'voice-main-content';
        
        const mainQuestion = document.createElement('h3');
        mainQuestion.className = 'voice-main-question';
        mainQuestion.textContent = 'Why capture detailed notes in a meeting when AI can do it for you?';
        mainContent.appendChild(mainQuestion);
        
        const mainExplanation = document.createElement('p');
        mainExplanation.className = 'voice-main-explanation';
        mainExplanation.innerHTML = 'This is an obvious use case we are already using, but taking these notes to the next level we can use LLMs to directly create BRDs from meeting notes - we should be doing this today!';
        mainContent.appendChild(mainExplanation);
        container.appendChild(mainContent);
        
        // Voice options section with two cards side by side
        const voiceOptionsSection = document.createElement('div');
        voiceOptionsSection.className = 'voice-options-section';
        
        // Teams card
        const teamsCard = document.createElement('div');
        teamsCard.className = 'voice-card';
        
        const teamsHeader = document.createElement('div');
        teamsHeader.className = 'voice-card-header';
        
        const teamsIcon = document.createElement('div');
        teamsIcon.className = 'voice-card-icon';
        teamsIcon.style.backgroundColor = '#0078d4';
        teamsIcon.innerHTML = '<i class="fab fa-microsoft"></i>';
        teamsHeader.appendChild(teamsIcon);
        
        const teamsTitle = document.createElement('h3');
        teamsTitle.className = 'voice-card-title';
        teamsTitle.textContent = 'Microsoft Teams';
        teamsHeader.appendChild(teamsTitle);
        
        teamsCard.appendChild(teamsHeader);
        
        const teamsDescription = document.createElement('p');
        teamsDescription.className = 'voice-card-description';
        teamsDescription.textContent = 'Built-in features for capturing and processing meeting content:';
        teamsCard.appendChild(teamsDescription);
        
        const teamsList = document.createElement('ul');
        teamsList.className = 'voice-feature-list';
        
        const teamsFeatures = [
            'Built-in meeting transcription',
            'Automatic speaker identification',
            'Searchable transcripts',
            'Integration with other Microsoft tools',
            'Easy to share with meeting participants'
        ];
        
        teamsFeatures.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            teamsList.appendChild(li);
        });
        
        teamsCard.appendChild(teamsList);
        voiceOptionsSection.appendChild(teamsCard);
        
        // Otter.ai card
        const otterCard = document.createElement('div');
        otterCard.className = 'voice-card';
        
        const otterHeader = document.createElement('div');
        otterHeader.className = 'voice-card-header';
        
        const otterIcon = document.createElement('div');
        otterIcon.className = 'voice-card-icon';
        otterIcon.style.backgroundColor = '#5c6bc0';
        otterIcon.innerHTML = '<i class="fas fa-mobile-alt"></i>';
        otterHeader.appendChild(otterIcon);
        
        const otterTitle = document.createElement('h3');
        otterTitle.className = 'voice-card-title';
        otterTitle.textContent = 'Otter.ai';
        otterHeader.appendChild(otterTitle);
        
        otterCard.appendChild(otterHeader);
        
        const otterDescription = document.createElement('p');
        otterDescription.className = 'voice-card-description';
        otterDescription.textContent = 'For meetings not on Teams, Otter.ai provides powerful transcription capabilities:';
        otterCard.appendChild(otterDescription);
        
        // Add the actual Otter.ai screenshot
        const otterImage = document.createElement('div');
        otterImage.className = 'voice-otter-image';
        otterImage.innerHTML = `
            <img src="assets/images/Otter.PNG" alt="Otter.ai Screenshot">
        `;
        otterCard.appendChild(otterImage);
        
        const otterFeatures = document.createElement('ul');
        otterFeatures.className = 'voice-feature-list';
        
        const otterItems = [
            'Free tier available (limited to 40 minutes)',
            'Mobile app for on-the-go recording',
            'Automatic speaker identification',
            'Searchable and shareable transcripts',
            'Export to various formats'
        ];
        
        otterItems.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            otterFeatures.appendChild(li);
        });
        
        otterCard.appendChild(otterFeatures);
        voiceOptionsSection.appendChild(otterCard);
        
        container.appendChild(voiceOptionsSection);
        
        // Workflow diagram section with modern styling
        const workflowSection = document.createElement('div');
        workflowSection.className = 'voice-workflow-section';
        
        const workflowTitle = document.createElement('h3');
        workflowTitle.className = 'voice-section-title';
        workflowTitle.textContent = 'Voice-to-Document Workflow:';
        workflowSection.appendChild(workflowTitle);
        
        const workflowDiagram = document.createElement('div');
        workflowDiagram.className = 'voice-workflow-diagram';
        
        // Create workflow steps with modern styling
        const workflowSteps = [
            { icon: 'fa-microphone', label: 'Record Meeting', color: '#3182ce' },
            { icon: 'fa-file-alt', label: 'Transcribe', color: '#38a169' },
            { icon: 'fa-robot', label: 'Process with LLM', color: '#805ad5' },
            { icon: 'fa-file-word', label: 'Generate Document', color: '#dd6b20' }
        ];
        
        // Create a more structured workflow diagram with better spacing
        const workflowContainer = document.createElement('div');
        workflowContainer.style.cssText = 'display: flex; justify-content: center; align-items: center; margin: 2rem auto; max-width: 800px;';
        
        workflowSteps.forEach((step, index) => {
            // Create step container
            const stepContainer = document.createElement('div');
            stepContainer.className = 'voice-step-container';
            
            // Create icon circle
            const iconCircle = document.createElement('div');
            iconCircle.className = 'voice-step-icon';
            iconCircle.style.backgroundColor = step.color;
            iconCircle.innerHTML = `<i class="fas ${step.icon}"></i>`;
            stepContainer.appendChild(iconCircle);
            
            // Create step number
            const stepNumber = document.createElement('div');
            stepNumber.className = 'voice-step-number';
            stepNumber.textContent = (index + 1).toString();
            iconCircle.appendChild(stepNumber);
            
            // Create step label
            const stepLabel = document.createElement('div');
            stepLabel.className = 'voice-step-label';
            stepLabel.textContent = step.label;
            stepContainer.appendChild(stepLabel);
            
            workflowContainer.appendChild(stepContainer);
            
            // Add arrow if not the last step
            if (index < workflowSteps.length - 1) {
                const arrow = document.createElement('div');
                arrow.className = 'voice-step-arrow';
                arrow.innerHTML = '<i class="fas fa-long-arrow-alt-right"></i>';
                workflowContainer.appendChild(arrow);
            }
        });
        
        workflowDiagram.appendChild(workflowContainer);
        
        workflowSection.appendChild(workflowDiagram);
        container.appendChild(workflowSection);
        
        // Benefits section with modern card design
        const benefitsSection = document.createElement('div');
        benefitsSection.className = 'voice-benefits-section';
        
        const benefitsTitle = document.createElement('h3');
        benefitsTitle.className = 'voice-section-title';
        benefitsTitle.textContent = 'Benefits for Risk Change and Risk IT Teams:';
        benefitsSection.appendChild(benefitsTitle);
        
        const benefitCards = document.createElement('div');
        benefitCards.className = 'voice-benefit-cards';
        
        const benefits = [
            { title: 'Time Savings', icon: 'fa-clock', description: 'Reduce documentation time by up to 70%', color: '#3182ce' },
            { title: 'Accuracy', icon: 'fa-check-double', description: 'Capture all details without human error', color: '#38a169' },
            { title: 'Consistency', icon: 'fa-sync', description: 'Standardized format for all documentation', color: '#805ad5' },
            { title: 'Participation', icon: 'fa-users', description: 'Focus on discussion instead of note-taking', color: '#dd6b20' }
        ];
        
        benefits.forEach(benefit => {
            const benefitCard = document.createElement('div');
            benefitCard.className = 'voice-benefit-card';
            
            const iconContainer = document.createElement('div');
            iconContainer.className = 'voice-benefit-icon';
            iconContainer.style.backgroundColor = benefit.color;
            iconContainer.innerHTML = `<i class="fas ${benefit.icon}"></i>`;
            benefitCard.appendChild(iconContainer);
            
            const benefitTitle = document.createElement('h4');
            benefitTitle.className = 'voice-benefit-title';
            benefitTitle.textContent = benefit.title;
            benefitCard.appendChild(benefitTitle);
            
            const benefitDescription = document.createElement('p');
            benefitDescription.className = 'voice-benefit-description';
            benefitDescription.textContent = benefit.description;
            benefitCard.appendChild(benefitDescription);
            
            benefitCards.appendChild(benefitCard);
        });
        
        benefitsSection.appendChild(benefitCards);
        container.appendChild(benefitsSection);
        
        // Add CSS for this component
        const style = document.createElement('style');
        style.textContent = `
            .voice-container {
                max-width: 1200px;
                margin: 0 auto;
                padding: 0 1rem;
                font-family: "Inter", sans-serif;
            }
            
            .voice-intro {
                background-color: #e6edf7;
                border-radius: 0.5rem;
                padding: 1.5rem;
                margin-bottom: 2rem;
                border-left: 4px solid #0c4da2;
            }
            
            .voice-intro-text {
                font-size: 1.25rem;
                font-weight: 500;
                color: #323F4B;
                margin: 0;
            }
            
            .voice-main-content {
                margin-bottom: 2rem;
            }
            
            .voice-main-question {
                font-size: 1.5rem;
                font-weight: 700;
                color: #0c4da2;
                margin-top: 0;
                margin-bottom: 1rem;
            }
            
            .voice-main-explanation {
                font-size: 1.125rem;
                color: #4A5568;
                margin-bottom: 1.5rem;
                line-height: 1.6;
            }
            
            .voice-options-section {
                display: flex;
                gap: 1.5rem;
                margin-bottom: 2.5rem;
                flex-wrap: wrap;
            }
            
            .voice-card {
                flex: 1;
                min-width: 300px;
                background-color: #ffffff;
                border-radius: 0.5rem;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                padding: 1.5rem;
                border: 1px solid #E4E7EB;
            }
            
            .voice-card-header {
                display: flex;
                align-items: center;
                margin-bottom: 1rem;
            }
            
            .voice-card-icon {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: 1rem;
            }
            
            .voice-card-icon i {
                color: white;
                font-size: 1.25rem;
            }
            
            .voice-card-title {
                font-size: 1.25rem;
                font-weight: 600;
                color: #323F4B;
                margin: 0;
            }
            
            .voice-card-description {
                color: #4A5568;
                margin-bottom: 1rem;
            }
            
            .voice-feature-list {
                margin: 0;
                padding-left: 1.5rem;
            }
            
            .voice-feature-list li {
                margin-bottom: 0.5rem;
                color: #4A5568;
            }
            
            .voice-otter-image {
                margin-bottom: 1rem;
                text-align: center;
            }
            
            .voice-otter-image img {
                max-width: 100%;
                border-radius: 0.375rem;
                border: 1px solid #E4E7EB;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
            }
            
            .voice-workflow-section {
                margin-bottom: 2.5rem;
                background-color: #ffffff;
                border-radius: 0.5rem;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                padding: 1.5rem;
                border: 1px solid #E4E7EB;
            }
            
            .voice-section-title {
                font-size: 1.25rem;
                font-weight: 600;
                color: #0c4da2;
                margin-top: 0;
                margin-bottom: 1.5rem;
                border-bottom: 1px solid #E4E7EB;
                padding-bottom: 0.75rem;
            }
            
            .voice-workflow-diagram {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-wrap: wrap;
                gap: 1.5rem;
                margin: 2rem 0;
            }
            
            .voice-step-container {
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 120px;
                margin: 0 0.5rem;
            }
            
            .voice-step-with-arrow {
                display: flex;
                align-items: center;
                margin: 0;
            }
            
            .voice-step-icon {
                width: 60px;
                height: 60px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 0.75rem;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                position: relative;
            }
            
            .voice-step-icon i {
                color: white;
                font-size: 1.5rem;
            }
            
            .voice-step-number {
                position: absolute;
                top: -8px;
                right: -8px;
                width: 24px;
                height: 24px;
                background-color: #0c4da2;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-size: 0.875rem;
                font-weight: 600;
            }
            
            .voice-step-label {
                text-align: center;
                font-weight: 500;
                color: #4A5568;
            }
            
            .voice-step-arrow {
                font-size: 1.75rem;
                color: #718096;
                margin: 0 1rem;
                display: flex;
                align-items: center;
            }
            
            .voice-benefits-section {
                margin-bottom: 2rem;
            }
            
            .voice-benefit-cards {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
                gap: 1rem;
            }
            
            .voice-benefit-card {
                background-color: #ffffff;
                border-radius: 0.5rem;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                padding: 1.25rem;
                border: 1px solid #E4E7EB;
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
            }
            
            .voice-benefit-icon {
                width: 50px;
                height: 50px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 1rem;
            }
            
            .voice-benefit-icon i {
                color: white;
                font-size: 1.25rem;
            }
            
            .voice-benefit-title {
                font-size: 1.125rem;
                font-weight: 600;
                color: #323F4B;
                margin-top: 0;
                margin-bottom: 0.5rem;
            }
            
            .voice-benefit-description {
                font-size: 0.875rem;
                color: #4A5568;
                margin: 0;
            }
            
            @media (max-width: 768px) {
                .voice-workflow-diagram {
                    flex-direction: column;
                }
                
                .voice-step-arrow {
                    transform: rotate(90deg);
                    margin: 0.5rem 0;
                }
                
                .voice-benefit-cards {
                    grid-template-columns: 1fr;
                }
            }
        `;
        container.appendChild(style);
        
        return container;
    }
}
