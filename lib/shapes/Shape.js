class Shape {
    constructor(color = 'black') {
        this.color = color;
    }

    setColor(color) {
        this.color = color;
    }

    // This method should be overridden by specific shape classes
    render() {
        throw new Error("Render method must be implemented in derived classes");
    }
}

module.exports = Shape;
