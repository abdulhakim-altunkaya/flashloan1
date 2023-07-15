//Factory contract enables us to find right pair contract for the pair we want
//visit https://docs.pancakeswap.finance/developers/smart-contracts/pancakeswap-exchange/v2-contracts/factory-v2
const addressFactory = "0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73";

//router gives us prices
//visit router section of above page
const addressRouter = "0x10ED43C718714eb63d5aA57B78B54704E256024E";

//you can find these addresses on the bscscan
const addressFrom = "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56" //such as BUSD
const addressTo = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c" //like WBNB

module.exports = {
    addressFactory,
    addressRouter,
    addressFrom,
    addressTo,
}