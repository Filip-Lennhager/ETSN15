import React from 'react';

const PatientOverview = ({ patients, onPatientClick }) => {
    return (
      <div>
        {patients.map(patient => (
          <div key={patient.id} onClick={() => onPatientClick(patient)}>
            {patient.name} - Status: {patient.status}
            {/* Other patient details */}
          </div>
        ))}
      </div>
    );
  };
  

export default PatientOverview;
