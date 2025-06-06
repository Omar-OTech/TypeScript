// You can also define a function signature as an interface
// Any function assigned to a variable of type MathOperation must accept two number arguments and return a number
interface MathOperation {
    (a: number, b: number): number;
}

const sum: MathOperation = (x, y) => x + y;
const product: MathOperation = (x, y) => x * y;

function calculate(op: MathOperation, a: number, b: number): number {
    return op(a, b);
}

console.log(calculate(sum, 5, 3));      // Output: 8
console.log(calculate(product, 5, 3));  // Output: 15