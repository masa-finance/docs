---
id: web-scraper-data
title: Web Scraper Data
---

## Introduction

This guide outlines the use of the Masa Oracle Node API for web scraping, designed to assist developers in extracting structured data from websites. This functionality is crucial for a variety of applications, including content aggregation, market research, and data mining. The guide will detail the prerequisites, explain how to use the web scraping endpoints, and provide an example use case of deploying a decentralized AI agent for sentiment analysis.

## How It Works: Processing Web Scraping Requests

The API uses a distributed model to process web scraping requests, allowing for scalable and efficient data extraction. Here's the typical workflow:

### Step 1: Initialization

A scraping manager is initialized to handle incoming web scraping requests, coordinating the distribution of tasks across available nodes.

### Step 2: Receiving Requests

A request to scrape web data is received, containing the target URLs and the desired depth of scraping.

### Step 3: Task Delegation

The scraping manager delegates the task to the appropriate worker nodes, which then perform the scraping operation according to the specified parameters.

## Prerequisites

- Ensure your Masa Oracle Node is staked as outlined in the [Staking Guide for Masa Oracle Node](staking-guide.md).
- Configure your node's environment to support web scraping operations.
- Verify that your Masa Oracle Node is operational and can access the target web resources.

## Web Scraping Endpoints

The API provides endpoints for interacting with web data:

### Scrape Web Data for Sentiment Analysis

The `/api/v1/data/web` endpoint initiates the scraping process for the given list of URLs and performs sentiment analysis on the collected data.

- **Endpoint:** `/api/v1/data/web`
- **Method:** POST
- **Description:** Scrapes web pages and performs sentiment analysis on the text content.
- **Body:** JSON object specifying the URLs and parameters for scraping.
  - `url`: An URL to scrape.
  - `depth`: The depth of scraping, indicating how many levels of linked pages to include.

#### Example Request

```bash
3curl -X POST http://localhost:8080/api/v1/data/web \
-H "Content-Type: application/json" \
-d '{"url": "https://example.com", "depth": 1}'
```

Example response:

```json
{
  "sections": [
    {
      "title": "Introduction to Web Scraping",
      "paragraphs": [
        "Web scraping is the process of extracting data from websites...",
        "It can be used for various applications such as data mining, online price monitoring..."
      ],
      "images": [
        "https://example.com/image1.png",
        "https://example.com/image2.png"
      ]
    },
    {
      "title": "Best Practices for Web Scraping",
      "paragraphs": [
        "Respect the robots.txt file of the website...",
        "Do not overload the website with too many requests in a short period..."
      ],
      "images": [
        "https://example.com/best-practices-image.png"
      ]
    }
  ],
  "pages": [
    "https://example.com/about",
    "https://example.com/contact",
    "https://example.com/terms"
  ]
}
```

## Use Case: Decentralized AI Agent for Sentiment Analysis

Consider a decentralized AI agent, "WebSentimentAI," designed to perform sentiment analysis on web content. This agent uses the API's web scraping endpoints to collect data from various websites and analyze the sentiment of the text.

### How WebSentimentAI Leverages AI

1. **Data Collection:** WebSentimentAI sends requests to the `/api/v1/data/web` endpoint to scrape content from specified URLs.

2. **Sentiment Analysis:** After collecting the data, WebSentimentAI uses the specified sentiment analysis model to evaluate the sentiment of the text, categorizing it as positive, negative, or neutral.

3. **Insight Generation:** Using the results of the sentiment analysis, WebSentimentAI generates insights that can inform content strategies, market research, and other applications.

### Conclusion

The web scraping endpoints provided by the Masa Oracle Node API are valuable tools for developers looking to extract and analyze web content. By utilizing these endpoints, developers can build powerful AI agents that offer insights into the sentiment of web-based text, aiding in a wide range of data-driven decisions.
