// ? denotes optional. If you access description, the type is string | undefined.
// readonly prevents reassignment after initialization.

interface Product {
    readonly sku: string; // Readonly property
    name: string; // Required property
    price: number;
    description?: string; // Optional property
}

const book: Product = {
    sku: "123-456-789",
    name: "TypeScript Handbook",
    price: 29.99,
    description: "A comprehensive guide to TypeScript."
}

const gadget: Product = {
    sku: "987-654-321",
    name: "Smartphone",
    price: 699.99,
    // description is optional, so it can be omitted
};

// book.sku = "111-222-333"; // Error: Cannot assign to 'sku' because it is a read-only property

function getProductInfo(product: Product): string {
    return `Product: ${product.name} (SKU: ${product.sku}) - $${product.price}${product.description ? `\nDescription: ${product.description}` : ''}`;
}