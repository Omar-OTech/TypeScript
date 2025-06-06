// You can enforce that T must extend a certain interface or type

interface HasLength {
  length: number;
}

function logLength<T extends HasLength>(item: T): T {
  console.log(item.length);
  return item;
}

logLength("Hello");         // OK: string has length property
logLength([1, 2, 3]);       // OK: array has length
// logLength(123);          // ❌ Error: number doesn't have length
