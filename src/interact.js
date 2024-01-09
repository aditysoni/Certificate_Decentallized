

// const account = '0xE1C80d5A24F418BE944A317F9828deaC6FEC967a'; // Replace with your Ethereum account address
// const privateKey = 'ab3039bf68699132ef9dda249d056ad1e60fff08ede19fefd57f8afa5486bd0f'; // Replace with your private key


const { ethers } = require('ethers');
const fs = require('fs');

// Replace with the actual contract address and ABI
const contractAddress = '0x1234567890123456789012345678901234567890';
const contractABI = JSON.parse(fs.readFileSync('path/to/TrueCertificate.json', 'utf-8')).abi;

// Replace with your Ethereum node URL
const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545');

// Replace with your Ethereum account private key
const privateKey = '0xYourPrivateKey';

// Connect to the deployed contract
const signer = new ethers.Wallet(privateKey, provider);
const TrueCertificateContract = new ethers.Contract(contractAddress, contractABI, signer);

async function addCertificate(name, collegeName, degree, studentId) {
  try {
    const result = await TrueCertificateContract.addCertificate(name, collegeName, degree, studentId);
    console.log('Transaction hash:', result.hash);
  } catch (error) {
    console.error('Error adding certificate:', error.message);
  }
}

async function viewCertificate(hashed, certificateNo) {
  try {
    const result = await TrueCertificateContract.viewCertificate(hashed, certificateNo);
    console.log('Certificate details:', result);
  } catch (error) {
    console.error('Error viewing certificate:', error.message);
  }
}

async function updateCertificate(certificateNo, name, collegeName, degree, studentId) {
  try {
    const result = await TrueCertificateContract.updateCertificate(certificateNo, name, collegeName, degree, studentId);
    console.log('Transaction hash:', result.hash);
  } catch (error) {
    console.error('Error updating certificate:', error.message);
  }
}

// Example usage
addCertificate('John Doe', 'University XYZ', 'Computer Science', '12345');
viewCertificate('hashedValue', 1);
updateCertificate(1, 'Updated Name', 'Updated College', 'Updated Degree', '54321');
