import Employee from "./Employee.js";
import Manager from "./Manager.js";

const emp_1 = new Employee("John", "Rambo", "M", "1946-01-01", 5000);
const emp_2 = new Employee("Jason", "Bourne", "M", "1964-01-01", 4000);
const man_1 = new Manager("Dana", "Scully", "F", "1968-01-01", 7000, 2000);

console.log(emp_1.toString());
console.log(emp_2.toString());
console.log(man_1.toString());
