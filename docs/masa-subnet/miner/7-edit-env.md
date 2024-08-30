---
id: 7-create-env
title: 7. Configure Environment
---

## Create .env file

In the `masa-bittensor` directory, create an `.env` file

```bash
vim .env
```

Add the following to your .env file, replacing the droplet IP address with yours (from the previous step)

```bash
ORACLE_BASE_URL="http://<node-ip-address>:8080/api/v1"
```

Save and exit

```bash
:wq
```

:::warning
If you are running X/Twitter or Web scrapers in a cloud environment, it is strongly recommended to use a residential proxy. Cloud-based IP addresses are often blocked or rate-limited by these platforms. Ensure you have a reliable residential proxy service configured before deploying your scrapers in a cloud environment. If you cannot server requests from your node, you will not be able to earn subnet rewards.
:::

For more information on configuring scrapers and using residential proxies, refer to:
- [Twitter Scraper Configuration](../masa-protocol/protocol-twitter-scraper-config.md)
- [Web Scraper Configuration](../masa-protocol/protocol-web-scraper-config.md)
- [Residential Proxy Configuration Guide](../masa-protocol/residential-proxy-configuration.md)