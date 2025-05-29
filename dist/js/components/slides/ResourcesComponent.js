// Resources Component
class ResourcesComponent extends BaseComponent {
    constructor(slideData) {
        super(slideData);
        this.initialized = false;
    }
    
    createContent() {
        const container = document.createElement('div');
        container.className = 'resources-container';
        
        // Title section with visual impact
        const titleSection = document.createElement('div');
        titleSection.className = 'title-section';
        
        const title = document.createElement('h2');
        title.className = 'slide-title';
        title.textContent = 'Resources for Continuous Learning';
        titleSection.appendChild(title);
        
        container.appendChild(titleSection);
        
        // Introduction with visual emphasis
        const introSection = document.createElement('div');
        introSection.className = 'intro-section';
        
        const introCard = document.createElement('div');
        introCard.className = 'intro-card';
        
        const introIcon = document.createElement('div');
        introIcon.className = 'intro-icon';
        introIcon.innerHTML = '<i class="fas fa-graduation-cap"></i>';
        introCard.appendChild(introIcon);
        
        const introContent = document.createElement('div');
        introContent.className = 'intro-content';
        
        const introParagraph = document.createElement('p');
        introParagraph.className = 'intro-text';
        introParagraph.innerHTML = 'Continue your AI journey with these valuable resources. The field is evolving rapidly, so staying updated is key to maintaining your competitive edge.';
        introContent.appendChild(introParagraph);
        
        introCard.appendChild(introContent);
        introSection.appendChild(introCard);
        container.appendChild(introSection);
        
        // YouTube Channels with visual cards
        const youtubeSection = document.createElement('div');
        youtubeSection.className = 'youtube-section';
        
        const youtubeTitle = document.createElement('h3');
        youtubeTitle.className = 'section-title';
        youtubeTitle.textContent = 'YouTube Channels';
        youtubeSection.appendChild(youtubeTitle);
        
        const youtubeGrid = document.createElement('div');
        youtubeGrid.className = 'resource-grid';
        
        // Vibe Coding channels
        const vibeCodingCard = document.createElement('div');
        vibeCodingCard.className = 'resource-card youtube-card';
        
        const vibeCodingHeader = document.createElement('div');
        vibeCodingHeader.className = 'card-header';
        vibeCodingHeader.innerHTML = '<i class="fab fa-youtube"></i> Vibe Coding';
        vibeCodingCard.appendChild(vibeCodingHeader);
        
        const vibeCodingList = document.createElement('ul');
        vibeCodingList.className = 'resource-list';
        
        const vibeCodingChannels = [
            { name: 'Riley Brown', url: 'https://www.youtube.com/@rileybrownai' },
            { name: 'Sean Kochel', url: 'https://www.youtube.com/@iamseankochel' }
        ];
        
        vibeCodingChannels.forEach(channel => {
            const listItem = document.createElement('li');
            
            const link = document.createElement('a');
            link.href = channel.url;
            link.textContent = channel.name;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            
            listItem.appendChild(link);
            vibeCodingList.appendChild(listItem);
        });
        
        vibeCodingCard.appendChild(vibeCodingList);
        youtubeGrid.appendChild(vibeCodingCard);
        
        // Stay Current channels
        const stayCurrentCard = document.createElement('div');
        stayCurrentCard.className = 'resource-card youtube-card';
        
        const stayCurrentHeader = document.createElement('div');
        stayCurrentHeader.className = 'card-header';
        stayCurrentHeader.innerHTML = '<i class="fab fa-youtube"></i> Stay Current';
        stayCurrentCard.appendChild(stayCurrentHeader);
        
        const stayCurrentList = document.createElement('ul');
        stayCurrentList.className = 'resource-list';
        
        const stayCurrentChannels = [
            { name: 'The AI Daily Brief', url: 'https://www.youtube.com/@AIDailyBrief' },
            { name: 'Matthew Berman', url: 'https://www.youtube.com/@matthew_berman' },
            { name: 'Matt Wolfe', url: 'https://www.youtube.com/@mreflow' }
        ];
        
        stayCurrentChannels.forEach(channel => {
            const listItem = document.createElement('li');
            
            const link = document.createElement('a');
            link.href = channel.url;
            link.textContent = channel.name;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            
            listItem.appendChild(link);
            stayCurrentList.appendChild(listItem);
        });
        
        stayCurrentCard.appendChild(stayCurrentList);
        youtubeGrid.appendChild(stayCurrentCard);
        
        // Deep Dive channels
        const deepDiveCard = document.createElement('div');
        deepDiveCard.className = 'resource-card youtube-card';
        
        const deepDiveHeader = document.createElement('div');
        deepDiveHeader.className = 'card-header';
        deepDiveHeader.innerHTML = '<i class="fab fa-youtube"></i> Deep Dive';
        deepDiveCard.appendChild(deepDiveHeader);
        
        const deepDiveList = document.createElement('ul');
        deepDiveList.className = 'resource-list';
        
        const deepDiveChannels = [
            { name: 'Andrej Karpathy\'s intro videos (warning: long but worth it)', url: 'https://www.youtube.com/@AndrejKarpathy' }
        ];
        
        deepDiveChannels.forEach(channel => {
            const listItem = document.createElement('li');
            
            const link = document.createElement('a');
            link.href = channel.url;
            link.textContent = channel.name;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            
            listItem.appendChild(link);
            deepDiveList.appendChild(listItem);
        });
        
        deepDiveCard.appendChild(deepDiveList);
        youtubeGrid.appendChild(deepDiveCard);
        
        youtubeSection.appendChild(youtubeGrid);
        container.appendChild(youtubeSection);
        
        // Documentation and Guides with visual cards
        const docsSection = document.createElement('div');
        docsSection.className = 'docs-section';
        
        const docsTitle = document.createElement('h3');
        docsTitle.className = 'section-title';
        docsTitle.textContent = 'Documentation & Guides';
        docsSection.appendChild(docsTitle);
        
        const docsGrid = document.createElement('div');
        docsGrid.className = 'resource-grid';
        
        const docResources = [
            {
                title: 'OpenAI Documentation',
                url: 'https://platform.openai.com/docs',
                description: 'Official documentation for OpenAI\'s models and APIs',
                icon: 'fa-file-code'
            },
            {
                title: 'Anthropic Claude Documentation',
                url: 'https://docs.anthropic.com/claude/',
                description: 'Learn how to use Claude effectively with official guides',
                icon: 'fa-book'
            },
            {
                title: 'Practical Guide to Building Agents',
                url: 'https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf',
                description: 'OpenAI\'s comprehensive guide to building effective AI agents',
                icon: 'fa-robot'
            }
        ];
        
        docResources.forEach(resource => {
            const resourceCard = document.createElement('div');
            resourceCard.className = 'resource-card doc-card';
            
            const resourceHeader = document.createElement('div');
            resourceHeader.className = 'card-header';
            resourceHeader.innerHTML = `<i class="fas ${resource.icon}"></i> ${resource.title}`;
            resourceCard.appendChild(resourceHeader);
            
            const resourceDescription = document.createElement('p');
            resourceDescription.className = 'resource-description';
            resourceDescription.textContent = resource.description;
            resourceCard.appendChild(resourceDescription);
            
            const resourceLink = document.createElement('a');
            resourceLink.href = resource.url;
            resourceLink.className = 'resource-link';
            resourceLink.textContent = 'Visit Resource';
            resourceLink.target = '_blank';
            resourceLink.rel = 'noopener noreferrer';
            resourceCard.appendChild(resourceLink);
            
            docsGrid.appendChild(resourceCard);
        });
        
        docsSection.appendChild(docsGrid);
        container.appendChild(docsSection);
        
        // Tools and Platforms with visual cards
        const toolsSection = document.createElement('div');
        toolsSection.className = 'tools-section';
        
        const toolsTitle = document.createElement('h3');
        toolsTitle.className = 'section-title';
        toolsTitle.textContent = 'Tools & Platforms';
        toolsSection.appendChild(toolsTitle);
        
        const toolsGrid = document.createElement('div');
        toolsGrid.className = 'resource-grid';
        
        const toolResources = [
            {
                title: 'Superwhisper',
                url: 'https://superwhisper.com/',
                description: 'Advanced voice transcription tool for meetings and interviews',
                icon: 'fa-microphone'
            },
            {
                title: 'Windsurf',
                url: 'https://www.windsurf.io/',
                description: 'AI coding assistant for faster, more efficient development',
                icon: 'fa-code'
            },
            {
                title: 'LangChain',
                url: 'https://www.langchain.com/',
                description: 'Framework for developing applications powered by language models',
                icon: 'fa-link'
            }
        ];
        
        toolResources.forEach(resource => {
            const resourceCard = document.createElement('div');
            resourceCard.className = 'resource-card tool-card';
            
            const resourceHeader = document.createElement('div');
            resourceHeader.className = 'card-header';
            resourceHeader.innerHTML = `<i class="fas ${resource.icon}"></i> ${resource.title}`;
            resourceCard.appendChild(resourceHeader);
            
            const resourceDescription = document.createElement('p');
            resourceDescription.className = 'resource-description';
            resourceDescription.textContent = resource.description;
            resourceCard.appendChild(resourceDescription);
            
            const resourceLink = document.createElement('a');
            resourceLink.href = resource.url;
            resourceLink.className = 'resource-link';
            resourceLink.textContent = 'Visit Resource';
            resourceLink.target = '_blank';
            resourceLink.rel = 'noopener noreferrer';
            resourceCard.appendChild(resourceLink);
            
            toolsGrid.appendChild(resourceCard);
        });
        
        toolsSection.appendChild(toolsGrid);
        container.appendChild(toolsSection);
        
        // Books and Courses with visual cards
        const learningSection = document.createElement('div');
        learningSection.className = 'learning-section';
        
        const learningTitle = document.createElement('h3');
        learningTitle.className = 'section-title';
        learningTitle.textContent = 'Books & Courses';
        learningSection.appendChild(learningTitle);
        
        const learningGrid = document.createElement('div');
        learningGrid.className = 'resource-grid';
        
        const learningResources = [
            {
                title: 'Prompt Engineering Guide',
                url: 'https://www.promptingguide.ai/',
                description: 'Comprehensive guide to effective prompt engineering techniques',
                icon: 'fa-keyboard'
            },
            {
                title: 'AI For Everyone (Coursera)',
                url: 'https://www.coursera.org/learn/ai-for-everyone',
                description: 'Andrew Ng\'s course on AI fundamentals for non-technical professionals',
                icon: 'fa-chalkboard-teacher'
            },
            {
                title: 'Practical Deep Learning for Coders',
                url: 'https://course.fast.ai/',
                description: 'Fast.ai\'s practical approach to deep learning for developers',
                icon: 'fa-brain'
            }
        ];
        
        learningResources.forEach(resource => {
            const resourceCard = document.createElement('div');
            resourceCard.className = 'resource-card learning-card';
            
            const resourceHeader = document.createElement('div');
            resourceHeader.className = 'card-header';
            resourceHeader.innerHTML = `<i class="fas ${resource.icon}"></i> ${resource.title}`;
            resourceCard.appendChild(resourceHeader);
            
            const resourceDescription = document.createElement('p');
            resourceDescription.className = 'resource-description';
            resourceDescription.textContent = resource.description;
            resourceCard.appendChild(resourceDescription);
            
            const resourceLink = document.createElement('a');
            resourceLink.href = resource.url;
            resourceLink.className = 'resource-link';
            resourceLink.textContent = 'Visit Resource';
            resourceLink.target = '_blank';
            resourceLink.rel = 'noopener noreferrer';
            resourceCard.appendChild(resourceLink);
            
            learningGrid.appendChild(resourceCard);
        });
        
        learningSection.appendChild(learningGrid);
        container.appendChild(learningSection);
        
        // Add CSS for this component
        const style = document.createElement('style');
        style.textContent = `
            .resources-container {
                max-width: 1200px;
                margin: 0 auto;
                padding: 1.5rem;
                font-family: 'Inter', sans-serif;
                color: #323F4B;
            }
            
            .title-section {
                margin-bottom: 2rem;
                text-align: center;
            }
            
            .slide-title {
                font-size: 1.875rem;
                font-weight: 700;
                color: #0c4da2;
                margin: 0;
                line-height: 2.25rem;
                position: relative;
                display: inline-block;
            }
            
            .slide-title:after {
                content: '';
                position: absolute;
                bottom: -10px;
                left: 25%;
                width: 50%;
                height: 4px;
                background-color: #e31937;
                border-radius: 2px;
            }
            
            .section-title {
                font-size: 1.5rem;
                font-weight: 700;
                color: #0c4da2;
                margin-top: 0;
                margin-bottom: 1.5rem;
            }
            
            .intro-section {
                margin-bottom: 2.5rem;
            }
            
            .intro-card {
                background-color: #f8fafc;
                border-radius: 0.5rem;
                padding: 1.5rem;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                display: flex;
                align-items: flex-start;
                border-left: 4px solid #0c4da2;
            }
            
            .intro-icon {
                font-size: 2rem;
                color: #0c4da2;
                margin-right: 1.5rem;
                flex-shrink: 0;
            }
            
            .intro-content {
                flex: 1;
            }
            
            .intro-text {
                font-size: 1rem;
                line-height: 1.6;
                color: #4A5568;
                margin: 0;
            }
            
            .youtube-section,
            .docs-section,
            .tools-section {
                margin-bottom: 2.5rem;
            }
            
            .learning-section {
                margin-bottom: 1.5rem;
            }
            
            .resource-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: 1.5rem;
            }
            
            .resource-card {
                background-color: white;
                border-radius: 0.5rem;
                overflow: hidden;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                border: 1px solid #E4E7EB;
                transition: transform 0.2s ease-out, box-shadow 0.2s ease-out;
                display: flex;
                flex-direction: column;
            }
            
            .resource-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            
            .youtube-card {
                border-top: 4px solid #FF0000;
            }
            
            .doc-card {
                border-top: 4px solid #0c4da2;
            }
            
            .tool-card {
                border-top: 4px solid #e31937;
            }
            
            .learning-card {
                border-top: 4px solid #4CAF50;
            }
            
            .card-header {
                padding: 1rem;
                background-color: #F5F7FA;
                font-weight: 600;
                font-size: 1.125rem;
                color: #323F4B;
                border-bottom: 1px solid #E4E7EB;
            }
            
            .youtube-card .card-header i {
                color: #FF0000;
            }
            
            .doc-card .card-header i {
                color: #0c4da2;
            }
            
            .tool-card .card-header i {
                color: #e31937;
            }
            
            .learning-card .card-header i {
                color: #4CAF50;
            }
            
            .card-header i {
                margin-right: 0.75rem;
            }
            
            .resource-list {
                list-style: none;
                padding: 1rem;
                margin: 0;
                flex: 1;
            }
            
            .resource-list li {
                margin-bottom: 0.75rem;
                position: relative;
                padding-left: 1.5rem;
            }
            
            .resource-list li:last-child {
                margin-bottom: 0;
            }
            
            .resource-list li:before {
                content: '→';
                position: absolute;
                left: 0;
                color: #0c4da2;
            }
            
            .resource-list a {
                color: #0c4da2;
                text-decoration: none;
                transition: color 0.2s ease-out;
                display: inline-block;
            }
            
            .resource-list a:hover {
                color: #e31937;
                text-decoration: underline;
            }
            
            .resource-description {
                padding: 1rem;
                margin: 0;
                font-size: 0.875rem;
                color: #4A5568;
                line-height: 1.5;
                flex: 1;
            }
            
            .resource-link {
                display: block;
                padding: 0.75rem 1rem;
                background-color: #F5F7FA;
                color: #0c4da2;
                text-align: center;
                text-decoration: none;
                font-weight: 600;
                font-size: 0.875rem;
                border-top: 1px solid #E4E7EB;
                transition: background-color 0.2s ease-out;
            }
            
            .resource-link:hover {
                background-color: #EBF8FF;
                color: #0a3d82;
            }
            
            @media (max-width: 768px) {
                .resource-grid {
                    grid-template-columns: 1fr;
                }
                
                .intro-card {
                    flex-direction: column;
                }
                
                .intro-icon {
                    margin-right: 0;
                    margin-bottom: 1rem;
                }
            }
        `;
        container.appendChild(style);
        
        return container;
    }
    
