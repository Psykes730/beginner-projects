const btnEl = document.querySelector('.btn');
const bmiInputEl = document.querySelector('#bmi-results')
const weightCondEl = document.querySelector('#weight-condition');

function calculateBMI(){
    const heightValue = document.querySelector('#height').value /100
    const weightValue = document.querySelector('#weight').value;
    
    const bmiValue = weightValue / (heightValue * heightValue);
    
    bmiInputEl.value = bmiValue

    if(bmiValue < 18.5){
        weightCondEl.innerText = "Under Weight"
    }else if(bmiValue >= 18.5 && bmiValue <= 24.9){
        weightCondEl.innerText = "Normal Weight"
    } else if(bmiValue >= 25 && bmiValue <= 29.9){
        weightCondEl.innerText = "Overweight";
    }else if(bmiValue >= 30){
        weightCondEl.innerText = "Obesity"
    }
}


btnEl.addEventListener('click', calculateBMI)