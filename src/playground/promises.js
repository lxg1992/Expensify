const e = require("express")

// const promise = new Promise( (resolve, reject) => {
//     const num = Math.floor(Math.random() * 11)

//     setTimeout(() => {
//         num % 2 === 0 ? resolve(num) : reject(num)
//     }, 500)
// })

// promise.then((even) => {
//     console.log('The resolved number is ', even)
// }).catch((odd) => {
//     console.log('The rejected number is ', odd)
// })

function pigIt(str){
    let regex = new RegExp(/\w*/)
    return str.split(' ').map((item,index) => {
      if(regex.test(item)){
        return item.slice(1) + item.slice(0,1) + 'ay'
      } else {
        return item
      }
    })
  }
  
  console.log(pigIt('This string is fucking based!'))