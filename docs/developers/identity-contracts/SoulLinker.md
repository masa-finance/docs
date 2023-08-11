# SoulLinker

*Masa Finance*

> Soul linker

Soul linker smart contract that let add links to a Soulbound token.



## Methods

### DEFAULT_ADMIN_ROLE

```solidity
function DEFAULT_ADMIN_ROLE() external view returns (bytes32)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined |

### PROJECT_ADMIN_ROLE

```solidity
function PROJECT_ADMIN_ROLE() external view returns (bytes32)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined |

### addLink

```solidity
function addLink(address paymentMethod, uint256 readerIdentityId, uint256 ownerIdentityId, address token, uint256 tokenId, uint256 signatureDate, uint256 expirationDate, bytes signature) external payable
```

Stores the link, validating the signature of the given read link request

*The token must be linked to this soul linker*

#### Parameters

| Name | Type | Description |
|---|---|---|
| paymentMethod | address | undefined |
| readerIdentityId | uint256 | Id of the identity of the reader |
| ownerIdentityId | uint256 | Id of the identity of the owner of the SBT |
| token | address | Address of the SBT contract |
| tokenId | uint256 | Id of the token |
| signatureDate | uint256 | Signature date of the signature |
| expirationDate | uint256 | Expiration date of the signature |
| signature | bytes | Signature of the read link request made by the owner |

### addSoulName

```solidity
function addSoulName(contract ISoulName soulName) external nonpayable
```

Add a SoulName contract address linked to this soul store

*The caller must have the admin role to call this function*

#### Parameters

| Name | Type | Description |
|---|---|---|
| soulName | contract ISoulName | Address of the SoulName contract |

### defaultSoulName

