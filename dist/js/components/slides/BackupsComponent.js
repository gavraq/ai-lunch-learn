// Backups Component
class BackupsComponent extends BaseComponent {
    constructor(slideData) {
        super(slideData);
        this.initialized = false;
    }
    
    createContent() {
        const container = document.createElement('div');
        container.className = 'backups-container';
        
        // Title section with visual impact
        const titleSection = document.createElement('div');
        titleSection.className = 'title-section';
        
        const title = document.createElement('h2');
        title.className = 'slide-title';
        title.textContent = 'Step 15: Regular Backups';
        titleSection.appendChild(title);
        
        container.appendChild(titleSection);
        
        // Introduction with visual emphasis
        const introSection = document.createElement('div');
        introSection.className = 'intro-section';
        
        const introCard = document.createElement('div');
        introCard.className = 'intro-card';
        
        const introIcon = document.createElement('div');
        introIcon.className = 'intro-icon';
        introIcon.innerHTML = '<i class="fas fa-cloud-upload-alt"></i>';
        introCard.appendChild(introIcon);
        
        const introContent = document.createElement('div');
        introContent.className = 'intro-content';
        
        const introParagraph = document.createElement('p');
        introParagraph.className = 'intro-text';
        introParagraph.innerHTML = 'Regular backups are essential to ensure that your work is not lost. This step involves setting up automated backups to GitHub and implementing a backup strategy.';
        introContent.appendChild(introParagraph);
        
        introCard.appendChild(introContent);
        introSection.appendChild(introCard);
        container.appendChild(introSection);
        
        // GitHub Integration with visual card
        const githubSection = document.createElement('div');
        githubSection.className = 'github-section';
        
        const githubTitle = document.createElement('h3');
        githubTitle.className = 'section-title';
        githubTitle.textContent = 'GitHub Integration';
        githubSection.appendChild(githubTitle);
        
        const githubCard = document.createElement('div');
        githubCard.className = 'github-card';
        
        const githubSteps = document.createElement('div');
        githubSteps.className = 'github-steps';
        
        const steps = [
            {
                icon: 'fa-code-branch',
                title: 'Initialize Repository',
                description: 'Create a new repository on GitHub and initialize it locally'
            },
            {
                icon: 'fa-plus-circle',
                title: 'Add Files',
                description: 'Stage all project files to be committed'
            },
            {
                icon: 'fa-check-circle',
                title: 'Commit Changes',
                description: 'Create a commit with a descriptive message'
            },
            {
                icon: 'fa-cloud-upload-alt',
                title: 'Push to Remote',
                description: 'Push your commits to the GitHub repository'
            },
            {
                icon: 'fa-sync',
                title: 'Regular Updates',
                description: 'Commit and push changes regularly to maintain backups'
            }
        ];
        
        steps.forEach((step, index) => {
            const stepItem = document.createElement('div');
            stepItem.className = 'step-item';
            
            const stepNumber = document.createElement('div');
            stepNumber.className = 'step-number';
            stepNumber.textContent = index + 1;
            stepItem.appendChild(stepNumber);
            
            const stepIcon = document.createElement('div');
            stepIcon.className = 'step-icon';
            stepIcon.innerHTML = `<i class="fas ${step.icon}"></i>`;
            stepItem.appendChild(stepIcon);
            
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
            githubSteps.appendChild(stepItem);
        });
        
        githubCard.appendChild(githubSteps);
        githubSection.appendChild(githubCard);
        container.appendChild(githubSection);
        
        // Backup Strategies with visual cards
        const strategiesSection = document.createElement('div');
        strategiesSection.className = 'strategies-section';
        
        const strategiesTitle = document.createElement('h3');
        strategiesTitle.className = 'section-title';
        strategiesTitle.textContent = 'Backup Strategies';
        strategiesSection.appendChild(strategiesTitle);
        
        const strategiesGrid = document.createElement('div');
        strategiesGrid.className = 'strategies-grid';
        
        const strategies = [
            {
                icon: 'fa-clock',
                title: 'Regular Commits',
                description: 'Commit changes at least daily or after significant milestones'
            },
            {
                icon: 'fa-code-branch',
                title: 'Feature Branches',
                description: 'Create separate branches for different features to isolate changes'
            },
            {
                icon: 'fa-tag',
                title: 'Version Tagging',
                description: 'Tag important versions for easy reference and rollback'
            },
            {
                icon: 'fa-server',
                title: 'Multiple Remotes',
                description: 'Configure multiple remote repositories for redundancy'
            }
        ];
        
        strategies.forEach(strategy => {
            const strategyCard = document.createElement('div');
            strategyCard.className = 'strategy-card';
            
            const strategyIcon = document.createElement('div');
            strategyIcon.className = 'strategy-icon';
            strategyIcon.innerHTML = `<i class="fas ${strategy.icon}"></i>`;
            strategyCard.appendChild(strategyIcon);
            
            const strategyTitle = document.createElement('h4');
            strategyTitle.className = 'strategy-title';
            strategyTitle.textContent = strategy.title;
            strategyCard.appendChild(strategyTitle);
            
            const strategyDescription = document.createElement('p');
            strategyDescription.className = 'strategy-description';
            strategyDescription.textContent = strategy.description;
            strategyCard.appendChild(strategyDescription);
            
            strategiesGrid.appendChild(strategyCard);
        });
        
        strategiesSection.appendChild(strategiesGrid);
        container.appendChild(strategiesSection);
        
        // Best Practices with visual list
        const practicesSection = document.createElement('div');
        practicesSection.className = 'practices-section';
        
        const practicesTitle = document.createElement('h3');
        practicesTitle.className = 'section-title';
        practicesTitle.textContent = 'Best Practices';
        practicesSection.appendChild(practicesTitle);
        
        const practicesCard = document.createElement('div');
        practicesCard.className = 'practices-card';
        
        const practicesList = document.createElement('ul');
        practicesList.className = 'practices-list';
        
        const practices = [
            'Write clear, descriptive commit messages',
            'Include both code and documentation in your repository',
            'Use .gitignore to exclude sensitive or unnecessary files',
            'Regularly pull changes if working in a team',
            'Consider using GitHub Actions for automated testing and deployment',
            'Keep sensitive information like API keys in environment variables, not in code',
            'Regularly check repository access permissions'
        ];
        
        practices.forEach(practice => {
            const practiceItem = document.createElement('li');
            practiceItem.className = 'practice-item';
            practiceItem.innerHTML = `<i class="fas fa-check-circle"></i> ${practice}`;
            practicesList.appendChild(practiceItem);
        });
        
        practicesCard.appendChild(practicesList);
        practicesSection.appendChild(practicesCard);
        container.appendChild(practicesSection);
        
        // Automated Backup Script with visual card
        const scriptSection = document.createElement('div');
        scriptSection.className = 'script-section';
        
        const scriptTitle = document.createElement('h3');
        scriptTitle.className = 'section-title';
        scriptTitle.textContent = 'Automated Backup Script';
        scriptSection.appendChild(scriptTitle);
        
        // Create a visually appealing script container
        const scriptContainer = document.createElement('div');
        scriptContainer.className = 'script-container';
        
        const scriptHeader = document.createElement('div');
        scriptHeader.className = 'script-header';
        
        const scriptIcon = document.createElement('div');
        scriptIcon.className = 'script-icon';
        scriptIcon.innerHTML = '<i class="fas fa-file-code"></i>';
        scriptHeader.appendChild(scriptIcon);
        
        const scriptHeaderText = document.createElement('div');
        scriptHeaderText.className = 'script-header-text';
        scriptHeaderText.textContent = 'backup.sh';
        scriptHeader.appendChild(scriptHeaderText);
        
        scriptContainer.appendChild(scriptHeader);
        
        const scriptCode = document.createElement('div');
        scriptCode.className = 'script-code';
        scriptCode.innerHTML = `<pre>#!/bin/bash
# Automated backup script for Credit Risk Workflow project

# Configuration
PROJECT_DIR="/path/to/credit-risk-workflow"
BACKUP_DIR="/path/to/backups"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
BACKUP_NAME="credit_risk_workflow_$TIMESTAMP"

# Create backup directory if it doesn't exist
mkdir -p $BACKUP_DIR

# Navigate to project directory
cd $PROJECT_DIR

# Create a database dump
python manage.py dumpdata > db_backup.json

# Create a compressed archive of the project
tar -czf "$BACKUP_DIR/$BACKUP_NAME.tar.gz" --exclude="venv" --exclude="__pycache__" --exclude="*.pyc" .

# Commit changes to Git
git add .
git commit -m "Automated backup: $TIMESTAMP"
git push origin main

# Clean up
rm db_backup.json

# Keep only the last 10 backups
cd $BACKUP_DIR
ls -t | tail -n +11 | xargs -I {} rm {}

echo "Backup completed: $BACKUP_NAME.tar.gz"
</pre>`;
        scriptContainer.appendChild(scriptCode);
        
        // Copy button for the script
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-button';
        copyButton.innerHTML = '<i class="fas fa-copy"></i> Copy';
        copyButton.setAttribute('data-code', scriptCode.textContent);
        scriptContainer.appendChild(copyButton);
        
        scriptSection.appendChild(scriptContainer);
        container.appendChild(scriptSection);
        
        // Scheduling Backups with visual card
        const schedulingSection = document.createElement('div');
        schedulingSection.className = 'scheduling-section';
        
        const schedulingTitle = document.createElement('h3');
        schedulingTitle.className = 'section-title';
        schedulingTitle.textContent = 'Scheduling Backups';
        schedulingSection.appendChild(schedulingTitle);
        
        const schedulingCard = document.createElement('div');
        schedulingCard.className = 'scheduling-card';
        
        const schedulingContent = document.createElement('div');
        schedulingContent.className = 'scheduling-content';
        
        const schedulingText = document.createElement('p');
        schedulingText.className = 'scheduling-text';
        schedulingText.innerHTML = 'To automate backups, you can use cron jobs on Linux/Mac or Task Scheduler on Windows:';
        schedulingContent.appendChild(schedulingText);
        
        const cronExample = document.createElement('div');
        cronExample.className = 'cron-example';
        cronExample.innerHTML = `<pre># Run backup script daily at 2 AM
0 2 * * * /path/to/backup.sh >> /path/to/backup.log 2>&1</pre>`;
        schedulingContent.appendChild(cronExample);
        
        const schedulingNote = document.createElement('div');
        schedulingNote.className = 'scheduling-note';
        schedulingNote.innerHTML = '<i class="fas fa-info-circle"></i> Adjust the frequency based on your project\'s activity level and importance.';
        schedulingContent.appendChild(schedulingNote);
        
        schedulingCard.appendChild(schedulingContent);
        schedulingSection.appendChild(schedulingCard);
        container.appendChild(schedulingSection);
        
        // Add CSS for this component
        const style = document.createElement('style');
        style.textContent = `
            .backups-container {
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
            
            .github-section {
                margin-bottom: 2.5rem;
            }
            
            .github-card {
                background-color: white;
                border-radius: 0.5rem;
                overflow: hidden;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                border: 1px solid #E4E7EB;
            }
            
            .github-steps {
                padding: 1.5rem;
            }
            
            .step-item {
                display: flex;
                align-items: flex-start;
                margin-bottom: 1.5rem;
                position: relative;
            }
            
            .step-item:last-child {
                margin-bottom: 0;
            }
            
            .step-item:not(:last-child):after {
                content: '';
                position: absolute;
                top: 2.5rem;
                left: 1.25rem;
                height: calc(100% - 1rem);
                width: 2px;
                background-color: #E4E7EB;
            }
            
            .step-number {
                width: 2.5rem;
                height: 2.5rem;
                border-radius: 50%;
                background-color: #0c4da2;
                color: white;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: 600;
                margin-right: 1rem;
                flex-shrink: 0;
                z-index: 1;
            }
            
            .step-icon {
                width: 3rem;
                height: 3rem;
                border-radius: 50%;
                background-color: #EBF8FF;
                color: #0c4da2;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.25rem;
                margin-right: 1rem;
                flex-shrink: 0;
            }
            
            .step-content {
                flex: 1;
            }
            
            .step-title {
                font-size: 1.125rem;
                font-weight: 600;
                color: #323F4B;
                margin-top: 0;
                margin-bottom: 0.5rem;
            }
            
            .step-description {
                font-size: 0.875rem;
                color: #4A5568;
                line-height: 1.5;
                margin: 0;
            }
            
            .strategies-section {
                margin-bottom: 2.5rem;
            }
            
            .strategies-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 1.5rem;
            }
            
            .strategy-card {
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
            
            .strategy-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            
            .strategy-icon {
                width: 4rem;
                height: 4rem;
                border-radius: 50%;
                background-color: #EBF8FF;
                color: #0c4da2;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.5rem;
                margin-bottom: 1rem;
            }
            
            .strategy-title {
                font-size: 1.125rem;
                font-weight: 600;
                color: #323F4B;
                margin-top: 0;
                margin-bottom: 0.75rem;
            }
            
            .strategy-description {
                font-size: 0.875rem;
                color: #4A5568;
                line-height: 1.5;
                margin: 0;
            }
            
            .practices-section {
                margin-bottom: 2.5rem;
            }
            
            .practices-card {
                background-color: white;
                border-radius: 0.5rem;
                padding: 1.5rem;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                border: 1px solid #E4E7EB;
                border-left: 4px solid #e31937;
            }
            
            .practices-list {
                margin: 0;
                padding: 0;
                list-style: none;
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: 1rem;
            }
            
            .practice-item {
                font-size: 0.875rem;
                color: #4A5568;
                line-height: 1.5;
                display: flex;
                align-items: flex-start;
            }
            
            .practice-item i {
                color: #e31937;
                margin-right: 0.75rem;
                margin-top: 0.25rem;
                flex-shrink: 0;
            }
            
            .script-section {
                margin-bottom: 2.5rem;
            }
            
            .script-container {
                background-color: #1F2933;
                border-radius: 0.5rem;
                overflow: hidden;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
                position: relative;
            }
            
            .script-header {
                background-color: #323F4B;
                padding: 0.75rem 1rem;
                display: flex;
                align-items: center;
            }
            
            .script-icon {
                color: #CBD2D9;
                margin-right: 0.75rem;
            }
            
            .script-header-text {
                color: white;
                font-weight: 500;
                font-size: 0.875rem;
            }
            
            .script-code {
                padding: 0;
                color: #CBD2D9;
                font-family: monospace;
                white-space: pre-wrap;
                font-size: 0.875rem;
                line-height: 1.6;
                max-height: 400px;
                overflow-y: auto;
            }
            
            .script-code pre {
                margin: 0;
                padding: 1.5rem;
            }
            
            .copy-button {
                position: absolute;
                top: 0.5rem;
                right: 0.5rem;
                background-color: #4A5568;
                color: white;
                border: none;
                border-radius: 0.25rem;
                padding: 0.5rem 0.75rem;
                font-size: 0.75rem;
                cursor: pointer;
                display: flex;
                align-items: center;
                gap: 0.5rem;
                transition: background-color 0.2s ease-out;
            }
            
            .copy-button:hover {
                background-color: #2D3748;
            }
            
            .scheduling-section {
                margin-bottom: 1.5rem;
            }
            
            .scheduling-card {
                background-color: white;
                border-radius: 0.5rem;
                overflow: hidden;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                border: 1px solid #E4E7EB;
            }
            
            .scheduling-content {
                padding: 1.5rem;
            }
            
            .scheduling-text {
                font-size: 0.875rem;
                color: #4A5568;
                line-height: 1.5;
                margin-top: 0;
                margin-bottom: 1rem;
            }
            
            .cron-example {
                background-color: #1F2933;
                border-radius: 0.25rem;
                overflow: hidden;
                margin-bottom: 1rem;
            }
            
            .cron-example pre {
                margin: 0;
                padding: 1rem;
                color: #CBD2D9;
                font-family: monospace;
                font-size: 0.875rem;
                line-height: 1.6;
                white-space: pre;
                overflow-x: auto;
            }
            
            .scheduling-note {
                background-color: #EBF8FF;
                border-radius: 0.25rem;
                padding: 0.75rem;
                color: #2C5282;
                font-size: 0.75rem;
                line-height: 1.5;
                border-left: 3px solid #4299E1;
            }
            
            .scheduling-note i {
                color: #4299E1;
                margin-right: 0.5rem;
            }
            
            @media (max-width: 768px) {
                .strategies-grid, .practices-list {
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
        
        // Add event listeners for copy buttons
        const copyButtons = document.querySelectorAll('.copy-button');
        copyButtons.forEach(button => {
            button.addEventListener('click', () => {
                const code = button.getAttribute('data-code');
                navigator.clipboard.writeText(code).then(() => {
                    const originalText = button.innerHTML;
                    button.innerHTML = '<i class="fas fa-check"></i> Copied!';
                    setTimeout(() => {
                        button.innerHTML = originalText;
                    }, 2000);
                });
            });
        });
        
        this.initialized = true;
    }

    cleanup() {
        // Clean up event listeners
        const copyButtons = document.querySelectorAll('.copy-button');
        copyButtons.forEach(button => {
            button.removeEventListener('click', () => {});
        });
        
        this.initialized = false;
    }
}
