// import React, { useState } from 'react';
// const Web3 = require('web3');


// const ethers = require ('ethers') ;
// // const provider = new Web3.providers.HttpProvider('https://goerli.optimism.io');
// const web3 = new Web3('https://goerli.optimism.io');



// function InputForm() {
//   const [name, setName] = useState('');
//   const [collegeName, setCollegeName] = useState('');
//   const [studentId , setstudentIdchange] = useState('') ;
//   const [degree, setdegreeChange] = useState('') ;
 

//   const handleNameChange = (event) => {
//     setName(event.target.value);
//   };

//   const handleCollegeNameChange = (event) => {
//     setCollegeName(event.target.value);
//   };

//   const handleDegreeChange = (e) =>
//   {
//     setdegreeChange(e.target.value) ;
//   }

//   const handlestudentIdChange = (event)=>
//   {
//     setstudentIdchange(event.target.value) ;
//   }

//   const handleSubmit = (event) => 
//   {
//       addCertificate(name , collegeName , studentId , degree) ;
//   };

//   const contractAddress = '0xc092A45Ffca4b06D5678591CfFf123dAda6C36b6';

//   const ContractAbi = [
//     {
//       "inputs": [
//         {
//           "internalType": "string",
//           "name": "_name",
//           "type": "string"
//         },
//         {
//           "internalType": "string",
//           "name": "_collegeName",
//           "type": "string"
//         },
//         {
//           "internalType": "string",
//           "name": "_degree",
//           "type": "string"
//         },
//         {
//           "internalType": "string",
//           "name": "_studentId",
//           "type": "string"
//         }
//       ],
//       "name": "addCertificate",
//       "outputs": [
//         {
//           "internalType": "bytes32",
//           "name": "",
//           "type": "bytes32"
//         },
//         {
//           "internalType": "uint256",
//           "name": "",
//           "type": "uint256"
//         }
//       ],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "address",
//           "name": "_owner",
//           "type": "address"
//         }
//       ],
//       "stateMutability": "nonpayable",
//       "type": "constructor"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "uint256",
//           "name": "_certificateNo",
//           "type": "uint256"
//         },
//         {
//           "internalType": "string",
//           "name": "_name",
//           "type": "string"
//         },
//         {
//           "internalType": "string",
//           "name": "_collegeName",
//           "type": "string"
//         },
//         {
//           "internalType": "string",
//           "name": "_degree",
//           "type": "string"
//         },
//         {
//           "internalType": "string",
//           "name": "_studentId",
//           "type": "string"
//         }
//       ],
//       "name": "updateCertificate",
//       "outputs": [
//         {
//           "internalType": "bytes32",
//           "name": "",
//           "type": "bytes32"
//         }
//       ],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "uint256",
//           "name": "",
//           "type": "uint256"
//         }
//       ],
//       "name": "certificates",
//       "outputs": [
//         {
//           "internalType": "string",
//           "name": "name",
//           "type": "string"
//         },
//         {
//           "internalType": "string",
//           "name": "collegeName",
//           "type": "string"
//         },
//         {
//           "internalType": "string",
//           "name": "degree",
//           "type": "string"
//         },
//         {
//           "internalType": "string",
//           "name": "studentId",
//           "type": "string"
//         },
//         {
//           "internalType": "bytes32",
//           "name": "hash",
//           "type": "bytes32"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "bytes32",
//           "name": "_hashed",
//           "type": "bytes32"
//         },
//         {
//           "internalType": "uint256",
//           "name": "_CertificateNo",
//           "type": "uint256"
//         }
//       ],
//       "name": "viewCertificate",
//       "outputs": [
//         {
//           "components": [
//             {
//               "internalType": "string",
//               "name": "name",
//               "type": "string"
//             },
//             {
//               "internalType": "string",
//               "name": "collegeName",
//               "type": "string"
//             },
//             {
//               "internalType": "string",
//               "name": "degree",
//               "type": "string"
//             },
//             {
//               "internalType": "string",
//               "name": "studentId",
//               "type": "string"
//             },
//             {
//               "internalType": "bytes32",
//               "name": "hash",
//               "type": "bytes32"
//             }
//           ],
//           "internalType": "struct TrueCertificate.Certificate",
//           "name": "",
//           "type": "tuple"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     }
//   ]


//   // async function addCertificate(name, collegeName, degree, studentId) {
//   //   try {

