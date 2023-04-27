<template>
    <tr v-bind:class="{ present : student.presence, absent: !student.presence }">
        <td>{{ student.name }}</td>
        <td>{{ student.starID }}</td>
        <td><input type="checkbox" v-bind:checked="student.presence" v-on:change="arrivedOrLeft(student,$event.target.checked)"></td>
        <td v-show="edit"> <img v-on:click="deleteStudent" src="@/assets/icons8-delete-100.png" alt="delete icon"></td>
    </tr>
</template>

<script>

export default {
    name: 'StudentRow',
    props: {
        student: Object, // student object to create row data with
        edit: Boolean, // provide context to studentRow from parent studentTable, allowing for v-show of delete column
    },
    emits: ['student-arrived-or-left', 'delete-student'], // eliminate warnings by letting Vue know that these are possible emits
    methods: {
        deleteStudent() { // delete action
            if (confirm(`Delete ${this.student.name}?`)) // confirmation of delete action
            this.$emit('delete-student', this.student)
        },
        arrivedOrLeft(student, presence) { // welome/goodbye message helper
            this.$emit('student-arrived-or-left', student, presence)
        }
    }
}
</script>

<style scoped> // stylization
th, tr {
    width: 33%;
}

.present {
    color: gray;
    font-style: italic;
}

.absent {
    color: black;
    font-weight: bold;
}

img {
    height: 50px;
}

</style>