import Rebase from 're-base'
import firebase from 'firebase'

const config = {
    apiKey: 'AIzaSyD8xb1OyRoFYKiqFoxOLdNb0axdqL5s7rM',
    authDomain: 'bora-ajudar-65c83.firebaseapp.com',
    databaseURL: 'https://bora-ajudar-65c83.firebaseio.com',
    projectId: 'bora-ajudar-65c83',
    storageBucket: '',
    messagingSenderId: '829331095005'
  }
  const app = firebase.initializeApp(config)
  const base = Rebase.createClass(app.database())

  export default base