// const anchor = document.querySelector('a');

// console.log(anchor?.href);

//classes
class Invoice {
  //   readonly client: string;
  //   private details: string;
  //   public amount: number;

  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.client} owns $${this.amount} for ${this.details}`;
  }
}

const invOne = new Invoice("mario", "work on marios cart", 500);
const invTwo = new Invoice("luigi", "work on luigi cart", 1500);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

// invOne.client = "apple";

invoices.forEach((inv) => {
  console.log(inv.client, inv.amount, inv.format());
});

const form = document.querySelector(".new-item-form") as HTMLFormElement; //type casting
console.log(form.children);

//inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#toform") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault;

  console.log(type.value);
  console.log(tofrom.value);
  console.log(details.value);
  console.log(amount.valueAsNumber);
});
