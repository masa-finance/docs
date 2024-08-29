---
id: 8-run-validator
title: 8. Run Validator
---

## Set Python Path

Be sure to set your python path before running the miner, or anytime when you open a new terminal session.

```bash
export PYTHONPATH=$PYTHONPATH:$(pwd)
```

## Run Validator

```bash
pm2 start "make run-validator"
```

Your validator should now be running! To view the logs, run

```bash
pm2 logs
```

By default, the validator will attempt to set weights every tempo. You need at least 1,000 TAO staked to set weights on mainnet. If you wish to NOT set weights, add the following flag to the `run-validator` command in the `Makefile`:

- `--neuron.disable_set_weights`

Be sure to restart the validator after editing the `Makefile` to apply the changes!

```bash
pm2 restart all
```
