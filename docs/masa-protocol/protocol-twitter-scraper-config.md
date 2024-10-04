---
id: protocol-twitter-scraper-config
title: X/Twitter (User/Pass)
---

This guide will help you configure your Masa Node as a X/Twitter scraper using user/pass authentication.

### 📋 Prerequisites

- A running, staked Masa Node (see [Binary Installation](./protocol-binary-installation.md) or [Docker Setup](./protocol-docker-setup.md))
- X/Twitter Pro Account: without a Pro account, you will not be able to scrape X/Twitter data. 

:::warning
⚠️ A paid X/Twitter Pro Account is absolutely necessary for scraping X/Twitter data. Ensure you have obtained a paid Twitter Pro Account before proceeding with the configuration.
:::

### 🛠️ Configuration Process

1. **Set environment variables**

   Enable X/Twitter scraping in your `.env` file:

   ```plaintext
   TWITTER_SCRAPER=true
   TWITTER_ACCOUNTS=username1:password1,username2:password2
   USER_AGENTS="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36,Mozilla/5.0 (Macintosh; Intel Mac OS X 14.7; rv:131.0) Gecko/20100101 Firefox/131.0"
   ```

   **Replace** `username1:password1,username2:password2` with your actual X/Twitter account credentials.

   :::info
   💡 You can use multiple accounts by separating them with commas and the node will rotate through them and skip accounts that are banned or rate limited by X/Twitter.
   :::

   **Add multiple user agents** `USER_AGENTS="user_agent1,user_agent2,user_agent3,user_agent4,user_agent5"`

   :::tip
   🔄 The USER_AGENTS variable can accept a list of comma-separated user agents. The scraper will randomly select one for each request, helping to mimic different browser behaviors and potentially reduce the risk of being blocked. You can find up-to-date user agent strings at [WhatIsMyBrowser.com](https://www.whatismybrowser.com/guides/the-latest-user-agent/).
   :::

2. **Two-Factor Authentication (2FA)**

   If you have 2FA enabled on your X/Twitter account, you can temporarily turn it off to allow the scraper to save your cookies locally for the first time it logs into each account:

   :::note
   🔒 It's recommended to temporarily disable 2FA when setting up your scraper for the first time. This allows the scraper to save your cookies locally. After successful setup, you can re-enable 2FA.
   :::

3. **Restart your node**

   Restart the Masa node to apply the changes.

4. **Verify configuration**

   Check the logs for confirmation:

   ```
   Is TwitterScraper: true
   ```

5. **Test the X/Twitter scraper**

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
           "HTML": "<a href=\"https://twitter.com/CryptoGodJohn\">@CryptoGodJohn</a> $MASA the leading token for <a href=\"https://twitter.com/hashtag/AI\">#AI</a> and <a href=\"https://twitter.com/hashtag/Data\">#Data</a> <br><a href=\"https://twitter.com/getmasafi\">@getmasafi</a>",
           "Hashtags": [
             "AI",
             "Data"
           ],
           "ID": "1828900558452797478",
           // ... (other Tweet fields)
         }
       }
     ],
     "workerPeerId": "16Uiu2HAmSCQMh22Xmo1GMxXB73qRx3YaVqqL1UwTYn3iNvQLjPB5"
   }
   ```

   Verify that the `workerPeerId` in the response matches your node's peerID.

### 🔐 Security Considerations

- Keep your X/Twitter credentials secure and do not share them.
- Never commit your `.env` file with X/Twitter credentials to version control.
- After successful setup and cookie storage, remove the `TWITTER_2FA_CODE` from your `.env` file.

### ⚠️ Warning: Cloud-Based Scraping

:::warning
If you are running a X/Twitter scraper in the cloud, you must use a residential proxy. Without a residential proxy, your scraper is likely to be blocked by X/Twitter, resulting in invalid credentials errors. Ensure you have a reliable residential proxy service set up before deploying your scraper in a cloud environment.
:::

### 🔧 Troubleshooting

If you encounter issues:
- Ensure your X/Twitter credentials in the `.env` file are correct.
- Check the node logs for any error messages related to X/Twitter scraping.
- If running in the cloud, confirm your residential proxy is correctly configured and functioning.
- If you're experiencing frequent login requests or timeouts, try temporarily disabling 2FA, restarting your node to save cookies, and then re-enabling 2FA.

For more detailed setup options and advanced configurations, refer to:
- [Environment Configuration Guide](./environment-configuration.md)
- [Network Configuration Guide](./network-configuration.md)
- [Residential Proxy Configuration Guide](./residential-proxy-configuration.md)