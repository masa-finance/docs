---
id: 1-create-environment
title: 1. Create Environment
---

## Get a runpod account

Sign up for a [Runpod](https://runpod.io) account and head to [pods](https://www.runpod.io/console/pods)

![Bittensor Environment Setup](./1-create-environment.png)

## Deploy a pod

Click "deploy a pod" and edit the default configuration via "edit template".

![Bittensor Environment Setup](./2-select-cpu.png)

## Add exposed port

Add port 8000 as an exposed port - this will allow you to access the validator API docs after startup. We'll also need a symmetric port to run the validator on - in runpod, symmetric ports can be defined by using port 70000 and above. Upon deployment, you will be assigned a symmetrical port number to run a validator from. Also be sure to set container disk to 20GB.

![Bittensor Environment Setup](./pod-configuration.png)
