# Masa ZKSBT

A template for creating new SBTs inheriting from the Masa SBT smart contracts, using ZKP.

We use [eth-crypto](https://www.npmjs.com/package/eth-crypto) package to encrypt and decrypt the data.

## Install dependencies and deployment

### Preparations

* Set `DEPLOYER_PRIVATE_KEY` to the deployers private key in `.env.{network}.secret`
* Set `INFURA_API_KEY` to the Infura API key in `.env`
* Set `COINMARKETCAP_API_KEY` to the CoinMarketCap API key in `.env`, if needed
* Set `ETHERSCAN_API_KEY` to the Etherscan API key in `.env`, if needed
* Set the environment variables in every `.env.{network}` file. These variables are used to deploy the smart contracts to the network.

### Install dependencies

Run:
```
yarn install
```

### Build smart contracts

Run:
```
yarn build
```

### Deploy

Run:
```
yarn deploy --network {network}
```

## Contract Deployments

### Deployment addresses

You can see the deployment address of the smart contracts in the [deployments/goerli](deployments/goerli) and [deployments/mainnet](deployments/mainnet) folders. For every deployed smart contract you will find a `<smart_contract>.json` JSON file with the address in the `"address"` field.

## Zero-Knowledge Proof

Zero-knowledge proof is a method by which one party (the prover) can prove to another party (the verifier) that the prover knows a value x that fulfills some constraints without revealing any information apart from the fact that he/she knows the value x.

### Circom and dependencies setup

#### Install Rust

```
curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh
```

#### Build Circom from source

```
git clone https://github.com/iden3/circom.git
cd circom
cargo build --release
cargo install --path circom
```

#### Install snarkjs

```
npm install -g snarkjs
```

### Compile the circuit

```
cd circuits
circom verify4.circom --r1cs --wasm
```

### Download the trusted setup (Powers of tau file)

```
wget https://hermez.s3-eu-west-1.amazonaws.com/powersOfTau28_hez_final_11.ptau
```

It is a community-generated trusted setup. A trusted setup is an algorithm that determines a protocol’s public parameters using information that must remain secret to ensure the protocol’s security.

### Generate the verification key

The verification key is generated starting from `verify4.r1cs` (description of the circuit and its constraints) and `powersOfTau28_hez_final_11.ptau` which is the trusted setup. The output file of the operation is `verify4.zkey`, namely the verification key for the circuit.

```
snarkjs groth16 setup verify4.r1cs powersOfTau28_hez_final_11.ptau verify4.zkey
```

# Get a verification key in json format (from the proving key)

```
snarkjs zkey export verificationkey verify4.zkey verification_key.json
```

### Compute the witness

Add the input in the file `input.json` file:
```
{
  "index": 1,
  "root": "0x20630d227f9c346b4c6f52a21a4085fb061d8b9eba3ed155b6061ae6d177b693",
  "owner": "0x14B2Bab4d1068e742BAf05F908D7b5A00773B0dd",
  "threshold": 40,
  "operator": 3,
  "value": 45,
  "data": ["0x14B2Bab4d1068e742BAf05F908D7b5A00773B0dd", 45, 3100, 1675196581804]
}
```

Then execute:
```
node verify4_js/generate_witness.js verify4_js/verify4.wasm input.json witness.wtns
```

### Generate a proof

Generate a zk-proof associated to the circuit and the witness:
```
snarkjs groth16 prove verify4.zkey witness.wtns proof.json public.json
```

### Verifying a Proof

To verify the proof, execute the following command:
```
snarkjs groth16 verify verification_key.json public.json proof.json
```

### Verifying from a Smart Contract

We need to generate the Solidity code using the command:
```
snarkjs zkey export solidityverifier verify4.zkey ../contracts/verifier.sol
```

The `Verifier` has a `view` function called `verifyProof` that returns `TRUE` if and only if the proof and the inputs are valid. To facilitate the call, you can use `snarkJS` to generate the parameters of the call by typing:

```
snarkjs generatecall
```
