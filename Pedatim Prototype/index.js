// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

// App.js
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './components/App.js/Dashboard';
import PatientList from './components/App.js/PatientList';
import PatientDetails from './components/App.js/PatientDetails';
import Login from './components/App.js/Login';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/patients" exact component={PatientList} />
        <Route path="/patient/:id" component={PatientDetails} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
