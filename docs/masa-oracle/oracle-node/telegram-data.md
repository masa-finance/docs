---
id: telegram-data
title: Telegram Data
---

## Introduction

This guide details the use of the `/data/telegram/channel/messages` endpoint in the Masa Oracle Node API, which allows developers to retrieve messages from a specified Telegram channel. This endpoint is essential for applications that require analysis of message content, user engagement, or data aggregation from public Telegram channels.

## How It Works: Retrieving Messages from Telegram Channels

The endpoint interacts with the Telegram API to fetch messages from a given channel. Here's the process:

### Step 1: Send Request

A POST request is sent to the endpoint with the channel's username.

### Step 2: Fetch Messages

The Masa Oracle Node processes the request and fetches the latest messages from the specified Telegram channel.

### Step 3: Return Data

The messages are returned in the response, ready for the developer to use in their application.

### Retrieve Channel Messages

The `/data/telegram/channel/messages` endpoint retrieves messages from a specified Telegram channel.

- **Endpoint:** `/api/v1/data/telegram/channel/messages`
- **Method:** POST
- **Description:** Fetches messages from the specified Telegram channel.
- **Content-Type:** `application/json`
- **Body:** JSON object with the channel's username.
  - `username`: The username of the Telegram channel.

Example request:

```bash
curl -X 'POST' \
'http://localhost:8080/api/v1/data/telegram/channel/messages' \
-H 'accept: application/json' \
-H 'Content-Type: application/json' \
-d '{
"username": "coinlistofficialchannel"
}'
```

Example response:

```bash
json
[
{
"messages": [
{
"message_id": 1234,
"sender": {
"username": "user123",
"name": "John Doe"
},
"content": "Welcome to the official CoinList channel!",
"timestamp": "2023-04-01T12:00:00Z"
},
// More messages...
]
]
```

## Conclusion

The `/data/telegram/channel/messages` endpoint is a powerful tool for developers looking to integrate Telegram channel data into their applications. By following the steps outlined in this guide, you can retrieve messages from Telegram channels and utilize them for various purposes, such as content analysis, trend tracking, or building chatbots. Ensure your node is properly configured and authenticated to make the most of this endpoint.