// Vibe Coding Component
class VibeCodingComponent extends BaseComponent {
    constructor(slideData) {
        super(slideData);
        this.initialized = false;
    }

    createContent() {
        const container = document.createElement('div');
        container.className = 'vibe-coding-container';
        
        // Title section with visual impact
        const titleSection = document.createElement('div');
        titleSection.className = 'title-section';
        
        const title = document.createElement('h2');
        title.className = 'slide-title';
        title.textContent = '"Vibe coding" might be the future of prototyping';
        titleSection.appendChild(title);
        
        container.appendChild(titleSection);
        
        // Karpathy quote with visual styling
        const quoteSection = document.createElement('div');
        quoteSection.className = 'quote-section';
        
        const quoteCard = document.createElement('div');
        quoteCard.className = 'quote-card';
        
        const quoteContent = document.createElement('div');
        quoteContent.className = 'quote-content';
        
        const quoteText = document.createElement('p');
        quoteText.className = 'quote-text';
        quoteText.innerHTML = 'If you have been following AI developments recently you may have come across a phenomenon called "vibe coding" coined in March 2025 by Andrej Karpathy, one of the founders of OpenAI and formerly head of self-driving at Tesla.';
        quoteContent.appendChild(quoteText);
        
        const twitterIcon = document.createElement('div');
        twitterIcon.className = 'twitter-icon';
        twitterIcon.innerHTML = '<i class="fab fa-twitter"></i>';
        
        quoteCard.appendChild(twitterIcon);
        quoteCard.appendChild(quoteContent);
        quoteSection.appendChild(quoteCard);
        container.appendChild(quoteSection);
        
        // What is Vibe Coding section
        const definitionSection = document.createElement('div');
        definitionSection.className = 'definition-section';
        
        const definitionTitle = document.createElement('h3');
        definitionTitle.className = 'section-title';
        definitionTitle.textContent = 'What is Vibe Coding?';
        definitionSection.appendChild(definitionTitle);
        
        const definitionText = document.createElement('p');
        definitionText.className = 'definition-text';
        definitionText.innerHTML = 'Essentially in vibe coding you get AI to do your coding for you. This has been made a lot easier for non-professional developers through tools such as:';
        definitionSection.appendChild(definitionText);
        
        // Tools grid with visual cards
        const toolsGrid = document.createElement('div');
        toolsGrid.className = 'tools-grid';
        
        const tools = [
            { name: 'Cursor', url: 'https://cursor.ai/', icon: 'fa-keyboard' },
            { name: 'Windsurf', url: 'https://windsurf.com', icon: 'fa-wind' },
            { name: 'Lovable', url: 'https://lovable.dev/', icon: 'fa-heart' },
            { name: 'Replit', url: 'https://replit.com/', icon: 'fa-terminal' }
        ];
        
        tools.forEach(tool => {
            const toolCard = document.createElement('div');
            toolCard.className = 'tool-card';
            
            const toolIcon = document.createElement('div');
            toolIcon.className = 'tool-icon';
            toolIcon.innerHTML = `<i class="fas ${tool.icon}"></i>`;
            toolCard.appendChild(toolIcon);
            
            const toolName = document.createElement('h4');
            toolName.className = 'tool-name';
            toolName.textContent = tool.name;
            toolCard.appendChild(toolName);
            
            const toolUrl = document.createElement('p');
            toolUrl.className = 'tool-url';
            toolUrl.textContent = tool.url;
            toolCard.appendChild(toolUrl);
            
            toolsGrid.appendChild(toolCard);
        });
        
        definitionSection.appendChild(toolsGrid);
        container.appendChild(definitionSection);
        
        // YouTube channels section
        const youtubeSection = document.createElement('div');
        youtubeSection.className = 'youtube-section';
        
        const youtubeTitle = document.createElement('h3');
        youtubeTitle.className = 'section-title';
        youtubeTitle.textContent = 'Learn More from These YouTube Channels';
        youtubeSection.appendChild(youtubeTitle);
        
        const channelsContainer = document.createElement('div');
        channelsContainer.className = 'channels-container';
        
        const channels = [
            { name: 'Riley Brown', url: 'https://www.youtube.com/@rileybrownai', icon: 'fa-youtube' },
            { name: 'Sean Kochel', url: 'https://www.youtube.com/@iamseankochel', icon: 'fa-youtube' }
        ];
        
        channels.forEach(channel => {
            const channelCard = document.createElement('div');
            channelCard.className = 'channel-card';
            
            const channelIcon = document.createElement('div');
            channelIcon.className = 'channel-icon';
            channelIcon.innerHTML = `<i class="fab ${channel.icon}"></i>`;
            channelCard.appendChild(channelIcon);
            
            const channelInfo = document.createElement('div');
            channelInfo.className = 'channel-info';
            
            const channelName = document.createElement('h4');
            channelName.className = 'channel-name';
            channelName.textContent = channel.name;
            channelInfo.appendChild(channelName);
            
            const channelUrl = document.createElement('p');
            channelUrl.className = 'channel-url';
            channelUrl.textContent = channel.url;
            channelInfo.appendChild(channelUrl);
            
            channelCard.appendChild(channelInfo);
            channelsContainer.appendChild(channelCard);
        });
        
        youtubeSection.appendChild(channelsContainer);
        container.appendChild(youtubeSection);
        
        // Key lesson callout
        const lessonSection = document.createElement('div');
        lessonSection.className = 'lesson-section';
        
        const lessonBox = document.createElement('div');
        lessonBox.className = 'lesson-box';
        
        const lessonIcon = document.createElement('div');
        lessonIcon.className = 'lesson-icon';
        lessonIcon.innerHTML = '<i class="fas fa-lightbulb"></i>';
        lessonBox.appendChild(lessonIcon);
        
        const lessonContent = document.createElement('div');
        lessonContent.className = 'lesson-content';
        
        const lessonTitle = document.createElement('h4');
        lessonTitle.className = 'lesson-title';
        lessonTitle.textContent = 'Key Lesson:';
        lessonContent.appendChild(lessonTitle);
        
        const lessonText = document.createElement('p');
        lessonText.className = 'lesson-text';
        lessonText.innerHTML = '<strong>TLDR: "Before you write code make a plan"</strong>';
        lessonContent.appendChild(lessonText);
        
        lessonBox.appendChild(lessonContent);
        lessonSection.appendChild(lessonBox);
        container.appendChild(lessonSection);
        
        // Add CSS for this component
        const style = document.createElement('style');
        style.textContent = `
            .vibe-coding-container {
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
            
            .quote-section {
                margin-bottom: 2rem;
            }
            
            .quote-card {
                background-color: #e6edf7;
                border-radius: 0.5rem;
                padding: 1.5rem;
                display: flex;
                align-items: flex-start;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                border-left: 4px solid #0c4da2;
            }
            
            .twitter-icon {
                font-size: 1.5rem;
                color: #1DA1F2;
                margin-right: 1rem;
                flex-shrink: 0;
            }
            
            .quote-content {
                flex: 1;
            }
            
            .quote-text {
                margin: 0;
                font-size: 1rem;
                line-height: 1.5;
            }
            
            .definition-section {
                margin-bottom: 2rem;
            }
            
            .section-title {
                font-size: 1.5rem;
                font-weight: 700;
                color: #0c4da2;
                margin-top: 0;
                margin-bottom: 1rem;
            }
            
            .definition-text {
                font-size: 1rem;
                line-height: 1.5;
                margin-bottom: 1.5rem;
            }
            
            .tools-grid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
                gap: 1.5rem;
                margin-bottom: 1.5rem;
            }
            
            .tool-card {
                background-color: white;
                border-radius: 0.5rem;
                padding: 1.25rem;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                border: 1px solid #E4E7EB;
                text-align: center;
                transition: transform 0.2s ease-out;
            }
            
            .tool-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            }
            
            .tool-icon {
                font-size: 2rem;
                color: #0c4da2;
                margin-bottom: 1rem;
            }
            
            .tool-name {
                font-size: 1.125rem;
                font-weight: 600;
                margin: 0 0 0.5rem;
            }
            
            .tool-url {
                font-size: 0.875rem;
                color: #4A5568;
                margin: 0;
            }
            
            .youtube-section {
                margin-bottom: 2rem;
            }
            
            .channels-container {
                display: flex;
                gap: 1.5rem;
                flex-wrap: wrap;
            }
            
            .channel-card {
                background-color: white;
                border-radius: 0.5rem;
                padding: 1.25rem;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                border: 1px solid #E4E7EB;
                display: flex;
                align-items: center;
                flex: 1;
                min-width: 250px;
            }
            
            .channel-icon {
                font-size: 2rem;
                color: #FF0000;
                margin-right: 1rem;
            }
            
            .channel-info {
                flex: 1;
            }
            
            .channel-name {
                font-size: 1.125rem;
                font-weight: 600;
                margin: 0 0 0.25rem;
            }
            
            .channel-url {
                font-size: 0.875rem;
                color: #4A5568;
                margin: 0;
            }
            
            .lesson-section {
                margin-top: 2rem;
            }
            
            .lesson-box {
                background-color: #fef6e7;
                border-radius: 0.5rem;
                padding: 1.25rem;
                display: flex;
                border-left: 4px solid #dd6b20;
            }
            
            .lesson-icon {
                color: #dd6b20;
                font-size: 2rem;
                margin-right: 1rem;
                display: flex;
                align-items: center;
            }
            
            .lesson-content {
                flex: 1;
            }
            
            .lesson-title {
                font-size: 1.125rem;
                font-weight: 600;
                color: #323F4B;
                margin-top: 0;
                margin-bottom: 0.5rem;
            }
            
            .lesson-text {
                color: #4A5568;
                margin: 0;
                line-height: 1.5;
                font-size: 1.125rem;
            }
            
            @media (max-width: 768px) {
                .tools-grid {
                    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
                }
                
                .channels-container {
                    flex-direction: column;
                }
            }
        `;
        container.appendChild(style);
        
        return container;
    }
    
    initialize() {
        if (this.initialized) return;
        
        // Add any interactive elements or event listeners here
        
        this.initialized = true;
    }
    
    cleanup() {
        // Clean up any event listeners or resources
        
        this.initialized = false;
    }
}
