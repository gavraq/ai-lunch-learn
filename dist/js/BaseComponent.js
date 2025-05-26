// Base Component class that all slide components will extend
class BaseComponent {
    constructor(slideData) {
        this.slideData = slideData;
        this.initialized = false;
        this.element = document.createElement('div');
        this.element.className = 'slide-content';
    }
    
    // Method to be overridden by child components
    createContent() {
        // Default implementation
        const placeholder = document.createElement('p');
        placeholder.textContent = 'This slide content is not yet implemented.';
        return placeholder;
    }
    
    // Renders the component
    render() {
        if (this.slideData && this.slideData.content) {
            // If content is provided directly in the slide data, use that
            this.element.innerHTML = this.slideData.content;
            return this.element.innerHTML;
        } else {
            // Otherwise use the createContent method
            const content = this.createContent();
            if (content instanceof HTMLElement) {
                this.element.appendChild(content);
                return this.element.outerHTML;
            } else if (typeof content === 'string') {
                return content;
            } else {
                return '';
            }
        }
    }
    
    // Initialize component after rendering
    initialize() {
        this.initialized = true;
    }
    
    // Clean up component when navigating away
    cleanup() {
        this.initialized = false;
    }
    
    // Helper method to create a card element
    createCard(title, content) {
        const card = document.createElement('div');
        card.className = 'card';
        
        if (title) {
            const cardTitle = document.createElement('h3');
            cardTitle.textContent = title;
            card.appendChild(cardTitle);
        }
        
        if (typeof content === 'string') {
            const cardContent = document.createElement('p');
            cardContent.textContent = content;
            card.appendChild(cardContent);
        } else if (content instanceof HTMLElement) {
            card.appendChild(content);
        }
        
        return card;
    }
    
    // Helper method to create a button
    createButton(text, className = 'btn-primary', clickHandler = null) {
        const button = document.createElement('button');
        button.className = `btn ${className}`;
        button.textContent = text;
        
        if (clickHandler) {
            button.addEventListener('click', clickHandler);
        }
        
        return button;
    }
    
    // Helper method to create a badge
    createBadge(text, type = 'info') {
        const badge = document.createElement('span');
        badge.className = `badge badge-${type}`;
        badge.textContent = text;
        return badge;
    }
    
    // Helper method to create a two-column layout
    createTwoColumnLayout(leftContent, rightContent) {
        const container = document.createElement('div');
        container.className = 'two-col';
        
        const leftColumn = document.createElement('div');
        leftColumn.className = 'column';
        
        const rightColumn = document.createElement('div');
        rightColumn.className = 'column';
        
        if (typeof leftContent === 'string') {
            const content = document.createElement('p');
            content.textContent = leftContent;
            leftColumn.appendChild(content);
        } else if (leftContent instanceof HTMLElement) {
            leftColumn.appendChild(leftContent);
        }
        
        if (typeof rightContent === 'string') {
            const content = document.createElement('p');
            content.textContent = rightContent;
            rightColumn.appendChild(content);
        } else if (rightContent instanceof HTMLElement) {
            rightColumn.appendChild(rightContent);
        }
        
        container.appendChild(leftColumn);
        container.appendChild(rightColumn);
        
        return container;
    }
    
    // Helper method to create a list
    createList(items, ordered = false) {
        const list = document.createElement(ordered ? 'ol' : 'ul');
        
        items.forEach(item => {
            const listItem = document.createElement('li');
            
            if (typeof item === 'string') {
                listItem.textContent = item;
            } else if (item instanceof HTMLElement) {
                listItem.appendChild(item);
            }
            
            list.appendChild(listItem);
        });
        
        return list;
    }
    
    // Helper method to create a code block
    createCodeBlock(code, language = '') {
        const container = document.createElement('pre');
        const codeElement = document.createElement('code');
        
        if (language) {
            codeElement.className = `language-${language}`;
        }
        
        codeElement.textContent = code;
        container.appendChild(codeElement);
        
        return container;
    }
}
