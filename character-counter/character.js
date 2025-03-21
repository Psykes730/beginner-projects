const textareaEl = document.getElementById("textarea");
const totalCounterEl = document.querySelector(".total-counter");
const remainingCounterEl = document.querySelector(".remaining-counter");



 textareaEl.addEventListener("keyup", ()=>{
    updateCounter();
 });

 updateCounter();

 function updateCounter(){
    totalCounterEl.innerText = textareaEl.value.length

    remainingCounterEl.innerText = textareaEl.getAttribute("maxLength") -textareaEl.value.length;
};