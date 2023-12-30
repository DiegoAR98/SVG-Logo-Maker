// Import the base Shape class
const Shape = require('./Shape');

// Define the Circle class that extends the Shape class
class Circle extends Shape {
    // Constructor for the Circle class
    constructor(color, radius = 50) {
        super(color); // Call the constructor of the Shape class with the color
        this.radius = radius; // Set the radius of the circle
    }

    // Method to generate the SVG string for the circle
    render() {
        // Construct and return an SVG circle element string
        // The cx and cy attributes set the center of the circle in the SVG canvas
        // The radius of the circle is set by the r attribute
        // The fill attribute sets the color of the circle, using the color property inherited from Shape
        return `<circle cx="150" cy="100" r="${this.radius}" fill="${this.color}" />`;
    }
}

// Export the Circle class to allow it to be imported in other files
module.exports = Circle;
