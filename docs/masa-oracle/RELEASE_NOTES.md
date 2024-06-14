# Masa Oracle Release Notes

[All Releases](https://github.com/masa-finance/masa-oracle/releases)

## [0.0.7-beta](https://github.com/masa-finance/masa-oracle/releases) (2024)

## Overview

This release of the Masa Oracle Node introduces new features, masa node will exit after running cli commands --stake n and --faucet

### Breaking Changes

* Updated the masa-contracts-oracle to 0.4.5
  * cd contracts && yarn

### Bug fixes

* Fixed the bug that that gave incorrect node data timestamping, replaced with unix timestamps

### New Features

* Added Discord scrapers
* Added masa token faucet with cli param --faucet

> compile and build the masa-node

```shell
make build
```

> will give 1000 masa tokens to the node and exit

```shell
make faucet 
```

> will stake 1000 masa tokens and exit

```shell
make stake 
```

> run as normal

```shell
make run
```

* None

## Change Log

* Version: 0.0.7-beta
