# Identity Contract Usage in Go

This README describes how to interact with the Masa Identity Contract using the Go programming language and the `go-ethereum` package. 

## Prerequisites

Ensure you have the following installed on your machine:

1. Golang: You can download it from the [official Golang website](https://golang.org/dl/).
2. `geth` (Go Ethereum): You can download it from the [official Go Ethereum GitHub repository](https://github.com/ethereum/go-ethereum/wiki/geth).
3. `solc` (Solidity Compiler): You can download it from the [official Solidity GitHub repository](https://github.com/ethereum/solidity).

## Setup 

First, clone the repository:

```bash
git clone https://github.com/masa-finance/masa-oracle.git
cd masa-oracle
```

## Generate Go Bindings

Next, generate the Go bindings for the Masa Identity contract:

```bash
abigen --abi=/path/to/your/contract.abi --pkg=yourPackageName --out=/path/to/output/file.go
```

Replace `/path/to/your/contract.abi` with the path to your contract's ABI file, `yourPackageName` with the name you want to give to the generated Go package, and `/path/to/output/file.go` with the path where you want the generated Go file to be saved.

After running this command, a new `.go` file should be generated. This file contains a `BoundContract` with all the methods of your contract.

## Running mid.go 

Finally, ensure that `mid.go` is in the same directory as your generated `.go` file. Then run the `mid.go` file:

```bash
go run mid.go
```

## Docker Setup

If you prefer to run the project using Docker, you can use the following steps:

1. Ensure Docker is installed on your machine.
2. Build the Docker image:

```bash
docker build -t masa-oracle .
```

3. Run the Docker container:

```bash
docker run -it --name masa-oracle-container masa-oracle
```

---

Please replace the placeholders with the actual paths and names for your setup. You may also want to adjust the instructions according to your actual contract's methods and parameters.