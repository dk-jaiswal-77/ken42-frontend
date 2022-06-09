import updateStudentsAction from "../updateStudents/action";
import updateSearchedStudentsAction from "../updateSearchedStudents/action";
import { backend_url } from "../../url/url";

export default function getStudentsAction(page=1){
    return async (dispatch) => {
        try{
            const student_query_type = localStorage.getItem("student_query_type");
            // console.log(student_query_type);

            if(!student_query_type)
            {
                // get all students
                const res = await fetch(`${backend_url}/students/all/${page}/15`);
                const res_data = await res.json();
                if(res_data.success)
                {
                    // successful fetching data
                    //update localStorage for student_count
                    localStorage.setItem("student_count", JSON.stringify(res_data.count));
                    // update store
                    dispatch(updateStudentsAction(res_data.data));
                }
            }
            else if(student_query_type === "filter")
            {
                // get students as per applied filters
                const student_filter_query = localStorage.getItem("student_filter_query");
                // console.log(student_filter_query);

                const res = await fetch(`${backend_url}/students/filter/${page}/15`, {
                    method : "POST", 
                    body : student_filter_query,
                    headers : {
                        "Content-Type" : "application/json"
                    }
                });

                const res_data = await res.json();

                if(res_data.success)
                {
                    // successful fetching data
                    // update store
                    dispatch(updateStudentsAction(res_data.data));
                }
            }
            else if(student_query_type === "search")
            {
                const student_search_query = localStorage.getItem("student_search_query");

                const res = await fetch(`${backend_url}/students/search/${page}`, {
                    method : "POST",
                    body : student_search_query,
                    headers : {
                        "Content-Type" : "application/json"
                    }
                });
                const res_data = await res.json();
                if(res_data.success)
                {
                    // successful data fetching
                    // update store
                    dispatch(updateSearchedStudentsAction(res_data.data));
                }
            }
        }catch(error){
            console.log(error);
        }
    }
}