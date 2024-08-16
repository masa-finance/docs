---
id: 5-register-wallet
title: 5. Register Wallet
---

In the `Makefile`, ensure `NETUID` and `SUBTENSOR_ENVIRONMENT` are set to the correct values (testnet, mainnet, etc)

## Register Wallet to Testnet

Register your `miner` to the subnet:

```bash
make register-miner
```

Enter netuid `42` for mainnet or `165` for testnet and press enter. When prompted to continue, type `y` and press enter again. Confirm your password and press enter to continue. Wait for the miner to be registered to the subnet.

**Note:** You may encounter an error about exceeding blocks. This is normal; this means that miner registration traffic on the subnet is high, and you need to wait for the next tempo (approx. 1 hour)
