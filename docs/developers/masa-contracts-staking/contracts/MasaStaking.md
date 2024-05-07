# MasaStaking







*Implementation of a staking contract for MasaToken. This contract allows users to stake their MasaTokens for a specified period and earn interest based on the staking period. The contract includes functionalities for staking, unstaking, and querying staked balances and earned interest.*

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

### canClaimStake

```solidity
function canClaimStake(address _user, uint256 _index) external view returns (bool canClaim)
```



*Determines if a stake is eligible for claiming based on the current timestamp.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _user | address | The address of the user querying claim eligibility. |
| _index | uint256 | The index of the stake within the user&#39;s array of stakes. |

#### Returns

| Name | Type | Description |
|---|---|---|
| canClaim | bool | True if the stake can be claimed, false otherwise. |

### canUnlockStake

```solidity
function canUnlockStake(address _user, uint256 _index) external view returns (bool canUnlock)
```



*Determines if a stake is eligible for unlocking based on the current timestamp.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _user | address | The address of the user querying unlock eligibility. |
| _index | uint256 | The index of the stake within the user&#39;s array of stakes. |

#### Returns

| Name | Type | Description |
|---|---|---|
| canUnlock | bool | True if the stake can be unlocked, false otherwise. |

### claim

```solidity
function claim(uint256 _index) external nonpayable
```



*Allows users to claim a specific stake identified by its index after the cooldown period has fully elapsed.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _index | uint256 | The index of the stake within the user&#39;s array of stakes to be claimed. |

### cooldownPeriod

```solidity
function cooldownPeriod() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### disableStaking

```solidity
function disableStaking() external nonpayable
```

Disables the staking functionality.

*This function can only be called by an account with the DEFAULT_ADMIN_ROLE. It sets the `stakingEnabled` state variable to false.*


### enableStaking

```solidity
function enableStaking() external nonpayable
```

Enables the staking functionality.

*This function can only be called by an account with the DEFAULT_ADMIN_ROLE. It sets the `stakingEnabled` state variable to true.*


### getPeriods

```solidity
function getPeriods() external view returns (uint256[])
```



*Returns the periods for which interest rates have been set.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256[] | An array of periods. |

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

### getUserStake

```solidity
function getUserStake(address _user, uint256 _index) external view returns (struct MasaStaking.StakeDetails)
```



*Returns details of a specific stake for a user, including whether it can be unstaked.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _user | address | The address of the user. |
| _index | uint256 | The index of the stake in the user&#39;s stakes array. |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | MasaStaking.StakeDetails | StakeDetails The details of the stake. |

### getUserStakeCount

```solidity
function getUserStakeCount(address _user) external view returns (uint256)
```



*Returns the number of stakes a user has made.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _user | address | The address of the user. |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | The number of stakes. |

### getUserStakedBalance

```solidity
function getUserStakedBalance(address _user) external view returns (uint256)
```



*Returns the total staked balance of a user by summing up the amounts in all their stakes.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _user | address | The address of the user whose total staked balance is being queried. |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | uint256 The total staked balance of the user. |

### getUserStakesWithInterest

```solidity
function getUserStakesWithInterest(address _user) external view returns (uint256[] principalAmounts, uint256[] interestEarned)
```



*Returns the principal amounts and interest earned for each stake of a user This function calculates the interest based on the elapsed time since each stake was made.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _user | address | The address of the user whose stakes and interest are being queried. |

#### Returns

| Name | Type | Description |
|---|---|---|
| principalAmounts | uint256[] | An array of the principal amounts for each stake of the user. |
| interestEarned | uint256[] | An array of the interest earned for each stake of the user. |

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

### interestRates

```solidity
function interestRates(uint256) external view returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### masaToken

```solidity
function masaToken() external view returns (contract IERC20)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract IERC20 | undefined |

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

### periods

```solidity
function periods(uint256) external view returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

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

### rescueERC20Token

```solidity
function rescueERC20Token(address _token, uint256 _amount, address _receiver) external nonpayable
```

Transfer tokens.



#### Parameters

| Name | Type | Description |
|---|---|---|
| _token | address | Token contract address |
| _amount | uint256 | Token amount |
| _receiver | address | Receiver address |

### rescueNativeToken

