# Masa Oracle Release Notes

[All Releases](https://github.com/masa-finance/masa-oracle/releases)

## [0.0.6-beta](https://github.com/masa-finance/masa-oracle/releases) (2024)

## Overview

This release of the Masa Oracle Node introduces new features, performance improvements, and bug fixes. Below is a detailed description of the updates included in this release.

### Breaking Changes

* None

### Bug fixes

* Fixed depth = 0 error in data web scraper
* Fixed base64 decoding error in node api

### New Features

* None

### Worker Storage Metrics

* Issue #314: Introduced detailed storage metrics for each worker.
* Store CID in DHT: Ensures availability by storing
* Content Identifiers (CIDs) in the Distributed Hash Table (DHT).
* Persistence in LevelDB: Stores CIDs and their underlying data in LevelDB for enhanced data persistence.
* Metrics to Track:

* Detailed Worker Metrics: Track detailed metrics for each worker, including Who, What, Where, Bytes Scraped, and Time Taken.
* Incentives: Provide incentives based on total time taken and bytes scraped.
* Scrapes Per Peer: Keep a record of the number of scrapes performed by each peer.
* Storage of BytesScraped: Maintain a record of bytes scraped by each peer.
* PeerID Selection and Response: Improve PeerID selection and response mechanisms.
* Bug Fixes
* Error Response Handling: Fixed issues related to error response handling from workers.
* Performance Improvements
* Protobuf Message Response: Added protobuf message.
* Response for more efficient worker responses.
* Requirements
* Network Configuration: Ensure that port 4001 TCP inbound is open.

## Change Log

* Removed GCP IP address lookup for simpler option
* Version: 0.0.6-beta
