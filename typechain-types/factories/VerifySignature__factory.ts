/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  VerifySignature,
  VerifySignatureInterface,
} from "../VerifySignature";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_messageHash",
        type: "bytes32",
      },
    ],
    name: "getEthSignedMessageHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_message",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_nonce",
        type: "uint256",
      },
    ],
    name: "getMessageHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_ethSignedMessageHash",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "recoverSigner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "sig",
        type: "bytes",
      },
    ],
    name: "splitSignature",
    outputs: [
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_signer",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_message",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_nonce",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "verify",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506105d0806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c806397aba7f91461005c578063a35f8a401461008c578063a7bb5803146100ad578063abe5026a146100de578063fa54080114610101575b600080fd5b61006f61006a366004610383565b610114565b6040516001600160a01b0390911681526020015b60405180910390f35b61009f61009a3660046103e6565b610193565b604051908152602001610083565b6100c06100bb366004610445565b6101cc565b60408051938452602084019290925260ff1690820152606001610083565b6100f16100ec366004610482565b610244565b6040519015158152602001610083565b61009f61010f366004610519565b61028d565b600080600080610123856101cc565b6040805160008152602081018083528b905260ff8316918101919091526060810184905260808101839052929550909350915060019060a0016020604051602081039080840390855afa15801561017e573d6000803e3d6000fd5b5050604051601f190151979650505050505050565b6000848484846040516020016101ac9493929190610532565b604051602081830303815290604052805190602001209050949350505050565b600080600083516041146102265760405162461bcd60e51b815260206004820152601860248201527f696e76616c6964207369676e6174757265206c656e6774680000000000000000604482015260640160405180910390fd5b50505060208101516040820151606090920151909260009190911a90565b60008061025387878787610193565b905060006102608261028d565b9050886001600160a01b03166102768286610114565b6001600160a01b0316149998505050505050505050565b6040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c8101829052600090605c01604051602081830303815290604052805190602001209050919050565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261030757600080fd5b813567ffffffffffffffff80821115610322576103226102e0565b604051601f8301601f19908116603f0116810190828211818310171561034a5761034a6102e0565b8160405283815286602085880101111561036357600080fd5b836020870160208301376000602085830101528094505050505092915050565b6000806040838503121561039657600080fd5b82359150602083013567ffffffffffffffff8111156103b457600080fd5b6103c0858286016102f6565b9150509250929050565b80356001600160a01b03811681146103e157600080fd5b919050565b600080600080608085870312156103fc57600080fd5b610405856103ca565b935060208501359250604085013567ffffffffffffffff81111561042857600080fd5b610434878288016102f6565b949793965093946060013593505050565b60006020828403121561045757600080fd5b813567ffffffffffffffff81111561046e57600080fd5b61047a848285016102f6565b949350505050565b60008060008060008060c0878903121561049b57600080fd5b6104a4876103ca565b95506104b2602088016103ca565b945060408701359350606087013567ffffffffffffffff808211156104d657600080fd5b6104e28a838b016102f6565b94506080890135935060a08901359150808211156104ff57600080fd5b5061050c89828a016102f6565b9150509295509295509295565b60006020828403121561052b57600080fd5b5035919050565b6bffffffffffffffffffffffff198560601b1681528360148201526000835160005b818110156105715760208187018101516034868401015201610554565b81811115610583576000603483860101525b50603492019182019290925260540194935050505056fea26469706673582212206202e1009851ae3a9391ccf37d4d8c7fa867a51a7d8dee947f9252c81c10b83064736f6c634300080d0033";

type VerifySignatureConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VerifySignatureConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class VerifySignature__factory extends ContractFactory {
  constructor(...args: VerifySignatureConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "VerifySignature";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<VerifySignature> {
    return super.deploy(overrides || {}) as Promise<VerifySignature>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): VerifySignature {
    return super.attach(address) as VerifySignature;
  }
  connect(signer: Signer): VerifySignature__factory {
    return super.connect(signer) as VerifySignature__factory;
  }
  static readonly contractName: "VerifySignature";
  public readonly contractName: "VerifySignature";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VerifySignatureInterface {
    return new utils.Interface(_abi) as VerifySignatureInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VerifySignature {
    return new Contract(address, _abi, signerOrProvider) as VerifySignature;
  }
}
