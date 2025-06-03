function greet(name: string, title?: string): string {
  return `Hello, ${title ? title + " " : ""}${name}`;
}

console.log(greet("Alice")); // "Hello, Alice"