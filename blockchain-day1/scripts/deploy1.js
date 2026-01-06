const hre = require("hardhat");

async function main() {
  const OracleDemo = await hre.ethers.getContractFactory("OracleDemo");
  const oracleDemo = await OracleDemo.deploy();

  await oracleDemo.deployed();

  console.log("OracleDemo deployed to:", oracleDemo.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
