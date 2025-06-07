// class Person: declares a class named Person.
// constructor: special method invoked when new Person(...) is called.
// greet(): instance method, available on every object created from Person.

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): string {
    return `Hello, my name is ${this.name} and I'm ${this.age} years old.`;
  }
}

const bob = new Person("Bob", 30);
console.log(bob.greet()); // "Hello, my name is Bob and I'm 30 years old."
