//classes
import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice("ralph", "design", 200);
docTwo = new Invoice("sarah", "PR", 100);

let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);

console.log(docs);

docs.forEach((doc) => {
  console.log(doc.format());
});

// const invOne = new Invoice("mario", "work on marios cart", 500);
// const invTwo = new Invoice("luigi", "work on luigi cart", 1500);

// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);

// // invOne.client = "apple";

// invoices.forEach((inv) => {
//   console.log(inv.client, inv.amount, inv.format());
// });

const form = document.querySelector(".new-item-form") as HTMLFormElement; //type casting
console.log(form.children);

//inputs
const type = document.querySelector("#type") as HTMLInputElement;
const tofrom = document.querySelector("#toform") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

const ul = document.querySelector('ul');

form.addEventListener('submit', (e: Event) => {
  e.preventDefault;

  let doc : HasFormatter;
  if(type.value === 'invoice'){
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  }else{
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }

  console.log(doc);
});

// //interfaces
// interface IsPerson {
//   name: string;
//   age: number;
//   speak(a: string): void;
//   spend(a: number): number;
// }

// const me: IsPerson = {
//   name: "Max",
//   age: 20,
//   speak(text: string): void {
//     console.log(text);
//   },
//   spend(amount: number): number {
//     console.log(amount);
//     return amount;
//   },
// };

// console.log(me);

// const greetPerson = (person: IsPerson) => {
//   console.log("hello", person.name);
// };

// greetPerson(me);
