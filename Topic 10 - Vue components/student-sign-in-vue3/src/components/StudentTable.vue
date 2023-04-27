<template>
    <div>

        <!-- Template / HTML here -->
        <div class="card student-list m-2 p-2">
            <h4 class="card-title">Student List</h4>
            <div class="edit-table-toggle form-check">

                <input id="edit-table" type="checkbox" class="form-check-input" v-model="editTable">
                <label for="edit-table" class="form-check-label">Edit Table?</label>
            </div>
            <div id="student-table">
                <table class="table">
                    <tr>
                        <th>Name</th>
                        <th>StarID</th>
                        <th>Present?</th>
                        <th v-show="editTable">Delete</th>

                    </tr>

                    <!-- Done create table rows
                    Each row will have a checkbox, bound to the app's data
                    When the checkbox is checked/unchecked, the student will be signed in/out -->

                    <!-- v-for used to make an element for each item in a list.
                         v-bind can be used to apply classes (and other attributes) depending upon various circumstances. -->
                    <student-row
                        v-for="student in students"
                        v-bind:student="student"
                        v-bind:key="student.starID"
                        v-bind:edit="editTable"
                        v-on:student-arrived-or-left="arrivedOrLeft"
                        v-on:delete-student="deleteStudent"
                    >
                    </student-row>
                    <!--
                    make a new row 'for' each student in studentArray,
                    bind the student row to a student object
                    provided by studentRow component,
                    we bound the student.starID to key (why did we do that? I can't remember or see the usage of key),
                    enabling the delete column using a boolean editTable data bound to 'edit',
                    pass messages between studentRow and App.vue with student-arrived-or-left v-on attribute
                    pass messages between studentRow and App.vue with the delete-student v-on attribute
                    -->

                </table>
            </div>
        </div>
    </div>
</template>

<script>
import StudentRow from "@/components/StudentRow.vue";

export default {
    // create component here
    name: 'StudentTable',

    components: {
        StudentRow, // a child component - messages from children should be passed through parent to higher level components
    },

    emits: ['student-arrived-or-left', 'delete-student'], // eliminate warnings by letting Vue know that these are possible emits
    props: { // props are attributes passed from parent to child components. This allows use of the props as it would local data.
        students: Array
    },
    data() {
        return {
            editTable: false,
        }
    },
    methods: {
        arrivedOrLeft(student, presence) {
            // Done - Emit message to parent component
            this.$emit('student-arrived-or-left', student, presence)
        },
        deleteStudent(student) {
            this.$emit('delete-student', student)
        }
    }
}
</script>

<style scoped>

#student-table {
    max-height: 400px;
    overflow: scroll;
}

th, tr {
    width: 33%;
}


</style>