## Masa Bittensor Release Notes

<!-- Release notes generated using configuration in .github/release.yml at v0.5.0 -->

# Highlights
## 🎉 New Features
- Oracle Miner & Validator V1: Launched the first version of the Oracle Miner and Validator, enhancing the validation process.
- Social Media Integration: Refactored the Twitter profile query and scoring system, and added support for Twitter profiles, followers, and tweets.
- Validator API: Introduced a comprehensive API for validators, streamlining validation tasks.
- Web Scraping & Discord Enhancements: Added a web scraping task to the subnet and improved Discord profile endpoints and response handling.
- Debug Mode & Health Check: Implemented a debug mode for easier troubleshooting and added a health check endpoint to ensure system stability.
- Miner Blacklist: Introduced a basic miner blacklist using vpermit and minimum stake requirements to enhance security.
## 📖 Documentation
- Initial Subnet Documentation: Published the initial documentation for Masa Bittensor Subnet 0.0.1-alpha.
- Updated Dev Docs: Synced documentation with development updates and included details for web and Discord profile endpoints.
- Miscellaneous Updates: Made small updates for Python path, faucet node staking, and fixed API categories for web.
## 🛠️ Other Changes
- Project Renaming: Renamed the project from Alchemy to Masa.
- Development Tools: Added a Makefile, set up black and flake8 for code formatting and linting.
- CI/CD Enhancements: Set up Docker for CI/CD and testing, applied flake8 linting feedback, and added a commitlint workflow.
- Release Configuration: Added configuration for automated releases.

## What's Changed
### Bug fixes :bug:
* fix: server async issues by @obasilakis in https://github.com/masa-finance/masa-bittensor/pull/47
* fix: validator storage by @hide-on-bush-x in https://github.com/masa-finance/masa-bittensor/pull/46
* fix: setup docs by @grantdfoster in https://github.com/masa-finance/masa-bittensor/pull/48
* fix: .env not loading and timeout when using local oracle on miner by @juanmanso in https://github.com/masa-finance/masa-bittensor/pull/54
* fix: add validator code for discord profile by @obasilakis in https://github.com/masa-finance/masa-bittensor/pull/70
* fix: setting weights on chain by @hide-on-bush-x in https://github.com/masa-finance/masa-bittensor/pull/82
* fix: avoiding setting scores when there are no responses by @hide-on-bush-x in https://github.com/masa-finance/masa-bittensor/pull/130
* Fix endpoints by @obasilakis in https://github.com/masa-finance/masa-bittensor/pull/136
### Exciting New Features 🎉
* feat: Oracle Miner & Validator V1 by @hide-on-bush-x in https://github.com/masa-finance/masa-bittensor/pull/7
* feat: refactor Twitter Profile Query and Scoring System by @teslashibe in https://github.com/masa-finance/masa-bittensor/pull/37
* feat: various setup improvements by @grantdfoster in https://github.com/masa-finance/masa-bittensor/pull/40
* feat: add validator API by @hide-on-bush-x in https://github.com/masa-finance/masa-bittensor/pull/41
* feat: Twitter Profile, Followers, and Tweets by @grantdfoster in https://github.com/masa-finance/masa-bittensor/pull/45
* Refactor Forward logic by @hide-on-bush-x in https://github.com/masa-finance/masa-bittensor/pull/55
* feat: add web scraping task to the subnet by @juanmanso in https://github.com/masa-finance/masa-bittensor/pull/67
* feat: add discord profile endpoint by @obasilakis in https://github.com/masa-finance/masa-bittensor/pull/68
* feat: web response no longer a list of lists by @obasilakis in https://github.com/masa-finance/masa-bittensor/pull/75
* feat: debug mode by @hide-on-bush-x in https://github.com/masa-finance/masa-bittensor/pull/84
* feat: implements basic miner blacklist using vpermit and min stake req by @grantdfoster in https://github.com/masa-finance/masa-bittensor/pull/86
* feat: add missing discord endpoints by @obasilakis in https://github.com/masa-finance/masa-bittensor/pull/97
* feat: add health check endpoint and fix out of bounds issue by @obasilakis in https://github.com/masa-finance/masa-bittensor/pull/127
### 📖 Documentation and examples
* docs: Masa Bittensor Subnet 0.0.1-alpha by @grantdfoster in https://github.com/masa-finance/masa-bittensor/pull/56
* docs: Syncs w/ Dev Docs by @grantdfoster in https://github.com/masa-finance/masa-bittensor/pull/72
* docs: updates references to masa-bittensor in relevant docs by @grantdfoster in https://github.com/masa-finance/masa-bittensor/pull/73
* docs: include web and discord profile endpoints by @obasilakis in https://github.com/masa-finance/masa-bittensor/pull/80
* docs: small documentation updates for pythonpath and faucet node staking by @grantdfoster in https://github.com/masa-finance/masa-bittensor/pull/79
* chore(docs): fixes api categories for web (reported by user) by @grantdfoster in https://github.com/masa-finance/masa-bittensor/pull/115
### Other Changes
* renamed alchemy to masa by @jdutchak in https://github.com/masa-finance/masa-bittensor/pull/6
* chore: add Makefile and some nitpicks on docs and example .env by @juanmanso in https://github.com/masa-finance/masa-bittensor/pull/39
* chore: setup black and flake8 by @juanmanso in https://github.com/masa-finance/masa-bittensor/pull/113
* ci(Docker): set up subtensor, miner, and validator using Docker for CICD and testing by @5u6r054 in https://github.com/masa-finance/masa-bittensor/pull/102
* ci(docker): various enhancements by @5u6r054 in https://github.com/masa-finance/masa-bittensor/pull/126
* ci: apply flake8 linting feedback by @obasilakis in https://github.com/masa-finance/masa-bittensor/pull/129
* ci(release): add release configuration by @mudler in https://github.com/masa-finance/masa-bittensor/pull/131
* ci: add commitlint workflow by @mudler in https://github.com/masa-finance/masa-bittensor/pull/134

## New Contributors
* @jdutchak made their first contribution in https://github.com/masa-finance/masa-bittensor/pull/6
* @hide-on-bush-x made their first contribution in https://github.com/masa-finance/masa-bittensor/pull/7
* @teslashibe made their first contribution in https://github.com/masa-finance/masa-bittensor/pull/37
* @grantdfoster made their first contribution in https://github.com/masa-finance/masa-bittensor/pull/40
* @obasilakis made their first contribution in https://github.com/masa-finance/masa-bittensor/pull/47

**Full Changelog**: https://github.com/masa-finance/masa-bittensor/commits/v0.5.0

[All Releases](https://github.com/masa-finance/masa-bittensor/releases)
