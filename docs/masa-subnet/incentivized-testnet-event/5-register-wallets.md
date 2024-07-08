---
id: 5-register-wallet
title: 5. Register Wallet
---

In the `Makefile`, ensure `NETUID` is set to `2` and `SUBTENSOR_ENVIRONMENT` is set to `$(DEVNET)`.

```
NETUID = 2
SUBTENSOR_ENVIRONMENT = $(DEVNET)
```

## Register Wallet to Subnet

Register your `miner` to the subnet (`2`):

```bash
make register-miner
```

Enter netuid `2` and press enter. When prompted to continue, type `y` and press enter again. Confirm your password and press enter to continue. Wait for the miner to be registered to the subnet.

**Note:** You may encounter an error about exceeding blocks. This is normal; wait for one tempo (approximately 1 hour).
