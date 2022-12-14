/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Task3, Task3Interface } from "../Task3";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "AmountToSmall",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "message",
        type: "string",
      },
    ],
    name: "HasNotdeposited",
    type: "error",
  },
  {
    inputs: [],
    name: "NotcontractOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "addFund",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
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
  {
    inputs: [],
    name: "getUserDetail",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "age",
            type: "uint256",
          },
        ],
        internalType: "struct Task3.User",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_age",
        type: "uint256",
      },
    ],
    name: "setUserDetails",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b50336080526080516106366100366000396000818160d5015261029e01526106366000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80638b326ec21161005b5780638b326ec2146100b25780638da5cb5b146100d0578063b6b55f251461010f578063c71daccb1461012257600080fd5b806308f6f76e14610082578063346c96e9146100975780633ccfd60b146100aa575b600080fd5b610095610090366004610489565b610140565b005b6100956100a5366004610501565b6101b7565b610095610293565b6100ba610303565b6040516100c7919061051a565b60405180910390f35b6100f77f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016100c7565b61009561011d366004610501565b6103d1565b336000908152600160205260409020546040519081526020016100c7565b6040805160606020601f8601819004028201810183529181018481529091829190869086908190850183828082843760009201829052509385525050506020918201849052338152808252604090208251805191926101a4928492909101906103f0565b5060208201518160010155905050505050565b3360009081526001602052604090205461023f57604051637b40ba6760e11b815260206004820152603760248201527f506c6561736520796f75206d757374206465706f73697420666972737420757360448201527f696e6720746865206465706f7369742066756e63696f6e00000000000000000060648201526084015b60405180910390fd5b80662386f26fc1000081101561026b5760405163a1280b4b60e01b815260048101829052602401610236565b336000908152600160205260408120805484929061028a908490610596565b90915550505050565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146102dc576040516336fca8d760e01b815260040160405180910390fd5b3360009081526001602052604081208054918291906102fb83806105ae565b909155505050565b60408051808201909152606081526000602082015233600090815260208190526040908190208151808301909252805482908290610340906105c5565b80601f016020809104026020016040519081016040528092919081815260200182805461036c906105c5565b80156103b95780601f1061038e576101008083540402835291602001916103b9565b820191906000526020600020905b81548152906001019060200180831161039c57829003601f168201915b50505050508152602001600182015481525050905090565b33600090815260016020526040812080548392906102fb908490610596565b8280546103fc906105c5565b90600052602060002090601f01602090048101928261041e5760008555610464565b82601f1061043757805160ff1916838001178555610464565b82800160010185558215610464579182015b82811115610464578251825591602001919060010190610449565b50610470929150610474565b5090565b5b808211156104705760008155600101610475565b60008060006040848603121561049e57600080fd5b833567ffffffffffffffff808211156104b657600080fd5b818601915086601f8301126104ca57600080fd5b8135818111156104d957600080fd5b8760208285010111156104eb57600080fd5b6020928301989097509590910135949350505050565b60006020828403121561051357600080fd5b5035919050565b600060208083528351604082850152805180606086015260005b8181101561055057828101840151868201608001528301610534565b81811115610562576000608083880101525b50949091015160408401525050601f91909101601f19160160800190565b634e487b7160e01b600052601160045260246000fd5b600082198211156105a9576105a9610580565b500190565b6000828210156105c0576105c0610580565b500390565b600181811c908216806105d957607f821691505b602082108114156105fa57634e487b7160e01b600052602260045260246000fd5b5091905056fea26469706673582212203a63e8fe5ba113d1c9175ed40259aeba4937e2588ad1bb2f4795131ab776d0ac64736f6c63430008090033";

type Task3ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Task3ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Task3__factory extends ContractFactory {
  constructor(...args: Task3ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Task3";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Task3> {
    return super.deploy(overrides || {}) as Promise<Task3>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Task3 {
    return super.attach(address) as Task3;
  }
  connect(signer: Signer): Task3__factory {
    return super.connect(signer) as Task3__factory;
  }
  static readonly contractName: "Task3";
  public readonly contractName: "Task3";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Task3Interface {
    return new utils.Interface(_abi) as Task3Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Task3 {
    return new Contract(address, _abi, signerOrProvider) as Task3;
  }
}
