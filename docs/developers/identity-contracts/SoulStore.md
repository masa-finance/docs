# SoulStore

*Masa Finance*

> Soul Store

Soul Store, that can mint new Soulbound Identities and Soul Name NFTs, paying a fee

*From this smart contract we can mint new Soulbound Identities and Soul Name NFTs. This minting can be done paying a fee in ETH, USDC or MASA*

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

### addAuthority

```solidity
function addAuthority(address _authority) external nonpayable
```

Adds a new authority to the list of authorities

*The caller must have the admin or project admin role to call this function*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _authority | address | New authority to add |

### authorities

```solidity
function authorities(address) external view returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

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

### eip712Domain

```solidity
function eip712Domain() external view returns (bytes1 fields, string name, string version, uint256 chainId, address verifyingContract, bytes32 salt, uint256[] extensions)
```



*See {EIP-5267}. _Available since v4.9._*


#### Returns

| Name | Type | Description |
|---|---|---|
| fields | bytes1 | undefined |
| name | string | undefined |
| version | string | undefined |
| chainId | uint256 | undefined |
| verifyingContract | address | undefined |
| salt | bytes32 | undefined |
| extensions | uint256[] | undefined |

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

### getNameRegistrationPricePerYear

```solidity
function getNameRegistrationPricePerYear(uint256 nameLength) external view returns (uint256)
```

Returns the price of register a name per year in stable coin for an specific length

*Returns the price for registering per year in USD for an specific name length*

#### Parameters

| Name | Type | Description |
|---|---|---|
| nameLength | uint256 | Length of the name |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | Price in stable coin for that name length |

### getPriceForMintingName

```solidity
function getPriceForMintingName(address paymentMethod, uint256 nameLength, uint256 yearsPeriod) external view returns (uint256 price)
```

Returns the price of the name minting

*Returns current pricing for name minting for a given name length and years period*

#### Parameters

| Name | Type | Description |
|---|---|---|
| paymentMethod | address | Address of token that user want to pay |
| nameLength | uint256 | Length of the name |
| yearsPeriod | uint256 | Years of validity of the name |

#### Returns

| Name | Type | Description |
|---|---|---|
| price | uint256 | Current price of the name minting in the given payment method |

### getPriceForMintingNameWithProtocolFee

```solidity
function getPriceForMintingNameWithProtocolFee(address paymentMethod, uint256 nameLength, uint256 yearsPeriod) external view returns (uint256 price, uint256 protocolFee)
```

Returns the price of the name minting with protocol fee

*Returns current pricing for name minting for a given name length and years period with protocol fee*

#### Parameters

| Name | Type | Description |
|---|---|---|
| paymentMethod | address | Address of token that user want to pay |
| nameLength | uint256 | Length of the name |
| yearsPeriod | uint256 | Years of validity of the name |

#### Returns

| Name | Type | Description |
|---|---|---|
| price | uint256 | Current price of the name minting in the given payment method |
| protocolFee | uint256 | Current protocol fee of the name minting in the given payment method |

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

### masaToken

```solidity
function masaToken() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### nameRegistrationPricePerYear

