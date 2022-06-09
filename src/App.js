// css
import './App.css';

// hooks & others
import {Routes, Route} from "react-router-dom";

// components
import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';
import Student from "./components/studentPage/Student";
import Event from "./components/eventPage/Event";
import Chart from './components/chartPage/Chart';


function App() {
  return (
    <div className="App">
      < Routes>
        < Route path='/login' element={< Login />} />
        < Route path='/dashboard/' element={< Dashboard />} >
          <Route path='student' element={< Student />} />
          <Route path='event' element={< Event />} />
          <Route path='chart' element={< Chart />} />
          <Route path='*' element={< Student />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
