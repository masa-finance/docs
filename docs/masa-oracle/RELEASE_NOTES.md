# Masa Oracle Release Notes

## [0.0.4-beta](https://github.com/masa-finance/masa-oracle/releases) (2024)

> Masa Oracle Node Release

### Breaking Changes

* Normalized all command line params to camelCase
* Changed Ollama LLM Models default names to ollama/*

### New Features

* Added Cloudflare AI Workers for LLM compute
* Implemented Record and OracleData struct to save events to persisted storage
* Discord Scraper as pkg
* Twitter Scraper as pkg
* Added Followers scraper call for Twitter pkg
* Reddit Scraper as pkg
* Web Scraper as pkg
* Added /auth endpoint to generate 24 api bearer token for node calls
* Added /chat for LLM chat completion PoC
* Added LLM Chat capability, enabling interaction with large language models (LLMs) such as OpenAI's GPT and others, directly through the node.

### Bug Fixes

* Fixed update Records array for node data
* Worker channel race condition

### Performance Improvements

* Increased worker time syncing between peers

### ChangeLog

* Updated swagger docs
* version 0.0.4-beta
