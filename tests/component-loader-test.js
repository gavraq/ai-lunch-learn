/**
 * Component Loader Test
 * This script tests the component loading mechanism used in the presentation.
 */

// Mock slide data for testing
const mockSlideData = {
    id: 'test-component',
    title: 'Test Component',
    component: 'TestComponent'
};

// Test class to simulate the component loading logic from presentation.js
class ComponentLoader {
    constructor() {
        this.loadingMethods = {
            registry: false,
            exactName: false,
            withComponentSuffix: false,
            fallback: false
        };
        this.loadedComponent = null;
    }
    
    // Simulate the component loading logic from presentation.js
    loadComponent(componentName, slideData) {
        console.log(`Attempting to load component: ${componentName}`);
        let component = null;
        
        // Method 1: Try component registry
        if (window.componentRegistry && typeof window.componentRegistry.get === 'function') {
            component = window.componentRegistry.get(componentName, slideData);
            if (component) {
                console.log('Component found in registry:', componentName);
                this.loadingMethods.registry = true;
                this.loadedComponent = component;
                return component;
            }
        }
        
        // Method 2: Try exact name as provided in config
        if (window[componentName]) {
            const ComponentClass = window[componentName];
            console.log('Found component with exact name:', componentName);
            component = new ComponentClass(slideData);
            this.loadingMethods.exactName = true;
            this.loadedComponent = component;
            return component;
        } 
        
        // Method 3: Try with Component suffix if not already ending with it
        if (!componentName.endsWith('Component') && window[componentName + 'Component']) {
            const ComponentClass = window[componentName + 'Component'];
            console.log('Found component with Component suffix:', componentName + 'Component');
            component = new ComponentClass(slideData);
            this.loadingMethods.withComponentSuffix = true;
            this.loadedComponent = component;
            return component;
        }
        
        // Fallback to placeholder
        console.log('Using PlaceholderComponent for', componentName);
        component = new PlaceholderComponent(slideData);
        this.loadingMethods.fallback = true;
        this.loadedComponent = component;
        return component;
    }
    
    // Get a report on how the component was loaded
    getLoadingReport() {
        return {
            methods: this.loadingMethods,
            success: !this.loadingMethods.fallback,
            componentType: this.loadedComponent ? this.loadedComponent.constructor.name : null,
            isBaseComponent: this.loadedComponent instanceof BaseComponent
        };
    }
}

// Function to test loading a specific component
function testComponentLoading(componentName) {
    console.log(`\n=== Testing component: ${componentName} ===`);
    
    const mockData = {
        id: `test-${componentName.toLowerCase()}`,
        title: componentName,
        component: componentName
    };
    
    const loader = new ComponentLoader();
    const component = loader.loadComponent(componentName, mockData);
    const report = loader.getLoadingReport();
    
    console.log('Loading report:', report);
    
    // Test rendering
    if (component) {
        try {
            const content = component.render();
            console.log('Render successful:', !!content);
            
            // Check if it's a placeholder or real component
            if (component instanceof PlaceholderComponent) {
                console.log('WARNING: Component rendered as placeholder');
            } else {
                console.log('Component rendered with real implementation');
            }
        } catch (error) {
            console.error('Render error:', error.message);
        }
    }
    
    return report;
}

// Function to run tests on all components
function runAllTests() {
    const components = [
        // Working components for comparison
        'IntroMain',
        'CreditRiskGoals',
        // New components that aren't working
        'PrototypingAttempts',
        'StructuredApproach',
        'DeepResearch',
        'BusinessRequirements',
        'UiUxDesign',
        'FormDesign',
        'ArchitectureDesign',
        'StateModel',
        'ConsistencyCheck',
        'ProjectPlan',
        'AICodingTools',
        'MCPServers',
        'TaskMaster',
        'VibeCodingStart',
        'Testing',
        'Documentation',
        'Backups',
        'LiveDemo'
    ];
    
    const results = {};
    
    components.forEach(component => {
        results[component] = testComponentLoading(component);
    });
    
    // Summary
    console.log('\n=== Test Summary ===');
    let successCount = 0;
    let failureCount = 0;
    
    Object.keys(results).forEach(component => {
        const success = results[component].success;
        if (success) {
            successCount++;
            console.log(`✅ ${component}: Loaded successfully via ${getLoadMethod(results[component].methods)}`);
        } else {
            failureCount++;
            console.log(`❌ ${component}: Failed to load properly, fell back to placeholder`);
        }
    });
    
    console.log(`\nTotal: ${successCount} succeeded, ${failureCount} failed`);
    
    return results;
}

// Helper to get the loading method used
function getLoadMethod(methods) {
    if (methods.registry) return 'registry';
    if (methods.exactName) return 'exact name';
    if (methods.withComponentSuffix) return 'name with Component suffix';
    return 'fallback';
}

// Export functions for use in the HTML test page
window.testComponentLoading = testComponentLoading;
window.runAllTests = runAllTests;
