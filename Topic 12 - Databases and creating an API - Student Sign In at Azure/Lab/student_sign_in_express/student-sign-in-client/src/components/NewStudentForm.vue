<template>
  <div>

      <div class="alert alert-danger" v-if="errors.length > 0">
          <ul>
              <li v-for="error in errors">{{ error }}</li>
          </ul>


      </div>


      <div class="card add-student m-2 p-2">
          <h4 class="card-title">Add new student</h4>

          <div class="form-group">
              <label for="name">Name</label>
              <!-- Done: v-model newStudentName -->
              <input id="name" class="form-control" v-model.trim="newStudentName">
          </div>
          <div class="form-group">
              <label for="starID">Star ID</label>
              <!-- Done: v-model newStarID -->
              <input id="starID" class="form-control" v-model.trim="newStudentStarID">
          </div>
          <!-- Done: v-on:click event handler -->
          <button class="btn btn-primary" v-on:click="addStudent">Add</button>
      </div>

  </div>
</template>

<script>
export default {
    name: 'NewStudentForm',
    emits: ['student-added'], // declare emits, so Vue doesn't throw warnings. Best practice.
    data() {
        return {
            newStudentName:'',
            newStudentStarID: '',
            errors: '',
        }
    },
    methods: {
        addStudent() {

            this.errors = []  // clear errors

            // check errors
            if (!this.newStudentName) {
                this.errors.push("Please enter a name")
            }
            if (!this.newStudentStarID) {
                this.errors.push("Please enter a StarID")
            }

            // create student object if no errors present
            if (this.errors.length == 0){
                let student = {name: this.newStudentName, starID: this.newStudentStarID, presence: false}
                this.newStudentName = ''
                this.newStudentStarID = ''

                // Done: - emit message to parent component with new student

                this.$emit('student-added', student)
            }}
    }
}
</script>

<style scoped>

</style>