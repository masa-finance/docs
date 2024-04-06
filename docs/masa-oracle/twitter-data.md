---
id: twitter-data
title: Accessing Twitter Endpoints in Masa Oracle Node
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
