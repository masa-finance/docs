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
  * MasaToken: [`0xFd36990172dFB44ef0cEa51a9B1159687CfBb4E2`](https://sepolia.etherscan.io/address/0xFd36990172dFB44ef0cEa51a9B1159687CfBb4E2)
  * MasaFaucet: [`0x0d4eb0fb79c5a2e1a939251ba1645cf8384b5b8c`](https://sepolia.etherscan.io/address/0x0d4eb0fb79c5a2e1a939251ba1645cf8384b5b8c)
  * StakedMasaToken: [`0xb4477Cc67CAFa04e751E3aE0d211e321fcA79046`](https://sepolia.etherscan.io/address/0xb4477Cc67CAFa04e751E3aE0d211e321fcA79046)
  * OracleNodeStaking: [`0xF339e2D564CE47C2FA29b073D6BD7B439e333589`](https://sepolia.etherscan.io/address/0xF339e2D564CE47C2FA29b073D6BD7B439e333589)
  * NodeDataMetrics: [`0x13B9bf9c3914e00e740AAb588Bf4845ED07953f5`](https://sepolia.etherscan.io/address/0x13B9bf9c3914e00e740AAb588Bf4845ED07953f5)
  * NodeRewardPool: [`0x56266C75773e82B886B02dC0D137eC005fc2C8e4`](https://sepolia.etherscan.io/address/0x56266C75773e82B886B02dC0D137eC005fc2C8e4)

You can see the deployment address of the smart contracts in the [addresses.json](addresses.json) file. For every deployed smart contract you will find a `<network>.<contract>` value.

## Roles

- `deployer`: Deploys the contract, has no rights after everything has properlty handed over to other roles
- `admin`: Delegated to the Masa Service account inside the Masa API. It has the rights to administrate the smart
  contracts
- `minter`: Minter role. It has the rights to mint tokens to customers wallets.

## Deployment

### Preparations

* Set `ANKR_API_KEY` to the Ankr API key in `.env`
* Set `DEPLOYER_PRIVATE_KEY` to the deployer private key in `.env`
* Set `DEPLOYER_PRIVATE_KEY_TEST` to the  test deployer private key in `.env`
* Set `ETHERSCAN_API_KEY` to the Etherscan API key in `.env`, if needed

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