```solidity
function defaultSoulName(address) external view returns (bool exists, address token, uint256 tokenId)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| exists | bool | undefined |
| token | address | undefined |
| tokenId | uint256 | undefined |

### disablePaymentMethod

```solidity
function disablePaymentMethod(address _paymentMethod) external nonpayable
```

Removes a token as a valid payment method

*The caller must have the admin role to call this function*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _paymentMethod | address | Token to remove |

### enablePaymentMethod

```solidity
function enablePaymentMethod(address _paymentMethod) external nonpayable
```

Adds a new token as a valid payment method

*The caller must have the admin role to call this function*

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

### getDefaultSoulName

```solidity
function getDefaultSoulName(address owner) external view returns (string)
```

Returns the default soul name of an account

*This function queries the default soul name of the specified account*

#### Parameters

| Name | Type | Description |
|---|---|---|
| owner | address | Address of the owner of the identities |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | Default soul name associated to the account |

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

### getLinkInfo

```solidity
function getLinkInfo(address token, uint256 tokenId, uint256 readerIdentityId, uint256 signatureDate) external view returns (struct SoulLinker.LinkData)
```

Returns the information of link dates for a given SBT token and reader



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
| _0 | SoulLinker.LinkData | linkData List of linked SBTs |

### getLinkSignatureDates

```solidity
function getLinkSignatureDates(address token, uint256 tokenId, uint256 readerIdentityId) external view returns (uint256[])
```

Returns the list of link signature dates for a given SBT token and reader



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

### getLinks

```solidity
function getLinks(address token, uint256 tokenId) external view returns (struct SoulLinker.LinkKey[])
```

Returns the list of link signature dates for a given SBT token and reader



#### Parameters

| Name | Type | Description |
|---|---|---|
| token | address | Address of the SBT contract |
| tokenId | uint256 | Id of the token |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | SoulLinker.LinkKey[] | List of linked SBTs |

### getPriceForAddLink

```solidity
function getPriceForAddLink(address paymentMethod, address token) external view returns (uint256 price)
```

Returns the price for storing a link

*Returns the current pricing for storing a link*

#### Parameters

| Name | Type | Description |
|---|---|---|
| paymentMethod | address | Address of token that user want to pay |
| token | address | Token that user want to store link |

#### Returns

| Name | Type | Description |
|---|---|---|
| price | uint256 | Current price for storing a link |

### getPriceForAddLinkWithProtocolFee

```solidity
function getPriceForAddLinkWithProtocolFee(address paymentMethod, address token) external view returns (uint256 price, uint256 protocolFee)
```

Returns the price for storing a link with protocol fee

*Returns the current pricing for storing a link with protocol fee*

#### Parameters

| Name | Type | Description |
|---|---|---|
| paymentMethod | address | Address of token that user want to pay |
| token | address | Token that user want to store link |

#### Returns

| Name | Type | Description |
|---|---|---|
| price | uint256 | Current price for storing a link |
| protocolFee | uint256 | Current protocol fee for storing a link |

### getProtocolFee

```solidity
function getProtocolFee(address paymentMethod, uint256 amount) external view returns (uint256)
```

Calculates the protocol fee added to the project fee

*This method will calculate the protocol fee based on the payment method*

#### Parameters

| Name | Type | Description |
|---|---|---|
| paymentMethod | address | Address of token that user want to pay |
| amount | uint256 | Price to be paid in the specified payment method |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### getProtocolFeeSub

```solidity
function getProtocolFeeSub(uint256 amount) external view returns (uint256)
```

Calculates the protocol fee substracted from the amount

*This method will calculate the protocol fee based on the payment method*

#### Parameters

| Name | Type | Description |
|---|---|---|
| amount | uint256 | Price to be paid in the specified payment method |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### getReaderLinks

```solidity
function getReaderLinks(uint256 readerIdentityId) external view returns (struct SoulLinker.ReaderLink[])
```

Returns the list of links for a given reader identity id



#### Parameters

| Name | Type | Description |
|---|---|---|
| readerIdentityId | uint256 | Id of the identity of the reader of the SBT |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | SoulLinker.ReaderLink[] | List of links for the reader |

### getRoleAdmin

```solidity
function getRoleAdmin(bytes32 role) external view returns (bytes32)
```



*Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a role&#39;s admin, use {_setRoleAdmin}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| role | bytes32 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined |

### getSBTConnections

```solidity
function getSBTConnections(uint256 identityId, address token) external view returns (uint256[])
```

Returns the list of connected SBTs by a given SBT token



#### Parameters

| Name | Type | Description |
|---|---|---|
| identityId | uint256 | Id of the identity |
| token | address | Address of the SBT contract |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256[] | List of connected SBTs |

### getSBTConnections

```solidity
function getSBTConnections(address owner, address token) external view returns (uint256[])
```

Returns the list of connected SBTs by a given SBT token



#### Parameters

| Name | Type | Description |
|---|---|---|
| owner | address | Address of the owner of the identity |
| token | address | Address of the SBT contract |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256[] | List of connectec SBTs |

### getSoulNames

```solidity
function getSoulNames(uint256 tokenId) external view returns (string defaultName, string[] names)
```

Returns all the active soul names of an account

*This function queries all the identity names of the specified identity Id*

#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId | uint256 | TokenId of the identity |

#### Returns

| Name | Type | Description |
|---|---|---|
| defaultName | string | Default soul name of the account |
| names | string[] | Array of soul names associated to the account |

### getSoulNames

```solidity
function getSoulNames(address owner) external view returns (string defaultName, string[] names)
```

Returns all the active soul names of an account

*This function queries all the identity names of the specified account*

#### Parameters

| Name | Type | Description |
|---|---|---|
| owner | address | Address of the owner of the identities |

#### Returns

| Name | Type | Description |
|---|---|---|
| defaultName | string | Default soul name of the account |
| names | string[] | Array of soul names associated to the account |

### grantRole

```solidity
function grantRole(bytes32 role, address account) external nonpayable
```



*Grants `role` to `account`. If `account` had not been already granted `role`, emits a {RoleGranted} event. Requirements: - the caller must have ``role``&#39;s admin role. May emit a {RoleGranted} event.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| role | bytes32 | undefined |
| account | address | undefined |

### hasRole

```solidity
function hasRole(bytes32 role, address account) external view returns (bool)
```



*Returns `true` if `account` has been granted `role`.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| role | bytes32 | undefined |
| account | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### isSoulName

```solidity
function isSoulName(address) external view returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### masaToken

```solidity
function masaToken() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### pause

```solidity
function pause() external nonpayable
```

Pauses the smart contract

*The caller must have the admin role to call this function*


### paused

```solidity
function paused() external view returns (bool)
```



*Returns true if the contract is paused, and false otherwise.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### projectFeeReceiver

```solidity
function projectFeeReceiver() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### protocolFeeAmount

```solidity
function protocolFeeAmount() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### protocolFeePercent

```solidity
function protocolFeePercent() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### protocolFeePercentSub

```solidity
function protocolFeePercentSub() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### protocolFeeReceiver

```solidity
function protocolFeeReceiver() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### removeSoulName

```solidity
function removeSoulName(contract ISoulName soulName) external nonpayable
```

