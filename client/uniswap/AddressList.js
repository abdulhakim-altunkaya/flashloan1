//Factory contract enables us to find right pair contract for the pair we want
//visit https://docs.uniswap.org/contracts/v2/reference/smart-contracts/factory
const addressFactory = "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f";

//router gives us prices
//visit router section of above page
const addressRouter = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";

//you can find these addresses on the bscscan
const addressFrom = "0xdAC17F958D2ee523a2206206994597C13D831ec7" //such as USDT
const addressTo = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2" //like WETH

module.exports = {
    addressFactory,
    addressRouter,
    addressFrom,
    addressTo,
}