//deposit button event handler
const deposit_btn = document.getElementById('deposit-btn');

deposit_btn.addEventListener('click', function() {

    const depositStringToInt = getInputNumb("deposit-amount");

    updateSpanTest("current-deposit", depositStringToInt);
    updateSpanTest("current-balance", depositStringToInt);

    //setting up the input field blank when clicked
    document.getElementById('deposit-amount').value = "";

});

const withdraw_btn = document.getElementById('withdraw-btn');

withdraw_btn.addEventListener('click', function() {

    const withdrawNumb = getInputNumb("withdraw-amount");

    updateSpanTest("current-withdraw", withdrawNumb);
    updateSpanTest("current-balance", -1 * withdrawNumb);

    document.getElementById('withdraw-amount').value = "";
})

function getInputNumb(idName) {

    const amount = document.getElementById(idName).value;
    const amountNumber = parseFloat(amount);

    return amountNumber;
}

function updateSpanTest(idName, addedNumber) {


    const current = document.getElementById(idName).innerText;
    const currentStringToInt = parseFloat(current);

    const total = currentStringToInt + addedNumber;

    //x1.2 setting this value in balance
    document.getElementById(idName).innerText = total;
}