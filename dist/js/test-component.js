// Test component to verify component loading
class TestComponent {
    constructor(slideData) {
        this.slideData = slideData;
        this.initialized = false;
        console.log('TestComponent constructor called');
    }
    
    render() {
        console.log('TestComponent render called');
        return `
            <div style="padding: 20px; background-color: #f0f0f0; border-radius: 8px;">
                <h3>Test Component</h3>
                <p>This is a test component to verify that component loading is working correctly.</p>
                <p>If you can see this, then the component system is working!</p>
            </div>
        `;
    }
    
    initialize() {
        console.log('TestComponent initialize called');
        this.initialized = true;
    }
    
    cleanup() {
        console.log('TestComponent cleanup called');
        this.initialized = false;
    }
}
