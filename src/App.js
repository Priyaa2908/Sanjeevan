
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Appointment from './Component/Appointment'
import HomePage from './Pages/HomePage';
import PatientPage from './Pages/Patient/PatientPage';
import Doctor from './Component/DoctorDashboard/Doctor'
import PatientProfile from './Component/PatientProfile/PatientProfile.js';
import Prescription from './Component/Prescriptionform/Prescription'
import PatientList from './Component/Patient/PatientList';
import GetAppointment from './Component/GetAppointment/GetAppointment';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register'
import LabelPrint from './Component/LabelPrint/LabelPrint';
import Admin from './Component/AdminDashboard/Admin';
import Cases from './Component/Cases/Cases';
import CasePatient from './Component/Cases/CasePatient'
import Pre from './Component/Pre';
import CreateInventory from './Component/CreateInventory/CreateInventory'

function App() {
  return (
    <div className="App">

      <Router>
        <Switch>

          {/* <Route path="/doctor-dashboard"> <Doctor /> </Route> */}
        
          <Route path="/admin-dashboard"><Admin /></Route>
          <Route path='/Appointment'><Appointment /></Route>
          <Route path='/get-appointment'> <GetAppointment /> </Route>
          <Route path='/PatientProfile'> <PatientProfile /></Route>
          {/* <Route path="/prescription"> <Prescription /> </Route> */}
          <Route path="/prescription/:id"> <Prescription /> </Route>
          <Route path="/pre"><Pre /></Route>
          <Route path="/createPatient/:id"> <PatientPage /> </Route>
          <Route path="/Patient"> <PatientList /> </Route>
          <Route path="/login"><Login /></Route>
          <Route path="/register"><Register /></Route>
          <Route path="/lable-print/:id"><LabelPrint /></Route>
          <Route path="/CreateInventory"><CreateInventory/></Route>


          <Route path="/cases"><Cases /></Route>
          <Route path="/casepatient/:name/:id"> <CasePatient /> </Route>

          {/* <Route path='/'> <HomePage /> </Route> */}
          <Route path="/"> <Doctor /> </Route>

        </Switch>

      </Router>
    </div>
  );
}

export default App;
