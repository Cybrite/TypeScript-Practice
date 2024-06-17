let greet: Function;

greet = () => {
  console.log("hello there");
};

// const add = (a: number, b: number, c?: number | string ): void => {
const add = (a: number, b: number, c: number | string = 10): void => {
  console.log(a + b);
  console.log(c);
};

add(5, 10, "50");

const minus = (a: number, b: number): number => {
  return a - b;
};

let result = minus(5, 2); // automatically assigned types
