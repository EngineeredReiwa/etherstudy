// contract test code will go here
const assert = require("assert");
const ganache = require("ganache-cli");
// Constructor function
const Web3 = require("web3");
// Instance of web3 library
const web3 = new Web3(ganache.provider());

let accounts;

beforeEach(
    async () => {
        // Get list of all accounts
        accounts = await web3.eth.getAccounts();
    }

    // Use one of those accounts to deploy
    // the contract
);

describe("Inbox", () =>
    it("deploys a contract", () => {
        console.log(accounts);
    }));
