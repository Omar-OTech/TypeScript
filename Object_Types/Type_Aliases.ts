type User = {
  id: number;
  name: string;
  isAdmin?: boolean;
};

let admin: User = { id: 1, name: "Bop" };

console.log(admin);
// Output: { id: 1, name: 'Bop' }