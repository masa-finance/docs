---
id: twitter-data
title: Twitter Data
---

## Introduction

This gide serves as a comprehensive guide to utilizing the Twitter data endpoints available through the Masa Oracle Node API. It is designed to assist developers in harnessing the power of real-time Twitter data for a variety of applications, from sentiment analysis, to trend monitoring, and model fine-tuning. Before diving into the technical details, it's important to ensure that your Masa Oracle Node is properly staked. If you want to contribute to the network as a worker please add necessary Twitter credentials so your node can fullfill requests. This guide will walk you through the prerequisites, provide detailed information on how to access and use the Twitter endpoints, and offer example use case of deploying a decentralized AI agent for social media analysis. Whether you're looking to analyze public sentiment, track trending topics, or gather data for your AI Agents, this guide will equip you with the knowledge to effectively integrate Twitter data into your project.

## How It Works: Processing Twitter Data Requests

The Masa Oracle Node employs an actor-based model to efficiently process Twitter data requests, enabling real-time access to Twitter data that is sourced through a decentralized network of workers. Each worker is able to fullfill a request and provide data to the network. This section outlines the workflow from receiving a request to delivering data back to the API.

### Step 1: Initialization

A Manager actor is initialized to oversee the processing of Twitter data requests. This actor acts as a coordinator, managing a pool of Worker actors dedicated to handling individual tasks.

### Step 2: Receiving Requests

When a Twitter data request is received, it is directed to the Manager actor. The request includes details such as the search query and the number of tweets to retrieve.

### Step 3: Task Delegation

The Manager assesses the request and delegates the task to an available Worker actor. If no Worker is available, a new one is spawned. Each Worker is responsible for a specific aspect of the request, in this case fetching tweets from Twitter by workers using the `/data/tweets` endpoint.

## Prerequisites

- Ensure your Masa Oracle Node is staked as described in the [Staking Guide for Masa Oracle Node](staking-guide.md).
- Add Twitter credentials to your `.env` file if you want to become a worker.
- Have the Masa Oracle Node running and accessible.

## Twitter Endpoints

The Masa Oracle Node provides several endpoints for interacting with Twitter data:

### Search Tweets

The `/data/tweets` endpoint searches for recent tweets based on a query, you can specify the number of results to return.

- **Endpoint:** `/data/tweets`
- **Method:** POST
- **Description:** Searches for tweets based on the provided query.
- **Body:** JSON object specifying search criteria.
  - `query`: The search query string.
  - `count`: The number of tweets to return.

Example request:

```bash
curl -X POST http://localhost:8080/data/tweets \
-H "Content-Type: application/json" \
-d '{"query": "Brendan Playford", "count": 1}'
```

Example response:

```json
{
"tweets": [
{
"ConversationID": "1776008088778346807",
"HTML": "@getmasafi @calanthiaaa @BrendanPlayford $MASA to the Moon",
"ID": "1776382544814223412",
"InReplyToStatusID": "1776008088778346807",
"IsReply": true,
"Likes": 1,
"Name": "Mikemeyrina.isme",
"Mentions": [
{"ID": "1419111693112676353", "Username": "getmasafi", "Name": "Masa"},
{"ID": "179778026", "Username": "calanthiaaa", "Name": "calanthia.soul"},
{"ID": "288975755", "Username": "BrendanPlayford", "Name": "brendan.soul"}
],
"PermanentURL": "https://twitter.com/MikeMeyRina/status/1776382544814223412",
"Text": "@getmasafi @calanthiaaa @BrendanPlayford $MASA to the Moon",
"TimeParsed": "2024-04-05T22:52:56Z",
"Timestamp": 1712357576,
"UserID": "1711707773380218880",
"Username": "MikeMeyRina",
"Views": 3,
"SensitiveContent": false
}
]
}
```

### Retrieve Twitter Followers

The `/data/twitter/followers/{username}` endpoint allows you to retrieve a list of followers for a specified Twitter user. This can be particularly useful for analyzing the audience or reach of a user, understanding community dynamics, or for further analysis in combination with other data points.

- **Endpoint:** `/data/twitter/followers/{username}`
- **Method:** GET
- **Description:** Fetches a list of Twitter users who follow the specified user.
- **URL Parameters:**
  - `username`: The Twitter username (without @) of the user whose followers you want to retrieve.
- **Query Parameters:**
  - `maxUsersNbr`: (Optional) The maximum number of follower profiles to return in one response. Defaults to 20 if not specified. This allows for controlling the size of the data returned.

Example request:

