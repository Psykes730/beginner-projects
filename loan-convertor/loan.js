function calculateLoan(){
    amountValue = document.getElementById("loan-amount").value;

    interestValue = document.getElementById("interest-rate").value;
    
    monthsToPay = document.getElementById("months-to-pay").value;

    interest = (amountValue * (interestValue * 0.01))/ monthsToPay;

    monthlyPayment = (amountValue / monthsToPay + interest).toFixed(2);

    document.querySelector(".payments").innerHTML = `Monthly Payment: R${monthlyPayment}`;
    
}