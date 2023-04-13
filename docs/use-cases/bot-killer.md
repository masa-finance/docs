---
title: Bot Killer
toc_max_heading_level: 4
---

# Bot Killer

With Masa Green you can kill bots and comply with regulation while preserving an individuals' privacy. Using two-factor authentication Masa Green can verify an on-chain user and prove they are human (and not a bot) with 99% effectiveness.

Using Masa Green SBT you can quickly and easily kill bots and build

- **Bot-proof allowlists:** you can implement Masa Green SBT to verify NFT allowlist registrants on-chain through 2FA in order to build an allowlist of authenticated users 
- **Bot-proof airdrop distributions:** you can implement Masa Green SBT to verify airdrop claimers through on-chain 2FA in order to prevent airdrop distribution bot manipulations 
- **Bot-proof governance voting:** you can implement Masa Green SBT to kill bot manipulation of your community or DAO governance voting process through on-chain 2FA

## Mint a Masa Green using the Masa CLI

### Install Masa CLI

This guide covers using the Masa CLI to mint a Masa Green SBT. You can use either `yarn` or `npm` for the installation.

#### Install via yarn

```bash
yarn global add @masa-finance/masa-cli
```

#### Install via npm

```bash
npm i -g @masa-finance/masa-cli
```

### Configure Masa CLI

#### Set network

Masa supports 10 networks through its CLI and SDK. Masa Green SBT is deployed on all of the following networks:

| Network        | Flag         | Contract |
|----------------|--------------|----------|
| ETH            | --ethereum   |          |
| ETH Goerli     | --goerli     |          |
| Base Mainnet   | NA           |          |
| Base Goerli    | --basegoerli |          |
| Polygon        | --polygon    |          |
| Polygon Mumbai | --mumbai     |          |
| BNB Chain      | --bsc        |          |
| BNB Testnet    | --bsctestnet |          |
| Celo           | --celo       |          |
| Celo Alfajores | --bsctestnet |          |

```bash
masa settings preset-network <network flag>
```

#### Mint on Base Goerli

```bash
masa settings preset-network basegoerli
```

```bash
  __  __                            ____   _       ___ 
 |  \/  |   __ _   ___    __ _     / ___| | |     |_ _|
 | |\/| |  / _` | / __|  / _` |   | |     | |      | | 
 | |  | | | (_| | \__ \ | (_| |   | |___  | |___   | | 
 |_|  |_|  \__,_| |___/  \__,_|    \____| |_____| |___|
                                                       
Preset network 'basegoerli' set!
bash ~ %
```

:::info
The Masa CLI interacts with the Masa SDK using simple and intuitive commands that enable quick and easy development with Masa SBTs.
:::

#### Get account information

```bash
masa account
```

```bash
  __  __                            ____   _       ___ 
 |  \/  |   __ _   ___    __ _     / ___| | |     |_ _|
 | |\/| |  / _` | / __|  / _` |   | |     | |      | | 
 | |  | | | (_| | \__ \ | (_| |   | |___  | |___   | | 
 |_|  |_|  \__,_| |___/  \__,_|    \____| |_____| |___|
                                                       
Address: '0xb3EAE0c0d3e09241a48485D7fDE226587A4E4461'

Network: 'basegoerli'

Logged in: false

Balances:

Native: '0.01000000'
Identity: '0'
SoulName: '0'
Green: '0'
bash ~ %
```

:::info
Transfer some Base Goerli ETH into the account address listed in the CLI.
:::

### Mint your first SBT

#### Login

```bash
masa login
```

```bash
  __  __                            ____   _       ___ 
 |  \/  |   __ _   ___    __ _     / ___| | |     |_ _|
 | |\/| |  / _` | / __|  / _` |   | |     | |      | | 
 | |  | | | (_| | \__ \ | (_| |   | |___  | |___   | | 
 |_|  |_|  \__,_| |___/  \__,_|    \____| |_____| |___|
                                                       
Logging in
Signing: 
'Welcome to 🌽Masa Finance!

Login with your soulbound web3 identity to unleash the power of DeFi.

Your signature is valid till: Sat, 29 Apr 2023 20:34:09 GMT.
Challenge: fSOg1sykpKT8Pc4o0Q5yBguH9qkzDgCA'

Signature: '0xd29371c9c08e300cc526b626d760475da2388c61e2137b5a153b3d5b4c918f8e11e3b18d16bada3c9a8e7bf7cc1debb0d65f300e3930a72c4774a0e9014c64db1b'

Logged in as:
Address: '0xb3EAE0c0d3e09241a48485D7fDE226587A4E4461'
bash %
```

#### Mint a Masa Green 2FA SBT

Use your phone number including the country code without spaces and dropping the zero

```bash
masa green create +12000001234
```

Enter the 2FA code sent to your phone

```bash
  __  __                            ____   _       ___ 
 |  \/  |   __ _   ___    __ _     / ___| | |     |_ _|
 | |\/| |  / _` | / __|  / _` |   | |     | |      | | 
 | |  | | | (_| | \__ \ | (_| |   | |___  | |___   | | 
 |_|  |_|  \__,_| |___/  \__,_|    \____| |_____| |___|
                                                       
Creating Green for phone number: '+12000001234'
User ID: '00c75245-fd4a-55f9-ba99-551cfe5ddd8c'
Signer Address: '0xb3EAE0c0d3e09241a48485D7fDE226587A4E4461'
Network: 'basegoerli'

The code that has been sent to your phone number: 866469
```

