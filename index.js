// Import the readline module for command-line interactions
const readline = require('readline');
// Import utility functions for SVG creation and file saving
const { createSVG, saveSVGToFile } = require('./lib/utils/svgCreator');
// Import shape classes
const Square = require('./lib/shapes/Square');
const Triangle = require('./lib/shapes/Triangle');
const Circle = require('./lib/shapes/Circle');

// Setup readline interface for command-line input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Define a function to simplify asking questions on the command line
function askQuestion(query) {
    // Return a promise that resolves with the user's input
    return new Promise(resolve => rl.question(query, resolve));
}

// Define the main function where the application logic resides
async function main() {
    try {
        // Prompt user for inputs sequentially and wait for each response
        const text = await askQuestion('Enter up to three characters for the logo: ');
        const textColor = await askQuestion('Enter the text color (keyword or hex): ');
        const shapeType = await askQuestion('Choose a shape (circle, triangle, square): ');
        const shapeColor = await askQuestion('Enter the shape color (keyword or hex): ');

        // Declare a variable to hold the chosen shape
        let shape;
        // Determine which shape to create based on user input
        switch(shapeType.toLowerCase()) {
            case 'circle':
                shape = new Circle(shapeColor);
                break;
            case 'triangle':
                shape = new Triangle(shapeColor);
                break;
            case 'square':
                shape = new Square(shapeColor);
                break;
            default:
                // If an invalid shape type is entered, throw an error
                throw new Error('Invalid shape type');
        }

        // Use the createSVG function to generate the complete SVG content
        // Combine the rendered shape with text using template literals
        const svgContent = createSVG(
            `${shape.render()}<text x="50%" y="50%" fill="${textColor}" text-anchor="middle" dominant-baseline="central">${text}</text>`
        );

        // Save the generated SVG content to a file named 'logo.svg'
        saveSVGToFile(svgContent, 'logo.svg');
    } catch (error) {
        // If any errors occur, log them to the console
        console.error('An error occurred:', error.message);
    } finally {
        // Always close the readline interface when done
        rl.close();
    }
}

// Execute the main function to start the application
main();
