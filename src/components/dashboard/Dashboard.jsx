// hooks and methods
import {Outlet} from "react-router-dom";

// css
import "./dashboard.css";

// importing components
import Navbar from "../navbar/Navbar";

export default function Dashboard () {
    return (
        <div className="dashboard_container">
            < Navbar />
            < Outlet />
        </div>
    );
}