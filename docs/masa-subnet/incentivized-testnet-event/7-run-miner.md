---
id: 9-run-miner
title: 9. Run Miner
---

## Run Miner

Finally, run the `miner`:

```bash
make run-miner
```

**Note:** If using the `btcli` directly and not `make` commands, remember to add the flags `--subtensor.chain_endpoint ws://54.205.45.3:9945` and `--netuid 2` to each command. These flags point to our devnet and specify the subnet ID, respectively.
