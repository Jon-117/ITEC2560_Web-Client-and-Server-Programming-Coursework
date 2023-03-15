let randomCountryElement = document.querySelector('#random-country')
let userAnswerElement = document.querySelector('#user-answer')
let submitButton = document.querySelector('#submit-answer')
let resultTextElement = document.querySelector('#result')

// DONE finish the script to challenge the user about their knowledge of capital cities.
//  An array country names and two-letter country codes is provided in the countries.js file.
//  Your browser treats all JavaScript files included with script elements as one big file,
//  organized in the order of the script tags. So the countriesAndCodes array from countries.js
//  is available to this script.

console.log(countriesAndCodes)  // You don't need to log countriesAndCodes - just proving it is available 

// Declarations
let playAgainButton = document.querySelector('#play-again-button')
let randomIndex
let randomCountryObj
let randomCountryName
let randomCountryLetters
let correctAnswer
let userAnswer
let url

// DONE when the page loads, select an element at random from the countriesAndCodes array

function newQuestion() {
    // clear the answer input - this does nothing initially, clears past answers on subsequent plays.
    userAnswerElement.value = ''
    // use Math's random for # between 0-1, multiply by array length and use floor to get an integer value.
    randomIndex = Math.floor(Math.random() * countriesAndCodes.length)
    // assign it
    randomCountryObj = countriesAndCodes[randomIndex]
    // extract name and letter code to variables
    randomCountryName = randomCountryObj['name']
    randomCountryLetters = randomCountryObj['alpha-2']
    // console.log(`${randomCountryName} ${randomCountryLetters}`)
// DONE display the country's name in the randomCountryElement
    randomCountryElement.innerHTML = randomCountryName
    
}

document.addEventListener("DOMContentLoaded", newQuestion )

submitButton.addEventListener('click', function (e) { // event listener for button
    url = `https://api.worldbank.org/v2/country/${randomCountryLetters}?format=json` // set url each time submit click
    fetch(url)
        .then( response => {
        console.log(response)
        if (!response.ok) {alert('Error - network response failed')} // alert if bad response
        return response.json() // return the json object
        })
        .then(countryData => {
            correctAnswer = countryData[1][0].capitalCity // extract capital city to variable
            // console.log(correctAnswer)
        })

    userAnswer = userAnswerElement.value.trim()
    // Done --- Add the comparison of answer to correct answer
    
    if (userAnswer.toUpperCase().trim() === correctAnswer.toUpperCase().trim()) {
        resultTextElement.innerHTML = 'Heck yeah! You got it!'
    }
    else {
        resultTextElement.innerHTML = `That is not correct. The capital of ${randomCountryName} is ${correctAnswer}`
    }
    
})




// done - add a click event handler to the submitButton.  When the user clicks the button,
//  read the text from the userAnswerElement
//
//  done - Use fetch() to make a call to the World Bank API with the two-letter country code (from countriesAndCodes, example 'CN' or 'AF')
//
//  done - Verify no errors were encountered in the API call. If an error occurs, display an alert message.
//
//  done - If the API call was successful, extract the capital city from the World Bank API response.
//
//  done - Compare the actual capital city to the user's answer.
//
//  done - You can decide how correct you require the user to be. At the minimum, the user's answer should be the same
//         as the World Bank data - make the comparison case insensitive.
//
//  Nah - If you want to be more flexible, include and use a string similarity library such as https://github.com/hiddentao/fast-levenshtein
//
//  done - Finally, display an appropriate message in the resultTextElement to tell the user if they are right or wrong.
//         For example 'Correct! The capital of Germany is Berlin' or 'Wrong - the capital of Germany is not G, it is Berlin'

// Done finally, connect the play again button. Clear the user's answer, select a new random country,
//   display the country's name, handle the user's guess. If you didn't use functions in the code you've
//   already written, you should refactor your code to use functions to avoid writing very similar code twice.

playAgainButton.addEventListener('click',newQuestion)