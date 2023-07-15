const ethers = require("ethers");
const {
    addressFactory,
    addressRouter,
    addressFrom,
    addressTo
} = require("./AddressList");

const { erc20ABI, routerABI, factoryABI, pairABI } = require("./ABIList");

// Standard provider
const provider = new ethers.providers.JsonRpcProvider("https://dataseed1.bnbchain.org:443");

const routerContract = new ethers.Contract(addressRouter, routerABI, provider);

//connect to Factory
const contractFactory = new ethers.Contract(addressFactory, factoryABI, provider);

console.log(routerContract);
