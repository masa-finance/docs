## Clone our repository

Clone **[our repository](https://github.com/masa-finance/masa-bittensor)**

```bash
git clone https://github.com/masa-finance/masa-bittensor.git
```

Navigate to the root directory

```bash
cd masa-bittensor
```

Get the latest release

```bash
latest_tag=$(git describe --tags `git rev-list --tags --max-count=1`)
```

Checkout the latest release

```bash
git checkout $latest_tag
```

## Install PM2

```bash
sudo apt update
sudo apt install nodejs npm
sudo npm install -g pm2
```

## Install Python & Venv

```bash
sudo apt install python3
sudo apt install python3-venv
```

## Create Virtual Environment

```bash
python3 -m venv bittensor
```

## Activate Virtual Environment

```bash
source bittensor/bin/activate
```

## Install Required Packages

```bash
pip install -r requirements.txt
```
