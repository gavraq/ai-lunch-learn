/**
 * AI Prompting Header Component
 * This component displays the header for the "Level Up Your AI Prompting Game" section
 */
class AIPromptingHeaderComponent extends BaseComponent {
    constructor(slideData) {
        super(slideData);
        this.initialized = false;
    }
    
    createContent() {
        const container = document.createElement('div');
        container.className = 'section-header-container';
        
        // Create a header card
        const headerCard = this.createCard(
            this.slideData.title,
            `<div class="section-description">
                <p>Effective AI prompting is a key skill in the modern workplace. This section covers techniques to improve your AI interactions:</p>
                <ul>
                    <li>Structured prompting for better results</li>
                    <li>Voice interfaces for natural interaction</li>
                </ul>
            </div>`,
            'section-header-card'
        );
        
        container.appendChild(headerCard);
        
        return container;
    }
    
    initialize() {
        if (this.initialized) return;
        // No special initialization needed for this component
        this.initialized = true;
    }
    
    cleanup() {
        // No special cleanup needed
        this.initialized = false;
    }
}
