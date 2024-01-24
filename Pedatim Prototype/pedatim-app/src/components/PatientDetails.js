// components/PatientDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function PatientDetails() {
  const { id } = useParams();
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    // Placeholder for fetching patient details from the server
    axios.get(`/api/patient/${id}`).then(response => {
      setPatient(response.data);
    });
  }, [id]);

  if (!patient) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Patient Details</h1>
      <p>Name: {patient.name}</p>
      <p>Status: {patient.status}</p>
      {/* More patient details can be added here */}
    </div>
  );
}

export default PatientDetails;
