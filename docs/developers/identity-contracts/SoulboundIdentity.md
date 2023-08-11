# SoulboundIdentity

*Masa Finance*

> Soulbound Identity

Soulbound token that represents an identity.

*Soulbound identity, that inherits from the SBT contract.*

## Methods

### DEFAULT_ADMIN_ROLE

```solidity
function DEFAULT_ADMIN_ROLE() external view returns (bytes32)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined |

### MINTER_ROLE

```solidity
function MINTER_ROLE() external view returns (bytes32)
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

### addLinkPrice

```solidity
function addLinkPrice() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### addLinkPriceMASA

```solidity
function addLinkPriceMASA() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### balanceOf

```solidity
function balanceOf(address owner) external view returns (uint256)
```



*See {ISBT-balanceOf}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| owner | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### burn

```solidity
function burn(uint256 tokenId) external nonpayable
```



*Burns `tokenId`. See {SBT-_burn}. Requirements: - The caller must own `tokenId` or be an approved operator.*

#### Parameters

| Name | Type | Description |
|---|---|---|
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

### exists

```solidity
function exists(uint256 tokenId) external view returns (bool)
```

Returns true if the token exists

*Returns true if the token has been minted*

#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId | uint256 | Token to check |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | True if the token exists |

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

### getExtension

```solidity
function getExtension() external view returns (string)
```

Returns the extension of the soul name

*This function returns the extension of the soul name*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | Extension of the soul name |

### getIdentityId

```solidity
function getIdentityId(uint256 tokenId) external view returns (uint256)
```

Returns the identityId owned by the given token



#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId | uint256 | Id of the token |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | Id of the identity |

### getMintPrice

```solidity
function getMintPrice(address paymentMethod) external view returns (uint256 price)
```

Returns the price for minting

*Returns current pricing for minting*

#### Parameters

| Name | Type | Description |
|---|---|---|
| paymentMethod | address | Address of token that user want to pay |

#### Returns

| Name | Type | Description |
|---|---|---|
| price | uint256 | Current price for minting in the given payment method |

### getMintPriceWithProtocolFee

```solidity
function getMintPriceWithProtocolFee(address paymentMethod) external view returns (uint256 price, uint256 protocolFee)
```

Returns the price for minting with protocol fee

*Returns current pricing for minting with protocol fee*

#### Parameters

| Name | Type | Description |
|---|---|---|
| paymentMethod | address | Address of token that user want to pay |

#### Returns

| Name | Type | Description |
|---|---|---|
| price | uint256 | Current price for minting in the given payment method |
| protocolFee | uint256 | Current protocol fee for minting in the given payment method |

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

### getSoulName

```solidity
function getSoulName() external view returns (contract ISoulName)
```

Returns the address of the SoulName contract linked to this identity

*This function returns the address of the SoulName contract linked to this identity*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract ISoulName | Address of the SoulName contract |

### getSoulNames

```solidity
function getSoulNames(uint256 tokenId) external view returns (string[] sbtNames)
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
| sbtNames | string[] | Array of soul names associated to the identity Id |

### getSoulNames

```solidity
function getSoulNames(address owner) external view returns (string[] sbtNames)
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
| sbtNames | string[] | Array of soul names associated to the account |

### getTokenData

```solidity
function getTokenData(string name) external view returns (string sbtName, bool linked, uint256 identityId, uint256 tokenId, uint256 expirationDate, bool active)
```

Returns the information of a soul name

*This function queries the information of a soul name*

#### Parameters

| Name | Type | Description |
|---|---|---|
| name | string | Name of the soul name |

#### Returns

| Name | Type | Description |
|---|---|---|
| sbtName | string | Soul name, in upper/lower case and extension |
| linked | bool | `true` if the soul name is linked, `false` otherwise |
| identityId | uint256 | Identity id of the soul name |
| tokenId | uint256 | SoulName id of the soul name |
| expirationDate | uint256 | Expiration date of the soul name |
| active | bool | `true` if the soul name is active, `false` otherwise |

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

### isAvailable

```solidity
function isAvailable(string name) external view returns (bool available)
```

Checks if a soul name is available

*This function queries if a soul name already exists and is in the available state*

#### Parameters

| Name | Type | Description |
|---|---|---|
| name | string | Name of the soul name |

#### Returns

