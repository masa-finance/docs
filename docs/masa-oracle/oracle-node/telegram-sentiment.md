---
id: telegram-sentiment
title: Telegram Sentiment
---

## Masa Node Telegram Sentiment Analysis Feature

The Masa Node introduces a powerful feature for analyzing the sentiment of telegram messages. This functionality leverages advanced language models to interpret the sentiment behind a collection of tweets, providing valuable insights into public perception and trends.

## Overview

The Telegram sentiment analysis feature is part of the broader capabilities of the Masa Node, designed to interact with Telegram messages data in a meaningful way. It uses state-of-the-art language models to evaluate the sentiment of tweets, categorizing them into positive, negative, or neutral sentiments.

## How It Works

The sentiment analysis process involves fetching tweets based on specific queries, and then analyzing these tweets using selected language models. The system supports various models, including Claude and GPT variants, allowing for flexible and powerful sentiment analysis.

### Models

```go
const (
 ClaudeOpus                                 ModelType = "claude-3-opus"
 ClaudeOpus20240229                         ModelType = "claude-3-opus-20240229"
 ClaudeSonnet20240229                       ModelType = "claude-3-sonnet-20240229"
 ClaudeHaiku20240307                        ModelType = "claude-3-haiku-20240307"
 GPT4                                       ModelType = "gpt-4"
 GPT4o                                      ModelType = "gpt-4o"
 GPT4TurboPreview                           ModelType = "gpt-4-turbo-preview"
 GPT35Turbo                                 ModelType = "gpt-3.5-turbo"
 LLama2                                     ModelType = "ollama/llama2"
 LLama3                                     ModelType = "ollama/llama3"
 Mistral                                    ModelType = "ollama/mistral"
 Gemma                                      ModelType = "ollama/gemma"
 Mixtral                                    ModelType = "ollama/mixtral"
 OpenChat                                   ModelType = "ollama/openchat"
 NeuralChat                                 ModelType = "ollama/neural-chat"
 CloudflareQwen15Chat                       ModelType = "@cf/qwen/qwen1.5-0.5b-chat"
 CloudflareLlama27bChatFp16                 ModelType = "@cf/meta/llama-2-7b-chat-fp16"
 CloudflareLlama38bInstruct                 ModelType = "@cf/meta/llama-3-8b-instruct"
 CloudflareMistral7bInstruct                ModelType = "@cf/mistral/mistral-7b-instruct"
 CloudflareMistral7bInstructV01             ModelType = "@cf/mistral/mistral-7b-instruct-v0.1"
 HuggingFaceGoogleGemma7bIt                 ModelType = "@hf/google/gemma-7b-it"
 HuggingFaceNousresearchHermes2ProMistral7b ModelType = "@hf/nousresearch/hermes-2-pro-mistral-7b"
 HuggingFaceTheblokeLlama213bChatAwq        ModelType = "@hf/thebloke/llama-2-13b-chat-awq"
 HuggingFaceTheblokeNeuralChat7bV31Awq      ModelType = "@hf/thebloke/neural-chat-7b-v3-1-awq"
 CloudflareOpenchat35_0106                  ModelType = "@cf/openchat/openchat-3.5-0106"
 CloudflareMicrosoftPhi2                    ModelType = "@cf/microsoft/phi-2"
)
```

### Fetching Telegram Sentiment

#### Masa API

> POST to the endpoint /sentiment/telegram

```json
{
  "username": "coinlistofficialchannel",
  "model": "all", // or replace with a single model type
  "prompt": "new tokens"
}
```

#### Masa cli or code integration

Tweets are fetched using the Twitter Scraper library, as seen in the [llmbridge](file:///Users/john/Projects/masa/masa-oracle/pkg/llmbridge/sentiment.go#) package. This process does not require Telegram API keys, making it accessible and straightforward.

```go
func AnalyzeSentimentTelegram(messages []*tg.Message, model string, prompt string) (string, string, error) {
```

### Analyzing Sentiment

Once tweets are fetched, they are sent to the chosen language model for sentiment analysis. The system currently supports models prefixed with "claude-" and "gpt-", catering to a range of analysis needs.