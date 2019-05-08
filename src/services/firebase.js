import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const config = {
  apiKey: "AIzaSyAz0o14Vv6gpo14WR8LVBZPhhwxnVeqeg0",
  authDomain: "vuejs-firebase-b31fd.firebaseapp.com",
  databaseURL: "https://vuejs-firebase-b31fd.firebaseio.com",
  projectId: "vuejs-firebase-b31fd",
  storageBucket: "vuejs-firebase-b31fd.appspot.com",
  messagingSenderId: "240319770929"
}

const firebaseApp = firebase.initializeApp(config)
//const firestore = firebaseApp.firestore()

export default firebaseApp.firestore()