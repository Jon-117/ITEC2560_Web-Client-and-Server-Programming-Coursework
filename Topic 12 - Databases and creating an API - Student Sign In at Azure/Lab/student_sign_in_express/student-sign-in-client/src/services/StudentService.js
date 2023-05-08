import axios from "axios";
// import {response} from "express"; NOTE: This is auto added when using typing response into the get and post .then functions. WE DON'T WANT THIS - IT'S DIFFERENT.

let base_url = '/api/students'

export default {
    getAllStudents(){
        return axios.get(base_url).then(response =>{
            return response.data
        })
    },
    addStudent(student){
        return axios.post(base_url, student).then(response => {
            return response.data
        })
    },
    updateStudent(student){
        // create URL with template string that forms "/api/students/{id}"
        return axios.patch(`${base_url}/${student.id}`, student).then(response => {
            return response.data
        })
    },
    deleteStudent(id) {
        return axios.delete(`${base_url}/${id}`).then(response => {
            return response.data
        })
    }
}