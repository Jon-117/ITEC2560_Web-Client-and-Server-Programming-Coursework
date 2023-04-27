<template>
  <div class="hello">
<!--      <h2>I would rather... </h2>-->
      <h2>{{question1}}</h2>
      <label><input type="radio" v-model="choice" v-bind:value="answer1" v-on:change="choiceMade">
      {{answer1}}</label>

      <label><input type="radio" v-model="choice" v-bind:value="answer2" v-on:change="choiceMade">
      {{answer2}}</label>


  </div>
</template>

<script>
export default {
        name: 'WouldYouRather',
        props: {
                question1: String,
                answer1: String,
                answer2: String,
        },
        data(){
                return{
                        choice:''
                }        },
        methods: {
                choiceMade() {
                        this.$emit("answer-changed", this.choice)
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
</style>
