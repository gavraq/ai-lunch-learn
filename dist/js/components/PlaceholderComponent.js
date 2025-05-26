// Placeholder Component for slides without a dedicated component
class PlaceholderComponent extends BaseComponent {
    constructor(slideData) {
        super(slideData);
        this.initialized = false;
    }
    
    createContent() {
        // If content is provided in slideData, use that
        if (this.slideData.content) {
            const container = document.createElement('div');
            container.innerHTML = this.slideData.content;
            return container;
        }
        
        // Otherwise create a placeholder
        const container = document.createElement('div');
        container.className = 'placeholder-content';
        
        const message = document.createElement('div');
        message.className = 'placeholder-message';
        message.innerHTML = `
            <div class="placeholder-icon">
                <i class="fas fa-tools"></i>
            </div>
            <h3>This slide is under construction</h3>
            <p>This component will be implemented in the next phase of development.</p>
        `;
        container.appendChild(message);
        
        return container;
    }
    
    initialize() {
        if (this.initialized) return;
        
        // Add some subtle animation to the placeholder
        const placeholderIcon = document.querySelector('.placeholder-icon');
        if (placeholderIcon) {
            placeholderIcon.style.animation = 'pulse 2s infinite';
            
            // Add keyframes if they don't exist
            if (!document.querySelector('#placeholder-animations')) {
                const style = document.createElement('style');
                style.id = 'placeholder-animations';
                style.textContent = `
                    @keyframes pulse {
                        0% { transform: scale(1); }
                        50% { transform: scale(1.1); }
                        100% { transform: scale(1); }
                    }
                `;
                document.head.appendChild(style);
            }
        }
        
        this.initialized = true;
    }
    
    cleanup() {
        // Remove animation styles
        const animationsStyle = document.getElementById('placeholder-animations');
        if (animationsStyle) {
            animationsStyle.remove();
        }
        
        this.initialized = false;
    }
}
