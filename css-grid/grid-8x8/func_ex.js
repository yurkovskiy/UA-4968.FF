// How to calc the triangle square by using 3 sides

const calcTriangleSquare = function (a, b, c) {
    const p = (a + b + c) / 2;
    return Math.sqrt(p * (p - a) * (p - b) * (p - c));
}

console.log(`Triangle square [3, 4, 5] s = ${calcTriangleSquare(3, 4, 5)}`);
console.log(`Triangle square [4, 4, 6] s = ${calcTriangleSquare(4, 4, 6)}`);
console.log(`Triangle square [5, 5, 5] s = ${calcTriangleSquare(5, 5, 5)}`);
