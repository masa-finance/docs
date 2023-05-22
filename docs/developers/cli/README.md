# Masa CLI

<!-- TOC -->

- [Masa CLI](#masa-cli)
  - [Overview](#overview)
  - [Usage / Installation](#usage--installation)
    - [npm](#npm)
    - [yarn](#yarn)
    - [npx](#npx)
  - [Commands](#commands)
    - [`masa login`](#masa-login)
    - [`masa logout`](#masa-logout)
    - [`masa account`](#masa-account)
    - [`masa identity`](#masa-identity)
      - [`masa identity info`](#masa-identity-info)
      - [`masa identity create <soulname> <duration>`](#masa-identity-create-soulname-duration)
      - [`masa identity register`](#masa-identity-register)
      - [`masa identity show`](#masa-identity-show)
      - [`masa identity burn`](#masa-identity-burn)
    - [`masa soul-name`](#masa-soul-name)
      - [`masa soul-name info`](#masa-soul-name-info)
      - [`masa soul-name list`](#masa-soul-name-list)
      - [`masa soul-name tail`](#masa-soul-name-tail)
      - [`masa soul-name resolve <soulname>`](#masa-soul-name-resolve-soulname)
      - [`masa soul-name resolve-reverse <soulname>`](#masa-soul-name-resolve-reverse-soulname)
      - [`masa soul-name create <soulname> <duration>`](#masa-soul-name-create-soulname-duration)
      - [`masa soul-name burn <soulname>`](#masa-soul-name-burn-soulname)
      - [`masa soul-name send <soulname> <receiver>`](#masa-soul-name-send-soulname-receiver)
      - [`masa soul-name show <soulname>`](#masa-soul-name-show-soulname)
      - [`masa soul-name verify <soulname>`](#masa-soul-name-verify-soulname)
    - [`masa credit-score`](#masa-credit-score)
      - [`masa credit-score info`](#masa-credit-score-info)
      - [`masa credit-score list`](#masa-credit-score-list)
      - [`masa credit-score create`](#masa-credit-score-create)
      - [`masa credit-score burn <credit-score-id>`](#masa-credit-score-burn-credit-score-id)
      - [`masa credit-score load <credit-score-id>`](#masa-credit-score-load-credit-score-id)
      - [`masa credit-score link`](#masa-credit-score-link)
        - [`masa credit-score link create <credit-score-id> <reader-identity-id>`](#masa-credit-score-link-create-credit-score-id-reader-identity-id)
        - [`masa credit-score link establish <passport>`](#masa-credit-score-link-establish-passport)
        - [`masa credit-score link query <passport>`](#masa-credit-score-link-query-passport)
        - [`masa credit-score link list <credit-score-id>`](#masa-credit-score-link-list-credit-score-id)
        - [`masa credit-score link verify <credit-score-id>`](#masa-credit-score-link-verify-credit-score-id)
        - [`masa credit-score link break <credit-score-id> <reader-identity-id>`](#masa-credit-score-link-break-credit-score-id-reader-identity-id)
    - [`masa green`](#masa-green)
      - [`masa green info`](#masa-green-info)
      - [`masa green list`](#masa-green-list)
      - [`masa green create <phone-number>`](#masa-green-create-phone-number)
      - [`masa green burn <green-id>`](#masa-green-burn-green-id)
    - [`masa sbt`](#masa-sbt)
      - [`masa sbt info <contract-address>`](#masa-sbt-info-contract-address)
      - [`masa sbt list <contract-address>`](#masa-sbt-list-contract-address)
      - [`masa sbt burn <contract-address> <sbt-id>`](#masa-sbt-burn-contract-address-sbt-id)
    - [`masa asbt`](#masa-asbt)
      - [`masa asbt deploy`](#masa-asbt-deploy)
      - [`masa asbt mint <contract-address> <receiver>`](#masa-asbt-mint-contract-address-receiver)
    - [`masa sssbt`](#masa-sssbt)
      - [`masa sssbt deploy`](#masa-sssbt-deploy)
      - [`masa sssbt sign <contract-address> <receiver>`](#masa-sssbt-sign-contract-address-receiver)
      - [`masa sssbt mint <contract-address> <authority-address> <signature-date> <signature>`](#masa-sssbt-mint-contract-address-authority-address-signature-date-signature)
    - [`masa settings`](#masa-settings)
      - [`masa settings set <key> <value>`](#masa-settings-set-key-value)
      - [`masa settings preset <environment>`](#masa-settings-preset-environment)
      - [`masa settings preset-network <network-name>`](#masa-settings-preset-network-network-name)
      - [`masa settings show`](#masa-settings-show)
  - [Configuration](#configuration)
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
  -v, --version                                                                               output the version number
  --verbose                                                                                   output with verbose logging
  -h, --help                                                                                  display help for command

Commands:
  login                                                                                       Login to the masa infrastructure
  logout                                                                                      Logout from the masa infrastructure
  account                                                                                     Shows information about your account
  identity                                                                                    Identity commands
  identity info                                                                               Shows info about all Identities
  identity create <soulname> <duration>                                                       Creates a masa identity with soul name
  identity register                                                                           Creates a masa identity without soul name
  identity show [options]                                                                     Shows detail about your masa identity
  identity burn                                                                               Burns your masa identity
  soul-name                                                                                   Soul Name Commands
  soul-name info                                                                              Shows info about all Soul Names
  soul-name list [options]                                                                    Lists your soul names
  soul-name tailoptions]                                                                      Tails your soul names
  soul-name resolve <soulname>                                                                Resolves a soul name to the address
  soul-name resolve-reverse <soulname>                                                        Resolves an address to soul names
  soul-name create <soulname> <duration>                                                      Creates a new soul name
  soul-name burn <soulname>                                                                   Burns soul name that you own
  soul-name send <soulname> <receiver>                                                        Sends a soul name to that you own to a receiver
  soul-name show <soulname>                                                                   Shows info about a Soul Name
  soul-name verify <soulname>                                                                 Verifies a Soul Name
  credit-score                                                                                Credit Score Commands
  credit-score info                                                                           Shows info about all Credit Scores
  credit-score list [options]                                                                 Lists your Credit Scores
  credit-score create                                                                         Creates a Credit Score
  credit-score burn <credit-score-id>                                                         Burns a Credit Score
  credit-score load <credit-score-id>                                                         Loads a Credit Score
  credit-score link                                                                           Credit Score Soul Linker Commands
  credit-score link create <credit-score-id> <reader-identity-id>                             Creates a Soul Linker Passport
  credit-score link establish <passport>                                                      Establishes a link to a Credit Score
  credit-score link query <passport>                                                          Queries a link to a Credit Score
  credit-score link list <credit-score-id>                                                    Lists all soul links for a credit score id
  credit-score link verify [options] <credit-score-id>                                        Verifies soul link
  credit-score link break <credit-score-id> <reader-identity-id>                              Verifies soul link
  green                                                                                       Green Commands
  green info                                                                                  Shows info about Masa Green
  green list [options]                                                                        Lists your Greens
  green create <phone-number>                                                                 Creates a Green Token
  green burn <green-id>                                                                       Burns a green
  sbt                                                                                         SBT Commands
  sbt info <contract-address>                                                                 Shows info about an SBT
  sbt list [options] <contract-address>                                                       Lists your SBTs
  sbt burn <contract-address> <sbt-id>                                                        Burns an SBT
  asbt                                                                                        ASBT Commands
  asbt deploy                                                                                 Deploys ASBTs
  asbt mint <contract-address> <receiver>                                                     Mints ASBTs
  sssbt                                                                                       SSSBT Commands
  sssbt deploy                                                                                Deploys SSSBTs
  sssbt sign <contract-address> <receiver>                                                    Signs SSSBTs
  sssbt mint <contract-address> <authority-address> <signature-date> <signature>              Mints SSSBTs
  settings                                                                                    Set config settings
  settings set <key> <value>                                                                  Changes setting <key> to <value>
  settings preset <environment>                                                               Changes setting <environment> presets
  settings preset-network <network-name>                                                      Changes setting <network-name> presets
  settings show                                                                               Shows config values
  help [command]                                                                              display help for command
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

- `-a, --address <address>`
  Address override

### `masa identity`

Identity commands

#### `masa identity info`

Shows info about all Identities

#### `masa identity create <soulname> <duration>`

Creates a masa identity with soul name

- `<soulname> Soul Name to register`
- `<duration> Period of registration`

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

#### `masa soul-name tail`

Tails your soul names

Options:

- `-l, --limit <limit>`
  Limit

#### `masa soul-name resolve <soulname>`

Resolves a soul name to the address

- `<soulname> Soul Name to resolve`

#### `masa soul-name resolve-reverse <soulname>`

Resolves an address to soul names

- `<soulname> Address to resolve`

#### `masa soul-name create <soulname> <duration>`

Creates a new soul name

- `<soulname> soulname to register`
- `<duration> period of registration`

#### `masa soul-name burn <soulname>`

Burns soul name that you own

- `<soulname> Soul Name to burn`

#### `masa soul-name send <soulname> <receiver>`

Sends a soul name to that you own to a receiver

- `<soulname> Soul Name to send`
- `<receiver> Receiver to receive the Soul Name`

#### `masa soul-name show <soulname>`

Shows info about a Soul Name

- `<soulname> Soul Name to show`

#### `masa soul-name verify <soulname>`

Verifies a Soul Name

- `<soulname> Soul Name to verify`

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

#### `masa credit-score load <credit-score-id>`

Loads a Credit Score

- `<credit-score-id> ID of the Credit Score to load`

#### `masa credit-score link`

Credit Score Soul Linker Commands

##### `masa credit-score link create <credit-score-id> <reader-identity-id>`

Creates a Soul Linker Passport

- `<credit-score-id> ID of the Credit Score to grant access`
- `<reader-identity-id> ID of the identity that should receive access`

##### `masa credit-score link establish <passport>`

Establishes a link to a Credit Score

- `<passport> Masa Soul Linker passport`

##### `masa credit-score link query <passport>`

Queries a link to a Credit Score

- `<passport> Masa Soul Linker passport`

##### `masa credit-score link list <credit-score-id>`

Lists all soul links for a credit score id

- `<credit-score-id> ID of the Credit Score to list all the links of`

##### `masa credit-score link verify <credit-score-id>`

Verifies a Soul Link

- `<credit-score-id> ID of the Credit Score to grant access`
  Options:
- `-r, --reader-identity-id <reader-identity-id>`
  ID of the identity that should receive access

##### `masa credit-score link break <credit-score-id> <reader-identity-id>`

Breaks a Soul Link

- `<credit-score-id> ID of the Credit Score to grant access`
- `<reader-identity-id> ID of the identity that should receive access`

### `masa green`

Green Commands

#### `masa green info`

Shows info about Masa Green

#### `masa green list`

Lists your Greens

Options:

- `-a, --address <address>`
  Address override

#### `masa green create <phone-number>`

Creates a Green Token

- `<phone-number> The phone number to verify`

#### `masa green burn <green-id>`

Burns a green

- `<green-id> ID of the Green to burn`

### `masa sbt`

SBT Commands

#### `masa sbt info <contract-address>`

Shows info about an SBT

- `<contract-address> Address of the SBT to sign`

#### `masa sbt list <contract-address>`

Lists your SBTs

- `<contract-address> Address of the SBT contract to list`
  Options:
- `-a, --address <address>`
  Address override

#### `masa sbt burn <contract-address> <sbt-id>`

Burns an SBT

- `<contract-address> Address of the SBT to sign`
- `<sbt-id> ID of the SBT to burn`

### `masa asbt`

ASBT Commands

#### `masa asbt deploy`

Deploys ASBTs

#### `masa asbt mint <contract-address> <receiver>`

Mints ASBTs

- `<contract-address> Address of the SBT to mint on`
- `<receiver> Address of the SBT receiver`

### `masa sssbt`

SSSBT Commands

#### `masa sssbt deploy`

Deploys SSSBTs

#### `masa sssbt sign <contract-address> <receiver>`

Signs SSSBTs

- `<contract-address> Address of the SBT to mint on`
- `<receiver> Address of the SBT receiver`

#### `masa sssbt mint <contract-address> <authority-address> <signature-date> <signature>`

Mints SSSBTs

- `<contract-address> Address of the SBT to mint on`
- `<authority-address> Address of the Authority`
- `<signature-date> sig date`
- `<signature> signature`

### `masa settings`

Set config settings

#### `masa settings set <key> <value>`

Changes setting &lt;key&gt; to &lt;value&gt;

- `<key> key to set`
- `<value> value to set to key`

#### `masa settings preset <environment>`

Changes setting &lt;environment&gt; presets

- `<environment> The environment to use as preset`

#### `masa settings preset-network <network-name>`

Changes setting &lt;network-name&gt; presets

- `<network-name> The network to use as preset`

#### `masa settings show`

Shows config values

## Configuration

All the below fields can be set with:

```bash
$ masa settings set <key> <value>
```

| Key              | Type      | Description                                                                           | Default Value                             |
| ---------------- | --------- | ------------------------------------------------------------------------------------- | ----------------------------------------- |
| cookie           | `string`  | Stores cookie value. Don't set this manually unless you know what you do!             |                                           |
| api-url          | `string`  | The API Endpoint of the Masa Infrastructure for `dev`, `test`, `beta` and production. | "https://dev.middleware.masa.finance/"    |
| environment      | `string`  | The environment to use `dev`, `test`, `beta`, `production`.                           | "dev"                                     |
| rpc-url          | `string`  | The RPC Endpoint to reach the Blockchain.                                             | "https://rpc.ankr.com/eth_goerli"         |
| network          | `string`  | The network name ie. "goerli".                                                        | "goerli"                                  |
| private-key      | `string`  | Your private key of the account to use in the cli.                                    | `ethers.Wallet.createRandom().privateKey` |
| arweave-host     | `string`  | The arweave host to use for loading metadata.                                         | "arweave.net"                             |
| arweave-port     | `number`  | The arweave port to use for loading metadata.                                         | 443                                       |
| arweave-protocol | `string`  | The arweave protocol to use for loading metadata.                                     | "https"                                   |
| arweave-logging  | `boolean` | Turn arweave logging on or off.                                                       | false                                     |
