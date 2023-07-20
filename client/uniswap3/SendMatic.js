const { ethers } = require("ethers");

//TESTNET PROVIDER
const providerTestnet = new ethers.providers.JsonRpcProvider("https://rpc.ankr.com/polygon_mumbai");
const myAddress = "0x50b716662ca9717ba5dd7b20b5b722cf15b0821b";
const privKey = "f2d082f3ff87b5d940db3d4086ef5448d977205ff239cb0d588848762fceefd3"; // Test private key
const walletSigner = new ethers.Wallet(privKey, providerTestnet);

const sendEthWeth = async () => {
  try {
    const sendValue = "2";
    const gasPrice = await providerTestnet.getGasPrice();
    const nonce = await walletSigner.getTransactionCount(); // Getting nonce dynamically

    const txBuild = {
      from: myAddress,
      to: "0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889", //WMATIC address on Mumbai testnet
      value: ethers.utils.parseEther(sendValue),
      nonce: nonce,
      gasLimit: ethers.utils.hexlify(100000), // Increased Gas limit
      gasPrice: gasPrice,
    }

    const txSend = await walletSigner.sendTransaction(txBuild);

    console.log("");
    console.log("TX SEND");
    console.log(txSend);
  } catch (error) {
    console.error("An error occurred while sending transaction:", error);
  }
}

sendEthWeth();
