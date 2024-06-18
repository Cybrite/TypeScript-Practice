"use strict";
// const anchor = document.querySelector('a');
// console.log(anchor?.href);
//classes
class Invoice {
    //   readonly client: string;
    //   private details: string;
    //   public amount: number;
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owns $${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice("mario", "work on marios cart", 500);
const invTwo = new Invoice("luigi", "work on luigi cart", 1500);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
// invOne.client = "apple";
invoices.forEach((inv) => {
    console.log(inv.client, inv.amount, inv.format());
});
const form = document.querySelector(".new-item-form"); //type casting
console.log(form.children);
//inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#toform");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault;
    console.log(type.value);
    console.log(tofrom.value);
    console.log(details.value);
    console.log(amount.valueAsNumber);
});
