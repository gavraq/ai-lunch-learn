/**
 * Component Registry System
 * 
 * This file provides a standardized approach to component registration and loading.
 * It ensures all components are properly registered and available to the presentation.
 */

class ComponentRegistry {
    constructor() {
        this.components = {};
        this.debug = true; // Enable debug logging by default
    }

    /**
     * Log a message if debug mode is enabled
     * @param {string} message - The message to log
     */
    log(message) {
        if (this.debug) {
            console.log(`[ComponentRegistry] ${message}`);
        }
    }

    /**
     * Register a component with the registry
     * @param {string} name - The name to register the component under
     * @param {class} ComponentClass - The component class to register
     */
    register(name, ComponentClass) {
        if (!ComponentClass) {
            console.error(`Cannot register ${name}: Component class is undefined`);
            return;
        }

        // Store in registry with both naming conventions for maximum compatibility
        // Store with the exact name provided
        this.components[name] = ComponentClass;
        
        // Also make available in global scope
        window[name] = ComponentClass;
        
        this.log(`Registered component: ${name}`);
    }

    /**
     * Get a component instance by name
     * @param {string} name - The name of the component to get
     * @param {object} slideData - Data to pass to the component constructor
     * @returns {object|null} - The component instance or null if not found
     */
    get(name, slideData) {
        this.log(`Looking for component: ${name}`);
        
        // Try to find the component class with the exact name
        let ComponentClass = this.components[name];
        
        if (!ComponentClass) {
            this.log(`Component not found in registry with name: ${name}`);
            
            // Try to find the component in the global window object
            if (window[name]) {
                ComponentClass = window[name];
                this.log(`Found component in window object: ${name}`);
            } else {
                this.log(`Component not found in window object: ${name}`);
                return null;
            }
        }
        
        try {
            // Create and return a new instance
            const instance = new ComponentClass(slideData);
            this.log(`Created instance of ${name}`);
            return instance;
        } catch (error) {
            console.error(`Error creating instance of ${name}:`, error);
            return null;
        }
    }

    /**
     * Check if a component is registered
     * @param {string} name - The name of the component to check
     * @returns {boolean} - Whether the component is registered
     */
    has(name) {
        return !!this.components[name];
    }

    /**
     * Get all registered component names
     * @returns {string[]} - Array of registered component names
     */
    getComponentNames() {
        return Object.keys(this.components);
    }
}

// Create a global component registry
const componentRegistry = new ComponentRegistry();

// Make the registry globally available
window.componentRegistry = componentRegistry;

/**
 * Register all components
 * This function registers all components used in the presentation
 */
function registerComponents() {
    // Introduction section components
    componentRegistry.register('AIPollComponent', AIPollComponent);
    componentRegistry.register('SuperwhisperDemoComponent', SuperwhisperDemoComponent);
    componentRegistry.register('AgenticWorldComponent', AgenticWorldComponent);
    
    // AI for Risk section components
    componentRegistry.register('CreditRiskGoalsComponent', CreditRiskGoalsComponent);
    componentRegistry.register('StructuredPromptingComponent', StructuredPromptingComponent);
    componentRegistry.register('PowerOfVoiceComponent', PowerOfVoiceComponent);
    
    // Prototyping section components
    componentRegistry.register('OldVsNewComponent', OldVsNewComponent);
    componentRegistry.register('VibeCodingComponent', VibeCodingComponent);
    componentRegistry.register('PrototypingAttemptsComponent', PrototypingAttemptsComponent);
    componentRegistry.register('StructuredApproachComponent', StructuredApproachComponent);
    componentRegistry.register('DeepResearchComponent', DeepResearchComponent);
    componentRegistry.register('BusinessRequirementsComponent', BusinessRequirementsComponent);
    componentRegistry.register('CreditWorkflowStateDiagramComponent', CreditWorkflowStateDiagramComponent);
    componentRegistry.register('UiUxDesignComponent', UiUxDesignComponent);
    componentRegistry.register('FormDesignComponent', FormDesignComponent);
    componentRegistry.register('ArchitectureDesignComponent', ArchitectureDesignComponent);
    componentRegistry.register('StateModelComponent', StateModelComponent);
    componentRegistry.register('ConsistencyCheckComponent', ConsistencyCheckComponent);
    componentRegistry.register('ProjectPlanComponent', ProjectPlanComponent);
    componentRegistry.register('AICodingToolsComponent', AICodingToolsComponent);
    componentRegistry.register('MCPServersComponent', MCPServersComponent);
    componentRegistry.register('TaskMasterComponent', TaskMasterComponent);
    componentRegistry.register('VibeCodingStartComponent', VibeCodingStartComponent);
    componentRegistry.register('TestingComponent', TestingComponent);
    componentRegistry.register('DocumentationComponent', DocumentationComponent);
    componentRegistry.register('BackupsComponent', BackupsComponent);
    componentRegistry.register('LiveDemoComponent', LiveDemoComponent);
    
    // Institutional Memory section components
    componentRegistry.register('RAGDemoComponent', RAGDemoComponent);
    
    // Next Level Agents section components
    componentRegistry.register('VoiceAgentsComponent', VoiceAgentsComponent);
    componentRegistry.register('AgentOrchestrationComponent', AgentOrchestrationComponent);
    
    // Closing section components
    componentRegistry.register('AIChallengeComponent', AIChallengeComponent);
    componentRegistry.register('ResourcesComponent', ResourcesComponent);
    componentRegistry.register('FinalThoughtComponent', FinalThoughtComponent);
    
    console.log('Component registry initialized with components:', componentRegistry.getComponentNames());
}

// Execute registration immediately
registerComponents();

// Also register on DOMContentLoaded as a fallback
document.addEventListener('DOMContentLoaded', registerComponents);
