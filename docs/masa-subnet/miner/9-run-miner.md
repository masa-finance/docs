---
id: 9-run-miner
title: 9. Run Miner
---

## Run Miner

```bash
pm2 start "make run-miner"
```

Your miner should now be running! To view the logs, run

```bash
pm2 logs
```

:::info
There are many configurations that you can adjust, but in most cases, the defaults will suffice. Below is a list of flags you can pass to the `run-miner` command in the `Makefile` to adjust the miner's behavior.  
:::

- `--blacklist.min_stake_required` - the minimum amount of TAO a validator must have staked for your miner to respond

- `--blacklist.force_validator_permit` - requires a validator to have a vpermit for your miner to respond

- `--neuron.auto_update` - auto update your code when we release a new version!

:::caution
Be sure to restart your miner after editing the `Makefile` to apply the changes!
:::

:::tip
For an accurate, up to date list of possible configurations, check out our **[source code!](https://github.com/masa-finance/masa-bittensor/blob/main/masa/utils/config.py)**
:::
