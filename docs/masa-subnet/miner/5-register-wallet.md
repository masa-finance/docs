---
id: 5-register-wallet
title: 5. Register Wallet
---

Register your `miner` to the subnet. Our netuid is `42` on mainnet, and `165` on testnet. Be sure to verify the correct netuid and subtensor environment variables are set in the `Makefile`. Look for the following:

```Makefile
# SUBTENSOR_ENVIRONMENT = $(TESTNET)
SUBTENSOR_ENVIRONMENT = $(MAINNET)

# NETUID = 165 # testnet
NETUID = 42 # mainnet
```

Once your configuration is confirmed, register your miner! All of our make commands will use the `NETUID` and `SUBTENSOR_ENVIRONMENT` variables set in the `Makefile`.

```bash
make register-miner
```

When prompted to continue, type `y` and press enter again. Confirm your password and press enter to continue. Wait for the miner to be registered to the subnet.

**Note:** You may encounter an error about exceeding blocks. This is normal; wait for one tempo (approximately 1 hour).
