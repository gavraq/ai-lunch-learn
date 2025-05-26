// Voice Agents Component
class VoiceAgentsComponent extends BaseComponent {
    constructor(slideData) {
        super(slideData);
        this.initialized = false;
    }

    createContent() {
        const container = document.createElement('div');
        
        // Introduction
        const intro = document.createElement('div');
        intro.className = 'intro mb-lg';
        
        const introText = document.createElement('p');
        introText.className = 'large-text';
        introText.innerHTML = 'Voice is becoming an increasingly important interface for AI interaction. Next-level AI agents can use voice for more natural and efficient communication.';
        intro.appendChild(introText);
        
        container.appendChild(intro);
        
        // Voice agent demo section
        const demoSection = document.createElement('div');
        demoSection.className = 'voice-agent-demo mb-lg';
        
        const demoTitle = document.createElement('h3');
        demoTitle.textContent = 'Voice Agent Demonstration';
        demoSection.appendChild(demoTitle);
        
        const videoContainer = document.createElement('div');
        videoContainer.className = 'video-container';
        
        const videoOverlay = document.createElement('div');
        videoOverlay.className = 'video-overlay';
        
        const demoImage = document.createElement('div');
        demoImage.className = 'demo-image';
        demoImage.style.backgroundImage = 'url("https://placehold.co/800x450/e6edf7/0c4da2?text=Voice+Agent+Demo")';
        videoOverlay.appendChild(demoImage);
        
        const playBtn = document.createElement('button');
        playBtn.className = 'play-btn';
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
        videoOverlay.appendChild(playBtn);
        
        videoContainer.appendChild(videoOverlay);
        demoSection.appendChild(videoContainer);
        
        const demoDescription = document.createElement('p');
        demoDescription.className = 'mt-md';
        demoDescription.textContent = 'This demonstration shows how voice agents can be used to handle complex tasks through natural conversation.';
        demoSection.appendChild(demoDescription);
        
        container.appendChild(demoSection);
        
        // Applications section
        const applicationsSection = document.createElement('div');
        applicationsSection.className = 'applications-section';
        
        const applicationsTitle = document.createElement('h3');
        applicationsTitle.textContent = 'Potential Applications in Risk';
        applicationsSection.appendChild(applicationsTitle);
        
        const applicationsGrid = document.createElement('div');
        applicationsGrid.className = 'applications-grid';
        
        // Application cards
        const applications = [
            {
                title: 'Meeting Assistant',
                icon: 'fas fa-users',
                description: 'Voice agent that joins meetings, takes notes, and creates action items automatically.'
            },
            {
                title: 'Risk Documentation',
                icon: 'fas fa-file-alt',
                description: 'Dictate risk assessments and have them formatted and categorized automatically.'
            },
            {
                title: 'Approval Workflows',
                icon: 'fas fa-check-circle',
                description: 'Voice-driven approval processes for credit limits and other risk decisions.'
            },
            {
                title: 'Training & Onboarding',
                icon: 'fas fa-graduation-cap',
                description: 'Interactive voice-based training for new team members on risk processes.'
            }
        ];
        
        applications.forEach(app => {
            const card = document.createElement('div');
            card.className = 'application-card';
            
            const iconContainer = document.createElement('div');
            iconContainer.className = 'app-icon';
            iconContainer.innerHTML = `<i class="${app.icon}"></i>`;
            card.appendChild(iconContainer);
            
            const cardTitle = document.createElement('h4');
            cardTitle.textContent = app.title;
            card.appendChild(cardTitle);
            
            const cardDesc = document.createElement('p');
            cardDesc.textContent = app.description;
            card.appendChild(cardDesc);
            
            applicationsGrid.appendChild(card);
        });
        
        applicationsSection.appendChild(applicationsGrid);
        container.appendChild(applicationsSection);
        
        return container;
    }

    initialize() {
        if (this.initialized) return;
        
        // Add functionality to the play demo button
        const playBtn = document.querySelector('.play-btn');
        const videoOverlay = document.querySelector('.video-overlay');
        const videoContainer = document.querySelector('.video-container');
        
        if (playBtn && videoOverlay && videoContainer) {
            playBtn.addEventListener('click', () => {
                // Replace the image with an embedded YouTube video
                videoOverlay.style.display = 'none';
                const demoImage = document.querySelector('.demo-image');
                if (demoImage) {
                    // Create an iframe for the YouTube video
                    const iframe = document.createElement('iframe');
                    iframe.width = '100%';
                    iframe.height = '100%';
                    iframe.src = 'https://www.youtube.com/embed/p3K51_CaQ0g?autoplay=1';
                    iframe.title = 'Voice Agent Demo';
                    iframe.frameBorder = '0';
                    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
                    iframe.allowFullscreen = true;
                    
                    // Replace the image with the iframe
                    demoImage.replaceWith(iframe);
                    
                    // Add a class to the video container to maintain aspect ratio
                    videoContainer.classList.add('video-playing');
                }
            });
        }
        
        // Add hover effects to application cards
        const applicationCards = document.querySelectorAll('.application-card');
        applicationCards.forEach(card => {
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
        
        this.initialized = true;
    }
    
    cleanup() {
        // Clean up any event listeners or resources when navigating away from this slide
        const playBtn = document.querySelector('.play-btn');
        if (playBtn) {
            playBtn.replaceWith(playBtn.cloneNode(true));
        }
        
        const applicationCards = document.querySelectorAll('.application-card');
        applicationCards.forEach(card => {
            card.replaceWith(card.cloneNode(true));
        });
        
        this.initialized = false;
    }
}