| Name | Type | Description |
|---|---|---|
| available | bool | `true` if the soul name is available, `false` otherwise |

### masaToken

```solidity
function masaToken() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### mint

```solidity
function mint(address to) external payable returns (uint256)
```

Mints a new soulbound identity

*The caller can only mint one identity per address*

#### Parameters

| Name | Type | Description |
|---|---|---|
| to | address | Address of the owner of the new identity |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | The identity ID of the newly minted identity |

### mint

```solidity
function mint(address paymentMethod, address to) external payable returns (uint256)
```

Mints a new soulbound identity

*The caller can only mint one identity per address*

#### Parameters

| Name | Type | Description |
|---|---|---|
| paymentMethod | address | Address of the payment method to use |
| to | address | Address of the owner of the new identity |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | The identity ID of the newly minted identity |

### mintIdentityWithName

```solidity
function mintIdentityWithName(address to, string name, uint256 yearsPeriod, string _tokenURI) external payable returns (uint256)
```

Mints a new soulbound identity with a SoulName associated to it

*The caller can only mint one identity per address, and the name must be unique*

#### Parameters

| Name | Type | Description |
|---|---|---|
| to | address | Address of the owner of the new identity |
| name | string | Name of the new identity |
| yearsPeriod | uint256 | Years of validity of the name |
| _tokenURI | string | URI of the NFT |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### mintIdentityWithName

```solidity
function mintIdentityWithName(address paymentMethod, address to, string name, uint256 yearsPeriod, string _tokenURI) external payable returns (uint256)
```

Mints a new soulbound identity with a SoulName associated to it

*The caller can only mint one identity per address, and the name must be unique*

#### Parameters

| Name | Type | Description |
|---|---|---|
| paymentMethod | address | Address of the payment method to use |
| to | address | Address of the owner of the new identity |
| name | string | Name of the new identity |
| yearsPeriod | uint256 | Years of validity of the name |
| _tokenURI | string | URI of the NFT |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### mintPrice

```solidity
function mintPrice() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### mintPriceMASA

```solidity
function mintPriceMASA() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### name

```solidity
function name() external view returns (string)
```



*See {ISBTMetadata-name}.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

### ownerOf

```solidity
function ownerOf(uint256 tokenId) external view returns (address)
```

Returns the owner address of an identity

*This function returns the owner address of the identity specified by the tokenId*

#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId | uint256 | TokenId of the identity |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | Address of the owner of the identity |

### ownerOf

```solidity
function ownerOf(string name) external view returns (address)
```

Returns the owner address of a soul name

*This function returns the owner address of the soul name identity specified by the name*

#### Parameters

| Name | Type | Description |
|---|---|---|
| name | string | Name of the soul name |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | Address of the owner of the identity |

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

### queryLinkPrice

```solidity
function queryLinkPrice() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### queryLinkPriceMASA

```solidity
function queryLinkPriceMASA() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

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

### setAddLinkPrice

```solidity
function setAddLinkPrice(uint256 _addLinkPrice) external nonpayable
```

Sets the price for adding the link in SoulLinker in stable coin

*The caller must have the admin or project admin role to call this function*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _addLinkPrice | uint256 | New price for adding the link in SoulLinker in stable coin |

### setAddLinkPriceMASA

```solidity
function setAddLinkPriceMASA(uint256 _addLinkPriceMASA) external nonpayable
```

Sets the price for adding the link in SoulLinker in MASA

*The caller must have the admin or project admin role to call this function*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _addLinkPriceMASA | uint256 | New price for adding the link in SoulLinker in MASA |

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

### setMintPrice

```solidity
function setMintPrice(uint256 _mintPrice) external nonpayable
```

Sets the price of minting in stable coin

*The caller must have the admin or project admin role to call this function*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _mintPrice | uint256 | New price of minting in stable coin |

### setMintPriceMASA

```solidity
function setMintPriceMASA(uint256 _mintPriceMASA) external nonpayable
```

Sets the price of minting in MASA

*The caller must have the admin or project admin role to call this function*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _mintPriceMASA | uint256 | New price of minting in MASA |

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

### setQueryLinkPrice

```solidity
function setQueryLinkPrice(uint256 _queryLinkPrice) external nonpayable
```

Sets the price for reading data in SoulLinker in stable coin

*The caller must have the admin or project admin role to call this function*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _queryLinkPrice | uint256 | New price for reading data in SoulLinker in stable coin |

### setQueryLinkPriceMASA

```solidity
function setQueryLinkPriceMASA(uint256 _queryLinkPriceMASA) external nonpayable
```

Sets the price for reading data in SoulLinker in MASA

*The caller must have the admin or project admin role to call this function*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _queryLinkPriceMASA | uint256 | New price for reading data in SoulLinker in MASA |

### setSoulName

```solidity
function setSoulName(contract ISoulName _soulName) external nonpayable
```

Sets the SoulName contract address linked to this identity

*The caller must have the admin role to call this function*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _soulName | contract ISoulName | Address of the SoulName contract |

### setSoulboundIdentity

```solidity
function setSoulboundIdentity(address _soulboundIdentity) external nonpayable
```

Sets the SoulboundIdentity contract address linked to this SBT

*The caller must be the admin to call this function*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _soulboundIdentity | address | Address of the SoulboundIdentity contract |

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

Query if a contract implements an interface

*Interface identification is specified in ERC-165.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| interfaceId | bytes4 | The interface identifier, as specified in ERC-165 |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | `true` if the contract implements `interfaceId` and  `interfaceId` is not 0xffffffff, `false` otherwise |

### swapRouter

```solidity
function swapRouter() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### symbol

