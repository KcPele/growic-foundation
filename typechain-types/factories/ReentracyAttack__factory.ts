/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ReentracyAttack,
  ReentracyAttackInterface,
} from "../ReentracyAttack";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_etherStoreAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "attack",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "etherStore",
    outputs: [
      {
        internalType: "contract EtherStore",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getBalance",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516102ed3803806102ed83398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610084565b60006020828403121561006657600080fd5b81516001600160a01b038116811461007d57600080fd5b9392505050565b61025a806100936000396000f3fe6080604052600436106100345760003560e01c806312065fe0146100ad5780639e5faafc146100cd578063acd2e6e5146100d5575b600054670de0b6b3a76400006001600160a01b0390911631106100ab576000805460408051633ccfd60b60e01b815290516001600160a01b0390921692633ccfd60b9260048084019382900301818387803b15801561009257600080fd5b505af11580156100a6573d6000803e3d6000fd5b505050505b005b3480156100b957600080fd5b506040514781526020015b60405180910390f35b6100ab61010d565b3480156100e157600080fd5b506000546100f5906001600160a01b031681565b6040516001600160a01b0390911681526020016100c4565b670de0b6b3a76400003410156101595760405162461bcd60e51b815260206004820152600d60248201526c195d1a081d1bdbc81cdb585b1b609a1b604482015260640160405180910390fd5b60008054906101000a90046001600160a01b03166001600160a01b031663d0e30db0670de0b6b3a76400006040518263ffffffff1660e01b81526004016000604051808303818588803b1580156101af57600080fd5b505af11580156101c3573d6000803e3d6000fd5b50506000805460408051633ccfd60b60e01b815290516001600160a01b039092169550633ccfd60b9450600480820194509082900301818387803b15801561020a57600080fd5b505af115801561021e573d6000803e3d6000fd5b5050505056fea26469706673582212201e792bf0fdbf4aef45008fa7a6007fd13909d20c7696bbc1b09974721bf6650e64736f6c634300080d0033";

type ReentracyAttackConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ReentracyAttackConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ReentracyAttack__factory extends ContractFactory {
  constructor(...args: ReentracyAttackConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ReentracyAttack";
  }

  deploy(
    _etherStoreAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ReentracyAttack> {
    return super.deploy(
      _etherStoreAddress,
      overrides || {}
    ) as Promise<ReentracyAttack>;
  }
  getDeployTransaction(
    _etherStoreAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_etherStoreAddress, overrides || {});
  }
  attach(address: string): ReentracyAttack {
    return super.attach(address) as ReentracyAttack;
  }
  connect(signer: Signer): ReentracyAttack__factory {
    return super.connect(signer) as ReentracyAttack__factory;
  }
  static readonly contractName: "ReentracyAttack";
  public readonly contractName: "ReentracyAttack";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ReentracyAttackInterface {
    return new utils.Interface(_abi) as ReentracyAttackInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ReentracyAttack {
    return new Contract(address, _abi, signerOrProvider) as ReentracyAttack;
  }
}
