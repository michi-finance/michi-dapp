export const MichiHelperAbi = [{
    "inputs": [{
        "internalType": "address",
        "name": "erc6551Registry_",
        "type": "address"
    }, {"internalType": "address", "name": "erc6551Implementation_", "type": "address"}, {
        "internalType": "address",
        "name": "erc6551Proxy_",
        "type": "address"
    }, {"internalType": "address", "name": "michiWalletNFT_", "type": "address"}, {
        "internalType": "address",
        "name": "feeReceiver_",
        "type": "address"
    }, {"internalType": "uint256", "name": "depositFee_", "type": "uint256"}, {
        "internalType": "uint256",
        "name": "feePrecision_",
        "type": "uint256"
    }], "stateMutability": "nonpayable", "type": "constructor"
}, {
    "inputs": [{"internalType": "uint256", "name": "depositFee", "type": "uint256"}],
    "name": "InvalidDepositFee",
    "type": "error"
}, {
    "inputs": [{"internalType": "address", "name": "feeRecipient", "type": "address"}],
    "name": "InvalidFeeReceiver",
    "type": "error"
}, {"inputs": [], "name": "OwnerMismatch", "type": "error"}, {
    "inputs": [{
        "internalType": "address",
        "name": "token",
        "type": "address"
    }], "name": "TokenAlreadyApproved", "type": "error"
}, {
    "inputs": [{"internalType": "address", "name": "token", "type": "address"}],
    "name": "TokenNotApproved",
    "type": "error"
}, {
    "inputs": [{"internalType": "address", "name": "token", "type": "address"}],
    "name": "UnauthorizedToken",
    "type": "error"
}, {
    "inputs": [{"internalType": "address", "name": "user", "type": "address"}],
    "name": "UnauthorizedUser",
    "type": "error"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "address", "name": "sender", "type": "address"}, {
        "indexed": true,
        "internalType": "address",
        "name": "walletAddress",
        "type": "address"
    }, {"indexed": true, "internalType": "address", "name": "token", "type": "address"}, {
        "indexed": false,
        "internalType": "uint256",
        "name": "amountAfterFees",
        "type": "uint256"
    }, {"indexed": false, "internalType": "uint256", "name": "feeTaken", "type": "uint256"}],
    "name": "Deposit",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
    }, {"indexed": true, "internalType": "address", "name": "newOwner", "type": "address"}],
    "name": "OwnershipTransferred",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "address", "name": "sender", "type": "address"}, {
        "indexed": true,
        "internalType": "address",
        "name": "walletAddress",
        "type": "address"
    }, {"indexed": false, "internalType": "address", "name": "nftContract", "type": "address"}, {
        "indexed": false,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
    }],
    "name": "WalletCreated",
    "type": "event"
}, {
    "inputs": [{"internalType": "address", "name": "token", "type": "address"}],
    "name": "addApprovedToken",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "", "type": "address"}],
    "name": "approvedToken",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "quantity", "type": "uint256"}],
    "name": "createWallet",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
}, {
    "inputs": [],
    "name": "depositFee",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "token", "type": "address"}, {
        "internalType": "address",
        "name": "walletAddress",
        "type": "address"
    }, {"internalType": "uint256", "name": "amount", "type": "uint256"}, {
        "internalType": "bool",
        "name": "takeFee",
        "type": "bool"
    }], "name": "depositToken", "outputs": [], "stateMutability": "nonpayable", "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "", "type": "address"}, {
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "name": "depositsByAccountByToken",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "", "type": "address"}],
    "name": "depositsByToken",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "erc6551Implementation",
    "outputs": [{"internalType": "address", "name": "", "type": "address"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "erc6551Proxy",
    "outputs": [{"internalType": "address", "name": "", "type": "address"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "erc6551Registry",
    "outputs": [{"internalType": "contract IERC6551Registry", "name": "", "type": "address"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "feePrecision",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "feeReceiver",
    "outputs": [{"internalType": "address", "name": "", "type": "address"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "", "type": "address"}],
    "name": "feesCollectedByToken",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "getApprovedTokens",
    "outputs": [{"internalType": "address[]", "name": "", "type": "address[]"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "name": "listApprovedTokens",
    "outputs": [{"internalType": "address", "name": "", "type": "address"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "michiWalletNFT",
    "outputs": [{"internalType": "contract IMichiWalletNFT", "name": "", "type": "address"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "owner",
    "outputs": [{"internalType": "address", "name": "", "type": "address"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "token", "type": "address"}],
    "name": "removeApprovedToken",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "newDepositFee", "type": "uint256"}],
    "name": "setDepositFee",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "newFeeReceiver", "type": "address"}],
    "name": "setFeeReceiver",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "newOwner", "type": "address"}],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "newImplementation", "type": "address"}],
    "name": "updateImplementation",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "newProxy", "type": "address"}],
    "name": "updateProxy",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}];

