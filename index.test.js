const { Account } = require('./index.js');

// before each that init a new Account
// add in describe blocks

test('that balance returns 0', () => {
    let balance = new Account().balance;
    expect(balance).toBe(0);
});

test('that a amount is added to the balance', () => {
    let account = new Account();
    account.deposit(5);
    expect(account.balance).toBe(5);
});

test('that a amount can be added to the balance multiple times', () => {
    let account = new Account();
    account.deposit(5);
    account.deposit(5);
    expect(account.balance).toBe(10);
});

// stretch goal is to ensure deposit can only be called with positive numbers

test('that an amount can withdrawn from the balance', () => {
    let account = new Account();
    account.withdraw(5);
    expect(account.balance).toBe(-5);
});


test('that a amount can be withdrawn from the balance multiple times', () => {
    let account = new Account();
    account.withdraw(5);
    account.withdraw(5);
    expect(account.balance).toBe(-10);
});

test('that account has a transaction history', () => {
    let account = new Account();
    expect(account.history).toEqual([]);
});

test('that updateHistory adds to the transaction history', () => {
    let account = new Account();
    account.updateHistory('14/01/2021', -500, 2500);
    expect(account.history).toEqual([{ date: '14/01/2021', amount: -500, balance: 2500 }]);
});