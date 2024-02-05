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

describe('text', () => {
    describe('triangle', () => {
        it('should show AAA in yellow', () => {
            const shape = new Triangle();
            shape.setTextColor("yellow");
            shape.setText("AAA");
            expect(shape.renderText()).toEqual('<text x="150" y="139" text-anchor="middle" alignment-baseline="middle" fill="yellow" font-size="40">AAA</text>');
        });
    });

    describe('square', () => {
        it('should show ABC in pink', () => {
            const shape = new Square();
            shape.setTextColor("pink");
            shape.setText("ABC");
            expect(shape.renderText()).toEqual('<text x="150" y="160" text-anchor="middle" alignment-baseline="middle" fill="pink" font-size="100">ABC</text>');
        });
    });

    describe('circle', () => {
        it('should show ZZZ in color #B2EBF2', () => {
            const shape = new Circle();
            shape.setTextColor("#B2EBF2");
            shape.setText("ZZZ");
            expect(shape.renderText()).toEqual('<text x="150" y="165" text-anchor="middle" alignment-baseline="middle" fill="#B2EBF2" font-size="91">ZZZ</text>');
        });
    });
});