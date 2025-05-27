// Main presentation functionality
document.addEventListener('DOMContentLoaded', () => {
    // Initialize presentation
    const presentation = new Presentation();
    presentation.init();
});

class Presentation {
    constructor() {
        this.currentSectionIndex = 0;
        this.currentSlideIndex = 0;
        this.slideContainer = document.getElementById('slide-container');
        this.navContainer = document.getElementById('section-nav');
        this.progressIndicator = document.getElementById('progress-indicator');
        this.prevBtn = document.getElementById('prev-btn');
        this.nextBtn = document.getElementById('next-btn');
        this.currentPollIndex = 0;
        this.currentComponent = null;
    }

    init() {
        this.renderNavigation();
        this.bindEvents();
        this.showSlide(0, 0);
    }

    renderNavigation() {
        // Create navigation items for each section
        presentationConfig.sections.forEach((section, index) => {
            const navItem = document.createElement('div');
            navItem.className = 'nav-item';
            navItem.textContent = section.title;
            navItem.dataset.sectionIndex = index;
            
            if (index === this.currentSectionIndex) {
                navItem.classList.add('active');
            }
            
            navItem.addEventListener('click', () => {
                this.showSlide(index, 0);
            });
            
            this.navContainer.appendChild(navItem);
        });
    }

