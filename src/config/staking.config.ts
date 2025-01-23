export const StakingContractAddress = "0xaa4a7ddEc19e41098faf324BD333fE9704176377";
export const StakingLPAddress = "0x27a05d9ce13618665a9d3bbef5cdffcd19ed688b";
export const StakingLPTokenAddress = "0xf44a81156475f2dfbb371b0171228aa40c9e2dcf";

export const StakingLPAbi = [{
    "inputs": [{
        "internalType": "address",
        "name": "pichi_",
        "type": "address"
    }, {"internalType": "uint256", "name": "rewardPerBlock_", "type": "uint256"}],
    "stateMutability": "nonpayable",
    "type": "constructor"
}, {"inputs": [], "name": "AccessControlBadConfirmation", "type": "error"}, {
    "inputs": [{
        "internalType": "address",
        "name": "account",
        "type": "address"
    }, {"internalType": "bytes32", "name": "neededRole", "type": "bytes32"}],
    "name": "AccessControlUnauthorizedAccount",
    "type": "error"
}, {
    "inputs": [{"internalType": "address", "name": "target", "type": "address"}],
    "name": "AddressEmptyCode",
    "type": "error"
}, {
    "inputs": [{"internalType": "address", "name": "account", "type": "address"}],
    "name": "AddressInsufficientBalance",
    "type": "error"
}, {"inputs": [], "name": "FailedInnerCall", "type": "error"}, {
    "inputs": [],
    "name": "InvalidAmount",
    "type": "error"
}, {"inputs": [], "name": "InvalidPool", "type": "error"}, {
    "inputs": [],
    "name": "PoolAlreadyExists",
    "type": "error"
}, {"inputs": [], "name": "ReentrancyGuardReentrantCall", "type": "error"}, {
    "inputs": [{
        "internalType": "address",
        "name": "token",
        "type": "address"
    }], "name": "SafeERC20FailedOperation", "type": "error"
}, {"inputs": [], "name": "ZeroAddressProvided", "type": "error"}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "address", "name": "user", "type": "address"}, {
        "indexed": true,
        "internalType": "uint256",
        "name": "pid",
        "type": "uint256"
    }, {"indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256"}],
    "name": "Deposit",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "address", "name": "user", "type": "address"}, {
        "indexed": true,
        "internalType": "uint256",
        "name": "pid",
        "type": "uint256"
    }, {"indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256"}],
    "name": "Harvest",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "address", "name": "token", "type": "address"}, {
        "indexed": true,
        "internalType": "uint256",
        "name": "pid",
        "type": "uint256"
    }, {"indexed": true, "internalType": "uint256", "name": "allocPoint", "type": "uint256"}],
    "name": "PoolAdded",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "uint256", "name": "pid", "type": "uint256"}, {
        "indexed": true,
        "internalType": "uint256",
        "name": "allocPoint",
        "type": "uint256"
    }],
    "name": "PoolAdjusted",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "uint256", "name": "pid", "type": "uint256"}],
    "name": "PoolRemoved",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "uint256", "name": "pid", "type": "uint256"}, {
        "indexed": false,
        "internalType": "uint256",
        "name": "lastRewardBlock",
        "type": "uint256"
    }, {"indexed": false, "internalType": "uint256", "name": "totalDeposited", "type": "uint256"}, {
        "indexed": false,
        "internalType": "uint256",
        "name": "accPichiPerShare",
        "type": "uint256"
    }],
    "name": "PoolUpdated",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": false, "internalType": "uint256", "name": "newRewardPerBlock", "type": "uint256"}],
    "name": "RewardPerBlockSet",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32"}, {
        "indexed": true,
        "internalType": "bytes32",
        "name": "previousAdminRole",
        "type": "bytes32"
    }, {"indexed": true, "internalType": "bytes32", "name": "newAdminRole", "type": "bytes32"}],
    "name": "RoleAdminChanged",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32"}, {
        "indexed": true,
        "internalType": "address",
        "name": "account",
        "type": "address"
    }, {"indexed": true, "internalType": "address", "name": "sender", "type": "address"}],
    "name": "RoleGranted",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32"}, {
        "indexed": true,
        "internalType": "address",
        "name": "account",
        "type": "address"
    }, {"indexed": true, "internalType": "address", "name": "sender", "type": "address"}],
    "name": "RoleRevoked",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "address", "name": "user", "type": "address"}, {
        "indexed": true,
        "internalType": "uint256",
        "name": "pid",
        "type": "uint256"
    }, {"indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256"}],
    "name": "Withdrawal",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "address", "name": "user", "type": "address"}, {
        "indexed": true,
        "internalType": "uint256",
        "name": "pid",
        "type": "uint256"
    }, {"indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256"}],
    "name": "WithdrawalWithoutRewards",
    "type": "event"
}, {
    "inputs": [],
    "name": "DEFAULT_ADMIN_ROLE",
    "outputs": [{"internalType": "bytes32", "name": "", "type": "bytes32"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "POOL_ADMIN_ROLE",
    "outputs": [{"internalType": "bytes32", "name": "", "type": "bytes32"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "token", "type": "address"}, {
        "internalType": "uint256",
        "name": "poolWeight",
        "type": "uint256"
    }, {"internalType": "bool", "name": "withUpdate", "type": "bool"}],
    "name": "addPool",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "pid", "type": "uint256"}, {
        "internalType": "uint256",
        "name": "newPoolWeight",
        "type": "uint256"
    }, {"internalType": "bool", "name": "withUpdate", "type": "bool"}],
    "name": "adjustPool",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "pid", "type": "uint256"}, {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
    }], "name": "deposit", "outputs": [], "stateMutability": "nonpayable", "type": "function"
}, {
    "inputs": [{"internalType": "bytes32", "name": "role", "type": "bytes32"}],
    "name": "getRoleAdmin",
    "outputs": [{"internalType": "bytes32", "name": "", "type": "bytes32"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "bytes32", "name": "role", "type": "bytes32"}, {
        "internalType": "address",
        "name": "account",
        "type": "address"
    }], "name": "grantRole", "outputs": [], "stateMutability": "nonpayable", "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "pid", "type": "uint256"}],
    "name": "harvest",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "bytes32", "name": "role", "type": "bytes32"}, {
        "internalType": "address",
        "name": "account",
        "type": "address"
    }],
    "name": "hasRole",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "massUpdatePools",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "account", "type": "address"}, {
        "internalType": "uint256",
        "name": "pid",
        "type": "uint256"
    }],
    "name": "pendingRewards",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "pichi",
    "outputs": [{"internalType": "address", "name": "", "type": "address"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "name": "poolInfo",
    "outputs": [{
        "internalType": "uint256",
        "name": "accumulatedRewardPerShare",
        "type": "uint256"
    }, {"internalType": "uint256", "name": "previousRewardBlock", "type": "uint256"}, {
        "internalType": "uint256",
        "name": "poolWeight",
        "type": "uint256"
    }, {"internalType": "uint256", "name": "totalDeposited", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "poolLength",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "precision",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "bytes32", "name": "role", "type": "bytes32"}, {
        "internalType": "address",
        "name": "callerConfirmation",
        "type": "address"
    }], "name": "renounceRole", "outputs": [], "stateMutability": "nonpayable", "type": "function"
}, {
    "inputs": [{"internalType": "bytes32", "name": "role", "type": "bytes32"}, {
        "internalType": "address",
        "name": "account",
        "type": "address"
    }], "name": "revokeRole", "outputs": [], "stateMutability": "nonpayable", "type": "function"
}, {
    "inputs": [],
    "name": "rewardPerBlock",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "newRewardPerBlock", "type": "uint256"}],
    "name": "setRewardPerBlock",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "bytes4", "name": "interfaceId", "type": "bytes4"}],
    "name": "supportsInterface",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "name": "tokens",
    "outputs": [{"internalType": "address", "name": "", "type": "address"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "totalPoolWeight",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "pid", "type": "uint256"}],
    "name": "updatePool",
    "outputs": [{
        "components": [{
            "internalType": "uint256",
            "name": "accumulatedRewardPerShare",
            "type": "uint256"
        }, {"internalType": "uint256", "name": "previousRewardBlock", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "poolWeight",
            "type": "uint256"
        }, {"internalType": "uint256", "name": "totalDeposited", "type": "uint256"}],
        "internalType": "struct MasterChef.PoolInfo",
        "name": "pool",
        "type": "tuple"
    }],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "", "type": "uint256"}, {
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "name": "userToPoolInfo",
    "outputs": [{"internalType": "uint256", "name": "amount", "type": "uint256"}, {
        "internalType": "uint256",
        "name": "claimedRewards",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "pid", "type": "uint256"}, {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
    }], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "pid", "type": "uint256"}],
    "name": "withdrawWithoutRewards",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}];

