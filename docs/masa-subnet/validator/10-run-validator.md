---
id: 10-run-validator
title: 10. Run Validator
---

### Set Python Path

Be sure to set your python path before running the validator, or when you open a new terminal session.

```bash
export PYTHONPATH=$PYTHONPATH:$(pwd)
```

### Run Validator

```bash
make run-validator
```

Your validator should now be running. You can visit your runpod's public IP address on port 8000/docs to see the interactive documentation.
