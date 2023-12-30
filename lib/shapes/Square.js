const Shape = require('./Shape');

class Square extends Shape {
    constructor(color, sideLength = 100) {
        super(color);
        this.sideLength = sideLength;
    }

    render() {
        // Ensure the square is placed within the viewable area
        const halfSide = this.sideLength / 2;
        const centerX = 150; // Half of the default width
        const centerY = 100; // Half of the default height
        const x = centerX - halfSide;
        const y = centerY - halfSide;
        return `<rect x="${x}" y="${y}" width="${this.sideLength}" height="${this.sideLength}" fill="${this.color}" />`;
    }
}

module.exports = Square;
