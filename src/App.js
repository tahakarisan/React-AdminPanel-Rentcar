import logo from './logo.svg';
import './App.css';
import './index.css'; // veya './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './screens/homepage/Homepage';
import Dashboard from './screens/dashboard/Dashboard';
import AddCar from './screens/addCar/AddCar';
import AddBrand from './screens/addBrand/AddBrand';
import RoleManagement from './screens/roleManagement/RoleManagement';
function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/addCar" element={<AddCar/>}/>
          <Route path="/addBrand" element={<AddBrand/>}/>
          <Route path="/roleManagement" element={<RoleManagement/>}/>
       </Routes> 
    </Router>
  );
}

export default App;
