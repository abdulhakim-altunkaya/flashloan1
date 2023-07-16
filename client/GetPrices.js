const ethers = require("ethers");
const {
    addressFactory,
    addressRouter,
    addressFrom,
    addressTo
} = require("./AddressList");

const { erc20ABI, routerABI, factoryABI, pairABI } = require("./ABIList");

// Standard provider
const provider = new ethers.providers.JsonRpcProvider("https://bsc-dataseed.bnbchain.org");

const contractRouter = new ethers.Contract(addressRouter, routerABI, provider);

//connect to Factory
const contractFactory = new ethers.Contract(addressFactory, factoryABI, provider);

//call the blockchain
const getPrices = async (amounInHuman) => {
    //convert the amount in
    const contractToken = new ethers.Contract(addressFrom, erc20ABI, provider);
    //we get decimals because we will convert 500 to 500*10**18
    const decimals = await contractToken.decimals();
    const amountIn = ethers.utils.parseUnits(amounInHuman, decimals);
    const amountIn2 = amountIn.toString();
    
    const amountsOut = await contractRouter.getAmountsOut(amountIn2, [
        addressFrom, //BUSD
        addressTo, //WBNB or WETH        
    ]);

    //convert amountsout
    const contractToken2 = new ethers.Contract(addressTo, erc20ABI, provider);
    const decimals2 = new contractToken2.decimals();
    console.log(amountsOut[1].toString());
}

const amounInHuman = "500";
getPrices(amounInHuman);
