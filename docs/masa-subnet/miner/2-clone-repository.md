---
id: 2-clone-repository
title: 2. Clone Repository
---

## Connect to your runpod instance via SSH

Connect to your runpod instance via SSH by clicking "Connect" on the Runpod dashboard and follow the instructions.

![Bittensor Environment Setup](./2-click-connect.png)

## Clone our repository

Clone **[our repository](https://github.com/masa-finance/masa-bittensor)**. `cd` into the root directory:

```bash
git clone https://github.com/masa-finance/masa-bittensor.git
```

```bash
cd masa-bittensor
```

### Install Python Dependencies & Venv

```bash
sudo apt install -y python3.10 \
python3.10-venv && python3.10 -m venv venv && source venv/bin/activate && echo "source venv/bin/activate">>~/.bashrc
```

## Install required packages

```bash
pip install -r requirements.txt
```
