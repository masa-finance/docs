# EpochRewards









## Methods

### DEFAULT_ADMIN_ROLE

```solidity
function DEFAULT_ADMIN_ROLE() external view returns (bytes32)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined |

### addRewards

```solidity
function addRewards(uint256 _amount) external nonpayable
```



*Allows the admin to add MasaToken to the reward pool.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _amount | uint256 | The amount of MasaToken to add to the reward pool. |

### currentEpoch

```solidity
function currentEpoch() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### distributeRewards

```solidity
function distributeRewards(address _actorAddress) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _actorAddress | address | undefined |

### getRewards

```solidity
function getRewards(address _actorAddress) external view returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _actorAddress | address | undefined |

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
function masaToken() external view returns (contract IERC20)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract IERC20 | undefined |

### oracleUtilityTracker

```solidity
function oracleUtilityTracker() external view returns (contract IUtilityTracker)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract IUtilityTracker | undefined |

### pause

```solidity
function pause() external nonpayable
```



*Pauses all staking and unstaking functions. Only callable by accounts with the DEFAULT_ADMIN_ROLE.*


### paused

```solidity
function paused() external view returns (bool)
```



*Returns true if the contract is paused, and false otherwise.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### protocolStaking

```solidity
function protocolStaking() external view returns (contract IProtocolStaking)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract IProtocolStaking | undefined |

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

### rescueNativeToken

```solidity
function rescueNativeToken(uint256 _amount, address _receiver) external nonpayable
```

Transfer native tokens. Only callable by accounts with the DEFAULT_ADMIN_ROLE.



#### Parameters

| Name | Type | Description |
|---|---|---|
| _amount | uint256 | Token amount |
| _receiver | address | Receiver address |

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

### setOracleUtilityTracker

```solidity
function setOracleUtilityTracker(address _oracleUtilityTracker) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _oracleUtilityTracker | address | undefined |

### setValidatorUtilityTracker

```solidity
function setValidatorUtilityTracker(address _validatorUtilityTracker) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _validatorUtilityTracker | address | undefined |

### setWorkerUtilityTracker

```solidity
function setWorkerUtilityTracker(address _workerUtilityTracker) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _workerUtilityTracker | address | undefined |

### startNewEpoch

```solidity
function startNewEpoch() external nonpayable
```






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

### totalRewards

```solidity
function totalRewards() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### unpause

```solidity
function unpause() external nonpayable
```



*Unpauses all staking and unstaking functions. Only callable by accounts with the DEFAULT_ADMIN_ROLE.*


### validatorUtilityTracker

```solidity
function validatorUtilityTracker() external view returns (contract IUtilityTracker)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract IUtilityTracker | undefined |

### workerUtilityTracker

```solidity
function workerUtilityTracker() external view returns (contract IUtilityTracker)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract IUtilityTracker | undefined |



## Events

### EpochStarted

```solidity
event EpochStarted(uint256 epochIndex)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| epochIndex  | uint256 | undefined |

### Paused

```solidity
event Paused(address account)
```



*Emitted when the pause is triggered by `account`.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| account  | address | undefined |

### RewardsDistributed

```solidity
event RewardsDistributed(uint256 epochIndex, address indexed beneficiary, uint256 reward)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| epochIndex  | uint256 | undefined |
| beneficiary `indexed` | address | undefined |
| reward  | uint256 | undefined |

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

### Unpaused

```solidity
event Unpaused(address account)
```



*Emitted when the pause is lifted by `account`.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| account  | address | undefined |



