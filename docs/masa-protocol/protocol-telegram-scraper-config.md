---
id: protocol-telegram-scraper-config
title: Telegram
---

This guide will help you configure your Masa Node as a Telegram scraper.

### Prerequisites

- A running, staked Masa Node (see [Binary Installation](./protocol-binary-installation.md) or [Docker Setup](./protocol-docker-setup.md))
- Telegram app credentials (`app_id` and `app_hash` from [Telegram applications page](https://my.telegram.org/auth))
- Telegram account with access to target groups/channels

:::warning
The Telegram scraper uses full API access as a user, not a bot. Ensure you comply with Telegram's terms of service and respect user privacy when using this scraper.
:::

### Configuration Process

1. **Set environment variables**

   Enable Telegram scraping and add your app credentials in your `.env` file:

   ```plaintext
   TELEGRAM_SCRAPER=true
   TELEGRAM_APP_ID='your_app_id'
   TELEGRAM_APP_HASH='your_app_hash'
   ```

2. **Restart your node**

   Restart the Masa node to apply the changes.

3. **Verify configuration**

   Check the logs for confirmation:

   ```
   Is TelegramScraper: true
   ```

4. **Authenticate your Telegram account**

   a. Start authentication:
   ```bash
   curl -X 'POST' \
     'http://localhost:8080/api/v1/auth/telegram/start' \
     -H 'Content-Type: application/json' \
     -d '{"phone_number": "your_phone_number"}'
   ```

   b. Complete authentication with the code received on your phone:
   ```bash
   curl -X 'POST' \
     'http://localhost:8080/api/v1/auth/telegram/complete' \
     -H 'Content-Type: application/json' \
     -d '{
       "phone_number": "your_phone_number",
       "phone_code_hash": "hash_from_previous_step",
       "phone_code": "code_received_on_phone"
     }'
   ```
   

5. **Test the Telegram scraper**

To use the Telegram scraper, you'll need to provide a chat ID. Here's how to obtain chat IDs for different types of Telegram chats:

a. **Public Channels:**
   - Open the channel in Telegram (e.g., https://t.me/channelname)
   - The chat ID is `-100` followed by the channel name (e.g., `-100channelname`)

b. **Private Channels/Groups:**
   - Forward a message from the channel/group to @userinfobot
   - The bot will reply with the chat ID

c. **Using @username_to_id_bot:**
   - Start a chat with @username_to_id_bot
   - Send the channel's username (with @ symbol)
   - The bot will provide the chat ID

d. **Personal Chat:**
   - Send a message to @userinfobot
   - It will reply with your user ID (same as your personal chat ID)

#### Test the Telegram Scraper
Curl the node to confirm it returns Telegram data (replace `{chatID}` with an actual chat ID):

   ```bash
   curl -X 'GET' \
     'http://localhost:8080/api/v1/data/telegram/chats/{chatID}/messages' \
     -H 'accept: application/json'
   ```

   You should receive a response with Telegram message data.


Channel and group chat IDs are typically negative numbers, often starting with `-100`.

Use these chat IDs in your API calls, replacing `{chatID}` with the actual ID:

:::tip
You can join multiple Telegram channels with your authenticated account. The scraper will be able to access and scrape data from all channels you've joined, making it an efficient way to gather information from various sources.
:::

### Security Considerations

- Keep your Telegram app credentials secure and do not share them.
- Regularly review the channels and groups you've joined.
- Ensure your Telegram account is secured with two-factor authentication.

### Warning: User Account Access

:::warning
This scraper uses full API access as a user account, not a bot. Be aware of Telegram's terms of service and data usage policies. Ensure you have the right to access and use the data from the channels you're scraping.
:::

### Troubleshooting

If you encounter issues:
- Verify your Telegram app credentials are correct.
- Check that your Telegram account has access to the target channels/groups.
- Review node logs for any error messages related to Telegram scraping.
- Ensure your Telegram session is still valid and not expired.

For more detailed setup options and advanced configurations, refer to:
- [Environment Configuration Guide](./environment-configuration.md)
- [Network Configuration Guide](./network-configuration.md)