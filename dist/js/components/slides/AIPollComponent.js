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
                options: ["ChatGPT", "Claude", "Grok", "Gemini", "Perplexity", "Co-pilot", "Other", "None"],
                results: [0, 0, 0, 0, 0, 0, 0, 0]
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
        this.forceShowResults = false;
        this.currentPollIndex = 0;
        this.initialized = false;
        this.showingResults = false;
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
            <button id="prev-poll-btn" class="btn btn-secondary" onclick="document.pollComponent.navigatePoll(-1)">Previous Poll</button>
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
        if (newIndex < 0 || newIndex >= this.polls.length) return;
        this.currentPollIndex = newIndex;
        this.showingResults = false;
        this.forceShowResults = false;
        this.showPoll(this.currentPollIndex);
    }
    
    showPoll(index) {
        // Validate index
        if (index < 0 || index >= this.polls.length) return;
        this.currentPollIndex = index;
        const pollContainer = document.getElementById('poll-container');
        if (!pollContainer) return;
        pollContainer.innerHTML = '';
        const poll = this.polls[index];

        // Poll counter
        const pollCounter = document.createElement('div');
        pollCounter.className = 'poll-counter text-center mb-sm';
        pollCounter.style.fontSize = '14px';
        pollCounter.style.color = '#666';
        pollCounter.textContent = `Poll ${index + 1} of ${this.polls.length}`;
        pollContainer.appendChild(pollCounter);

        if (!this.showingResults) {
            // --- Render the poll options ---
            const question = document.createElement('div');
            question.className = 'poll-question';
            question.textContent = poll.question;
            pollContainer.appendChild(question);

            // Add custom styles for poll index 1
            if (index === 1) {
                const styleElement = document.createElement('style');
                styleElement.textContent = `
                    .poll-option { padding: 12px 15px; }
                    .poll-option img { vertical-align: middle; margin-right: 10px; }
                    .poll-option.selected { background-color: #e6f7ff; border-color: #1890ff; }
                `;
                pollContainer.appendChild(styleElement);
            }

            // Poll options
            const options = document.createElement('div');
            options.className = 'poll-options';
            poll.options.forEach((option, optionIndex) => {
                const optionElement = document.createElement('div');
                optionElement.className = 'poll-option';
                if (index === 1 && optionIndex < 6) {
                    const iconSrc = {
                        'ChatGPT': 'assets/images/openai.png',
                        'Claude': 'assets/images/claude-color.png',
                        'Grok': 'assets/images/grok.png',
                        'Gemini': 'assets/images/gemini-color.png',
                        'Perplexity': 'assets/images/perplexity-color.png',
                        'Co-pilot': 'assets/images/copilot-color.png'
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

            // Show Results button
            const showResultsBtn = document.createElement('button');
            showResultsBtn.textContent = 'Show Results';
            showResultsBtn.className = 'btn btn-info mt-md';
            showResultsBtn.onclick = () => {
                this.showingResults = true;
                this.fetchResults();
            };
            pollContainer.appendChild(showResultsBtn);
        } else {
            // --- Render the results screen ---
            const results = document.createElement('div');
            results.className = 'poll-results';
            poll.options.forEach((option, optionIndex) => {
                const resultElement = document.createElement('div');
                resultElement.className = 'poll-result';
                const resultLabel = document.createElement('div');
                resultLabel.className = 'flex justify-between mb-xs';
                if (index === 1 && optionIndex < 6) {
                    const iconSrc = {
                        'ChatGPT': 'assets/images/openai.png',
                        'Claude': 'assets/images/claude-color.png',
                        'Grok': 'assets/images/grok.png',
                        'Gemini': 'assets/images/gemini-color.png',
                        'Perplexity': 'assets/images/perplexity-color.png',
                        'Co-pilot': 'assets/images/copilot-color.png'
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
                resultElement.appendChild(resultLabel);
                // Bar
                const bar = document.createElement('div');
                bar.className = 'poll-bar';
                const fill = document.createElement('div');
                fill.className = 'poll-bar-fill';
                const total = poll.results.reduce((sum, count) => sum + count, 0);
                const percentage = total > 0 ? (poll.results[optionIndex] / total) * 100 : 0;
                fill.style.width = `${percentage}%`;
                bar.appendChild(fill);
                resultElement.appendChild(bar);
                results.appendChild(resultElement);
            });
            pollContainer.appendChild(results);
        }
        // Thank you message after last poll
        if (index === this.polls.length - 1) {
            const thankYou = document.createElement('div');
            thankYou.className = 'poll-thank-you mt-lg';
            thankYou.textContent = 'Thank you for participating in the poll!';
            pollContainer.appendChild(thankYou);
        }
        // Dynamically enable/disable Previous Poll button
        const prevBtn = document.getElementById('prev-poll-btn');
        if (prevBtn) prevBtn.disabled = (index === 0);
    }

    selectOption(optionIndex) {
        // POST vote to backend
        fetch('https://poll.gavinslater.co.uk/vote', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ pollIndex: this.currentPollIndex, optionIndex })
        }).then(() => {
            // After voting, just refresh poll (do not show results)
            this.fetchResults();
        });
    }

    fetchResults() {
        fetch('https://poll.gavinslater.co.uk/results')
            .then(response => response.json())
            .then(data => {
                // Assuming backend returns { results: [[...], [...], ...] }
                if (data && Array.isArray(data.results)) {
                    data.results.forEach((pollResults, idx) => {
                        if (this.polls[idx]) {
                            this.polls[idx].results = pollResults;
                        }
                    });
                    // If showing results, re-render
                    if (this.showingResults) {
                        this.showPoll(this.currentPollIndex);
                    }
                }
            });
    }
}

