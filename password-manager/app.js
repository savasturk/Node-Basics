console.log('starting password manager');

var storage = require('node-persist');
storage.initSync();

/*storage.setItemSync('accounts', [{
    userName: 'Pinar',
    balance:0
}]);*/
//var name = storage.getItemSync('name');
//console.log('Saved name is: ' + name);

//var accounts = storage.getItemSync('accounts');

// push on a new account
/*accounts.push({
    userName: 'Jen',
    balance:75
})*/

// save using setItemSync
//storage.setItemSync('accounts', accounts);

//console.log(accounts);

// account.name Facebook
// account.userName User12!
// account.password Password123!

function createAccount (account) {
    var accounts = storage.getItemSync('accounts');

    if (typeof accounts === 'undefined') {
        accounts = [];
    }

    accounts.push(account);
    storage.setItemSync('accounts', accounts);

    return account;
}

function getAccount (accountName) {
    var accounts = storage.getItemSync('accounts');
    var matchedAccount;

    accounts.forEach(function (account) {
        if (account.name === accountName) {
            matchedAccount = account;
        }
    })

    return matchedAccount;
}

/*createAccount({
    name: 'Facebook',
    username: 'someemail.@gmail.com',
    password: 'Password123!'
})*/

var facebookAccount = getAccount('Facebook');
console.log(facebookAccount);
