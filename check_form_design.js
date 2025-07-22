// Script to check FormDesignComponent for errors
console.log("Starting FormDesignComponent check...");

// Check if FormDesignComponent exists
if (typeof FormDesignComponent === 'undefined') {
    console.error("ERROR: FormDesignComponent is not defined");
} else {
    console.log("FormDesignComponent class exists");
    
    try {
        // Create a test instance
        const testInstance = new FormDesignComponent({
            id: 'test-form-design',
            title: 'Test Form Design'
        });
        
        console.log("Successfully created instance");
        
        // Check methods
        const methods = Object.getOwnPropertyNames(Object.getPrototypeOf(testInstance));
        console.log(`Methods: ${methods.join(", ")}`);
        
        // Test render method
        if (typeof testInstance.render === 'function') {
            console.log("render() method exists");
            try {
                const rendered = testInstance.render();
                console.log("Successfully called render()");
                console.log(`Render output length: ${rendered.length} characters`);
            } catch (error) {
                console.error(`ERROR in render(): ${error.message}`);
                console.error(error.stack);
            }
        } else {
            console.error("ERROR: render() method does not exist");
        }
        
        // Test createContent method
        if (typeof testInstance.createContent === 'function') {
            console.log("createContent() method exists");
            try {
                const content = testInstance.createContent();
                console.log("Successfully called createContent()");
                console.log(`Content type: ${content instanceof HTMLElement ? 'HTMLElement' : typeof content}`);
            } catch (error) {
                console.error(`ERROR in createContent(): ${error.message}`);
                console.error(error.stack);
            }
        } else {
            console.error("ERROR: createContent() method does not exist");
        }
    } catch (error) {
        console.error(`ERROR: ${error.message}`);
        console.error(error.stack);
    }
}
