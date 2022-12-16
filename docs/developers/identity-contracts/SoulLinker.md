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

### addPermission

```solidity
function addPermission(address paymentMethod, uint256 readerIdentityId, uint256 ownerIdentityId, address token, uint256 tokenId, string data, uint256 signatureDate, uint256 expirationDate, bytes signature) external payable
```

Stores the permission, validating the signature of the given read link request

*The token must be linked to this soul linker*

#### Parameters

| Name | Type | Description |
|---|---|---|
| paymentMethod | address | undefined |
| readerIdentityId | uint256 | Id of the identity of the reader |
| ownerIdentityId | uint256 | Id of the identity of the owner of the SBT |
| token | address | Address of the SBT contract |
| tokenId | uint256 | Id of the token |
| data | string | Data that owner wants to share |
| signatureDate | uint256 | Signature date of the signature |
| expirationDate | uint256 | Expiration date of the signature |
| signature | bytes | Signature of the read link request made by the owner |

### addPermissionPrice

```solidity
function addPermissionPrice() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### addPermissionPriceMASA

```solidity
function addPermissionPriceMASA() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### disablePaymentMethod

```solidity
function disablePaymentMethod(address _paymentMethod) external nonpayable
```

Removes a token as a valid payment method

*The caller must have the owner to call this function*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _paymentMethod | address | Token to remove |

### enablePaymentMethod

```solidity
function enablePaymentMethod(address _paymentMethod) external nonpayable
```

Adds a new token as a valid payment method

*The caller must have the owner to call this function*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _paymentMethod | address | New token to add |

### enabledPaymentMethod

```solidity
function enabledPaymentMethod(address) external view returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### enabledPaymentMethods

```solidity
function enabledPaymentMethods(uint256) external view returns (address)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### getEnabledPaymentMethods

```solidity
function getEnabledPaymentMethods() external view returns (address[])
```

Returns all available payment methods

*Returns the address of all available payment methods*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address[] | Array of all enabled payment methods |

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

### getPermissionInfo

```solidity
function getPermissionInfo(address token, uint256 tokenId, uint256 readerIdentityId, uint256 signatureDate) external view returns (struct SoulLinker.PermissionData)
```

Returns the information of permission dates for a given SBT token and reader



#### Parameters

| Name | Type | Description |
|---|---|---|
| token | address | Address of the SBT contract |
| tokenId | uint256 | Id of the token |
| readerIdentityId | uint256 | Id of the identity of the reader of the SBT |
| signatureDate | uint256 | Signature date of the signature |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | SoulLinker.PermissionData | permissionData List of linked SBTs |

### getPermissionSignatureDates

```solidity
function getPermissionSignatureDates(address token, uint256 tokenId, uint256 readerIdentityId) external view returns (uint256[])
```

Returns the list of permission signature dates for a given SBT token and reader



#### Parameters

| Name | Type | Description |
|---|---|---|
| token | address | Address of the SBT contract |
| tokenId | uint256 | Id of the token |
| readerIdentityId | uint256 | Id of the identity of the reader of the SBT |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256[] | List of linked SBTs |

### getPriceForAddPermission

```solidity
function getPriceForAddPermission(address paymentMethod) external view returns (uint256 price, address paymentMethodUsed)
```

Returns the price for storing a permission

*Returns the current pricing for storing a permission*

#### Parameters

| Name | Type | Description |
|---|---|---|
| paymentMethod | address | Address of token that user want to pay |

#### Returns

| Name | Type | Description |
|---|---|---|
| price | uint256 | Current price of storing a permission |
| paymentMethodUsed | address | Address of the token used to pay |

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

### masaToken

```solidity
function masaToken() external view returns (address)
```






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

### pause

```solidity
function pause() external nonpayable
```

Pauses the smart contract

*The caller must have the owner to call this function*


### paused

```solidity
function paused() external view returns (bool)
```



*Returns true if the contract is paused, and false otherwise.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

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


### reserveWallet

```solidity
function reserveWallet() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### revokePermission

```solidity
function revokePermission(uint256 readerIdentityId, uint256 ownerIdentityId, address token, uint256 tokenId, uint256 signatureDate) external nonpayable
```

Revokes the permission

*The token must be linked to this soul linker*

#### Parameters

| Name | Type | Description |
|---|---|---|
| readerIdentityId | uint256 | Id of the identity of the reader |
| ownerIdentityId | uint256 | Id of the identity of the owner of the SBT |
| token | address | Address of the SBT contract |
| tokenId | uint256 | Id of the token |
| signatureDate | uint256 | Signature date of the signature |

### setAddPermissionPrice

```solidity
function setAddPermissionPrice(uint256 _addPermissionPrice) external nonpayable
```

Sets the price of store permission in stable coin

*The caller must have the owner to call this function*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _addPermissionPrice | uint256 | New price of the store permission in stable coin |

### setAddPermissionPriceMASA

```solidity
function setAddPermissionPriceMASA(uint256 _addPermissionPriceMASA) external nonpayable
```

Sets the price of store permission in MASA

*The caller must have the owner to call this function*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _addPermissionPriceMASA | uint256 | New price of the store permission in MASA |

### setMasaToken

```solidity
function setMasaToken(address _masaToken) external nonpayable
```

Sets the utility token to pay the fee in (MASA)

*The caller must have the owner to call this function It can be set to address(0) to disable paying in MASA*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _masaToken | address | New utility token to pay the fee in |

### setReserveWallet

```solidity
function setReserveWallet(address _reserveWallet) external nonpayable
```

Set the reserve wallet

*Let change the reserve walled. It can be triggered by an authorized account.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _reserveWallet | address | New reserve wallet |

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

### setStableCoin

```solidity
function setStableCoin(address _stableCoin) external nonpayable
```

Sets the stable coin to pay the fee in (USDC)

*The caller must have the owner to call this function*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _stableCoin | address | New stable coin to pay the fee in |

### setSwapRouter

```solidity
function setSwapRouter(address _swapRouter) external nonpayable
```

Sets the swap router address

*The caller must have the owner to call this function*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _swapRouter | address | New swap router address |

### setWrappedNativeToken

```solidity
function setWrappedNativeToken(address _wrappedNativeToken) external nonpayable
```

Sets the wrapped native token address

*The caller must have the owner to call this function*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _wrappedNativeToken | address | New wrapped native token address |

### soulboundIdentity

```solidity
function soulboundIdentity() external view returns (contract ISoulboundIdentity)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract ISoulboundIdentity | undefined |

