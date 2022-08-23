/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Task1, Task1Interface } from "../Task1";

const _abi = [
  {
    inputs: [],
    name: "checkBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061036b806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063b6b55f251461003b578063c71daccb14610057575b600080fd5b61005560048036038101906100509190610259565b610075565b005b61005f610151565b60405161006c9190610295565b60405180910390f35b6100a17f93edbe88ad1cd4b86d183636d8d65f1087ce161c9aa2db6944daeff51587b29e60001b61021b565b6100cd7fbcb2b7c2b539b115edc8a45e72b547253e9b359981d5e61a4ffb82e424c0776e60001b61021b565b6100f97f0f251e280e7727695b5f8120d1591753df56faccc8fae9a7155ff1219dba1c7760001b61021b565b806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461014791906102df565b9250508190555050565b600061017f7f9b96af6d421fff32fcbaf7d4d82236525c0cc088d7d0fa9b357c96b193827f5160001b61021b565b6101ab7f9473d6c68c97531b8ceb9f24ae8e192fe5198c5bb62636a178391edb3a9b200360001b61021b565b6101d77fabdf470e25860c6958c892891c2a970ed93b41625511a7c84c5f07a7b4f0efb160001b61021b565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905090565b50565b600080fd5b6000819050919050565b61023681610223565b811461024157600080fd5b50565b6000813590506102538161022d565b92915050565b60006020828403121561026f5761026e61021e565b5b600061027d84828501610244565b91505092915050565b61028f81610223565b82525050565b60006020820190506102aa6000830184610286565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006102ea82610223565b91506102f583610223565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561032a576103296102b0565b5b82820190509291505056fea264697066735822122094a4d6111d954b8ee5c2881b469156ae6217ed65b67d93505a9261ff9e852ab764736f6c63430008090033";

type Task1ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Task1ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Task1__factory extends ContractFactory {
  constructor(...args: Task1ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Task1";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Task1> {
    return super.deploy(overrides || {}) as Promise<Task1>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Task1 {
    return super.attach(address) as Task1;
  }
  connect(signer: Signer): Task1__factory {
    return super.connect(signer) as Task1__factory;
  }
  static readonly contractName: "Task1";
  public readonly contractName: "Task1";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Task1Interface {
    return new utils.Interface(_abi) as Task1Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Task1 {
    return new Contract(address, _abi, signerOrProvider) as Task1;
  }
}
