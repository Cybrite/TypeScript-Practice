"use strict";
let greet;
greet = () => {
    console.log("hello there");
};
// const add = (a: number, b: number, c?: number | string ): void => {
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add(5, 10, "50");
const minus = (a, b) => {
    return a - b;
};
let result = minus(5, 2); // automatically assigned types
