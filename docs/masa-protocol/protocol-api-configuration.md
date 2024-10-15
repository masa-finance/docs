---
id: protocol-api-configuration
title: API Configuration
---

This guide explains how to configure and enable the API server for your Masa Protocol node.

## Overview

The Masa Protocol node includes an API server that can be enabled for advanced use cases. By default, the API server is disabled for security reasons.

## Enabling the API Server

You can enable the API server using one of the following methods:

:::warning
Enabling the API server may expose sensitive functionality and data. Only enable it if you understand the security implications and have implemented proper security measures. Always use strong authentication and encryption when accessing the API.
:::

### 1. Environment Variable

Set the `API_ENABLED` environment variable to `true`:

```bash
API_ENABLED=true
```

### 2. Command-line Flag

Use the `--api-enabled=true` flag when starting the application:

```bash
./bin/masa-node --api-enabled=true
```

### 3. Makefile Command

Use the dedicated Makefile command:

```bash
make run-api-enabled
```

## Security Considerations

Enabling the API server may have security implications. Please consider the following:

- Only enable the API server when necessary.
- Ensure proper network security measures are in place (e.g., firewalls, VPNs).
- Use strong authentication mechanisms for API access.
- Regularly update and patch your system to mitigate potential vulnerabilities.

## API Endpoints

When enabled, the API server provides the following endpoints:

(List and briefly describe the available API endpoints here)

## Rate Limiting

To prevent abuse, the API server implements rate limiting. The current limits are:

(Describe rate limiting rules here)

## Logging

API server activities are logged for monitoring and debugging purposes. Logs can be found at:

(Specify the location and format of API server logs)

## Troubleshooting

If you encounter issues with the API server, try the following:

1. Verify that the API server is enabled correctly.
2. Check the logs for any error messages.
3. Ensure your firewall allows traffic on the API server port.
4. Restart the Masa Protocol node.

For persistent issues, please contact our support team or open an issue on our GitHub repository.

