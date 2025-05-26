// Final Thought Component
class FinalThoughtComponent extends BaseComponent {
    // Explicitly expose to global scope
    static {console.log('FinalThoughtComponent defined');}
    
    constructor(slideData) {
        super(slideData);
    }
    
    createContent() {
        // Create container for the final thought content
        const container = document.createElement('div');
        container.className = 'final-thought-container';
        
        // Create main message
        const mainMessage = document.createElement('div');
        mainMessage.className = 'main-message mb-lg';
        
        const quote = document.createElement('blockquote');
        quote.className = 'quote';
        quote.innerHTML = '<p class="large-text">"We are still very early in the AI Revolution but this is changing rapidly"</p>';
        mainMessage.appendChild(quote);
        
        // Create final message
        const finalMessage = document.createElement('div');
        finalMessage.className = 'final-message mt-lg';
        
        const message = document.createElement('p');
        message.innerHTML = 'The future belongs to those who can effectively harness AI as a tool, not those who resist it. ' +
            'Start small, experiment often, and build your AI literacy every day.';
        finalMessage.appendChild(message);
        
        // Create call to action
        const callToAction = document.createElement('div');
        callToAction.className = 'call-to-action mt-xl';
        
        const ctaTitle = document.createElement('h3');
        ctaTitle.textContent = 'Your Next Steps';
        callToAction.appendChild(ctaTitle);
        
        const ctaList = document.createElement('ul');
        ctaList.className = 'cta-list';
        
        const ctaItems = [
            'Choose one AI tool and use it daily for a week',
            'Join the AI community of practice',
            'Share what you learn with your team',
            'Look for one process you can enhance with AI',
            'Remember: The goal is augmentation, not replacement'
        ];
        
        ctaItems.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            ctaList.appendChild(li);
        });
        
        callToAction.appendChild(ctaList);
        
        // Add CSS for this component
        const style = document.createElement('style');
        style.textContent = `
            .final-thought-container {
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
                max-width: 800px;
                margin: 0 auto;
            }
            
            .quote {
                border-left: 4px solid var(--standard-bank-blue);
                padding-left: var(--space-lg);
                font-style: italic;
                text-align: left;
            }
            
            .final-message {
                font-size: 1.2rem;
                line-height: 1.6;
            }
            
            .call-to-action {
                background-color: var(--blue-light);
                padding: var(--space-lg);
                border-radius: 8px;
                width: 100%;
            }
            
            .cta-list {
                text-align: left;
                margin-top: var(--space-md);
            }
            
            .cta-list li {
                margin-bottom: var(--space-sm);
            }
        `;
        
        // Add all sections to container
        container.appendChild(mainMessage);
        container.appendChild(finalMessage);
        container.appendChild(callToAction);
        container.appendChild(style);
        
        return container;
    }
}
