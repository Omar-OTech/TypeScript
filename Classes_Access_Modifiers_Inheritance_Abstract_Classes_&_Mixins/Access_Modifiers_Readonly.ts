// TypeScript supports three access modifiers on class members:
// - `public` (default): accessible anywhere.
// - `protected`: accessible within the class and its subclasses.
// - `private`: accessible only within the class itself.
// - Additionally, `readonly` can be combined with any modifier to prevent reassignment after initialization.

// readonly properties can be set in the constructor but cannot be changed afterward.

class Config {
  readonly apiEndpoint: string;

  constructor(endpoint: string) {
    this.apiEndpoint = endpoint;
  }
}

const cfg = new Config("https://api.example.com");
// cfg.apiEndpoint = "https://new-endpoint.com"; // ❌ Error: Cannot assign to readonly property
