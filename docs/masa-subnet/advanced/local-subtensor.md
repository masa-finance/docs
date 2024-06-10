---
id: local-subtensor
title: Local Subtensor
---

# Run a Local Subtensor

This tutorial will guide you through setting up a local blockchain that is _not_ connected to Bittensor testchain, mainchain, or the Masa Protocol devchain.

## Local blockchain vs local subtensor node

Running a local blockchain is sometimes synonymously referred as running on staging. This is **different** from running a local subtensor node that connects to the Bittensor mainchain. A local subtensor node will connect to the mainchain and sync with the mainchain, giving you your own access point to the mainchain.

Running a local blockchain spins up two authority nodes locally, not connected to any other nodes or testchain or mainchain. This tutorial is for running a local blockchain. You can pull one of two prebuilt Docker images, one for arm64 machines (built and tested on macbook pro M3), or the image built for amd64 (built and tested on ubuntu).

## Prerequisites

- [Install `docker`](https://docs.docker.com/engine/install/).

With docker installed, proceed as below:

## Pull the image for your platform:

For ARM (mac):

```bash
docker pull ghcr.io/masa-finance/subtensor/development:arm-latest
```

For AMD (ubuntu):

```bash
docker pull ghcr.io/masa-finance/subtensor/development:amd-latest
```

## Run the image:

```bash
docker run -d --name masa-subtensor -p 30333:30333 30334:30334 30335:30335 9615:9615 9944:9944 9946:9946 9945:9945 -v /tmp:/tmp ghcr.io/masa-finance/subtensor/development:arm-latest
```

(just switch to amd-latest if you are running on ubuntu)

You should now have a locally running version of the subtensor, AKA, your own private local devnet
