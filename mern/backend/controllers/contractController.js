const Contract = require("../models/Contract");
const fs = require("fs");
const path = require("path");

// Create a contract (upload PDF)
const createContract = async (req, res) => {
  const file = req.file;
  if (!file) {
    return res.status(400).send("No file uploaded.");
  }

  const newContract = new Contract({
    fileName: file.filename,
    filePath: file.path,
    originalName: file.originalname,
  });

  try {
    const savedContract = await newContract.save();
    res
      .status(201)
      .json({
        message: "Contract created successfully",
        contract: savedContract,
      });
  } catch (error) {
    res.status(500).json({ message: "Failed to save contract", error });
  }
};

// Get all contracts
const getContracts = async (req, res) => {
  try {
    const contracts = await Contract.find();
    res.status(200).json(contracts);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch contracts", error });
  }
};

// Delete a contract by ID
const deleteContract = async (req, res) => {
  const contractId = req.params.id;

  try {
    const contract = await Contract.findById(contractId);
    if (!contract) {
      return res.status(404).send("Contract not found.");
    }

    // Delete file from disk
    fs.unlink(contract.filePath, async (err) => {
      if (err) {
        return res.status(500).send("Failed to delete file.");
      }

      // Remove from MongoDB
      await contract.remove();
      res.status(200).json({ message: "Contract deleted successfully" });
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete contract", error });
  }
};

// Preview contract (send file as response)
const previewContract = (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, "../uploads/", filename);

  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    res.status(404).send("File not found.");
  }
};

module.exports = {
  createContract,
  getContracts,
  deleteContract,
  previewContract,
};
