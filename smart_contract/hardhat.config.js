//https://eth-goerli.g.alchemy.com/v2/5U_hwuh8-gHxzFl1YAT3uj8odSYRpJ9l

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-goerli.g.alchemy.com/v2/5U_hwuh8-gHxzFl1YAT3uj8odSYRpJ9l',
      accounts: ['90001165fbb6b1cf8ed5e5706a0b6900a808fb74f7de3f84b7b391ba86e899f6'],
    },
  },
};