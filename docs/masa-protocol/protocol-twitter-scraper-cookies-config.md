---
id: protocol-twitter-scraper-cookies-config
title: X/Twitter (Cookies)
---

This guide will help you configure your Masa Node as a X/Twitter scraper using cookies authentication.

### Prerequisites

- A running, staked Masa Node (see [Binary Installation](./protocol-binary-installation.md) or [Docker Setup](./protocol-docker-setup.md))
- `twitter_cookies.json.example` file in the root directory of your Masa Node renamed to `[username]_twitter_cookies.json` (you can find the example file [**here**](https://github.com/masa-finance/masa-oracle/blob/main/twitter_cookies.example.json))
- X/Twitter Pro Account: without a Pro account, you will not be able to scrape X/Twitter data.

:::warning
A paid X/Twitter Pro Account is absolutely necessary for scraping X/Twitter data. Ensure you have obtained a paid Twitter Pro Account before proceeding with the configuration.
:::

### Configuration Process

1. **Prepare X/Twitter cookies**

   Create a `[username]_twitter_cookies.json` file with your X/Twitter account credentials. To obtain this information:

   a. Log in to X/Twitter in your web browser

   b. Open the browser's developer tools (usually F12 or right-click > Inspect)

   c. Go to the "Application" or "Storage" tab

   d. In the left sidebar, expand "Cookies" and click on "https://twitter.com"

   e. Look for the following cookie names and copy their values:

   - personalization_id
   - kdt
   - twid
   - ct0
   - auth_token
   - att

   f. Use the template file `twitter_cookies.json.example` in the root directory as a guide

   g. Replace **only the placeholders** in the "Value" field with the actual values

   h. Save the file as "[username]\_twitter_cookies.json" (**add your username to the filename and remove ".example" from the filename**)

2. **Place the cookies file**

   Move the file to the appropriate location where your Masa keys are stored:

   ```bash
   mv [username]_twitter_cookies.json ~/.masa/[username]_twitter_cookies.json
   ```

3. **Set environment variable**

   Enable X/Twitter scraping in your `.env` file:

   ```plaintext
   TWITTER_SCRAPER=true
   ```

4. **Restart your node**

   Restart the Masa node to apply the changes.

5. **Verify configuration**

   Check the logs for confirmation:

   ```
   Is TwitterScraper: true
   ```

6. **Test the X/Twitter scraper**

   Curl the node in local mode to confirm it returns X/Twitter data:

   ```bash
   curl -X 'POST' \
     'http://localhost:8080/api/v1/data/twitter/tweets/recent' \
     -H 'accept: application/json' \
     -H 'Content-Type: application/json' \
     -d '{
     "query": "$Masa AI",
     "count": 1
   }'
   ```

   You should receive a response similar to this:

   ```json
   {
     "data": [
       {
         "Error": null,
         "Tweet": {
           "ConversationID": "1828797710385942907",
           "GIFs": null,
           "HTML": "<a href=\"https://twitter.com/CryptoGodJohn\">@CryptoGodJohn</a> $MASA the leading token for <a href=\"https://twitter.com/hashtag/AI\">#AI</a> and <a href=\"https://twitter.com/hashtag/Data\">#Data</a> <br><a href=\"https://twitter.com/gesepolia Masafi\">@gesepolia Masafi</a>",
           "Hashtags": ["AI", "Data"],
           "ID": "1828900558452797478"
           // ... (other Tweet fields)
         }
       }
     ],
     "workerPeerId": "16Uiu2HAmSCQMh22Xmo1GMxXB73qRx3YaVqqL1UwTYn3iNvQLjPB5"
   }
   ```

   Verify that the `workerPeerId` in the response matches your node's peerID.

### Security Considerations

- Ensure your `[username]_twitter_cookies.json` file has appropriate permissions (e.g., `chmod 600`).
- Keep your X/Twitter credentials secure and do not share them.
- Never commit your `[username]_twitter_cookies.json` file to version control.

### Warning: Cloud-Based Scraping

:::warning
If you are running a X/Twitter scraper in the cloud, you must use a residential proxy. Without a residential proxy, your scraper is likely to be blocked by X/Twitter, resulting in invalid credentials errors. Ensure you have a reliable residential proxy service set up before deploying your scraper in a cloud environment.
:::

### Troubleshooting

If you encounter issues:

- Verify the format of your `[username]_twitter_cookies.json` file.
- Ensure your X/Twitter credentials are valid and not expired.
- Check the node logs for any error messages related to X/Twitter scraping.
- If running in the cloud, confirm your residential proxy is correctly configured and functioning.

For more detailed setup options and advanced configurations, refer to:

- [Environment Configuration Guide](./environment-configuration.md)
- [Network Configuration Guide](./network-configuration.md)
- [Residential Proxy Configuration Guide](./residential-proxy-configuration.md)