export const StakingAbi = [{
    "inputs": [{"internalType": "address", "name": "pichiTokenAddress", "type": "address"}],
    "stateMutability": "nonpayable",
    "type": "constructor"
}, {"inputs": [], "name": "AccessControlBadConfirmation", "type": "error"}, {
    "inputs": [{
        "internalType": "address",
        "name": "account",
        "type": "address"
    }, {"internalType": "bytes32", "name": "neededRole", "type": "bytes32"}],
    "name": "AccessControlUnauthorizedAccount",
    "type": "error"
}, {
    "inputs": [{"internalType": "address", "name": "target", "type": "address"}],
    "name": "AddressEmptyCode",
    "type": "error"
}, {
    "inputs": [{"internalType": "address", "name": "account", "type": "address"}],
    "name": "AddressInsufficientBalance",
    "type": "error"
}, {"inputs": [], "name": "CooldownUnfinished", "type": "error"}, {
    "inputs": [],
    "name": "FailedInnerCall",
    "type": "error"
}, {"inputs": [], "name": "InvalidAmount", "type": "error"}, {
    "inputs": [],
    "name": "ReentrancyGuardReentrantCall",
    "type": "error"
}, {
    "inputs": [{"internalType": "address", "name": "token", "type": "address"}],
    "name": "SafeERC20FailedOperation",
    "type": "error"
}, {"inputs": [], "name": "TransferFailed", "type": "error"}, {
    "inputs": [],
    "name": "ZeroAddressProvided",
    "type": "error"
}, {
    "anonymous": false,
    "inputs": [{"indexed": false, "internalType": "uint256", "name": "newCooldown", "type": "uint256"}],
    "name": "CooldownSet",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32"}, {
        "indexed": true,
        "internalType": "bytes32",
        "name": "previousAdminRole",
        "type": "bytes32"
    }, {"indexed": true, "internalType": "bytes32", "name": "newAdminRole", "type": "bytes32"}],
    "name": "RoleAdminChanged",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32"}, {
        "indexed": true,
        "internalType": "address",
        "name": "account",
        "type": "address"
    }, {"indexed": true, "internalType": "address", "name": "sender", "type": "address"}],
    "name": "RoleGranted",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32"}, {
        "indexed": true,
        "internalType": "address",
        "name": "account",
        "type": "address"
    }, {"indexed": true, "internalType": "address", "name": "sender", "type": "address"}],
    "name": "RoleRevoked",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": false, "internalType": "address", "name": "account", "type": "address"}, {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
    }, {"indexed": false, "internalType": "uint256", "name": "cooldownEnd", "type": "uint256"}],
    "name": "Stake",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": false, "internalType": "address", "name": "token", "type": "address"}, {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
    }],
    "name": "TokensRecovered",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": false, "internalType": "address", "name": "account", "type": "address"}, {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
    }],
    "name": "Unstake",
    "type": "event"
}, {
    "inputs": [],
    "name": "COOLDOWN_ROLE",
    "outputs": [{"internalType": "bytes32", "name": "", "type": "bytes32"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "DEFAULT_ADMIN_ROLE",
    "outputs": [{"internalType": "bytes32", "name": "", "type": "bytes32"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "cooldownDuration",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "cumulativeStaked",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "currentStaked",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "account", "type": "address"}, {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
    }], "name": "delegateStake", "outputs": [], "stateMutability": "nonpayable", "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "account", "type": "address"}],
    "name": "getAmountStaked",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "account", "type": "address"}],
    "name": "getCooldownEnd",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "bytes32", "name": "role", "type": "bytes32"}],
    "name": "getRoleAdmin",
    "outputs": [{"internalType": "bytes32", "name": "", "type": "bytes32"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "account", "type": "address"}],
    "name": "grantCooldownRole",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "bytes32", "name": "role", "type": "bytes32"}, {
        "internalType": "address",
        "name": "account",
        "type": "address"
    }], "name": "grantRole", "outputs": [], "stateMutability": "nonpayable", "type": "function"
}, {
    "inputs": [{"internalType": "bytes32", "name": "role", "type": "bytes32"}, {
        "internalType": "address",
        "name": "account",
        "type": "address"
    }],
    "name": "hasRole",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "pichiToken",
    "outputs": [{"internalType": "address", "name": "", "type": "address"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "token", "type": "address"}, {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
    }], "name": "recoverTokens", "outputs": [], "stateMutability": "nonpayable", "type": "function"
}, {
    "inputs": [{"internalType": "bytes32", "name": "role", "type": "bytes32"}, {
        "internalType": "address",
        "name": "callerConfirmation",
        "type": "address"
    }], "name": "renounceRole", "outputs": [], "stateMutability": "nonpayable", "type": "function"
}, {
    "inputs": [{"internalType": "bytes32", "name": "role", "type": "bytes32"}, {
        "internalType": "address",
        "name": "account",
        "type": "address"
    }], "name": "revokeRole", "outputs": [], "stateMutability": "nonpayable", "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "newCooldown", "type": "uint256"}],
    "name": "setCooldownDuration",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "amount", "type": "uint256"}],
    "name": "stake",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "bytes4", "name": "interfaceId", "type": "bytes4"}],
    "name": "supportsInterface",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "amount", "type": "uint256"}],
    "name": "unstake",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "", "type": "address"}],
    "name": "userStake",
    "outputs": [{"internalType": "uint256", "name": "amount", "type": "uint256"}, {
        "internalType": "uint256",
        "name": "cooldownEnd",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}];