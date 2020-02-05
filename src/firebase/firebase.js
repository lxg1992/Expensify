import * as firebase from 'firebase'

const config = {
  apiKey:             process.env.FIREBASE_API_KEY,
  authDomain:         process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL:        process.env.FIREBASE_DATABASE_URL,
  projectId:          process.env.FIREBASE_PROJECT_ID,
  storageBucket:      process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId:  process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId:              process.env.FIREBASE_APP_ID
};

  // Initialize Firebase
firebase.initializeApp(config)

const database = firebase.database()

export { firebase, database as default}

// database.ref().set(null)

// database.ref('expenses')
//   .on('child_removed', (ss) => {
//     console.log(ss.key, ss.val())
//   })

// database.ref('expenses')
//   .on('child_changed', (ss) => {
//     console.log(ss.key, ss.val())
//   })

// database.ref('expenses')
//   .on('child_added', (ss) => {
//     console.log(ss.key, ss.val())
//   })

// database.ref('expenses').push({
//   name: 'Phone bill',
//   amount: 4500
// })



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


