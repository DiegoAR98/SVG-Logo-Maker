const readline = require('readline');
const { createSVG, saveSVGToFile } = require('./lib/utils/svgCreator');
const Square = require('./lib/shapes/Square');
const Triangle = require('./lib/shapes/Triangle');
const Circle = require('./lib/shapes/Circle');

// Create a readline interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to ask questions and return user input
function askQuestion(query) {
    return new Promise(resolve => rl.question(query, resolve));
}

// Main function to run the application
async function main() {
    try {
        // Collect user inputs
        const text = await askQuestion('Enter up to three characters for the logo: ');
        const textColor = await askQuestion('Enter the text color (keyword or hex): ');
        const shapeType = await askQuestion('Choose a shape (circle, triangle, square): ');
        const shapeColor = await askQuestion('Enter the shape color (keyword or hex): ');

        // Create shape instance based on user input
        let shape;
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
                throw new Error('Invalid shape type');
        }

        // Generate SVG content
        const svgContent = createSVG(
            `${shape.render()}<text x="50%" y="50%" fill="${textColor}" text-anchor="middle" dominant-baseline="central">${text}</text>`
        );

        // Save the SVG to a file and output the result
        saveSVGToFile(svgContent, 'logo.svg');
    } catch (error) {
        console.error('An error occurred:', error.message);
    } finally {
        rl.close();
    }
}

// Run the application
main();
