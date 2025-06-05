function multiply(a: number, b: number = 1): number {
    return a * b;
}

console.log(multiply(5)); // Output: 5
console.log(multiply(5, 2)); // Output: 10
// console.log(multiply(5, "2")); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.