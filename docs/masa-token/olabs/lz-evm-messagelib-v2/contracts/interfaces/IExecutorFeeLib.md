# IExecutorFeeLib









## Methods

### getFee

```solidity
function getFee(IExecutorFeeLib.FeeParams _params, IExecutor.DstConfig _dstConfig, bytes _options) external view returns (uint256 fee)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _params | IExecutorFeeLib.FeeParams | undefined |
| _dstConfig | IExecutor.DstConfig | undefined |
| _options | bytes | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| fee | uint256 | undefined |

### getFeeOnSend

```solidity
function getFeeOnSend(IExecutorFeeLib.FeeParams _params, IExecutor.DstConfig _dstConfig, bytes _options) external nonpayable returns (uint256 fee)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _params | IExecutorFeeLib.FeeParams | undefined |
| _dstConfig | IExecutor.DstConfig | undefined |
| _options | bytes | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| fee | uint256 | undefined |




## Errors

### Executor_EidNotSupported

```solidity
error Executor_EidNotSupported(uint32 eid)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| eid | uint32 | undefined |

### Executor_InvalidExecutorOptions

```solidity
error Executor_InvalidExecutorOptions(uint256 cursor)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| cursor | uint256 | undefined |

### Executor_NativeAmountExceedsCap

```solidity
error Executor_NativeAmountExceedsCap(uint256 amount, uint256 cap)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| amount | uint256 | undefined |
| cap | uint256 | undefined |

### Executor_NoOptions

```solidity
error Executor_NoOptions()
```






### Executor_UnsupportedOptionType

```solidity
error Executor_UnsupportedOptionType(uint8 optionType)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| optionType | uint8 | undefined |

### Executor_ZeroLzComposeGasProvided

```solidity
error Executor_ZeroLzComposeGasProvided()
```






### Executor_ZeroLzReceiveGasProvided

```solidity
error Executor_ZeroLzReceiveGasProvided()
```







