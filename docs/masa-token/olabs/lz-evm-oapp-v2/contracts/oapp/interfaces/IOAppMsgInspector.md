# IOAppMsgInspector



> IOAppMsgInspector



*Interface for the OApp Message Inspector, allowing examination of message and options contents.*

## Methods

### inspect

```solidity
function inspect(bytes _message, bytes _options) external view returns (bool valid)
```

Allows the inspector to examine LayerZero message contents and optionally throw a revert if invalid.

*Optionally done as a revert, OR use the boolean provided to handle the failure.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _message | bytes | The message payload to be inspected. |
| _options | bytes | Additional options or parameters for inspection. |

#### Returns

| Name | Type | Description |
|---|---|---|
| valid | bool | A boolean indicating whether the inspection passed (true) or failed (false). |




## Errors

### InspectionFailed

```solidity
error InspectionFailed(bytes message, bytes options)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| message | bytes | undefined |
| options | bytes | undefined |


