// explicit types

let character : string;
let age : number;
let isLoggedIn : boolean;

age = 45;

// arrays

let ninjas : string[] = [];
ninjas.push('luigi');

// union types
let mixed : (string|number|boolean)[] = [];
mixed.push(true);
mixed.push('hello');
mixed.push(50);

let uid: string | number ;

// objects
let objOne : object;
objOne = {name: 'luigi', age: 45};

let objTwo : {name: string, age: number, elderly : boolean};
