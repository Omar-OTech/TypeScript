// TypeScript lets you define and assign properties directly in the constructor parameters, reducing boilerplate

// public id: number inside constructor automatically creates a public id property and assigns the argument.
// This syntax covers access modifier, type annotation, and assignment in one place.

class Product {
  constructor(
    public id: number,
    private name: string,
    protected price: number,
    readonly createdOn: Date = new Date()
  ) {}

  public getLabel(): string {
    return `${this.name} ($${this.price})`;
  }
}

const p = new Product(101, "Laptop", 1299.99);
console.log(p.id);            // 101
// console.log(p.name);       // ❌ Error: 'name' is private
console.log(p.getLabel());    // "Laptop ($1299.99)"
console.log(p.createdOn);     // Date instance
