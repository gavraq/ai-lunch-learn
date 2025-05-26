// AI Poll Component
class AIPollComponent extends BaseComponent {
    constructor(slideData) {
        super(slideData);
        this.polls = [
            {
                question: "Who's used an AI model this week?",
                options: ["Yes", "No"],
                results: [0, 0]
            },
            {
                question: "What models are you using?",
                options: ["ChatGPT", "Claude", "Grok", "Gemini", "Perplexity", "Other", "None"],
                results: [0, 0, 0, 0, 0, 0, 0]
            },
            {
                question: "Who's used AI for work-related tasks?",
                options: ["Regularly", "Sometimes", "Rarely", "Never"],
                results: [0, 0, 0, 0]
            },
            {
                question: "Are we using AI to its full potential?",
                options: ["Yes", "No", "Not sure"],
                results: [0, 0, 0]
            }
        ];
        this.currentPollIndex = 0;
    }
    
    createContent() {
        const container = document.createElement('div');
        container.className = 'poll-section';
        
        // Introduction text
        const intro = document.createElement('p');
        intro.className = 'mb-lg';
        intro.textContent = "Let's take a quick poll to understand where we are with AI adoption:";
        container.appendChild(intro);
        
        // Create poll container
        const pollContainer = document.createElement('div');
        pollContainer.className = 'poll-container';
        pollContainer.id = 'poll-container';
        container.appendChild(pollContainer);
        
        // Create poll navigation
        const pollNav = document.createElement('div');
        pollNav.className = 'poll-nav flex justify-between mt-lg';
        
        // Create poll navigation buttons with inline JavaScript
        pollNav.innerHTML = `
            <button id="prev-poll-btn" class="btn btn-secondary" onclick="document.pollComponent.navigatePoll(-1)" disabled>Previous Poll</button>
            <button id="next-poll-btn" class="btn btn-primary" onclick="document.pollComponent.navigatePoll(1)">Next Poll</button>
        `;
        container.appendChild(pollNav);
        
        // We'll add the model logos dynamically in the showPoll method when showing poll index 1
        
        // Conclusion text
        const conclusion = document.createElement('p');
        conclusion.className = 'mt-xl';
        conclusion.innerHTML = "To really leverage the potential we need to be keeping pace with developments in this field. I understand that our current in-house model (Co-pilot) is not the best, but we should be keeping abreast and experimenting outside of work too so that we are not left behind.";
        container.appendChild(conclusion);
        
        // Store the component in the document for global access
        document.pollComponent = this;
        
        // Initialize the first poll after rendering
        setTimeout(() => this.showPoll(0), 100);
        
        return container;
    }
    
    // Navigate to previous or next poll
    navigatePoll(direction) {
        const newIndex = this.currentPollIndex + direction;
        if (newIndex >= 0 && newIndex < this.polls.length) {
            this.showPoll(newIndex);
        }
    }
    
    showPoll(index) {
        // Validate index
        if (index < 0 || index >= this.polls.length) {
            return;
        }
        
        // Update current index
        this.currentPollIndex = index;
        
        // Get container
        const pollContainer = document.getElementById('poll-container');
        if (!pollContainer) {
            return;
        }
        
        // Clear container
        pollContainer.innerHTML = '';
        
        // Get current poll data
        const poll = this.polls[index];
        
        // Create poll counter
        const pollCounter = document.createElement('div');
        pollCounter.className = 'poll-counter text-center mb-sm';
        pollCounter.style.fontSize = '14px';
        pollCounter.style.color = '#666';
        pollCounter.textContent = `Poll ${index + 1} of ${this.polls.length}`;
        pollContainer.appendChild(pollCounter);
        
        // Create question
        const question = document.createElement('div');
        question.className = 'poll-question';
        question.textContent = poll.question;
        pollContainer.appendChild(question);
        
        // We'll add the model icons directly to the options for poll index 1
        
        // Add some custom styles for the poll options with icons
        if (index === 1) {
            const styleElement = document.createElement('style');
            styleElement.textContent = `
                .poll-option {
                    padding: 12px 15px;
                }
                .poll-option img {
                    vertical-align: middle;
                    margin-right: 10px;
                }
                .poll-option.selected {
                    background-color: #e6f7ff;
                    border-color: #1890ff;
                }
            `;
            pollContainer.appendChild(styleElement);
        }
        
        // Create options
        const options = document.createElement('div');
        options.className = 'poll-options';
        
        poll.options.forEach((option, optionIndex) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'poll-option';
            
            // For poll index 1 ("What models are you using?"), add icons next to model names
            if (index === 1 && optionIndex < 5) { // Only for the first 5 options (the AI models)
                const iconSrc = {
                    'ChatGPT': 'assets/images/openai.png',
                    'Claude': 'assets/images/claude-color.png',
                    'Grok': 'assets/images/grok.png',
                    'Gemini': 'assets/images/gemini-color.png',
                    'Perplexity': 'assets/images/perplexity-color.png'
                }[option];
                
                if (iconSrc) {
                    optionElement.innerHTML = `
                        <div class="flex items-center">
                            <img src="${iconSrc}" alt="${option}" width="30" class="mr-md">
                            <span>${option}</span>
                        </div>
                    `;
                } else {
                    optionElement.textContent = option;
                }
            } else {
                optionElement.textContent = option;
            }
            
            optionElement.onclick = () => this.selectOption(optionIndex);
            options.appendChild(optionElement);
        });
        