Remove a SoulName contract address linked to this soul store

*The caller must have the admin role to call this function*

#### Parameters

| Name | Type | Description |
|---|---|---|
| soulName | contract ISoulName | Address of the SoulName contract |

### renounceRole

```solidity
function renounceRole(bytes32 role, address account) external nonpayable
```



*Revokes `role` from the calling account. Roles are often managed via {grantRole} and {revokeRole}: this function&#39;s purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced). If the calling account had been revoked `role`, emits a {RoleRevoked} event. Requirements: - the caller must be `account`. May emit a {RoleRevoked} event.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| role | bytes32 | undefined |
| account | address | undefined |

### revokeLink

```solidity
function revokeLink(uint256 readerIdentityId, uint256 ownerIdentityId, address token, uint256 tokenId, uint256 signatureDate) external nonpayable
```

Revokes the link

*The links can be revoked, wether the token is linked or not. The caller must be the owner of the token. The owner of the token can revoke a link even if the reader has not added it yet.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| readerIdentityId | uint256 | Id of the identity of the reader |
| ownerIdentityId | uint256 | Id of the identity of the owner of the SBT |
| token | address | Address of the SBT contract |
| tokenId | uint256 | Id of the token |
| signatureDate | uint256 | Signature date of the signature |

### revokeRole

```solidity
function revokeRole(bytes32 role, address account) external nonpayable
```



*Revokes `role` from `account`. If `account` had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must have ``role``&#39;s admin role. May emit a {RoleRevoked} event.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| role | bytes32 | undefined |
| account | address | undefined |

### setDefaultSoulName

```solidity
function setDefaultSoulName(address token, uint256 tokenId) external nonpayable
```

Sets the default soul name for the owner

*The caller must be the owner of the soul name.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| token | address | Address of the SoulName contract |
| tokenId | uint256 | TokenId of the soul name |

### setMasaToken

```solidity
function setMasaToken(address _masaToken) external nonpayable
```

Sets the utility token to pay the fee in (MASA)

*The caller must have the admin role to call this function It can be set to address(0) to disable paying in MASA*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _masaToken | address | New utility token to pay the fee in |

### setProjectFeeReceiver

```solidity
function setProjectFeeReceiver(address _projectFeeReceiver) external nonpayable
```

Set the project fee receiver wallet

*The caller must have the admin or project admin role to call this function*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _projectFeeReceiver | address | New project fee receiver wallet |

### setProtocolFeeAmount

```solidity
function setProtocolFeeAmount(uint256 _protocolFeeAmount) external nonpayable
```

Set the protocol fee amount

*The caller must have the admin role to call this function*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _protocolFeeAmount | uint256 | New protocol fee amount |

### setProtocolFeePercent

```solidity
function setProtocolFeePercent(uint256 _protocolFeePercent) external nonpayable
```

Set the protocol fee percent added to the project fee

*The caller must have the admin role to call this function*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _protocolFeePercent | uint256 | New protocol fee percent added to the project fee |

### setProtocolFeePercentSub

```solidity
function setProtocolFeePercentSub(uint256 _protocolFeePercentSub) external nonpayable
```

Set the protocol fee percent substracted from the amount

*The caller must have the admin role to call this function*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _protocolFeePercentSub | uint256 | New protocol fee percent substracted from the amount |

### setProtocolFeeReceiver

```solidity
function setProtocolFeeReceiver(address _protocolFeeReceiver) external nonpayable
```

Set the protocol fee wallet

*The caller must have the admin role to call this function*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _protocolFeeReceiver | address | New protocol fee wallet |

### setSoulboundIdentity

```solidity
function setSoulboundIdentity(contract ISoulboundIdentity _soulboundIdentity) external nonpayable
```

Sets the SoulboundIdentity contract address linked to this soul store

*The caller must have the admin role to call this function*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _soulboundIdentity | contract ISoulboundIdentity | Address of the SoulboundIdentity contract |

### setStableCoin

```solidity
function setStableCoin(address _stableCoin) external nonpayable
```

Sets the stable coin to pay the fee in (USDC)

*The caller must have the admin role to call this function*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _stableCoin | address | New stable coin to pay the fee in |

### setSwapRouter

```solidity
function setSwapRouter(address _swapRouter) external nonpayable
```

Sets the swap router address

*The caller must have the admin role to call this function*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _swapRouter | address | New swap router address |

### setWrappedNativeToken

```solidity
function setWrappedNativeToken(address _wrappedNativeToken) external nonpayable
```

