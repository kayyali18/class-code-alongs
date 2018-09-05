class Box {
    constructor(height, width) {
        this.height = height || 100;
        this.width = width || 100;
    }

    area () {
        return this.height * this.width;
    }

    increment (amount, side) {
        if (side == 'height') return this.height += amount;
        return this.width += amount;
    }
}


module.exports = Box;