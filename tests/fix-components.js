/**
 * Component Fixer
 * This script ensures that all component classes are properly registered in the global window object.
 */

// Function to make a component available in the global scope
function makeGlobal(componentName, componentClass) {
    if (typeof componentClass === 'function') {
        console.log(`Making ${componentName} available globally`);
        window[componentName] = componentClass;
        return true;
    }
    console.warn(`Component ${componentName} not found`);
    return false;
}

// Function to fix all components
function fixAllComponents() {
    console.log('Fixing component global registration...');
    
    // Fix specific components we know have issues
    if (typeof StructuredPromptingComponent === 'function') {
        window.StructuredPromptingComponent = StructuredPromptingComponent;
        console.log('Fixed StructuredPromptingComponent');
    }
    
    if (typeof AgentOrchestrationComponent === 'function') {
        window.AgentOrchestrationComponent = AgentOrchestrationComponent;
        console.log('Fixed AgentOrchestrationComponent');
    }
    
    // Fix all components in the registry
    if (window.componentRegistry && window.componentRegistry.components) {
        Object.entries(window.componentRegistry.components).forEach(([name, ComponentClass]) => {
            // Register both with and without Component suffix
            const baseName = name.endsWith('Component') ? name : name + 'Component';
            window[baseName] = ComponentClass;
            
            // Also register without the Component suffix
            if (name.endsWith('Component')) {
                const shortName = name.substring(0, name.length - 'Component'.length);
                window[shortName] = ComponentClass;
            }
        });
        console.log('Fixed all registry components');
    }
    
    return 'Component fixing complete';
}

// Export the fixing function
window.fixAllComponents = fixAllComponents;

// Run the fix immediately
fixAllComponents();

console.log('Component fixer loaded and executed');
