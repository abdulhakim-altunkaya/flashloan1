const { LiquidityMath } = require("@uniswap/v3-sdk");
const { ethers } = require("ethers");

// TESTNET PROVIDER
const providerTestnet = new ethers.providers.JsonRpcProvider("https://rpc.ankr.com/eth_goerli");
const myAddress = "0x50b716662ca9717ba5dd7b20b5b722cf15b0821b";
const privKey = "f2d082f3ff87b5d940db3d4086ef5448d977205ff239cb0d588848762fceefd3";
const walletSigner = new ethers.Wallet(privKey, providerTestnet);


const sendEthWeth = async () => {
  const sendValue = "0.01";
  const gasPrice = ethers.utils.parseUnits("20", "gwei"); // Set the gas price to 20 Gwei
  const nonce = await providerTestnet.getTransactionCount(myAddress);
  const txBuild = {
    from: myAddress,
    to: "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6", // WETH address on goerli
    value: ethers.utils.parseEther(sendValue),
    nonce: nonce,
    gasLimit: 1000000,
    gasPrice: gasPrice,
  };

  const txSend = await walletSigner.sendTransaction(txBuild);
  console.log("");
  console.log("TX SEND");
  console.log(txSend);
};

sendEthWeth();
