import * as dotenv from 'dotenv';
require("@nomicfoundation/hardhat-toolbox");

dotenv.config();
// Enable gas reporting (optional)
const REPORT_GAS = process.env.REPORT_GAS?.toLowerCase() === "true" ? true : false

const SOLC_SETTINGS = {
  optimizer: {
    enabled: true,
    runs: 1_000,
  },
}

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hedera",
  solidity: {
    compilers: [
      {
        version: "0.8.3",
        settings: SOLC_SETTINGS,
      },
      {
        version: "0.7.0",
        settings: SOLC_SETTINGS,
      },
      {
        version: "0.6.6",
        settings: SOLC_SETTINGS,
      },
      {
        version: "0.4.24",
        settings: SOLC_SETTINGS,
      },
      {
        version: "0.6.12",
        settings: SOLC_SETTINGS,
      },
    ],
  },
  networks: {
    hedera: {
      url: process.env.HEDERA_RPC,
      gasPrice: undefined,
      accounts: [process.env.PRIVATE_KEY],
      chainId: 296,
      nativeCurrencySymbol: "HBAR",
    }
  },
  gasReporter: {
    enabled: REPORT_GAS,
    currency: "USD",
    outputFile: "gas-report.txt",
    noColors: true,
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./build/cache",
    artifacts: "./build/artifacts",
  },
  mocha: {
    timeout: 200000, // 200 seconds max for running tests
  },
}
