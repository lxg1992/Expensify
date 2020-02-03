import * as firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBK_MFtXk2Vw0NFJIAw9fuxbXrCrgdZttA",
  authDomain: "expense-tracker-d31b5.firebaseapp.com",
  databaseURL: "https://expense-tracker-d31b5.firebaseio.com",
  projectId: "expense-tracker-d31b5",
  storageBucket: "expense-tracker-d31b5.appspot.com",
  messagingSenderId: "1083310882855",
  appId: "1:1083310882855:web:77126d91128d959e3b8e02",
  measurementId: "G-57VVLFTG82"
};

  // Initialize Firebase
firebase.initializeApp(config)

const database = firebase.database()

database.ref().set(null)

database.ref('expenses')
  .on('child_removed', (ss) => {
    console.log(ss.key, ss.val())
  })

database.ref('expenses')
  .on('child_changed', (ss) => {
    console.log(ss.key, ss.val())
  })

database.ref('expenses')
  .on('child_added', (ss) => {
    console.log(ss.key, ss.val())
  })

database.ref('expenses').push({
  name: 'Phone bill',
  amount: 4500
})



// database.ref('expenses')
//   .on('value', (ss) => {
//     const expenses = []
//     ss.forEach( (ssChild) => {
//       expenses.push({
//         id: ssChild.key,
//         ...ssChild.val()
//       })
//     })
//   }, (e) => {
//     console.log(e)
//   }
// )






// database.ref('notes').push({
//   title: 'To do',
//   body: 'Go for a run'
// })

// const expenses = [{
//   id: 'eijfoi',
//   name: 'lol',
//   body: 'boeedy'
// }, {
//   id: 2,
//   name: 'lmao',
//   body: 'bodefefy'
// }, {
//   id: 3,
//   name: 'kek',
//   body: 'baaody'
// }]

// expenses.forEach((exp) => {
//   database.ref(`notes/${exp.id}`).set({
//     name: exp.name,
//     body: exp.body
//   })
// })
// database.ref().on('value', (snapshot) => {
//   console.log(`${snapshot.val().name} is a  ${snapshot.val().job} at ${snapshot.val().company}`)
// }, (e) => {
//   console.error(e)
// })

// database.ref().set({
//   name: 'Alexey',
//   job: 'Software Developer',
//   company: 'Amazon'
// })

// database.ref().update({
//   name: 'Garin',
//   job: 'Web dev',
//   company: 'Google'

// })


// database.ref().set({
//   name: 'Alexey Garin',
//   age: 27,
//   isAlive: true,
//   location: {
//     city: 'Toronto',
//     country: 'Canada'
//   }
// }).then(() => {
//   console.log('data saved')
// }).catch((error) => {
//   console.error(error);
// })

// database.ref('age').set(28)

// database.ref('attributes').set({
//   height: 180,
//   weight: 100
// })

// database.ref('isAlive').remove()
// .then(() => {
//   console.log('removed')
// })
// .catch((err) => {
//   console.error('Did not remove', err)
// })


function pigIt(str){
  return str.split(' ').map((item,index) => {
    if(item.test(/\w/g)){
      return item.slice(1) + item.slice(0,1) + 'ay'
    }
  })
}

console.log(pigIt('This string is fucking based!'))