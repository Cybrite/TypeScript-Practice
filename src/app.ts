import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice('yoshi', 'web work', 250);
// docTwo = new Payment('mario', 'plumbing', 200);

// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);

const form = document.querySelector(".new-item-form") as HTMLFormElement;
console.log(form.children);

// inputs
const type = document.querySelector("#type") as HTMLInputElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;
  if (type.value === "invoice") {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }

  list.render(doc, type.value, "start");
});









// Generics

const addUID = <T extends object>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};
let docOne = addUID({ name: "ninja", age: 40 });

console.log(docOne.name);

// with interfaces
interface Resources<T> {
  uid: number;
  resourceName: string;
  data: T;
}

const docThree: Resources<string> = {
  uid: 1,
  resourceName: "person1",
  // data: { name: "ninja", age: 40, work: "spy" },
  data: "ninja",
};

const docFour: Resources<object> = {
  uid: 2,
  resourceName: "person2",
  data: { name: "agent", age: 40, work: "spy" },
};

const docFive : Resources<string[]> = {
  uid: 3,
  resourceName: "person3",
  data: ['ninja', 'agent', 'mario'],
}

console.log(docThree, docFour, docFive);