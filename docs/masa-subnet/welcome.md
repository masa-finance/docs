---
title: Welcome to Masa Bittensor Subnet
---

The Masa Bittensor Subnet is a specialized subnet where validators reward miners based on their ability to provide Twitter data. Requests made through the Validator API are forwarded to the miners, who use the Masa protocol to execute the work. Work is then scored by the validators, and valid reponses are returned through the API.

To get started, follow **[this walkthrough](./setup/intro.md).**

## Features

### 1. Validator API Endpoints

1. **Twitter Profile Endpoint**

    - `GET /data/twitter/profile/{handle}`


2. **Twitter Followers Endpoint**

    - `GET /data/twitter/followers/{handle}`


3. **Recent Tweets Endpoint**
   
    - `POST /data/twitter/tweets/recent`
    - **Body:** `{ "query": "keyword", "count": 10 }`


4. **Web Scraper Endpoint**
   
    - `POST /data/web`
    - **Body:** `{ "url": "https://github.com", "depth": 1 }`


5. **Discord Profile Endpoint**

    - `GET /data/discord/profile/{user_id}`

### 2. Validator Forwarding Functions

Each endpoint has a corresponding forward function defined in the `masa/validator/twitter` directory. These functions handle the forwarding of requests to the miners and the processing of their responses. For example, the forward function for the Profiles endpoint is defined in `masa/validator/twitter/profile/forward.py`

```python
class ProfileForwarder(Forwarder):

    def __init__(self, validator):
        super(ProfileForwarder, self).__init__(validator)


    async def forward_query(self, query):
        try:
            return await self.forward(request=Request(query=query, type=RequestType.TWITTER_PROFILE.value), get_rewards=get_rewards, parser_object=TwitterProfileObject)

        except Exception as e:
            bt.logging.error(f"Error during the handle responses process: {str(e)}", exc_info=True)
            return []
```

### 3. Responsive Miners

Each miner returns a response containing the requested Twitter data. For example, the miner's response for a Twitter profile request is defined in `masa/miner/twitter/profile.py`:

```python
    def __init__(self):
        super().__init__()

    def get_profile(self, profile) -> TwitterProfileObject:
        bt.logging.info(f"Getting profile from worker {profile}")
        response = self.get(f"/data/twitter/profile/{profile}")

        if response.status_code == 504:
            bt.logging.error("Worker request failed")
            return None
        twitter_profile = self.format_profile(response)

        return twitter_profile

    def format_profile(self, data: requests.Response) -> TwitterProfileObject:
        bt.logging.info(f"Formatting twitter profile data: {data}")
        profile_data = data.json()['data']
        twitter_profile = TwitterProfileObject(**profile_data)
```

### 4. Modular Rewards

Each miner is scored based on specific criteria defined by the module. Each module has its own `reward.py` file to determine how rewards are distributed. Scoring calculation logic is defined in the `masa/validator/twitter` directory.

### 5. Verified Responses

The API returns a response containing the data from each miner in an array. For example, a response from the `profile` endpoint might look like this:

```json
[
  {
    "UserID": "1419111693112676353",
    "Avatar": "https://pbs.twimg.com/profile_images/1719781248925831169/kC0UzpkB_normal.jpg",
    "Banner": "https://pbs.twimg.com/profile_banners/1419111693112676353/1712165646",
    "Biography": "The Decentralized AI Data and LLM Network.\n\nOwn, share, and earn from your data and compute to power AI applications.\n\nJoin us: https://t.co/3jsTLxWZkQ",
    "Birthday": "",
    "FollowersCount": 224690,
    "FollowingCount": 3161,
    "FriendsCount": 76,
    "IsPrivate": false,
    "IsVerified": false,
    "Joined": "2021-07-25T01:49:00Z",
    "LikesCount": 3161,
    "ListedCount": 412,
    "Location": "⛓",
    "Name": "Masa",
    "PinnedTweetIDs": ["1792890544206573891"],
    "TweetsCount": 1876,
    "URL": "https://twitter.com/getmasafi",
    "Username": "getmasafi",
    "Website": "https://www.masa.ai/"
  }
]
```
