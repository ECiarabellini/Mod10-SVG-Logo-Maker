class Shape {
    constructor(textColor, backgroundColor, text){
        this.textColor = textColor;
        this.backgroundColor = backgroundColor;
        this.text = text;
    }
    setColor(newColor) {
        this.backgroundColor = newColor;
    }
    setTextColor(newColor) {
        this.textColor = newColor;
    }
    setText(newText) {
        this.text = newText;
    }
};

// The Triangle, Circle, and Square classes extend the Shape class
// Each shape has slightly different positioning and size of text to attempt to center within the shape without overflowing the edges
// render() and renderText() are separate functions per the project requirements that render() test passes with the below
class Triangle extends Shape {
    constructor(textColor, backgroundColor, text){
        super(textColor, backgroundColor, text);
    }
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.backgroundColor}" />`;
    }
    renderText() {
        return `<text x="150" y="139" text-anchor="middle" alignment-baseline="middle" fill="${this.textColor}" font-size="40">${this.text}</text>`;
    }
};

class Circle extends Shape {
    constructor(textColor, backgroundColor, text){
        super(textColor, backgroundColor, text);
    }
    render() {
        return `<circle cx="150" cy="150" r="140" fill="${this.backgroundColor}" />`;
    }
    renderText() {
        return `<text x="150" y="165" text-anchor="middle" alignment-baseline="middle" fill="${this.textColor}" font-size="91">${this.text}</text>`;
    }
};

class Square extends Shape {
    constructor(textColor, backgroundColor, text){
        super(textColor, backgroundColor, text);
    }
    render() {
        return `<rect width="300" height="300" fill="${this.backgroundColor}" />`;
    }
    renderText() {
        return `<text x="150" y="160" text-anchor="middle" alignment-baseline="middle" fill="${this.textColor}" font-size="100">${this.text}</text>`;
    }
};


module.exports = {
    Triangle,
    Circle,
    Square,
};