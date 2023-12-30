const Shape = require('./Shape');

class Circle extends Shape {
    constructor(color, radius = 50) {
        super(color);
        this.radius = radius;
    }

    render() {
        // Ensure the circle is placed within the viewable area
        const centerX = 150; // Half of the default width
        const centerY = 100; // Half of the default height
        return `<circle cx="${centerX}" cy="${centerY}" r="${this.radius}" fill="${this.color}" />`;
    }
}

module.exports = Circle;
