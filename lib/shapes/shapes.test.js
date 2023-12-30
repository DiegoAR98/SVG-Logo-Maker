// Import the shape classes from their respective files
const Square = require('./Square');
const Triangle = require('./Triangle');
const Circle = require('./Circle');

// Describe block defines a test suite for shape class tests
describe('Shape class tests', () => {
    
    // Test case for verifying the SVG generation of the Square class
    test('Square SVG generation', () => {
        // Create a new instance of Square with color 'red' and side length 100
        const square = new Square('red', 100);

        // Check if the render method returns the correct SVG string
        expect(square.render()).toBe('<rect x="-50" y="-50" width="100" height="100" fill="red" />');
    });

    // Test case for verifying the SVG generation of the Triangle class
    test('Triangle SVG generation', () => {
        // Create a new instance of Triangle with color 'blue' and side length 100
        const triangle = new Triangle('blue', 100);

        // Calculate the height of the triangle for the SVG string
        const height = 100 * (Math.sqrt(3) / 2);

        // Check if the render method returns the correct SVG string
        expect(triangle.render()).toBe(`<polygon points="0,${-height / 2} 50,${height / 2} -50,${height / 2}" fill="blue" />`);
    });

    // Test case for verifying the SVG generation of the Circle class
    test('Circle SVG generation', () => {
        // Create a new instance of Circle with color 'green' and radius 50
        const circle = new Circle('green', 50);

        // Check if the render method returns the correct SVG string
        expect(circle.render()).toBe('<circle cx="0" cy="0" r="50" fill="green" />');
    });
});
