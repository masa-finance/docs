---
id: 3-create-wallets
title: 3. Create Wallets
---

## Create cold wallets

Create a cold wallet for a `miner`:

```bash
btcli wallet new_coldkey --wallet.name miner
```

and `validator`:

```bash
btcli wallet new_coldkey --wallet.name validator
```

## Create hot wallets

Create a hot wallet (`default`) for the `miner` wallet:

```bash
btcli wallet new_hotkey --wallet.name miner --wallet.hotkey default
```

and `validator` wallet:

```bash
btcli wallet new_hotkey --wallet.name validator --wallet.hotkey default
```

## Verify creation of wallets

```bash
make list-wallets
```

You should see two wallets listed, a `miner` and `validator`, each with an associated hotkey (`default`)
