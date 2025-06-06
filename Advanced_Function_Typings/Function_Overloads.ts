// Overload signatures (the first two lines) describe how callers can invoke combine.
// The implementation signature (function combine(a: any, b: any)) must cover all cases.


// 1. Overload signatures
function Combine(a: number, b: number): number;
function Combine(a: string, b: string): string;

// 2. Implementation signature (must be compatible with all overloads)
function Combine(a: any, b: any): any {
    if (typeof a === "number" && typeof b === "number") {
        return a + b; // If both are numbers, return their sum
    }

    if (typeof a === "string" && typeof b === "string") {
        return a + b; // If both are strings, return their concatenation
    }
    throw new Error("Invalid arguments: both arguments must be either numbers or strings.");
}

// Usage:
const sumResult = Combine(5, 10);      // inferred as number
const joinResult = Combine("Hello, ", "World!"); // inferred as string
// const err = combine(5, "Test"); // ❌ Error at compile time