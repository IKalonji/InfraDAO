import { ethers } from "hardhat";

async function main() {
  
  const hbarAmount = (amount:Number) => {return ethers.parseEther(amount.toString());}

  const infraDAO = await ethers.deployContract("InfraDAO", {value: hbarAmount(5),});
  await infraDAO.waitForDeployment();
  console.log(`InfraDAO deployed to ${infraDAO.target}`);

  const projectsContract = await ethers.deployContract("ProjectSubmission", [infraDAO.target], {value: hbarAmount(5),});
  await projectsContract.waitForDeployment();
  console.log(`Projects contract deployed to ${projectsContract.target}`);

  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
