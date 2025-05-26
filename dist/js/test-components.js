// Test script to verify component functionality
console.log('Testing components...');

// Test AIChallenge component
console.log('AIChallenge exists in global scope:', typeof AIChallenge !== 'undefined');
if (typeof AIChallenge !== 'undefined') {
    try {
        const testAIChallenge = new AIChallenge({id: 'test-ai-challenge', title: 'Test AI Challenge'});
        console.log('AIChallenge instantiated successfully');
        const content = testAIChallenge.createContent();
        console.log('AIChallenge content created:', !!content);
    } catch (error) {
        console.error('Error testing AIChallenge:', error);
    }
}

// Test Resources component
console.log('Resources exists in global scope:', typeof Resources !== 'undefined');
if (typeof Resources !== 'undefined') {
    try {
        const testResources = new Resources({id: 'test-resources', title: 'Test Resources'});
        console.log('Resources instantiated successfully');
        const content = testResources.createContent();
        console.log('Resources content created:', !!content);
    } catch (error) {
        console.error('Error testing Resources:', error);
    }
}

// Test FinalThought component
console.log('FinalThought exists in global scope:', typeof FinalThought !== 'undefined');
if (typeof FinalThought !== 'undefined') {
    try {
        const testFinalThought = new FinalThought({id: 'test-final-thought', title: 'Test Final Thought'});
        console.log('FinalThought instantiated successfully');
        const content = testFinalThought.createContent();
        console.log('FinalThought content created:', !!content);
    } catch (error) {
        console.error('Error testing FinalThought:', error);
    }
}
