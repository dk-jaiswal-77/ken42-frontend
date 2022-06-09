export default function updateStudentsReducer(students={students:[]}, {type, payload}){
    switch(type){
        case "UPDATE_STUDENTS":
            return {students : payload};
        default:
            return students;
    }
}