# IOFT



> IOFT



*Interface for the OftChain (OFT) token.Does not inherit ERC20 to accommodate usage by OFTAdapter as well.This specific interface ID is &#39;0x02e49c2c&#39;.*

## Methods

### approvalRequired

```solidity
function approvalRequired() external view returns (bool)
```

Indicates whether the OFT contract requires approval of the &#39;token()&#39; to send.

*Allows things like wallet implementers to determine integration requirements, without understanding the underlying token implementation.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | requiresApproval Needs approval of the underlying token implementation. |

### oftVersion

```solidity
function oftVersion() external view returns (bytes4 interfaceId, uint64 version)
```

Retrieves interfaceID and the version of the OFT.

*interfaceId: This specific interface ID is &#39;0x02e49c2c&#39;.version: Indicates a cross-chain compatible msg encoding with other OFTs.If a new feature is added to the OFT cross-chain msg encoding, the version will be incremented. ie. localOFT version(x,1) CAN send messages to remoteOFT version(x,1)*


#### Returns

| Name | Type | Description |
|---|---|---|
| interfaceId | bytes4 | The interface ID. |
| version | uint64 | The version. |

### quoteOFT

```solidity
function quoteOFT(SendParam _sendParam) external view returns (struct OFTLimit, struct OFTFeeDetail[] oftFeeDetails, struct OFTReceipt)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _sendParam | SendParam | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | OFTLimit | undefined |
| oftFeeDetails | OFTFeeDetail[] | undefined |
| _2 | OFTReceipt | undefined |

### quoteSend

```solidity
function quoteSend(SendParam _sendParam, bool _payInLzToken) external view returns (struct MessagingFee)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _sendParam | SendParam | undefined |
| _payInLzToken | bool | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | MessagingFee | undefined |

### send

```solidity
function send(SendParam _sendParam, MessagingFee _fee, address _refundAddress) external payable returns (struct MessagingReceipt, struct OFTReceipt)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _sendParam | SendParam | undefined |
| _fee | MessagingFee | undefined |
| _refundAddress | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | MessagingReceipt | undefined |
| _1 | OFTReceipt | undefined |

### sharedDecimals

```solidity
function sharedDecimals() external view returns (uint8)
```

Retrieves the shared decimals of the OFT.




#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint8 | sharedDecimals The shared decimals of the OFT. |

### token

```solidity
function token() external view returns (address)
```

Retrieves the address of the token associated with the OFT.




#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | token The address of the ERC20 token implementation. |



## Events

### OFTReceived

```solidity
event OFTReceived(bytes32 indexed guid, uint32 srcEid, address indexed toAddress, uint256 amountReceivedLD)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| guid `indexed` | bytes32 | undefined |
| srcEid  | uint32 | undefined |
| toAddress `indexed` | address | undefined |
| amountReceivedLD  | uint256 | undefined |

### OFTSent

```solidity
event OFTSent(bytes32 indexed guid, uint32 dstEid, address indexed fromAddress, uint256 amountSentLD, uint256 amountReceivedLD)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| guid `indexed` | bytes32 | undefined |
| dstEid  | uint32 | undefined |
| fromAddress `indexed` | address | undefined |
| amountSentLD  | uint256 | undefined |
| amountReceivedLD  | uint256 | undefined |



## Errors

### InvalidLocalDecimals

```solidity
error InvalidLocalDecimals()
```






### SlippageExceeded

```solidity
error SlippageExceeded(uint256 amountLD, uint256 minAmountLD)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| amountLD | uint256 | undefined |
| minAmountLD | uint256 | undefined |


