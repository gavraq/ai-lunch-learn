// RAG Demo Component
class RAGDemoComponent extends BaseComponent {
    constructor(slideData) {
        super(slideData);
        this.initialized = false;
    }

    createContent() {
        const container = document.createElement('div');
        
        // What is RAG section
        const intro = document.createElement('div');
        intro.className = 'intro mb-lg';
        
        const introTitle = document.createElement('h3');
        introTitle.textContent = 'What is Retrieval Augmented Generation (RAG)?';
        intro.appendChild(introTitle);
        
        const introPara1 = document.createElement('p');
        introPara1.className = 'large-text';
        introPara1.innerHTML = 'I mentioned earlier that LLMs work best when given the right context, but their context window is limited. Retrieval Augmented Generation is an AI framework that enhances LLMs by incorporating external information retrieval.';
        intro.appendChild(introPara1);
        
        const introPara2 = document.createElement('p');
        introPara2.innerHTML = 'Instead of solely relying on the LLM\'s pre-trained knowledge, RAG retrieves relevant data from external sources, such as databases or search engines, and uses it to generate more accurate, up-to-date, and contextually appropriate responses.';
        intro.appendChild(introPara2);
        
        container.appendChild(intro);
        
        // RAG Demo container
        const demoContainer = document.createElement('div');
        demoContainer.className = 'rag-demo-container mb-lg';
        
        const card = document.createElement('div');
        card.className = 'card';
        
        const cardTitle = document.createElement('h3');
        cardTitle.textContent = 'Interactive RAG Demonstration';
        card.appendChild(cardTitle);
        
        const demoContent = document.createElement('div');
        demoContent.className = 'rag-demo-content';
        
        // RAG Steps
        const ragSteps = document.createElement('div');
        ragSteps.className = 'rag-steps';
        
        // Step 1
        const step1 = this.createRagStep(1, 'Document Ingestion', 'Risk documents are processed and stored', 
            '<i class="fas fa-file-alt"></i><i class="fas fa-file-alt"></i><i class="fas fa-file-alt"></i><i class="fas fa-arrow-right"></i><i class="fas fa-database"></i>');
        ragSteps.appendChild(step1);
        
        // Step 2
        const step2 = this.createRagStep(2, 'Vector Conversion', 'Documents are converted to vector embeddings',
            '<i class="fas fa-database"></i><i class="fas fa-arrow-right"></i><div class="vector-representation">[0.2, 0.5, -0.1, 0.8...]</div>');
        ragSteps.appendChild(step2);
        
        // Step 3
        const step3 = this.createRagStep(3, 'Query Processing', 'User query is converted to the same vector space',
            '<div class="query-text">"What is our credit limit approval process?"</div><i class="fas fa-arrow-right"></i><div class="vector-representation">[0.3, 0.4, -0.2, 0.7...]</div>');
        ragSteps.appendChild(step3);
        
        // Step 4
        const step4 = this.createRagStep(4, 'Similarity Search', 'System finds the most similar document vectors',
            '<div class="similarity-search"><div class="vector-dot"></div><div class="vector-dot"></div><div class="vector-dot highlight"></div><div class="vector-dot"></div></div>');
        ragSteps.appendChild(step4);
        
        // Step 5
        const step5 = this.createRagStep(5, 'Context Augmentation', 'Retrieved documents are added to the prompt',
            '<div class="context-box"><i class="fas fa-file-alt"></i> + <div class="query-text">"What is our credit limit approval process?"</div></div>');
        ragSteps.appendChild(step5);
        
        // Step 6
        const step6 = this.createRagStep(6, 'LLM Response', 'AI generates response using the augmented context',
            '<div class="response-box"><i class="fas fa-robot"></i><div class="response-text">"The credit limit approval process requires Form CL-2023..."</div></div>');
        ragSteps.appendChild(step6);
        
        demoContent.appendChild(ragSteps);
        
        // Interactive demo
        const interactiveDemo = document.createElement('div');
        interactiveDemo.className = 'interactive-rag-demo mt-lg';
        interactiveDemo.innerHTML = `
            <div class="rag-query-container">
                <h4>Try it yourself:</h4>
                <div class="rag-query-input-container">
                    <input type="text" id="rag-query-input" placeholder="Ask about risk processes, credit limits, etc." />
                    <button id="rag-query-btn">Search</button>
                </div>
            </div>
            <div id="rag-results" class="rag-results" style="display: none;">
                <div class="rag-result-header">
                    <h4 class="rag-result-title">Document Title</h4>
                    <span class="rag-result-match">95% match</span>
                </div>
                <div class="rag-result-content">
                    <p class="rag-result-snippet">Document snippet will appear here based on your query...</p>
                </div>
            </div>
        `;
        
        demoContent.appendChild(interactiveDemo);
        card.appendChild(demoContent);
        demoContainer.appendChild(card);
        container.appendChild(demoContainer);
        
        return container;
    }
    
