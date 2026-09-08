// ax^2 + bx + c = 0 square equation

let a, b, c;
a = 4;
b = 3;
c = 2;
let d = b ** 2 - 4 * a * c;

if (d >= 0) {
    var x1 = (-b - Math.sqrt(d)) / (2 * a);
    var x2 = (-b + Math.sqrt(d)) / (2 * a);
    console.log(`x1 = ${x1} x2 = ${x2}`);
}
else {
    console.log(`No real roots because determinant less than zero d = ${d}`);
    console.log(`x1 = ${x1} x2 = ${x2}`);
}
