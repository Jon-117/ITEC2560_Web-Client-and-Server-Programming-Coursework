function shout(text) {
    let shouty_text = text.toUpperCase()
    return shouty_text
}

console.log(shout('okay, i got it'))

let message = 'seriously, i got it'
console.log( shout(message))

function f2c(f,decimalPlaces) {
    c = (f-32) *5 / 9
    if (decimalPlaces){
        return c.toFixed(decimalPlaces)
    } else {return c}
}

console.log(f2c(75,3))

function gpa_validation(number) {
    if (number >= 0 && number <=4){
        return true
    } else {
        return false
    }
}
console.log(gpa_validation(0))//true
console.log(gpa_validation(4))//true
console.log(gpa_validation(3))//true
console.log(gpa_validation(5))//false
console.log(gpa_validation(5))//false
console.log(gpa_validation(-3))//false

function cityStateJoiner(city,state){
    return `${city}, ${state.toUpperCase()}`
}

console.log(cityStateJoiner('Minneapolis','mn'))