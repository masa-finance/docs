# IOAppOptionsType3



> IOAppOptionsType3



*Interface for the OApp with Type 3 Options, allowing the setting and combining of enforced options.*

## Methods

### combineOptions

```solidity
function combineOptions(uint32 _eid, uint16 _msgType, bytes _extraOptions) external view returns (bytes options)
```

Combines options for a given endpoint and message type.



#### Parameters

| Name | Type | Description |
|---|---|---|
| _eid | uint32 | The endpoint ID. |
| _msgType | uint16 | The OApp message type. |
| _extraOptions | bytes | Additional options passed by the caller. |

#### Returns

| Name | Type | Description |
|---|---|---|
| options | bytes | The combination of caller specified options AND enforced options. |

### setEnforcedOptions

```solidity
function setEnforcedOptions(EnforcedOptionParam[] _enforcedOptions) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _enforcedOptions | EnforcedOptionParam[] | undefined |



## Events

### EnforcedOptionSet

```solidity
event EnforcedOptionSet(EnforcedOptionParam[] _enforcedOptions)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _enforcedOptions  | EnforcedOptionParam[] | undefined |



## Errors

### InvalidOptions

```solidity
error InvalidOptions(bytes options)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| options | bytes | undefined |