//   //     const provider = new ethers.providers.Web3Provider(window.ethereum);
//   //           console.log(provider) ;
//   //           const signer = provider.getSigner();
//   //           console.log(signer) ;
//   //     const result = {}
//   //     let contract = await new ethers.Contract(contractAddress, ContractAbi, signer) ;
//   //     const [ hash , certificateNo ] = await contract.addCertificate(name, collegeName, degree, studentId) ;
//   //     console.log('Transaction hash:', result.hash);

//   //   } catch (error) {
//   //     console.error('Error adding certificate:', error.message);
//   //   }
//   // }

//  // Import necessary libraries
// const { ethers } = require("ethers");

// // Replace with your Web3 provider (e.g., Infura, Alchemy)
// const provider = new ethers.providers.JsonRpcProvider("https://opt-goerli.g.alchemy.com/v2/aFeeo3H0MOKm74yMbElNZoeWJbrkAwhs");


// // Connect to the smart contract
// const signer = provider.getSigner();
// const contract = new ethers.Contract(contractAddress, ContractAbi, signer);

// // Function to connect your MetaMask wallet
// // async function connectWallet() {
// //   try {
// //     await ethereum.request({ method: "eth_requestAccounts" });
// //     const accounts = await ethereum.request({ method: "eth_accounts" });
// //     if (accounts.length > 0) {
// //       console.log("Connected to MetaMask account:", accounts[0]);
// //       return accounts[0];
// //     } else {
// //       console.warn("No MetaMask account connected.");
// //       return null;
// //     }
// //   } catch (error) {
// //     console.error("Error connecting to MetaMask:", error);
// //     return null;
// //   }
// // }


// const connectWallet = async () =>
// {
//   // Wait for loading completion to avoid race conditions with web3 injection timing.
//    if (window.ethereum) {
//      const web3 = new Web3(window.ethereum);
//      try {
//        // Request account access if needed
//        await window.ethereum.enable();
//        // Acccounts now exposed
//        return web3;
//      } catch (error) {
//        console.error(error);
//      }
//    }
//    // Legacy dapp browsers...
//    else if (window.web3) {
//      // Use Mist/MetaMask's provider.
//      const web3 = window.web3;
//      console.log('Injected web3 detected.');
//      return web3;
//    }
//    // Fallback to localhost; use dev console port by default...
//    else {
//      const provider = new Web3.providers.HttpProvider('https://goerli.optimism.io');
//      const web3 = new Web3(provider);
//      console.log('No web3 instance injected, using Local web3.');
//      return web3;
//    }
//  };

// // Function to add a certificate
// async function addCertificate(name, collegeName, degree, studentId) {
//   try {
//     const connectedAddress = await connectWallet();
//     if (!connectedAddress) return;

//     const tx = await contract.addCertificate(name, collegeName, degree, studentId);
//     await tx.wait();

//     const hashedData = await tx.events[0].args.hashed;
//     const certificateNo = await tx.events[0].args.certificateNo.toNumber();

//     console.log("Certificate added successfully!");
//     console.log("Hashed data:", hashedData);
//     console.log("Certificate number:", certificateNo);
//   } catch (error) {
//     console.error("Error adding certificate:", error);
//   }
// }

// // Function to view a certificate
// async function viewCertificate(hashedData, certificateNo) {
//   try {
//     const connectedAddress = await connectWallet();
//     if (!connectedAddress) return;

//     const certificate = await contract.viewCertificate(hashedData, certificateNo);

//     console.log("Certificate:");
//     console.log("Name:", certificate.name);
//     console.log("College Name:", certificate.collegeName);
//     console.log("Degree:", certificate.degree);
//     console.log("Student ID:", certificate.studentId);
//   } catch (error) {
//     console.error("Error viewing certificate:", error);
//   }
// }

// // Function to update a certificate
// async function updateCertificate(certificateNo, name, collegeName, degree, studentId) {
//   try {
//     const connectedAddress = await connectWallet();
//     if (!connectedAddress) return;

//     const tx = await contract.updateCertificate(certificateNo, name, collegeName, degree, studentId);
//     await tx.wait();

//     const updatedHashedData = await tx.events[0].args.hashed;

//     console.log("Certificate updated successfully!");
//     console.log("Updated hashed data:", updatedHashedData);
//   } catch (error) {
//     console.error("Error updating certificate:", error);
//   }
// }


