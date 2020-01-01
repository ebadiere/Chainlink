const MyContract = artifacts.require('MyContract')

/*
  This script allows for a Chainlink request to be created from
  the requesting contract. Defaults to the Chainlink oracle address
  on this page: https://docs.chain.link/docs/testnet-oracles
*/

const oracleAddress =
  process.env.TRUFFLE_CL_BOX_ORACLE_ADDRESS ||
  '0xa6083a2cffc4236153b0fa332548d1ebdb19be2c'
const jobId =
  process.env.TRUFFLE_CL_BOX_JOB_ID || '0b5c5b870caa44ce9a71db9ff12295fa'
const payment = process.env.TRUFFLE_CL_BOX_PAYMENT || '1000000000000000001'
const url =
  process.env.TRUFFLE_CL_BOX_URL || 'http://quandl:6221/goldspot'
const path = process.env.TRUFFLE_CL_BOX_JSON_PATH || 'goldspot'
const times = process.env.TRUFFLE_CL_BOX_TIMES || '100'

module.exports = async callback => {
  const mc = await MyContract.deployed()
  console.log('Creating request on contract:', mc.address)
  console.log('Payment:', payment)
  const tx = await mc.createRequestTo(
    oracleAddress,
    web3.utils.toHex(jobId),
    payment,
    url,
    path,
    times,
  )
  callback(tx.tx)
}
