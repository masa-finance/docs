---
id: 7-create-env
title: 7. Configure Environment
---

:::tip

If you plan to run your Masa protocol node on the same machine as your miner, you can skip this step, as the default configuration will point to `http://localhost:8080/api/v1` to serve requests from your miner.
:::

## Create .env file

In the `masa-bittensor` directory, create an `.env` file

```bash
vim .env
```

Add the following to your `.env` file, replacing `<node-ip-address>` with your machine's IP address.

```bash
ORACLE_BASE_URL="http://<node-ip-address>:8080/api/v1"
```

Save and exit

```bash
:wq
```

:::caution
If you are running X/Twitter or Web scrapers in a cloud environment, it is strongly recommended to use a residential proxy. Cloud-based IP addresses are often blocked or rate-limited by these platforms. Ensure you have a reliable residential proxy service configured before deploying your scrapers in a cloud environment. If you cannot serve requests from your node, you will not be able to earn subnet rewards.
:::

For more information on configuring scrapers and using residential proxies, refer to:

- [Twitter Scraper Configuration](/docs/masa-protocol/protocol-twitter-scraper-setup.md)
- [Web Scraper Configuration](/docs/masa-protocol/protocol-web-scraper-setup.md)
- Residential Proxy Configuration Guide (Coming soon!)
