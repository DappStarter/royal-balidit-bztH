require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include knock flame success stomach cost random clutch harvest pave army ghost'; 
let testAccounts = [
"0xdf4295d177784c16971c778f7215462103e74cf86ab313c16ef87abf057666bd",
"0x1c9109f32951061546d9863ac6323ef97b6c645482a3eec7877d985b40cce74b",
"0x57e854915810eac2b00ab5f8f56cfb38bfc98b0e9ba49334729725a13c342351",
"0xfe53d8e8b919dc59a6403e46628765d996f1649a78d19ff00577a31b5bb1181d",
"0xae0e8ed12607073b5d26ee57b2ed866ac74ee358db471f6cfb1bcd9cc1c46714",
"0xe0ec2039c42403f2487a574c6829e4b63e8bc2b6b76c2941fdb0bfd08cf61a26",
"0xbdf83fced359ed723b23af9953b975daf9a03700e106daebb1d38e31e58d8da8",
"0x740e918c56188f24697c39c2010475c95e49c441227881e484719bdadbf476a0",
"0x02ee67bd3ac780e0b3e1d24682ae60904c506c8968b2b0ac0a4a15df24ce0236",
"0x11b889973555f55bd57d4fee8edefc504cf3d5202494bb3d43cb691a0fc8cddb"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


