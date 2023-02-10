let user = {username: "Jon-117", password: 'C1e@r ca$hews'}

console.log(user.username)
console.log(user['username'])
console.log(user.password)
console.log(user['password'])

// if the name of a thing is something you know, but it is in a variable square bracket notation is required
// otherwise it's easier to type . notation
let property = 'password'
console.log(user[property])

// can create new object properties easily:
user.email = 'jon@123.com'
console.log(user)


user = {}

user = {username: "Jon-117", password: 'C1e@r ca$hews', name : 'Jon Koch', contact : {phone: '619-JON-KOCH', email: 'jon@jonkoch.com'}, roles : ['Artificial Sense Researcher', 'CEO']}

user.salary = 1000000
user.roles.push('server admin')
user.contact.location = '2100 Shoreside Way, Someplace, CA 98900'

console.log(user)

