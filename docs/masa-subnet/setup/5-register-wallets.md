---
id: 5-register-wallets
title: 5. Register Wallets
---

## Register Wallets to Subnet

Register your `miner` to the default subnet (`1`):

```bash
make register-miner
```

Enter netuid `1` and press enter. When prompted to continue, type `y` and press enter again. Confirm your password and press enter to continue. Wait for the miner to be registered to the subnet, and repeat the process to register the validator wallet:

```bash
make register-validator
```

**Note:** You may encounter an error about exceeding blocks. This is normal; wait for one tempo (approximately 1 hour).
