/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  SendToFallback,
  SendToFallbackInterface,
} from "../SendToFallback";

const _abi = [
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_to",
        type: "address",
      },
    ],
    name: "callFallback",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_to",
        type: "address",
      },
    ],
    name: "transferToFallback",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610193806100206000396000f3fe6080604052600436106100295760003560e01c80636ba87a531461002e578063cfc6cdaa14610043575b600080fd5b61004161003c36600461012d565b610056565b005b61004161005136600461012d565b6100f8565b6000816001600160a01b03163460405160006040518083038185875af1925050503d80600081146100a3576040519150601f19603f3d011682016040523d82523d6000602084013e6100a8565b606091505b50509050806100f45760405162461bcd60e51b81526020600482015260146024820152732330b4b632b2103a379039b2b7321022ba3432b960611b604482015260640160405180910390fd5b5050565b6040516001600160a01b038216903480156108fc02916000818181858888f193505050501580156100f4573d6000803e3d6000fd5b60006020828403121561013f57600080fd5b81356001600160a01b038116811461015657600080fd5b939250505056fea264697066735822122062591f2af22db5675264cfe642d529c29394f8e6eecede732913d9cb36fa127764736f6c634300080d0033";

type SendToFallbackConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SendToFallbackConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SendToFallback__factory extends ContractFactory {
  constructor(...args: SendToFallbackConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "SendToFallback";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SendToFallback> {
    return super.deploy(overrides || {}) as Promise<SendToFallback>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SendToFallback {
    return super.attach(address) as SendToFallback;
  }
  connect(signer: Signer): SendToFallback__factory {
    return super.connect(signer) as SendToFallback__factory;
  }
  static readonly contractName: "SendToFallback";
  public readonly contractName: "SendToFallback";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SendToFallbackInterface {
    return new utils.Interface(_abi) as SendToFallbackInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SendToFallback {
    return new Contract(address, _abi, signerOrProvider) as SendToFallback;
  }
}
