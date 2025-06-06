// In a browser context, you often fetch an element from the DOM. TypeScript’s standard document.getElementById returns HTMLElement | null. If you know it's actually an <input> (HTMLInputElement), assert accordingly

const inputEl = document.getElementById("email") as HTMLInputElement;
inputEl.value = "user@example.com";

// If you need to access a specific property or method of the asserted type, you can do so without TypeScript errors
inputEl.focus(); // Now you can call focus() without TypeScript errors

// If the element doesn’t exist, inputEl might be null, so you may want a null-check or use the non-null assertion operator (!)
const inputEl2 = document.getElementById("email2") as HTMLInputElement;
if (inputEl2) {
    inputEl2.value = "user@example.com";
}
// Or, if you’re sure it exists:
const sureInputEl = document.getElementById("email3") as HTMLInputElement;
sureInputEl.value = "Bop";