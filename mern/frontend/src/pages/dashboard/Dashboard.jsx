import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import { v4 as uuidv4 } from "uuid";

const Dashboard = () => {
  const [contracts, setContracts] = useState([]);
  const [selectedFileUrl, setSelectedFileUrl] = useState(null);
  const [selectedContract, setSelectedContract] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); // New state for search query

  // Handle file upload
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      const contractId = uuidv4(); // Assign unique contract ID
      const newContract = {
        id: contractId,
        file: file,
        fileName: file.name,
        fileUrl: URL.createObjectURL(file), // Create a URL for the file
      };
      setContracts([...contracts, newContract]);
      setSelectedContract(newContract);
      setSelectedFileUrl(newContract.fileUrl);
    } else {
      alert("Please upload a valid PDF file");
    }
  };

  // Handle file deletion
  const handleFileDelete = (contractId) => {
    const updatedContracts = contracts.filter(
      (contract) => contract.id !== contractId
    );
    setContracts(updatedContracts);
    setSelectedFileUrl(null);
    setSelectedContract(null);
  };

  // Handle file preview
  const handleFilePreview = (contract) => {
    setSelectedContract(contract);
    setSelectedFileUrl(contract.fileUrl);
  };

  // Handle search functionality
  const filteredContracts = contracts.filter((contract) =>
    contract.fileName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/5 bg-white p-6 shadow-lg">
        <div className="h-16 mb-8 bg-gray-200 rounded-md"></div>
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col p-6">
        {/* Header */}
        <header className="flex justify-between items-center pb-6">
          <h1 className="text-2xl font-semibold">
            Welcome, <span className="font-bold">Importer</span>
          </h1>
          <div className="flex items-center space-x-4">
            <input
              type="file"
              accept="application/pdf"
              onChange={handleFileUpload}
              className="hidden"
              id="file-upload"
            />
            <label
              htmlFor="file-upload"
              className="bg-black text-white px-4 py-2 rounded-lg cursor-pointer"
            >
              New Contract
            </label>
            <div className="flex items-center space-x-2">
              <span className="bg-gray-200 rounded-full w-8 h-8"></span>
              <span className="font-medium">Alea Elfouly K</span>
              <span>&#x25BE;</span>
            </div>
          </div>
        </header>

        {/* Subheader */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-500">WEDNESDAY, NOVEMBER 22, 2023</p>
          <div className="flex space-x-6">
            <button className="text-black border-b-2 border-black">All</button>
            <button className="text-gray-500 hover:text-black">Imports</button>
            <button className="text-gray-500 hover:text-black">Exports</button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Search contracts by file name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 border rounded-lg w-2/3"
          />
        </div>

        {/* Contracts List */}
        <div className="flex-1">
          {filteredContracts.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 mb-6">
              {filteredContracts.map((contract) => (
                <div
                  key={contract.id}
                  className="border p-4 rounded-lg flex justify-between items-center"
                >
                  <div>
                    <p className="font-semibold">Contract ID: {contract.id}</p>
                    <p>{contract.fileName}</p>
                  </div>
                  <div className="space-x-4">
                    <button
                      className="text-blue-500"
                      onClick={() => handleFilePreview(contract)}
                    >
                      Preview
                    </button>
                    <button
                      className="text-red-500"
                      onClick={() => handleFileDelete(contract.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No contracts found.</p>
          )}

          {/* PDF Preview using object tag */}
          {selectedFileUrl && (
            <div className="border rounded-lg p-4">
              <h2 className="font-semibold mb-4">
                Preview of {selectedContract?.fileName}
              </h2>
              <div className="border rounded-lg w-full h-96">
                <object
                  data={selectedFileUrl}
                  type="application/pdf"
                  width="100%"
                  height="100%"
                >
                  <p>
                    Your browser does not support PDFs. Please{" "}
                    <a href={selectedFileUrl}>download the PDF</a> to view it.
                  </p>
                </object>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
