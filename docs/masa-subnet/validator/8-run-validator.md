---
id: 8-run-validator
title: 8. Run Validator
---

## Set Python Path

:::warning
Ensure you set your Python path correctly before running the validator. Failure to do so may result in import errors or unexpected behavior.
:::

Be sure to set your python path before running the validator, or anytime when you open a new terminal session.

```bash
export PYTHONPATH=$PYTHONPATH:$(pwd)
```

:::info
You may want to add this command to your `.bashrc` or `.zshrc` file to automatically set the Python path when you open a new terminal session.
:::

## Run Validator

```bash
pm2 start "make run-validator"
```

Your validator should now be running! To view the logs, run

```bash
pm2 logs
```

:::info
PM2 is a process manager that helps you manage and keep your node running. For more information on PM2 commands and usage, refer to the [PM2 Documentation](https://pm2.keymetrics.io/docs/usage/quick-start/).
:::

By default, the validator will attempt to set weights every tempo. You need at least 1,000 TAO staked to set weights on mainnet. If you wish to NOT set weights, add the following flag to the `run-validator` command in the `Makefile`:

- `--neuron.disable_set_weights`

Be sure to restart the validator after editing the `Makefile` to apply the changes!

```bash
pm2 restart all
```