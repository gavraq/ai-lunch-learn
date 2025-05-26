// Old vs New Approach Component
class OldVsNewComponent extends BaseComponent {
    constructor(slideData) {
        super(slideData);
        this.initialized = false;
    }

    createContent() {
        const container = document.createElement('div');
        container.className = 'old-vs-new-container';
        
        // Add intro text
        const intro = document.createElement('div');
        intro.className = 'intro mb-lg';
        const introText = document.createElement('p');
        introText.className = 'large-text';
        introText.textContent = "Let's compare the traditional approach to workflow development with a new AI-assisted approach.";
        intro.appendChild(introText);
        container.appendChild(intro);
        
        // Create comparison section
        const comparisonSection = this.createTwoColumnLayout(
            this.createOldApproachContent(),
            this.createNewApproachContent()
        );
        comparisonSection.className = 'comparison-section mb-lg';
        container.appendChild(comparisonSection);
        
        // Add benefits section
        const benefitsSection = document.createElement('div');
        benefitsSection.className = 'benefits-section mb-lg';
        
        const benefitsTitle = document.createElement('h3');
        benefitsTitle.textContent = 'Benefits of the AI-Assisted Approach';
        benefitsSection.appendChild(benefitsTitle);
        
        const benefitsList = this.createList([
            'Faster prototyping and development cycles',
            'More comprehensive exploration of requirements and edge cases',
            'Better documentation generated throughout the process',
            'Easier maintenance and updates',
            'More consistent code quality and patterns'
        ]);
        benefitsSection.appendChild(benefitsList);
        container.appendChild(benefitsSection);
        
        return container;
    }
    
    createOldApproachContent() {
        const oldApproach = document.createElement('div');
        
        const oldTitle = document.createElement('h3');
        oldTitle.textContent = 'Traditional Approach';
        oldApproach.appendChild(oldTitle);
        
        const oldSteps = this.createList([
            'Requirements gathering through meetings and documents',
            'Manual documentation of requirements',
            'Design phase with limited iterations',
            'Development phase with manual coding',
            'Testing phase often rushed',
            'Deployment with limited automation',
            'Maintenance often reactive'
        ], true);
        oldApproach.appendChild(oldSteps);
        
        const oldChallenges = document.createElement('div');
        oldChallenges.className = 'challenges mt-md';
        
        const challengesTitle = document.createElement('h4');
        challengesTitle.textContent = 'Challenges';
        oldChallenges.appendChild(challengesTitle);
        
        const challengesList = this.createList([
            'Time-consuming process',
            'Limited exploration of edge cases',
            'Difficult to maintain consistency',
            'Documentation often becomes outdated',
            'Knowledge silos form around specific components'
        ]);
        oldChallenges.appendChild(challengesList);
        oldApproach.appendChild(oldChallenges);
        
        return oldApproach;
    }
    
    createNewApproachContent() {
        const newApproach = document.createElement('div');
        
        const newTitle = document.createElement('h3');
        newTitle.textContent = 'AI-Assisted Approach';
        newApproach.appendChild(newTitle);
        
        const newSteps = this.createList([
            'AI-enhanced requirements gathering and analysis',
            'Automatic documentation generation',
            'Rapid prototyping with AI assistance',
            'Vibe coding for faster implementation',
            'Continuous testing with AI-generated test cases',
            'Automated deployment with CI/CD',
            'Proactive maintenance with AI monitoring'
        ], true);
        newApproach.appendChild(newSteps);
        
        const newAdvantages = document.createElement('div');
        newAdvantages.className = 'advantages mt-md';
        
        const advantagesTitle = document.createElement('h4');
        advantagesTitle.textContent = 'Advantages';
        newAdvantages.appendChild(advantagesTitle);
        
        const advantagesList = this.createList([
            'Significantly faster development cycles',
            'More comprehensive exploration of requirements',
            'Consistent documentation that stays updated',
            'Better code quality through AI assistance',
            'Knowledge is captured and shared systematically'
        ]);
        newAdvantages.appendChild(advantagesList);
        newApproach.appendChild(newAdvantages);
        
        return newApproach;
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
