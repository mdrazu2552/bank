//step-1: add event listener to the deposit button
document.getElementById('deposit-btn').addEventListener('click', function(){
    //step-2: get the deposit amount from the deposit input field
    // for input field use .value to the value inside the input field
    const depositField = document.getElementById('deposit-field');
    const depositAmountString = depositField.value;
    const newDepositAmount = parseFloat(depositAmountString);

    if(isNaN(newDepositAmount)){
        alert('Please, Enter a number');
        return;
    }
        // step-7: clear the deposit field 
        depositField.value ='';
   

    //step-3: get the current deposit total
    // for non-input (element other that input, textarea) use innerText ot get text
    const totalDepositeElement = document.getElementById('total-deposit');
    const previousDepositAmountString = totalDepositeElement.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountString);
    const totalDeposit = previousDepositAmount + newDepositAmount;
    totalDepositeElement.innerText = totalDeposit;

    //step-4: get balance element and do it integer and sum
    const balanceElement =document.getElementById('balance-field');
    const balanceString = balanceElement.innerText;
    const totalBalance = parseFloat(balanceString);
    const balance = totalBalance + newDepositAmount;
    balanceElement.innerText = balance;


  
   
});