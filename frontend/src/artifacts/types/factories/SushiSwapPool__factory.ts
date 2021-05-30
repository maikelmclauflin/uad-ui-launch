/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { SushiSwapPool } from "../SushiSwapPool";

export class SushiSwapPool__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _manager: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SushiSwapPool> {
    return super.deploy(_manager, overrides || {}) as Promise<SushiSwapPool>;
  }
  getDeployTransaction(
    _manager: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_manager, overrides || {});
  }
  attach(address: string): SushiSwapPool {
    return super.attach(address) as SushiSwapPool;
  }
  connect(signer: Signer): SushiSwapPool__factory {
    return super.connect(signer) as SushiSwapPool__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SushiSwapPool {
    return new Contract(address, _abi, signerOrProvider) as SushiSwapPool;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_manager",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "factory",
    outputs: [
      {
        internalType: "contract IUniswapV2Factory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "manager",
    outputs: [
      {
        internalType: "contract UbiquityAlgorithmicDollarManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pair",
    outputs: [
      {
        internalType: "contract IUniswapV2Pair",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052600080546001600160a01b03191673c0aee478e3658e2610c5f7a4a2e1777ce9e4f2ac17905534801561003657600080fd5b5060405161064138038061064183398101604081905261005591610565565b600180546001600160a01b0319166001600160a01b0383169081179091556040805163bc2ec02f60e01b815290516000929163bc2ec02f916004808301926020929190829003018186803b1580156100ac57600080fd5b505afa1580156100c0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100e49190610565565b6001600160a01b031614156101405760405162461bcd60e51b815260206004820152601360248201527f7541442041646472657373206e6f74207365740000000000000000000000000060448201526064015b60405180910390fd5b6001546040805162d8d5c960e71b815290516000926001600160a01b031691636c6ae480916004808301926020929190829003018186803b15801561018457600080fd5b505afa158015610198573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101bc9190610565565b6001600160a01b031614156102135760405162461bcd60e51b815260206004820152601460248201527f75474f562041646472657373206e6f74207365740000000000000000000000006044820152606401610137565b600080546001546040805163bc2ec02f60e01b815290516001600160a01b039384169363e6a4390593169163bc2ec02f916004808301926020929190829003018186803b15801561026357600080fd5b505afa158015610277573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061029b9190610565565b600160009054906101000a90046001600160a01b03166001600160a01b0316636c6ae4806040518163ffffffff1660e01b815260040160206040518083038186803b1580156102e957600080fd5b505afa1580156102fd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103219190610565565b6040516001600160e01b031960e085901b1681526001600160a01b0392831660048201529116602482015260440160206040518083038186803b15801561036757600080fd5b505afa15801561037b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061039f9190610565565b90506001600160a01b03811661053f576000546001546040805163bc2ec02f60e01b815290516001600160a01b039384169363c9c6539693169163bc2ec02f916004808301926020929190829003018186803b1580156103fe57600080fd5b505afa158015610412573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104369190610565565b600160009054906101000a90046001600160a01b03166001600160a01b0316636c6ae4806040518163ffffffff1660e01b815260040160206040518083038186803b15801561048457600080fd5b505afa158015610498573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104bc9190610565565b6040516001600160e01b031960e085901b1681526001600160a01b03928316600482015291166024820152604401602060405180830381600087803b15801561050457600080fd5b505af1158015610518573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061053c9190610565565b90505b600280546001600160a01b0319166001600160a01b039290921691909117905550610593565b600060208284031215610576578081fd5b81516001600160a01b038116811461058c578182fd5b9392505050565b60a0806105a16000396000f3fe6080604052348015600f57600080fd5b5060043610603c5760003560e01c8063481c6a75146041578063a8aa1b3114606f578063c45a0155146081575b600080fd5b6001546053906001600160a01b031681565b6040516001600160a01b03909116815260200160405180910390f35b6002546053906001600160a01b031681565b6000546053906001600160a01b03168156fea164736f6c6343000803000a";