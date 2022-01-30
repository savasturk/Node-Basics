console.log('starting password manager');

var storage = require('node-persist');
storage.initSync();

var argv = require('yargs')
    .command('create', 'Create a new account', function (yargs) {
        yargs.options({
            name: {
                demand: true,
                alias: 'n',
                description: 'Account name (eg: Twitter, Facebook)',
                type: 'string'
            },
            username : {
                demand: true,
                alias: 'u',
                description: 'Account username or email',
                type: 'string'
            },
            password: {
                demand: true,
                alias: 'p',
                description: 'Account password',
                type: 'string'
            },
            masterPassword: {
                demand: true,
                alias: 'm',
                description: 'Master password',
                type: 'string'
            }
        }).help('help');
    })
    .command('get', 'Get an existing account', function (yargs) {
        yargs.options({
            name: {
                demand: true,
                alias: 'n',
                description: 'Account name (eg: Twitter, Facebook)',
                type: 'string'
            },
            masterPassword: {
                demand: true,
                alias: 'm',
                description: 'Master password',
                type: 'string'
            }
        }).help('help');
    })
    .help('help')
    .argv;
var command = argv._[0];

// create
//      --name
//      --username
//      --password

// get
//      --name

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

function getAccounts (masterPassword) {
    // use getItemSync to fetch accounts
    var encryptedAccount = 
    // decrypt
    // return accounts array
}

function saveAccounts (accounts, masterPassword) {
    // encryp accounts
    // setItemSync
    // return accounts
}

function createAccount (account, masterPassword) {
    /*var accounts = storage.getItemSync('accounts');

    if (typeof accounts === 'undefined') {
        accounts = [];
    }*/

    accounts.push(account);

    //storage.setItemSync('accounts', accounts);

    return account;
}

function getAccount (accountName, masterPassword) {
    //var accounts = storage.getItemSync('accounts');
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

/*var facebookAccount = getAccount('Facebook');
console.log(facebookAccount);*/
if (command === 'create') {
    var createdAccount = createAccount({
        name: argv.name,
        username: argv.username,
        password: argv.password
    }, argv.masterPassword);
    console.log('Account created!');
    console.log(createdAccount);
} else if (command === 'get') {
    var fetchedAccount = getAccount(argv.name, argv.masterPassword);

    if (typeof fetchedAccount === 'undefined') {
        console.log('Account not found');
    } else {
        console.log('Account found!');
        console.log(fetchedAccount);
    }
}