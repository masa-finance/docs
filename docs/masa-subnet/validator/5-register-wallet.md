---
id: 5-register-wallet
title: 5. Register Wallet
---

Register your `validator` to the subnet. Our netuid is `42` on mainnet, and `165` on testnet. By default, the `Makefile` is set to mainnet. If you wish to switch to testnet, edit the Makefile and point to the correct `SUBTENSOR_ENVIRONMENT` and `NETUID`.

```bash
make register-validator
```

When prompted to continue, type `y` and press enter again. Confirm your password and press enter to continue. Wait for the miner to be registered to the subnet.

**Note:** You may encounter an error about exceeding blocks. This means that many people have registered to the subnet in the last hour, and you need to wait. This is normal; wait for one tempo (approximately 1 hour).
