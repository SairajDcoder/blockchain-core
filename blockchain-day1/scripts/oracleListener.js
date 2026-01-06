const { ethers } = require("ethers");
const abi = require("../artifacts/contracts/OracleDemo.sol/OracleDemo.json").abi;

const CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

// provider
const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545");

// signer (oracle account)
const signer = provider.getSigner(0);

// contract instance
const contract = new ethers.Contract(
    CONTRACT_ADDRESS,
    abi,
    signer
);

console.log("👂 Oracle Listener Started...");

contract.on("DataRequested", async () => {
    console.log("📡 Data requested");

    // simulate external API
    const fakeData = Math.floor(Math.random() * 100);

    const tx = await contract.fulfillData(fakeData);
    await tx.wait();

    console.log("✅ Data sent to blockchain:", fakeData);
});
