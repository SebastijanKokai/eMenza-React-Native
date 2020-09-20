// Firebase
import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAwRgUCDrSFGik1l6CcFkGRgtphsss2evU',
  authDomain: 'emenzaweb.firebaseapp.com',
  databaseURL: 'https://emenzaweb.firebaseio.com',
  projectId: 'emenzaweb',
  storageBucket: 'emenzaweb.appspot.com',
  messagingSenderId: '953896576931',
  appId: '1:953896576931:web:e80d23b37b5c28ec125c16',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export {firebase};
