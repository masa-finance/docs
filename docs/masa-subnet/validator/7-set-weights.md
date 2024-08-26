---
id: 7-set-weights
title: 7. Set Weights
---

Register your `validator` on the root subnet:

```bash
make register-validator-root
```

## Set Weights

Then, set your weights on the root subnet:

```bash
make boost-root
```

**Note:** You may encounter an error _setting weights too fast_. This is also normal; wait for one tempo (approximately 1 hour). You need 1,000 TAO staked to set weights on mainnet, and 10 TAO staked on testnet.
