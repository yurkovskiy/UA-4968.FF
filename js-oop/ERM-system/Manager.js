import Employee from "./Employee.js";

export default class Manager extends Employee {
    #bonus;
    constructor(firstname, lastname, gender, birthday, salary, bonus) {
        super(firstname, lastname, gender, birthday, salary);
        this.#bonus = bonus;
    }

    // override
    salary() {
        return super.salary() + this.#bonus;
    }
}
