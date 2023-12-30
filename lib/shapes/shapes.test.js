// Import the shape classes from their respective files
const Square = require('./Square');
const Triangle = require('./Triangle');
const Circle = require('./Circle');

// Describe block defines a suite of tests for the shape classes
describe('Shape class tests', () => {
    // Test case for the Square class
    test('Square SVG generation', () => {
        // Create an instance of Square and set its color to red
        const square = new Square();
        square.setColor('red');

        // Check if the render method returns the correct SVG string for the square
        expect(square.render()).toEqual('<rect x="100" y="50" width="100" height="100" fill="red" />');
    });

    // Test case for the Triangle class
    test('Triangle SVG generation', () => {
        // Create an instance of Triangle and set its color to blue
        const triangle = new Triangle();
        triangle.setColor('blue');

        // Check if the render method returns the correct SVG string for the triangle
        expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });

    // Test case for the Circle class
    test('Circle SVG generation', () => {
        // Create an instance of Circle and set its color to green
        const circle = new Circle();
        circle.setColor('green');

        // Check if the render method returns the correct SVG string for the circle
        expect(circle.render()).toEqual('<circle cx="150" cy="100" r="50" fill="green" />');
    });
});
