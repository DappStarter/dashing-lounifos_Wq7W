require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good argue sure spot toy note random upgrade hover enroll orange tree'; 
let testAccounts = [
"0xf07f2c2846304db433b2e4113f968f025573d047b6f3a5946c879b84e93d373b",
"0xc98fb7376e91eb390e01a328b983b3cf17032d0d0ee14b1a2e44d2498c5ce031",
"0xbde5ecb20c3a4e3b5a425a4ac24639e9bea9b3c0b0a555dc9900a40b62a0ab32",
"0xb9c5e8c9f5a83001f6b5bb4eb939b41069edbc35dbdb23202f91d64aaf2099fc",
"0x99c1b383eb044bd0ef7ba8fdb19eab6c287f650c5feea28dfcf7db06eaa7db81",
"0xe57852ed8c2a07a381e519f8d4a58a88c862d1e17786ea39b0135bbc21e953d4",
"0x5ad8503085b9edd11d7aab1edfebb6fe8c80b1ef7e9af3409534c07ddd956264",
"0x273b2d96fb40776503e9c9729de0b22b705df8d0f48d38b6049ea385ad703cb1",
"0xf7a83eeb36ce95ca616783cb105a5273ee1cfdddacd86d87f6f2bcee7fdd6b3b",
"0xacc6197434000f84be1d4c552a6a0b8870d3e80b85eb87937784093c74b308fa"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

