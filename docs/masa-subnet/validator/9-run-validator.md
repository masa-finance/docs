---
id: 9-run-validator
title: 9. Run Validator
---

## Run Validator

```bash
pm2 start "make run-validator"
```

Your validator should now be running! To view the logs, run

```bash
pm2 logs
```

:::info
There are many configurations that you can adjust, but in most cases, the defaults will suffice. Below is a list of flags you can pass to the `run-validator` command in the `Makefile` to adjust the validators's behavior.  
:::

- `--neuron.sample_size_volume` - the number of miners to query when volume testing

- `--neuron.axon_off` - serve an axon object and expose your IP to the network

- `--enable_validator_api` - enable your API to provide access to your validator's functionality

- `--neuron.auto_update` - auto update your code when we release a new version!

:::caution
Be sure to restart your validator after editing the `Makefile` to apply the changes!
:::

:::tip
For an accurate, up to date list of possible configurations, check out our **[source code!](https://github.com/masa-finance/masa-bittensor/blob/main/masa/utils/config.py)**
:::

:::warning
By default, the validator will attempt to set weights every tempo. You need at least **1,000 TAO staked** to set weights on mainnet.
:::
