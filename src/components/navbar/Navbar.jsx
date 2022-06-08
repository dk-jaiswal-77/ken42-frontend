// hooks 
import { useRef } from "react";

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

    const selected_option = useRef("navbar_option_students");

    return (
        <nav className="navbar">

            <div className="navbar_left">
                <img src={navbar_company_logo} alt="navbar company logo" className="navbar_company_logo" />
            </div>

            <div className="navbar_mid">
                <div className="navbar_option selected_option" id="navbar_option_students">
                    < BsPeopleFill className="navbar_option_icon" />
                    <span>Students</span>
                </div>

                <div className="navbar_option" id="navbar_option_events">
                    < BsFillCalendarEventFill className="navbar_option_icon" />
                    <span>Events</span>
                </div>

                <div className="navbar_option" id="navbar_option_charts">
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