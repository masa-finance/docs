# Arcomia OG Community SBT smart contracts

## Contract Deployments

### Deployment addresses

You can see the deployment address of the smart contracts in the [deployments/mumbai](deployments/mumbai) and [deployments/polygon](deployments/polygon) folders. For every deployed smart contract you will find a `<smart_contract>.json` JSON file with the address in the `"address"` field.

#### Configuration

- `Admin`: [`0x46c9cdA3F83C5c13C767A07b6E80aEd302E40B28`](https://mumbai.polygonscan.com/address/0x46c9cdA3F83C5c13C767A07b6E80aEd302E40B28)

The `admin` is allowed to set configuration variables in the smart contracts.

- `BASE_URI`: https://www.arcomia.io/assets/images/logo/arcomia-logo.png

The base url for the Metadata url that is beeing generated from the contract

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
* Set `POLYGONSCAN_API_KEY` to the Etherscan API key in `.env`, if needed

### Deploy

Run: `yarn deploy --network {network}` to deploy.

## Installation and usage

Installing via `npm` package:

```bash
npm i @masa-finance/arcomia-contracts
```

Import in your project:

```typescript
import { ArcomiaOGCommunitySBT, ArcomiaOGCommunitySBT__factory } from "@masa-finance/arcomia-contracts";

const arcomiaOGCommunitySBT: ArcomiaOGCommunitySBT = ArcomiaOGCommunitySBT__factory.connect(
  <address>, // address of the deployed contract
  <provider> // web3 provider
);
console.log(await arcomiaOGCommunitySBT.symbol());
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
