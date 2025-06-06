interface User {
  id: number;
  name: string;
  isAdmin: boolean;
}

const alice: User = {
  id: 1,
  name: "Alice",
  isAdmin: true,
};

const bob: User = {
  id: 2,
  name: "Bob",
  isAdmin: false,
};

function getUserInfo(user: User): string {
  return `${user.name} (ID: ${user.id}) is ${user.isAdmin ? "an admin" : "not an admin"}.`;
}

console.log(getUserInfo(alice)); // "Alice (ID: 1) is an admin."
console.log(getUserInfo(bob));   // "Bob (ID: 2) is not an admin."