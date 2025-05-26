/**
 * Component Debug Script
 * This script helps diagnose issues with component loading
 */

console.log('Debug components script loaded');

// Check specific components that are having issues
function checkProblemComponents() {
    console.log('Checking problem components...');
    
    // Components to check
    const componentsToCheck = [
        { name: 'OldVsNewComponent', expectedClass: 'OldVsNew' },
        { name: 'VibeCodingComponent', expectedClass: 'VibeCoding' }
    ];
    
    // Check registry
    console.log('Registry components:', Object.keys(window.componentRegistry.components));
    
    // Check each component
    componentsToCheck.forEach(component => {
        const { name, expectedClass } = component;
        console.log(`\nChecking ${name}:`);
        
        // Check in registry
        const inRegistry = window.componentRegistry.has(name);
        console.log(`  In registry: ${inRegistry}`);
        
        // Check registry implementation
        const registryImpl = window.componentRegistry.components[name];
        console.log(`  Registry implementation: ${registryImpl ? registryImpl.name : 'N/A'}`);
        
        // Check in window
        const inWindow = window[expectedClass] !== undefined;
        console.log(`  Expected class in window: ${inWindow}`);
        
        // Check if the component can be instantiated
        try {
            const instance = window.componentRegistry.get(name, {});
            console.log(`  Can instantiate: ${instance !== null}`);
            console.log(`  Instance type: ${instance ? instance.constructor.name : 'N/A'}`);
            
            // Check if the instance has the expected methods
            if (instance) {
                console.log(`  Has createContent: ${typeof instance.createContent === 'function'}`);
                console.log(`  Has render: ${typeof instance.render === 'function'}`);
            }
        } catch (error) {
            console.error(`  Error instantiating ${name}:`, error);
        }
    });
}

// Run the check when the page loads
window.addEventListener('DOMContentLoaded', () => {
    // Wait a bit to ensure all components are loaded
    setTimeout(checkProblemComponents, 1000);
});

(function() {
    console.log('Component Debug Script initialized');
    
    // Check all components in the config
    function checkComponents() {
        const results = [];
        
        if (window.presentationConfig && window.presentationConfig.sections) {
            window.presentationConfig.sections.forEach(section => {
                console.log(`Checking section: ${section.title}`);
                
                if (section.slides) {
                    section.slides.forEach(slide => {
                        if (slide.component) {
                            const result = checkComponent(slide.component, slide.id, slide.title);
                            results.push(result);
                            console.log(result);
                        }
                    });
                }
            });
        }
        
        return results;
    }
    
    // Check if a component exists and can be instantiated
    function checkComponent(componentName, slideId, slideTitle) {
        const result = {
            componentName: componentName,
            slideId: slideId,
            slideTitle: slideTitle,
            inRegistry: false,
            inWindow: false,
            inWindowWithSuffix: false,
            canInstantiate: false,
            error: null
        };
        
        try {
            // Check if component exists in registry
            result.inRegistry = window.componentRegistry && 
                window.componentRegistry.components && 
                !!window.componentRegistry.components[componentName];
            
            // Check if component exists in window object
            result.inWindow = !!window[componentName];
            
            // Check if component exists in window object with Component suffix
            const nameWithSuffix = componentName.endsWith('Component') ? 
                componentName : componentName + 'Component';
            result.inWindowWithSuffix = !!window[nameWithSuffix];
            
            // Try to instantiate the component
            let ComponentClass = null;
            
            if (result.inRegistry) {
                ComponentClass = window.componentRegistry.components[componentName];
            } else if (result.inWindow) {
                ComponentClass = window[componentName];
            } else if (result.inWindowWithSuffix) {
                ComponentClass = window[nameWithSuffix];
            }
            
            if (ComponentClass) {
                try {
                    const instance = new ComponentClass({id: slideId, title: slideTitle});
                    result.canInstantiate = true;
                } catch (e) {
                    result.error = `Instantiation error: ${e.message}`;
                }
            }
        } catch (e) {
            result.error = `Check error: ${e.message}`;
        }
        
        return result;
    }
    
    // Add a button to run diagnostics
    function addDebugButton() {
        const button = document.createElement('button');
        button.textContent = 'Debug Components';
        button.style.position = 'fixed';
        button.style.bottom = '10px';
        button.style.left = '10px';
        button.style.zIndex = '9999';
        button.style.padding = '5px 10px';
        button.style.backgroundColor = '#f44336';
        button.style.color = 'white';
        button.style.border = 'none';
        button.style.borderRadius = '4px';
        button.style.cursor = 'pointer';
        
        button.addEventListener('click', function() {
            const results = checkComponents();
            
            // Create a report table
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
            modal.style.overflow = 'auto';
            
            const content = document.createElement('div');
            content.style.backgroundColor = 'white';
            content.style.padding = '20px';
            content.style.borderRadius = '4px';
            content.style.maxWidth = '90%';
            content.style.maxHeight = '90%';
            content.style.overflow = 'auto';
            
            const title = document.createElement('h2');
            title.textContent = 'Component Debug Report';
            content.appendChild(title);
            
            const table = document.createElement('table');
            table.style.width = '100%';
            table.style.borderCollapse = 'collapse';
            table.style.marginBottom = '20px';
            
            // Add table header
            const thead = document.createElement('thead');
            const headerRow = document.createElement('tr');
            ['Slide ID', 'Slide Title', 'Component Name', 'In Registry', 'In Window', 'In Window+Suffix', 'Can Instantiate', 'Error'].forEach(header => {
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
            results.forEach(result => {
                const row = document.createElement('tr');
                
                // Add cells for each property
                const properties = ['slideId', 'slideTitle', 'componentName', 'inRegistry', 'inWindow', 'inWindowWithSuffix', 'canInstantiate', 'error'];
                properties.forEach(prop => {
                    const td = document.createElement('td');
                    td.style.padding = '8px';
                    td.style.borderBottom = '1px solid #ddd';
                    
                    if (prop === 'error') {
                        td.textContent = result[prop] || '-';
                    } else if (typeof result[prop] === 'boolean') {
                        td.textContent = result[prop] ? '✅' : '❌';
                        if (!result[prop]) {
                            td.style.color = 'red';
                        }
                    } else {
                        td.textContent = result[prop];
                    }
                    
                    row.appendChild(td);
                });
                
                tbody.appendChild(row);
            });
            table.appendChild(tbody);
            
            content.appendChild(table);
            
            const closeButton = document.createElement('button');
            closeButton.textContent = 'Close';
            closeButton.style.padding = '5px 10px';
            closeButton.style.backgroundColor = '#f44336';
            closeButton.style.color = 'white';
            closeButton.style.border = 'none';
            closeButton.style.borderRadius = '4px';
            closeButton.style.cursor = 'pointer';
            
            closeButton.addEventListener('click', function() {
                document.body.removeChild(modal);
            });
            
            content.appendChild(closeButton);
            modal.appendChild(content);
            document.body.appendChild(modal);
        });
        
        document.body.appendChild(button);
    }
    
    // Run diagnostics when the page loads
    document.addEventListener('DOMContentLoaded', function() {
        setTimeout(function() {
            addDebugButton();
        }, 1000);
    });
})();
