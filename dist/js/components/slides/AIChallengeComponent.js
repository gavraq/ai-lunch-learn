// AI Challenge Component
class AIChallengeComponent extends BaseComponent {
    // Explicitly expose to global scope
    static {console.log('AIChallengeComponent defined');}
    constructor(slideData) {
        super(slideData);
        this.initialized = false;
    }

    createContent() {
        // Create container for the AI challenge content
        const container = document.createElement('div');
        container.className = 'ai-challenge-container';
        
        // Add intro text
        const intro = document.createElement('div');
        intro.className = 'intro mb-lg';
        const introText = document.createElement('p');
        introText.className = 'large-text';
        introText.textContent = "It's time to put what you've learned into practice. Choose a challenge that matches your comfort level.";
        intro.appendChild(introText);
        container.appendChild(intro);
        
        // Add challenge section
        const challengeSection = document.createElement('div');
        challengeSection.className = 'challenge-section mb-lg';
        
        // Add section title
        const sectionTitle = document.createElement('h3');
        sectionTitle.textContent = 'Choose Your Level';
        challengeSection.appendChild(sectionTitle);
        
        // Create challenge levels container
        const challengeLevels = document.createElement('div');
        challengeLevels.className = 'challenge-levels';
        
        // Add beginner challenge
        const beginnerChallenge = this.createChallengeLevel(
            'beginner',
            '🟢',
            'Beginner Challenge',
            [
                'Use XML-structured prompts for 5 work tasks this week',
                'Share your best before/after in our Teams channel'
            ]
        );
        challengeLevels.appendChild(beginnerChallenge);
        
        // Add intermediate challenge
        const intermediateChallenge = this.createChallengeLevel(
            'intermediate',
            '🟡',
            'Intermediate Challenge',
            [
                'Pick one repetitive task you do weekly',
                'Build a simple prototype using Claude/ChatGPT'
            ]
        );
        challengeLevels.appendChild(intermediateChallenge);
        
        // Add advanced challenge
        const advancedChallenge = this.createChallengeLevel(
            'advanced',
            '🔴',
            'Advanced Challenge',
            [
                'Create a prompt library for your team',
                'Experiment with an MCP server'
            ]
        );
        challengeLevels.appendChild(advancedChallenge);
        
        // Add challenge levels to section
        challengeSection.appendChild(challengeLevels);
        
        // Add challenge section to container
        container.appendChild(challengeSection);
        
        // Add commitment form
        const commitmentForm = this.createCommitmentForm();
        container.appendChild(commitmentForm);
        
        return container;
    }
    
    // Helper method to create a challenge level
    createChallengeLevel(level, indicator, title, items) {
        const challengeLevel = document.createElement('div');
        challengeLevel.className = 'challenge-level';
        challengeLevel.dataset.level = level;
        
        const levelIndicator = document.createElement('div');
        levelIndicator.className = 'level-indicator';
        levelIndicator.textContent = indicator;
        challengeLevel.appendChild(levelIndicator);
        
        const levelTitle = document.createElement('h4');
        levelTitle.textContent = title;
        challengeLevel.appendChild(levelTitle);
        
        const itemsList = document.createElement('ul');
        items.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            itemsList.appendChild(listItem);
        });
        challengeLevel.appendChild(itemsList);
        
        return challengeLevel;
    }
    
    // Helper method to create the commitment form
    createCommitmentForm() {
        const commitmentForm = document.createElement('div');
        commitmentForm.className = 'commitment-form mb-lg';
        
        const formTitle = document.createElement('h3');
        formTitle.textContent = 'Make a commitment:';
        commitmentForm.appendChild(formTitle);
        
        // Create select dropdown
        const selectGroup = document.createElement('div');
        selectGroup.className = 'form-group';
        
        const selectLabel = document.createElement('label');
        selectLabel.setAttribute('for', 'challenge-select');
        selectLabel.textContent = 'Select your challenge:';
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
        commitmentForm.appendChild(selectGroup);
        
        // Add date picker
        const dateGroup = document.createElement('div');
        dateGroup.className = 'form-group';
        
        const dateLabel = document.createElement('label');
        dateLabel.setAttribute('for', 'challenge-date');
        dateLabel.textContent = 'Complete by:';
        dateGroup.appendChild(dateLabel);
        
        const dateInput = document.createElement('input');
        dateInput.type = 'date';
        dateInput.id = 'challenge-date';
        dateInput.className = 'form-control';
        dateGroup.appendChild(dateInput);
        
        commitmentForm.appendChild(dateGroup);
        
        // Add submit button
        const commitBtn = document.createElement('button');
        commitBtn.id = 'commit-btn';
        commitBtn.className = 'btn btn-primary';
        commitBtn.textContent = 'I Commit!';
        commitmentForm.appendChild(commitBtn);
        
        // Add confirmation section (hidden initially)
        const confirmation = document.createElement('div');
        confirmation.id = 'commitment-confirmation';
        confirmation.className = 'commitment-confirmation';
        confirmation.style.display = 'none';
        
        const confirmationTitle = document.createElement('h3');
        const checkIcon = document.createElement('i');
        checkIcon.className = 'fas fa-check-circle';
        confirmationTitle.appendChild(checkIcon);
        confirmationTitle.appendChild(document.createTextNode(' Challenge Accepted!'));
        confirmation.appendChild(confirmationTitle);
        
        const challengeText = document.createElement('p');
        challengeText.textContent = 'You\'ve committed to: ';
        const selectedChallenge = document.createElement('span');
        selectedChallenge.id = 'selected-challenge';
        challengeText.appendChild(selectedChallenge);
        confirmation.appendChild(challengeText);
        
        const dateText = document.createElement('p');
        dateText.textContent = 'Target completion date: ';
        const selectedDate = document.createElement('span');
        selectedDate.id = 'selected-date';
        dateText.appendChild(selectedDate);
        confirmation.appendChild(dateText);
        
        const encouragementText = document.createElement('p');
        encouragementText.textContent = 'Add this to your calendar and share your progress with the team!';
        confirmation.appendChild(encouragementText);
        
        commitmentForm.appendChild(confirmation);
        
        return commitmentForm;
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
                    
                    // Update the select dropdown
                    challengeSelect.value = level.dataset.level;
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
                    
                    // Add keyframes if they don't exist
                    if (!document.querySelector('#challenge-animations')) {
                        const style = document.createElement('style');
                        style.id = 'challenge-animations';
                        style.textContent = `
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
                        `;
                        document.head.appendChild(style);
                    }
                } else {
                    // Shake the select if no option is selected
                    challengeSelect.style.animation = 'shake 0.5s ease-in-out';
                    
                    // Add keyframes if they don't exist
                    if (!document.querySelector('#challenge-animations') || !document.querySelector('#challenge-animations').textContent.includes('shake')) {
                        const style = document.createElement('style');
                        style.id = 'challenge-animations';
                        style.textContent = `
                            @keyframes shake {
                                0%, 100% { transform: translateX(0); }
                                10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
                                20%, 40%, 60%, 80% { transform: translateX(5px); }
                            }
                        `;
                        document.head.appendChild(style);
                    }
                    
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
        
        // Remove animation styles
        const animationsStyle = document.getElementById('challenge-animations');
        if (animationsStyle) {
            animationsStyle.remove();
        }
        
        this.initialized = false;
    }
}
