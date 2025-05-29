// Prototyping Attempts Component
class PrototypingAttemptsComponent extends BaseComponent {
    constructor(slideData) {
        super(slideData);
        this.initialized = false;
    }
    
    createContent() {
        const container = document.createElement('div');
        container.className = 'prototyping-attempts-container';
        
        // Title with visual emphasis
        const titleSection = document.createElement('div');
        titleSection.className = 'title-section';
        
        const title = document.createElement('h2');
        title.className = 'slide-title';
        title.textContent = 'My Three Prototyping Attempts and Lessons Learned';
        titleSection.appendChild(title);
        
        container.appendChild(titleSection);
        
        // Journey visualization with timeline
        const timelineContainer = document.createElement('div');
        timelineContainer.className = 'timeline-container';
        
        // Create the three attempts as cards with timeline visualization
        const attemptsContainer = document.createElement('div');
        attemptsContainer.className = 'attempts-container';
        
        // Attempt details
        const attempts = [
            {
                number: 1,
                title: 'Attempt 1: "Diving In"',
                icon: 'fa-exclamation-triangle',
                items: [
                    'Took Product Requirements Document plugged into Claude',
                    'Started coding immediately',
                    'No clear architecture',
                    'Result: Spaghetti code that didn\'t work'
                ],
                lesson: 'AI can code, but it needs direction',
                status: 'failure',
                color: '#e53e3e'
            },
            {
                number: 2,
                title: 'Attempt 2: "Better Planning, But..."',
                icon: 'fa-exclamation-circle',
                items: [
                    'Created basic design documents',
                    'Halfway through: "Let\'s change the database!"',
                    'Result: Frankenstein system'
                ],
                lesson: 'Changing fundamental design mid-flight = disaster',
                status: 'warning',
                color: '#F6AD55'
            },
            {
                number: 3,
                title: 'Attempt 3: "AI as My Architect"',
                icon: 'fa-check-circle',
                items: [
                    'Comprehensive planning phase (reference Sean Kochel method)',
                    'Detailed architecture BEFORE coding',
                    'AI helped design, then build',
                    'Result: Working prototype in days, not months'
                ],
                lesson: 'Planning first, then execution',
                status: 'success',
                color: '#38B2AC'
            }
        ];
        
        attempts.forEach((attempt, index) => {
            // Create attempt card with enhanced visual design
            const attemptCard = document.createElement('div');
            attemptCard.className = `attempt-card attempt-${attempt.number} ${attempt.status}-card`;
            
            // Card header with number and title
            const cardHeader = document.createElement('div');
            cardHeader.className = 'card-header';
            
            const attemptNumber = document.createElement('div');
            attemptNumber.className = 'attempt-number';
            attemptNumber.style.backgroundColor = attempt.color;
            attemptNumber.textContent = attempt.number;
            cardHeader.appendChild(attemptNumber);
            
            const headerContent = document.createElement('div');
            headerContent.className = 'header-content';
            
            const attemptTitle = document.createElement('h3');
            attemptTitle.className = 'attempt-title';
            attemptTitle.textContent = attempt.title;
            headerContent.appendChild(attemptTitle);
            
            cardHeader.appendChild(headerContent);
            attemptCard.appendChild(cardHeader);
            
            // Card body with list items
            const cardBody = document.createElement('div');
            cardBody.className = 'card-body';
            
            const itemsList = document.createElement('ul');
            itemsList.className = 'items-list';
            
            attempt.items.forEach(item => {
                const listItem = document.createElement('li');
                listItem.textContent = item;
                itemsList.appendChild(listItem);
            });
            
            cardBody.appendChild(itemsList);
            attemptCard.appendChild(cardBody);
            
            // Card footer with lesson
            const cardFooter = document.createElement('div');
            cardFooter.className = 'card-footer';
            
            const lessonBadge = document.createElement('div');
            lessonBadge.className = `lesson-badge ${attempt.status}-badge`;
            
            const lessonIcon = document.createElement('i');
            lessonIcon.className = `fas ${attempt.icon}`;
            lessonBadge.appendChild(lessonIcon);
            
            const lessonText = document.createElement('span');
            lessonText.className = 'lesson-text';
            lessonText.textContent = `Lesson: ${attempt.lesson}`;
            lessonBadge.appendChild(lessonText);
            
            cardFooter.appendChild(lessonBadge);
            attemptCard.appendChild(cardFooter);
            
            // Add timeline connector if not the last card
            if (index < attempts.length - 1) {
                const connector = document.createElement('div');
                connector.className = 'timeline-connector';
                attemptCard.appendChild(connector);
            }
            
            attemptsContainer.appendChild(attemptCard);
        });
        
        timelineContainer.appendChild(attemptsContainer);
        container.appendChild(timelineContainer);
        
        // Key takeaway with visual emphasis
        const keyTakeaway = document.createElement('div');
        keyTakeaway.className = 'key-takeaway';
        
        const takeawayCard = document.createElement('div');
        takeawayCard.className = 'takeaway-card';
        
        const takeawayIcon = document.createElement('div');
        takeawayIcon.className = 'takeaway-icon';
        takeawayIcon.innerHTML = '<i class="fas fa-lightbulb"></i>';
        takeawayCard.appendChild(takeawayIcon);
        
        const takeawayContent = document.createElement('div');
        takeawayContent.className = 'takeaway-content';
        
        const takeawayTitle = document.createElement('h3');
        takeawayTitle.className = 'takeaway-title';
        takeawayTitle.textContent = 'Key Takeaway:';
        takeawayContent.appendChild(takeawayTitle);
        
        const takeawayQuote = document.createElement('p');
        takeawayQuote.className = 'takeaway-quote';
        takeawayQuote.innerHTML = '<strong>"75% of real software application development is done during the planning phase"</strong>';
        takeawayContent.appendChild(takeawayQuote);
        
        takeawayCard.appendChild(takeawayContent);
        keyTakeaway.appendChild(takeawayCard);
        
        container.appendChild(keyTakeaway);
        
        // Add CSS for this component
        const style = document.createElement('style');
        style.textContent = `
            .prototyping-attempts-container {
                max-width: 1200px;
                margin: 0 auto;
                padding: 1.5rem;
                font-family: 'Inter', sans-serif;
                color: #323F4B;
            }
            
            .title-section {
                margin-bottom: 2.5rem;
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
            
            .timeline-container {
                position: relative;
                margin: 3rem 0;
            }
            
            .attempts-container {
                display: flex;
                flex-direction: column;
                gap: 2.5rem;
                position: relative;
                max-width: 900px;
                margin: 0 auto;
            }
            
            .attempt-card {
                background-color: white;
                border-radius: 0.5rem;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                border: 1px solid #E4E7EB;
                overflow: hidden;
                position: relative;
                transition: transform 0.2s ease-out, box-shadow 0.2s ease-out;
            }
            
            .attempt-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            }
            
            .card-header {
                padding: 1.25rem;
                display: flex;
                align-items: center;
                border-bottom: 1px solid #E4E7EB;
                background-color: #F5F7FA;
            }
            
            .attempt-number {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: 700;
                font-size: 1.25rem;
                color: white;
                margin-right: 1rem;
                flex-shrink: 0;
            }
            
            .header-content {
                flex: 1;
            }
            
            .attempt-title {
                font-size: 1.25rem;
                font-weight: 600;
                margin: 0;
                color: #323F4B;
            }
            
            .card-body {
                padding: 1.25rem;
            }
            
            .items-list {
                margin: 0;
                padding-left: 1.5rem;
            }
            
            .items-list li {
                margin-bottom: 0.75rem;
                color: #4A5568;
                line-height: 1.5;
            }
            
            .items-list li:last-child {
                margin-bottom: 0;
            }
            
            .card-footer {
                padding: 1rem 1.25rem;
                background-color: #F5F7FA;
                border-top: 1px solid #E4E7EB;
            }
            
            .lesson-badge {
                display: inline-flex;
                align-items: center;
                padding: 0.5rem 0.75rem;
                border-radius: 9999px;
                font-weight: 500;
                font-size: 0.875rem;
            }
            
            .lesson-badge i {
                margin-right: 0.5rem;
            }
            
            .failure-badge {
                background-color: #fee2e2;
                color: #b91c1c;
            }
            
            .warning-badge {
                background-color: #fef3c7;
                color: #92400e;
            }
            
            .success-badge {
                background-color: #d1fae5;
                color: #065f46;
            }
            
            .timeline-connector {
                position: absolute;
                left: 50%;
                bottom: -2.5rem;
                transform: translateX(-50%);
                width: 2px;
                height: 2.5rem;
                background-color: #CBD2D9;
                z-index: -1;
            }
            
            .timeline-connector:after {
                content: '';
                position: absolute;
                bottom: -8px;
                left: 50%;
                transform: translateX(-50%);
                width: 12px;
                height: 12px;
                border-radius: 50%;
                background-color: #CBD2D9;
            }
            
            .key-takeaway {
                margin-top: 3rem;
            }
            
            .takeaway-card {
                background-color: #e6edf7;
                border-radius: 0.5rem;
                padding: 1.5rem;
                display: flex;
                align-items: center;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                border-left: 4px solid #0c4da2;
            }
            
            .takeaway-icon {
                font-size: 2.5rem;
                color: #0c4da2;
                margin-right: 1.5rem;
                flex-shrink: 0;
            }
            
            .takeaway-content {
                flex: 1;
            }
            
            .takeaway-title {
                font-size: 1.25rem;
                font-weight: 600;
                color: #323F4B;
                margin-top: 0;
                margin-bottom: 0.5rem;
            }
            
            .takeaway-quote {
                font-size: 1.25rem;
                color: #323F4B;
                margin: 0;
                line-height: 1.5;
            }
            
            @media (max-width: 768px) {
                .attempts-container {
                    gap: 2rem;
                }
                
                .timeline-connector {
                    height: 2rem;
                    bottom: -2rem;
                }
                
                .takeaway-card {
                    flex-direction: column;
                    text-align: center;
                }
                
                .takeaway-icon {
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
        // Add any interactive elements or event listeners here
        this.initialized = true;
    }

    cleanup() {
        // Clean up event listeners
        this.initialized = false;
    }
}
