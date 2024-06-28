---
id: hardware-network-reqs
title: Hardware and Network Requirements
---
### Hardware Requirements

Nodes can run on any hardware for which you can build a golang application.

Our smallest nodes are running GCP on e2-standard-2 instances, with 2 vCPUs, 8GB RAM, and 10GB SCSI drives. This works well for running a node to test out the protocol, or you could even try running it on something much smaller for fun.

While a Masa Protocol node itself requires few resources to run on testnet, if you wish to create a worker node that performs a useful task, such as running an LLM model, your hardware choices should be dictated by the requirements of that task.

### Network Requirements

If your node will participate in the network as a "Worker," doing data scraping, or providing LLM, etc., you will need to open the following ports to inbound traffic:

- 4001 (TCP; UDP as well if behind NAT)
- 8080 (TCP)

- port 8080 is only required to provide access to the API, and can be changed with environment configuration.

- Only 4001 is required to be open publicly for participation in the p2p Masa Protocol network as a Worker node.

- A basic node will still find the bootnodes and register itself as part of the network without any specific inbound ports open.