Sets the wrapped native token address

*The caller must have the admin role to call this function*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _wrappedNativeToken | address | New wrapped native token address |

### soulNames

```solidity
function soulNames(uint256) external view returns (contract ISoulName)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract ISoulName | undefined |

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

### supportsInterface

```solidity
function supportsInterface(bytes4 interfaceId) external view returns (bool)
```



*See {IERC165-supportsInterface}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| interfaceId | bytes4 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### swapRouter

```solidity
function swapRouter() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### unpause

```solidity
function unpause() external nonpayable
```

Unpauses the smart contract

*The caller must have the admin role to call this function*


### validateLink

```solidity
function validateLink(uint256 readerIdentityId, uint256 ownerIdentityId, address token, uint256 tokenId, uint256 signatureDate) external view returns (bool)
```

Validates the link of the given read link request and returns the data that reader can read if the link is valid

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
| _0 | bool | True if the link is valid |

### wrappedNativeToken

```solidity
function wrappedNativeToken() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |



## Events

### LinkAdded

```solidity
event LinkAdded(uint256 readerIdentityId, uint256 ownerIdentityId, address token, uint256 tokenId, uint256 signatureDate, uint256 expirationDate)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| readerIdentityId  | uint256 | undefined |
| ownerIdentityId  | uint256 | undefined |
| token  | address | undefined |
| tokenId  | uint256 | undefined |
| signatureDate  | uint256 | undefined |
| expirationDate  | uint256 | undefined |

### LinkRevoked

```solidity
event LinkRevoked(uint256 readerIdentityId, uint256 ownerIdentityId, address token, uint256 tokenId, uint256 signatureDate)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| readerIdentityId  | uint256 | undefined |
| ownerIdentityId  | uint256 | undefined |
| token  | address | undefined |
| tokenId  | uint256 | undefined |
| signatureDate  | uint256 | undefined |

### Paused

```solidity
event Paused(address account)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| account  | address | undefined |

### RoleAdminChanged

```solidity
event RoleAdminChanged(bytes32 indexed role, bytes32 indexed previousAdminRole, bytes32 indexed newAdminRole)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| role `indexed` | bytes32 | undefined |
| previousAdminRole `indexed` | bytes32 | undefined |
| newAdminRole `indexed` | bytes32 | undefined |

### RoleGranted

```solidity
event RoleGranted(bytes32 indexed role, address indexed account, address indexed sender)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| role `indexed` | bytes32 | undefined |
| account `indexed` | address | undefined |
| sender `indexed` | address | undefined |

### RoleRevoked

```solidity
event RoleRevoked(bytes32 indexed role, address indexed account, address indexed sender)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| role `indexed` | bytes32 | undefined |
| account `indexed` | address | undefined |
| sender `indexed` | address | undefined |

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

### IdentityOwnerIsReader

```solidity
error IdentityOwnerIsReader(uint256 readerIdentityId)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| readerIdentityId | uint256 | undefined |

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






### InvalidSignatureDate

```solidity
error InvalidSignatureDate(uint256 signatureDate)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| signatureDate | uint256 | undefined |

### InvalidToken

```solidity
error InvalidToken(address token)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| token | address | undefined |

### LinkAlreadyExists

```solidity
error LinkAlreadyExists(address token, uint256 tokenId, uint256 readerIdentityId, uint256 signatureDate)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| token | address | undefined |
| tokenId | uint256 | undefined |
| readerIdentityId | uint256 | undefined |
| signatureDate | uint256 | undefined |

### LinkAlreadyRevoked

```solidity
error LinkAlreadyRevoked()
```






### LinkDoesNotExist

```solidity
error LinkDoesNotExist()
```






### NonExistingErc20Token

```solidity
error NonExistingErc20Token(address erc20token)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| erc20token | address | undefined |

### PaymentParamsNotSet

```solidity
error PaymentParamsNotSet()
```






### ProtocolFeeReceiverNotSet

```solidity
error ProtocolFeeReceiverNotSet()
```






### RefundFailed

```solidity
error RefundFailed()
```






### SameValue

```solidity
error SameValue()
```






### SoulNameNotExist

```solidity
error SoulNameNotExist()
```






### SoulNameNotRegistered

```solidity
error SoulNameNotRegistered(address token)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| token | address | undefined |

### TransferFailed

```solidity
error TransferFailed()
```






### UserMustHaveProtocolOrProjectAdminRole

```solidity
error UserMustHaveProtocolOrProjectAdminRole()
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







