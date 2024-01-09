pragma solidity >=0.8.2 <0.9.0;

contract TrueCertificate 
{

    address owner ;
    uint256 certificateNo ;
    uint256 private nonce ;

   
    struct Certificate
    {
        string name;
        string collegeName;
        string degree;
        string studentId;
        bytes32 hash ; 
    }

    mapping(uint256 => Certificate ) public certificates ; 

    constructor( address _owner )
    {
        nonce = 192 ;
        owner = _owner ;
    }

    function addCertificate(string memory _name , string memory _collegeName , string memory _degree , string memory _studentId) public onlyOwner returns(bytes32 , uint256)
    {      
          bytes32 hashed = encryptData(_name , _collegeName , _degree, _studentId) ;
          certificateNo++ ;
          certificates[certificateNo] = Certificate(_name, _collegeName, _degree, _studentId  , hashed );
          return (hashed, certificateNo) ; 
    }

    function viewCertificate (bytes32 _hashed , uint256 _CertificateNo ) view  public  returns(Certificate memory)
    {
        require(certificates[_CertificateNo].hash == _hashed , " you are not authorized ") ;

        Certificate memory certificateInstance = Certificate({
            name: certificates[_CertificateNo].name,
            collegeName: certificates[_CertificateNo].collegeName,
            degree: certificates[_CertificateNo].degree,
            studentId: certificates[_CertificateNo].studentId, 
            hash: 0 
        });

        return certificateInstance;
    }
    
    function updateCertificate (uint256 _certificateNo ,string memory _name , string memory _collegeName , string memory _degree , string memory _studentId) public onlyOwner returns(bytes32)
    {   
        
          bytes32 hashed = encryptData(_name , _collegeName , _degree, _studentId) ;
          certificates[_certificateNo] = Certificate(_name, _collegeName, _degree, _studentId  , hashed );
          return hashed ; 
    } 
    
    
    function encryptData(string memory _name , string memory _collegeName , string memory _degree , string memory _studentId) internal returns(bytes32)
     {
        bytes32 encryptedName = keccak256(abi.encodePacked(_name));
        bytes32 encryptedCollegeName = keccak256(abi.encodePacked(_collegeName));
        bytes32 encryptedDegree = keccak256(abi.encodePacked(_degree));
        bytes32 encryptedStudentId = keccak256(abi.encodePacked(_studentId));
        bytes32 encryptedNonce = keccak256(abi.encodePacked(nonce)) ;
        nonce ++ ; 
        return keccak256(abi.encodePacked(encryptedName, encryptedCollegeName , encryptedStudentId , encryptedDegree, encryptedNonce ));
    
    }

    modifier onlyOwner ()
    {
        require(msg.sender == owner , "You are not the owner ") ;
         _;
    }

}