# Masa Analytics SDK
 / [Exports](modules.md)

## Installation

yarn  
`yarn add @masa-finance/analytics-sdk --save`

npm  
`npm i @masa-finance/analytics-sdk --save`

## Usage

```typescript
import { BaseEventData, EventType } from "@masa-finance/analytics-sdk";

const logEvent = async ({
  type,
  user_address,
  client_id,
  event_data,
  endpoint,
}: {
  type: EventType;
  user_address?: string;
  event_data: BaseEventData;
  endpoint: string;
  client_id?: string;
}): Promise<Event | undefined> => {
  return logEvent({
    type,
    user_address,
    client_id,
    event_data,
    endpoint,
  });
};
```
