type Mapper<T, U> = (input: T) => U;

const numberToString: Mapper<number, string> = (n) => n.toString();
const boolToNumber: Mapper<boolean, number> = (b) => (b ? 1 : 0);
const stringToLength: Mapper<string, number> = (s) => s.length;
const arrayToFirstElement: Mapper<any[], any> = (arr) => arr[0];

// Example usage:
const numToStr = numberToString(42); // "42"
const boolToNum = boolToNumber(true); // 1
const strLength = stringToLength("Hello"); // 5
const firstElement = arrayToFirstElement([1, 2, 3]); // 1
console.log(numToStr, boolToNum, strLength, firstElement); // "42", 1, 5, 1