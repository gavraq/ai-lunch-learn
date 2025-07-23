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
            switch (e.key) {
                case 'ArrowLeft':
                case 'ArrowUp':
                    this.navigateToPrevious();
                    break;
                case 'ArrowRight':
                case 'ArrowDown':
                case ' ':
                    this.navigateToNext();
                    break;
            }
        });
    }

    showSlide(sectionIndex, slideIndex) {
        if (sectionIndex < 0 || sectionIndex >= presentationConfig.sections.length) {
            return;
        }
        
        const section = presentationConfig.sections[sectionIndex];
        if (slideIndex < 0 || slideIndex >= section.slides.length) {
            return;
        }
        
        const slide = section.slides[slideIndex];
        
        // Update current indices
        this.currentSectionIndex = sectionIndex;
        this.currentSlideIndex = slideIndex;
        
        // Update navigation active states
        this.updateNavigationState();
        
        // Update progress indicator
        this.updateProgress();
        
        // Update navigation buttons
        this.updateNavigationButtons();
        
        // Render slide content
        this.renderSlide(slide);
        
        // Initialize slide-specific interactions
        this.initSlideInteractions(slide.id);
    }

    renderSlide(slideData) {
        console.log(`[Presentation] Rendering slide: ${slideData.id} with component: ${slideData.component}`);
        
        // Clean up previous component
        if (this.currentComponent && typeof this.currentComponent.cleanup === 'function') {
            this.currentComponent.cleanup();
        }
        
        // Clear slide container
        this.slideContainer.innerHTML = '';
        
        // Get component instance
        let component = null;
        
        if (slideData.component) {
            component = componentRegistry.get(slideData.component, slideData);
            
            if (!component) {
                console.warn(`Component ${slideData.component} not found, using PlaceholderComponent`);
                component = new PlaceholderComponent(slideData);
            }
        } else {
            // Fallback to PlaceholderComponent if no component specified
            component = new PlaceholderComponent(slideData);
        }
        
        this.currentComponent = component;
        
        // Render component
        const content = component.render();
        this.slideContainer.appendChild(content);
        
        // Initialize component
        if (typeof component.initialize === 'function') {
            component.initialize();
        }
        
        console.log(`[Presentation] Slide rendered successfully`);
    }

    updateNavigationState() {
        // Update navigation items
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach((item, index) => {
            if (index === this.currentSectionIndex) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    updateProgress() {
        const totalSlides = presentationConfig.sections.reduce((total, section) => total + section.slides.length, 0);
        let currentSlideNumber = 0;
        
        for (let i = 0; i < this.currentSectionIndex; i++) {
            currentSlideNumber += presentationConfig.sections[i].slides.length;
        }
        currentSlideNumber += this.currentSlideIndex + 1;
        
        this.progressIndicator.textContent = `${currentSlideNumber} / ${totalSlides}`;
    }

    updateNavigationButtons() {
        const hasPrevious = this.currentSectionIndex > 0 || this.currentSlideIndex > 0;
        const hasNext = this.currentSectionIndex < presentationConfig.sections.length - 1 || 
                       this.currentSlideIndex < presentationConfig.sections[this.currentSectionIndex].slides.length - 1;
        
        this.prevBtn.disabled = !hasPrevious;
        this.nextBtn.disabled = !hasNext;
    }

    navigateToPrevious() {
        if (this.currentSlideIndex > 0) {
            this.showSlide(this.currentSectionIndex, this.currentSlideIndex - 1);
        } else if (this.currentSectionIndex > 0) {
            const prevSection = presentationConfig.sections[this.currentSectionIndex - 1];
            this.showSlide(this.currentSectionIndex - 1, prevSection.slides.length - 1);
        }
    }

    navigateToNext() {
        const currentSection = presentationConfig.sections[this.currentSectionIndex];
        if (this.currentSlideIndex < currentSection.slides.length - 1) {
            this.showSlide(this.currentSectionIndex, this.currentSlideIndex + 1);
        } else if (this.currentSectionIndex < presentationConfig.sections.length - 1) {
            this.showSlide(this.currentSectionIndex + 1, 0);
        }
    }

    initSlideInteractions(slideId) {
        // Initialize slide-specific interactions
        switch (slideId) {
            case 'superwhisper':
                this.initSuperwhisperInteractions();
                break;
            // Add more slide-specific interactions as needed
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
        console.log('Playing Superwhisper demo...');
        // This would typically trigger a video or audio demo
        // For now, we'll just show a message
        const demoArea = document.querySelector('.demo-area');
        if (demoArea) {
            demoArea.innerHTML = '<p>🎤 SuperWhisper demo would play here...</p>';
        }
    }
}