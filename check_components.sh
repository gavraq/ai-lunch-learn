#!/bin/bash

# Script to check component class names and registrations
echo "Checking component class names and registrations..."
echo "=================================================="

# Directory containing component files
COMPONENTS_DIR="/Users/gavinslater/projects/ai-lunch-learn/dist/js/components/slides"
COMPONENTS_JS="/Users/gavinslater/projects/ai-lunch-learn/dist/js/components.js"

# Loop through all component files
for file in "$COMPONENTS_DIR"/*.js; do
    # Skip index.js
    if [[ $(basename "$file") == "index.js" ]]; then
        continue
    fi
    
    # Get the filename without extension
    filename=$(basename "$file" .js)
    
    # Extract the class name from the file
    class_name=$(grep -m 1 "class" "$file" | awk '{print $2}')
    
    # Check if the class name is found in components.js
    if grep -q "componentRegistry.register('$filename'" "$COMPONENTS_JS"; then
        # Check if the class name matches the registration
        if grep -q "componentRegistry.register('$filename', $class_name)" "$COMPONENTS_JS"; then
            echo "✅ $filename: Class name ($class_name) matches registration"
        else
            echo "❌ $filename: Class name ($class_name) does NOT match registration"
        fi
    else
        echo "⚠️ $filename: No registration found"
    fi
done

echo "=================================================="
echo "Check complete"
