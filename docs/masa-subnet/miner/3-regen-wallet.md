---
id: 3-regen-wallet
title: 3. Regen Wallet
---

If you have an existing wallet, you can import it like so:

### Regen Coldkey

```bash
btcli wallet regen_coldkeypub --wallet.name miner
```

### Regen Hotkey

```bash
btcli wallet regen_hotkey --wallet.name miner --mnemonic <mnemonic>
```

## Verify creation of wallets

```bash
make list-wallets
```

You should see a `miner` wallet, with an associated hotkey (`default`)
