---
id: 8-create-env
title: 8. Configure Environment
---

:::tip

If you are running your Masa protocol node on the same machine as your miner, you can skip this step, as the default configuration will point to `http://localhost:8080/api/v1` to serve requests from your miner.
:::

## Create .env file

In the `masa-bittensor` directory, create an `.env` file

```bash
vim .env
```

Add the following to your `.env` file, replacing `<node-ip-address>` with your protocol machine's IP address.

```bash
ORACLE_BASE_URL="http://<node-ip-address>:8080/api/v1"
```

Save and exit

```bash
:wq
```
