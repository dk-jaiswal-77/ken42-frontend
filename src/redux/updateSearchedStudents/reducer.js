export default function updateSearchedStudentsReducer(students={searchedStudents : []}, {type, payload}){
    switch(type){
        case "UPDATE_SEARCHED_STUDENTS":
            return {searchedStudents : payload};
        default :
            return students;
    }
}