```bash
curl -X POST http://localhost:8080/data/twitter/followers/brendanplayford?maxUsersNbr=30 \
-H "Content-Type: application/json" \
```

Example response:

```json
{
  "followers": [
    {
      "can_dm": true,
      "can_media_tag": true,
      "created_at": "Tue Jul 16 15:37:00 +0000 2019",
      "default_profile": true,
      "default_profile_image": false,
      "description": "#Bitcoin\nChannel: https://t.co/r00P2WS8la\n\nBuild Bots & Gleam with the referral system\nPromote Airdrop/Bounty/Giveaway\n\nContact: https://t.co/iQYq41HDM5",
      "entities": {
        "description": {
          "urls": [
            {
              "display_url": "t.me/airdropinspect…",
              "expanded_url": "https://t.me/airdropinspector",
              "url": "https://t.co/r00P2WS8la",
              "indices": [18, 41]
            },
            {
              "display_url": "t.me/Airdropinspect",
              "expanded_url": "http://t.me/Airdropinspect",
              "url": "https://t.co/iQYq41HDM5",
              "indices": [129, 152]
            }
          ]
        },
        "url": {
          "urls": [
            {
              "display_url": "linktr.ee/airdropinspect…",
              "expanded_url": "https://linktr.ee/airdropinspector",
              "url": "https://t.co/QwVQ7gxzGn",
              "indices": [0, 23]
            }
          ]
        }
      },
      "fast_followers_count": 0,
      "favourites_count": 40,
      "followers_count": 1743059,
      "friends_count": 27,
      "has_custom_timelines": false,
      "is_translator": false,
      "listed_count": 1815,
      "location": "AirdropInspector",
      "media_count": 944,
      "name": "Airdrop Inspector",
      "normal_followers_count": 1743059,
      "pinned_tweet_ids_str": [],
      "possibly_sensitive": false,
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/1151153768165076992/1628962665",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/1475449705912020996/5szFZs1I_normal.jpg",
      "screen_name": "airdropinspect",
      "statuses_count": 3050,
      "translator_type": "none",
      "url": "https://t.co/QwVQ7gxzGn",
      "verified": false,
      "want_retweets": false,
      "withheld_in_countries": []
    },
    {
      "can_dm": true,
      "can_media_tag": true,
      "created_at": "Tue May 14 13:37:34 +0000 2024",
      "default_profile": true,
      "default_profile_image": false,
      "description": "",
      "entities": {
        "description": {
          "urls": []
        },
        "url": {
          "urls": null
        }
      },
      "fast_followers_count": 0,
      "favourites_count": 3,
      "followers_count": 0,
      "friends_count": 17,
      "has_custom_timelines": false,
      "is_translator": false,
      "listed_count": 0,
      "location": "",
      "media_count": 0,
      "name": "Ameer_Waheed",
      "normal_followers_count": 0,
      "pinned_tweet_ids_str": [],
      "possibly_sensitive": false,
      "profile_banner_url": "",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/1790376558743420928/s4a-Wy6Z_normal.jpg",
      "screen_name": "ameerwaheed01",
      "statuses_count": 2,
      "translator_type": "none",
      "url": "",
      "verified": false,
      "want_retweets": false,
      "withheld_in_countries": []
    }
  ]
}
```

## Advanced Search

The Advanced Search feature allows users to perform more complex queries to filter tweets according to various criteria such as date ranges, specific users, hashtags, and more. Below you will find detailed information on how to construct advanced search queries.


### Hashtag Search
Search for tweets containing specific hashtags.

**Syntax:** `#hashtag`

**Example:**

```bash
curl -X POST http://localhost:8080/api/v1/data/twitter/tweets/recent \
-H "Content-Type: application/json" \
-d '{"query": "#MasaNode", "count": 10}'
```

### Mention Search
Search for tweets mentioning a specific user.

**Syntax:** `@username`

**Example:**

```bash
curl -X POST http://localhost:8080/api/v1/data/twitter/tweets/recent \
-H "Content-Type: application/json" \
-d '{"query": "@getmasafi", "count": 10}'
```

### From User Search
Search for tweets posted by a specific user.

**Syntax:** `from:username`

**Example:**

```bash
curl -X POST http://localhost:8080/api/v1/data/twitter/tweets/recent \
-H "Content-Type: application/json" \
-d '{"query": "from:getmasafi", "count": 10}'
```

### To User Search
Search for tweets directed to a specific user.

**Syntax:** `to:username`

**Example:**

```bash
curl -X POST http://localhost:8080/api/v1/data/twitter/tweets/recent \
-H "Content-Type: application/json" \
-d '{"query": "to:getmasafi", "count": 10}'
```

