import Person from "./Person.js";

export default class Employee extends Person {
    #salary;
    constructor(firstname, lastname, gender, birthday, salary) {
        super(firstname, lastname, gender, birthday);
        this.#salary = salary;
    }

    salary() {
        return this.#salary;
    }

    toString() {
        return `${super.toString()} ${this.salary()}`
    }
}
