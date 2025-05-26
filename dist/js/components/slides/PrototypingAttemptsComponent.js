// Prototyping Attempts Component
class PrototypingAttemptsComponent extends BaseComponent {
    constructor(slideData) {
        super(slideData);
        this.initialized = false;
    }
    
    createContent() {
        const container = document.createElement('div');
        
        // Title
        const title = document.createElement('h2');
        title.textContent = 'My Three Prototyping Attempts and Lessons Learned';
        title.className = 'slide-title mb-md';
        container.appendChild(title);
        
        // Create the three attempts as cards
        const attemptsContainer = document.createElement('div');
        attemptsContainer.className = 'attempts-container';
        
        // Attempt 1
        const attempt1Content = document.createElement('div');
        attempt1Content.className = 'attempt-content';
        
        const attempt1Title = document.createElement('h3');
        attempt1Title.textContent = 'Attempt 1: "Diving In"';
        attempt1Content.appendChild(attempt1Title);
        
        const attempt1List = this.createList([
            'Took Product Requirements Document plugged into Claude',
            'Started coding immediately',
            'No clear architecture',
            'Result: Spaghetti code that didn\'t work',
            'Lesson: AI can code, but it needs direction'
        ]);
        attempt1Content.appendChild(attempt1List);
        
        const attempt1Card = this.createCard(null, attempt1Content);
        attempt1Card.className = 'card attempt-card attempt-1';
        attemptsContainer.appendChild(attempt1Card);
        
        // Attempt 2
        const attempt2Content = document.createElement('div');
        attempt2Content.className = 'attempt-content';
        
        const attempt2Title = document.createElement('h3');
        attempt2Title.textContent = 'Attempt 2: "Better Planning, But..."';
        attempt2Content.appendChild(attempt2Title);
        
        const attempt2List = this.createList([
            'Created basic design documents',
            'Halfway through: "Let\'s change the database!"',
            'Result: Frankenstein system',
            'Lesson: Changing fundamental design mid-flight = disaster'
        ]);
        attempt2Content.appendChild(attempt2List);
        
        const attempt2Card = this.createCard(null, attempt2Content);
        attempt2Card.className = 'card attempt-card attempt-2';
        attemptsContainer.appendChild(attempt2Card);
        
        // Attempt 3
        const attempt3Content = document.createElement('div');
        attempt3Content.className = 'attempt-content';
        
        const attempt3Title = document.createElement('h3');
        attempt3Title.textContent = 'Attempt 3: "AI as My Architect"';
        attempt3Content.appendChild(attempt3Title);
        
        const attempt3List = this.createList([
            'Comprehensive planning phase (reference Sean Kochel method)',
            'Detailed architecture BEFORE coding',
            'AI helped design, then build',
            'Result: Working prototype in days, not months'
        ]);
        attempt3Content.appendChild(attempt3List);
        
        const attempt3Card = this.createCard(null, attempt3Content);
        attempt3Card.className = 'card attempt-card attempt-3 success-card';
        attemptsContainer.appendChild(attempt3Card);
        
        container.appendChild(attemptsContainer);
        
        // Key takeaway
        const keyTakeaway = document.createElement('div');
        keyTakeaway.className = 'key-takeaway mt-lg';
        
        const takeawayQuote = document.createElement('blockquote');
        takeawayQuote.className = 'quote';
        takeawayQuote.innerHTML = '<p class="large-text">"TLDR: Before you write code make a plan"</p>';
        keyTakeaway.appendChild(takeawayQuote);
        
        container.appendChild(keyTakeaway);
        
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
