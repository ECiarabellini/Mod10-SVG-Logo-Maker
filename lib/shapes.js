// make functions for all of these lines of the test code:
// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

//it is recommended that you place any common functionality and properties shared by the Triangle, Circle, and Square 
//   classes in a parent Shape class and use inheritance to reuse the code in the child classes

// Exports `Triangle`, `Circle`, and `Square` classes

class Shape {
    constructor(txt_color, background_color, txt){
        this.txt_color = txt_color;
        this.background_color = background_color;
        this.txt = txt;
    }
    setColor(newColor) {
        this.background_color = newColor;
    }
    setTextColor(newColor) {
        this.txt_color = newColor;
    }
    setText(newText) {
        this.txt = newText;
    }
};


class Triangle extends Shape {
    constructor(txt_color, background_color, txt){
        super(txt_color, background_color, txt);
    }
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.background_color}" />`;
    }
};

class Circle extends Shape {
    constructor(txt_color, background_color, txt){
        super(txt_color, background_color, txt);
    }
    render() {
        return `<circle cx="150" cy="150" r="140" fill="${this.background_color}" />`;
    }
};

class Square extends Shape {
    constructor(txt_color, background_color, txt){
        super(txt_color, background_color, txt);
    }
    render() {
        return `<rect width="300" height="300" fill="${this.background_color}" />`;
    }
};


module.exports = {
    Shape,
    Triangle,
    Circle,
    Square,
};