#### Success

Congratulations you have verified you are not a bot and now have a Masa Green SBT in your wallet!

```bash
  __  __                            ____   _       ___ 
 |  \/  |   __ _   ___    __ _     / ___| | |     |_ _|
 | |\/| |  / _` | / __|  / _` |   | |     | |      | | 
 | |  | | | (_| | \__ \ | (_| |   | |___  | |___   | | 
 |_|  |_|  \__,_| |___/  \__,_|    \____| |_____| |___|
                                                       
Creating Green for phone number: '+12000001234'
User ID: '00c75245-fd4a-55f9-ba99-551cfe5ddd8c'
Signer Address: '0xb3EAE0c0d3e09241a48485D7fDE226587A4E4461'
Network: 'basegoerli'

The code that has been sent to your phone number: 864851
Minting Green on 'basegoerli'
Waiting for transaction '0x9bb86a26955fbb840ec1ea5df6cee8d8236cd3f9ca79b230a5179885bfeb2ff7' to finalize!
Green with ID: '4' created.
Green successfully minted on 'basegoerli' with token ID: '4'
bash ~ %
```

#### Verify

You can now use the CLI to verify that you have a Masa Green SBT and view its metadata

```bash
masa green list
```

```bash
  __  __                            ____   _       ___ 
 |  \/  |   __ _   ___    __ _     / ___| | |     |_ _|
 | |\/| |  / _` | / __|  / _` |   | |     | |      | | 
 | |  | | | (_| | \__ \ | (_| |   | |___  | |___   | | 
 |_|  |_|  \__,_| |___/  \__,_|    \____| |_____| |___|
                                                       
Token: 1
Token ID: 4
Metadata: {
  "name": "Masa Soulbound Green v1.0.0",
  "description": "Masa Green is a decentralized authentication solution",
  "image": "https://metadata.masa.finance/v1.0/green/green.png",
  "properties": {
    "tokenId": "4",
    "account": "0xb3EAE0c0d3e09241a48485D7fDE226587A4E4461"
  }
}
bash ~ %
```

## Mint Masa Green with the Masa SDK

### Install Masa SDK

This guide covers using the Masa SDK to mint a Masa Green SBT. You can use either `yarn` or `npm` for the installation.

#### Install via yarn

```bash
yarn add @masa-finance/masa-sdk --save
```

#### Install via npm

```bash
npm i @masa-finance/masa-sdk --save
```

### Configure Masa SDK

:::info
A guide how to set up the Masa SDK can be found here: [Masa SDK](../developers/sdk/README.md#usage)
:::

### Mint your first SBT

#### Login

```typescript
await masa.session.login()
```

```bash
Logging in
Signing: 
'Welcome to 🌽Masa Finance!

Login with your soulbound web3 identity to unleash the power of DeFi.

Your signature is valid till: Sat, 29 Apr 2023 20:34:09 GMT.
Challenge: fSOg1sykpKT8Pc4o0Q5yBguH9qkzDgCA'

Signature: '0xd29371c9c08e300cc526b626d760475da2388c61e2137b5a153b3d5b4c918f8e11e3b18d16bada3c9a8e7bf7cc1debb0d65f300e3930a72c4774a0e9014c64db1b'

Logged in as:
Address: '0xb3EAE0c0d3e09241a48485D7fDE226587A4E4461'
```

#### Mint a Masa Green 2FA SBT

Generate a new Verification entry. This will send the verification code to the phone number.

```typescript
console.log(`Creating Green for phone number: '${phoneNumber}'`);

const generateResult: GenerateGreenResult = await masa.green.generate(
  phoneNumber
);
```

Get the code that was sent to the phone number from the user and verify.

```typescript
const code: string = await readLine(
  "The code that has been sent to your phone number: "
);

const verifyGreenResult: VerifyGreenResult | undefined = await masa.green.verify(phoneNumber, code);

if (!verifyGreenResult?.success) {
  console.error(
    `Verifying Green failed! '${verifyGreenResult?.message}'`
  );
}
```

Finally interact with the Masa Green Contract and mint the token.

```typescript
console.log(`Minting Green on '${masa.config.networkName}'`);

const mintGreenResult: BaseResult | undefined = await masa.green.mint(
  paymentMethod,
  verifyGreenResult.authorityAddress,
  verifyGreenResult.signatureDate,
  verifyGreenResult.signature
);
```

#### Success

Congratulations you have verified you are not a bot and now have a Masa Green SBT in your wallet!

```typescript
if (mintGreenResult && mintGreenResult.tokenId) {
  console.log(
    `Green successfully minted on '${masa.config.networkName}' with token ID: '${mintGreenResult.tokenId}'`
  );
}
```

#### Verify

```typescript
const greens: GreenDetails[] = await masa.green.list();

if (greens.length === 0) {
  console.warn("No Masa Green found");
}

let i = 1;
for (const green of greens) {
  console.log(`Token: ${i}`);
  console.log(`Token ID: ${green.tokenId}`);
  i++;
  if (green.metadata) {
    console.log(`Metadata: ${JSON.stringify(green.metadata, null, 2)}`);
  }
}
```

## What's next

If you’re interested in using our beta Masa Green SBTs please reach out to help@masa.finance or send us a [DM on Twitter](https://twitter.com/getmasafi)

**ID Verification* (in beta coming soon)**

**OFAC Wallet screening (in beta coming soon)**

**Wallet screening (in beta coming soon)**