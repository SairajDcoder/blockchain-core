async function main() {
    const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

    const HelloWorld = await ethers.getContractFactory("HelloWorld");
    const contract = HelloWorld.attach(contractAddress);

    console.log("Listening for events...");

    contract.on("MessageUpdated", (updater, oldMsg, newMsg, time) => {
        console.log("📢 Event Detected!");
        console.log("From:", updater);
        console.log("Old:", oldMsg);
        console.log("New:", newMsg);
        console.log("Time:", new Date(Number(time) * 1000).toLocaleString());
    });
}

main();
