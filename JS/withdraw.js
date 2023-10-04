/**
 * step-1: add event listener to the button and get input field value
 * step-2: get total withdraw and do it integer
 * step-3: make sum of previous and new withdraw amount
 * step-4: set total withdraw to the innertext
 * step-5: get total balance and do it integer
 * step-6: substruction
 * step-6.a: set new balance
 * * */
document.getElementById('Withdraw-btn').addEventListener('click', function () {
    // step-1:
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(withdrawAmountString);

    //step-7: 
    withdrawField.value = '';
    if(isNaN(newWithdrawAmount)){
        alert('Please, enter a number');
        return;
    }
    //step-2:
    const withdrawTotalElement = document.getElementById('total-withdraw');
    const withdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawAmount = parseFloat(withdrawTotalString);
    console.log(previousWithdrawAmount);

 
    

    //step-5:
    const balanceElement = document.getElementById('balance-field');
    const balanceString = balanceElement.innerText;
    const totalBalance = parseFloat(balanceString);
    
    if(newWithdrawAmount > totalBalance){
        alert('You have not sufficinet Balance. Please, Check your balance');
        return;
    }

       // step-3:

       const totalWithdrawAmount = previousWithdrawAmount + newWithdrawAmount;
       // step-4: 
    withdrawTotalElement.innerText = totalWithdrawAmount;
    //step-6:
    const newBalance = totalBalance - newWithdrawAmount;
    // step-6.a:
    balanceElement.innerText = newBalance;


})