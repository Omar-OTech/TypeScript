// Literal Types
// Literal types allow you to restrict a variable to a specific set of values
// This is useful for APIs or functions that accept only certain string or numeric values.

let direction: "up" | "down" | "left" | "right";
direction = "up"; // Valid
direction = "down"; // Valid
// direction = "forward"; // ❌ Error: Type '"forward"' is not assignable to type '"up" | "down" | "left" | "right"'.