```solidity
function nameRegistrationPricePerYear(uint256) external view returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

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

### purchaseIdentity

```solidity
function purchaseIdentity() external nonpayable returns (uint256)
```

Mints a new Soulbound Identity purchasing it

*This function allows the purchase of a soulbound identity for free*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | TokenId of the new soulbound identity |

### purchaseIdentityAndName

```solidity
function purchaseIdentityAndName(address paymentMethod, string name, uint256 nameLength, uint256 yearsPeriod, string tokenURI, address authorityAddress, bytes signature) external payable returns (uint256)
```

Mints a new Soulbound Identity and Name purchasing it

*This function allows the purchase of a soulbound identity and name using stable coin (USDC), native token (ETH) or utility token (MASA)*

#### Parameters

| Name | Type | Description |
|---|---|---|
| paymentMethod | address | Address of token that user want to pay |
| name | string | Name of the new soul name |
| nameLength | uint256 | Length of the name |
| yearsPeriod | uint256 | Years of validity of the name |
| tokenURI | string | URI of the NFT |
| authorityAddress | address | Address of the authority |
| signature | bytes | Signature of the authority |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | TokenId of the new soulbound identity |

### purchaseName

```solidity
function purchaseName(address paymentMethod, address to, string name, uint256 nameLength, uint256 yearsPeriod, string tokenURI, address authorityAddress, bytes signature) external payable returns (uint256)
```

Mints a new Soul Name purchasing it

*This function allows the purchase of a soul name using stable coin (USDC), native token (ETH) or utility token (MASA)*

#### Parameters

| Name | Type | Description |
|---|---|---|
| paymentMethod | address | Address of token that user want to pay |
| to | address | Address of the owner of the new soul name |
| name | string | Name of the new soul name |
| nameLength | uint256 | Length of the name |
| yearsPeriod | uint256 | Years of validity of the name |
| tokenURI | string | URI of the NFT |
| authorityAddress | address | Address of the authority |
| signature | bytes | Signature of the authority |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | TokenId of the new sou name |

### removeAuthority

```solidity
function removeAuthority(address _authority) external nonpayable
```

Removes an authority from the list of authorities

*The caller must have the admin or project admin role to call this function*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _authority | address | Authority to remove |

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

### setNameRegistrationPricePerYear

```solidity
function setNameRegistrationPricePerYear(uint256 _nameLength, uint256 _nameRegistrationPricePerYear) external nonpayable
```

Sets the price of the name registering per one year in stable coin

*The caller must have the admin or project admin role to call this function*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _nameLength | uint256 | Length of the name |
| _nameRegistrationPricePerYear | uint256 | New price of the name registering per one year in stable coin for that name length per year |

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

### setSoulName

```solidity
function setSoulName(contract ISoulName _soulName) external nonpayable
```

Sets the SoulName contract address linked to this store

*The caller must have the admin role to call this function*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _soulName | contract ISoulName | New SoulName contract address |

### setSoulboundIdentity

```solidity
function setSoulboundIdentity(contract ISoulboundIdentity _soulboundIdentity) external nonpayable
```

Sets the SoulboundIdentity contract address linked to this store

*The caller must have the admin role to call this function*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _soulboundIdentity | contract ISoulboundIdentity | New SoulboundIdentity contract address |

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

### soulName

```solidity
function soulName() external view returns (contract ISoulName)
```






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


### wrappedNativeToken

```solidity
function wrappedNativeToken() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |



## Events

### EIP712DomainChanged

```solidity
event EIP712DomainChanged()
```






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

### SoulNamePurchased

```solidity
event SoulNamePurchased(address indexed account, uint256 tokenId, string indexed name, uint256 yearsPeriod, address indexed paymentMethod, uint256 price, uint256 protocolFee)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| account `indexed` | address | undefined |
| tokenId  | uint256 | undefined |
| name `indexed` | string | undefined |
| yearsPeriod  | uint256 | undefined |
| paymentMethod `indexed` | address | undefined |
| price  | uint256 | undefined |
| protocolFee  | uint256 | undefined |

### SoulboundIdentityAndNamePurchased

```solidity
event SoulboundIdentityAndNamePurchased(address indexed account, uint256 tokenId, string indexed name, uint256 yearsPeriod, address indexed paymentMethod, uint256 price, uint256 protocolFee)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| account `indexed` | address | undefined |
| tokenId  | uint256 | undefined |
| name `indexed` | string | undefined |
| yearsPeriod  | uint256 | undefined |
| paymentMethod `indexed` | address | undefined |
| price  | uint256 | undefined |
| protocolFee  | uint256 | undefined |

### SoulboundIdentityPurchased

```solidity
event SoulboundIdentityPurchased(address indexed account, uint256 tokenId)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| account `indexed` | address | undefined |
| tokenId  | uint256 | undefined |

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






### AuthorityNotExists

```solidity
error AuthorityNotExists(address authority)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| authority | address | undefined |

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

### InvalidShortString

```solidity
error InvalidShortString()
```






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

### NotAuthorized

```solidity
error NotAuthorized(address signer)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| signer | address | undefined |

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






### StringTooLong

```solidity
error StringTooLong(string str)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| str | string | undefined |

### TransferFailed

```solidity
error TransferFailed()
```






### UserMustHaveProtocolOrProjectAdminRole

```solidity
error UserMustHaveProtocolOrProjectAdminRole()
```






### ZeroAddress

```solidity
error ZeroAddress()
```







