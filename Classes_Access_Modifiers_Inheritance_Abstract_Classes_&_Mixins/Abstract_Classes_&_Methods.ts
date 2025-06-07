// Abstract classes cannot be instantiated directly; they serve as a base for subclasses.
// They may contain abstract methods (no body) that must be implemented by any concrete subclass.

// Use abstract classes when you want a common base with shared logic plus required implementations on subclasses.


abstract class Shape {
  constructor(public color: string) {}

  // Concrete method shared by all shapes
  public getColor(): string {
    return this.color;
  }

  // Abstract method—must be implemented by subclasses
  abstract getArea(): number;
}

class Rectangle extends Shape {
  constructor(color: string, public width: number, public height: number) {
    super(color);
  }

  public getArea(): number {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  constructor(color: string, public radius: number) {
    super(color);
  }

  public getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

// Cannot do: const s = new Shape("red"); // ❌ Error: Cannot instantiate abstract class
const rect = new Rectangle("blue", 10, 5);
console.log(rect.getColor());  // "blue"
console.log(rect.getArea());   // 50

const circle = new Circle("green", 3);
console.log(circle.getArea()); // ~28.274
