// Import the base Shape class
const Shape = require('./Shape');

// Define the Triangle class that extends the Shape class
class Triangle extends Shape {
    // Constructor for the Triangle class
    constructor(color, sideLength = 100) {
        super(color); // Call the constructor of the Shape class with the color
        // The sideLength parameter is not used in the current implementation
        // but is kept for potential future use or extension
    }

    // Method to generate the SVG string for the triangle
    render() {
        // Construct and return an SVG polygon element string
        // The points attribute defines the vertices of the triangle in the SVG canvas
        // The fill attribute sets the color of the triangle, using the color property inherited from Shape
        return '<polygon points="150, 18 244, 182 56, 182" fill="' + this.color + '" />';
    }
}

// Export the Triangle class to allow it to be imported in other files
module.exports = Triangle;