export const PichiMarketAbi = [{"inputs": [], "stateMutability": "nonpayable", "type": "constructor"}, {
    "inputs": [],
    "name": "ArrayEmpty",
    "type": "error"
}, {"inputs": [], "name": "CollectionAlreadyAccepted", "type": "error"}, {
    "inputs": [],
    "name": "CollectionNotAccepted",
    "type": "error"
}, {"inputs": [], "name": "CurrencyAlreadyAccepted", "type": "error"}, {
    "inputs": [],
    "name": "CurrencyMismatch",
    "type": "error"
}, {"inputs": [], "name": "CurrencyNotAccepted", "type": "error"}, {
    "inputs": [],
    "name": "InvalidAddress",
    "type": "error"
}, {"inputs": [], "name": "InvalidFee", "type": "error"}, {
    "inputs": [],
    "name": "InvalidOrder",
    "type": "error"
}, {"inputs": [], "name": "InvalidValue", "type": "error"}, {
    "inputs": [],
    "name": "NonceLowerThanCurrent",
    "type": "error"
}, {"inputs": [], "name": "OrderAlreadyCancelledOrExecuted", "type": "error"}, {
    "inputs": [],
    "name": "OrderCreatorCannotExecute",
    "type": "error"
}, {"inputs": [], "name": "OrderExpired", "type": "error"}, {
    "inputs": [],
    "name": "PaymentMismatch",
    "type": "error"
}, {"inputs": [], "name": "SellerNotOwner", "type": "error"}, {
    "inputs": [],
    "name": "SignatureInvalid",
    "type": "error"
}, {
    "anonymous": false,
    "inputs": [{"indexed": false, "internalType": "address", "name": "user", "type": "address"}, {
        "indexed": false,
        "internalType": "uint256",
        "name": "minNonce",
        "type": "uint256"
    }],
    "name": "AllOrdersCancelled",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "address", "name": "removedCollection", "type": "address"}],
    "name": "CollectionRemoved",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "address", "name": "removedCurrency", "type": "address"}],
    "name": "CurrencyRemoved",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": false, "internalType": "uint8", "name": "version", "type": "uint8"}],
    "name": "Initialized",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "address", "name": "newCollection", "type": "address"}],
    "name": "NewCollectionAccepted",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "address", "name": "newCurrency", "type": "address"}],
    "name": "NewCurrencyAccepted",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "uint256",
        "name": "newMarketplaceFee",
        "type": "uint256"
    }, {"indexed": true, "internalType": "uint256", "name": "oldMarketplaceFee", "type": "uint256"}],
    "name": "NewMarketplaceFee",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "newFeeRecipient",
        "type": "address"
    }, {"indexed": true, "internalType": "address", "name": "oldFeeRecipient", "type": "address"}],
    "name": "NewMarketplaceFeeRecipient",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": false, "internalType": "address", "name": "user", "type": "address"}, {
        "indexed": false,
        "internalType": "uint256[]",
        "name": "orderNonces",
        "type": "uint256[]"
    }],
    "name": "OrdersCancelled",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
    }, {"indexed": true, "internalType": "address", "name": "newOwner", "type": "address"}],
    "name": "OwnershipTransferred",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "address", "name": "seller", "type": "address"}, {
        "indexed": true,
        "internalType": "address",
        "name": "buyer",
        "type": "address"
    }, {"indexed": true, "internalType": "address", "name": "collection", "type": "address"}, {
        "indexed": false,
        "internalType": "address",
        "name": "currency",
        "type": "address"
    }, {"indexed": false, "internalType": "uint256", "name": "tokenId", "type": "uint256"}, {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
    }, {"indexed": false, "internalType": "uint256", "name": "nonce", "type": "uint256"}],
    "name": "WalletPurchased",
    "type": "event"
}, {
    "inputs": [{
        "components": [{
            "components": [{
                "internalType": "address",
                "name": "collection",
                "type": "address"
            }, {"internalType": "address", "name": "currency", "type": "address"}, {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }, {"internalType": "uint256", "name": "amount", "type": "uint256"}, {
                "internalType": "uint256",
                "name": "expiry",
                "type": "uint256"
            }], "internalType": "struct Order", "name": "order", "type": "tuple"
        }, {"internalType": "address", "name": "buyer", "type": "address"}, {
            "internalType": "uint8",
            "name": "v",
            "type": "uint8"
        }, {"internalType": "bytes32", "name": "r", "type": "bytes32"}, {
            "internalType": "bytes32",
            "name": "s",
            "type": "bytes32"
        }, {"internalType": "uint256", "name": "nonce", "type": "uint256"}],
        "internalType": "struct Offer",
        "name": "offer",
        "type": "tuple"
    }], "name": "acceptOffer", "outputs": [], "stateMutability": "nonpayable", "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "newCollection", "type": "address"}],
    "name": "addAcceptedCollection",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "newCurrency", "type": "address"}],
    "name": "addAcceptedCurrency",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "minNonce", "type": "uint256"}],
    "name": "cancelAllOrdersForCaller",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256[]", "name": "orderNonces", "type": "uint256[]"}],
    "name": "cancelOrdersForCaller",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "domainSeparator",
    "outputs": [{"internalType": "bytes32", "name": "", "type": "bytes32"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "components": [{
            "components": [{
                "internalType": "address",
                "name": "collection",
                "type": "address"
            }, {"internalType": "address", "name": "currency", "type": "address"}, {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }, {"internalType": "uint256", "name": "amount", "type": "uint256"}, {
                "internalType": "uint256",
                "name": "expiry",
                "type": "uint256"
            }], "internalType": "struct Order", "name": "order", "type": "tuple"
        }, {"internalType": "address", "name": "seller", "type": "address"}, {
            "internalType": "uint8",
            "name": "v",
            "type": "uint8"
        }, {"internalType": "bytes32", "name": "r", "type": "bytes32"}, {
            "internalType": "bytes32",
            "name": "s",
            "type": "bytes32"
        }, {"internalType": "uint256", "name": "nonce", "type": "uint256"}],
        "internalType": "struct Listing",
        "name": "listing",
        "type": "tuple"
    }], "name": "executeListing", "outputs": [], "stateMutability": "payable", "type": "function"
}, {
    "inputs": [],
    "name": "getListAcceptedCurrencies",
    "outputs": [{"internalType": "address[]", "name": "", "type": "address[]"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "getVersion",
    "outputs": [{"internalType": "uint8", "name": "", "type": "uint8"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "weth_", "type": "address"}, {
        "internalType": "address",
        "name": "marketplaceFeeRecipient_",
        "type": "address"
    }, {"internalType": "uint256", "name": "marketplaceFee_", "type": "uint256"}],
    "name": "initialize",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "", "type": "address"}],
    "name": "isCollectionAccepted",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "", "type": "address"}],
    "name": "isCurrencyAccepted",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "", "type": "address"}, {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "name": "isUserNonceExecutedOrCancelled",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "name": "listAcceptedCollections",
    "outputs": [{"internalType": "address", "name": "", "type": "address"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "name": "listAcceptedCurrencies",
    "outputs": [{"internalType": "address", "name": "", "type": "address"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "marketplaceFee",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "marketplaceFeeRecipient",
    "outputs": [{"internalType": "address", "name": "", "type": "address"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "owner",
    "outputs": [{"internalType": "address", "name": "", "type": "address"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "precision",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "collectionToRemove", "type": "address"}],
    "name": "removeAcceptedCollection",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "currencyToRemove", "type": "address"}],
    "name": "removeAcceptedCurrency",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "newFee", "type": "uint256"}],
    "name": "setMarketplaceFee",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "newFeeRecipient", "type": "address"}],
    "name": "setMarketplaceFeeRecipient",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "newOwner", "type": "address"}],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "", "type": "address"}],
    "name": "userMinOrderNonce",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "version",
    "outputs": [{"internalType": "uint8", "name": "", "type": "uint8"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "weth",
    "outputs": [{"internalType": "address", "name": "", "type": "address"}],
    "stateMutability": "view",
    "type": "function"
}];