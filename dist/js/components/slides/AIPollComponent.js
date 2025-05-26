// AI Poll Component
class AIPollComponent extends BaseComponent {
    constructor() {
        super();
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
        pollContainer.id = 'active-poll';
        container.appendChild(pollContainer);
        
        // Navigation buttons
        const pollNav = document.createElement('div');
        pollNav.className = 'flex justify-between mt-lg';
        
        const prevButton = this.createButton('Previous Poll', 'btn-secondary', () => this.showPoll(this.currentPollIndex - 1));
        prevButton.id = 'prev-poll-btn';
        prevButton.disabled = true;
        
        const nextButton = this.createButton('Next Poll', 'btn-primary', () => this.showPoll(this.currentPollIndex + 1));
        nextButton.id = 'next-poll-btn';
        
        pollNav.appendChild(prevButton);
        pollNav.appendChild(nextButton);
        container.appendChild(pollNav);
        
        // Model logos section
        const logosSection = document.createElement('div');
        logosSection.className = 'logos-section mt-xl';
        logosSection.innerHTML = `
            <h3 class="mb-md">Popular AI Models</h3>
            <div class="model-logos flex gap-md items-center justify-center">
                <div class="model-logo">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" alt="ChatGPT" width="60">
                    <p>ChatGPT</p>
                </div>
                <div class="model-logo">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/Claude_logo.svg" alt="Claude" width="60">
                    <p>Claude</p>
                </div>
                <div class="model-logo">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Gemini_logo.svg" alt="Gemini" width="60">
                    <p>Gemini</p>
                </div>
                <div class="model-logo">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Grok_logo.svg" alt="Grok" width="60">
                    <p>Grok</p>
                </div>
                <div class="model-logo">
                    <img src="https://assets-global.website-files.com/64f6f2c0e3f4c5a91c1e823a/654693d569494a0d3c3a2a3b_favicon.png" alt="Perplexity" width="60">
                    <p>Perplexity</p>
                </div>
            </div>
        `;
        container.appendChild(logosSection);
        
        // Conclusion text
        const conclusion = document.createElement('p');
        conclusion.className = 'mt-xl';
        conclusion.innerHTML = "To really leverage the potential we need to be keeping pace with developments in this field. I understand that our current in-house model (Co-pilot) is not the best, but we should be keeping abreast and experimenting outside of work too so that we are not left behind.";
        container.appendChild(conclusion);
        
        // Initialize the first poll after rendering
        setTimeout(() => this.showPoll(0), 0);
        
        return container;
    }
    
    showPoll(index) {
        if (index < 0 || index >= this.polls.length) {
            return;
        }
        
        this.currentPollIndex = index;
        const pollContainer = document.getElementById('active-poll');
        pollContainer.innerHTML = '';
        
        const poll = this.polls[index];
        
        // Create question
        const question = document.createElement('div');
        question.className = 'poll-question';
        question.textContent = poll.question;
        pollContainer.appendChild(question);
        
        // Create options
        const options = document.createElement('div');
        options.className = 'poll-options';
        
        poll.options.forEach((option, optionIndex) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'poll-option';
            optionElement.textContent = option;
            optionElement.addEventListener('click', () => this.selectOption(optionIndex));
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
            resultLabel.innerHTML = `
                <span>${option}</span>
                <span>${poll.results[optionIndex]} votes</span>
            `;
            
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
        document.getElementById('prev-poll-btn').disabled = index === 0;
        document.getElementById('next-poll-btn').disabled = index === this.polls.length - 1;
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
