[# Masa SDK
 - v3.16.1](../README.md) / [Exports](../modules.md) / ERC20\_\_factory

# Class: ERC20\_\_factory

## Hierarchy

- `ContractFactory`

  ↳ **`ERC20__factory`**

## Table of contents

### Constructors

- [constructor](ERC20__factory.md#constructor)

### Properties

- [bytecode](ERC20__factory.md#bytecode)
- [interface](ERC20__factory.md#interface)
- [signer](ERC20__factory.md#signer)
- [abi](ERC20__factory.md#abi)
- [bytecode](ERC20__factory.md#bytecode-1)

### Methods

- [attach](ERC20__factory.md#attach)
- [connect](ERC20__factory.md#connect)
- [deploy](ERC20__factory.md#deploy)
- [getDeployTransaction](ERC20__factory.md#getdeploytransaction)
- [connect](ERC20__factory.md#connect-1)
- [createInterface](ERC20__factory.md#createinterface)
- [fromSolidity](ERC20__factory.md#fromsolidity)
- [getContract](ERC20__factory.md#getcontract)
- [getContractAddress](ERC20__factory.md#getcontractaddress)
- [getInterface](ERC20__factory.md#getinterface)

## Constructors

### constructor

• **new ERC20__factory**(`...args`): [`ERC20__factory`](ERC20__factory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `ERC20ConstructorParams` |

#### Returns

[`ERC20__factory`](ERC20__factory.md)

#### Overrides

ContractFactory.constructor

## Properties

### bytecode

• `Readonly` **bytecode**: `string`

#### Inherited from

ContractFactory.bytecode

___

### interface

• `Readonly` **interface**: `Interface`

#### Inherited from

ContractFactory.interface

___

### signer

• `Readonly` **signer**: `Signer`

#### Inherited from

ContractFactory.signer

___

### abi

▪ `Static` `Readonly` **abi**: readonly [\{ `inputs`: readonly [\{ `internalType`: ``"string"`` = "string"; `name`: ``"name_"`` = "name\_"; `type`: ``"string"`` = "string" }, \{ `internalType`: ``"string"`` = "string"; `name`: ``"symbol_"`` = "symbol\_"; `type`: ``"string"`` = "string" }] ; `stateMutability`: ``"nonpayable"`` = "nonpayable"; `type`: ``"constructor"`` = "constructor" }, \{ `anonymous`: ``false`` = false; `inputs`: readonly [\{ `indexed`: ``true`` = true; `internalType`: ``"address"`` = "address"; `name`: ``"owner"`` = "owner"; `type`: ``"address"`` = "address" }, \{ `indexed`: ``true`` = true; `internalType`: ``"address"`` = "address"; `name`: ``"spender"`` = "spender"; `type`: ``"address"`` = "address" }, \{ `indexed`: ``false`` = false; `internalType`: ``"uint256"`` = "uint256"; `name`: ``"value"`` = "value"; `type`: ``"uint256"`` = "uint256" }] ; `name`: ``"Approval"`` = "Approval"; `type`: ``"event"`` = "event" }, \{ `anonymous`: ``false`` = false; `inputs`: readonly [\{ `indexed`: ``true`` = true; `internalType`: ``"address"`` = "address"; `name`: ``"from"`` = "from"; `type`: ``"address"`` = "address" }, \{ `indexed`: ``true`` = true; `internalType`: ``"address"`` = "address"; `name`: ``"to"`` = "to"; `type`: ``"address"`` = "address" }, \{ `indexed`: ``false`` = false; `internalType`: ``"uint256"`` = "uint256"; `name`: ``"value"`` = "value"; `type`: ``"uint256"`` = "uint256" }] ; `name`: ``"Transfer"`` = "Transfer"; `type`: ``"event"`` = "event" }, \{ `inputs`: readonly [\{ `internalType`: ``"address"`` = "address"; `name`: ``"owner"`` = "owner"; `type`: ``"address"`` = "address" }, \{ `internalType`: ``"address"`` = "address"; `name`: ``"spender"`` = "spender"; `type`: ``"address"`` = "address" }] ; `name`: ``"allowance"`` = "allowance"; `outputs`: readonly [\{ `internalType`: ``"uint256"`` = "uint256"; `name`: ``""`` = ""; `type`: ``"uint256"`` = "uint256" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }, \{ `inputs`: readonly [\{ `internalType`: ``"address"`` = "address"; `name`: ``"spender"`` = "spender"; `type`: ``"address"`` = "address" }, \{ `internalType`: ``"uint256"`` = "uint256"; `name`: ``"amount"`` = "amount"; `type`: ``"uint256"`` = "uint256" }] ; `name`: ``"approve"`` = "approve"; `outputs`: readonly [\{ `internalType`: ``"bool"`` = "bool"; `name`: ``""`` = ""; `type`: ``"bool"`` = "bool" }] ; `stateMutability`: ``"nonpayable"`` = "nonpayable"; `type`: ``"function"`` = "function" }, \{ `inputs`: readonly [\{ `internalType`: ``"address"`` = "address"; `name`: ``"account"`` = "account"; `type`: ``"address"`` = "address" }] ; `name`: ``"balanceOf"`` = "balanceOf"; `outputs`: readonly [\{ `internalType`: ``"uint256"`` = "uint256"; `name`: ``""`` = ""; `type`: ``"uint256"`` = "uint256" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }, \{ `inputs`: readonly [] = []; `name`: ``"decimals"`` = "decimals"; `outputs`: readonly [\{ `internalType`: ``"uint8"`` = "uint8"; `name`: ``""`` = ""; `type`: ``"uint8"`` = "uint8" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }, \{ `inputs`: readonly [\{ `internalType`: ``"address"`` = "address"; `name`: ``"spender"`` = "spender"; `type`: ``"address"`` = "address" }, \{ `internalType`: ``"uint256"`` = "uint256"; `name`: ``"subtractedValue"`` = "subtractedValue"; `type`: ``"uint256"`` = "uint256" }] ; `name`: ``"decreaseAllowance"`` = "decreaseAllowance"; `outputs`: readonly [\{ `internalType`: ``"bool"`` = "bool"; `name`: ``""`` = ""; `type`: ``"bool"`` = "bool" }] ; `stateMutability`: ``"nonpayable"`` = "nonpayable"; `type`: ``"function"`` = "function" }, \{ `inputs`: readonly [\{ `internalType`: ``"address"`` = "address"; `name`: ``"spender"`` = "spender"; `type`: ``"address"`` = "address" }, \{ `internalType`: ``"uint256"`` = "uint256"; `name`: ``"addedValue"`` = "addedValue"; `type`: ``"uint256"`` = "uint256" }] ; `name`: ``"increaseAllowance"`` = "increaseAllowance"; `outputs`: readonly [\{ `internalType`: ``"bool"`` = "bool"; `name`: ``""`` = ""; `type`: ``"bool"`` = "bool" }] ; `stateMutability`: ``"nonpayable"`` = "nonpayable"; `type`: ``"function"`` = "function" }, \{ `inputs`: readonly [] = []; `name`: ``"name"`` = "name"; `outputs`: readonly [\{ `internalType`: ``"string"`` = "string"; `name`: ``""`` = ""; `type`: ``"string"`` = "string" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }, \{ `inputs`: readonly [] = []; `name`: ``"symbol"`` = "symbol"; `outputs`: readonly [\{ `internalType`: ``"string"`` = "string"; `name`: ``""`` = ""; `type`: ``"string"`` = "string" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }, \{ `inputs`: readonly [] = []; `name`: ``"totalSupply"`` = "totalSupply"; `outputs`: readonly [\{ `internalType`: ``"uint256"`` = "uint256"; `name`: ``""`` = ""; `type`: ``"uint256"`` = "uint256" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }, \{ `inputs`: readonly [\{ `internalType`: ``"address"`` = "address"; `name`: ``"to"`` = "to"; `type`: ``"address"`` = "address" }, \{ `internalType`: ``"uint256"`` = "uint256"; `name`: ``"amount"`` = "amount"; `type`: ``"uint256"`` = "uint256" }] ; `name`: ``"transfer"`` = "transfer"; `outputs`: readonly [\{ `internalType`: ``"bool"`` = "bool"; `name`: ``""`` = ""; `type`: ``"bool"`` = "bool" }] ; `stateMutability`: ``"nonpayable"`` = "nonpayable"; `type`: ``"function"`` = "function" }, \{ `inputs`: readonly [\{ `internalType`: ``"address"`` = "address"; `name`: ``"from"`` = "from"; `type`: ``"address"`` = "address" }, \{ `internalType`: ``"address"`` = "address"; `name`: ``"to"`` = "to"; `type`: ``"address"`` = "address" }, \{ `internalType`: ``"uint256"`` = "uint256"; `name`: ``"amount"`` = "amount"; `type`: ``"uint256"`` = "uint256" }] ; `name`: ``"transferFrom"`` = "transferFrom"; `outputs`: readonly [\{ `internalType`: ``"bool"`` = "bool"; `name`: ``""`` = ""; `type`: ``"bool"`` = "bool" }] ; `stateMutability`: ``"nonpayable"`` = "nonpayable"; `type`: ``"function"`` = "function" }] = `_abi`

___

### bytecode

▪ `Static` `Readonly` **bytecode**: ``"0x60806040523480156200001157600080fd5b5060405162000cd838038062000cd883398101604081905262000034916200025b565b81516200004990600390602085019062000068565b5080516200005f90600490602084019062000068565b5050506200031c565b8280546200007690620002eb565b90600052602060002090601f0160209004810192826200009a5760008555620000e5565b82601f10620000b557805160ff1916838001178555620000e5565b82800160010185558215620000e5579182015b82811115620000e5578251825591602001919060010190620000c8565b50620000f3929150620000f7565b5090565b5b80821115620000f35760008155600101620000f8565b601f01601f191690565b634e487b7160e01b600052604160045260246000fd5b62000139826200010e565b81018181106001600160401b038211171562000159576200015962000118565b6040525050565b60006200016c60405190565b90506200017a82826200012e565b919050565b60006001600160401b038211156200019b576200019b62000118565b620001a6826200010e565b60200192915050565b60005b83811015620001cc578181015183820152602001620001b2565b83811115620001dc576000848401525b50505050565b6000620001f9620001f3846200017f565b62000160565b905082815260208101848484011115620002165762000216600080fd5b62000223848285620001af565b509392505050565b600082601f830112620002415762000241600080fd5b815162000253848260208601620001e2565b949350505050565b60008060408385031215620002735762000273600080fd5b82516001600160401b038111156200028e576200028e600080fd5b6200029c858286016200022b565b92505060208301516001600160401b03811115620002bd57620002bd600080fd5b620002cb858286016200022b565b9150509250929050565b634e487b7160e01b600052602260045260246000fd5b6002810460018216806200030057607f821691505b60208210811415620003165762000316620002d5565b50919050565b6109ac806200032c6000396000f3fe608060405234801561001057600080fd5b50600436106100995760003560e01c806306fdde031461009e578063095ea7b3146100bc57806318160ddd146100dc57806323b872dd146100ed578063313ce56714610100578063395093511461010f57806370a082311461012257806395d89b411461014b578063a457c2d714610153578063a9059cbb14610166578063dd62ed3e14610179575b600080fd5b6100a661018c565b6040516100b39190610558565b60405180910390f35b6100cf6100ca3660046105b4565b61021e565b6040516100b391906105fb565b6002545b6040516100b3919061060f565b6100cf6100fb36600461061d565b610238565b60126040516100b39190610676565b6100cf61011d3660046105b4565b61025c565b6100e0610130366004610684565b6001600160a01b031660009081526020819052604090205490565b6100a661027e565b6100cf6101613660046105b4565b61028d565b6100cf6101743660046105b4565b6102d3565b6100e06101873660046106ad565b6102e1565b60606003805461019b906106f6565b80601f01602080910402602001604051908101604052809291908181526020018280546101c7906106f6565b80156102145780601f106101e957610100808354040283529160200191610214565b820191906000526020600020905b8154815290600101906020018083116101f757829003601f168201915b5050505050905090565b60003361022c81858561030c565b60019150505b92915050565b6000336102468582856103c0565b61025185858561040a565b506001949350505050565b60003361022c81858561026f83836102e1565b6102799190610739565b61030c565b60606004805461019b906106f6565b6000338161029b82866102e1565b9050838110156102c65760405162461bcd60e51b81526004016102bd90610796565b60405180910390fd5b610251828686840361030c565b60003361022c81858561040a565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b0383166103325760405162461bcd60e51b81526004016102bd906107e7565b6001600160a01b0382166103585760405162461bcd60e51b81526004016102bd90610836565b6001600160a01b0380841660008181526001602090815260408083209487168084529490915290819020849055517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906103b390859061060f565b60405180910390a3505050565b60006103cc84846102e1565b9050600019811461040457818110156103f75760405162461bcd60e51b81526004016102bd90610846565b610404848484840361030c565b50505050565b6001600160a01b0383166104305760405162461bcd60e51b81526004016102bd906108c3565b6001600160a01b0382166104565760405162461bcd60e51b81526004016102bd90610913565b6001600160a01b0383166000908152602081905260409020548181101561048f5760405162461bcd60e51b81526004016102bd90610966565b6001600160a01b0380851660008181526020819052604080822086860390559286168082529083902080548601905591517fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906104ed90869061060f565b60405180910390a3610404565b60005b838110156105155781810151838201526020016104fd565b838111156104045750506000910152565b6000610530825190565b8084526020840193506105478185602086016104fa565b601f01601f19169290920192915050565b602080825281016105698184610526565b9392505050565b60006001600160a01b038216610232565b61058a81610570565b811461059557600080fd5b50565b803561023281610581565b8061058a565b8035610232816105a3565b600080604083850312156105ca576105ca600080fd5b60006105d68585610598565b92505060206105e7858286016105a9565b9150509250929050565b8015155b82525050565b6020810161023282846105f1565b806105f5565b602081016102328284610609565b60008060006060848603121561063557610635600080fd5b60006106418686610598565b935050602061065286828701610598565b9250506040610663868287016105a9565b9150509250925092565b60ff81166105f5565b60208101610232828461066d565b60006020828403121561069957610699600080fd5b60006106a58484610598565b949350505050565b600080604083850312156106c3576106c3600080fd5b60006106cf8585610598565b92505060206105e785828601610598565b634e487b7160e01b600052602260045260246000fd5b60028104600182168061070a57607f821691505b6020821081141561071d5761071d6106e0565b50919050565b634e487b7160e01b600052601160045260246000fd5b6000821982111561074c5761074c610723565b500190565b602581526000602082017f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77815264207a65726f60d81b602082015291505b5060400190565b6020808252810161023281610751565b602481526000602082017f45524332303a20617070726f76652066726f6d20746865207a65726f206164648152637265737360e01b6020820152915061078f565b60208082528101610232816107a6565b602281526000602082017f45524332303a20617070726f766520746f20746865207a65726f206164647265815261737360f01b6020820152915061078f565b60208082528101610232816107f7565b6020808252810161023281601d81527f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000602082015260400190565b602581526000602082017f45524332303a207472616e736665722066726f6d20746865207a65726f206164815264647265737360d81b6020820152915061078f565b6020808252810161023281610881565b602381526000602082017f45524332303a207472616e7366657220746f20746865207a65726f206164647281526265737360e81b6020820152915061078f565b60208082528101610232816108d3565b602681526000602082017f45524332303a207472616e7366657220616d6f756e7420657863656564732062815265616c616e636560d01b6020820152915061078f565b602080825281016102328161092356fea26469706673582212209c2346383c69f4c128d7be2f0879a2357724450dd44dbdb1d026af0110e84aec64736f6c63430008080033"``

## Methods

### attach

▸ **attach**(`address`): [`ERC20`](../interfaces/ERC20.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

[`ERC20`](../interfaces/ERC20.md)

#### Overrides

ContractFactory.attach

___

### connect

▸ **connect**(`signer`): [`ERC20__factory`](ERC20__factory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |

#### Returns

[`ERC20__factory`](ERC20__factory.md)

#### Overrides

ContractFactory.connect

___

### deploy

▸ **deploy**(`name_`, `symbol_`, `overrides?`): `Promise`\<[`ERC20`](../interfaces/ERC20.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name_` | `string` |
| `symbol_` | `string` |
| `overrides?` | `Overrides` & \{ `from?`: `string`  } |

#### Returns

`Promise`\<[`ERC20`](../interfaces/ERC20.md)\>

#### Overrides

ContractFactory.deploy

___

### getDeployTransaction

▸ **getDeployTransaction**(`name_`, `symbol_`, `overrides?`): `TransactionRequest`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name_` | `string` |
| `symbol_` | `string` |
| `overrides?` | `Overrides` & \{ `from?`: `string`  } |

#### Returns

`TransactionRequest`

#### Overrides

ContractFactory.getDeployTransaction

___

### connect

▸ **connect**(`address`, `signerOrProvider`): [`ERC20`](../interfaces/ERC20.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`ERC20`](../interfaces/ERC20.md)

___

### createInterface

▸ **createInterface**(): [`ERC20Interface`](../interfaces/ERC20Interface.md)

#### Returns

[`ERC20Interface`](../interfaces/ERC20Interface.md)

___

### fromSolidity

▸ **fromSolidity**(`compilerOutput`, `signer?`): `ContractFactory`

#### Parameters

| Name | Type |
| :------ | :------ |
| `compilerOutput` | `any` |
| `signer?` | `Signer` |

#### Returns

`ContractFactory`

#### Inherited from

ContractFactory.fromSolidity

___

### getContract

▸ **getContract**(`address`, `contractInterface`, `signer?`): `Contract`

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `contractInterface` | `ContractInterface` |
| `signer?` | `Signer` |

#### Returns

`Contract`

#### Inherited from

ContractFactory.getContract

___

### getContractAddress

▸ **getContractAddress**(`tx`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | `Object` |
| `tx.from` | `string` |
| `tx.nonce` | `number` \| `BigNumber` \| `BytesLike` |

#### Returns

`string`

#### Inherited from

ContractFactory.getContractAddress

___

### getInterface

▸ **getInterface**(`contractInterface`): `Interface`

#### Parameters

| Name | Type |
| :------ | :------ |
| `contractInterface` | `ContractInterface` |

#### Returns

`Interface`

#### Inherited from

ContractFactory.getInterface
