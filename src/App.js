// css
import './App.css';

// hooks & others
import {Routes, Route} from "react-router-dom";

// components
import Login from './components/login/Login';
import Dashboard from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      < Routes>
        < Route path='/login' element={< Login />} />
        < Route path='/dashboard/*' element={< Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
