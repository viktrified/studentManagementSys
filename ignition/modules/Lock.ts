async function main() {
  // Get the contract factory
  const [deployer] = await ethers.getSigners();

  console.log(`Deploying contracts with the account: ${deployer.address}`);

  // Deploy the contract
  const StudentManagement = await ethers.getContractFactory(
    "StudentManagement"
  );
  const studentManagement = await StudentManagement.deploy();

  console.log(
    `StudentManagement contract deployed to: ${studentManagement.address}`
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
