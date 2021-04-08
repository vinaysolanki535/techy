import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyAy96FO0t2qbmOfy61prIcO7Pv24l8IXmg',
  authDomain: 'scoro-f51aa.firebaseapp.com',
  projectId: 'scoro-f51aa',
  storageBucket: 'scoro-f51aa.appspot.com',
  messagingSenderId: '1071239049701',
  appId: '1:1071239049701:web:aaa5df792098833db47f0c',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { auth, db }
