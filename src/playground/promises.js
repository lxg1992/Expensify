const e = require("express")

const promise = new Promise( (resolve, reject) => {
    const num = Math.floor(Math.random() * 11)

    setTimeout(() => {
        num % 2 === 0 ? resolve(num) : reject(num)
    }, 500)
})

promise.then((even) => {
    console.log('The resolved number is ', even)
}).catch((odd) => {
    console.log('The rejected number is ', odd)
})

