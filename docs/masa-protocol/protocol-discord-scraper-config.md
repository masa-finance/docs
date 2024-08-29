---
id: protocol-discord-scraper-config
title: Discord Scraper
---

This guide will help you configure your Masa Node as a Discord scraper.

### Prerequisites

- A running, staked Masa Node (see [Binary Installation](./protocol-binary-installation.md) or [Docker Setup](./protocol-docker-setup.md))
- Discord bot token (obtain from [Discord Developer Portal](https://discord.com/developers/applications))
- Discord bot added to target server with necessary permissions

:::warning
The Discord scraper requires a bot with appropriate permissions in the target server. This configuration is intended for Discord server administrators or owners only.
:::

### Configuration Process

1. **Set environment variables**

   Enable Discord scraping and add your bot token in your `.env` file:

   ```plaintext
   DISCORD_SCRAPER=true
   DISCORD_BOT_TOKEN=your_bot_token_here
   ```

2. **Restart your node**

   Restart the Masa node to apply the changes.

3. **Verify configuration**

   Check the logs for confirmation:

   ```
   Is DiscordScraper: true
   ```

4. **Test the Discord scraper**

   Curl the node to confirm it returns Discord data:

   ```bash
   curl -X 'GET' \
     'http://localhost:8080/api/v1/data/discord/guilds/all' \
     -H 'accept: application/json'
   ```

   You should receive a response with Discord guild data.

### Security Considerations

- Keep your Discord bot token secure and do not share it.
- Regularly rotate your bot token for enhanced security.
- Ensure your bot has only the necessary permissions in Discord servers.

### Warning: Bot Permissions

:::warning
Ensure your Discord bot has the correct permissions in the target server. Without proper permissions, the scraper may fail to retrieve data or function incorrectly. Only configure this scraper if you have administrative rights or owner permissions in the target Discord server.
:::

### Troubleshooting

If you encounter issues:
- Verify your Discord bot token is correct and not expired.
- Check that your bot has the necessary permissions in the target server.
- Review node logs for any error messages related to Discord scraping.
- Ensure your bot is properly connected to the Discord gateway.

For more detailed setup options and advanced configurations, refer to:
- [Environment Configuration Guide](./environment-configuration.md)
- [Network Configuration Guide](./network-configuration.md)
- [Discord Bot Setup Guide](./discord-bot-setup.md)