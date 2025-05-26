// Backups Component
class BackupsComponent extends BaseComponent {
    constructor(slideData) {
        super(slideData);
        this.initialized = false;
    }
    
    createContent() {
        const container = document.createElement('div');
        
        // Title
        const title = document.createElement('h2');
        title.textContent = 'Step 15: Regular Backups';
        title.className = 'slide-title mb-md';
        container.appendChild(title);
        
        // Introduction
        const introSection = document.createElement('div');
        introSection.className = 'intro-section mb-lg';
        
        const introContent = document.createElement('p');
        introContent.innerHTML = 'Make sure you keep your code base properly up to date with regular backups. Using version control is essential for tracking changes and maintaining a history of your project.';
        introSection.appendChild(introContent);
        
        container.appendChild(introSection);
        
        // GitHub Integration
        const githubSection = document.createElement('div');
        githubSection.className = 'github-section mb-lg';
        
        const githubTitle = document.createElement('h3');
        githubTitle.textContent = 'GitHub Integration:';
        githubSection.appendChild(githubTitle);
        
        const githubContent = document.createElement('p');
        githubContent.innerHTML = 'Using the MCP Server for GitHub, committing your code is as simple as saying:';
        githubSection.appendChild(githubContent);
        
        const githubPrompt = document.createElement('div');
        githubPrompt.className = 'prompt-preview';
        githubPrompt.innerHTML = `
            <p><strong>Prompt:</strong></p>
            <pre class="prompt-code">Can you commit the project to github</pre>
        `;
        githubSection.appendChild(githubPrompt);
        
        container.appendChild(githubSection);
        
        // Backup Strategies
        const strategiesSection = document.createElement('div');
        strategiesSection.className = 'strategies-section mb-lg';
        
        const strategiesTitle = document.createElement('h3');
        strategiesTitle.textContent = 'Backup Strategies:';
        strategiesSection.appendChild(strategiesTitle);
        
        // Create a two-column layout for backup strategies
        const leftColumn = document.createElement('div');
        leftColumn.className = 'strategies-column';
        
        const codeTitle = document.createElement('h4');
        codeTitle.textContent = 'Code Backups:';
        leftColumn.appendChild(codeTitle);
        
        const codeList = this.createList([
            'Regular commits with meaningful messages',
            'Feature branches for new functionality',
            'Pull requests for code review',
            'Tags for important milestones',
            'GitHub Actions for automated testing'
        ]);
        leftColumn.appendChild(codeList);
        
        const rightColumn = document.createElement('div');
        rightColumn.className = 'strategies-column';
        
        const dataTitle = document.createElement('h4');
        dataTitle.textContent = 'Data Backups:';
        rightColumn.appendChild(dataTitle);
        
        const dataList = this.createList([
            'Database dumps for important data',
            'Fixtures for test data',
            'Environment variable backups',
            'Media file backups',
            'Documentation of database schema changes'
        ]);
        rightColumn.appendChild(dataList);
        
        const strategiesLayout = this.createTwoColumnLayout(leftColumn, rightColumn);
        strategiesSection.appendChild(strategiesLayout);
        
        container.appendChild(strategiesSection);
        
        // Best Practices
        const practicesSection = document.createElement('div');
        practicesSection.className = 'practices-section mb-lg';
        
        const practicesTitle = document.createElement('h3');
        practicesTitle.textContent = 'Best Practices:';
        practicesSection.appendChild(practicesTitle);
        
        const practicesList = this.createList([
            'Commit early and often',
            'Use descriptive commit messages',
            'Create a .gitignore file to exclude unnecessary files',
            'Back up your database regularly',
            'Document your backup and restore procedures',
            'Test your restore process periodically',
            'Use different branches for different features or experiments'
        ]);
        practicesSection.appendChild(practicesList);
        
        container.appendChild(practicesSection);
        
        // Automated Backup Script
        const scriptSection = document.createElement('div');
        scriptSection.className = 'script-section';
        
        const scriptTitle = document.createElement('h3');
        scriptTitle.textContent = 'Example Automated Backup Script:';
        scriptSection.appendChild(scriptTitle);
        
        const scriptCode = `#!/bin/bash
# Automated backup script for Credit Risk Workflow project

# Set variables
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
BACKUP_DIR="./backups/$TIMESTAMP"
DB_NAME="credit_risk_db"
REPO_DIR="."

# Create backup directory
mkdir -p $BACKUP_DIR

# Backup database
echo "Backing up database..."
python manage.py dumpdata --indent 2 > $BACKUP_DIR/db_backup.json

# Backup media files
echo "Backing up media files..."
tar -czf $BACKUP_DIR/media_backup.tar.gz ./media

# Commit to git if there are changes
echo "Checking for code changes..."
git status
if [[ $(git status --porcelain) ]]; then
    echo "Changes detected, committing to git..."
    git add .
    git commit -m "Automated backup $TIMESTAMP"
    git push origin main
else
    echo "No changes to commit"
fi

echo "Backup completed successfully!"`;
        
        const codeBlock = this.createCodeBlock(scriptCode, 'bash');
        scriptSection.appendChild(codeBlock);
        
        container.appendChild(scriptSection);
        
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
