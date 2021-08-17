function getInputValue(inputID) {
    const inputField = document.getElementById(inputID).value;
    const amountvalue = parseFloat(inputField);
    //making input off
    document.getElementById(inputID).value = '';

    return amountvalue;

}
function totalField(inputID, dipositInput) {
    var depositTotal = document.getElementById(inputID);
    const depositTotal2 = depositTotal.innerText;
    const newDepositToal = dipositInput + parseFloat(depositTotal2);
    depositTotal.innerText = newDepositToal;
    console.log(newDepositToal);
}

function totalBalanceField(dipositInput, isTrue) {
    var currentValue = document.getElementById('balance-show');
    const updatedValueText = currentValue.innerText;
    const updatedValue = parseFloat(updatedValueText);
    if (isTrue) {
        currentValue.innerText = dipositInput + parseFloat(updatedValue);
    }
    else {
        currentValue.innerText = parseFloat(updatedValue) - dipositInput;
    }


}


document.getElementById('deposit-button').addEventListener('click', function () {

    //deposit input
    const dipositInput = getInputValue('deposit-amount');

    //deposit calculation

    // var depositTotal = document.getElementById('deposit-show');
    // const depositTotal2 = depositTotal.innerText;
    // const newDepositToal = dipositInput + parseFloat(depositTotal2);
    // depositTotal.innerText = newDepositToal;


    // total amount calculation
    /*const totalBalance = document.getElementById('balance-show');
    const totalBalanceInnertext = totalBalance.innerText;
    const newBalanceToal = dipositInput + parseFloat(totalBalanceInnertext);
    totalBalance.innerText = newBalanceToal;*/

    totalField('deposit-show', dipositInput);
    totalBalanceField(dipositInput, true);


    //making input off
    document.getElementById('deposit-amount').value = '';


})

// Withdraw

document.getElementById('withdraw-button').addEventListener('click', function () {

    //Taking withdraw input using function
    const withdrawInput = getInputValue('withdraw-amount');

    //Withdraw div
    /*const withdrawTotal = document.getElementById('withdraw-show');
    const withdrawInputText = withdrawTotal.innerText;
    const newWithdrawTotal = withdrawInput + parseFloat(withdrawInputText);
    withdrawTotal.innerText = newWithdrawTotal;*/
    totalField('withdraw-show', withdrawInput);


    //Total balance after withdraw
    /*const totalBalance = document.getElementById('balance-show');
    const totalBalanceInnertext = totalBalance.innerText;
    const newBalanceToal = parseFloat(totalBalanceInnertext) - parseFloat(withdrawInput);
    totalBalance.innerText = newBalanceToal;*/
    totalBalanceField(withdrawInput, false);
    // /making input off


})
