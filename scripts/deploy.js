const { ethers } = require('hardhat');

async function main() {
  // Get the accounts from Hardhat
  const [deployer] = await ethers.getSigners();

  console.log('Deploying contracts with the account:', deployer.address);

  // Deploy TrueCertificate contract
  const TrueCertificate = await ethers.getContractFactory('TrueCertificate');
  const trueCertificate = await TrueCertificate.deploy(deployer.address);

  console.log('TrueCertificate contract deployed to address:', trueCertificate.address);

  // Verify contract on Etherscan
  await trueCertificate.deployed();
  console.log('Contract verified on Etherscan:', `https://etherscan.io/address/${trueCertificate.address}`);

  // You can interact with the contract here if needed

  // Optional: Print the contract ABI
  const abi = TrueCertificate.interface.format('json');
  console.log('Contract ABI:', JSON.stringify(abi, null, 2));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
