import React from 'react';

const AlertComponent = ({ alerts, onDismiss }) => {
  return (
    <div className="alerts">
      {alerts.map(alert => (
        <div key={alert.id} className="alert">
          <span>{alert.message}</span>
          <button onClick={() => onDismiss(alert.id)}>Dismiss</button>
        </div>
      ))}
    </div>
  );
}

export default AlertComponent;
