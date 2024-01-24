// components/PatientList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PatientList() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    // Placeholder for fetching patient list from the server
    axios.get('/api/patients').then(response => {
      setPatients(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Patient List</h1>
      <ul>
        {patients.map(patient => (
          <li key={patient.id}>{patient.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default PatientList;
