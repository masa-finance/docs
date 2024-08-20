---
id: 9-edit-env
title: 9. Edit Env File
---

### Create .env

_in the masa-bittensor directory, create an .env file_

```bash
vim .env
```

_edit the .env file to include the following variables_

```bash
ORACLE_BASE_URL="http://localhost:8080/api/v1"
ORACLE_AUTHORIZATION="Bearer 1234"
```

_this assumes you have an oracle node running at the specified URL_

### Edit Makefile

_we need to set our ports correctly! grab the symmetrical port from the TCP Port Mappings and replace port 8091 in run-miner to said port (e.g. 48221)_

![Port Mappings](./port-mappings.png)

```bash
vim Makefile
```

_replace port 8091 in run-validator command with your exposed port!_

```bash
:wq
```
