// TypeScript supports three access modifiers on class members:
// - `public` (default): accessible anywhere.
// - `protected`: accessible within the class and its subclasses.
// - `private`: accessible only within the class itself.
// - Additionally, `readonly` can be combined with any modifier to prevent reassignment after initialization.

// protected allows subclasses (Dog) to access species, but external code cannot.

class Animal {
  protected species: string;

  constructor(species: string) {
    this.species = species;
  }

  protected getSpecies(): string {
    return this.species;
  }
}

class Dog extends Animal {
  private name: string;

  constructor(name: string) {
    super("Canine");
    this.name = name;
  }

  public info(): string {
    // can access protected species via inherited method
    return `${this.name} is a ${this.getSpecies()}.`;
  }
}

const rex = new Dog("Rex");
console.log(rex.info());      // "Rex is a Canine."
// console.log(rex.species);   // ❌ Error: 'species' is protected
// console.log(rex.getSpecies()); // ❌ Error: 'getSpecies' is protected
// console.log(rex.name);      // ❌ Error: 'name' is private

