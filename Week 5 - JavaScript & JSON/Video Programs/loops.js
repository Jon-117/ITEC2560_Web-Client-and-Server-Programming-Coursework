let birds = ['owl', 'robin', 'eagle']
console.log(birds)

birds.forEach(function (bird){
    //repeat once per object in array
    // function will be called for each object
    console.log(bird.toUpperCase())
})

// java style loop (imperative loop)
for (let x = 0; x < birds.length; x= x+1){
    bird = birds[x] + `${x}`
    console.log(bird.toUpperCase())
}

num = 0
max = 5
while ( num < max ) {
    num++
    console.log(num)
}

// replace 1 vs replace all in string

let text = 'The classes are itec 1234, itec 2345, itec 3456'
// replace 1st
let replaced = text.replace('itec','ITEC')
// replace can also use a RegEx patterns to find all instances and other complicated replacements.
let replacedAllRegEx = text.replace(/itec/g, 'ITEC')
let replacedAllRegExAndMatched = text.replace(/\d{4}/g, '☻ $& ☻')

let replacedAll = text.replaceAll('itec','ITEC')
console.log(replaced)
console.log(replacedAll)
console.log(replacedAllRegEx)
console.log(replacedAllRegExAndMatched)