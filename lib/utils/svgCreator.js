const fs = require('fs');
const path = require('path');

/**
 * Creates an SVG string with a viewBox that ensures all elements are visible.
 * @param {string} content - The inner SVG content (e.g., rendered shape elements).
 * @param {number} [width=300] - The width of the SVG canvas.
 * @param {number} [height=200] - The height of the SVG canvas.
 * @returns {string} - The complete SVG string.
 */
function createSVG(content, width = 300, height = 200) {
    // Define the viewBox based on the width and height
    // You may adjust the viewBox values if elements are still not visible
    const viewBox = `0 0 ${width} ${height}`;
    return `<svg width="${width}" height="${height}" viewBox="${viewBox}" xmlns="http://www.w3.org/2000/svg">${content}</svg>`;
}

/**
 * Writes the SVG string to a file in the 'examples' directory.
 * @param {string} svgString - The SVG content to be written.
 * @param {string} fileName - The filename for the output SVG file.
 */
function saveSVGToFile(svgString, fileName) {
    // Resolve the path to the 'examples' directory
    const filePath = path.join(__dirname, '..', 'examples', fileName);
    
    // Write the SVG string to the file
    fs.writeFileSync(filePath, svgString, 'utf-8');
    
    // Log the successful creation of the SVG file
    console.log(`Generated ${fileName}`);
}

// Export the functions for use in other files
module.exports = { createSVG, saveSVGToFile };
