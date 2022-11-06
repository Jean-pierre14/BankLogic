class Bank {

    bankName = 'Access Bank';

    CustomerName = 'Peter KHMZ';
    name = prompt("Enter your name");

    constructor(amount) {
        this.amount = amount
    }

    setDeposit(montant) {

        this.montant = montant;

        if (this.montant < 0) {
            console.log('Sorry we can\'t help you');
        } else {
            this.amount = this.amount + montant;
            return console.log(`Current amount: ${this.amount}`)
        }
    }

    setWithdraw(m) {
        let money = parseInt(m),
            amount = parseInt(this.amount);

        // console.log(`Current amount in bank: ${amount}`);
        // console.log("Withdraw amount: " + parseInt(m));

        if (money > amount) {
            console.log('The amount does\'t match')
        } else {
            amount = amount - money;
            console.log(`You withdraw ${money}\nCurrent amount in bank is: ${amount}`)
        }
    }
}

const peter = new Bank(500);

/**
 * To deposit
 * uncommenter that to deposit || inverse
 */

peter.setDeposit(-10);

/**
 * To withdraw money
 */

peter.setWithdraw(490);


// console.log(peter);