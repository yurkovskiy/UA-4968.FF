export default class Person {
  #firstname;
  #lastname;
  #gender;
  #birthday;

  constructor(firstname, lastname, gender, birthday) {
    this.#firstname = firstname;
    this.#lastname = lastname;
    this.#gender = gender;
    this.#birthday = birthday;
  }

  toString() {
    return `${this.#firstname} ${this.#lastname} ${this.#gender} ${this.#birthday}`;
  }
}

