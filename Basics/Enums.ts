enum Role { ADMIN, READ_ONLY, AUTHOR }
const person = {
    name: "Max",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN
};


if (person.role === Role.ADMIN) {
    console.log("is admin");
}

// Using string enums
enum Role2 { Admin, User, Guest }

let myRole: Role2 = Role2.Admin; // 0
