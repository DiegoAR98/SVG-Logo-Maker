const Shape = require('./Shape');

class Triangle extends Shape {
    constructor(color, sideLength = 100) {
        super(color);
        this.sideLength = sideLength;
    }

    render() {
        // The height of an equilateral triangle
        const height = this.sideLength * (Math.sqrt(3) / 2);
        // Center the triangle in the middle of the SVG view
        const centerX = 150; // Half of the default width
        const centerY = 100; // Half of the default height
        const halfLength = this.sideLength / 2;
        const points = [
            `${centerX},${centerY - height / 2}`, // Top point
            `${centerX + halfLength},${centerY + height / 2}`, // Bottom right
            `${centerX - halfLength},${centerY + height / 2}` // Bottom left
        ].join(' ');
        return `<polygon points="${points}" fill="${this.color}" />`;
    }
}

module.exports = Triangle;
