// const { assert } = require ('chai'); this is the destructured form if importing
const assert = require ('chai').assert;
const Box = require('../Box.js');

describe('Box', () => {
    it ('should return true', () => {
        assert.equal(true, true);
    });

    it ('should be a function', () => {
        var box = new Box ();
        assert.typeOf (Box, 'function')
    })

    it ('should have a height and width of 100 by default', () => {
        var box = new Box ();
        assert.equal (box.height, 100);
        assert.equal (box.width, 100);
    })

    it ('should be able to have custom height and width', () => {
        var box = new Box (30, 30);
        assert.equal (box.height, 30);
        assert.equal (box.width, 30);
    })

    it ('should be able to calculate the area', () => {
        var box = new Box (30, 30);
        assert.equal (box.area(), 900);
    })

    it ('should be able to increment width or height', () => {
        var box = new Box ();

        box.increment (10, 'height');
        assert.equal (box.height, 110);

        box.increment (10, 'width');
        assert.equal (box.width, 110);
    });
});