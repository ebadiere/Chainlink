require('@babel/register')({
  extensions: ['.es6', '.es', '.jsx', '.js', '.mjs', '.ts'],
})
require('@babel/polyfill')

module.exports = {
  contracts_build_directory: 'dist/artifacts',
  compilers: {
    solc: {
      version: '0.5.0',
    },
  },
  networks: {
    cldev: {
      host: '127.0.0.1',
      port: 18545,
      network_id: '*',
      gas: 4700000,
      gasPrice: 5e9,
    },
  },
}