    bindEvents() {
        // Navigation buttons
        this.prevBtn.addEventListener('click', () => this.navigateToPrevious());
        this.nextBtn.addEventListener('click', () => this.navigateToNext());
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight') {
                this.navigateToNext();
            } else if (e.key === 'ArrowLeft') {
                this.navigateToPrevious();
            }
        });
    }

    showSlide(sectionIndex, slideIndex) {
        // Clean up previous component if exists
        if (this.currentComponent && typeof this.currentComponent.cleanup === 'function') {
            this.currentComponent.cleanup();
        }
        
        // Update indices
        this.currentSectionIndex = sectionIndex;
        this.currentSlideIndex = slideIndex;
        
        // Update navigation
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach((item, index) => {
            if (index === sectionIndex) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
        
        // Get current section and slide
        const currentSection = presentationConfig.sections[sectionIndex];
        const currentSlide = currentSection.slides[slideIndex];
        
        // Update slide content
        this.slideContainer.innerHTML = '';
        const slideElement = document.createElement('div');
        slideElement.className = 'slide active';
        slideElement.id = `slide-${currentSlide.id}`;
        
        // Add slide title
        const titleElement = document.createElement('h1');
        titleElement.textContent = currentSlide.title;
        slideElement.appendChild(titleElement);
        
        // Add slide content
        const contentElement = document.createElement('div');
        contentElement.className = 'slide-content';
        
        // Check if this slide has a component
        if (currentSlide.component) {
            console.log('Looking for component:', currentSlide.component);
            console.log('Available components in window:', Object.keys(window).filter(key => key.includes('Component')));
            console.log('Is IntroMainComponent defined in window?', window.IntroMainComponent !== undefined);
            console.log('Component registry contains:', window.componentRegistry ? window.componentRegistry.getComponentNames() : 'Registry not available');
            
            try {
                // Use the component registry to get the component
                if (window.componentRegistry && typeof window.componentRegistry.get === 'function') {
                    console.log('Attempting to get component from registry:', currentSlide.component);
                    this.currentComponent = window.componentRegistry.get(currentSlide.component, currentSlide);
                    
                    if (this.currentComponent) {
                        console.log('Component loaded successfully:', currentSlide.component);
                        console.log('Component type:', this.currentComponent.constructor.name);
                    } else {
                        // If component not found in registry, use PlaceholderComponent
                        console.log('Component not found in registry, using PlaceholderComponent for:', currentSlide.component);
                        this.currentComponent = new PlaceholderComponent(currentSlide);
                    }
                } else {
                    console.error('Component registry not available');
                    this.currentComponent = new PlaceholderComponent(currentSlide);
                }
                
                // Render the component if we have one
                if (this.currentComponent) {
                    // All components should now extend BaseComponent and have a render method
                    console.log('About to render component:', currentSlide.component);
                    console.log('Component methods:', Object.getOwnPropertyNames(Object.getPrototypeOf(this.currentComponent)));
                    const rendered = this.currentComponent.render();
                    console.log('Rendered content:', rendered.substring(0, 100) + '...');
                    contentElement.innerHTML = rendered;
                    console.log('Component rendered');
                    
                    // Initialize the component after adding to DOM
                    setTimeout(() => {
                        if (typeof this.currentComponent.initialize === 'function') {
                            this.currentComponent.initialize();
                            console.log('Component initialized');
                        }
                    }, 100);
                } else {
                    console.error('No component created for:', currentSlide.component);
                    contentElement.innerHTML = currentSlide.content || 'Component could not be created';
                }
            } catch (error) {
                console.error('Error creating component:', error);
                contentElement.innerHTML = currentSlide.content || 'Error creating component';
            }
        } else {
            // Use regular content if no component specified
            contentElement.innerHTML = currentSlide.content || '';
        }
        
        slideElement.appendChild(contentElement);
        this.slideContainer.appendChild(slideElement);
        
        // Update progress indicator
        this.updateProgressIndicator();
        
        // Update button states
        this.updateButtonStates();
        
        // Initialize slide-specific interactions for legacy slides
        this.initSlideInteractions(currentSlide.id);
    }

    updateProgressIndicator() {
        this.progressIndicator.innerHTML = '';
        
        const currentSection = presentationConfig.sections[this.currentSectionIndex];
        
        currentSection.slides.forEach((slide, index) => {
            const dot = document.createElement('div');
            dot.className = 'progress-dot';
            if (index === this.currentSlideIndex) {
                dot.classList.add('active');
            }
            
            dot.addEventListener('click', () => {
                this.showSlide(this.currentSectionIndex, index);
            });
            
            this.progressIndicator.appendChild(dot);
        });
    }

    updateButtonStates() {
        // Check if we're at the first slide of the first section
        const isFirstSlide = this.currentSectionIndex === 0 && this.currentSlideIndex === 0;
        this.prevBtn.disabled = isFirstSlide;
        
        // Check if we're at the last slide of the last section
        const lastSectionIndex = presentationConfig.sections.length - 1;
        const lastSection = presentationConfig.sections[lastSectionIndex];
        const lastSlideIndex = lastSection.slides.length - 1;
        const isLastSlide = this.currentSectionIndex === lastSectionIndex && this.currentSlideIndex === lastSlideIndex;
        this.nextBtn.disabled = isLastSlide;
    }

    navigateToNext() {
        const currentSection = presentationConfig.sections[this.currentSectionIndex];
        
        if (this.currentSlideIndex < currentSection.slides.length - 1) {
            // Move to next slide in current section
            this.showSlide(this.currentSectionIndex, this.currentSlideIndex + 1);
        } else if (this.currentSectionIndex < presentationConfig.sections.length - 1) {
            // Move to first slide of next section
            this.showSlide(this.currentSectionIndex + 1, 0);
        }
    }

    navigateToPrevious() {
        if (this.currentSlideIndex > 0) {
            // Move to previous slide in current section
            this.showSlide(this.currentSectionIndex, this.currentSlideIndex - 1);
        } else if (this.currentSectionIndex > 0) {
            // Move to last slide of previous section
            const prevSection = presentationConfig.sections[this.currentSectionIndex - 1];
            this.showSlide(this.currentSectionIndex - 1, prevSection.slides.length - 1);
        }
    }

    initSlideInteractions(slideId) {
        // Initialize slide-specific interactions
        switch (slideId) {
            case 'poll':
                this.initPollInteractions();
                break;
            case 'superwhisper':
                this.initSuperwhisperInteractions();
                break;
            // Add more slide-specific interactions as needed
        }
    }

    initPollInteractions() {
        // Initialize poll functionality
        this.showPoll(0);
        
        // Bind poll navigation buttons
        const prevPollBtn = document.getElementById('prev-poll-btn');
        const nextPollBtn = document.getElementById('next-poll-btn');
        
        if (prevPollBtn && nextPollBtn) {
            prevPollBtn.addEventListener('click', () => this.showPoll(this.currentPollIndex - 1));
            nextPollBtn.addEventListener('click', () => this.showPoll(this.currentPollIndex + 1));
        }
    }

    showPoll(index) {
        if (index < 0 || index >= pollData.length) {
            return;
        }
        
        this.currentPollIndex = index;
        const pollContainer = document.getElementById('active-poll');
        if (!pollContainer) return;
        
        pollContainer.innerHTML = '';
        
        const poll = pollData[index];
        
        // Create question
        const question = document.createElement('div');
        question.className = 'poll-question';
        question.textContent = poll.question;
        pollContainer.appendChild(question);
        
        // Create options
        const options = document.createElement('div');
        options.className = 'poll-options';
        
        poll.options.forEach((option, optionIndex) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'poll-option';
            optionElement.textContent = option;
            optionElement.addEventListener('click', () => this.selectPollOption(optionIndex));
            options.appendChild(optionElement);
        });
        
        pollContainer.appendChild(options);
        
        // Create results (initially hidden)
        const results = document.createElement('div');
        results.className = 'poll-results';
        results.style.display = 'none';
        results.id = 'poll-results';
        
        poll.options.forEach((option, optionIndex) => {
            const resultElement = document.createElement('div');
            resultElement.className = 'poll-result';
            
            const resultLabel = document.createElement('div');
            resultLabel.className = 'flex justify-between mb-xs';
            resultLabel.innerHTML = `
                <span>${option}</span>
                <span>${poll.results[optionIndex]} votes</span>
            `;
            
            const resultBar = document.createElement('div');
            resultBar.className = 'poll-bar';
            
            const resultFill = document.createElement('div');
            resultFill.className = 'poll-bar-fill';
            resultFill.style.width = '0%';
            
            resultBar.appendChild(resultFill);
            resultElement.appendChild(resultLabel);
            resultElement.appendChild(resultBar);
            results.appendChild(resultElement);
        });
        
        pollContainer.appendChild(results);
        
        // Update navigation buttons
        const prevPollBtn = document.getElementById('prev-poll-btn');
        const nextPollBtn = document.getElementById('next-poll-btn');
        
        if (prevPollBtn && nextPollBtn) {
            prevPollBtn.disabled = index === 0;
            nextPollBtn.disabled = index === pollData.length - 1;
        }
    }

    selectPollOption(optionIndex) {
        const poll = pollData[this.currentPollIndex];
        
        // Update results
        poll.results[optionIndex]++;
        
        // Mark option as selected
        const options = document.querySelectorAll('.poll-option');
        options.forEach((option, index) => {
            if (index === optionIndex) {
                option.classList.add('selected');
            }
        });
        
        // Show results
        const resultsElement = document.getElementById('poll-results');
        if (resultsElement) {
            resultsElement.style.display = 'block';
            
            // Calculate percentages
            const total = poll.results.reduce((sum, count) => sum + count, 0);
            const resultFills = resultsElement.querySelectorAll('.poll-bar-fill');
            
            resultFills.forEach((fill, index) => {
                const percentage = total > 0 ? (poll.results[index] / total) * 100 : 0;
                fill.style.width = `${percentage}%`;
                
                // Update vote count
                const voteCount = fill.parentElement.previousElementSibling.querySelector('span:last-child');
                if (voteCount) {
                    voteCount.textContent = `${poll.results[index]} votes`;
                }
            });
        }
    }

    initSuperwhisperInteractions() {
        // Add event listener for the play button
        const playBtn = document.querySelector('.play-btn');
        if (playBtn) {
            playBtn.addEventListener('click', this.playSuperwhisperDemo);
        }
    }

    playSuperwhisperDemo() {
        // Simulate a demo with changing images
        const videoOverlay = document.querySelector('.video-overlay');
        const demoImage = document.querySelector('.demo-image');
        
        if (videoOverlay && demoImage) {
            videoOverlay.style.display = 'none';
            demoImage.src = 'https://placehold.co/800x450/e6edf7/0c4da2?text=Demo+Playing...';
            
            setTimeout(() => {
                demoImage.src = 'https://placehold.co/800x450/e6edf7/0c4da2?text=Speaking:+"Meeting+about+credit+risk..."';
            }, 2000);
            
            setTimeout(() => {
                demoImage.src = 'https://placehold.co/800x450/e6edf7/0c4da2?text=Transcribing...';
            }, 4000);
            
            setTimeout(() => {
                demoImage.src = 'https://placehold.co/800x450/e6edf7/0c4da2?text=Transcript:+"Meeting+about+credit+risk+workflow+improvements.+We+need+to+streamline+the+approval+process."';
            }, 6000);
        }
    }
}
