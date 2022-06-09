// hooks 
import { useState } from "react";
import {useNavigate} from "react-router-dom";

// react-icons
import {BsFillCalendarEventFill} from "react-icons/bs";
import {BsPeopleFill} from "react-icons/bs";
import {AiFillPieChart} from "react-icons/ai";
import {AiFillCaretDown} from "react-icons/ai";

// logo
import navbar_company_logo from "../../assets/ken42_logo.svg"; 

// css
import "./navbar.css";

export default function Navbar(){

    const user = JSON.parse(localStorage.getItem("ken42_user"));

    const [selected, setSelected] = useState("student");    

    const navigate = useNavigate();

    return (
        <nav className="navbar">

            <div className="navbar_left">
                <img src={navbar_company_logo} alt="navbar company logo" className="navbar_company_logo" />
            </div>

            <div className="navbar_mid">
                <div className={(selected === "student") ? "navbar_option selected_option" : "navbar_option"} id="student" onClick={() => {
                    setSelected("student");
                    navigate("/dashboard/student");
                }} >
                    < BsPeopleFill className="navbar_option_icon" />
                    <span>Students</span>
                </div>

                <div className={(selected === "event") ? "navbar_option selected_option" : "navbar_option"} id="event" onClick={() => {
                    setSelected("event");
                    navigate("/dashboard/event");
                }} >
                    < BsFillCalendarEventFill className="navbar_option_icon" />
                    <span>Events</span>
                </div>

                <div className={(selected === "chart") ? "navbar_option selected_option" : "navbar_option"} id="chart" onClick={() => {
                    setSelected("chart");
                    navigate("/dashboard/chart");
                }} >
                    < AiFillPieChart className="navbar_option_icon" />
                    <span>Term-wise Charts</span>
                </div>
            </div>

            <div className="navbar_right">
                <span className="navbar_email">{user.email}</span>
                < AiFillCaretDown />
            </div>

        </nav>
    );
}