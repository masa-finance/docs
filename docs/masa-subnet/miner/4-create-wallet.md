---
id: 4-create-wallet
title: 4. Create Wallet
---

If you have not created a wallet for your miner, create one now. If you have an existing wallet, you can skip this step and move on to the next section.

## Create cold wallet

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

You should see a `miner` wallet, with an associated hotkey (`default`)