// Voice Agents Component
class VoiceAgentsComponent extends BaseComponent {
    constructor(slideData) {
        super(slideData);
        this.initialized = false;
    }
    
    createContent() {
        const container = document.createElement('div');
        container.className = 'voice-agents-container';
        
        // Title section with visual impact
        const titleSection = document.createElement('div');
        titleSection.className = 'title-section';
        
        const title = document.createElement('h2');
        title.className = 'slide-title';
        title.textContent = 'Next Level Agents Using Voice';
        titleSection.appendChild(title);
        
        container.appendChild(titleSection);
        
        // Introduction with visual emphasis
        const introSection = document.createElement('div');
        introSection.className = 'intro-section';
        
        const introCard = document.createElement('div');
        introCard.className = 'intro-card';
        
        const introIcon = document.createElement('div');
        introIcon.className = 'intro-icon';
        introIcon.innerHTML = '<i class="fas fa-microphone-alt"></i>';
        introCard.appendChild(introIcon);
        
        const introContent = document.createElement('div');
        introContent.className = 'intro-content';
        
        const introParagraph = document.createElement('p');
        introParagraph.className = 'intro-text';
        introParagraph.innerHTML = 'Voice is becoming an increasingly important interface for AI interaction. Next-level AI agents can use voice for more natural and efficient communication, enabling hands-free operation and more intuitive workflows.';
        introContent.appendChild(introParagraph);
        
        introCard.appendChild(introContent);
        introSection.appendChild(introCard);
        container.appendChild(introSection);
        
        // Voice Agent Demo with visual card
        const demoSection = document.createElement('div');
        demoSection.className = 'demo-section';
        
        const demoTitle = document.createElement('h3');
        demoTitle.className = 'section-title';
        demoTitle.textContent = 'Voice Agent Demonstration';
        demoSection.appendChild(demoTitle);
        
        const demoCard = document.createElement('div');
        demoCard.className = 'demo-card';
        
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
        demoCard.appendChild(videoContainer);
        
        const demoDescription = document.createElement('p');
        demoDescription.className = 'demo-description';
        demoDescription.textContent = 'This demonstration shows how voice agents can be used to handle complex tasks through natural conversation, from meeting transcription to interactive decision-making.';
        demoCard.appendChild(demoDescription);
        
        demoSection.appendChild(demoCard);
        container.appendChild(demoSection);
        
        // Voice Agent Benefits with visual cards
        const benefitsSection = document.createElement('div');
        benefitsSection.className = 'benefits-section';
        
        const benefitsTitle = document.createElement('h3');
        benefitsTitle.className = 'section-title';
        benefitsTitle.textContent = 'Benefits of Voice Agents';
        benefitsSection.appendChild(benefitsTitle);
        
        const benefitsGrid = document.createElement('div');
        benefitsGrid.className = 'benefits-grid';
        
        const benefits = [
            {
                icon: 'fa-tachometer-alt',
                title: 'Increased Efficiency',
                description: 'Speak 3x faster than you type, enabling quicker task completion'
            },
            {
                icon: 'fa-hands-free',
                title: 'Hands-free Operation',
                description: 'Multitask while interacting with AI systems'
            },
            {
                icon: 'fa-universal-access',
                title: 'Accessibility',
                description: 'Makes AI tools accessible to more users regardless of technical ability'
            },
            {
                icon: 'fa-brain',
                title: 'Natural Interaction',
                description: 'Conversation is our most intuitive form of communication'
            }
        ];
        
        benefits.forEach(benefit => {
            const benefitCard = document.createElement('div');
            benefitCard.className = 'benefit-card';
            
            const benefitIcon = document.createElement('div');
            benefitIcon.className = 'benefit-icon';
            benefitIcon.innerHTML = `<i class="fas ${benefit.icon}"></i>`;
            benefitCard.appendChild(benefitIcon);
            
            const benefitTitle = document.createElement('h4');
            benefitTitle.className = 'benefit-title';
            benefitTitle.textContent = benefit.title;
            benefitCard.appendChild(benefitTitle);
            
            const benefitDescription = document.createElement('p');
            benefitDescription.className = 'benefit-description';
            benefitDescription.textContent = benefit.description;
            benefitCard.appendChild(benefitDescription);
            
            benefitsGrid.appendChild(benefitCard);
        });
        
        benefitsSection.appendChild(benefitsGrid);
        container.appendChild(benefitsSection);
        
        // Applications in Risk with visual cards
        const applicationsSection = document.createElement('div');
        applicationsSection.className = 'applications-section';
        
        const applicationsTitle = document.createElement('h3');
        applicationsTitle.className = 'section-title';
        applicationsTitle.textContent = 'Potential Applications in Risk';
        applicationsSection.appendChild(applicationsTitle);
        
        const applicationsGrid = document.createElement('div');
        applicationsGrid.className = 'applications-grid';
        
        const applications = [
            {
                icon: 'fa-users',
                title: 'Meeting Assistant',
                description: 'Voice agent that joins meetings, takes notes, and creates action items automatically.'
            },
            {
                icon: 'fa-file-alt',
                title: 'Risk Documentation',
                description: 'Dictate risk assessments and have them formatted and categorized automatically.'
            },
            {
                icon: 'fa-check-circle',
                title: 'Approval Workflows',
                description: 'Voice-driven approval processes for credit limits and other risk decisions.'
            },
            {
                icon: 'fa-graduation-cap',
                title: 'Training & Onboarding',
                description: 'Interactive voice-based training for new team members on risk processes.'
            },
            {
                icon: 'fa-search',
                title: 'Voice-Driven Research',
                description: 'Ask questions about market data or regulations and get instant answers.'
            },
            {
                icon: 'fa-chart-line',
                title: 'Portfolio Analysis',
                description: 'Request and receive verbal summaries of portfolio performance and risk metrics.'
            }
        ];
        
        applications.forEach(app => {
            const appCard = document.createElement('div');
            appCard.className = 'application-card';
            
            const appIcon = document.createElement('div');
            appIcon.className = 'app-icon';
            appIcon.innerHTML = `<i class="fas ${app.icon}"></i>`;
            appCard.appendChild(appIcon);
            
            const appTitle = document.createElement('h4');
            appTitle.className = 'app-title';
            appTitle.textContent = app.title;
            appCard.appendChild(appTitle);
            
            const appDescription = document.createElement('p');
            appDescription.className = 'app-description';
            appDescription.textContent = app.description;
            appCard.appendChild(appDescription);
            
            applicationsGrid.appendChild(appCard);
        });
        
        applicationsSection.appendChild(applicationsGrid);
        container.appendChild(applicationsSection);
        
        // Implementation Steps with visual timeline
        const stepsSection = document.createElement('div');
        stepsSection.className = 'steps-section';
        
        const stepsTitle = document.createElement('h3');
        stepsTitle.className = 'section-title';
        stepsTitle.textContent = 'Implementation Steps';
        stepsSection.appendChild(stepsTitle);
        
        const stepsTimeline = document.createElement('div');
        stepsTimeline.className = 'steps-timeline';
        
        const steps = [
            {
                number: 1,
                title: 'Select a Voice API',
                description: 'Choose from OpenAI Whisper, Google Speech-to-Text, or other voice APIs'
            },
            {
                number: 2,
                title: 'Integrate with LLM',
                description: 'Connect voice input/output with your preferred LLM (Claude, GPT-4, etc.)'
            },
            {
                number: 3,
                title: 'Define Use Cases',
                description: 'Identify specific workflows that would benefit from voice interaction'
            },
            {
                number: 4,
                title: 'Prototype & Test',
                description: 'Build a simple prototype and gather user feedback'
            },
            {
                number: 5,
                title: 'Refine & Scale',
                description: 'Improve based on feedback and expand to more use cases'
            }
        ];
        
        steps.forEach(step => {
            const stepItem = document.createElement('div');
            stepItem.className = 'step-item';
            
            const stepNumber = document.createElement('div');
            stepNumber.className = 'step-number';
            stepNumber.textContent = step.number;
            stepItem.appendChild(stepNumber);
            
            const stepContent = document.createElement('div');
            stepContent.className = 'step-content';
            
            const stepTitle = document.createElement('h4');
            stepTitle.className = 'step-title';
            stepTitle.textContent = step.title;
            stepContent.appendChild(stepTitle);
            
            const stepDescription = document.createElement('p');
            stepDescription.className = 'step-description';
            stepDescription.textContent = step.description;
            stepContent.appendChild(stepDescription);
            
            stepItem.appendChild(stepContent);
            stepsTimeline.appendChild(stepItem);
        });
        
        stepsSection.appendChild(stepsTimeline);
        container.appendChild(stepsSection);
        
        // Add CSS for this component
        const style = document.createElement('style');
        style.textContent = `
            .voice-agents-container {
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
            
            .demo-section {
                margin-bottom: 2.5rem;
            }
            
            .demo-card {
                background-color: white;
                border-radius: 0.5rem;
                overflow: hidden;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                border: 1px solid #E4E7EB;
            }
            
            .video-container {
                position: relative;
                width: 100%;
                padding-top: 56.25%; /* 16:9 Aspect Ratio */
                background-color: #1F2933;
            }
            
            .video-overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .demo-image {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-size: cover;
                background-position: center;
            }
            
            .play-btn {
                position: absolute;
                width: 80px;
                height: 80px;
                border-radius: 50%;
                background-color: rgba(227, 25, 55, 0.9);
                color: white;
                border: none;
                font-size: 2rem;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                transition: transform 0.2s ease-out, background-color 0.2s ease-out;
                z-index: 10;
            }
            
            .play-btn:hover {
                transform: scale(1.1);
                background-color: rgba(227, 25, 55, 1);
            }
            
            .demo-description {
                padding: 1.5rem;
                font-size: 0.875rem;
                line-height: 1.6;
                color: #4A5568;
                margin: 0;
            }
            
            .benefits-section {
                margin-bottom: 2.5rem;
            }
            
            .benefits-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 1.5rem;
            }
            
            .benefit-card {
                background-color: white;
                border-radius: 0.5rem;
                padding: 1.5rem;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                border: 1px solid #E4E7EB;
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
                transition: transform 0.2s ease-out;
            }
            
            .benefit-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            
            .benefit-icon {
                width: 3rem;
                height: 3rem;
                border-radius: 50%;
                background-color: rgba(12, 77, 162, 0.1);
                color: #0c4da2;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.5rem;
                margin-bottom: 1rem;
            }
            
            .benefit-title {
                font-size: 1.125rem;
                font-weight: 600;
                color: #323F4B;
                margin: 0 0 0.75rem 0;
            }
            
            .benefit-description {
                font-size: 0.875rem;
                color: #4A5568;
                line-height: 1.5;
                margin: 0;
            }
            
            .applications-section {
                margin-bottom: 2.5rem;
            }
            
            .applications-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 1.5rem;
            }
            
            .application-card {
                background-color: white;
                border-radius: 0.5rem;
                padding: 1.5rem;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                border: 1px solid #E4E7EB;
                border-top: 3px solid #e31937;
                transition: transform 0.2s ease-out;
            }
            
            .application-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            
            .app-icon {
                font-size: 1.5rem;
                color: #e31937;
                margin-bottom: 1rem;
            }
            
            .app-title {
                font-size: 1.125rem;
                font-weight: 600;
                color: #323F4B;
                margin: 0 0 0.75rem 0;
            }
            
            .app-description {
                font-size: 0.875rem;
                color: #4A5568;
                line-height: 1.5;
                margin: 0;
            }
            
            .steps-section {
                margin-bottom: 1.5rem;
            }
            
            .steps-timeline {
                position: relative;
                padding-left: 3rem;
            }
            
            .steps-timeline:before {
                content: '';
                position: absolute;
                top: 0;
                left: 1.25rem;
                height: 100%;
                width: 2px;
                background-color: #E4E7EB;
            }
            
            .step-item {
                position: relative;
                margin-bottom: 2rem;
            }
            
            .step-item:last-child {
                margin-bottom: 0;
            }
            
            .step-number {
                position: absolute;
                left: -3rem;
                top: 0;
                width: 2.5rem;
                height: 2.5rem;
                border-radius: 50%;
                background-color: #0c4da2;
                color: white;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: 600;
                z-index: 1;
            }
            
            .step-content {
                background-color: white;
                border-radius: 0.5rem;
                padding: 1.5rem;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                border: 1px solid #E4E7EB;
            }
            
            .step-title {
                font-size: 1.125rem;
                font-weight: 600;
                color: #323F4B;
                margin: 0 0 0.5rem 0;
            }
            
            .step-description {
                font-size: 0.875rem;
                color: #4A5568;
                line-height: 1.5;
                margin: 0;
            }
            
            .video-playing {
                padding-top: 0;
                height: 450px;
            }
            
            @media (max-width: 768px) {
                .intro-card {
                    flex-direction: column;
                }
                
                .intro-icon {
                    margin-right: 0;
                    margin-bottom: 1rem;
                }
                
                .steps-timeline {
                    padding-left: 2.5rem;
                }
                
                .step-number {
                    left: -2.5rem;
                    width: 2rem;
                    height: 2rem;
                }
            }
        `;
        container.appendChild(style);
        
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
        
        // Add animation to the steps timeline
        const stepItems = document.querySelectorAll('.step-item');
        stepItems.forEach((item, index) => {
            // Add staggered entrance animation
            item.style.opacity = '0';
            item.style.transform = 'translateX(-20px)';
            
            setTimeout(() => {
                item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                item.style.opacity = '1';
                item.style.transform = 'translateX(0)';
            }, 200 * index);
        });
        
        this.initialized = true;
    }
    
    cleanup() {
        // Clean up event listeners
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
