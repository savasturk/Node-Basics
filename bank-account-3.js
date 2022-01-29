var accounts = [];


function createAccount (account) {
    accounts.push(account);
    return account;
}

function getAccount (userName) {
    var matchedAccount;

    for (var i = 0; i < accounts.length; i++) {
        if (accounts[i].userName === userName) {
            matchedAccount = accounts[i];
        }
    }

    return matchedAccount;
}

function deposit (account, amount) {
    if (typeof amount === 'number') {
        account.balance += amount;
    } else {
        console.log('deposit failed. amount is not a number');
    }
}

function withdraw (account, amount) {
    if (typeof amount === 'number') {
        account.balance -= amount;
    } else {
        console.log('withdraw failed. amount is not a number.');
    }
}

function getBalance (account) {
    return account.balance;
}

function createBalanceGetter (account) {
    return function () {
        return account.balance;
    }
}

var pinar = createAccount({
    userName: 'Pinar',
    balance: 0
})

deposit(pinar, 120);
withdraw(pinar, 'my string');

var pinar2 = getAccount('Pinar');
var getPinar2Balance = createBalanceGetter(pinar2);

console.log(getPinar2Balance());