# ILinkableSBT









## Methods

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



