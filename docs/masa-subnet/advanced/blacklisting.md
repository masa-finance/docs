# Blacklisting

## VPermit Filter

To remove the miner accepting any request warning, pass the following flag to toggle on checking for a `vpermit` in the blacklisting function:

```bash
python neurons/miner.py --blacklist.force_validator_permit
```

## Stake Filter

Additionally, our blacklisting function extends that of the subnet-template and checks for a certain amount of stake, updated every tempo:

```python
async def blacklist(self, synapse: Request) -> typing.Tuple[bool, str]:

    if self.check_tempo(synapse):
        await self.check_stake(synapse)

    hotkey = synapse.dendrite.hotkey
    uid = self.metagraph.hotkeys.index(hotkey)

    bt.logging.info(f"Neurons Staked: {self.neurons_permit_stake}")
    bt.logging.info(f"Validator Permit: {self.metagraph.validator_permit[uid]}")

    if not self.config.blacklist.allow_non_registered and hotkey not in self.metagraph.hotkeys:
        bt.logging.warning(f"Blacklisting un-registered hotkey {hotkey}")
        return True, "Unrecognized hotkey"
    if self.config.blacklist.force_validator_permit and not self.metagraph.validator_permit[uid]:
        bt.logging.warning(f"Blacklisting a request from non-validator hotkey {hotkey}")
        return True, "Non-validator hotkey"
    if hotkey not in self.neurons_permit_stake.keys():
        bt.logging.warning(f"Blacklisting a request from neuron without enough staked: {hotkey}")
        return True, "Non-staked neuron"

    bt.logging.info(f"Not Blacklisting recognized hotkey {hotkey}")
    return False, "Hotkey recognized!"
```

A check for a certain amount of stake is added to the blacklisting function, updating every tempo. This creates the requirement that a neuron must have staked for at least the tempo amount of blocks to be considered valid. This prevents spam and ensures that the network is not overwhelmed by new neurons. Now, with the presence of both a `vpermit` and having your `hotkey` listed on the permit_stake whitelist, you are considered a validator.
