// Type assertions tell the compiler “trust me, I know this value has a more specific type.” Use them sparingly to narrow from a broader type (e.g., any or unknown) to a specific one.
// 2.1. Two Syntaxes
// Angle-bracket syntax (cannot be used in JSX/TSX):

let someValue: unknown = "this is a string";
let strLength: number = (<string>someValue).length;


// as syntax (preferred in modern TypeScript):  
// as syntax (works everywhere, recommended in React/JSX):
let strLength2: number = (someValue as string).length;
// 2.2. Use Cases
// When you have a value of type any or unknown and you know its specific type
