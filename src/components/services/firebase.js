import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: 'AIzaSyABLeP4Iy4CMrAO7nsdfXjh6dCsKdBUNzg',
    authDomain: 'pokemon-game-759a4.firebaseapp.com',
    databaseURL: 'https://pokemon-game-759a4-default-rtdb.firebaseio.com',
    projectId: 'pokemon-game-759a4',
    storageBucket: 'pokemon-game-759a4.appspot.com',
    messagingSenderId: '881973376460',
    appId: '1:881973376460:web:1551877513c097d0359969'
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

export const fire = firebase;

export default database;
