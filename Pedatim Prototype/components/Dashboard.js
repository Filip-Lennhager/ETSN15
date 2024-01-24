// components/Dashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dashboard() {
  const [stats, setStats] = useState({ patients: 0, active: 0, alerts: 0 });

  useEffect(() => {
    // Placeholder for fetching stats from the server
    axios.get('/api/stats').then(response => {
      setStats(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <div>
        <p>Total Patients: {stats.patients}</p>
        <p>Active Rehabilitations: {stats.active}</p>
        <p>Alerts: {stats.alerts}</p>
      </div>
    </div>
  );
}

export default Dashboard;