### Language-Specific Search
Search for tweets in a specific language.

**Syntax:** `lang:language_code`

**Example:**

```bash
curl -X POST http://localhost:8080/api/v1/data/twitter/tweets/recent \
-H "Content-Type: application/json" \
-d '{"query": "Masa lang:en", "count": 10}'
```

### Date Range Search
Search for tweets within a specific date range.

**Syntax:** `since:yyyy-mm-dd until:yyyy-mm-dd`

**Example:**

```bash
curl -X POST http://localhost:8080/api/v1/data/twitter/tweets/recent \
-H "Content-Type: application/json" \
-d '{"query": "Masa since:2021-01-01 until:2021-12-31", "count": 10}'
```

### Retweets Filtering
Exclude retweets from your search results.

**Syntax:** `-filter:retweets`

**Example:**

```bash
curl -X POST http://localhost:8080/api/v1/data/twitter/tweets/recent \
-H "Content-Type: application/json" \
-d '{"query": "Masa -filter:retweets", "count": 10}'
```

### Minimum Likes Filter
Search for tweets with a minimum number of likes.

**Syntax:** `min_faves:number`

**Example:**

```bash
curl -X POST http://localhost:8080/api/v1/data/twitter/tweets/recent \
-H "Content-Type: application/json" \
-d '{"query": "Masa min_faves:100", "count": 10}'
```

### Minimum Retweets Filter
Search for tweets with a minimum number of retweets.

**Syntax:** `min_retweets:number`

**Example:**

```bash
curl -X POST http://localhost:8080/api/v1/data/twitter/tweets/recent \
-H "Content-Type: application/json" \
-d '{"query": "Masa min_retweets:50", "count": 10}'
```

### Keyword Exclusion
Exclude tweets with certain keywords.

**Syntax:** `-keyword`

**Example:**

```bash
curl -X POST http://localhost:8080/api/v1/data/twitter/tweets/recent \
-H "Content-Type: application/json" \
-d '{"query": "Masa -moon", "count": 10}'
```

### OR Operator
Combine multiple terms, where at least one must be present.

**Syntax:** `term1 OR term2`

**Example:**

```bash
curl -X POST http://localhost:8080/api/v1/data/twitter/tweets/recent \
-H "Content-Type: application/json" \
-d '{"query": "Masa OR Oracle", "count": 10}'
```

### Geo-location Based Search
Search for tweets by users located within a certain radius of a given latitude and longitude.

**Syntax:** `geocode:latitude,longitude,radius`

**Example:**

```bash
curl -X POST http://localhost:8080/api/v1/data/twitter/tweets/recent \
-H "Content-Type: application/json" \
-d '{"query": "Masa geocode:37.781157,-122.398720,1mi", "count": 10}'
```

### URL Inclusion Search
Search for tweets containing a specific URL.

**Syntax:** `url:"http://example.com"`

**Example:**

```bash
curl -X POST http://localhost:8080/api/v1/data/twitter/tweets/recent \
-H "Content-Type: application/json" \
-d '{"query": "url:\"http://example.com\"", "count": 10}'
```

### Question Tweets Filter
Search for tweets asking a question.

**Syntax:** `?`

**Example:**

```bash
curl -X POST http://localhost:8080/api/v1/data/twitter/tweets/recent \
-H "Content-Type: application/json" \
-d '{"query": "Masa ?", "count": 10}'
```

### Safe Search Mode
Exclude adult content from your search results.

**Syntax:** `filter:safe`

**Example:**

```bash
curl -X POST http://localhost:8080/api/v1/data/twitter/tweets/recent \
-H "Content-Type: application/json" \
-d '{"query": "Masa filter:safe", "count": 10}'
```

Each of these search types can be combined to create more complex queries, allowing for highly targeted searches. Remember to test each example to ensure they work as expected and to provide users with accurate and helpful documentation.

## Use Case: Decentralized AI Agent

Imagine a decentralized AI agent designed to monitor and analyze public sentiment on social media platforms, specifically Twitter, regarding various cryptocurrencies. This agent, let's call it "CryptoSentimentAI," uses the Masa Oracle Node's Twitter data endpoints to gather real-time data on what people are saying about different cryptocurrencies.

### How CryptoSentimentAI Leverages LLMs

1. **Data Collection:** CryptoSentimentAI sends queries to the `/data/tweets` endpoint to search for recent tweets mentioning specific cryptocurrencies, such as Bitcoin, Ethereum, or any altcoin of interest. It specifies queries like "Bitcoin," "Ethereum," or the respective cryptocurrency's hashtag.

