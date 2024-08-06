---
id: discord-sentiment
title: Discord Sentiment
---

## Masa Node Discord Sentiment Analysis Feature

The Masa Node introduces a robust feature for analyzing the sentiment of Discord messages. This functionality utilizes advanced language models to determine the sentiment conveyed in a collection of Discord messages, offering critical insights into community mood and trends.

## Overview

The Discord sentiment analysis feature extends the Masa Node's capabilities to include interaction with social media data, specifically from Discord channels. It employs cutting-edge language models to assess the sentiment of messages, classifying them as positive, negative, or neutral.

## How It Works

The sentiment analysis process begins by collecting Discord messages based on specific channel IDs, followed by sentiment evaluation using the chosen language models. The system is compatible with a variety of models, such as Claude and GPT variants, ensuring versatile and robust sentiment analysis.

> **Important**: To retrieve message content, you must toggle "Message Content Intent" in the Discord Developer Portal under the `Bot` section.
>
> ![Message Content Intent](/docs/images/discord-message-content-intent.png)

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

### Fetching Discord Messages

#### Masa API

> POST to the endpoint /sentiment/discord

```json
{
  "channelID": "1049433598505267250",
  "prompt": "question",
  "model": "claude-3-opus-20240229"
}
```

#### Masa CLI or code integration

Discord messages are retrieved using a custom scraper or the Discord API, as demonstrated in the [llmbridge](file:///path/to/masa/masa-oracle/pkg/llmbridge/sentiment_discord.go#L123) package. This process is designed to be straightforward and does not necessarily require Discord bot tokens.

```go
func AnalyzeSentimentDiscord(messages []string, model string, prompt string) (string, string, error) { ... }
```

### Analyzing Sentiment

After the messages are collected, they are processed through the selected language model for sentiment analysis. The system currently accommodates models with "claude-" and "gpt-" prefixes, among others, to suit various analysis requirements.

### Conclusion

Masa Node's Discord sentiment analysis feature is a potent instrument for gauging public sentiment within Discord communities. By leveraging state-of-the-art language models, it provides in-depth understanding of the sentiments expressed in messages, which is invaluable for community management and sentiment tracking.
