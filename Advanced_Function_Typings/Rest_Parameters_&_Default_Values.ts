// ...items: string[] captures any number of string arguments into an array.
// Parameters after a rest parameter are not allowed, so rest must be last.

function concatenate(separator: string, ...items: string[]): string {
  return items.join(separator);
}

const result = concatenate(", ", "Angular", "TypeScript", "Node");
// result: "Angular, TypeScript, Node"

console.log(result); // Output: "Angular, TypeScript, Node"