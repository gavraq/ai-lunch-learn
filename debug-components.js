// Debug script to check component loading issues
console.log('Debug script loaded');

// Function to check if components are properly registered
function checkComponentRegistration() {
    console.log('Checking component registration...');
    
    // Components to check
    const componentsToCheck = [
        'OldVsNewComponent',
        'VibeCodingComponent'
    ];
    
    // Check registry
    console.log('Registry components:', Object.keys(window.componentRegistry.components));
    
    // Check each component
    componentsToCheck.forEach(componentName => {
        console.log(`Checking ${componentName}:`);
        console.log(`  In registry: ${window.componentRegistry.has(componentName)}`);
        console.log(`  In window: ${window[componentName] !== undefined}`);
        console.log(`  Class name if exists: ${window[componentName] ? window[componentName].name : 'N/A'}`);
        
        // Check if the component can be instantiated
        try {
            const instance = window.componentRegistry.get(componentName, {});
            console.log(`  Can instantiate: ${instance !== null}`);
            console.log(`  Instance type: ${instance ? instance.constructor.name : 'N/A'}`);
        } catch (error) {
            console.error(`  Error instantiating ${componentName}:`, error);
        }
    });
}

// Run the check when the page loads
window.addEventListener('DOMContentLoaded', () => {
    // Wait a bit to ensure all components are loaded
    setTimeout(checkComponentRegistration, 1000);
});