//   return (
//     <div>
//       <h2>Input Form</h2>
//         <label>
//           Name:
//           <input type="text" value={name} onChange={handleNameChange} />
//         </label>
//         <br />
//         <label>
//           College Name:
//           <input type="text" value={collegeName} onChange={handleCollegeNameChange} />
//         </label>
//         <br />
//         <label>
//          Degree:
//         <input type="text" value={degree} onChange={handleDegreeChange} />
//       </label>
//       <br/>

//       <label>
//       StudentId:
//      <input type="text" value={studentId} onChange={handlestudentIdChange} />
//    </label>
//    <br/>
//         <button onClick= {handleSubmit} type="submit">Submit</button>
    
//     </div>  
//   );
// }

// export default InputForm;





import React, { useState } from 'react';
import { ethers } from 'ethers';
import pic from './pichome.png' ;
import './App.css' ;


function InputForm() {
  const [name, setName] = useState('');
  const [collegeName, setCollegeName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [degree, setDegree] = useState('');
  const [certiNo , setNo] = useState('');
  const [result, setResult] = useState({
    name: '',
    college: '',
    degree: '',
    studentId: '',
  });

  const [txnDetail , settxnDetail] = useState({
    txnHash : '' ,
    txnBlock:''
  });
  
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleResult = (tx) =>
  {
  
      setResult({
        name: tx.name,
        college: tx.college,
        degree: tx.degree,
        studentId: tx.studentId,
      });
    };

    const handelTxnDetail =(txn)=>
    {  settxnDetail({
      txnHash : txn.hash ,
      txnBlock:txn.block
    })}
  

  const handleCollegeNameChange = (event) => {
    setCollegeName(event.target.value);
  };

  const handleDegreeChange = (event) => {
    setDegree(event.target.value);
  };

  const handleStudentIdChange = (event) => {
    setStudentId(event.target.value);
  };

  const handleNoChnage = (e) =>
  {
    setNo(e.target.value) ;
  }

  const handleView = async (event) =>
  { 
    event.preventDefault();
    await ViewCertificate() ;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    await addCertificate(name, collegeName, studentId, degree);
  };

  const contractAddress = '0xcf1427E983Fc0F377Af08d1D8fb165aa4dfb6D76';

  const ContractAbi = 
    

  [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_collegeName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_degree",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_studentId",
          "type": "string"
        }
      ],
      "name": "addCertificate",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_owner",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "token",
          "type": "uint256"
        }
      ],
      "name": "Info",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "no",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "deployer",
          "type": "address"
        }
      ],
      "name": "InfoCerti",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_certificateNo",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_collegeName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_degree",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_studentId",
          "type": "string"
        }
      ],
      "name": "updateCertificate",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "certificates",
      "outputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "collegeName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "degree",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "studentId",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_CertificateNo",
          "type": "uint256"
        }
      ],
      "name": "viewCertificate",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "collegeName",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "degree",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "studentId",
              "type": "string"
            }
          ],
          "internalType": "struct TrueCertificate.Certificate",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]
  
  const [showForm, setShowForm] = useState(false);
  const [showDetail , setDetail] =useState(false) ;
  
  const addCertificate =async() =>
  {
    try {
      // Connect to the Ethereum network
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      // const provider = new ethers.providers.JsonRpcProvider("https://opt-goerli.g.alchemy.com/v2/aFeeo3H0MOKm74yMbElNZoeWJbrkAwhs");
      const signer = provider.getSigner();
      console.log(provider) ;
      console.log(signer) ;
      // Instantiate the smart contract
      const contract = new ethers.Contract(contractAddress, ContractAbi, signer);

      // Execute the addCertificate function
      const tx = await contract.addCertificate(name , collegeName , degree , studentId);
    
      await tx.wait();
      
      alert(tx.hash) ;
      console.log(tx) ;

      // Retrieve information from the transaction
      // const hashedData = tx.events[0].args.hashed;
      // const certificateNo = tx.events[0].args.certificateNo.toNumber();

      // console.log("Certificate added successfully!");
      // console.log("Hashed data:", hashedData);
      // console.log("Certificate number:", certificateNo);
      // toggleForm();

    } catch (error) {
      console.error("Error adding certificate:", error);
    }
  }
        
         
             
        
   


  async function ViewCertificate() {
    try {
      // Connect to the Ethereum network
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      // const provider = new ethers.providers.JsonRpcProvider("https://opt-goerli.g.alchemy.com/v2/aFeeo3H0MOKm74yMbElNZoeWJbrkAwhs");
      const signer = provider.getSigner();

      // Instantiate the smart contract
      const contract = new ethers.Contract(contractAddress, ContractAbi, signer);

      const tx = await contract.viewCertificate(certiNo);
      handleResult(tx) ;
      // toggleDetail() ;
      console.log(tx) ;

    } catch (error) {
      console.error("Error adding certificate:", error);
    }
  }



