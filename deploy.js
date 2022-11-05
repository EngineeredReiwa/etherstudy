// deploy code will go here
const HDWalletProcvider = require("@truffle/hdwallet-provider");
const Web3 = require("Web3");
const { interface, bytecode } = require("./compile");
const recoveryPhrase = require("./pri/recoveryPhrase");

const goerli = "https://goerli.infura.io/v3/3a1c493cfbc24deda73e478bacbbe2fa";
const provider = new HDWalletProcvider(recoveryPhrase, goerli);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log("Attempting to deploy from accout", accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ["Hi there!"] })
        .send({ gas: 1000000, from: accounts[0] });

    console.log("Contract deployed to", result.options.address);
    provider.engine.stop();
};

deploy();
