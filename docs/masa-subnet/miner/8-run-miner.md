---
id: 8-run-miner
title: 8. Run Miner
---

## Run Miner

```bash
pm2 start "make run-miner"
```

Your miner should now be running! To view the logs, run

```bash
pm2 logs
```

By default, the miner will only respond to neurons with a validator permit and at least 10 TAO staked. To adjust this configuration, you can edit the `Makefile` and pass the following flags to the `run-miner` command:

- `--blacklist.min_stake_required` - the minimum number of TAO staked required to respond to a neuron. Defaults to 10.
- `--blacklist.force_validator_permit` - a validator permit is required to respond to a neuron. Remove this flag to allow any neuron to respond.

Be sure to restart the miner after editing the `Makefile` to apply the changes!

```bash
pm2 restart all
```
