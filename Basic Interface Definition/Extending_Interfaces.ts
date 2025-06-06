// Interfaces can extend other interfaces, enabling reusability
// Employee inherits id and name, and adds its own properties 

interface Person {
    id: number;
    name: string;
}

interface Employee extends Person {
    position: string;
    salary: number;
}

const john: Employee = {
    id: 1,
    name: "John Doe",
    position: "Software Engineer",
    salary: 80000
}
const jane: Employee = {
    id: 2,
    name: "Jane Smith",
    position: "Project Manager",
    salary: 90000
};

function getEmployeeInfo(employee: Employee): string {
    return `${employee.name} (ID: ${employee.id}) is a ${employee.position} earning $${employee.salary}.`;
}