# ISBTMetadata



> SBT Soulbound Token Standard, optional metadata extension





## Methods

### balanceOf

```solidity
function balanceOf(address _owner) external view returns (uint256)
```

Count all SBTs assigned to an owner

*SBTs assigned to the zero address are considered invalid, and this  function throws for queries about the zero address.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _owner | address | An address for whom to query the balance |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | The number of SBTs owned by `_owner`, possibly zero |

### name

```solidity
function name() external view returns (string)
```



*Returns the token collection name.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

### ownerOf

```solidity
function ownerOf(uint256 _tokenId) external view returns (address)
```

Find the owner of an SBT

*SBTs assigned to zero address are considered invalid, and queries  about them do throw.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _tokenId | uint256 | The identifier for an SBT |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | The address of the owner of the SBT |

### supportsInterface

```solidity
function supportsInterface(bytes4 interfaceId) external view returns (bool)
```



*Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section] to learn more about how these ids are created. This function call must use less than 30 000 gas.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| interfaceId | bytes4 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### symbol

```solidity
function symbol() external view returns (string)
```



*Returns the token collection symbol.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

### tokenURI

```solidity
function tokenURI(uint256 tokenId) external view returns (string)
```



*Returns the Uniform Resource Identifier (URI) for `tokenId` token.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |



## Events

### Burn

```solidity
event Burn(address indexed _owner, uint256 indexed _tokenId)
```



*This emits when an SBT is burned  This event emits when SBTs are destroyed*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _owner `indexed` | address | undefined |
| _tokenId `indexed` | uint256 | undefined |

### Mint

```solidity
event Mint(address indexed _owner, uint256 indexed _tokenId)
```



*This emits when an SBT is newly minted.  This event emits when SBTs are created*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _owner `indexed` | address | undefined |
| _tokenId `indexed` | uint256 | undefined |



