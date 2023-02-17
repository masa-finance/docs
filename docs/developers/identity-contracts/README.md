# Masa Identity Contracts

---

**🌽🌽 THIS IS BETA SOFTWARE. IT COULD LEAD TO RAPID UNSCHEDULED DISASSEMBLY. If you run into problems, please open up a new issue. 🌽🌽**

---

<!-- TOC -->

* [Masa Identity Contracts](#masa-identity-contracts)
    * [Contract Deployments](#contract-deployments)
        * [Goerli test network](#goerli-test-network)
            * [Configuration](#configuration)
    * [Roles](#roles)
    * [Interface](#interface)
    * [Deployment](#deployment)
        * [Preparations](#preparations)
        * [Deploy](#deploy)
    * [Installation and usage](#installation-and-usage)
    * [Generation of a new release](#generation-of-a-new-release)

<!-- TOC -->

## Contract Deployments

### Goerli test network

You can see the deployment address of the smart contracts in the [deployments/goerli](deployments/goerli) folder. For
every deployed smart contract you will find a `<smart_contract>.json` JSON file with the address in the `"address"`
field.

#### Configuration

- `Admin`: [`0xA38dd237a3A8D50537B74a4B0D4E7E8A5359386F`](https://goerli.etherscan.io/address/0xA38dd237a3A8D50537B74a4B0D4E7E8A5359386F)

The `admin` is allowed to set configuration variables in the smart contracts.

- `BASE_URI`: https://beta.metadata.masa.finance/v1.0

The base url for the Metadata url that is beeing generated from the contract

## Roles

- `deployer`: Deploys the contract, has no rights after everything has properlty handed over to other roles
- `admin`: Delegated to the Masa Service account inside the Masa API. It has the rights to administrate the smart
  contracts
- `minter`: Minter role. It has the rights to mint tokens to customers wallets.

## Interface

- [Abstract Soulbound Token Definition](docs/tokens/SBT.md)
- [Abstract Non-Fungible Token Definition](docs/tokens/NFT.md)
- [Soulbound Identity Definition](docs/SoulboundIdentity.md)
- [Soulbound Credit Score Definition](docs/SoulboundCreditScore.md)
- [Soulbound Green Definition](docs/SoulboundGreen.md)
- [Soul Name Definition](docs/SoulName.md)
- [Soul Linker Definition](docs/SoulLinker.md)
- [Soul Store Definition](docs/SoulStore.md)

## Deployment

### Preparations

* Set `DEPLOYER_PRIVATE_KEY` to the deployers private key in `.env.{network}.secret`
* Set `COINMARKETCAP_API_KEY` to the CoinMarketCap API key in `.env`, if needed
* Set `INFURA_API_KEY` to the Infura API key in `.env`, if needed
* Set `ETHERSCAN_API_KEY` to the Etherscan API key in `.env`, if needed
* Set `BSCSCAN_API_KEY` to the Etherscan API key in `.env`, if needed
* Set `POLYGONSCAN_API_KEY` to the Etherscan API key in `.env`, if needed

### Deploy

Run: `yarn deploy --network {network}` to deploy.

## Installation and usage

Installing via `npm` package:

```bash
npm i @masa-finance/masa-contracts-identity
```

Import in your project:

```typescript
import { SoulboundIdentity, SoulboundIdentity__factory } from "@masa-finance/masa-contracts-identity";

const soulboundIdentity: SoulboundIdentity = SoulboundIdentity__factory.connect(
  <address>, // address of the deployed contract
  <provider> // web3 provider
);
console.log(await soulboundIdentity.symbol());
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
