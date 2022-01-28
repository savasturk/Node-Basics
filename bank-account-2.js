var accounts = [];

// Account Object
// balance
// userName

// createAccount(account)
// push onto accounts array
// return account
function createAccount (account) {
    accounts.push(account);
    return account;
}

// getAccount(userName)
// find matching account using forEach
function getAccount (userName) {
    var matchedAccount;
    accounts.forEach(function (account) {
        if (account.userName === userName) {
            matchedAccount = account;
        }
    });

    return matchedAccount;
}

// deposit(account, amount)
function deposit (account, amount) {
    account.balance += amount;
}

// withdraw(account, amount)
function withdraw (account, amount) {
    account.balance -= amount;
}

//getBalance(account)
function getBalance (account) {
    return account.balance;
}

var pinarsAccount = createAccount({
    userName: 'Pinar',
    balance: 0
})

deposit(pinarsAccount, 100);
console.log(getBalance(pinarsAccount));

withdraw(pinarsAccount, 11);
console.log(getBalance(pinarsAccount));

var existingAccount = getAccount('Pinar');
console.log(getBalance(pinarsAccount));

var jensAccount = createAccount({
    userName : 'jen001',
    balance: 12
});

console.log(accounts);

var existingJensAccount = getAccount('jen001');
console.log(existingJensAccount);