// Superwhisper Demo Component
class SuperwhisperDemoComponent extends BaseComponent {
    createContent() {
        const container = document.createElement('div');
        
        // Introduction text
        const intro = document.createElement('p');
        intro.className = 'mb-lg';
        intro.innerHTML = "Let's start with something simple... can you improve your efficiency by using AI to transcribe instead of having to write? Here's an example of an app called Superwhisper that can help you do that:";
        container.appendChild(intro);
        
        // Transcription Box
        const transcriptionBox = document.createElement('div');
        transcriptionBox.className = 'transcription-box mb-lg';
        transcriptionBox.style.border = '1px solid #ddd';
        transcriptionBox.style.borderRadius = '4px';
        transcriptionBox.style.padding = '15px';
        transcriptionBox.style.marginBottom = '20px';
        transcriptionBox.style.backgroundColor = '#f9f9f9';
        
        const boxTitle = document.createElement('h3');
        boxTitle.textContent = 'Transcription Box';
        boxTitle.style.marginTop = '0';
        transcriptionBox.appendChild(boxTitle);
        
        const boxDescription = document.createElement('p');
        boxDescription.textContent = 'Speak into Superwhisper and your transcribed text will appear here:';
        boxDescription.style.fontSize = '14px';
        boxDescription.style.color = '#666';
        transcriptionBox.appendChild(boxDescription);
        
        const textArea = document.createElement('div');
        textArea.style.height = '100px';
        textArea.style.backgroundColor = '#f1f1f1';
        textArea.style.border = '1px solid #ddd';
        textArea.style.borderRadius = '4px';
        textArea.style.marginTop = '10px';
        transcriptionBox.appendChild(textArea);
        
        container.appendChild(transcriptionBox);
        
        // Feature boxes container - using flex to align them side by side
        const boxesContainer = document.createElement('div');
        boxesContainer.style.display = 'flex';
        boxesContainer.style.gap = '20px';
        boxesContainer.style.marginBottom = '20px';
        
        // Key Features Box
        const featuresBox = document.createElement('div');
        featuresBox.style.flex = '1';
        featuresBox.style.border = '1px solid #0056b3';
        featuresBox.style.borderRadius = '4px';
        featuresBox.style.padding = '15px';
        featuresBox.style.backgroundColor = '#f0f7ff';
        
        const featuresTitle = document.createElement('h3');
        featuresTitle.textContent = 'Key Features';
        featuresTitle.style.marginTop = '0';
        featuresTitle.style.color = '#0056b3';
        featuresBox.appendChild(featuresTitle);
        
        const featuresList = document.createElement('ul');
        featuresList.style.paddingLeft = '20px';
        featuresList.style.margin = '10px 0';
        
        const features = [
            'Automatic transcription of voice to text',
            'Removes filler words like "um" and "ah"',
            'Formats text with proper punctuation',
            'Works with multiple speakers',
            'Exports to various formats'
        ];
        
        features.forEach(feature => {
            const listItem = document.createElement('li');
            listItem.textContent = feature;
            featuresList.appendChild(listItem);
        });
        
        featuresBox.appendChild(featuresList);
        boxesContainer.appendChild(featuresBox);
        
        // Benefits Box
        const benefitsBox = document.createElement('div');
        benefitsBox.style.flex = '1';
        benefitsBox.style.border = '1px solid #28a745';
        benefitsBox.style.borderRadius = '4px';
        benefitsBox.style.padding = '15px';
        benefitsBox.style.backgroundColor = '#f0fff4';
        
        const benefitsTitle = document.createElement('h3');
        benefitsTitle.textContent = 'Benefits for Risk Teams';
        benefitsTitle.style.marginTop = '0';
        benefitsTitle.style.color = '#28a745';
        benefitsBox.appendChild(benefitsTitle);
        
        const benefitsList = document.createElement('ul');
        benefitsList.style.paddingLeft = '20px';
        benefitsList.style.margin = '10px 0';
        
        const benefits = [
            'Capture meeting notes without typing',
            'Focus on discussion instead of note-taking',
            'Create documentation faster',
            'Easily share meeting outcomes',
            'Improve requirements gathering'
        ];
        
        benefits.forEach(benefit => {
            const listItem = document.createElement('li');
            listItem.textContent = benefit;
            benefitsList.appendChild(listItem);
        });
        
        benefitsBox.appendChild(benefitsList);
        boxesContainer.appendChild(benefitsBox);
        
        container.appendChild(boxesContainer);
        
        return container;
    }
}
