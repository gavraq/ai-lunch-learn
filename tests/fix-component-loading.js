/**
 * Fix Component Loading
 * This script fixes the component loading issue by making components available in the global window object.
 * 
 * To use:
 * 1. Include this script after components.js in index.html
 * 2. The script will make all components available in the global window object with the names expected by presentation.js
 */

// Make all components available in the global window object with their expected names
(function() {
    console.log('Fixing component loading...');
    
    // Map component names to their actual classes
    const componentMap = {
        // Prototyping section components
        'PrototypingAttempts': PrototypingAttemptsComponent,
        'StructuredApproach': StructuredApproachComponent,
        'DeepResearch': DeepResearchComponent,
        'BusinessRequirements': BusinessRequirementsComponent,
        'UiUxDesign': UiUxDesignComponent,
        'FormDesign': FormDesignComponent,
        'ArchitectureDesign': ArchitectureDesignComponent,
        'StateModel': StateModelComponent,
        'ConsistencyCheck': ConsistencyCheckComponent,
        'ProjectPlan': ProjectPlanComponent,
        'AICodingTools': AICodingToolsComponent,
        'MCPServers': MCPServersComponent,
        'TaskMaster': TaskMasterComponent,
        'VibeCodingStart': VibeCodingStartComponent,
        'Testing': TestingComponent,
        'Documentation': DocumentationComponent,
        'Backups': BackupsComponent,
        'LiveDemo': LiveDemoComponent
    };
    
    // Add each component to the window object
    Object.keys(componentMap).forEach(componentName => {
        if (componentMap[componentName]) {
            window[componentName] = componentMap[componentName];
            console.log(`Made ${componentName} available in window object`);
        } else {
            console.error(`Component class for ${componentName} not found`);
        }
    });
    
    console.log('Component loading fix applied');
})();
