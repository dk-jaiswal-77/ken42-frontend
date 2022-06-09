import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";

import getStudentsAction from "../../redux/getStudents/action";

// css
import "./student.css";

import { BsSearch } from "react-icons/bs";


export default function Student() {

    const dispatch = useDispatch();

    const students = useSelector(state => state.students.students);
    console.log(students);

    const page = useRef(1);

    useEffect(() => {
        const student_query_type = localStorage.getItem("student_query_type");
        if(student_query_type)
        {
            localStorage.removeItem("student_query_type");
        }
        dispatch(getStudentsAction());
    }, []);

    const student_count = JSON.parse(localStorage.getItem("student_count")) || 0;

    // ---------------------------------------------------------->
    const filterQuery = useRef({
        term: "",
        current_year: ""
    });

    function handleFilter(e){
        filterQuery.current[e.target.id] = e.target.value;
        // console.log(filterQuery.current);
        localStorage.setItem("student_query_type", "filter");

        // updating localStorage for student_filter_query
        if((filterQuery.current.term === "") && (filterQuery.current.current_year === ""))
        {
            localStorage.setItem("student_filter_query", JSON.stringify({}));
        }
        else if((filterQuery.current.term != "") && (filterQuery.current.current_year != ""))
        {
            localStorage.setItem("student_filter_query",JSON.stringify(filterQuery.current));
        }
        else if(filterQuery.current.term != "")
        {
            localStorage.setItem("student_filter_query",JSON.stringify({term : filterQuery.current.term}));
        }
        else 
        {
            localStorage.setItem("student_filter_query",JSON.stringify({current_year : filterQuery.current.current_year}));
        }

        // update store
        dispatch(getStudentsAction(page.current));
    }

    return (
        <div className="studentPage_container">

            <div className="search_filter_row">
                <div className="student_list_title_container">Student List</div>

                <div className="search_container">
                    <select id="select">
                        <option value="null">Search By</option>
                        <option value="name">Name</option>
                        <option value="roll_number">Roll number</option>
                        <option value="contact_number">Contact number</option>
                    </select>

                    <input type="text" id="search_box" className="input_entry" />

                    <button className="btn_1">
                        < BsSearch className="search_logo" />
                    </button>
                </div>

                <div className="filter_container">
                    <select id="term" value={filterQuery.term} onChange={handleFilter} >
                        <option value="">Filter by Term</option>
                        <option value="first">First</option>
                        <option value="second">Second</option>
                    </select>

                    <select id="current_year" value={filterQuery.current_year} onChange={handleFilter} >
                        <option value="">Filter by Current Year</option>
                        <option value="first">First</option>
                        <option value="second">Second</option>
                        <option value="third">Third</option>
                        <option value="fourth">Fourth</option>
                    </select>
                </div>

                <div className="student_count_container btn_1">
                    <span>Count :</span>
                    <span>{student_count}</span>
                </div>
            </div>

            <div className="list_head single_data">
                <span className="student_name">Name</span>
                <span className="student_roll_number">Roll No.</span>
                <span className="student_term">Term</span>
                <span className="student_current_year">Current Year</span>
                <span className="student_contact_number">Contact No.</span>
            </div>

            {students.map(student => {
                return (
                    <div key={student._id} className="single_data">
                        <span>{student.name}</span>
                        <span>{student.roll_number}</span>
                        <span>{student.term}</span>
                        <span>{student.current_year}</span>
                        <span>{student.contact_number}</span>
                    </div>
                );
            })}

        </div>
    );
}