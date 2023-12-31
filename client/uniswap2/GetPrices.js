const { ethers } = require("ethers");
//import {abi as QuoterABI } from '@uniswap/v3-periphery/artifacts/contracts/lens/Quoter.sol/Quoter.json';
const { abi: QuoterABI } = require("@uniswap/v3-periphery/artifacts/contracts/lens/Quoter.sol/Quoter.json");

const provider = new ethers.providers.JsonRpcProvider("https://rpc.ankr.com/eth");

const quoterAddress = "0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6";
const quoterContract = new ethers.Contract(quoterAddress, QuoterABI, provider);

const main = async () => {
    const addressFrom = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
    const addressTo = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
    const amountInHuman = "1950";

    const amountIn = ethers.utils.parseUnits(amountInHuman, 6);

    //fee is system default parameter and it is 3000. Dont think why
    const quoteAmountOut = await quoterContract.callStatic.quoteExactInputSingle(addressFrom, addressTo, 3000, amountIn.toString(), 0);
    const amount = ethers.utils.formatUnits(quoteAmountOut.toString(), 18);
    console.log(amount);
}
main();