## Setup Miner w/ Runpod

## Clone our repository

Clone **[this repository](https://github.com/masa-finance/masa-bittensor)** to your local machine and `cd` into the root directory:

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

### Regen Coldkey

_this setup assumes you have already created and registered a miner, and are simply interested in running said setup on a remote CPU (such as runpod)_

```bash
btcli wallet regen_coldkeypub --wallet.name miner
```

### Regen Hotkey

_select default_

```bash
btcli wallet regen_hotkey --wallet.name miner --mnemonic <mnemonic>
```

### Create .env

_in the masa-bittensor directory, create an .env file_

```bash
vim .env
```

_edit the .env file to include the following variables_

```bash
ORACLE_BASE_URL="http://localhost:8080/api/v1"
ORACLE_AUTHORIZATION="Bearer 1234"
```

_this assumes you have an oracle node running at the specified URL_

### Edit Makefile

_we need to set our ports correctly! grab the symmetrical port from the CPU connection settings and replace port 8091 in run-miner to said port (e.g. 53432)_

```bash
vim Makefile
```

_replace port 8091 in run-miner command with your exposed port!_

```bash
:wq
```

### Set Python Path

```bash
export PYTHONPATH=$PYTHONPATH:$(pwd)
```

### Run Miner!

```bash
make run-miner
```

### Test Miner!

_use a validator to send a request for work and see your miner respond!_

### Helpers

### Reactivate Environment

_be sure to be in the working directory!_

```bash
source venv/bin/activate
```
