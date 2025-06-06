// Generics let you write functions that work with any type, preserving full type information

// <T> declares a type parameter. identity<T> returns the same type you pass in.
// Generics ensure type safety across many use cases without repeating overloads.

function identity<T>(value: T): T {
    return value;
}

// Example usage:
let num = identity<number>(42); // num is of type number
let str = identity<string>("Hello"); // str is of type string
let arr = identity<number[]>([1, 2, 3]); // arr is of type number[]

// Type inference also works:
const inferred = identity("TypeScript"); // inferred T = string