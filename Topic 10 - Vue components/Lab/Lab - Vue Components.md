**For this lab, and every lab, add comments to your code to explain the new concepts, complex code, and anything that's not obvious from just reading the code.** 

**For part 1 and 2, don't copy the code from the finished examples. I run a program that checks for copied code, and will assign 0 grades for any work that is copied from the finished code. You need to build the apps yourself to learn about the parts of the apps, and how they work together.**

**1. Would You Rather, 4 points:** Follow the slides/videos to build the Would You Rather? app, which uses components. 

**2. Student Sign In, 6 points:** Follow the slides/videos to refactor your Student Sign In app to use components.  Add the toggle edit, sorting students by name, and the delete feature.  Make sure everything works. 

**3. Multiple components for Would You Rather, 9 points.** Select two more Would You Rather questions from [https://conversationstartersworld.com/would-you-rather-questions-for-kids/](https://conversationstartersworld.com/would-you-rather-questions-for-kids/) or make up your own.

Your app will have two component files, App.vue and WouldYouRatherQuestion.vue.

A **WouldYouRatherQuestion** component displays a question, and two radio buttons, one for each answer. When the user selects a choice for each question, the WouldYouRatherQuestion component should emit a message to its parent. What data would be useful for the parent? The parent should display the user's selections for each question. How will it know which question is chosen, and what choice was made? 

**App.vue** should include a questions array. Each question object should have a unique ID, question, and two answers, for example,

![](https://minneapolis.learn.minnstate.edu/content/2022/5973009-20235000657S/PastedImage_zpww85w7icdohm180pcbyq8wnhn36y58001651702143.png?_&d2lSessionVal=42wc14rhprjGPb3wHiof59age&ou=5973009)

In App.vue, use v-for to display a list of WouldYouRatherQuestion components, one for each question. 

App.vue should display a component with a list of all of the user's choices for each question in an li element. For example, your page may look like this:

[https://claraj.github.io/vue-would-you-rather-assignment-components/](https://claraj.github.io/vue-would-you-rather-assignment-components/)

**4. Styles (1 point).** Add at least one style of your choice to App.vue and at least one different style of your choice to WouldYouRatherQuestion.vue.

_**To Submit**_

-   Add each project to a GitHub repository.
-   Use one GitHub repository for each project.
-   **COMMENT YOUR CODE.**
-   Submit the links to your GitHub repositories