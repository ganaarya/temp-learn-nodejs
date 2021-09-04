// GLOBALS - NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

const secret = "super secret"
const kirk = "kirk"
const spock = "spock"

const greetings = (name) => {
  console.log(`Greetings, ${name}`)
}

greetings('Scotty')
greetings(kirk)
greetings(spock)