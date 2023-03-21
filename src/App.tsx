
import logo from './logo.svg';
import './App.css';
import {CafeGrid} from './components/Cafe';
import NewCafe from './components/NewCafe';
import NewEmployee from './components/NewEmployee';
import EmployeeGrid from './components/ListEmployee';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import 'ag-grid-community/dist/styles/ag-grid.css';
// import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { Home } from './components/Home';

function App() {

  return (
    <Router>
    <div className="App">
    <Routes>
    <Route path="/addnewcafe" Component={NewCafe} />
    <Route path="/cafe" Component={CafeGrid} />
    <Route path="/employee"  Component={EmployeeGrid} />

    <Route path="/addnewemployee" Component={NewEmployee} />

    <Route path="/"  Component={Home} />
    {/* <Route path="/emp/:name"  Component={EmployeeGrid} /> */}


    </Routes>
    </div>
    </Router>
  );
}

export default App;
