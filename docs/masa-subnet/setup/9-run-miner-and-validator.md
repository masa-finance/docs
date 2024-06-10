---
id: 9-run-miner-and-validator
title: 9. Run Miner and Validator
---

## Run Miner and Validator

Finally, in two seperate terminals, run the `miner` and `validator`:

```bash
make run-miner
```

and

```bash
make run-validator
```

## Interact with Validator API

Head to **[http://localhost:8000/docs](http://localhost:8000/docs)** to interact with the Validator API.

**Note:** If using the `btcli` directly and not `make` commands, remember to add the flags `--subtensor.chain_endpoint ws://54.205.45.3:9945` and `--netuid 1` to each command. These flags point to our devnet and specify the subnet ID, respectively.
