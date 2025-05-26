// Resources Component
class ResourcesComponent extends BaseComponent {
    // Explicitly expose to global scope
    static {console.log('ResourcesComponent defined');}
    constructor(slideData) {
        super(slideData);
    }

    createContent() {
        // Create container for the resources content
        const container = document.createElement('div');
        container.className = 'resources-container';
        
        // Add intro text
        const intro = document.createElement('div');
        intro.className = 'intro mb-lg';
        const introText = document.createElement('p');
        introText.className = 'large-text';
        introText.textContent = "Continue your AI journey with these valuable resources.";
        intro.appendChild(introText);
        container.appendChild(intro);
        
        // Add YouTube Channels section
        const youtubeSection = document.createElement('div');
        youtubeSection.className = 'resources-section mb-lg';
        
        const youtubeTitle = document.createElement('h3');
        youtubeTitle.textContent = 'YouTube Channels';
        youtubeSection.appendChild(youtubeTitle);
        
        // Vibe Coding channels
        const vibeCodingSection = this.createResourceCategory('Vibe Coding:');
        const vibeCodingChannels = [
            { name: 'Riley Brown', url: 'https://www.youtube.com/@rileybrownai' },
            { name: 'Sean Kochel', url: 'https://www.youtube.com/@iamseankochel' }
        ];
        this.addResourceLinks(vibeCodingSection, vibeCodingChannels);
        youtubeSection.appendChild(vibeCodingSection);
        
        // Stay Current channels
        const stayCurrentSection = this.createResourceCategory('Stay Current:');
        const stayCurrentChannels = [
            { name: 'The AI Daily Brief', url: 'https://www.youtube.com/@AIDailyBrief' },
            { name: 'Matthew Berman', url: 'https://www.youtube.com/@matthew_berman' },
            { name: 'Matt Wolfe', url: 'https://www.youtube.com/@mreflow' }
        ];
        this.addResourceLinks(stayCurrentSection, stayCurrentChannels);
        youtubeSection.appendChild(stayCurrentSection);
        
        // Deep Dive channels
        const deepDiveSection = this.createResourceCategory('Deep Dive:');
        const deepDiveChannels = [
            { name: 'Andrej Karpathy\'s intro videos (warning: long but worth it)', url: 'https://www.youtube.com/@AndrejKarpathy' }
        ];
        this.addResourceLinks(deepDiveSection, deepDiveChannels);
        youtubeSection.appendChild(deepDiveSection);
        
        container.appendChild(youtubeSection);
        
        // Add other resources section
        const otherResourcesSection = document.createElement('div');
        otherResourcesSection.className = 'resources-section mb-lg';
        
        const otherResourcesTitle = document.createElement('h3');
        otherResourcesTitle.textContent = 'Additional Resources';
        otherResourcesSection.appendChild(otherResourcesTitle);
        
        // Documentation and guides
        const docsSection = this.createResourceCategory('Documentation & Guides:');
        const docResources = [
            { name: 'OpenAI Documentation', url: 'https://platform.openai.com/docs' },
            { name: 'Anthropic Claude Documentation', url: 'https://docs.anthropic.com/claude/' },
            { name: 'Practical Guide to Building Agents (OpenAI)', url: 'https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf' }
        ];
        this.addResourceLinks(docsSection, docResources);
        otherResourcesSection.appendChild(docsSection);
        
        // Tools and platforms
        const toolsSection = this.createResourceCategory('Tools & Platforms:');
        const toolResources = [
            { name: 'Superwhisper (Voice Transcription)', url: 'https://superwhisper.com/' },
            { name: 'Windsurf (AI Coding Assistant)', url: 'https://www.windsurf.io/' },
            { name: 'LangChain (Agent Framework)', url: 'https://www.langchain.com/' }
        ];
        this.addResourceLinks(toolsSection, toolResources);
        otherResourcesSection.appendChild(toolsSection);
        
        container.appendChild(otherResourcesSection);
        
        return container;
    }
    
    // Helper method to create a resource category
    createResourceCategory(title) {
        const category = document.createElement('div');
        category.className = 'resource-category mb-md';
        
        const categoryTitle = document.createElement('h4');
        categoryTitle.textContent = title;
        category.appendChild(categoryTitle);
        
        return category;
    }
    
    // Helper method to add resource links to a category
    addResourceLinks(category, resources) {
        const linksList = document.createElement('ul');
        linksList.className = 'resources-list';
        
        resources.forEach(resource => {
            const listItem = document.createElement('li');
            
            const link = document.createElement('a');
            link.href = resource.url;
            link.textContent = resource.name;
            link.target = '_blank'; // Open in new tab
            link.rel = 'noopener noreferrer'; // Security best practice
            
            listItem.appendChild(link);
            linksList.appendChild(listItem);
        });
        
        category.appendChild(linksList);
    }
    
    initialize() {
        if (this.initialized) return;
        
        // Add hover effects to tool cards
        const toolCards = document.querySelectorAll('.tool-card');
        toolCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-5px)';
                card.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
                card.style.transition = 'all 0.3s ease';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
                card.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
            });
        });
        
        // Add click event to tool cards to open links
        toolCards.forEach(card => {
            card.addEventListener('click', () => {
                const link = card.querySelector('a');
                if (link) {
                    window.open(link.href, '_blank');
                }
            });
            card.style.cursor = 'pointer';
        });
        
        // Add visual indicator for external links
        const links = document.querySelectorAll('.resources-container a');
        links.forEach(link => {
            // Add external link icon if it doesn't already have one
            if (!link.querySelector('i')) {
                link.innerHTML += ' <i class="fas fa-external-link-alt" style="font-size: 0.75em;"></i>';
            }
            
            // Add hover effect
            link.addEventListener('mouseenter', () => {
                link.style.textDecoration = 'underline';
                link.style.color = 'var(--icbc-red)';
                link.style.transition = 'all 0.2s ease';
            });
            
            link.addEventListener('mouseleave', () => {
                link.style.textDecoration = '';
                link.style.color = '';
            });
        });
        
        // Add category highlighting
        const resourceCategories = document.querySelectorAll('.resource-category');
        resourceCategories.forEach(category => {
            const heading = category.querySelector('h3');
            if (heading) {
                heading.addEventListener('mouseenter', () => {
                    heading.style.color = 'var(--standard-bank-blue)';
                    heading.style.transform = 'scale(1.05)';
                    heading.style.transformOrigin = 'left';
                    heading.style.transition = 'all 0.2s ease';
                });
                
                heading.addEventListener('mouseleave', () => {
                    heading.style.color = '';
                    heading.style.transform = '';
                });
            }
        });
        
        this.initialized = true;
    }
    
    cleanup() {
        // Clean up event listeners
        const toolCards = document.querySelectorAll('.tool-card');
        toolCards.forEach(card => {
            card.replaceWith(card.cloneNode(true));
        });
        
        const links = document.querySelectorAll('.resources-container a');
        links.forEach(link => {
            link.replaceWith(link.cloneNode(true));
        });
        
        const resourceCategories = document.querySelectorAll('.resource-category');
        resourceCategories.forEach(category => {
            const heading = category.querySelector('h3');
            if (heading) {
                heading.style.color = '';
                heading.style.transform = '';
            }
        });
        
        this.initialized = false;
    }
}
