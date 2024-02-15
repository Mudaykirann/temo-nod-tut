//File System module Sync methods

const { readFileSync, writeFileSync, readFile, writeFile } = require('fs')

// const first = readFileSync('./content/first.txt', 'utf-8')
// const second = readFileSync('./content/second.txt', 'utf-8')

//console.log(first, second);

// writeFileSync('./content/result-sync.txt',
//     `Here is the result : ${first}, ${second}`,
//     { flag: 'a' });



// readFile('./content/first.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     first = data
//     writeFileSync('./content/result-sync1.txt',
//         `Here is the result : ${first}`)
// })

readFile('./content/result-sync1.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(data)
})
