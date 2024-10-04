---
id: protocol-web-scraper-config
title: Web
---

This guide will help you configure your Masa Node as a web scraper.

### Prerequisites

- A running, staked Masa Node (see [Binary Installation](./protocol-binary-installation.md) or [Docker Setup](./protocol-docker-setup.md))
- Basic understanding of web scraping concepts

### Configuration Process

1. **Set environment variable**

   Enable web scraping in your `.env` file:

   ```plaintext
   WEB_SCRAPER=true
   ```

2. **Restart your node**

   Restart the Masa node to apply the changes.

3. **Verify configuration**

   Check the logs for confirmation:

   ```
   Is WebScraper: true
   ```

4. **Test the web scraper**

   Curl the node in local mode to confirm it returns web data:

   ```bash
   curl -X 'POST' \
     'http://localhost:8080/api/v1/data/web' \
     -H 'accept: application/json' \
     -H 'Content-Type: application/json' \
     -d '{
     "url": "https://google.com",
     "depth": 1
   }'
   ```

   You should receive a response with scraped web data.

### Security Considerations

- Respect robots.txt files and website terms of service.
- Implement rate limiting to avoid overloading target websites.
- Be cautious with handling potentially sensitive scraped data.

### Warning: Cloud-Based Scraping

:::warning
If you are running a web scraper in the cloud, consider using a residential proxy. Some websites may block or limit access from cloud IP ranges. Ensure you have a reliable residential proxy service set up before deploying your scraper in a cloud environment.
:::

### Troubleshooting

If you encounter issues:
- Check your node's network connectivity.
- Verify the target website is accessible and allows scraping.
- Review node logs for any error messages related to web scraping.
- If running in the cloud, confirm your proxy (if used) is correctly configured.

For more detailed setup options and advanced configurations, refer to:
- [Environment Configuration Guide](./environment-configuration.md)
- [Network Configuration Guide](./network-configuration.md)
- [Residential Proxy Configuration Guide](./residential-proxy-configuration.md)