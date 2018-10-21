let web3;
if (typeof web3 !== 'undefined') {
  web3 = new window.Web3(web3.currentProvider);
} else {
  web3 = new window.Web3(new window.Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/1201996cee964d44a66b1a4615f72b4a'));
}

const abi = [
  {
    constant: true,
    inputs: [ ],
    name: 'getUsers',
    outputs: [
      {
        name: '',
        type: 'address[]'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [ ],
    name: 'userCount',
    outputs: [
      {
        name: '',
        type: 'uint256'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        name: '_user',
        type: 'address'
      }
    ],
    name: 'userExists',
    outputs: [
      {
        name: '',
        type: 'bool'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        name: '',
        type: 'address'
      }
    ],
    name: 'userMapping',
    outputs: [
      {
        name: 'userAddress',
        type: 'address'
      },
      {
        name: 'userMetadata',
        type: 'string'
      },
      {
        name: 'userBalance',
        type: 'uint256'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        name: '_categoryId',
        type: 'uint256'
      }
    ],
    name: 'getVoteCategory',
    outputs: [
      {
        name: '',
        type: 'string'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        name: '_userAddress',
        type: 'address'
      }
    ],
    name: 'getUserActionCount',
    outputs: [
      {
        name: '',
        type: 'uint256'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        name: '_userAddress',
        type: 'address'
      },
      {
        name: '_actionIndex',
        type: 'uint256'
      }
    ],
    name: 'getUserAction',
    outputs: [
      {
        name: 'productId',
        type: 'uint256'
      },
      {
        name: 'actionCreator',
        type: 'address'
      },
      {
        name: 'actionMetadata',
        type: 'string'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [ ],
    name: 'getProductCount',
    outputs: [
      {
        name: '',
        type: 'uint256'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        name: '_userAddress',
        type: 'address'
      },
      {
        name: '_userMetadata',
        type: 'string'
      }
    ],
    name: 'addUser',
    outputs: [ ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        name: '',
        type: 'address'
      }
    ],
    name: 'userAddressLUTPosition',
    outputs: [
      {
        name: '',
        type: 'uint256'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        name: '_productId',
        type: 'uint256'
      },
      {
        name: '_actionId',
        type: 'uint256'
      },
      {
        name: '_voteCategory',
        type: 'uint8'
      },
      {
        name: '_userAddress',
        type: 'address'
      }
    ],
    name: 'getActionVote',
    outputs: [
      {
        name: '',
        type: 'uint8'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        name: '_userAddress',
        type: 'address'
      }
    ],
    name: 'getUser',
    outputs: [
      {
        name: 'userAddress',
        type: 'address'
      },
      {
        name: 'userMetadata',
        type: 'string'
      },
      {
        name: 'userBalance',
        type: 'uint256'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: false,
    inputs: [ ],
    name: 'renounceOwnership',
    outputs: [ ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        name: '_productId',
        type: 'uint256'
      },
      {
        name: '_actionId',
        type: 'uint256'
      },
      {
        name: '_voteCategory',
        type: 'uint8'
      },
      {
        name: '_value',
        type: 'uint8'
      }
    ],
    name: 'addActionVote',
    outputs: [ ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: true,
    inputs: [ ],
    name: 'owner',
    outputs: [
      {
        name: '',
        type: 'address'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [ ],
    name: 'isOwner',
    outputs: [
      {
        name: '',
        type: 'bool'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        name: '_userAddress',
        type: 'address'
      }
    ],
    name: 'removeUser',
    outputs: [ ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        name: '_productId',
        type: 'uint256'
      },
      {
        name: '_actionIndex',
        type: 'uint256'
      }
    ],
    name: 'getProductAction',
    outputs: [
      {
        name: 'productId',
        type: 'uint256'
      },
      {
        name: 'actionCreator',
        type: 'address'
      },
      {
        name: 'actionMetadata',
        type: 'string'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        name: '_productId',
        type: 'uint256'
      }
    ],
    name: 'getProductActionCount',
    outputs: [
      {
        name: '',
        type: 'uint256'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        name: '_categoryName',
        type: 'string'
      }
    ],
    name: 'addVoteCategory',
    outputs: [ ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        name: '',
        type: 'uint256'
      }
    ],
    name: 'usersLUT',
    outputs: [
      {
        name: '',
        type: 'address'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        name: '_actionMetadata',
        type: 'string'
      }
    ],
    name: 'addProduct',
    outputs: [ ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        name: 'newOwner',
        type: 'address'
      }
    ],
    name: 'transferOwnership',
    outputs: [ ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        name: '_productId',
        type: 'uint256'
      },
      {
        name: '_actionMetadata',
        type: 'string'
      }
    ],
    name: 'addProductAction',
    outputs: [ ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: true,
    inputs: [ ],
    name: 'getVoteCategoriesCount',
    outputs: [
      {
        name: '',
        type: 'uint256'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        name: '_ownerMetadata',
        type: 'string'
      }
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    payable: true,
    stateMutability: 'payable',
    type: 'fallback'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: '_productId',
        type: 'uint256'
      }
    ],
    name: 'ProductAdded',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'previousOwner',
        type: 'address'
      },
      {
        indexed: true,
        name: 'newOwner',
        type: 'address'
      }
    ],
    name: 'OwnershipTransferred',
    type: 'event'
  },
  {
    constant: false,
    inputs: [ ],
    name: 'withdraw',
    outputs: [ ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: true,
    inputs: [ ],
    name: 'currentBalance',
    outputs: [
      {
        name: '',
        type: 'uint256'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  }
];
const contract = web3.eth.contract(abi).at('0x6D303FB249c31d37501AD8577aDAFf4d7359C405');

document.contractFns = [
  'getUsers',
  'getUser',
  'getProducts',
  'getProductCount',
  'getProductActionCount',
  'getProductAction',
  'getUser',
  'getUsers',
  'getActionVote',
].reduce((acc, fnName) => {
  acc[fnName] = (...args) => new Promise((resolve, reject) => {
    contract[fnName].call(...args, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
  return acc;
}, {});