    // Helper method to create a RAG step
    createRagStep(number, title, description, visualization) {
        const step = document.createElement('div');
        step.className = 'rag-step';
        
        const stepNumber = document.createElement('div');
        stepNumber.className = 'rag-step-number';
        stepNumber.textContent = number;
        step.appendChild(stepNumber);
        
        const stepContent = document.createElement('div');
        stepContent.className = 'rag-step-content';
        
        const stepTitle = document.createElement('h4');
        stepTitle.textContent = title;
        stepContent.appendChild(stepTitle);
        
        const stepDesc = document.createElement('p');
        stepDesc.textContent = description;
        stepContent.appendChild(stepDesc);
        
        const stepViz = document.createElement('div');
        stepViz.className = 'rag-visualization';
        stepViz.innerHTML = visualization;
        stepContent.appendChild(stepViz);
        
        step.appendChild(stepContent);
        return step;
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
                    queryBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
                    
                    setTimeout(() => {
                        queryBtn.disabled = false;
                        queryBtn.innerHTML = 'Search';
                        
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
        
        // Add visual effects to the RAG steps
        const ragSteps = document.querySelectorAll('.rag-step');
        ragSteps.forEach((step, index) => {
            step.style.opacity = '0.7';
            step.style.transform = 'translateY(10px)';
            step.style.transition = 'all 0.3s ease-out';
            
            step.addEventListener('mouseenter', () => {
                ragSteps.forEach(s => {
                    s.style.opacity = '0.7';
                    s.style.transform = 'translateY(10px)';
                });
                step.style.opacity = '1';
                step.style.transform = 'translateY(0)';
            });
        });
        
        // Highlight the first step by default
        if (ragSteps.length > 0) {
            ragSteps[0].style.opacity = '1';
            ragSteps[0].style.transform = 'translateY(0)';
        }
        
        // Add click events to the challenge level cards
        const challengeLevels = document.querySelectorAll('.challenge-level');
        challengeLevels.forEach(level => {
            level.addEventListener('click', () => {
                challengeLevels.forEach(l => l.classList.remove('selected'));
                level.classList.add('selected');
                
                const selectElement = document.getElementById('challenge-select');
                if (selectElement) {
                    selectElement.value = level.dataset.level;
                }
            });
        });
        
        this.initialized = true;
    }
    
    cleanup() {
        // Clean up any event listeners or resources when navigating away from this slide
        const queryBtn = document.getElementById('rag-query-btn');
        const queryInput = document.getElementById('rag-query-input');
        
        if (queryBtn) {
            queryBtn.replaceWith(queryBtn.cloneNode(true));
        }
        
        if (queryInput) {
            queryInput.replaceWith(queryInput.cloneNode(true));
        }
        
        const ragSteps = document.querySelectorAll('.rag-step');
        ragSteps.forEach(step => {
            step.replaceWith(step.cloneNode(true));
        });
        
        const challengeLevels = document.querySelectorAll('.challenge-level');
        challengeLevels.forEach(level => {
            level.replaceWith(level.cloneNode(true));
        });
        
        this.initialized = false;
    }
}