    initialize() {
        if (this.initialized) return;
        
        // Add hover effects to resource cards
        const resourceCards = document.querySelectorAll('.resource-card');
        resourceCards.forEach(card => {
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
        
        // Add visual indicator for external links
        const links = document.querySelectorAll('.resources-container a');
        links.forEach(link => {
            // Add external link icon if it doesn't already have one
            if (!link.querySelector('i')) {
                if (!link.classList.contains('resource-link')) {
                    link.innerHTML += ' <i class="fas fa-external-link-alt" style="font-size: 0.75em;"></i>';
                }
            }
            
            // Add hover effect
            link.addEventListener('mouseenter', () => {
                link.style.textDecoration = 'underline';
                if (link.classList.contains('resource-link')) {
                    link.style.backgroundColor = '#EBF8FF';
                } else {
                    link.style.color = '#e31937';
                }
                link.style.transition = 'all 0.2s ease';
            });
            
            link.addEventListener('mouseleave', () => {
                if (!link.classList.contains('resource-link')) {
                    link.style.textDecoration = '';
                    link.style.color = '';
                } else {
                    link.style.backgroundColor = '';
                }
            });
        });
        
        this.initialized = true;
    }
    
    cleanup() {
        // Clean up event listeners
        const resourceCards = document.querySelectorAll('.resource-card');
        resourceCards.forEach(card => {
            card.replaceWith(card.cloneNode(true));
        });
        
        const links = document.querySelectorAll('.resources-container a');
        links.forEach(link => {
            link.replaceWith(link.cloneNode(true));
        });
        
        this.initialized = false;
    }
}