const toggleDetail = () =>
{
     
  setDetail(!showDetail) ;
}



const toggleForm = () => 
     {
     setShowForm(!showForm);
  };







 const [wallet , setwallet] = useState('') ;
 const [isconnected , setisconnected] = useState(false) ;
  async function connectWallet() {
  
    if (typeof window.ethereum !== 'undefined') {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    // Request account access if needed
    async function requestAccount() {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
    }
  
    // Connect to the wallet
     
      try {
        await requestAccount();
        const accounts = await provider.listAccounts();
        setwallet(accounts) ;
        setisconnected(true) ;
        console.log('Connected to wallet:', accounts[0]);
      } catch (error) {
        console.error('Error connecting to wallet:', error.message);
      }
    }
  }
  


  return (

    <div className='home-main'> 
      <h1 className="title">certifi-X</h1>
 
    <div className = "wrapper-content">
      <div className = "top-left"> 
          <div> 
            <img  className="image-main" src ={pic}/>
          </div>
      </div>
      <div className='top-right'> 
      <div>
        <h1 className='para'> NOW SAVE YOUR CERTIFICATE ON THE BLOCKCAHIN AND STORE IT SAFELY </h1>
      </div>
      
      <div> 
      <button className={wallet === '' ? 'signbu' : 'connect-button'} onClick={connectWallet}>
  {wallet === '' ? 'CONNECT YOUR WALLET' : `${wallet}`}
</button>

      <div> 
      
       
      </div>
   </div>
         <div> 
           <button className='signbu' onClick ={toggleForm}>
           ADD CERTIFICATE
           </button>
         </div>
         <div> 
            <button className='signbu' onClick={toggleDetail}>
            VIEW CERTIFICATE
            </button>
         </div>

         {showForm && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-indigo-200 w-96 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Add Certificate</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-600">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder='Name'
                    onChange = {handleNameChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-600">College Name </label>
                  <input
                    type="text"
                    placeholder='department'
                    name="department"
                    onChange={handleCollegeNameChange} 
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>  
               
                <div className="mb-4">
                <label className="block text-gray-600">Degree</label>
                <input
                  type="text"
                  placeholder='B.tech'
                  onChange={handleDegreeChange}
               //    name="0-5"
                
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div> <div className="mb-4">
              <label className="block text-gray-600">RollNo</label>
              <input
                type="text"
                placeholder='20ume003'
             //    name="0-5" 
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                onChange={handleStudentIdChange}
              />
            </div>
                <div className="text-right">
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="bg-blue-500 hover:bg-blue-600 mt-10 text-white py-2 px-4 rounded-full focus:outline-none focus:ring focus:ring-blue-300 "
                  >
                    Submit
                  </button>
                  <button onClick={toggleForm}
                   className="bg-blue-500 hover:bg-blue-600 mt-10 text-white ml-5 py-2 px-4 rounded-full focus:outline-none focus:ring focus:ring-blue-300 ">
                   Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {showDetail && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-indigo-200 w-96 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">View Certificate</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-600"> Certificate NO. </label>
                  <input
                    type="number"
                    name="certificateNo"
                    placeholder='certificate No '
                    onChange = {handleNoChnage}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-600"> {result.name}</label>
               
                </div>  
               
                <div className="mb-4">
                <label className="block text-gray-600">{result.college}</label>
              
              </div> <div className="mb-4">
              <label className="block text-gray-600">{result.degree}</label>
      
            </div>
            <div className="mb-4">
              <label className="block text-gray-600">{result.studentId}</label>
      
            </div>
                <div className="text-right">
                  <button
                    type="submit"
                    onClick={handleView}
                    className="bg-blue-500 hover:bg-blue-600 mt-10 text-white py-2 px-4 rounded-full focus:outline-none focus:ring focus:ring-blue-300 "
                  >
                    Submit
                  </button>
                  <button onClick={toggleDetail}
                   className="bg-blue-500 hover:bg-blue-600 mt-10 text-white ml-5 py-2 px-4 rounded-full focus:outline-none focus:ring focus:ring-blue-300 ">
                   Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      
         
      </div>
   </div>
   
   </div>

  );
}


export default InputForm;
