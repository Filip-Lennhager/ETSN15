# Pedatim Admin Dashboard Prototype

curl -X POST http://localhost:5001/api/patients/populate

curl -X POST http://localhost:5001/api/patients/add \
     -H 'Content-Type: application/json' \
     -d '{"name": "John Doe", "status": "Active"}'

curl -X DELETE http://localhost:5001/api/patients/clear

curl -X DELETE http://localhost:5001/api/patient/{patient_id}

curl -X DELETE http://localhost:5001/api/patients/remove/{patient_name}