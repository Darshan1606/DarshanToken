const Darshan_19IT143 = artifacts.require("./Darshan_19IT143.sol");
const TokenSale = artifacts.require("./TokenSale.sol");
const tokenPrice = 1000000000000000;

module.exports = function (deployer) {
  deployer.deploy(Darshan_19IT143,1000000).then(()=>{
    return deployer.deploy(TokenSale,Darshan_19IT143.address,tokenPrice);
  });
};