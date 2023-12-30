// Base class for different types of shapes
class Shape {
    // Constructor that initializes a new instance with a color
    // Default color is set to 'black' if no color is provided
    constructor(color = 'black') {
        this.color = color; // Property to store the color of the shape
    }

    // Method to set the color of the shape
    // Can be used to change the color after the shape instance has been created
    setColor(color) {
        this.color = color; // Update the color property with the new color value
    }

    // This method is intended to return the SVG representation of the shape
    render() {
        // Throws an error if a derived class does not implement its own render method
        throw new Error("Render method must be implemented in derived classes");
    }
}

// Export the Shape class so that it can be extended by other shape-specific classes
module.exports = Shape;
