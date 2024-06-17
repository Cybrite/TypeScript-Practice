let age : any = 45;
console.log(age)
age = 'hello';
console.log(age)
age = true;
console.log(age)

let mixed : any[] = [];
mixed.push(5);
mixed.push('hello');
mixed.push(true);
console.log(mixed)


let obj : {name:any , age : any};
obj = {
    name : 'hello',
    age : 45
}