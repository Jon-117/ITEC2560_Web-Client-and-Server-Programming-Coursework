/*
Arrays in JavaScript can act very differently than arrays in JavaScrip or lists in Python, though they have similarities
- There is not a set limit to the number of items in an array in JS, just like Python.
- JS allows for calling of array indexes that have not been created, returning 'undefined'
- JS allows also for calling of array indexes which cannot exist, such as negative numbers, also returning 'undefined'
 */

// to add an item to the end of an array we use .push() method

jams = ['boison berry', 'raspberry', 'appricot']
console.log(jams)
jams.push('black berry')
console.log(jams)


// to add to the beginning, we use .unshift()
jams.unshift('blueberry')
console.log(jams)

// to overwrite an element, we use the index value.
jams[1] = 'carrot' // replaces boisonberry.
console.log(jams)

// to remove items from the beginning, we use .shift()
let takenJam = jams.shift()
console.log(takenJam)
console.log(jams)

// to remove items from the end, we use .pop()
let anotherJam = jams.pop()
console.log(anotherJam)
console.log(jams)

/*
Push and Pop work at the end of the array.
Shift and Unshift work at the beginning.
 */

//sort sorts either alphabetically or numerically.
jams.sort()
console.log(jams)

// length() will give a number of items in the list
console.log(jams.length )// === 3


// .indexOf will return the index value for a specific element
console.log(jams.indexOf('raspberry')) // === 2

// .includes will return true or false if the given
console.log(jams.includes('fakeJam'))
console.log(jams.includes('carrot'))

jamLengths = []
jams.forEach(function (jam){
    console.log(jam.toUpperCase())
    console.log(jams.indexOf(jam))
    let jamLength = jam.length
    jamLengths.push(jamLength)
    console.log(`length of word = ${jamLength}`)
})

console.log(jamLengths)
