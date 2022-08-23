/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Students, StudentsInterface } from "../Students";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "student",
        type: "address",
      },
    ],
    name: "CannotRegisterTwice",
    type: "error",
  },
  {
    inputs: [],
    name: "NotOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "getOwner",
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
        internalType: "address",
        name: "_studentId",
        type: "address",
      },
    ],
    name: "getStudentData",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "class",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "status",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "grade",
            type: "uint256",
          },
        ],
        internalType: "struct Students.StudentData",
        name: "studentData",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_studentId",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_class",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_status",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_grade",
        type: "uint256",
      },
    ],
    name: "register",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b506100437f4fbeab63d2834d1212848aea9789a5af748bb06f5774b16e1606770beeca576660001b6100e060201b60201c565b6100757f4bf94cf297f47ef09e83421ea100ba4429d3e290d38c3f418226f3ced4a754ec60001b6100e060201b60201c565b6100a77fcae22a7aeecab389a00815881a57eaaafbc7b9dd86da4f1565b9d949240bef8560001b6100e060201b60201c565b3373ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250506100e3565b50565b608051610e03610105600039600081816102e6015261087a0152610e036000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80633f898323146100465780636d02acec14610076578063893d20e8146100a6575b600080fd5b610060600480360381019061005b91906109d7565b6100c4565b60405161006d9190610b06565b60405180910390f35b610090600480360381019061008b9190610c89565b610247565b60405161009d9190610d27565b60405180910390f35b6100ae6107f2565b6040516100bb9190610d51565b60405180910390f35b6100cc6108a1565b6100f87ff2585c4a43087eea431b526f487ba8601a69bbb1ce1f8349f20196618bf5abac60001b61089e565b6101247fa4fa70836f9d500d48da4fb37a237ccc4f96efb3507d37b9c8474a16387dea5560001b61089e565b6101507ff2571245215bde70912554d94eec8b30ad5673020c929759c9067b9604f05bca60001b61089e565b600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020604051806060016040529081600082015481526020016001820180546101b490610d9b565b80601f01602080910402602001604051908101604052809291908181526020018280546101e090610d9b565b801561022d5780601f106102025761010080835404028352916020019161022d565b820191906000526020600020905b81548152906001019060200180831161021057829003601f168201915b505050505081526020016002820154815250509050919050565b60006102757f0a295f1a77094fbe4e13d0365f5a87acaa846291dad66d9f76a6b75b8f4b307760001b61089e565b6102a17f6351d7add662bcd3ef5ff52914b533e70a0ccc4437c370c047be83d25e45c22960001b61089e565b6102cd7fb74f4e1c5bbec6fc9c19d9f8feba4c63ceaca00e35a752cc1ba65add6463c4ec60001b61089e565b3373ffffffffffffffffffffffffffffffffffffffff167f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16146103aa5761034c7fd119318277977f83b04ec7d355e7fe545fe731937e94fc89b08d863c2dc59c1560001b61089e565b6103787f4ad17153f4e89952e4b443650a7aa0143785f71fd077545a97fb78fbee31f95160001b61089e565b6040517f30cd747100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103d67f396c0a7c8d9ef786374eb461751e97c8468ad429a16aad21ad98f1173004eb2160001b61089e565b6104027f9ac2434a72d01d0c207d4a36015108824d2c81380a89b1e8113e5a118f9b0b5660001b61089e565b8461042f7f9bd9b92a0a50dc7b573040ac6fa5c109863d176bc413a199c905d6d2521c7ed360001b61089e565b61045b7f3145f1a6c77cc3edc4447ca6b1db99e90113e27b47b21fff6f65fa5a4e6eb23960001b61089e565b6104877fda651d1d93a2eb15526d24adac5ce10f6ddcd25201b7114f5b976f78ea9b94a660001b61089e565b600115156000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514156105745761050b7fc982883adfd73077d15d12eb0027781c9665f7ad5fccdbf05fd6e1a37b0f300760001b61089e565b6105377f3e15057f7f8b8a6dd913c7f7d7f3cbe0a7d272ca33caa713ab14f3ce70fc994f60001b61089e565b806040517f6f9d8eee00000000000000000000000000000000000000000000000000000000815260040161056b9190610d51565b60405180910390fd5b6105a07fd6e80dff650a1e20b09dce201c7ecc11941bfaa581472f48b4186b188877270d60001b61089e565b6105cc7fa110fce1113a0a6c80072c2937e349f2659ac3ba5eae3bc1bbe42b5d4f5ea55760001b61089e565b6105f87fabe6d28450b7bc6d67c568b604e2ecd7e47a0ef9fb528664d31ffc01c559674b60001b61089e565b6106247fda17363b9168daaecf2288b79315903c9b1873b59f0fcfe483323ff7c1d6497260001b61089e565b6106507f46bb3323baac67c06ee9a0da6b7179919a556c0150952b7f1dd8ec61aa3c6e2460001b61089e565b60016000808873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506106d37f72988d990ca7d7eab0d681f3493d56190d2dcdde31ea65929c3d674afee8d17860001b61089e565b6106ff7f0b78facd1a178d6c42860a6966a050348b44e38a14c1c52636cc5b7137a00b5f60001b61089e565b604051806060016040528086815260200185815260200184815250600160008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008201518160000155602082015181600101908051906020019061077f9291906108c2565b50604082015181600201559050506107b97f9740f606359c7857bf93079b2f98308ed10998609b8b840fca48154d756e0c8260001b61089e565b6107e57ff3e2317942b8fae637b210984386a2b64aec27f26253b6049f6bbf29448c94ba60001b61089e565b6001915050949350505050565b60006108207fd004c6379487cb79fd46fa55129de57c6d485382bd12251992ad9e457ccd19bf60001b61089e565b61084c7fc0ad42f3059b5d583bf3e9481e61a03cb11f5db411416ba735c728a0cc21c0d460001b61089e565b6108787ffe46db4676347cef864c14ab4e925087eed9a90e5933b228b804740c314b473760001b61089e565b7f0000000000000000000000000000000000000000000000000000000000000000905090565b50565b60405180606001604052806000815260200160608152602001600081525090565b8280546108ce90610d9b565b90600052602060002090601f0160209004810192826108f05760008555610937565b82601f1061090957805160ff1916838001178555610937565b82800160010185558215610937579182015b8281111561093657825182559160200191906001019061091b565b5b5090506109449190610948565b5090565b5b80821115610961576000816000905550600101610949565b5090565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006109a482610979565b9050919050565b6109b481610999565b81146109bf57600080fd5b50565b6000813590506109d1816109ab565b92915050565b6000602082840312156109ed576109ec61096f565b5b60006109fb848285016109c2565b91505092915050565b6000819050919050565b610a1781610a04565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610a57578082015181840152602081019050610a3c565b83811115610a66576000848401525b50505050565b6000601f19601f8301169050919050565b6000610a8882610a1d565b610a928185610a28565b9350610aa2818560208601610a39565b610aab81610a6c565b840191505092915050565b6000606083016000830151610ace6000860182610a0e565b5060208301518482036020860152610ae68282610a7d565b9150506040830151610afb6040860182610a0e565b508091505092915050565b60006020820190508181036000830152610b208184610ab6565b905092915050565b610b3181610a04565b8114610b3c57600080fd5b50565b600081359050610b4e81610b28565b92915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610b9682610a6c565b810181811067ffffffffffffffff82111715610bb557610bb4610b5e565b5b80604052505050565b6000610bc8610965565b9050610bd48282610b8d565b919050565b600067ffffffffffffffff821115610bf457610bf3610b5e565b5b610bfd82610a6c565b9050602081019050919050565b82818337600083830152505050565b6000610c2c610c2784610bd9565b610bbe565b905082815260208101848484011115610c4857610c47610b59565b5b610c53848285610c0a565b509392505050565b600082601f830112610c7057610c6f610b54565b5b8135610c80848260208601610c19565b91505092915050565b60008060008060808587031215610ca357610ca261096f565b5b6000610cb1878288016109c2565b9450506020610cc287828801610b3f565b935050604085013567ffffffffffffffff811115610ce357610ce2610974565b5b610cef87828801610c5b565b9250506060610d0087828801610b3f565b91505092959194509250565b60008115159050919050565b610d2181610d0c565b82525050565b6000602082019050610d3c6000830184610d18565b92915050565b610d4b81610999565b82525050565b6000602082019050610d666000830184610d42565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610db357607f821691505b60208210811415610dc757610dc6610d6c565b5b5091905056fea264697066735822122059a1c76f5a1100be68fa7a6c69fe8e87970ceba43ec7b096a6af38b3c52bebad64736f6c63430008090033";

type StudentsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StudentsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Students__factory extends ContractFactory {
  constructor(...args: StudentsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Students";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Students> {
    return super.deploy(overrides || {}) as Promise<Students>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Students {
    return super.attach(address) as Students;
  }
  connect(signer: Signer): Students__factory {
    return super.connect(signer) as Students__factory;
  }
  static readonly contractName: "Students";
  public readonly contractName: "Students";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StudentsInterface {
    return new utils.Interface(_abi) as StudentsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Students {
    return new Contract(address, _abi, signerOrProvider) as Students;
  }
}
