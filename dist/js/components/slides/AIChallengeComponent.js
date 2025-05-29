// AI Challenge Component
class AIChallengeComponent extends BaseComponent {
    constructor(slideData) {
        super(slideData);
        this.initialized = false;
    }
    
    createContent() {
        const container = document.createElement('div');
        container.className = 'ai-challenge-container';
        
        // Title section with visual impact
        const titleSection = document.createElement('div');
        titleSection.className = 'title-section';
        
        const title = document.createElement('h2');
        title.className = 'slide-title';
        title.textContent = 'Your AI Challenge';
        titleSection.appendChild(title);
        
        container.appendChild(titleSection);
        
        // Introduction with visual emphasis
        const introSection = document.createElement('div');
        introSection.className = 'intro-section';
        
        const introCard = document.createElement('div');
        introCard.className = 'intro-card';
        
        const introIcon = document.createElement('div');
        introIcon.className = 'intro-icon';
        introIcon.innerHTML = '<i class="fas fa-trophy"></i>';
        introCard.appendChild(introIcon);
        
        const introContent = document.createElement('div');
        introContent.className = 'intro-content';
        
        const introParagraph = document.createElement('p');
        introParagraph.className = 'intro-text';
        introParagraph.innerHTML = 'It\'s time to put what you\'ve learned into practice. Choose a challenge that matches your comfort level and make a commitment to apply AI in your daily work.';
        introContent.appendChild(introParagraph);
        
        introCard.appendChild(introContent);
        introSection.appendChild(introCard);
        container.appendChild(introSection);
        
        // Challenge Levels with visual cards
        const challengeSection = document.createElement('div');
        challengeSection.className = 'challenge-section';
        
        const challengeTitle = document.createElement('h3');
        challengeTitle.className = 'section-title';
        challengeTitle.textContent = 'Choose Your Level';
        challengeSection.appendChild(challengeTitle);
        
        const challengeLevels = document.createElement('div');
        challengeLevels.className = 'challenge-levels';
        
        // Beginner Challenge
        const beginnerChallenge = document.createElement('div');
        beginnerChallenge.className = 'challenge-level';
        beginnerChallenge.dataset.level = 'beginner';
        
        const beginnerHeader = document.createElement('div');
        beginnerHeader.className = 'level-header beginner';
        
        const beginnerIndicator = document.createElement('div');
        beginnerIndicator.className = 'level-indicator';
        beginnerIndicator.textContent = '🟢';
        beginnerHeader.appendChild(beginnerIndicator);
        
        const beginnerTitle = document.createElement('h4');
        beginnerTitle.className = 'level-title';
        beginnerTitle.textContent = 'Beginner Challenge';
        beginnerHeader.appendChild(beginnerTitle);
        
        beginnerChallenge.appendChild(beginnerHeader);
        
        const beginnerContent = document.createElement('div');
        beginnerContent.className = 'level-content';
        
        const beginnerList = document.createElement('ul');
        beginnerList.className = 'level-list';
        
        const beginnerItems = [
            'Use XML-structured prompts for 5 work tasks this week',
            'Share your best before/after in our Teams channel',
            'Try voice transcription for one meeting',
            'Use an AI assistant to summarize a document'
        ];
        
        beginnerItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<i class="fas fa-check"></i> ${item}`;
            beginnerList.appendChild(listItem);
        });
        
        beginnerContent.appendChild(beginnerList);
        beginnerChallenge.appendChild(beginnerContent);
        challengeLevels.appendChild(beginnerChallenge);
        
        // Intermediate Challenge
        const intermediateChallenge = document.createElement('div');
        intermediateChallenge.className = 'challenge-level';
        intermediateChallenge.dataset.level = 'intermediate';
        
        const intermediateHeader = document.createElement('div');
        intermediateHeader.className = 'level-header intermediate';
        
        const intermediateIndicator = document.createElement('div');
        intermediateIndicator.className = 'level-indicator';
        intermediateIndicator.textContent = '🟡';
        intermediateHeader.appendChild(intermediateIndicator);
        
        const intermediateTitle = document.createElement('h4');
        intermediateTitle.className = 'level-title';
        intermediateTitle.textContent = 'Intermediate Challenge';
        intermediateHeader.appendChild(intermediateTitle);
        
        intermediateChallenge.appendChild(intermediateHeader);
        
        const intermediateContent = document.createElement('div');
        intermediateContent.className = 'level-content';
        
        const intermediateList = document.createElement('ul');
        intermediateList.className = 'level-list';
        
        const intermediateItems = [
            'Pick one repetitive task you do weekly',
            'Build a simple prototype using Claude/ChatGPT',
            'Create a RAG system for a small document set',
            'Develop a prompt library for your team'
        ];
        
        intermediateItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<i class="fas fa-check"></i> ${item}`;
            intermediateList.appendChild(listItem);
        });
        
        intermediateContent.appendChild(intermediateList);
        intermediateChallenge.appendChild(intermediateContent);
        challengeLevels.appendChild(intermediateChallenge);
        
        // Advanced Challenge
        const advancedChallenge = document.createElement('div');
        advancedChallenge.className = 'challenge-level';
        advancedChallenge.dataset.level = 'advanced';
        
        const advancedHeader = document.createElement('div');
        advancedHeader.className = 'level-header advanced';
        
        const advancedIndicator = document.createElement('div');
        advancedIndicator.className = 'level-indicator';
        advancedIndicator.textContent = '🔴';
        advancedHeader.appendChild(advancedIndicator);
        
        const advancedTitle = document.createElement('h4');
        advancedTitle.className = 'level-title';
        advancedTitle.textContent = 'Advanced Challenge';
        advancedHeader.appendChild(advancedTitle);
        
        advancedChallenge.appendChild(advancedHeader);
        
        const advancedContent = document.createElement('div');
        advancedContent.className = 'level-content';
        
        const advancedList = document.createElement('ul');
        advancedList.className = 'level-list';
        
        const advancedItems = [
            'Create a prompt library for your team',
            'Experiment with an MCP server',
            'Build a multi-agent system for a business process',
            'Develop an AI-powered dashboard for your team'
        ];
        
        advancedItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<i class="fas fa-check"></i> ${item}`;
            advancedList.appendChild(listItem);
        });
        
        advancedContent.appendChild(advancedList);
        advancedChallenge.appendChild(advancedContent);
        challengeLevels.appendChild(advancedChallenge);
        
        challengeSection.appendChild(challengeLevels);
        container.appendChild(challengeSection);
        
        // Commitment Form with visual design
        const commitmentSection = document.createElement('div');
        commitmentSection.className = 'commitment-section';
        
        const commitmentTitle = document.createElement('h3');
        commitmentTitle.className = 'section-title';
        commitmentTitle.textContent = 'Make a Commitment';
        commitmentSection.appendChild(commitmentTitle);
        
        const commitmentCard = document.createElement('div');
        commitmentCard.className = 'commitment-card';
        
        // Select Challenge
        const selectGroup = document.createElement('div');
        selectGroup.className = 'form-group';
        
        const selectLabel = document.createElement('label');
        selectLabel.setAttribute('for', 'challenge-select');
        selectLabel.className = 'form-label';
        selectLabel.innerHTML = '<i class="fas fa-tasks"></i> Select your challenge:';
        selectGroup.appendChild(selectLabel);
        
        const select = document.createElement('select');
        select.id = 'challenge-select';
        select.className = 'form-control';
        
        // Add default option
        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.textContent = '-- Select a challenge --';
        select.appendChild(defaultOption);
        
        // Add challenge options
        const challenges = [
            { value: 'structured-prompting', text: 'Use structured prompting for one work task' },
            { value: 'voice-transcription', text: 'Try voice transcription for meeting notes' },
            { value: 'personal-assistant', text: 'Set up a personal AI assistant' },
            { value: 'rag-system', text: 'Create a RAG system for a team document repository' },
            { value: 'workflow-automation', text: 'Build a simple workflow automation with AI' },
            { value: 'ai-dashboard', text: 'Implement an AI-powered dashboard' },
            { value: 'multi-agent', text: 'Develop a multi-agent system for a business process' },
            { value: 'fine-tuned-model', text: 'Create a custom fine-tuned model for your domain' },
            { value: 'ai-application', text: 'Build an AI-powered application for your team' }
        ];
        
        challenges.forEach(challenge => {
            const option = document.createElement('option');
            option.value = challenge.value;
            option.textContent = challenge.text;
            select.appendChild(option);
        });
        
        selectGroup.appendChild(select);
        commitmentCard.appendChild(selectGroup);
        
        // Select Date
        const dateGroup = document.createElement('div');
        dateGroup.className = 'form-group';
        
        const dateLabel = document.createElement('label');
        dateLabel.setAttribute('for', 'challenge-date');
        dateLabel.className = 'form-label';
        dateLabel.innerHTML = '<i class="fas fa-calendar-alt"></i> Complete by:';
        dateGroup.appendChild(dateLabel);
        
        const dateInput = document.createElement('input');
        dateInput.type = 'date';
        dateInput.id = 'challenge-date';
        dateInput.className = 'form-control';
        dateGroup.appendChild(dateInput);
        
        commitmentCard.appendChild(dateGroup);
        
        // Commit Button
        const buttonGroup = document.createElement('div');
        buttonGroup.className = 'form-group button-group';
        
        const commitBtn = document.createElement('button');
        commitBtn.id = 'commit-btn';
        commitBtn.className = 'commit-btn';
        commitBtn.innerHTML = '<i class="fas fa-check-circle"></i> I Commit!';
        buttonGroup.appendChild(commitBtn);
        
        commitmentCard.appendChild(buttonGroup);
        
        // Confirmation Section (hidden initially)
        const confirmation = document.createElement('div');
        confirmation.id = 'commitment-confirmation';
        confirmation.className = 'commitment-confirmation';
        confirmation.style.display = 'none';
        
        const confirmationHeader = document.createElement('div');
        confirmationHeader.className = 'confirmation-header';
        
        const checkIcon = document.createElement('i');
        checkIcon.className = 'fas fa-check-circle';
        confirmationHeader.appendChild(checkIcon);
        
        const confirmationTitle = document.createElement('h3');
        confirmationTitle.textContent = 'Challenge Accepted!';
        confirmationHeader.appendChild(confirmationTitle);
        
        confirmation.appendChild(confirmationHeader);
        
        const confirmationContent = document.createElement('div');
        confirmationContent.className = 'confirmation-content';
        
        const challengeText = document.createElement('p');
        challengeText.innerHTML = '<strong>You\'ve committed to:</strong> ';
        const selectedChallenge = document.createElement('span');
        selectedChallenge.id = 'selected-challenge';
        challengeText.appendChild(selectedChallenge);
        confirmationContent.appendChild(challengeText);
        
        const dateText = document.createElement('p');
        dateText.innerHTML = '<strong>Target completion date:</strong> ';
        const selectedDate = document.createElement('span');
        selectedDate.id = 'selected-date';
        dateText.appendChild(selectedDate);
        confirmationContent.appendChild(dateText);
        
        const encouragementText = document.createElement('p');
        encouragementText.className = 'encouragement';
        encouragementText.innerHTML = '<i class="fas fa-calendar-plus"></i> Add this to your calendar and share your progress with the team!';
        confirmationContent.appendChild(encouragementText);
        
        confirmation.appendChild(confirmationContent);
        commitmentCard.appendChild(confirmation);
        
        commitmentSection.appendChild(commitmentCard);
        container.appendChild(commitmentSection);
        
        // Add CSS for this component
        const style = document.createElement('style');
        style.textContent = `
            .ai-challenge-container {
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
            
            .challenge-section {
                margin-bottom: 2.5rem;
            }
            
            .challenge-levels {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: 1.5rem;
            }
            
            .challenge-level {
                background-color: white;
                border-radius: 0.5rem;
                overflow: hidden;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                border: 1px solid #E4E7EB;
                transition: transform 0.2s ease-out, box-shadow 0.2s ease-out;
                cursor: pointer;
            }
            
            .challenge-level:hover {
                transform: translateY(-5px);
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            
            .challenge-level.selected {
                border: 2px solid #0c4da2;
                box-shadow: 0 4px 6px rgba(12, 77, 162, 0.2);
            }
            
            .level-header {
                padding: 1rem;
                display: flex;
                align-items: center;
                border-bottom: 1px solid #E4E7EB;
            }
            
            .level-header.beginner {
                background-color: rgba(72, 187, 120, 0.1);
            }
            
            .level-header.intermediate {
                background-color: rgba(237, 137, 54, 0.1);
            }
            
            .level-header.advanced {
                background-color: rgba(227, 25, 55, 0.1);
            }
            
            .level-indicator {
                font-size: 1.5rem;
                margin-right: 0.75rem;
            }
            
            .level-title {
                font-size: 1.125rem;
                font-weight: 600;
                color: #323F4B;
                margin: 0;
            }
            
            .level-content {
                padding: 1rem;
            }
            
            .level-list {
                list-style: none;
                padding: 0;
                margin: 0;
            }
            
            .level-list li {
                margin-bottom: 0.75rem;
                font-size: 0.875rem;
                color: #4A5568;
                display: flex;
                align-items: flex-start;
            }
            
            .level-list li:last-child {
                margin-bottom: 0;
            }
            
            .level-list li i {
                color: #0c4da2;
                margin-right: 0.75rem;
                margin-top: 0.25rem;
                flex-shrink: 0;
            }
            
            .commitment-section {
                margin-bottom: 1.5rem;
            }
            
            .commitment-card {
                background-color: white;
                border-radius: 0.5rem;
                padding: 1.5rem;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                border: 1px solid #E4E7EB;
            }
            
            .form-group {
                margin-bottom: 1.5rem;
            }
            
            .form-group:last-child {
                margin-bottom: 0;
            }
            
            .form-label {
                display: block;
                margin-bottom: 0.5rem;
                font-weight: 600;
                color: #323F4B;
                font-size: 0.875rem;
            }
            
            .form-label i {
                margin-right: 0.5rem;
                color: #0c4da2;
            }
            
            .form-control {
                width: 100%;
                padding: 0.75rem;
                border: 1px solid #E4E7EB;
                border-radius: 0.25rem;
                font-size: 0.875rem;
                color: #4A5568;
                transition: border-color 0.2s ease-out;
            }
            
            .form-control:focus {
                outline: none;
                border-color: #0c4da2;
                box-shadow: 0 0 0 3px rgba(12, 77, 162, 0.1);
            }
            
            .button-group {
                text-align: center;
            }
            
            .commit-btn {
                background-color: #0c4da2;
                color: white;
                border: none;
                border-radius: 0.25rem;
                padding: 0.75rem 1.5rem;
                font-weight: 600;
                font-size: 1rem;
                cursor: pointer;
                transition: background-color 0.2s ease-out;
            }
            
            .commit-btn:hover {
                background-color: #0a3d82;
            }
            
            .commit-btn i {
                margin-right: 0.5rem;
            }
            
            .commitment-confirmation {
                margin-top: 1.5rem;
                padding: 1.5rem;
                background-color: #EBF8FF;
                border-radius: 0.5rem;
                border-left: 4px solid #4299E1;
            }
            
            .confirmation-header {
                display: flex;
                align-items: center;
                margin-bottom: 1rem;
            }
            
            .confirmation-header i {
                font-size: 1.5rem;
                color: #4299E1;
                margin-right: 0.75rem;
            }
            
            .confirmation-header h3 {
                font-size: 1.25rem;
                font-weight: 700;
                color: #2C5282;
                margin: 0;
            }
            
            .confirmation-content p {
                margin: 0 0 0.75rem 0;
                font-size: 0.875rem;
                color: #2A4365;
            }
            
            .confirmation-content p:last-child {
                margin-bottom: 0;
            }
            
            .encouragement {
                margin-top: 1rem;
                padding-top: 1rem;
                border-top: 1px solid rgba(66, 153, 225, 0.3);
                font-style: italic;
            }
            
            .encouragement i {
                margin-right: 0.5rem;
            }
            
            @media (max-width: 768px) {
                .challenge-levels {
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
            
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
                20%, 40%, 60%, 80% { transform: translateX(5px); }
            }
        `;
        container.appendChild(style);
        
        return container;
    }
    
    initialize() {
        if (this.initialized) return;
        
        // Add interactivity to challenge levels
        const challengeLevels = document.querySelectorAll('.challenge-level');
        const challengeSelect = document.getElementById('challenge-select');
        
        if (challengeLevels.length > 0 && challengeSelect) {
            challengeLevels.forEach(level => {
                level.addEventListener('click', () => {
                    // Remove selected class from all levels
                    challengeLevels.forEach(l => l.classList.remove('selected'));
                    
                    // Add selected class to clicked level
                    level.classList.add('selected');
                    
                    // Update the select dropdown based on the level
                    const levelValue = level.dataset.level;
                    
                    // Map level to appropriate challenge option
                    let optionIndex = 0;
                    if (levelValue === 'beginner') {
                        optionIndex = 1; // First real option (after default)
                    } else if (levelValue === 'intermediate') {
                        optionIndex = 4; // Middle difficulty option
                    } else if (levelValue === 'advanced') {
                        optionIndex = 7; // Higher difficulty option
                    }
                    
                    if (challengeSelect.options[optionIndex]) {
                        challengeSelect.selectedIndex = optionIndex;
                    }
                });
            });
        }
        
        // Handle commitment form submission
        const commitBtn = document.getElementById('commit-btn');
        const challengeDate = document.getElementById('challenge-date');
        const commitmentConfirmation = document.getElementById('commitment-confirmation');
        const selectedChallenge = document.getElementById('selected-challenge');
        const selectedDate = document.getElementById('selected-date');
        
        if (commitBtn && challengeDate && commitmentConfirmation && selectedChallenge && selectedDate) {
            // Set default date to 2 weeks from now
            const twoWeeksFromNow = new Date();
            twoWeeksFromNow.setDate(twoWeeksFromNow.getDate() + 14);
            challengeDate.valueAsDate = twoWeeksFromNow;
            
            commitBtn.addEventListener('click', () => {
                if (challengeSelect.value) {
                    // Update confirmation text
                    const challengeText = challengeSelect.options[challengeSelect.selectedIndex].text;
                    selectedChallenge.textContent = challengeText;
                    
                    // Format date nicely
                    const date = new Date(challengeDate.value);
                    const formattedDate = date.toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                    });
                    selectedDate.textContent = formattedDate;
                    
                    // Show confirmation
                    commitmentConfirmation.style.display = 'block';
                    
                    // Add animation
                    commitmentConfirmation.style.animation = 'fadeInUp 0.5s ease-out';
                } else {
                    // Shake the select if no option is selected
                    challengeSelect.style.animation = 'shake 0.5s ease-in-out';
                    
                    // Remove animation after it completes
                    setTimeout(() => {
                        challengeSelect.style.animation = '';
                    }, 500);
                }
            });
            
            // Clear animation when selecting a new option
            challengeSelect.addEventListener('change', () => {
                challengeSelect.style.animation = '';
            });
        }
        
        this.initialized = true;
    }
    
    cleanup() {
        // Clean up event listeners
        const challengeLevels = document.querySelectorAll('.challenge-level');
        challengeLevels.forEach(level => {
            level.replaceWith(level.cloneNode(true));
        });
        
        const commitBtn = document.getElementById('commit-btn');
        if (commitBtn) {
            commitBtn.replaceWith(commitBtn.cloneNode(true));
        }
        
        const challengeSelect = document.getElementById('challenge-select');
        if (challengeSelect) {
            challengeSelect.replaceWith(challengeSelect.cloneNode(true));
        }
        
        this.initialized = false;
    }
}
