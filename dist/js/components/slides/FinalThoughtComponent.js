// Final Thought Component
class FinalThoughtComponent extends BaseComponent {
    constructor(slideData) {
        super(slideData);
        this.initialized = false;
    }
    
    createContent() {
        const container = document.createElement('div');
        container.className = 'final-thought-container';
        
        // Title section with visual impact
        const titleSection = document.createElement('div');
        titleSection.className = 'title-section';
        
        const title = document.createElement('h2');
        title.className = 'slide-title';
        title.textContent = 'Final Thought';
        titleSection.appendChild(title);
        
        container.appendChild(titleSection);
        
        // Main message with visual emphasis
        const messageSection = document.createElement('div');
        messageSection.className = 'message-section';
        
        const quoteCard = document.createElement('div');
        quoteCard.className = 'quote-card';
        
        const quote = document.createElement('blockquote');
        quote.className = 'quote';
        quote.innerHTML = '<p>"We are still very early in the AI Revolution but this is changing rapidly"</p>';
        quoteCard.appendChild(quote);
        
        messageSection.appendChild(quoteCard);
        container.appendChild(messageSection);
        
        // Visual timeline of AI progress
        const timelineSection = document.createElement('div');
        timelineSection.className = 'timeline-section';
        
        const timelineTitle = document.createElement('h3');
        timelineTitle.className = 'section-title';
        timelineTitle.textContent = 'The Accelerating Pace of AI';
        timelineSection.appendChild(timelineTitle);
        
        const timeline = document.createElement('div');
        timeline.className = 'timeline';
        
        const timelineEvents = [
            {
                year: '2017',
                title: 'Transformer Architecture',
                description: 'Introduction of the transformer architecture that would revolutionize NLP'
            },
            {
                year: '2020',
                title: 'GPT-3',
                description: 'First large language model to demonstrate impressive capabilities'
            },
            {
                year: '2022',
                title: 'ChatGPT',
                description: 'Conversational AI becomes mainstream with millions of users'
            },
            {
                year: '2023',
                title: 'Multimodal Models',
                description: 'Models that can process text, images, audio, and video together'
            },
            {
                year: '2024',
                title: 'Agent Orchestration',
                description: 'Multiple specialized AI agents working together on complex tasks'
            },
            {
                year: '2025',
                title: 'What\'s Next?',
                description: 'The future is being written now - you can help shape it'
            }
        ];
        
        timelineEvents.forEach((event, index) => {
            const timelineItem = document.createElement('div');
            timelineItem.className = 'timeline-item';
            
            const timelineMarker = document.createElement('div');
            timelineMarker.className = 'timeline-marker';
            
            const markerYear = document.createElement('div');
            markerYear.className = 'marker-year';
            markerYear.textContent = event.year;
            timelineMarker.appendChild(markerYear);
            
            timelineItem.appendChild(timelineMarker);
            
            const timelineContent = document.createElement('div');
            timelineContent.className = 'timeline-content';
            
            const eventTitle = document.createElement('h4');
            eventTitle.className = 'event-title';
            eventTitle.textContent = event.title;
            timelineContent.appendChild(eventTitle);
            
            const eventDescription = document.createElement('p');
            eventDescription.className = 'event-description';
            eventDescription.textContent = event.description;
            timelineContent.appendChild(eventDescription);
            
            timelineItem.appendChild(timelineContent);
            timeline.appendChild(timelineItem);
        });
        
        timelineSection.appendChild(timeline);
        container.appendChild(timelineSection);
        
        // Final message with visual card
        const finalSection = document.createElement('div');
        finalSection.className = 'final-section';
        
        const finalCard = document.createElement('div');
        finalCard.className = 'final-card';
        
        const finalMessage = document.createElement('p');
        finalMessage.className = 'final-message';
        finalMessage.innerHTML = 'The future belongs to those who can effectively harness AI as a tool, not those who resist it. ' +
            'Start small, experiment often, and build your AI literacy every day.';
        finalCard.appendChild(finalMessage);
        
        finalSection.appendChild(finalCard);
        container.appendChild(finalSection);
        
        // Call to action with visual design
        const ctaSection = document.createElement('div');
        ctaSection.className = 'cta-section';
        
        const ctaTitle = document.createElement('h3');
        ctaTitle.className = 'section-title';
        ctaTitle.textContent = 'Your Next Steps';
        ctaSection.appendChild(ctaTitle);
        
        const ctaCard = document.createElement('div');
        ctaCard.className = 'cta-card';
        
        const ctaList = document.createElement('ul');
        ctaList.className = 'cta-list';
        
        const ctaItems = [
            {
                text: 'Choose one AI tool and use it daily for a week',
                icon: 'fa-calendar-check'
            },
            {
                text: 'Join the AI community of practice',
                icon: 'fa-users'
            },
            {
                text: 'Share what you learn with your team',
                icon: 'fa-share-alt'
            },
            {
                text: 'Look for one process you can enhance with AI',
                icon: 'fa-cogs'
            },
            {
                text: 'Remember: The goal is augmentation, not replacement',
                icon: 'fa-robot'
            }
        ];
        
        ctaItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.className = 'cta-item';
            
            const itemIcon = document.createElement('div');
            itemIcon.className = 'item-icon';
            itemIcon.innerHTML = `<i class="fas ${item.icon}"></i>`;
            listItem.appendChild(itemIcon);
            
            const itemText = document.createElement('div');
            itemText.className = 'item-text';
            itemText.textContent = item.text;
            listItem.appendChild(itemText);
            
            ctaList.appendChild(listItem);
        });
        
        ctaCard.appendChild(ctaList);
        ctaSection.appendChild(ctaCard);
        container.appendChild(ctaSection);
        
        // Thank you message
        const thankYouSection = document.createElement('div');
        thankYouSection.className = 'thank-you-section';
        
        const thankYouMessage = document.createElement('p');
        thankYouMessage.className = 'thank-you-message';
        thankYouMessage.innerHTML = 'Thank you for joining this AI Lunch & Learn session!';
        thankYouSection.appendChild(thankYouMessage);
        
        container.appendChild(thankYouSection);
        
        // Add CSS for this component
        const style = document.createElement('style');
        style.textContent = `
            .final-thought-container {
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
            
            .message-section {
                margin-bottom: 2.5rem;
                text-align: center;
            }
            
            .quote-card {
                background-color: #f8fafc;
                border-radius: 0.5rem;
                padding: 2rem;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                display: inline-block;
                max-width: 80%;
            }
            
            .quote {
                position: relative;
                font-style: italic;
                margin: 0;
                padding: 0 2rem;
            }
            
            .quote:before,
            .quote:after {
                position: absolute;
                font-size: 3rem;
                color: #0c4da2;
                opacity: 0.2;
                line-height: 1;
            }
            
            .quote:before {
                content: '"';
                left: 0;
                top: -0.5rem;
            }
            
            .quote:after {
                content: '"';
                right: 0;
                bottom: -1.5rem;
            }
            
            .quote p {
                font-size: 1.5rem;
                line-height: 1.6;
                color: #323F4B;
                margin: 0;
                font-weight: 600;
            }
            
            .timeline-section {
                margin-bottom: 2.5rem;
            }
            
            .timeline {
                position: relative;
                padding: 2rem 0;
            }
            
            .timeline:before {
                content: '';
                position: absolute;
                top: 0;
                left: 50px;
                height: 100%;
                width: 4px;
                background-color: #0c4da2;
                border-radius: 2px;
            }
            
            .timeline-item {
                position: relative;
                padding-left: 100px;
                margin-bottom: 2rem;
            }
            
            .timeline-item:last-child {
                margin-bottom: 0;
            }
            
            .timeline-marker {
                position: absolute;
                left: 0;
                top: 0;
                width: 100px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .marker-year {
                width: 60px;
                height: 60px;
                border-radius: 50%;
                background-color: #0c4da2;
                color: white;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: 700;
                font-size: 1rem;
                z-index: 10;
            }
            
            .timeline-content {
                background-color: white;
                border-radius: 0.5rem;
                padding: 1.5rem;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                border: 1px solid #E4E7EB;
                border-left: 4px solid #e31937;
            }
            
            .event-title {
                font-size: 1.25rem;
                font-weight: 700;
                color: #323F4B;
                margin: 0 0 0.5rem 0;
            }
            
            .event-description {
                font-size: 0.875rem;
                color: #4A5568;
                margin: 0;
                line-height: 1.5;
            }
            
            .final-section {
                margin-bottom: 2.5rem;
                text-align: center;
            }
            
            .final-card {
                background-color: #0c4da2;
                border-radius: 0.5rem;
                padding: 2rem;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
            }
            
            .final-message {
                font-size: 1.25rem;
                line-height: 1.6;
                color: white;
                margin: 0;
                font-weight: 500;
            }
            
            .cta-section {
                margin-bottom: 2.5rem;
            }
            
            .cta-card {
                background-color: #f8fafc;
                border-radius: 0.5rem;
                padding: 1.5rem;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                border: 1px solid #E4E7EB;
            }
            
            .cta-list {
                list-style: none;
                padding: 0;
                margin: 0;
            }
            
            .cta-item {
                display: flex;
                align-items: center;
                margin-bottom: 1rem;
                padding: 0.75rem;
                background-color: white;
                border-radius: 0.5rem;
                box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
                transition: transform 0.2s ease-out;
            }
            
            .cta-item:last-child {
                margin-bottom: 0;
            }
            
            .cta-item:hover {
                transform: translateX(5px);
            }
            
            .item-icon {
                width: 3rem;
                height: 3rem;
                border-radius: 50%;
                background-color: rgba(12, 77, 162, 0.1);
                color: #0c4da2;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.25rem;
                margin-right: 1rem;
                flex-shrink: 0;
            }
            
            .item-text {
                font-size: 1rem;
                color: #323F4B;
                font-weight: 500;
            }
            
            .thank-you-section {
                text-align: center;
                margin-bottom: 1rem;
            }
            
            .thank-you-message {
                font-size: 1.25rem;
                color: #323F4B;
                font-weight: 600;
                margin: 0;
            }
            
            @media (max-width: 768px) {
                .quote-card {
                    max-width: 100%;
                    padding: 1.5rem;
                }
                
                .quote p {
                    font-size: 1.25rem;
                }
                
                .timeline:before {
                    left: 30px;
                }
                
                .timeline-item {
                    padding-left: 60px;
                }
                
                .timeline-marker {
                    width: 60px;
                }
                
                .marker-year {
                    width: 40px;
                    height: 40px;
                    font-size: 0.875rem;
                }
                
                .final-message {
                    font-size: 1rem;
                }
            }
        `;
        container.appendChild(style);
        
        return container;
    }
    
    initialize() {
        if (this.initialized) return;
        
        // Add animation to timeline items
        const timelineItems = document.querySelectorAll('.timeline-item');
        timelineItems.forEach((item, index) => {
            // Add staggered entrance animation
            item.style.opacity = '0';
            item.style.transform = 'translateX(-20px)';
            
            setTimeout(() => {
                item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                item.style.opacity = '1';
                item.style.transform = 'translateX(0)';
            }, 200 * index);
        });
        
        // Add hover effect to CTA items
        const ctaItems = document.querySelectorAll('.cta-item');
        ctaItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                item.style.backgroundColor = '#EBF8FF';
                item.style.transform = 'translateX(5px)';
                item.style.transition = 'all 0.3s ease';
            });
            
            item.addEventListener('mouseleave', () => {
                item.style.backgroundColor = 'white';
                item.style.transform = 'translateX(0)';
            });
        });
        
        this.initialized = true;
    }
    
    cleanup() {
        // Clean up event listeners
        const ctaItems = document.querySelectorAll('.cta-item');
        ctaItems.forEach(item => {
            item.replaceWith(item.cloneNode(true));
        });
        
        this.initialized = false;
    }
}
