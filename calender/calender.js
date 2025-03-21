const monthEl = document.querySelector('.month');
const dayEl = document.querySelector('.day');
const dateEl = document.querySelector('.date');
const yearEl = document.querySelector('.year');

const date = new Date();


monthEl.innerHTML = date.toLocaleString('en', {month: 'long'});
dayEl.innerHTML = date.toLocaleString('en', {weekday: "long"});
dateEl.innerHTML = date.getDate();
yearEl.innerHTML = date.getFullYear();
