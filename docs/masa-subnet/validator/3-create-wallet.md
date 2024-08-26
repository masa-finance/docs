---
id: 3-create-wallet
title: 3. Create Wallet
---

If you have not created a wallet for your validator, you can create one now. If you have an existing wallet, you can skip this step and move on to the next section.

## Create cold wallet

Create a cold wallet for a `validator`:

```bash
btcli wallet new_coldkey --wallet.name validator
```

## Create hot wallet

Create a hot wallet (`default`) for the `validator` wallet:

```bash
btcli wallet new_hotkey --wallet.name validator --wallet.hotkey default
```

## Verify creation of wallets

```bash
make list-wallets
```

You should see a `validator` wallet, with an associated hotkey (`default`)
