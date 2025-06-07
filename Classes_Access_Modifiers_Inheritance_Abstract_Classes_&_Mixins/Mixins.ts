// Mixins allow you to compose behaviors from multiple classes. TypeScript facilitates this via interface merging and helper functions.
// 6.1. Example: Timestampable & Activatable Behaviors
// Define base classes (behaviors) without constructors:

class Timestampable {
  createdAt: Date = new Date();
  updatedAt: Date = new Date();

  updateTimestamp(): void {
    this.updatedAt = new Date();
  }
}

class Activatable {
  isActive: boolean = false;

  activate(): void {
    this.isActive = true;
  }

  deactivate(): void {
    this.isActive = false;
  }
}


function applyMixins(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
      // Skip constructor
      if (name !== "constructor") {
        Object.defineProperty(
          derivedCtor.prototype,
          name,
          Object.getOwnPropertyDescriptor(baseCtor.prototype, name) as PropertyDescriptor
        );
      }
    });
  });
}


class Article implements Timestampable, Activatable {
  title: string;
  content: string;
  // Placeholder properties—actual methods and props come from mixins
  createdAt!: Date;
  updatedAt!: Date;
  isActive!: boolean;

  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
    // Initialize timestamps or activation state if needed
  }

  // need to declare signatures for mixin methods
  updateTimestamp!: () => void;
  activate!: () => void;
  deactivate!: () => void;
}

// Apply mixins
applyMixins(Article, [Timestampable, Activatable]);

const art = new Article("My First Post", "Hello world");
console.log(art.createdAt); // current date
art.activate();
console.log(art.isActive);  // true
art.updateTimestamp();
console.log(art.updatedAt); // updated to now


// implements Timestampable, Activatable: indicates that Article will contain these members.
// applyMixins(Article, [...]) copies methods and properties from the prototypes of Timestampable and Activatable to Article.prototype.
// Mixins are useful when you need to share behavior across classes that don’t share a direct inheritance relationship.

