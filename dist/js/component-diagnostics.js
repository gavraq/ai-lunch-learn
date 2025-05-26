/**
 * Component Diagnostics Tool
 * This script helps diagnose issues with component loading and rendering
 */

(function() {
    console.log('Component Diagnostics Tool initialized');
    
    // Create a diagnostics object in the global scope
    window.componentDiagnostics = {
        // Store information about component loading attempts
        loadAttempts: {},
        
        // Store information about component rendering attempts
        renderAttempts: {},
        
        // Store errors encountered during component loading/rendering
        errors: [],
        
        // Log a component loading attempt
        logLoadAttempt: function(componentName, success, error = null) {
            this.loadAttempts[componentName] = {
                success: success,
                timestamp: new Date(),
                error: error
            };
            
            if (!success && error) {
                this.errors.push({
                    type: 'load',
                    componentName: componentName,
                    error: error,
                    timestamp: new Date()
                });
            }
            
            console.log(`Component load attempt: ${componentName} - ${success ? 'SUCCESS' : 'FAILED'}`);
        },
        
        // Log a component rendering attempt
        logRenderAttempt: function(componentName, success, error = null) {
            this.renderAttempts[componentName] = {
                success: success,
                timestamp: new Date(),
                error: error
            };
            
            if (!success && error) {
                this.errors.push({
                    type: 'render',
                    componentName: componentName,
                    error: error,
                    timestamp: new Date()
                });
            }
            
            console.log(`Component render attempt: ${componentName} - ${success ? 'SUCCESS' : 'FAILED'}`);
        },
        
        // Generate a report of all component loading and rendering attempts
        generateReport: function() {
            const report = {
                timestamp: new Date(),
                loadAttempts: this.loadAttempts,
                renderAttempts: this.renderAttempts,
                errors: this.errors,
                componentRegistry: window.componentRegistry ? Object.keys(window.componentRegistry.components) : [],
                globalComponents: Object.keys(window).filter(key => 
                    key.endsWith('Component') || 
                    ['AIChallenge', 'Resources', 'FinalThought'].includes(key)
                )
            };
            
            console.log('Component Diagnostics Report:', report);
            return report;
        },
        
        // Check if a component exists and is properly loaded
        checkComponent: function(componentName) {
            const results = {
                componentName: componentName,
                inWindow: false,
                inWindowWithSuffix: false,
                inRegistry: false,
                canInstantiate: false,
                hasCreateContent: false,
                error: null
            };
            
            try {
                // Check if component exists in window object
                results.inWindow = !!window[componentName];
                
                // Check if component exists in window object with Component suffix
                const nameWithSuffix = componentName.endsWith('Component') ? 
                    componentName : componentName + 'Component';
                results.inWindowWithSuffix = !!window[nameWithSuffix];
                
                // Check if component exists in registry
                results.inRegistry = window.componentRegistry && 
                    window.componentRegistry.components && 
                    !!window.componentRegistry.components[componentName];
                
                // Try to instantiate the component
                let ComponentClass = null;
                if (results.inWindow) {
                    ComponentClass = window[componentName];
                } else if (results.inWindowWithSuffix) {
                    ComponentClass = window[nameWithSuffix];
                } else if (results.inRegistry) {
                    ComponentClass = window.componentRegistry.components[componentName];
                }
                
                if (ComponentClass) {
                    try {
                        const instance = new ComponentClass({id: 'test', title: 'Test'});
                        results.canInstantiate = true;
                        results.hasCreateContent = typeof instance.createContent === 'function';
                    } catch (e) {
                        results.error = `Instantiation error: ${e.message}`;
                    }
                }
            } catch (e) {
                results.error = `Check error: ${e.message}`;
            }
            
            console.log(`Component check: ${componentName}`, results);
            return results;
        },
        
        // Check all components referenced in the config
        checkAllComponents: function() {
            const results = [];
            
            if (window.presentationConfig && window.presentationConfig.sections) {
                window.presentationConfig.sections.forEach(section => {
                    if (section.slides) {
                        section.slides.forEach(slide => {
                            if (slide.component) {
                                results.push(this.checkComponent(slide.component));
                            }
                        });
                    }
                });
            }
            
            return results;
        },
        
        // Add a visual indicator to slides with missing components
        markProblemSlides: function() {
            // Add a style for problem slides
            const style = document.createElement('style');
            style.textContent = `
                .problem-slide {
                    position: relative;
                }
                .problem-slide::after {
                    content: "⚠️ Component Issue";
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    background-color: #ff5722;
                    color: white;
                    padding: 5px 10px;
                    border-radius: 4px;
                    font-size: 12px;
                }
            `;
            document.head.appendChild(style);
            
            // Check all slides when they're displayed
            const originalShowSlide = window.presentation.showSlide;
            window.presentation.showSlide = function(sectionIndex, slideIndex) {
                // Call the original method
                originalShowSlide.call(this, sectionIndex, slideIndex);
                
                // Check if the current slide has a component issue
                const currentSection = window.presentationConfig.sections[sectionIndex];
                const currentSlide = currentSection.slides[slideIndex];
                
                if (currentSlide.component) {
                    const slideElement = document.querySelector('.slide.active');
                    const componentCheck = window.componentDiagnostics.checkComponent(currentSlide.component);
                    
                    if (!componentCheck.canInstantiate || !componentCheck.hasCreateContent) {
                        slideElement.classList.add('problem-slide');
                        console.error(`Problem with slide ${currentSlide.id} (${currentSlide.component}):`, componentCheck);
                    }
                }
            };
        }
    };
    
    // Patch the component registry to log component registration
    if (window.componentRegistry) {
        const originalRegister = window.componentRegistry.register;
        window.componentRegistry.register = function(name, ComponentClass) {
            console.log(`Registering component: ${name}`);
            try {
                originalRegister.call(this, name, ComponentClass);
                window.componentDiagnostics.logLoadAttempt(name, true);
            } catch (error) {
                console.error(`Error registering component ${name}:`, error);
                window.componentDiagnostics.logLoadAttempt(name, false, error);
            }
        };
        
        const originalGet = window.componentRegistry.get;
        window.componentRegistry.get = function(name, slideData) {
            console.log(`Getting component: ${name}`);
            try {
                const component = originalGet.call(this, name, slideData);
                window.componentDiagnostics.logRenderAttempt(name, !!component);
                return component;
            } catch (error) {
                console.error(`Error getting component ${name}:`, error);
                window.componentDiagnostics.logRenderAttempt(name, false, error);
                return null;
            }
        };
    }
    
    // Run diagnostics after the page loads
    document.addEventListener('DOMContentLoaded', function() {
        // Wait a bit for everything to initialize
        setTimeout(function() {
            console.log('Running component diagnostics...');
            const results = window.componentDiagnostics.checkAllComponents();
            console.log('Component diagnostics results:', results);
            
            // Mark problem slides
            window.componentDiagnostics.markProblemSlides();
            
            // Generate a report
            window.componentDiagnostics.generateReport();
            
            // Add a button to generate a report
            const reportButton = document.createElement('button');
            reportButton.textContent = 'Component Diagnostics';
            reportButton.style.position = 'fixed';
            reportButton.style.bottom = '10px';
            reportButton.style.right = '10px';
            reportButton.style.zIndex = '9999';
            reportButton.style.padding = '5px 10px';
            reportButton.style.backgroundColor = '#2196F3';
            reportButton.style.color = 'white';
            reportButton.style.border = 'none';
            reportButton.style.borderRadius = '4px';
            reportButton.style.cursor = 'pointer';
            
            reportButton.addEventListener('click', function() {
                const report = window.componentDiagnostics.generateReport();
                
                // Create a modal to display the report
                const modal = document.createElement('div');
                modal.style.position = 'fixed';
                modal.style.top = '0';
                modal.style.left = '0';
                modal.style.width = '100%';
                modal.style.height = '100%';
                modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
                modal.style.zIndex = '10000';
                modal.style.display = 'flex';
                modal.style.justifyContent = 'center';
                modal.style.alignItems = 'center';
                
                const modalContent = document.createElement('div');
                modalContent.style.backgroundColor = 'white';
                modalContent.style.padding = '20px';
                modalContent.style.borderRadius = '4px';
                modalContent.style.maxWidth = '80%';
                modalContent.style.maxHeight = '80%';
                modalContent.style.overflow = 'auto';
                
                const closeButton = document.createElement('button');
                closeButton.textContent = 'Close';
                closeButton.style.marginTop = '20px';
                closeButton.style.padding = '5px 10px';
                closeButton.style.backgroundColor = '#f44336';
                closeButton.style.color = 'white';
                closeButton.style.border = 'none';
                closeButton.style.borderRadius = '4px';
                closeButton.style.cursor = 'pointer';
                
                closeButton.addEventListener('click', function() {
                    document.body.removeChild(modal);
                });
                
                // Create a table to display component status
                const table = document.createElement('table');
                table.style.width = '100%';
                table.style.borderCollapse = 'collapse';
                table.style.marginBottom = '20px';
                
                // Add table header
                const thead = document.createElement('thead');
                const headerRow = document.createElement('tr');
                ['Component', 'In Window', 'In Window+Suffix', 'In Registry', 'Can Instantiate', 'Has createContent', 'Error'].forEach(header => {
                    const th = document.createElement('th');
                    th.textContent = header;
                    th.style.padding = '8px';
                    th.style.textAlign = 'left';
                    th.style.borderBottom = '1px solid #ddd';
                    headerRow.appendChild(th);
                });
                thead.appendChild(headerRow);
                table.appendChild(thead);
                
                // Add table body
                const tbody = document.createElement('tbody');
                const componentChecks = window.componentDiagnostics.checkAllComponents();
                componentChecks.forEach(check => {
                    const row = document.createElement('tr');
                    
                    // Add cells for each property
                    const properties = ['componentName', 'inWindow', 'inWindowWithSuffix', 'inRegistry', 'canInstantiate', 'hasCreateContent', 'error'];
                    properties.forEach(prop => {
                        const td = document.createElement('td');
                        td.style.padding = '8px';
                        td.style.borderBottom = '1px solid #ddd';
                        
                        if (prop === 'error') {
                            td.textContent = check[prop] || '-';
                        } else if (typeof check[prop] === 'boolean') {
                            td.textContent = check[prop] ? '✅' : '❌';
                            if (!check[prop]) {
                                td.style.color = 'red';
                            }
                        } else {
                            td.textContent = check[prop];
                        }
                        
                        row.appendChild(td);
                    });
                    
                    tbody.appendChild(row);
                });
                table.appendChild(tbody);
                
                modalContent.appendChild(document.createElement('h2')).textContent = 'Component Diagnostics Report';
                modalContent.appendChild(table);
                modalContent.appendChild(closeButton);
                
                modal.appendChild(modalContent);
                document.body.appendChild(modal);
            });
            
            document.body.appendChild(reportButton);
        }, 1000);
    });
})();
