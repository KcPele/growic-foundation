/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TokenSender, TokenSenderInterface } from "../TokenSender";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
    ],
    name: "getHash",
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
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "transfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610898806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80635c1823c81461003b578063dd506b4514610060575b600080fd5b61004e61004936600461069d565b610075565b60405190815260200160405180910390f35b61007361006e366004610708565b6100da565b005b6040516bffffffffffffffffffffffff19606087811b821660208401526034830187905285811b8216605484015284901b166068820152607c8101829052600090609c0160405160208183030381529060405280519060200120905095945050505050565b60006100e98787878787610075565b90506000610144826040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c8101829052600090605c01604051602081830303815290604052805190602001209050919050565b60008181526020819052604090205490915060ff161561019f5760405162461bcd60e51b8152602060048201526011602482015270416c72656164792065786563757465642160781b60448201526064015b60405180910390fd5b60006101ab8285610309565b9050886001600160a01b0316816001600160a01b03161461021a5760405162461bcd60e51b815260206004820152602360248201527f5369676e617475726520646f6573206e6f7420636f6d652066726f6d2073656e6044820152623232b960e91b6064820152608401610196565b600082815260208190526040808220805460ff19166001179055516323b872dd60e01b81526001600160a01b038b811660048301528981166024830152604482018b90528816906323b872dd90606401602060405180830381600087803b15801561028457600080fd5b505af1158015610298573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102bc91906107fd565b9050806102fd5760405162461bcd60e51b815260206004820152600f60248201526e151c985b9cd9995c8819985a5b1959608a1b6044820152606401610196565b50505050505050505050565b6000806000610318858561032d565b915091506103258161039d565b509392505050565b6000808251604114156103645760208301516040840151606085015160001a6103588782858561055b565b94509450505050610396565b82516040141561038e5760208301516040840151610383868383610648565b935093505050610396565b506000905060025b9250929050565b60008160048111156103b1576103b1610826565b14156103ba5750565b60018160048111156103ce576103ce610826565b141561041c5760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606401610196565b600281600481111561043057610430610826565b141561047e5760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610196565b600381600481111561049257610492610826565b14156104eb5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608401610196565b60048160048111156104ff576104ff610826565b14156105585760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b6064820152608401610196565b50565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115610592575060009050600361063f565b8460ff16601b141580156105aa57508460ff16601c14155b156105bb575060009050600461063f565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa15801561060f573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166106385760006001925092505061063f565b9150600090505b94509492505050565b6000806001600160ff1b0383168161066560ff86901c601b61083c565b90506106738782888561055b565b935093505050935093915050565b80356001600160a01b038116811461069857600080fd5b919050565b600080600080600060a086880312156106b557600080fd5b6106be86610681565b9450602086013593506106d360408701610681565b92506106e160608701610681565b949793965091946080013592915050565b634e487b7160e01b600052604160045260246000fd5b60008060008060008060c0878903121561072157600080fd5b61072a87610681565b95506020870135945061073f60408801610681565b935061074d60608801610681565b92506080870135915060a087013567ffffffffffffffff8082111561077157600080fd5b818901915089601f83011261078557600080fd5b813581811115610797576107976106f2565b604051601f8201601f19908116603f011681019083821181831017156107bf576107bf6106f2565b816040528281528c60208487010111156107d857600080fd5b8260208601602083013760006020848301015280955050505050509295509295509295565b60006020828403121561080f57600080fd5b8151801515811461081f57600080fd5b9392505050565b634e487b7160e01b600052602160045260246000fd5b6000821982111561085d57634e487b7160e01b600052601160045260246000fd5b50019056fea2646970667358221220e7f3d7c22cbcdbeef4682d2ceed13e2e2d6c9e07a384f0848e74c51555d21bcf64736f6c63430008090033";

type TokenSenderConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TokenSenderConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TokenSender__factory extends ContractFactory {
  constructor(...args: TokenSenderConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "TokenSender";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TokenSender> {
    return super.deploy(overrides || {}) as Promise<TokenSender>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TokenSender {
    return super.attach(address) as TokenSender;
  }
  connect(signer: Signer): TokenSender__factory {
    return super.connect(signer) as TokenSender__factory;
  }
  static readonly contractName: "TokenSender";
  public readonly contractName: "TokenSender";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenSenderInterface {
    return new utils.Interface(_abi) as TokenSenderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TokenSender {
    return new Contract(address, _abi, signerOrProvider) as TokenSender;
  }
}