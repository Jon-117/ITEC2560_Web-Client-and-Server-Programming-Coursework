<template>
    <div>
    <div class="question" >
      <h3>{{ question.question }}</h3>
      <label><input type="radio" v-model="choice" v-bind:value="question.answer1" v-on:change="choiceMade">
      {{ question.answer1 }}</label>

      <label><input type="radio" v-model="choice" v-bind:value="question.answer2" v-on:change="choiceMade">
      {{ question.answer2 }}</label>

    </div>
    </div>
</template>

<script>
export default {
        name: 'WouldYouRather',
        props: {
                question: Object
        },
        data(){
                return{
                        choice:''
                }        },
        methods: {
                choiceMade() {
                        this.$emit("answer-changed", this.question, this.choice)
                }
        }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.question {
    background-color: goldenrod;
}
</style>
