class Account {
    constructor() {
        this.balance = 0;
        this.history = [];
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        this.balance -= amount;
    }

    updateHistory(date, amount, balance) {
        this.history.push({ date: date, amount: amount, balance: balance });
    }
}

module.exports = {
    Account,
};