```solidity
function rescueNativeToken(uint256 _amount, address _receiver) external nonpayable
```

Transfer native tokens.



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

### rewardsNotReserved

```solidity
function rewardsNotReserved() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### rewardsReserved

```solidity
function rewardsReserved() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### secondsForPeriod

```solidity
function secondsForPeriod() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### setCooldownPeriod

```solidity
function setCooldownPeriod(uint256 _cooldownPeriod) external nonpayable
```



*Updates the cooldown period for unstaking. Only callable by accounts with the DEFAULT_ADMIN_ROLE.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _cooldownPeriod | uint256 | The new cooldown period in seconds. |

### setInterestRate

```solidity
function setInterestRate(uint256 _period, uint256 _rate) external nonpayable
```



*Updates the interest rate for a specific staking period. Only callable by accounts with the DEFAULT_ADMIN_ROLE.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _period | uint256 | The staking period to update the interest rate for. |
| _rate | uint256 | The new interest rate for the specified staking period. |

### stake

```solidity
function stake(uint256 _amount, uint256 _period) external nonpayable
```



*Allows users to stake a specified amount of MasaToken for a specified period. Stakes are recorded in the stakes mapping, and users are added to the allStakers array if they haven&#39;t staked before.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _amount | uint256 | The amount of MasaToken to be staked. |
| _period | uint256 | The period for which the MasaToken is staked, in months. |

### stakes

```solidity
function stakes(address, uint256) external view returns (uint256 amount, uint256 startTime, uint256 unlockTime, uint256 period, uint256 interestRate)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |
| _1 | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| amount | uint256 | undefined |
| startTime | uint256 | undefined |
| unlockTime | uint256 | undefined |
| period | uint256 | undefined |
| interestRate | uint256 | undefined |

### stakingEnabled

```solidity
function stakingEnabled() external view returns (bool)
```



*State variable to control the availability of staking functionality.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

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

### totalStaked

```solidity
function totalStaked() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### totalStakedForPeriod

```solidity
function totalStakedForPeriod(uint256) external view returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### unlock

```solidity
function unlock(uint256 _index) external nonpayable
```



*Allows users to unlock a specific stake identified by its index after the staking period has fully elapsed.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _index | uint256 | The index of the stake within the user&#39;s array of stakes to be unlocked. |

### unpause

```solidity
function unpause() external nonpayable
```



*Unpauses all staking and unstaking functions. Only callable by accounts with the DEFAULT_ADMIN_ROLE.*




## Events

### Claimed

```solidity
event Claimed(address indexed user, uint256 amount, uint256 reward, uint256 index)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| user `indexed` | address | undefined |
| amount  | uint256 | undefined |
| reward  | uint256 | undefined |
| index  | uint256 | undefined |

### CooldownPeriodUpdated

```solidity
event CooldownPeriodUpdated(address indexed by, uint256 cooldownPeriod)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| by `indexed` | address | undefined |
| cooldownPeriod  | uint256 | undefined |

### InterestRateUpdated

```solidity
event InterestRateUpdated(address indexed by, uint256 period, uint256 rate)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| by `indexed` | address | undefined |
| period  | uint256 | undefined |
| rate  | uint256 | undefined |

### Paused

```solidity
event Paused(address account)
```



*Emitted when the pause is triggered by `account`.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| account  | address | undefined |

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

### Staked

```solidity
event Staked(address indexed user, uint256 amount, uint256 startTime, uint256 period, uint256 interestRate, uint256 index)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| user `indexed` | address | undefined |
| amount  | uint256 | undefined |
| startTime  | uint256 | undefined |
| period  | uint256 | undefined |
| interestRate  | uint256 | undefined |
| index  | uint256 | undefined |

### StakingDisabled

```solidity
event StakingDisabled(address indexed by)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| by `indexed` | address | undefined |

### StakingEnabled

```solidity
event StakingEnabled(address indexed by)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| by `indexed` | address | undefined |

### Unlocked

```solidity
event Unlocked(address indexed user, uint256 amount, uint256 index)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| user `indexed` | address | undefined |
| amount  | uint256 | undefined |
| index  | uint256 | undefined |

### Unpaused

```solidity
event Unpaused(address account)
```



*Emitted when the pause is lifted by `account`.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| account  | address | undefined |



