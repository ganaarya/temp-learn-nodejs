const os = require('os')

// Info about current user
const user = os.userInfo()
console.log(user)

// Method return the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`)

// Method return the version of this os
console.log(os.version())
console.log(os.cpus())
console.log(os.hostname())

const currentOS = {
  name:os.type(),
  release:os.release(),
  totalMem:os.totalmem(),
  freeMem:os.freemem(),
}

console.log(currentOS)