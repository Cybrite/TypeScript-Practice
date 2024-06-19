import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice('yoshi', 'web work', 250);
// docTwo = new Payment('mario', 'plumbing', 200);
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
const form = document.querySelector(".new-item-form");
console.log(form.children);
// inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, "start");
});
// // Generics
// const addUID = <T extends object>(obj: T) => {
//   let uid = Math.floor(Math.random() * 100);
//   return { ...obj, uid };
// };
// let docOne = addUID({ name: "ninja", age: 40 });
// console.log(docOne.name);
// // with interfaces
// interface Resources<T> {
//   uid: number;
//   resourceName: string;
//   data: T;
// }
// const docThree: Resources<string> = {
//   uid: 1,
//   resourceName: "person1",
//   // data: { name: "ninja", age: 40, work: "spy" },
//   data: "ninja",
// };
// const docFour: Resources<object> = {
//   uid: 2,
//   resourceName: "person2",
//   data: { name: "agent", age: 40, work: "spy" },
// };
// const docFive : Resources<string[]> = {
//   uid: 3,
//   resourceName: "person3",
//   data: ['ninja', 'agent', 'mario'],
// }
// console.log(docThree, docFour, docFive);
// ENUMS
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["FILM"] = 1] = "FILM";
    ResourceType[ResourceType["AUTHOR"] = 2] = "AUTHOR";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
const docThree = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: { title: 'cook of the hook' },
};
const docFour = {
    uid: 2,
    resourceType: ResourceType.PERSON,
    data: { name: "agent", age: 40, work: "spy" },
};
console.log(docThree, docFour);
