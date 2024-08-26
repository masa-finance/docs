---
id: 8-run-miner
title: 8. Run Miner
---

### Set Python Path

Be sure to set your python path before running the miner, or when you open a new terminal session.

```bash
export PYTHONPATH=$PYTHONPATH:$(pwd)
```

### Run Miner

```bash
make run-miner
```

Your miner should now be running! By default, the miner will only respond to neurons with a validator permit and at least 10 TAO staked. To adjust this configuration, you can pass the following flags to the `run-miner` command:

- `--blacklist.min_stake_required` - the minimum number of TAO staked required to respond to a neuron. Defaults to 10.
- `--blacklist.force_validator_permit` - a validator permit is required to respond to a neuron. Remove this flag to allow any neuron to respond.
