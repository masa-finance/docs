# SoulName

*Masa Finance*

> SoulName NFT

SoulName NFT that points to a Soulbound identity token

*SoulName NFT, that inherits from the NFT contract, and points to a Soulbound identity token. It has an extension, and stores all the information about the identity names.*

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

### approve

```solidity
function approve(address to, uint256 tokenId) external nonpayable
```



*See {IERC721-approve}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| to | address | undefined |
| tokenId | uint256 | undefined |

### balanceOf

```solidity
function balanceOf(address owner) external view returns (uint256)
```



*See {IERC721-balanceOf}.*

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

Burn a soul name

*The caller must be the owner or an approved address of the soul name.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId | uint256 | TokenId of the soul name to burn |

### contractURI

```solidity
function contractURI() external view returns (string)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

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

### extension

```solidity
function extension() external view returns (string)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

### getApproved

```solidity
function getApproved(uint256 tokenId) external view returns (address)
```



*See {IERC721-getApproved}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### getExtension

```solidity
function getExtension() external view returns (string)
```

Returns the extension of the soul name

*This function is used to get the extension of the soul name*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | Extension of the soul name |

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

### getSoulNames

```solidity
function getSoulNames(uint256 identityId) external view returns (string[] sbtNames)
```

Returns all the active soul names of an account

*This function queries all the identity names of the specified identity Id*

#### Parameters

| Name | Type | Description |
|---|---|---|
| identityId | uint256 | TokenId of the identity |

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

### getTokenId

```solidity
function getTokenId(string name) external view returns (uint256)
```

Returns the token id of a soul name

*This function queries the token id of a soul name*

#### Parameters

| Name | Type | Description |
|---|---|---|
| name | string | Name of the soul name |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | SoulName id of the soul name |

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

### isApprovedForAll

```solidity
function isApprovedForAll(address owner, address operator) external view returns (bool)
```



*See {IERC721-isApprovedForAll}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| owner | address | undefined |
| operator | address | undefined |

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

### mint

```solidity
function mint(address to, string name, uint256 yearsPeriod, string _tokenURI) external nonpayable returns (uint256)
```

Mints a new soul name

*The caller can mint more than one name. The soul name must be unique.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| to | address | Address of the owner of the new soul name |
| name | string | Name of the new soul name |
| yearsPeriod | uint256 | Years of validity of the name |
| _tokenURI | string | URI of the NFT |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### name

```solidity
function name() external view returns (string)
```



*See {IERC721Metadata-name}.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

### nameData

```solidity
function nameData(string) external view returns (bool exists, uint256 tokenId)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| exists | bool | undefined |
| tokenId | uint256 | undefined |

### owner

```solidity
function owner() external view returns (address)
```



*Returns the address of the current owner.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### ownerOf

```solidity
function ownerOf(uint256 tokenId) external view returns (address)
```



*See {IERC721-ownerOf}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### renewYearsPeriod

```solidity
function renewYearsPeriod(uint256 tokenId, uint256 yearsPeriod) external nonpayable
```

Update the expiration date of a soul name

*The caller must be the owner or an approved address of the soul name.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId | uint256 | TokenId of the soul name |
| yearsPeriod | uint256 | Years of validity of the name |

### renounceOwnership

```solidity
function renounceOwnership() external nonpayable
```



*Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner.*


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

### safeTransferFrom

```solidity
function safeTransferFrom(address from, address to, uint256 tokenId) external nonpayable
```



*See {IERC721-safeTransferFrom}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| from | address | undefined |
| to | address | undefined |
| tokenId | uint256 | undefined |

### safeTransferFrom

```solidity
function safeTransferFrom(address from, address to, uint256 tokenId, bytes data) external nonpayable
```



*See {IERC721-safeTransferFrom}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| from | address | undefined |
| to | address | undefined |
| tokenId | uint256 | undefined |
| data | bytes | undefined |

### setApprovalForAll

```solidity
function setApprovalForAll(address operator, bool approved) external nonpayable
```



*See {IERC721-setApprovalForAll}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| operator | address | undefined |
| approved | bool | undefined |

### setContractURI

```solidity
function setContractURI(string _contractURI) external nonpayable
```

Sets the URI of the smart contract metadata

*The caller must have the admin role to call this function*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _contractURI | string | URI of the smart contract metadata |

### setExtension

```solidity
function setExtension(string _extension) external nonpayable
```

Sets the extension of the soul name

*The caller must have the admin role to call this function*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _extension | string | Extension of the soul name |

### setSoulboundIdentity

```solidity
function setSoulboundIdentity(contract ISoulboundIdentity _soulboundIdentity) external nonpayable
```

Sets the SoulboundIdentity contract address linked to this soul name

*The caller must have the admin role to call this function*

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

### symbol

```solidity
function symbol() external view returns (string)
```



*See {IERC721Metadata-symbol}.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

### tokenByIndex

```solidity
function tokenByIndex(uint256 index) external view returns (uint256)
```



*See {IERC721Enumerable-tokenByIndex}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| index | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### tokenData

```solidity
function tokenData(uint256) external view returns (string name, uint256 expirationDate)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| name | string | undefined |
| expirationDate | uint256 | undefined |

