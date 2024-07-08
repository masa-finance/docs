---
id: 3-create-wallet
title: 3. Create Wallet
---

## Create cold wallets

Create a cold wallet for a `miner`:

```bash
btcli wallet new_coldkey --wallet.name miner
```

## Create hot wallet

Create a hot wallet (`default`) for the `miner` wallet:

```bash
btcli wallet new_hotkey --wallet.name miner --wallet.hotkey default
```

## Verify creation of wallets

```bash
make list-wallets
```

You should see one wallet listed, a `miner` with an associated hotkey (`default`)
