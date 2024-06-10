# Known Issues

## Setting Weights

Currently, setting the weights in our subnet is not functioning as expected. In the Bittensor protocol, setting the weights typically refers to adjusting the influence or importance of different nodes (miners and validators) within the network, which affects how rewards are distributed based on their contributions. This feature is crucial for maintaining a fair and efficient network operation. We are actively working to resolve this issue and will update the documentation once a fix is implemented.

## Miner Selection

Currently our validators forward work to all miners (and even other validators). We can filter the selection of available nodes to those without a vpermit. This can be done with the information provided in the [Bittensor docs](https://docs.bittensor.com/subnets/register-validate-mine#validator-permit). Currently, all of our nodes have a vpermit, which needs to be resolved first.

## Blacklisting

Blacklisting is one effective way to ensure miners are only receiving requests from valid validators. By filtering out calls coming from nodes without a vpermit, we are able to achieve this. Such an implementation would remove the current warning of: “You are allowing non-validators to send requests to your miner. This is a security risk.”

## Reward Calculations

While current reward calculations are unique to the data being requested, the logic is quite basic, and only verifies that the response objects adhere to a predefined schema. We plan to enhance this system, as it does not assess the accuracy or relevance of the data provided by the miners.
