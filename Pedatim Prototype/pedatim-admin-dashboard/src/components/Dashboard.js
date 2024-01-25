import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import PatientOverview from './PatientOverview';
import DeviceManagement from './DeviceManagement';
import AlertComponent from './AlertComponents';




const Dashboard = () => {
  const [patients, setPatients] = useState([]);
  const [devices, setDevices] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState('');
  const [selectedDevice, setSelectedDevice] = useState('');
  const [patientSelection, setPatientSelection] = useState('');
  const [deviceSelection, setDeviceSelection] = useState('');
  const [newPatientData, setNewPatientData] = useState({ name: '', status: ''});
  const [showNewPatientForm, setShowNewPatientForm] = useState(false);

  // Define the openModal and closeModal functions
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    fetchPatients();
    fetchDevices();
    fetchAlerts();
  }, []);

  const fetchPatients = async () => {
    try {
      const response = await fetch('http://localhost:5001/api/patients'); // Replace with actual API endpoint
      const data = await response.json();
      setPatients(data);
    } catch (error) {
      console.error('Error fetching patients:', error);
    }
  };

  const fetchDevices = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/patients`); // Replace with actual API endpoint
    
    const data = await response.json();
    setDevices(data);
  } catch (error) {
    console.error('Error fetching devices:', error);
  }
};


const fetchAlerts = async () => {
    try {
      const response = await fetch('/api/alerts'); // Replace with actual API endpoint
      const data = await response.json();
      setAlerts(data);
    } catch (error) {
      console.error('Error fetching alerts:', error);
    }
  };
  

  const handleDismissAlert = (alertId) => {
    setAlerts(alerts.filter(alert => alert.id !== alertId));
  };

  const handleAssign = async () => {
    const payload = { patientId: selectedPatient, deviceId: selectedDevice };
    try {
      const response = await fetch('/api/assign-device', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        // Handle successful assignment
        closeModal();
      } else {
        // Handle errors
      }
    } catch (error) {
      console.error('Error assigning device:', error);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setSelectedPatient(patientSelection);
    setSelectedDevice(deviceSelection);
    handleAssign();
  };

  const handleNewPatientChange = (e) => {
    setNewPatientData({ ...newPatientData, [e.target.name]: e.target.value });
  };

  const submitNewPatient = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5001/api/patients/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPatientData),
      });
      if (response.ok) {
        fetchPatients(); // Fetch patients again to update the list
        setShowNewPatientForm(false); // Close the form
      } else {
        // Handle errors
      }
    } catch (error) {
      console.error('Error adding new patient:', error);
    }
  };

  const handlePatientClick = (patient) => {
    setSelectedPatient(patient);
    // Open modal or show edit form
  };

  const handleTrainingProgramUpdate = (updatedProgram) => {
    // API call to update the training program
    // Refresh patient data or update state accordingly
  };

  return (
    <div className="dashboard-container">
        <h2>Patient Overview</h2>
      <PatientOverview patients={patients} onPatientClick={handlePatientClick} />
      <DeviceManagement devices={devices} />
      <AlertComponent alerts={alerts} onDismiss={handleDismissAlert} />
      <button onClick={() => setShowNewPatientForm(!showNewPatientForm)}>Register New Patient</button>
      {showNewPatientForm && (
        <form onSubmit={submitNewPatient}>
          <label>
            Name:
            <input type="text" name="name" value={newPatientData.name} onChange={handleNewPatientChange} />
          </label>
          <label>
            Status:
            <input type="text" name="status" value={newPatientData.status} onChange={handleNewPatientChange} />
          </label>
          <button type="submit">Add Patient</button>
        </form>
      )}
      <button onClick={openModal}>Assign Device to Patient</button>
      {isModalOpen && (
        <Modal>
          <form onSubmit={handleFormSubmit}>
            <label>
              Select Patient:
              <select value={patientSelection} onChange={(e) => setPatientSelection(e.target.value)}>
                {patients.map(patient => (
                  <option key={patient.id} value={patient.id}>{patient.name}</option>
                ))}
              </select>
            </label>
            <label>
              Select Device:
              <select value={deviceSelection} onChange={(e) => setDeviceSelection(e.target.value)}>
                {devices.map(device => (
                  <option key={device.id} value={device.id}>{device.name}</option>
                ))}
              </select>
            </label>
            <button type="submit">Assign</button>
          </form>
          <button onClick={closeModal}>Cancel</button>
        </Modal>
      )}
      {selectedPatient && (
        <EditTrainingProgramForm 
          patient={selectedPatient} 
          onSave={handleTrainingProgramUpdate} 
        />
      )}
    </div>
  );
};

const Modal = ({ children }) => {
    return (
      <div className="modal">
        <div className="modal-content">
          {children}
        </div>
      </div>
    );
  };

  const EditTrainingProgramForm = ({ patient, onSave }) => {
    // Form for editing the training program
    // Include save button which calls onSave with the updated program
    return (
      <form>
        {/* Form fields to edit the training program */}
        <button type="submit">Save Changes</button>
      </form>
    );
  };

export default Dashboard;
