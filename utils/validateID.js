// utils is the short for utilities which refers to a collection of helper functions or modules desgned to perform common tasks on multible functions

// These tasks often includes things like data validation, formatting or other repetitive ioperations that are used across different parts of the application

const mongoose = require("mongoose"); // Import Mongoose

// Utility function to validate MongoDB ObjectIDs
const validateID = (id) => {
  const isValid = mongoose.Types.ObjectId.isValid(id); // Check if the ID is a valid MongoDB ObjectID
  return isValid; // Retun the validation result
};

module.exports = validateID; // Export the function to be used in the controller



