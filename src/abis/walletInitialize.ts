const WalletInitializeAbi = [{
    "inputs": [{
        "internalType": "address",
        "name": "_guardian",
        "type": "address"
    }, {"internalType": "address", "name": "_initialImplementation", "type": "address"}],
    "stateMutability": "nonpayable",
    "type": "constructor"
}, {"inputs": [], "name": "AlreadyInitialized", "type": "error"}, {
    "inputs": [],
    "name": "InvalidImplementation",
    "type": "error"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "internalType": "address",
        "name": "previousAdmin",
        "type": "address"
    }, {"indexed": false, "internalType": "address", "name": "newAdmin", "type": "address"}],
    "name": "AdminChanged",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "address", "name": "beacon", "type": "address"}],
    "name": "BeaconUpgraded",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "address", "name": "implementation", "type": "address"}],
    "name": "Upgraded",
    "type": "event"
}, {"stateMutability": "payable", "type": "fallback"}, {
    "inputs": [{
        "internalType": "address",
        "name": "implementation",
        "type": "address"
    }], "name": "initialize", "outputs": [], "stateMutability": "nonpayable", "type": "function"
}, {"stateMutability": "payable", "type": "receive"}];

export default WalletInitializeAbi;