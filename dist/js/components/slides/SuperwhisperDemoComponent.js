// Superwhisper Demo Component
class SuperwhisperDemoComponent extends BaseComponent {
    createContent() {
        const container = document.createElement('div');
        
        // Introduction text
        const intro = document.createElement('p');
        intro.className = 'mb-lg';
        intro.innerHTML = "Let's start with something simple... can you improve your efficiency by using AI to transcribe instead of having to write? Here's an example of an app called Superwhisper that can help you do that:";
        container.appendChild(intro);
        
        // Demo card
        const demoCard = this.createCard('Superwhisper Demo', null);
        demoCard.className = 'card demo-card mb-lg';
        
        // Demo content
        const demoContent = document.createElement('div');
        demoContent.className = 'demo-content';
        
        // Video placeholder (in a real implementation, this would be a video or interactive demo)
        const videoPlaceholder = document.createElement('div');
        videoPlaceholder.className = 'video-placeholder';
        videoPlaceholder.innerHTML = `
            <div class="video-container">
                <div class="video-overlay flex items-center justify-center">
                    <button class="btn btn-primary play-btn">
                        <i class="fas fa-play"></i> Play Demo
                    </button>
                </div>
                <img src="/superwhisper.jpeg" alt="Superwhisper Demo" class="demo-image" style="width: 100%; max-width: 800px;">
            </div>
        `;
        
        // Demo features
        const features = document.createElement('div');
        features.className = 'features mt-lg';
        features.innerHTML = `
            <h3>Key Features:</h3>
            <ul>
                <li>Automatic transcription of voice to text</li>
                <li>Removes filler words like "um" and "ah"</li>
                <li>Formats text with proper punctuation and paragraphs</li>
                <li>Works with multiple speakers</li>
                <li>Exports to various formats (Word, PDF, plain text)</li>
            </ul>
        `;
        
        demoContent.appendChild(videoPlaceholder);
        demoContent.appendChild(features);
        demoCard.appendChild(demoContent);
        container.appendChild(demoCard);
        
        // Benefits section
        const benefits = document.createElement('div');
        benefits.className = 'benefits mt-lg';
        
        const benefitsTitle = document.createElement('h3');
        benefitsTitle.textContent = 'Benefits for Risk Change and Risk IT Teams:';
        benefits.appendChild(benefitsTitle);
        
        const benefitsList = this.createList([
            'Capture meeting notes without manual typing',
            'Focus on the discussion instead of note-taking',
            'Create documentation faster',
            'Easily share meeting outcomes with team members',
            'Improve productivity for requirements gathering sessions'
        ]);
        benefits.appendChild(benefitsList);
        container.appendChild(benefits);
        
        // Add event listener for the play button
        setTimeout(() => {
            const playBtn = container.querySelector('.play-btn');
            if (playBtn) {
                playBtn.addEventListener('click', this.playDemo.bind(this));
            }
        }, 0);
        
        return container;
    }
    
    playDemo() {
        // In a real implementation, this would play a video or show an interactive demo
        const videoOverlay = document.querySelector('.video-overlay');
        const demoImage = document.querySelector('.demo-image');
        const container = demoImage.parentElement;
        
        if (videoOverlay && demoImage) {
            videoOverlay.style.display = 'none';
            
            // Create a demo sequence with text overlays instead of changing the image
            const textOverlay = document.createElement('div');
            textOverlay.className = 'text-overlay';
            textOverlay.style.cssText = 'position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); color: white; display: flex; align-items: center; justify-content: center; text-align: center; padding: 20px; font-size: 18px;';
            textOverlay.innerHTML = '<div>Demo Playing...</div>';
            container.appendChild(textOverlay);
            
            // Simulate a demo with changing text overlays
            setTimeout(() => {
                textOverlay.innerHTML = '<div>Speaking: "Meeting about credit risk..."</div>';
            }, 2000);
            
            setTimeout(() => {
                textOverlay.innerHTML = '<div>Transcribing...</div>';
            }, 4000);
            
            setTimeout(() => {
                textOverlay.innerHTML = '<div>Transcript: "Meeting about credit risk workflow improvements. We need to streamline the approval process."</div>';
            }, 6000);
            
            // Remove overlay after demo completes
            setTimeout(() => {
                textOverlay.style.opacity = '0';
                textOverlay.style.transition = 'opacity 1s';
                setTimeout(() => textOverlay.remove(), 1000);
            }, 9000);
        }
    }
}
