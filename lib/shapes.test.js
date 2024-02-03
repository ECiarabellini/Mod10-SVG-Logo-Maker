const {Triangle, Circle, Square} = require('./shapes.js');

describe('shapes', () => {
    describe('triangle', () => {
        it('should make a blue triangle shape', () => {
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        });
    });

    describe('square', () => {
        it('should make a pink square shape', () => {
            const shape = new Square();
            shape.setColor("pink");
            expect(shape.render()).toEqual('<rect width="300" height="300" fill="pink" />');
        });
    });

    describe('circle', () => {
        it('should make a green circle shape', () => {
            const shape = new Circle();
            shape.setColor("green");
            expect(shape.render()).toEqual('<circle cx="150" cy="150" r="140" fill="green" />');
        });
    });

});