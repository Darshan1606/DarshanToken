var Darshan_19IT143 = artifacts.require("./Darshan_19IT143.sol");

module.exports = function(deployer) {
  deployer.deploy(Darshan_19IT143, 1000000);
  
//   .then(function() {
//     // Token price is 0.001 Ether
//     var tokenPrice = 1000000000000000;
//     return deployer.deploy(DappTokenSale, DappToken.address, tokenPrice);
//   });
};