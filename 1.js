//CommonJs ,every file is a module

//importing the modules
const { john, peter } = require('./2');

function sayhi(name) {
    console.log(`Hi welcome  ${name}!`);
};


sayhi(john);
sayhi(peter);



const dataa = require('./alternative-flavour')
console.log(dataa)


require('./mindgrenade') //even when it doesn't assign to any variable it can invoke it.