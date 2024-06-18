"use strict";
const anchor = document.querySelector('a');
console.log(anchor === null || anchor === void 0 ? void 0 : anchor.href);
// const form = document.querySelector('form')!; // to let TS know about certainity
const form = document.querySelector('.new-item-form'); //type casting
console.log(form.children);
//inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#toform');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault;
});
