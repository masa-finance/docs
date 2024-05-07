# Masa Staking smart contract

## Contract Deployments

### Preparations

- Set `DEPLOYER_PRIVATE_KEY` to the deployers private key in `.env.{network}.secret`
- Set `COINMARKETCAP_API_KEY` to the CoinMarketCap API key in `.env`, if needed
- Set `ANKR_API_KEY` to the Ankr API key in `.env`, if needed
- Set `ETHERSCAN_API_KEY` to the Etherscan API key in `.env`, if needed
- Set `BSCSCAN_API_KEY=XXX` to the BscScan API key in `.env`, if needed
- Set `POLYGONSCAN_API_KEY=XXX` to the PolygonScan API key in `.env`, if needed
- Set `BASESCAN_API_KEY=XXX` to the BaseScan API key in `.env`, if needed

### Deploy

Run: `yarn deploy --network {network}` to deploy.

### Deployment address

You can see the deployment address of the smart contracts in the [deployments](deployments) folder. For every deployed smart contract you will find a `<smart_contract>.json` JSON file with the address in the `"address"`
field.

## Generation of a new release

From a clean `main` branch you can run the release task bumping the version accordingly based on semantic versioning:

```bash
yarn release
```

The task does the following:

- Bumps the project version in `package.json`
- Creates a Git tag
- Commits and pushes everything
- Creates a GitHub release with commit messages as description
- Git tag push will trigger a GitHub Action workflow to do a `npm` release

For the GitHub releases steps a GitHub personal access token, exported as `GITHUB_TOKEN` is required. You can add this environment variable to the `.env` file. [Setup](https://github.com/release-it/release-it#github-releases)
