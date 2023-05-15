const { run } = require("hardhat");

async function main() {
    const HelloWorld = await ethers.getContractFactory("HelloWorld");
 
    // Start deployment, returning a promise that resolves to a contract object
    const hello_world = await HelloWorld.deploy("Hello World!");   
    console.log("Contract deployed to address:", hello_world.address);
 }
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });

// 运行命令行：npx hardhat run scripts/deploy.js --network goerli
// 运行后结果：
//          Contract deployed to address: 0x28CEafaf642988EcA8852223011f97542Df5fEa4