### tokenOfOwnerByIndex

```solidity
function tokenOfOwnerByIndex(address owner, uint256 index) external view returns (uint256)
```



*See {IERC721Enumerable-tokenOfOwnerByIndex}.*

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

A distinct Uniform Resource Identifier (URI) for a given asset.

*This function returns the token URI of the soul name specified by the name*

#### Parameters

| Name | Type | Description |
|---|---|---|
| name | string | Name of the soul name |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | URI of the soulname associated to a name |

### tokenURI

```solidity
function tokenURI(uint256 tokenId) external view returns (string)
```

A distinct Uniform Resource Identifier (URI) for a given asset.

*Throws if `_tokenId` is not a valid NFT. URIs are defined in RFC  3986. The URI may point to a JSON file that conforms to the &quot;ERC721  Metadata JSON Schema&quot;.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId | uint256 | NFT to get the URI of |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | URI of the NFT |

### totalSupply

```solidity
function totalSupply() external view returns (uint256)
```



*See {IERC721Enumerable-totalSupply}.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### transferFrom

```solidity
function transferFrom(address from, address to, uint256 tokenId) external nonpayable
```



*See {IERC721-transferFrom}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| from | address | undefined |
| to | address | undefined |
| tokenId | uint256 | undefined |

### transferOwnership

```solidity
function transferOwnership(address newOwner) external nonpayable
```



*Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| newOwner | address | undefined |



## Events

### Approval

```solidity
event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId)
```



*Emitted when `owner` enables `approved` to manage the `tokenId` token.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| owner `indexed` | address | undefined |
| approved `indexed` | address | undefined |
| tokenId `indexed` | uint256 | undefined |

### ApprovalForAll

```solidity
event ApprovalForAll(address indexed owner, address indexed operator, bool approved)
```



*Emitted when `owner` enables or disables (`approved`) `operator` to manage all of its assets.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| owner `indexed` | address | undefined |
| operator `indexed` | address | undefined |
| approved  | bool | undefined |

### OwnershipTransferred

```solidity
event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| previousOwner `indexed` | address | undefined |
| newOwner `indexed` | address | undefined |

### RoleAdminChanged

```solidity
event RoleAdminChanged(bytes32 indexed role, bytes32 indexed previousAdminRole, bytes32 indexed newAdminRole)
```



*Emitted when `newAdminRole` is set as ``role``&#39;s admin role, replacing `previousAdminRole` `DEFAULT_ADMIN_ROLE` is the starting admin for all roles, despite {RoleAdminChanged} not being emitted signaling this. _Available since v3.1._*

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



*Emitted when `account` is granted `role`. `sender` is the account that originated the contract call, an admin role bearer except when using {AccessControl-_setupRole}.*

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



*Emitted when `account` is revoked `role`. `sender` is the account that originated the contract call:   - if using `revokeRole`, it is the admin role bearer   - if using `renounceRole`, it is the role bearer (i.e. `account`)*

#### Parameters

| Name | Type | Description |
|---|---|---|
| role `indexed` | bytes32 | undefined |
| account `indexed` | address | undefined |
| sender `indexed` | address | undefined |

### Transfer

```solidity
event Transfer(address indexed from, address indexed to, uint256 indexed tokenId)
```



*Emitted when `tokenId` token is transferred from `from` to `to`.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| from `indexed` | address | undefined |
| to `indexed` | address | undefined |
| tokenId `indexed` | uint256 | undefined |

### YearsPeriodRenewed

```solidity
event YearsPeriodRenewed(uint256 tokenId, uint256 yearsPeriod, uint256 newExpirationDate)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId  | uint256 | undefined |
| yearsPeriod  | uint256 | undefined |
| newExpirationDate  | uint256 | undefined |



## Errors

### AddressDoesNotHaveIdentity

```solidity
error AddressDoesNotHaveIdentity(address to)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| to | address | undefined |

### CallerNotOwner

```solidity
error CallerNotOwner(address caller)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| caller | address | undefined |

### InvalidTokenURI

```solidity
error InvalidTokenURI(string tokenURI)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenURI | string | undefined |

### NameAlreadyExists

```solidity
error NameAlreadyExists(string name)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| name | string | undefined |

### NameNotFound

```solidity
error NameNotFound(string name)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| name | string | undefined |

### NameRegisteredByOtherAccount

```solidity
error NameRegisteredByOtherAccount(string name, uint256 tokenId)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| name | string | undefined |
| tokenId | uint256 | undefined |

### SameValue

```solidity
error SameValue()
```






### TokenNotFound

```solidity
error TokenNotFound(uint256 tokenId)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId | uint256 | undefined |

### URIAlreadyExists

```solidity
error URIAlreadyExists(string tokenURI)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenURI | string | undefined |

### ZeroAddress

```solidity
error ZeroAddress()
```






### ZeroLengthName

```solidity
error ZeroLengthName(string name)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| name | string | undefined |

### ZeroYearsPeriod

```solidity
error ZeroYearsPeriod(uint256 yearsPeriod)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| yearsPeriod | uint256 | undefined |


