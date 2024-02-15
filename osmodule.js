const os = require('os');


//Info about user
const user = os.userInfo()
//console.log(user);


//methos returns the system uptime in seconds
console.log(os.uptime());

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem(),
}

console.log(currentOS);