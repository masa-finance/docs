# SoulLinker

*Masa Finance*

> Soul linker

Soul linker smart contract that let add links to a Soulbound token.



## Methods

### addLinkedSBT

```solidity
function addLinkedSBT(address token) external nonpayable
```

Adds an SBT to the list of linked SBTs

*The caller must be the owner to call this function*

#### Parameters

| Name | Type | Description |
|---|---|---|
| token | address | Address of the SBT contract |

### getIdentityId

```solidity
function getIdentityId(address token, uint256 tokenId) external view returns (uint256)
```

Returns the identityId owned by the given token

*The token must be linked to this soul linker*

#### Parameters

| Name | Type | Description |
|---|---|---|
| token | address | Address of the SBT contract |
| tokenId | uint256 | Id of the token |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | Id of the identity |

### getSBTLinks

```solidity
function getSBTLinks(uint256 identityId, address token) external view returns (uint256[])
```

Returns the list of linked SBTs by a given SBT token

*The token must be linked to this soul linker*

#### Parameters

| Name | Type | Description |
|---|---|---|
| identityId | uint256 | Id of the identity |
| token | address | Address of the SBT contract |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256[] | List of linked SBTs |

### getSBTLinks

```solidity
function getSBTLinks(address owner, address token) external view returns (uint256[])
```

Returns the list of linked SBTs by a given SBT token

*The token must be linked to this soul linker*

#### Parameters

| Name | Type | Description |
|---|---|---|
| owner | address | Address of the owner of the identity |
| token | address | Address of the SBT contract |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256[] | List of linked SBTs |

### linkedSBT

```solidity
function linkedSBT(address) external view returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### linkedSBTs

```solidity
function linkedSBTs(uint256) external view returns (address)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### owner

```solidity
function owner() external view returns (address)
```



*Returns the address of the current owner.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### removeLinkedSBT

```solidity
function removeLinkedSBT(address token) external nonpayable
```

Removes an SBT from the list of linked SBTs

*The caller must be the owner to call this function*

#### Parameters

| Name | Type | Description |
|---|---|---|
| token | address | Address of the SBT contract |

### renounceOwnership

```solidity
function renounceOwnership() external nonpayable
```



*Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.*


### setSoulboundIdentity

```solidity
function setSoulboundIdentity(contract ISoulboundIdentity _soulboundIdentity) external nonpayable
```

Sets the SoulboundIdentity contract address linked to this soul name

*The caller must be the owner to call this function*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _soulboundIdentity | contract ISoulboundIdentity | Address of the SoulboundIdentity contract |

### soulboundIdentity

```solidity
function soulboundIdentity() external view returns (contract ISoulboundIdentity)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract ISoulboundIdentity | undefined |

### transferOwnership

```solidity
function transferOwnership(address newOwner) external nonpayable
```



*Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| newOwner | address | undefined |

### validateLinkData

```solidity
function validateLinkData(address reader, uint256 identityId, address token, uint256 tokenId, uint256 expirationDate, bytes signature) external view returns (bool)
```

Validates the signature of the given read link request

*The token must be linked to this soul linker*

#### Parameters

| Name | Type | Description |
|---|---|---|
| reader | address | Address of the reader |
| identityId | uint256 | Id of the identity |
| token | address | Address of the SBT contract |
| tokenId | uint256 | Id of the token |
| expirationDate | uint256 | Expiration date of the signature |
| signature | bytes | Signature of the read link request made by the owner |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | `true` if the signature is valid, `false` otherwise |



## Events

### OwnershipTransferred

```solidity
event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| previousOwner `indexed` | address | undefined |
| newOwner `indexed` | address | undefined |



