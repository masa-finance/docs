# Masa CLI

---

**🌽🌽 THIS IS BETA SOFTWARE. IT COULD LEAD TO RAPID UNSCHEDULED DISASSEMBLY. If you run into problems, please open up a new issue. 🌽🌽**

---

<!-- TOC -->

* [Masa CLI](#masa-cli)
    * [Overview](#overview)
    * [Usage / Installation](#usage--installation)
        * [npm](#npm)
        * [yarn](#yarn)
        * [npx](#npx)
    * [Commands](#commands)
        * [`masa login`](#masa-login)
        * [`masa logout`](#masa-logout)
        * [`masa account`](#masa-account)
        * [`masa identity`](#masa-identity)
            * [`masa identity info`](#masa-identity-info)
            * [`masa identity create <soulname> <duration>`](#masa-identity-create-soulname-duration)
            * [`masa identity register`](#masa-identity-register)
            * [`masa identity show`](#masa-identity-show)
            * [`masa identity burn`](#masa-identity-burn)
        * [`masa soul-name`](#masa-soul-name)
            * [`masa soul-name info`](#masa-soul-name-info)
            * [`masa soul-name list`](#masa-soul-name-list)
            * [`masa soul-name create <soulname> <duration>`](#masa-soul-name-create-soulname-duration)
            * [`masa soul-name burn <soulname>`](#masa-soul-name-burn-soulname)
        * [`masa credit-score`](#masa-credit-score)
            * [`masa credit-score info`](#masa-credit-score-info)
            * [`masa credit-score list`](#masa-credit-score-list)
            * [`masa credit-score create`](#masa-credit-score-create)
            * [`masa credit-score burn <credit-score-id>`](#masa-credit-score-burn-credit-score-id)
        * [`masa 2fa`](#masa-2fa)
            * [`masa 2fa info`](#masa-2fa-info)
            * [`masa 2fa list`](#masa-2fa-list)
            * [`masa 2fa create <phone-number>`](#masa-2fa-create-phone-number)
            * [`masa 2fa burn <2fa-id>`](#masa-2fa-burn-2fa-id)
        * [`masa settings`](#masa-settings)
            * [`masa settings set <key> <value>`](#masa-settings-set-key-value)
            * [`masa settings preset <environment>`](#masa-settings-preset-environment)
    * [Configuration](#configuration)

<!-- TOC -->

## Overview

```bash
$ masa --help
  __  __                            ____   _       ___ 
 |  \/  |   __ _   ___    __ _     / ___| | |     |_ _|
 | |\/| |  / _` | / __|  / _` |   | |     | |      | | 
 | |  | | | (_| | \__ \ | (_| |   | |___  | |___   | | 
 |_|  |_|  \__,_| |___/  \__,_|    \____| |_____| |___|
                                                       
Usage: masa [command] [subcommand] [arguments] [options]

The Masa CLI

Options:
  -v, --version   output the version number
  -h, --help      display help for command

Commands:
  login                                   Login to the masa infrastructure
  logout                                  Logout from the masa infrastructure
  account                                 Shows information about your account
  identity                                Identity commands
  identity info                           Shows info about all Identities
  identity create <soulname> <duration>   Creates a masa identity with soul name
  identity register                       Creates a masa identity without soul name
  identity show [options]                 Shows detail about your masa identity
  identity burn                           Burns your masa identity
  soul-name                               Soul Name Commands
  soul-name info                          Shows info about all Soul Names
  soul-name list [options]                Lists your soul names
  soul-name create <soulname> <duration>  Creates a new soul name
  soul-name burn <soulname>               Burns soul name that you own
  credit-score                            Credit Score Commands
  credit-score info                       Shows info about all Credit Scores
  credit-score list [options]             Lists your Credit Scores
  credit-score create                     Creates a Credit Score
  credit-score burn <credit-score-id>     Burns a Credit Score
  2fa                                     2fa Commands
  2fa info                                Shows info about all 2FAs
  2fa list [options]                      Lists your 2FAs
  2fa create <phone-number>               Creates a 2FA Token
  2fa burn <2fa-id>                       Burns a 2FA
  settings                                Set config settings
  settings set <key> <value>              Changes setting <key> to <value>
  settings preset <environment>           Changes setting <environment> presets
  help [command]                          display help for command
```

To get help for a specific command use:

```bash
$ masa identity --help
```

to get help for the identity commands.

## Usage / Installation

### npm

`npm install -g @masa-finance/masa-cli`

```bash
$ masa --version

CLI: v0.1.0 Contracts: v0.3.0 SDK: v0.9.1
Arweave Endpoint: https://arweave.net:443
RPC Endpoint: https://rpc.ankr.com/eth_goerli
Masa Endpoint: https://dev.middleware.masa.finance/
```

### yarn

`yarn global add @masa-finance/masa-cli`

```bash
$ masa --version

CLI: v0.1.0 Contracts: v0.3.0 SDK: v0.9.1
Arweave Endpoint: https://arweave.net:443
RPC Endpoint: https://rpc.ankr.com/eth_goerli
Masa Endpoint: https://dev.middleware.masa.finance/
```

### npx

```bash
$ npx @masa-finance/masa-cli@latest --version

CLI: v0.1.0 Contracts: v0.3.0 SDK: v0.9.1
Arweave Endpoint: https://arweave.net:443
RPC Endpoint: https://rpc.ankr.com/eth_goerli
Masa Endpoint: https://dev.middleware.masa.finance/
```

## Commands

### `masa login`

Login to the masa infrastructure

### `masa logout`

Logout from the masa infrastructure

### `masa account`

Shows information about your account

### `masa identity`

Identity commands

#### `masa identity info`

Shows info about all Identities

#### `masa identity create <soulname> <duration>`

Creates a masa identity with soul name

- `<soulname> soulname to register`
- `<duration> period of registration`

#### `masa identity register`

Creates a masa identity without soul name

#### `masa identity show`

Shows detail about your masa identity

Options:

- `-a, --address <address>`
  Address override

#### `masa identity burn`

Burns your masa identity

### `masa soul-name`

Soul Name Commands

#### `masa soul-name info`

Shows info about all Soul Names

#### `masa soul-name list`

Lists your soul names

Options:

- `-a, --address <address>`
  Address override

#### `masa soul-name create <soulname> <duration>`

Creates a new soul name

- `<soulname> soulname to register`
- `<duration> period of registration`

#### `masa soul-name burn <soulname>`

Burns soul name that you own

- `<soulname> soulname to burn`

### `masa credit-score`

Credit Score Commands

#### `masa credit-score info`

Shows info about all Credit Scores

#### `masa credit-score list`

Lists your Credit Scores

Options:

- `-a, --address <address>`
  Address override

#### `masa credit-score create`

Creates a Credit Score

#### `masa credit-score burn <credit-score-id>`

Burns a Credit Score

- `<credit-score-id> ID of the Credit Score to burn`

### `masa 2fa`

2FA Commands

#### `masa 2fa info`

Shows info about all 2FAs

#### `masa 2fa list`

Lists your 2FAs

Options:

- `-a, --address <address>`
  Address override

#### `masa 2fa create <phone-number>`

Creates a 2FA Token

- `<phone-number> The phone number to verify`

#### `masa 2fa burn <2fa-id>`

Burns a 2FA

- `<2fa-id> ID of the 2FA to burn`

### `masa settings`

Set config settings

#### `masa settings set <key> <value>`

Changes setting &lt;key&gt; to &lt;value&gt;

- `<key> key to set`
- `<value> value to set to key`

#### `masa settings preset <environment>`

Changes setting &lt;environment&gt; presets

- `<environment> The environment to use as preset`

## Configuration

All the below fields can be set with:

```bash
$ masa settings set <key> <value>
```

| Key                | Type      | Description                                                                           | Default Value                             |
|--------------------|-----------|---------------------------------------------------------------------------------------|-------------------------------------------|
| cookie             | `string`  | Stores cookie value. Don't set this manually unless you know what you do!             |                                           |
| api-url            | `string`  | The API Endpoint of the Masa Infrastructure for `dev`, `test`, `beta` and production. | "https://dev.middleware.masa.finance/"    | 
| environment        | `string`  | The environment to use `dev`, `test`, `beta`, `production`.                           | "dev"                                     |
| rpc-url            | `string`  | The RPC Endpoint to reach the Blockchain.                                             | "https://rpc.ankr.com/eth_goerli"         |
| network            | `string`  | The network name ie. "goerli".                                                        | "goerli"                                  |
| private-key        | `string`  | Your private key of the account to use in the cli.                                    | `ethers.Wallet.createRandom().privateKey` |
| arweave-host       | `string`  | The arweave host to use for loading metadata.                                         | "arweave.net"                             |
| arweave-port       | `number`  | The arweave port to use for loading metadata.                                         | 443                                       |
| arweave-protocol   | `string`  | The arweave protocol to use for loading metadata.                                     | "https"                                   |
| arweave-logging    | `boolean` | Turn arweave logging on or off.                                                       | false                                     |
