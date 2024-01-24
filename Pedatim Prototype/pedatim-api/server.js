const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Connection URL - replace with your own connection string
const mongoDBUrl = 'mongodb://localhost:27017/pedatim';

mongoose.connect(mongoDBUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Define a simple schema for Patients (can be expanded as needed)
const patientSchema = new mongoose.Schema({
  name: String,
  status: String,
  // Add more fields as required
});

const Patient = mongoose.model('Patient', patientSchema);

// Route to get all patients
app.get('/api/patients', (req, res) => {
  Patient.find()
    .then(patients => res.json(patients))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Route to get a single patient by ID
app.get('/api/patient/:id', (req, res) => {
  Patient.findById(req.params.id)
    .then(patient => res.json(patient))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Route to add a new patient
app.post('/api/patients/add', (req, res) => {
  const newPatient = new Patient(req.body);
  newPatient.save()
    .then(() => res.json('Patient added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Sample patient data
const samplePatients = [
  { name: "Alice Johnson", status: "Active" },
  { name: "Bob Smith", status: "Inactive" },
  // Add more sample data as required
];

// Route to populate the database with sample data
app.post('/api/patients/populate', (req, res) => {
  Patient.insertMany(samplePatients)
    .then(() => res.json('Sample patients added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

app.delete('/api/patient/:id', (req, res) => {
  Patient.findByIdAndRemove(req.params.id)
    .then(() => res.json('Patient removed successfully!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

app.delete('/api/patients/remove/:name', (req, res) => {
  const patientName = req.params.name;
  Patient.findOneAndDelete({ name: patientName })
    .then(() => res.json('Patient removed successfully!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

app.delete('/api/patients/clear', (req, res) => {
  Patient.deleteMany({})
    .then(() => res.json('All patients removed from the database!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// add more routes here
