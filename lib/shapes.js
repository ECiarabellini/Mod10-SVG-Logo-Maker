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


class Triangle extends Shape {
    constructor(textColor, backgroundColor, text){
        super(textColor, backgroundColor, text);
    }
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.backgroundColor}" />`;
    }
};

class Circle extends Shape {
    constructor(textColor, backgroundColor, text){
        super(textColor, backgroundColor, text);
    }
    render() {
        return `<circle cx="150" cy="150" r="140" fill="${this.backgroundColor}" />`;
    }
};

class Square extends Shape {
    constructor(textColor, backgroundColor, text){
        super(textColor, backgroundColor, text);
    }
    render() {
        return `<rect width="300" height="300" fill="${this.backgroundColor}" />`;
    }
};


module.exports = {
    Shape,
    Triangle,
    Circle,
    Square,
};