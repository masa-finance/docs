# Masa Oracle Release Notes

[All Releases](https://github.com/masa-finance/masa-oracle/releases)

## [0.0.5.0](https://github.com/masa-finance/masa-oracle/releases) (2024)

## Overview

This release of the Masa Oracle Node introduces the following new features and changes.

### Breaking Changes

* Protocol verion change to 0.5.0

### Bug fixes

* Increased from selecting all available nodes to a maximum of XX nodes per request
* Reduced global timeout from 60 seconds to XX tbd seconds for faster response times

### New Features

* Node selection now considers worker category (Twitter, Telegram, Discord, Web) for more targeted task distribution

### Enhancements

* Improved Twitter scraping timeout and performance
* Implemented error handling in tweet collection
* Upgraded sentiment analysis to work updated tweet data structures
* Optimized worker selection for faster and more efficient data processing
* Implemented reduced timeout handling to have faster response times
* Implemented per-node timeout checks to identify and temporarily exclude underperforming nodes

## Change Log

* Version: 0.5.0
