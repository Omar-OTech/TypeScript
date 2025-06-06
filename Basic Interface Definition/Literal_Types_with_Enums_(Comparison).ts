// Using a union of string literals vs. an enum
type Size = "small" | "medium" | "large";
let shirt: Size = "medium"; // Valid
// let shirt2: Size = "extra-large"; // ❌ Error: Type '"extra-large"' is not assignable to type 'Size'.

// Enum for the same purpose
enum shirtSize {
    Small = "small",
    Medium = "medium",
    Large = "large"
}

let myShirt: shirtSize = shirtSize.Medium; // Valid
// myShirt = "extra-large"; // ❌ Error: Type '"extra-large"' is not assignable to type 'shirtSize'.


// Use literal unions if you want lightweight, compile-time-only checks.
// Enums create actual runtime objects (useful if you need a reverse mapping or values attached).