        pollContainer.appendChild(options);
        
        // Create results (initially hidden)
        const results = document.createElement('div');
        results.className = 'poll-results';
        results.style.display = 'none';
        results.id = 'poll-results';
        
        poll.options.forEach((option, optionIndex) => {
            const resultElement = document.createElement('div');
            resultElement.className = 'poll-result';
            
            const resultLabel = document.createElement('div');
            resultLabel.className = 'flex justify-between mb-xs';
            
            // For poll index 1 ("What models are you using?"), add icons next to model names in results
            if (index === 1 && optionIndex < 5) { // Only for the first 5 options (the AI models)
                const iconSrc = {
                    'ChatGPT': 'assets/images/openai.png',
                    'Claude': 'assets/images/claude-color.png',
                    'Grok': 'assets/images/grok.png',
                    'Gemini': 'assets/images/gemini-color.png',
                    'Perplexity': 'assets/images/perplexity-color.png'
                }[option];
                
                if (iconSrc) {
                    resultLabel.innerHTML = `
                        <span class="flex items-center">
                            <img src="${iconSrc}" alt="${option}" width="20" class="mr-sm">
                            <span>${option}</span>
                        </span>
                        <span>${poll.results[optionIndex]} votes</span>
                    `;
                } else {
                    resultLabel.innerHTML = `
                        <span>${option}</span>
                        <span>${poll.results[optionIndex]} votes</span>
                    `;
                }
            } else {
                resultLabel.innerHTML = `
                    <span>${option}</span>
                    <span>${poll.results[optionIndex]} votes</span>
                `;
            }
            
            const resultBar = document.createElement('div');
            resultBar.className = 'poll-bar';
            
            const resultFill = document.createElement('div');
            resultFill.className = 'poll-bar-fill';
            resultFill.style.width = '0%';
            
            resultBar.appendChild(resultFill);
            resultElement.appendChild(resultLabel);
            resultElement.appendChild(resultBar);
            results.appendChild(resultElement);
        });
        
        pollContainer.appendChild(results);
        
        // Update navigation buttons
        const prevButton = document.getElementById('prev-poll-btn');
        const nextButton = document.getElementById('next-poll-btn');
        
        if (prevButton) prevButton.disabled = index === 0;
        if (nextButton) nextButton.disabled = index === this.polls.length - 1;
    }
    
    selectOption(optionIndex) {
        const poll = this.polls[this.currentPollIndex];
        
        // Update results
        poll.results[optionIndex]++;
        
        // Mark option as selected
        const options = document.querySelectorAll('.poll-option');
        options.forEach((option, index) => {
            if (index === optionIndex) {
                option.classList.add('selected');
            }
        });
        
        // Show results
        const resultsElement = document.getElementById('poll-results');
        resultsElement.style.display = 'block';
        
        // Calculate percentages
        const total = poll.results.reduce((sum, count) => sum + count, 0);
        const resultFills = resultsElement.querySelectorAll('.poll-bar-fill');
        
        resultFills.forEach((fill, index) => {
            const percentage = total > 0 ? (poll.results[index] / total) * 100 : 0;
            fill.style.width = `${percentage}%`;
            
            // Update vote count
            const voteCount = fill.parentElement.previousElementSibling.querySelector('span:last-child');
            voteCount.textContent = `${poll.results[index]} votes`;
        });
    }
}
