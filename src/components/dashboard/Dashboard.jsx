// hooks and methods
import {Routes, Route} from "react-router-dom";

// css
import "./dashboard.css";

// importing components
import Navbar from "../navbar/Navbar";
import Student from "../studentPage/Student";
import Event from "../eventPage/Event";

export default function Dashboard () {
    return (
        <div className="dashboard">
            {/* < Navbar /> */}
            <Routes>
                <Route path="/student" element={<Student/>} />
                <Route path="/event" element={<Event/>} />
            </Routes>
        </div>
    );
}