**Part 1: ISS Location (5 points)**

Make sure your ISS map site is working, and updating every 10 seconds.  

-   Your site should show the date and time the location was updated.

Reminder: for all of the lab questions, you must follow the instructions in the powerpoints/videos and write the code yourself. Remember there are watermark bytes in the example code and if you simply submit copies of the example code, it will be detected and you'll get a zero grade. The example code is provided for your reference as you work on the class projects. 

**Part 2: Capital City Guessing Game (15 points)**

_**Setup**_

Start by clicking  this link:

[https://classroom.github.com/a/yvBMmS8F](https://classroom.github.com/a/yvBMmS8F)

Which will create a repository with starter code for you.

You'll download the repository to your computer, and push your edits and changes back to this repository.

git clone https://github.com/mctc-itec/lab-7-capital-city-quiz-_**your-github-name**_

(use the actual URL for your repository)

Work on the project, and you can commit and push and the changes to this GitHub repository. You can also use GitHub pages for this repository too.

_**Tasks**_

Look for the TODO messages in index.js and game.html to finish the guessing game. 

The user will be shown a country, selected at random. They will guess that country's capital city. Your page will show a message telling them if they are right or wrong.  If the user is wrong, display the correct answer (the capital city of the country.)

You will add a "Play again" button. When the user clicks this button, they will be shown a new country, and will guess the capital city, as before. 

You'll use the World Bank API. Here's an example of how to use the API - if you need data about Brazil including the capital city, then use this URL: [https://api.worldbank.org/v2/country/br?format=json](https://api.worldbank.org/v2/country/br?format=json). Note the two-letter country code, BR, in the URL.  The starter code contains a data structure with all the country codes. 

Make sure you handle errors in case the call to the API fails, or the response isn't in the form you expect. 

**Comment your code!**

_**Optional Extra Credit - tell the user if their answer is close, but not correct +3 points.**_ 

Can you allow the user to be close but not exactly correct? For example, the capital of the USA, according to the World Bank API is "Washington D. C.".

If your user enters " Washington DC", can you tell them that they are almost right?

There are a few options, none are as good a human comparison,

1. Remove all the characters that are not A-Z and a-z and then compare strings. Look up regular expressions in JavaScript. 

2. Use the Levenshtein close string match algorithm to allow close guesses

-   Add a script tag in index.js to include this file, before the other script tags, 
    
    <script src="[https://unpkg.com/fast-levenshtein](https://unpkg.com/fast-levenshtein)@2.0.6/levenshtein.js"></script>

-   Here's some examples to use it in your game.js script - you can decide how different the strings can be and considered correct. 

let compareIdenticalStrings = Levenshtein.get("Washington D.C.", "Washington D.C.")  // same string  
console.log(compareIdenticalStrings)  // 0 - identical

let compareSimilarStringsPunctuation = Levenshtein.get("Washington DC", "Washington D.C.") // punctuation difference  
console.log(compareSimilarStringsPunctuation) // 2 - low numbers mean similar - 2 characters different

compareSimilarStringsWithTypo = Levenshtein.get("Ottowa", "Ottawa") // spelling error   
console.log(compareSimilarStringsWithTypo) // 1 - low numbers mean similar - one character different

let compareDifferentStrings = Levenshtein.get("Washington", "12345678")  
console.log(compareDifferentStrings) // 10 - high numbers means strings more are different  
 

**To Submit**

Push your work back to your GitHub repository. You do not need to create a new git repository for this work - you already have one. When you push your work, it will be pushed to your fork. As always, if you have any questions, please ask or email. 

_**Enable GitHub pages for this repository and make sure your page works in the browser at GitHub. [Instructions for GitHub Pages](https://minneapolis.learn.minnstate.edu/d2l/common/dialogs/quickLink/quickLink.d2l?ou=5973009&type=content&rcode=MNSCU_LOCAL-22583232)**_

**To submit**

-   The link to your Github repository with your code for part 1
-   The link to your Github repository with your code for part 2 AND link to live page at GitHub