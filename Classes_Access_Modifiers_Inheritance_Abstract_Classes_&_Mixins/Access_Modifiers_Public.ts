// TypeScript supports three access modifiers on class members:
// - `public` (default): accessible anywhere.
// - `protected`: accessible within the class and its subclasses.
// - `private`: accessible only within the class itself.
// - Additionally, `readonly` can be combined with any modifier to prevent reassignment after initialization.

class User {
  public username: string; // same as: username: string

  constructor(username: string) {
    this.username = username;
  }

  public login(): void {
    console.log(`${this.username} logged in.`);
  }
}

const u = new User("alice");
console.log(u.username); // OK
u.login();               // OK