### stableCoin

```solidity
function stableCoin() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### swapRouter

```solidity
function swapRouter() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### transferOwnership

```solidity
function transferOwnership(address newOwner) external nonpayable
```



*Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| newOwner | address | undefined |

### unpause

```solidity
function unpause() external nonpayable
```

Unpauses the smart contract

*The caller must have the owner to call this function*


### validatePermission

```solidity
function validatePermission(uint256 readerIdentityId, uint256 ownerIdentityId, address token, uint256 tokenId, uint256 signatureDate) external view returns (string)
```

Validates the permission of the given read link request and returns the data that reader can read if the permission is valid

*The token must be linked to this soul linker*

#### Parameters

| Name | Type | Description |
|---|---|---|
| readerIdentityId | uint256 | Id of the identity of the reader |
| ownerIdentityId | uint256 | Id of the identity of the owner of the SBT |
| token | address | Address of the SBT contract |
| tokenId | uint256 | Id of the token |
| signatureDate | uint256 | Signature date of the signature |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | Data that the reader can read |

### wrappedNativeToken

```solidity
function wrappedNativeToken() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |



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

### Paused

```solidity
event Paused(address account)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| account  | address | undefined |

### PermissionAdded

```solidity
event PermissionAdded(uint256 readerIdentityId, uint256 ownerIdentityId, address token, uint256 tokenId, string data, uint256 signatureDate, uint256 expirationDate)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| readerIdentityId  | uint256 | undefined |
| ownerIdentityId  | uint256 | undefined |
| token  | address | undefined |
| tokenId  | uint256 | undefined |
| data  | string | undefined |
| signatureDate  | uint256 | undefined |
| expirationDate  | uint256 | undefined |

### PermissionRevoked

```solidity
event PermissionRevoked(uint256 readerIdentityId, uint256 ownerIdentityId, address token, uint256 tokenId, uint256 signatureDate)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| readerIdentityId  | uint256 | undefined |
| ownerIdentityId  | uint256 | undefined |
| token  | address | undefined |
| tokenId  | uint256 | undefined |
| signatureDate  | uint256 | undefined |

### Unpaused

```solidity
event Unpaused(address account)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| account  | address | undefined |



## Errors

### AlreadyAdded

```solidity
error AlreadyAdded()
```






### CallerNotOwner

```solidity
error CallerNotOwner(address caller)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| caller | address | undefined |

### CallerNotReader

```solidity
error CallerNotReader(address caller)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| caller | address | undefined |

### IdentityOwnerNotTokenOwner

```solidity
error IdentityOwnerNotTokenOwner(uint256 tokenId, uint256 ownerIdentityId)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId | uint256 | undefined |
| ownerIdentityId | uint256 | undefined |

### InsufficientEthAmount

```solidity
error InsufficientEthAmount(uint256 amount)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| amount | uint256 | undefined |

### InvalidPaymentMethod

```solidity
error InvalidPaymentMethod(address paymentMethod)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| paymentMethod | address | undefined |

### InvalidSignature

```solidity
error InvalidSignature()
```






### InvalidToken

```solidity
error InvalidToken(address token)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| token | address | undefined |

### NonExistingErc20Token

```solidity
error NonExistingErc20Token(address erc20token)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| erc20token | address | undefined |

### PermissionAlreadyRevoked

```solidity
error PermissionAlreadyRevoked()
```






### PermissionDoesNotExist

```solidity
error PermissionDoesNotExist()
```






### RefundFailed

```solidity
error RefundFailed()
```






### SBTAlreadyLinked

```solidity
error SBTAlreadyLinked(address token)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| token | address | undefined |

### SBTNotLinked

```solidity
error SBTNotLinked(address token)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| token | address | undefined |

### SameValue

```solidity
error SameValue()
```






### TransferFailed

```solidity
error TransferFailed()
```






### ValidPeriodExpired

```solidity
error ValidPeriodExpired(uint256 expirationDate)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| expirationDate | uint256 | undefined |

### ZeroAddress

```solidity
error ZeroAddress()
```







