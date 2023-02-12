// step-1: add event handler with withdraw button

document.getElementById('btn-withdraw').addEventListener('click', function () {
	// step-2 get the withdraw amount from the input wihdraw field
	// for input field use .value to the inside he input field
	const withdrawField = document.getElementById('withdraw-field');
	const newWithdrawAmountString = withdrawField.value;
	const newWithdrawAmount = parseFloat(newWithdrawAmountString);

	// step-7 clear the deposit field
	withdrawField.value = '';

	if (isNaN(newWithdrawAmount)) {
		alert('provide a valid number');
		return;
	}

	// step-3: get the current withdraw total
	// for non-input(element other than input, textarea) use innerText to get the text

	const withdrawTotalElement = document.getElementById('withdraw-total');
	const previousWithdrawTotalString = withdrawTotalElement.innerText;
	const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);



	// step-5: get balance current total
	const currentTotalBalanceElement = document.getElementById('balance-total');
	const previousTotalBalanceString = currentTotalBalanceElement.innerText;
	const previousTotalBalance = parseFloat(previousTotalBalanceString);

	

	if (newWithdrawAmount > previousTotalBalance) {
		alert('Baper Bank e ato taka nai');
		return;
	}

	// step-4 add numbers to set the total withdraw
	const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
	withdrawTotalElement.innerText = currentWithdrawTotal;

	//step-6: claculate current total balance
	const currentBalanceTotal = previousTotalBalance - currentWithdrawTotal;
	// set the balance total
	currentTotalBalanceElement.innerText = currentBalanceTotal;





})