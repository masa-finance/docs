---
id: 7-create-env
title: 7. Create Env File
---

### Create Masa Bittensor .env file

In the `masa-bittensor` directory, create an `.env` file

```bash
vim .env
```

Add the following variable to your .env file, replacing the URL with your Masa Protocol node's URL

```bash
ORACLE_BASE_URL="http://<digital-ocean-droplet-ip-address>:8080/api/v1"
```

Save and exit

```bash
:wq
```
