const anchor = document.querySelector('a');

console.log(anchor?.href);

// const form = document.querySelector('form')!; // to let TS know about certainity
const form = document.querySelector('.new-item-form') as HTMLFormElement; //type casting
console.log(form.children)

//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#toform') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;


form.addEventListener('submit', (e : Event) => {
    e.preventDefault;

    console.log(type.value);
    console.log(tofrom.value);
    console.log(details.value);
    console.log(amount.valueAsNumber);
})