// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const {kirk,spock} = require('./04-names')
const greetings = require('./05-utils')
const data = require('./06-alternative-flavor')
console.log(data)
// console.log(names)

// greetings('Scotty')
// greetings(kirk)
// greetings(spock)

require('./07-mind-grenade')