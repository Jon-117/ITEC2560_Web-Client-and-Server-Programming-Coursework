<template>
  <div id="app">

      <h1>I Would Rather...</h1>

      <would-you-rather
              v-for="question in questions"
              v-bind:question="question"
              v-on:answer-changed="answerChanged"
      >
      </would-you-rather>

<!--      <p>{{ userSelectionMessage }}</p>-->

      <div class="answers" v-if="questions[0].userAnswer !== '' && questions[1].userAnswer !== ''  && questions[2].userAnswer !== '' ">
          <h2>I would rather...</h2>
          <p v-for="answer in answers"> {{ answer }} </p>
      </div>

  </div>
</template>

<script>
import WouldYouRather from './components/WouldYouRatherQuestion.vue'

export default {
        name: 'App',
        components: {
                WouldYouRather
        },
        data(){
                return {
                        questions: [
                                {
                                        id: 1,
                                        question: 'Lick peanut butter off a hobo\'s foot or wrestle a tiger?',
                                        answer1: 'Lick peanut butter off a hobo\'s foot',
                                        answer2: 'Wrestle a tiger',
                                        userAnswer: ''
                                },
                                {
                                        id: 2,
                                        question: 'Go back to age 5 with everything you know now or know now everything your future self will learn?',
                                        answer1: 'Go back to age 5',
                                        answer2: 'Know everything my future self will learn',
                                        userAnswer: ''

                                },
                                {
                                        id: 3,
                                        question: 'Travel the world for a year on a shoestring budget or stay in only one country for a year but live in luxury?',
                                        answer1: 'Travel the world',
                                        answer2: 'Live in luxury',
                                        userAnswer: ''

                                }],
                        answers: [],

                        userSelectionMessage: 'I would rather... ',
                }
        },
        methods: {
                answerChanged(question, choice) {
                        this.questions.find(function (s){
                                if (s.id === question.id) {
                                        s.userAnswer = choice
                                }
                        })
                        this.answers.push(choice.toLowerCase())
                }
        },


}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
    background-color: black;
  color: #ffffff;
  margin-top: 60px;
}

</style>
