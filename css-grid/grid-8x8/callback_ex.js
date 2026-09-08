const add = function(a, b) {
    return a + b;
}

const sub = function(a, b) {
    return a - b;
}

function doSomething(a, b, func) {
    return func(a, b);
}


console.log(doSomething(5, 5, add));
console.log(doSomething(5, 5, sub));

