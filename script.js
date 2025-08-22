//complete this code
class Rectangle {
	constructor(width,height){
		this._width=width;
		this._height=height;
	}
	getArea(){
		return (this.width*this._height);
	}
}

class Square extends Animal {
	constructor(side){
		super(side);
	}
	getperimeter(){
		return (4*this._side);
	}
}
const rectangle=new Rectangle(5,10);
console.log(rectangle.width); // Output: 5
console.log(rectangle.height); // Output: 10
console.log(rectangle.getArea());
const square = new Square(7);
console.log(square.width); // Output: 7
console.log(square.height); // Output: 7
console.log(square.getArea()); // Output: 49
console.log(square.getPerimeter()); 

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
