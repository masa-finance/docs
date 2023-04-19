---
title: Bot killer
toc_max_heading_level: 4
---

# Bot killer

With Masa Green you can kill bots and comply with regulation while preserving an individuals' privacy. Using two-factor authentication Masa Green can verify an on-chain user and prove they are human (and not a bot) with 99% effectiveness.

Using Masa Green SBT you can quickly and easily kill bots and build

- **Bot-proof allowlists:** you can implement Masa Green SBT to verify NFT allowlist registrants on-chain through 2FA in order to build an allowlist of authenticated users 
- **Bot-proof airdrop distributions:** you can implement Masa Green SBT to verify airdrop claimers through on-chain 2FA in order to prevent airdrop distribution bot manipulations 
- **Bot-proof governance voting:** you can implement Masa Green SBT to kill bot manipulation of your community or DAO governance voting process through on-chain 2FA

## Mint a Masa Green with the Masa SDK

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
A guide on setting up the Masa SDK can be found here: [Masa SDK](../developers/sdk/README.md#usage)
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

Congratulations you have verified you are not a bot and the user now has a Masa Green SBT in their wallet!

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