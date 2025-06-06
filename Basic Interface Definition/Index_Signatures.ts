// When you need an object with unknown property names but consistent value types
// This is useful for dictionaries, maps, or objects with dynamic keys.
interface Dictionary {
  [key: string]: string;  // any property name (string) must map to a string value
}

const capitals: Dictionary = {
  France: "Paris",
  Spain: "Madrid",
  // count: 3 // ❌ Error: 3 is not a string
};
const countries: Dictionary = {
  "United States": "Washington, D.C.",
  "Canada": "Ottawa",
  "Mexico": "Mexico City",
};

function getCapital(country: string, dict: Dictionary): string {
  return dict[country] || "Unknown capital";
}