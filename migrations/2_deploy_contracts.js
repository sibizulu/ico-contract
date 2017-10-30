var LightCoin = artifacts.require('./LightCoin.sol')

module.exports = function (deployer) {
  deployer.deploy(LightCoin)
}
