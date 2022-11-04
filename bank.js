function Bank(name, amount, retrait, depot) {
    this.name = name;
    this.amount = amount;
    this.retrait = retrait;
    this.depot = depot;

}

Bank.prototype.getDepot = function() {
    this.amount = this.amount + this.depot;
    return `Amount in your Bank account is: ${this.amount}`
}

const customer = new Bank("Bisimwa", 3500, 0, 10);

console.log(customer.getDepot());
console.log(customer);