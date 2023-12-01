# Masa Oracle Contracts

<!-- TOC -->
* [Masa Oracle Contracts](#masa-oracle-contracts)
  * [Contract Deployments](#contract-deployments)
  * [Roles](#roles)
  * [Deployment](#deployment)
    * [Preparations](#preparations)
    * [Deploy](#deploy)
  * [Installation and usage](#installation-and-usage)
  * [Generation of a new release](#generation-of-a-new-release)
<!-- TOC -->

## Contract Deployments

### Addresses of the deployed contracts

* Sepolia test network:
  * MasaToken: [`0x26775cD6D7615c8570c8421819c228225543a844`](https://sepolia.etherscan.io/address/0x26775cD6D7615c8570c8421819c228225543a844)
  * OracleNodeStaking: [`0xd925bc5d3eCd899a3F7B8D762397D2DC75E1187b`](https://sepolia.etherscan.io/address/0xd925bc5d3eCd899a3F7B8D762397D2DC75E1187b)
  * StakingMasaToken: [`0x6F89e72570089799A4FCBfC66790e5726d5c7F6a`](https://sepolia.etherscan.io/address/0x6F89e72570089799A4FCBfC66790e5726d5c7F6a)

You can see the deployment address of the smart contracts in the [addresses.json](addresses.json) file. For every deployed smart contract you will find a `<network>.<contract>` value.

## Roles

- `deployer`: Deploys the contract, has no rights after everything has properlty handed over to other roles
- `admin`: Delegated to the Masa Service account inside the Masa API. It has the rights to administrate the smart
  contracts
- `minter`: Minter role. It has the rights to mint tokens to customers wallets.

## Deployment

### Preparations

* Set `DEPLOYER_PRIVATE_KEY` to the deployers private key in `.env.{network}.secret`
* Set `COINMARKETCAP_API_KEY` to the CoinMarketCap API key in `.env`, if needed
* Set `INFURA_API_KEY` to the Infura API key in `.env`, if needed
* Set `ETHERSCAN_API_KEY` to the Etherscan API key in `.env`, if needed
* Set `BSCSCAN_API_KEY` to the Etherscan API key in `.env`, if needed
* Set `POLYGONSCAN_API_KEY` to the Etherscan API key in `.env`, if needed
* Set `CELOSCAN_API_KEY` to the Etherscan API key in `.env`, if needed
* Set `BASESCAN_API_KEY` to the Etherscan API key in `.env`, if needed

### Deploy

Run: `yarn deploy --network {network}` to deploy.

## Installation and usage

Installing via `npm` package:

```bash
npm i @masa-finance/masa-contracts-oracle
```

Import in your project:

```typescript
import {
  MasaToken,
  MasaToken__factory
} from "@masa-finance/masa-contracts-oracle";

const masaToken: MasaToken = MasaToken__factory.connect(
  <address>, // address of the deployed contract
  <provider> // web3 provider
);
console.log(await masaToken.symbol());
```

## Generation of a new release

From a clean `main` branch you can run the release task bumping the version accordingly based on semantic versioning:

```bash
yarn release
```

The task does the following:

* Bumps the project version in `package.json`
* Creates a Git tag
* Commits and pushes everything
* Creates a GitHub release with commit messages as description
* Git tag push will trigger a GitHub Action workflow to do a `npm` release

For the GitHub releases steps a GitHub personal access token, exported as `GITHUB_TOKEN` is required. You can add this
environment variable to the `.env` file. [Setup](https://github.com/release-it/release-it#github-releases)
