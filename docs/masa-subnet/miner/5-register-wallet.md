---
id: 5-register-wallet
title: 5. Register Wallet
---

## Register Wallet to the Subnet

Register your `miner` to the subnet (netuid `42` for mainnet,`165` for testnet):

```bash
make register-miner
```

Enter the netuid and press enter. When prompted to continue, type `y` and press enter again. Confirm your password and press enter to continue. Wait for the validator to be registered to the subnet.

**Note:** You may encounter an error about exceeding blocks. This is normal; wait for one tempo (approximately 1 hour).
