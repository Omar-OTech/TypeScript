// Classes can extend other classes to inherit properties and methods.
// extends Vehicle inherits make, model, and startEngine.
// super(...) calls the parent constructor.
// Overriding startEngine() adds custom behavior but still invokes parent logic via super.startEngine().


class Vehicle {
  constructor(public make: string, public model: string) {}

  startEngine(): void {
    console.log(`Engine started: ${this.make} ${this.model}`);
  }
}

class Car extends Vehicle {
  private numberOfDoors: number;

  constructor(make: string, model: string, doors: number) {
    super(make, model);
    this.numberOfDoors = doors;
  }

  // Override startEngine to add extra behavior
  startEngine(): void {
    console.log("Pre-checks before starting engine...");
    super.startEngine(); // call parent implementation
    console.log("All systems go!");
  }

  public getDoors(): number {
    return this.numberOfDoors;
  }
}

const myCar = new Car("Toyota", "Corolla", 4);
myCar.startEngine();
// Output:
// Pre-checks before starting engine...
// Engine started: Toyota Corolla
// All systems go!

console.log(myCar.getDoors()); // 4
