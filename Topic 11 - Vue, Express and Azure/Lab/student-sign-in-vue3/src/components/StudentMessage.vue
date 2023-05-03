<template>
    <div>
        <div v-if="student.name"> <!-- if a student exists, potentially create a message -->
            <div v-if="student.presence" class="alert alert-success" v-cloak> <!-- show a message when student presence is True -->
                Welcome, {{ student.name }}.
            </div>
            <div v-else class="alert alert-warning" v-cloak> <!-- show a message when student presence is False -->
                Goodbye, {{ student.name }}.
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'StudentMessage',
    props: {
        student: Object // student object sent from App.vue for use in message template
    }
}
</script>

<style scoped>

</style>