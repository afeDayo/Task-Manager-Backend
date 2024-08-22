// A controller in backend is like a manager that handles the logic for specific parts of your application. it decides what should happen when a request comes in and coordinates between the request, your data and response

const Task = require("../models/task");
const validateID = require("../utils/validateID");

// ======Functiontion to get all the tasks======
const getAllTask = async (req, res) => {
  const tasks = await Task.find({}); //  Retreve all tasks from the database
  res.status(200).json({ tasks }); // Send the retrieved tasks in a JSON response
};

// =======Function for creating a new task=====
const createTask = async (req, res) => {
  const { title, description, tag } = req.body; // destructure the required feilds from the request body

  if (!title) {
    return res.status(400).json({ message: "Please provide a Title" });
  }

  if (!description) {
    return res.status(400).json({ message: "Please provide Description" });
  }

  if (!tag) {
    return res.status(400).json({ message: "Choose a Tag" });
  }

  const task = await Task.create(req.body); // Create a new task with the request data
  res.status(201).json({ message: "Task created Successfully", task }); // Send a status code with a message of success
};

// ====Function for editing an existing task======
const editTask = async (req, res) => {
  const { id } = req.params; // Get the task ID from the request parameters

  if (!validateID(id)) {
    return res.status(400).json({ message: `ID: ${id} is not valid ` });
  }
  const task = await Task.findOneAndUpdate({ _id: id }, { ...req.body }); // Updates the task with the provided data
  res.status(200).json({ message: "Task Updated Successfully" }); // Send the success message if updated successfully
};

// ======Function to delete an existing task===
const deleteTask = async (req, res) => {
  const { id } = req.params; // Get the task ID from the requested parameter

  if (!validateID(id)) {
    return res.status(400).json({ message: `ID: ${id} is not valid ` });
  }
  const task = await Task.findOneAndDelete({ _id: id }); // Delete the task with the special ID
  res.status(200).json({ message: "Task Successsfully Delete" }); //Send success message if deletion is successful
};

//======Function to get each task=========
const eachTask = async (req, res) => {
  const { id } = req.params; // Get the task ID from the request parameter

  if (!validateID(id)) {
    return res.status(400).json({ message: `ID: ${id} is not valid ` });
  }

  const task = await Task.findOne({ _id: id }); // Find the task with the specified ID
  res.status(200).json({ task }); //Send the found task in JSON responce
};

module.exports = { getAllTask, createTask, editTask, deleteTask, eachTask }; // Export the controller functions to be used in the router
