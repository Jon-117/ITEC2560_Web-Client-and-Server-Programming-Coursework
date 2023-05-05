<template>
    <div id="app">
        <new-student-form v-on:student-added="newStudentAdded"></new-student-form>

        <student-table
                v-bind:students="students"
                v-on:student-arrived-or-left="studentArrivedOrLeft"
                v-on:delete-student="deleteStudent"
        ></student-table>

        <student-message v-bind:student="mostRecentStudent"></student-message>
    </div>
</template>

<script>
import NewStudentForm from "./components/NewStudentForm.vue";
import StudentTable from "./components/StudentTable.vue";
import StudentMessage from "./components/StudentMessage.vue";

export default {
        name: 'App',
        components: {
                NewStudentForm,
                StudentTable,
                StudentMessage,
        },
        data() {
                return {
                        students: [],
                        mostRecentStudent: {}
                }
        },
        methods: {
                newStudentAdded(student) {
                        this.students.push(student)
                        this.students.sort(function (student1,student2){
                                // return positive number if student 1 should be sorted after student2
                                if (student1.name.toLowerCase() > student2.name.toLowerCase()) {
                                        return 1
                                }
                                // return negative number if student 2 should be sorted after student1
                                if (student2.name.toLowerCase() > student1.name.toLowerCase()) {
                                        return -1
                                }
                                // return 0 if order is equivalent
                                if (student1.name.toLowerCase() === student2.name.toLowerCase()){
                                        return 0
                                }})
                },
                studentArrivedOrLeft(student, presence) {
                        let updateStudent = this.students.find(function (s){
                                if (s.name === student.name && s.starID === student.starID){
                                        return true
                                }
                        })
                        if (updateStudent) {
                                updateStudent.presence = presence
                                this.mostRecentStudent = student
                        }
                },
                deleteStudent(student) {
                        this.students = this.students.filter(function (s) {
                                if (s !== student) {
                                        return true
                                }
                        })
                        this.mostRecentStudent = ''
                }
        }
}
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css";
</style>