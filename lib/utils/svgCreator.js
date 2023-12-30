const fs = require('fs');      // Import the Node.js 'fs' module for file system operations
const path = require('path');  // Import the Node.js 'path' module for working with file paths

//Creates an SVG string with a viewBox that ensures all elements are visible.
function createSVG(content, width = 300, height = 200) {
    const viewBox = `0 0 ${width} ${height}`;
    return `<svg width="${width}" height="${height}" viewBox="${viewBox}" xmlns="http://www.w3.org/2000/svg">${content}</svg>`;
}

//Writes the SVG string to a file in the 'examples' directory
function saveSVGToFile(svgString, fileName) {
    const filePath = path.join(__dirname, '..', 'examples', fileName);// Resolve the path to the 'examples' directory
    fs.writeFileSync(filePath, svgString, 'utf-8');// Write the SVG string to the file
    console.log(`Generated ${fileName}`);// Log the successful creation of the SVG fi
}

// Export the functions for use in other files
module.exports = { createSVG, saveSVGToFile };
