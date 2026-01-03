async function main() {
    // 1. Get contract address (from deploy output)
    const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

    // 2. Get signer (account)
    const [signer] = await ethers.getSigners();

    // 3. Get contract instance
    const HelloWorld = await ethers.getContractFactory("HelloWorld");
    const contract = HelloWorld.attach(contractAddress);

    // 4. READ from blockchain (call)
    const currentMessage = await contract.message();
    console.log("Current message:", currentMessage);

    // 5. WRITE to blockchain (transaction)
    const tx = await contract.setMessage("Hello from Day 2 🚀");
    await tx.wait();

    console.log("Message updated!");

    // 6. READ again
    const newMessage = await contract.message();
    console.log("New message:", newMessage);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
