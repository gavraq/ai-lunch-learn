/**
 * Introduction Main Component
 * This component displays the main introduction slide for the presentation
 */
class IntroMainComponent extends BaseComponent {
    constructor(slideData) {
        super(slideData);
        this.initialized = false;
        console.log('IntroMainComponent constructor called');
    }
    createContent() {
        const container = document.createElement('div');
        container.className = 'intro-main-container';
        container.style.cssText = 'max-width: 1200px; margin: 0 auto; text-align: center; padding: 2rem;';
        
        // Main title
        const title = document.createElement('h1');
        title.innerHTML = 'AI Lunch & Learn:';
        title.style.cssText = 'font-size: 2.5rem; font-weight: 700; color: #323F4B; margin-bottom: 1rem;';
        container.appendChild(title);
        
        // Subtitle
        const subtitle = document.createElement('h2');
        subtitle.innerHTML = 'From AI User to AI Manager';
        subtitle.style.cssText = 'font-size: 2rem; font-weight: 600; color: #0c4da2; margin-bottom: 2.5rem;';
        container.appendChild(subtitle);
        
        // Tagline
        const tagline = document.createElement('p');
        tagline.innerHTML = 'Positioning Ourselves for the AI Revolution';
        tagline.style.cssText = 'font-size: 1.25rem; font-weight: 500; color: #4A5568; margin-bottom: 3rem;';
        container.appendChild(tagline);
        
        // Create a card for the presenter info
        const presenterCard = document.createElement('div');
        presenterCard.className = 'presenter-card';
        presenterCard.style.cssText = `
            background: #FFFFFF;
            border-radius: 0.5rem;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
            padding: 1.5rem;
            max-width: 600px;
            margin: 0 auto 2rem auto;
            text-align: left;
            display: flex;
            align-items: center;
        `;
        
        // Presenter image placeholder
        const presenterImage = document.createElement('div');
        presenterImage.style.cssText = `
            width: 100px;
            height: 100px;
            border-radius: 50%;
            background-color: #e6edf7;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 1.5rem;
        `;
        
        const icon = document.createElement('i');
        icon.className = 'fas fa-user';
        icon.style.cssText = 'font-size: 2.5rem; color: #0c4da2;';
        presenterImage.appendChild(icon);
        
        // Presenter info
        const presenterInfo = document.createElement('div');
        presenterInfo.innerHTML = `
            <h3 style="font-size: 1.25rem; font-weight: 600; color: #323F4B; margin-bottom: 0.5rem;">Presented by:</h3>
            <p style="font-size: 1rem; color: #4A5568; margin-bottom: 0.25rem;">Gavin Slater</p>
            <p style="font-size: 0.875rem; color: #7B8794;">May 2025</p>
        `;
        
        presenterCard.appendChild(presenterImage);
        presenterCard.appendChild(presenterInfo);
        container.appendChild(presenterCard);
        
        // Key topics section
        const topicsSection = document.createElement('div');
        topicsSection.className = 'topics-section';
        topicsSection.style.cssText = 'margin-top: 2rem;';
        
        const topicsTitle = document.createElement('h3');
        topicsTitle.innerHTML = 'Key Topics';
        topicsTitle.style.cssText = 'font-size: 1.5rem; font-weight: 600; color: #323F4B; margin-bottom: 1.5rem; text-align: center;';
        topicsSection.appendChild(topicsTitle);
        
        // Topics grid
        const topicsGrid = document.createElement('div');
        topicsGrid.style.cssText = 'display: flex; flex-wrap: wrap; gap: 1.5rem; justify-content: center;';
        
        const topics = [
            { title: 'AI Prompting', icon: 'fa-comment-dots', color: '#0c4da2' },
            { title: 'Prototyping with AI', icon: 'fa-code', color: '#38B2AC' },
            { title: 'Institutional Memory', icon: 'fa-database', color: '#0c4da2' },
            { title: 'Voice Agents', icon: 'fa-microphone', color: '#e31937' },
            { title: 'Agent Orchestration', icon: 'fa-robot', color: '#38B2AC' }
        ];
        
        topics.forEach(topic => {
            const topicCard = document.createElement('div');
            topicCard.style.cssText = `
                background-color: #FFFFFF;
                border-radius: 0.5rem;
                box-shadow: 0 1px 3px rgba(0,0,0,0.1);
                padding: 1.5rem;
                width: 180px;
                text-align: center;
            `;
            
            const topicIcon = document.createElement('div');
            topicIcon.style.cssText = `
                width: 3rem;
                height: 3rem;
                background-color: #F5F7FA;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 auto 1rem auto;
            `;
            
            const icon = document.createElement('i');
            icon.className = `fas ${topic.icon}`;
            icon.style.cssText = `color: ${topic.color}; font-size: 1.25rem;`;
            topicIcon.appendChild(icon);
            
            const topicTitle = document.createElement('div');
            topicTitle.textContent = topic.title;
            topicTitle.style.cssText = 'font-size: 1rem; font-weight: 600; color: #323F4B;';
            
            topicCard.appendChild(topicIcon);
            topicCard.appendChild(topicTitle);
            topicsGrid.appendChild(topicCard);
        });
        
        topicsSection.appendChild(topicsGrid);
        container.appendChild(topicsSection);
        
        return container;
    }
    
    initialize() {
        if (this.initialized) return;
        console.log('IntroMainComponent initialized');
        this.initialized = true;
    }
    
    cleanup() {
        console.log('IntroMainComponent cleanup');
        this.initialized = false;
    }
}
