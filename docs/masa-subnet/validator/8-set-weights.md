---
id: 8-set-weights
title: 8. Set Weights
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

:::info
You may encounter an error of _setting weights too fast_. This is normal. You need to wait for one tempo (approximately 1 hour)
:::
