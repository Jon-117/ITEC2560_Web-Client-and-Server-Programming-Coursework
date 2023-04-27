<template>
  <div id="app">

      <h1>Would You Rather...</h1>

      <would-you-rather v-bind:question1="question1"
                        v-bind:answer1="answer1"
                        v-bind:answer2="answer2"
                        v-on:answer-changed="answerChanged"
      >
      </would-you-rather>

      <p>{{userSelectionMessage}}</p>

  </div>
</template>

<script>
import WouldYouRather from './components/WouldYouRather.vue'

export default {
        name: 'App',
        components: {
                WouldYouRather
        },
        data(){
                return {
                        question1: 'lick peanut butter off a hobo\'s foot or wrestle a tiger?',
                        answer1: 'Lick peanut butter off a hobo\'s foot',
                        answer2: 'Wrestle a tiger',
                        userSelectionMessage: '',
                }
        },
        methods: {
                answerChanged(choice) {
                        this.userSelectionMessage = `Thanks for your answer! You chose ${choice}`
                }
        }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