```solidity
function symbol() external view returns (string)
```



*See {ISBTMetadata-symbol}.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

### tokenByIndex

```solidity
function tokenByIndex(uint256 index) external view returns (uint256)
```



*See {ISBTEnumerable-tokenByIndex}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| index | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### tokenOfOwner

```solidity
function tokenOfOwner(address owner) external view returns (uint256)
```

Returns the identity id of an account

*This function returns the tokenId of the identity owned by an account*

#### Parameters

| Name | Type | Description |
|---|---|---|
| owner | address | Address of the owner of the identity |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | TokenId of the identity owned by the account |

### tokenOfOwnerByIndex

```solidity
function tokenOfOwnerByIndex(address owner, uint256 index) external view returns (uint256)
```



*See {ISBTEnumerable-tokenOfOwnerByIndex}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| owner | address | undefined |
| index | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### tokenURI

```solidity
function tokenURI(string name) external view returns (string)
```

Returns the URI of a soul name

*This function returns the token URI of the soul name identity specified by the name*

#### Parameters

| Name | Type | Description |
|---|---|---|
| name | string | Name of the soul name |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | URI of the identity associated to a soul name |

### tokenURI

```solidity
function tokenURI(address owner) external view returns (string)
```

Returns the URI of the owner of an identity

*This function returns the token URI of the identity owned by an account*

#### Parameters

| Name | Type | Description |
|---|---|---|
| owner | address | Address of the owner of the identity |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | URI of the identity owned by the account |

### tokenURI

```solidity
function tokenURI(uint256 tokenId) external view returns (string)
```

A distinct Uniform Resource Identifier (URI) for a given asset.

*Throws if `_tokenId` is not a valid SBT. URIs are defined in RFC  3986. The URI may point to a JSON file that conforms to the &quot;ERC721  Metadata JSON Schema&quot;.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId | uint256 | SBT to get the URI of |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | URI of the SBT |

### totalSupply

```solidity
function totalSupply() external view returns (uint256)
```



*See {ISBTEnumerable-totalSupply}.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### wrappedNativeToken

```solidity
function wrappedNativeToken() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |



## Events

### Burn

```solidity
event Burn(address indexed _owner, uint256 indexed _tokenId)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _owner `indexed` | address | undefined |
| _tokenId `indexed` | uint256 | undefined |

### Mint

```solidity
event Mint(address indexed _owner, uint256 indexed _tokenId)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _owner `indexed` | address | undefined |
| _tokenId `indexed` | uint256 | undefined |

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



## Errors

### AlreadyAdded

```solidity
error AlreadyAdded()
```






### IdentityAlreadyCreated

```solidity
error IdentityAlreadyCreated(address to)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| to | address | undefined |

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

### NotLinkedToAnIdentitySBT

```solidity
error NotLinkedToAnIdentitySBT()
```






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






### SoulNameContractNotSet

```solidity
error SoulNameContractNotSet()
```






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







