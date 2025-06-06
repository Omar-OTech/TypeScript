// Union types allow multiple possibilities


type Primitive = string | number | boolean;

function logValue(val: Primitive): void {
  console.log(val);
}

logValue("hello");
logValue(42);
logValue(false);


// Inside the function, TypeScript knows val can be any of those three types. If you want to do something specific (e.g., call val.toFixed() only when it’s a number), use a type guard
function format(val: string | number) {
    if (typeof val === "string") {
        return val.trim().toUpperCase();
    } else {
        return val.toFixed(2);
    }
}