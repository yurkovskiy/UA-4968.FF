class Triangle { // new DataType
    // data (property)
    #a;
    #b;
    #c;
    // methods (functions)
    constructor(a, b, c) {
        this.#a = a;
        this.#b = b;
        this.#c = c;
    }

    length() {
        return this.#a + this.#b + this.#c;
    }

}

const triangle_1 = new Triangle(3, 4, 5);
console.log(triangle_1.length());

const triangle_2 = new Triangle(5, 5, 5);
console.log(triangle_2.length());
