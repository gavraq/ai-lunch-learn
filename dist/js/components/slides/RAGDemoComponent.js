// RAG Demo Component
class RAGDemoComponent extends BaseComponent {
    constructor(slideData) {
        super(slideData);
        this.initialized = false;
    }
    
    createContent() {
        const container = document.createElement('div');
        container.className = 'rag-demo-container';
        
        // Title section with visual impact
        const titleSection = document.createElement('div');
        titleSection.className = 'title-section';
        
        const title = document.createElement('h2');
        title.className = 'slide-title';
        title.textContent = 'Retrieval Augmented Generation (RAG)';
        titleSection.appendChild(title);
        
        container.appendChild(titleSection);
        
        // Introduction with visual emphasis
        const introSection = document.createElement('div');
        introSection.className = 'intro-section';
        
        const introCard = document.createElement('div');
        introCard.className = 'intro-card';
        
        const introIcon = document.createElement('div');
        introIcon.className = 'intro-icon';
        introIcon.innerHTML = '<i class="fas fa-database"></i>';
        introCard.appendChild(introIcon);
        
        const introContent = document.createElement('div');
        introContent.className = 'intro-content';
        
        const introParagraph = document.createElement('p');
        introParagraph.className = 'intro-text';
        introParagraph.innerHTML = 'I mentioned earlier that LLMs work best when given the right context, but their context window is limited. Retrieval Augmented Generation is an AI framework that enhances LLMs by incorporating external information retrieval.';
        introContent.appendChild(introParagraph);
        
        const introParagraph2 = document.createElement('p');
        introParagraph2.className = 'intro-text';
        introParagraph2.innerHTML = 'Instead of solely relying on the LLM\'s pre-trained knowledge, RAG retrieves relevant data from external sources, such as databases or search engines, and uses it to generate more accurate, up-to-date, and contextually appropriate responses.';
        introContent.appendChild(introParagraph2);
        
        introCard.appendChild(introContent);
        introSection.appendChild(introCard);
        container.appendChild(introSection);
        
        // RAG Process Flow with visual steps
        const processSection = document.createElement('div');
        processSection.className = 'process-section';
        
        const processTitle = document.createElement('h3');
        processTitle.className = 'section-title';
        processTitle.textContent = 'How RAG Works';
        processSection.appendChild(processTitle);
        
        const processFlow = document.createElement('div');
        processFlow.className = 'process-flow';
        
        // Create the steps
        const steps = [
            {
                number: 1,
                title: 'Document Ingestion',
                description: 'Risk documents are processed and stored',
                icon: '<i class="fas fa-file-alt"></i><i class="fas fa-file-alt"></i><i class="fas fa-file-alt"></i><i class="fas fa-arrow-right"></i><i class="fas fa-database"></i>'
            },
            {
                number: 2,
                title: 'Vector Conversion',
                description: 'Documents are converted to vector embeddings',
                icon: '<i class="fas fa-database"></i><i class="fas fa-arrow-right"></i><div class="vector-representation">[0.2, 0.5, -0.1, 0.8...]</div>'
            },
            {
                number: 3,
                title: 'Query Processing',
                description: 'User query is converted to the same vector space',
                icon: '<div class="query-text">"What is our credit limit approval process?"</div><i class="fas fa-arrow-right"></i><div class="vector-representation">[0.3, 0.4, -0.2, 0.7...]</div>'
            },
            {
                number: 4,
                title: 'Similarity Search',
                description: 'System finds the most similar document vectors',
                icon: '<div class="similarity-search"><div class="vector-dot"></div><div class="vector-dot"></div><div class="vector-dot highlight"></div><div class="vector-dot"></div></div>'
            },
            {
                number: 5,
                title: 'Context Augmentation',
                description: 'Retrieved documents are added to the prompt',
                icon: '<div class="context-box"><i class="fas fa-file-alt"></i> + <div class="query-text">"What is our credit limit approval process?"</div></div>'
            },
            {
                number: 6,
                title: 'LLM Response',
                description: 'AI generates response using the augmented context',
                icon: '<div class="response-box"><i class="fas fa-robot"></i><div class="response-text">"The credit limit approval process requires Form CL-2023..."</div></div>'
            }
        ];
        
        steps.forEach(step => {
            const stepCard = document.createElement('div');
            stepCard.className = 'step-card';
            
            const stepNumber = document.createElement('div');
            stepNumber.className = 'step-number';
            stepNumber.textContent = step.number;
            stepCard.appendChild(stepNumber);
            
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
            
            stepCard.appendChild(stepContent);
            
            const stepIcon = document.createElement('div');
            stepIcon.className = 'step-icon';
            stepIcon.innerHTML = step.icon;
            stepCard.appendChild(stepIcon);
            
            processFlow.appendChild(stepCard);
        });
        
        processSection.appendChild(processFlow);
        container.appendChild(processSection);
        
        // Interactive Demo with visual card
        const demoSection = document.createElement('div');
        demoSection.className = 'demo-section';
        
        const demoTitle = document.createElement('h3');
        demoTitle.className = 'section-title';
        demoTitle.textContent = 'Interactive RAG Demo';
        demoSection.appendChild(demoTitle);
        
        const demoCard = document.createElement('div');
        demoCard.className = 'demo-card';
        
        const demoHeader = document.createElement('div');
        demoHeader.className = 'demo-header';
        demoHeader.innerHTML = '<i class="fas fa-search"></i> Try it yourself:';
        demoCard.appendChild(demoHeader);
        
        const demoContent = document.createElement('div');
        demoContent.className = 'demo-content';
        
        const queryContainer = document.createElement('div');
        queryContainer.className = 'query-container';
        
        const queryInput = document.createElement('input');
        queryInput.type = 'text';
        queryInput.id = 'rag-query-input';
        queryInput.className = 'query-input';
        queryInput.placeholder = 'Ask about risk processes, credit limits, etc.';
        queryContainer.appendChild(queryInput);
        
        const queryButton = document.createElement('button');
        queryButton.id = 'rag-query-btn';
        queryButton.className = 'query-button';
        queryButton.innerHTML = '<i class="fas fa-search"></i> Search';
        queryContainer.appendChild(queryButton);
        
        demoContent.appendChild(queryContainer);
        
        const resultsContainer = document.createElement('div');
        resultsContainer.id = 'rag-results';
        resultsContainer.className = 'results-container';
        resultsContainer.style.display = 'none';
        
        const resultsHeader = document.createElement('div');
        resultsHeader.className = 'results-header';
        
        const resultsTitle = document.createElement('h4');
        resultsTitle.className = 'rag-result-title';
        resultsTitle.textContent = 'Document Title';
        resultsHeader.appendChild(resultsTitle);
        
        const resultsMatch = document.createElement('span');
        resultsMatch.className = 'rag-result-match';
        resultsMatch.textContent = '95% match';
        resultsHeader.appendChild(resultsMatch);
        
        resultsContainer.appendChild(resultsHeader);
        
        const resultsContent = document.createElement('div');
        resultsContent.className = 'results-content';
        
        const resultsSnippet = document.createElement('p');
        resultsSnippet.className = 'rag-result-snippet';
        resultsSnippet.textContent = 'Document snippet will appear here based on your query...';
        resultsContent.appendChild(resultsSnippet);
        
        resultsContainer.appendChild(resultsContent);
        demoContent.appendChild(resultsContainer);
        
        demoCard.appendChild(demoContent);
        demoSection.appendChild(demoCard);
        container.appendChild(demoSection);
        
        // Benefits of RAG with visual cards
        const benefitsSection = document.createElement('div');
        benefitsSection.className = 'benefits-section';
        
        const benefitsTitle = document.createElement('h3');
        benefitsTitle.className = 'section-title';
        benefitsTitle.textContent = 'Benefits of RAG';
        benefitsSection.appendChild(benefitsTitle);
        
        const benefitsGrid = document.createElement('div');
        benefitsGrid.className = 'benefits-grid';
        
        const benefits = [
            {
                icon: 'fa-clock',
                title: 'Up-to-date Information',
                description: 'Access to the latest documents and data, not limited to the LLM\'s training cutoff'
            },
            {
                icon: 'fa-check-circle',
                title: 'Accuracy',
                description: 'Responses based on your actual documents rather than the model\'s general knowledge'
            },
            {
                icon: 'fa-shield-alt',
                title: 'Reduced Hallucinations',
                description: 'Less likely to generate incorrect information when grounded in your data'
            },
            {
                icon: 'fa-lock',
                title: 'Data Privacy',
                description: 'Keep sensitive information in your control while still leveraging AI capabilities'
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
        
        // Add CSS for this component
        const style = document.createElement('style');
        style.textContent = `
            .rag-demo-container {
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
                margin: 0 0 1rem 0;
            }
            
            .intro-text:last-child {
                margin-bottom: 0;
            }
            
            .process-section {
                margin-bottom: 2.5rem;
            }
            
            .process-flow {
                display: flex;
                flex-direction: column;
                gap: 1.5rem;
            }
            
            .step-card {
                background-color: white;
                border-radius: 0.5rem;
                padding: 1rem;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                border: 1px solid #E4E7EB;
                display: flex;
                align-items: center;
                transition: transform 0.2s ease-out, box-shadow 0.2s ease-out;
            }
            
            .step-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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
            }
            
            .step-content {
                flex: 1;
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
                margin: 0;
            }
            
            .step-icon {
                margin-left: 1rem;
                padding: 0.75rem;
                background-color: #f8fafc;
                border-radius: 0.5rem;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-shrink: 0;
                min-width: 150px;
                font-size: 0.875rem;
            }
            
            .vector-representation {
                font-family: monospace;
                font-size: 0.75rem;
                color: #4A5568;
            }
            
            .query-text {
                font-style: italic;
                color: #4A5568;
                font-size: 0.75rem;
            }
            
            .similarity-search {
                display: flex;
                gap: 0.5rem;
            }
            
            .vector-dot {
                width: 12px;
                height: 12px;
                border-radius: 50%;
                background-color: #CBD2D9;
            }
            
            .vector-dot.highlight {
                background-color: #0c4da2;
                transform: scale(1.2);
            }
            
            .context-box, .response-box {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                font-size: 0.75rem;
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
            
            .demo-header {
                background-color: #0c4da2;
                color: white;
                padding: 1rem;
                font-weight: 600;
                font-size: 1.125rem;
            }
            
            .demo-header i {
                margin-right: 0.5rem;
            }
            
            .demo-content {
                padding: 1.5rem;
            }
            
            .query-container {
                display: flex;
                gap: 0.5rem;
                margin-bottom: 1.5rem;
            }
            
            .query-input {
                flex: 1;
                padding: 0.75rem;
                border: 1px solid #E4E7EB;
                border-radius: 0.25rem;
                font-size: 0.875rem;
            }
            
            .query-button {
                background-color: #0c4da2;
                color: white;
                border: none;
                border-radius: 0.25rem;
                padding: 0.75rem 1rem;
                font-weight: 500;
                cursor: pointer;
                transition: background-color 0.2s ease-out;
            }
            
            .query-button:hover {
                background-color: #0a3d82;
            }
            
            .results-container {
                background-color: #f8fafc;
                border-radius: 0.5rem;
                overflow: hidden;
                border: 1px solid #E4E7EB;
            }
            
            .results-header {
                background-color: #F5F7FA;
                padding: 0.75rem 1rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-bottom: 1px solid #E4E7EB;
            }
            
            .rag-result-title {
                font-size: 1rem;
                font-weight: 600;
                color: #323F4B;
                margin: 0;
            }
            
            .rag-result-match {
                font-size: 0.75rem;
                color: #0c4da2;
                font-weight: 500;
                background-color: rgba(12, 77, 162, 0.1);
                padding: 0.25rem 0.5rem;
                border-radius: 1rem;
            }
            
            .results-content {
                padding: 1rem;
            }
            
            .rag-result-snippet {
                font-size: 0.875rem;
                line-height: 1.6;
                color: #4A5568;
                margin: 0;
            }
            
            .benefits-section {
                margin-bottom: 1.5rem;
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
            
            @media (max-width: 768px) {
                .intro-card {
                    flex-direction: column;
                }
                
                .intro-icon {
                    margin-right: 0;
                    margin-bottom: 1rem;
                }
                
                .step-card {
                    flex-direction: column;
                    text-align: center;
                }
                
                .step-number {
                    margin-right: 0;
                    margin-bottom: 0.75rem;
                }
                
                .step-icon {
                    margin-left: 0;
                    margin-top: 0.75rem;
                }
                
                .query-container {
                    flex-direction: column;
                }
            }
        `;
        container.appendChild(style);
        
        return container;
    }
    
    initialize() {
        if (this.initialized) return;
        
        const queryInput = document.getElementById('rag-query-input');
        const queryBtn = document.getElementById('rag-query-btn');
        const resultsContainer = document.getElementById('rag-results');
        
        if (queryBtn && queryInput && resultsContainer) {
            queryBtn.addEventListener('click', () => {
                if (queryInput.value.trim() !== '') {
                    // Show the results container with a fade-in animation
                    resultsContainer.style.display = 'block';
                    resultsContainer.style.opacity = '0';
                    setTimeout(() => {
                        resultsContainer.style.transition = 'opacity 0.5s';
                        resultsContainer.style.opacity = '1';
                    }, 10);
                    
                    // Simulate a search delay
                    queryBtn.disabled = true;
                    queryBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Searching...';
                    
                    setTimeout(() => {
                        queryBtn.disabled = false;
                        queryBtn.innerHTML = '<i class="fas fa-search"></i> Search';
                        
                        // Update the result snippet based on the query
                        const resultSnippet = document.querySelector('.rag-result-snippet');
                        const resultTitle = document.querySelector('.rag-result-title');
                        const resultMatch = document.querySelector('.rag-result-match');
                        
                        // Simple keyword matching to customize the response
                        const query = queryInput.value.toLowerCase();
                        
                        if (query.includes('credit') && query.includes('limit')) {
                            resultTitle.textContent = 'Credit Limit Approval Process';
                            resultSnippet.textContent = 'To request a credit limit increase, complete Form CL-2023 and submit it to your department head for initial approval. Once approved, the request will be forwarded to the credit risk team for final assessment...';
                            resultMatch.textContent = '98% match';
                        } else if (query.includes('risk') && (query.includes('report') || query.includes('reporting'))) {
                            resultTitle.textContent = 'Risk Reporting Guidelines';
                            resultSnippet.textContent = 'Risk reports must be submitted by the 15th of each month using the standardized template available on the Risk SharePoint. Reports should include all identified risks, their current status, and mitigation strategies...';
                            resultMatch.textContent = '95% match';
                        } else if (query.includes('onboarding') || query.includes('new joiner')) {
                            resultTitle.textContent = 'New Joiner Onboarding Process';
                            resultSnippet.textContent = 'The onboarding process for new team members begins with IT setup (request via ServiceNow), followed by mandatory training sessions. Access to risk systems requires separate approval through the Risk Access Management System...';
                            resultMatch.textContent = '97% match';
                        } else if (query.includes('fmdm') || query.includes('access')) {
                            resultTitle.textContent = 'FMDM Access Request Process';
                            resultSnippet.textContent = 'To request access to FMDM, submit a request through the Risk Access Management System (RAMS). Your request will require approval from your line manager and the FMDM system owner. Once approved, access will be granted within 24-48 hours...';
                            resultMatch.textContent = '99% match';
                        } else {
                            resultTitle.textContent = 'Related Documentation';
                            resultSnippet.textContent = 'We found several documents that may be relevant to your query. The most relevant appears to be from the Risk Management Handbook (2023 edition), which covers procedures related to your question...';
                            resultMatch.textContent = '85% match';
                        }
                    }, 1500);
                }
            });
            
            // Enable pressing Enter to search
            queryInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    queryBtn.click();
                }
            });
        }
        
        // Add visual effects to the process steps
        const stepCards = document.querySelectorAll('.step-card');
        stepCards.forEach((card, index) => {
            // Add staggered entrance animation
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100 * index);
        });
        
        this.initialized = true;
    }
    
    cleanup() {
        // Clean up event listeners
        const queryBtn = document.getElementById('rag-query-btn');
        const queryInput = document.getElementById('rag-query-input');
        
        if (queryBtn) {
            queryBtn.replaceWith(queryBtn.cloneNode(true));
        }
        
        if (queryInput) {
            queryInput.replaceWith(queryInput.cloneNode(true));
        }
        
        this.initialized = false;
    }
}
