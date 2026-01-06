const { ethers } = require("ethers");
const abi = require("../artifacts/contracts/OracleDemo.sol/OracleDemo.json").abi;

// 🔁 Replace with your deployed contract address
const CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

async function main() {
    // connect to local hardhat node
    const provider = new ethers.providers.JsonRpcProvider(
        "http://127.0.0.1:8545"
    );

    // use first hardhat account
    const signer = provider.getSigner(0);

    // contract instance
    const contract = new ethers.Contract(
        CONTRACT_ADDRESS,
        abi,
        signer
    );

    console.log("📤 Requesting data from oracle...");

    // this emits the DataRequested event
    const tx = await contract.requestData();
    await tx.wait();

    console.log("✅ Data request transaction confirmed");
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
