// Import the base Shape class
const Shape = require('./Shape');

// Define the Square class that extends the Shape class
class Square extends Shape {
    // Constructor for the Square class
    constructor(color, sideLength = 100) {
        super(color); // Call the constructor of the Shape class with the color
        this.sideLength = sideLength; // Set the side length of the square
    }

    // Method to generate the SVG string for the square
    render() {
        // Construct and return an SVG rectangle element string
        // The x and y attributes set the top-left corner position of the square in the SVG canvas
        // The width and height of the square are set by the sideLength property
        // The fill attribute sets the color of the square, using the color property inherited from Shape
        return `<rect x="100" y="50" width="${this.sideLength}" height="${this.sideLength}" fill="${this.color}" />`;
    }
}

// Export the Square class to allow it to be imported in other files
module.exports = Square;