2. **Sentiment Analysis with LLMs:** Upon retrieving the tweets, CryptoSentimentAI employs large language models (LLMs) to perform sentiment analysis on each tweet. Unlike traditional NLP techniques, LLMs can understand and interpret the context and nuances of language more effectively, allowing for a more accurate categorization of sentiments into positive, neutral, or negative.

3. **Aggregating Insights:** Leveraging the advanced understanding capabilities of LLMs, CryptoSentimentAI aggregates the sentiment data to determine the overall public sentiment towards each cryptocurrency.

4. **Actionable Insights:** The nuanced analysis provided by LLMs enables CryptoSentimentAI to offer more refined actionable insights to its users. For instance, detecting subtle shifts in sentiment or identifying emerging trends before they become mainstream. This could mean advising caution in response to a nuanced negative sentiment trend or recognizing an opportune moment to invest based on a positive sentiment upswing.

### Example Implementation

To implement such a feature, you would start by setting up queries to the `/data/tweets` endpoint. Here's an example request to search for tweets about Bitcoin:

```bash
curl -X POST http://localhost:8080/data/tweets \
-H "Content-Type: application/json" \
-d '{"query": "#Bitcoin", "count": 100}'
```

Upon collecting the tweets, CryptoSentimentAI processes and analyzes the text content of each tweet using large language models (LLMs) to evaluate sentiment. This approach leverages the advanced capabilities of LLMs to understand context and nuance, providing a more accurate sentiment analysis than traditional methods.

### Conclusion

The `/data/tweets` endpoint in the Masa Oracle Node API provides a rich foundation for developing decentralized applications that can interact with social media data in real-time. By leveraging this endpoint, developers are empowered to create innovative AI agents capable of analyzing social media trends and sentiments. These agents can uncover deep insights from the vast stream of social media conversations, offering valuable intelligence for a wide range of applications and decision-making processes.


## Use Case: Decentralized AI Agent

Imagine a decentralized AI agent designed to monitor and analyze public sentiment on social media platforms, specifically Twitter, regarding various cryptocurrencies. This agent, let's call it "CryptoSentimentAI," uses the Masa Oracle Node's Twitter data endpoints to gather real-time data on what people are saying about different cryptocurrencies.

### How CryptoSentimentAI Leverages LLMs

1. **Data Collection:** CryptoSentimentAI sends queries to the `/data/tweets` endpoint to search for recent tweets mentioning specific cryptocurrencies, such as Bitcoin, Ethereum, or any altcoin of interest. It specifies queries like "Bitcoin," "Ethereum," or the respective cryptocurrency's hashtag.

2. **Sentiment Analysis with LLMs:** Upon retrieving the tweets, CryptoSentimentAI employs large language models (LLMs) to perform sentiment analysis on each tweet. Unlike traditional NLP techniques, LLMs can understand and interpret the context and nuances of language more effectively, allowing for a more accurate categorization of sentiments into positive, neutral, or negative.

3. **Aggregating Insights:** Leveraging the advanced understanding capabilities of LLMs, CryptoSentimentAI aggregates the sentiment data to determine the overall public sentiment towards each cryptocurrency.

4. **Actionable Insights:** The nuanced analysis provided by LLMs enables CryptoSentimentAI to offer more refined actionable insights to its users. For instance, detecting subtle shifts in sentiment or identifying emerging trends before they become mainstream. This could mean advising caution in response to a nuanced negative sentiment trend or recognizing an opportune moment to invest based on a positive sentiment upswing.

### Example Implementation

To implement such a feature, you would start by setting up queries to the `/data/tweets` endpoint. Here's an example request to search for tweets about Bitcoin:

```bash
curl -X POST http://localhost:8080/data/tweets \
-H "Content-Type: application/json" \
-d '{"query": "#Bitcoin", "count": 100}'
```

Upon collecting the tweets, CryptoSentimentAI processes and analyzes the text content of each tweet using large language models (LLMs) to evaluate sentiment. This approach leverages the advanced capabilities of LLMs to understand context and nuance, providing a more accurate sentiment analysis than traditional methods.

### Conclusion

The `/data/tweets` endpoint in the Masa Oracle Node API provides a rich foundation for developing decentralized applications that can interact with social media data in real-time. By leveraging this endpoint, developers are empowered to create innovative AI agents capable of analyzing social media trends and sentiments. These agents can uncover deep insights from the vast stream of social media conversations, offering valuable intelligence for a wide range of applications and decision-making processes.