// contract test code will go here
const assert = require("assert");
const ganache = require("ganache-cli");
// Constructor function
const Web3 = require("web3");
// Instance of web3 library
const web3 = new Web3(ganache.provider());

beforeEach(() => {
    // Get list of all accounts
    web3.eth.getAccounts().then((fetchedAccounts) => {
        console.log(fetchedAccounts);
    });

    // Use one of those accounts to deploy
    // the contract
});

describe("Inbox", () => it("deploys a contract", () => {}));
