require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/WWa6TVdY0BaaNz7m3QleOFBs8_WEHL_I',
      accounts: ['1e7771d1ca744b9a45666da8f4e197b7378bd72ba8a0bd4d874bb4a3a4235544'],
    },
  },
};