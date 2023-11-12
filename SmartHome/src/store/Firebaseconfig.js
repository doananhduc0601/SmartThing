import {initializeApp} from 'firebase/app';
import {getDatabase} from 'firebase/database';
import {getStorage, ref} from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyC-4AaSkX_jrlJHIBp78OJ2GW4spxtt_iI',
  authDomain: 'smarthome-c5a2f.firebaseapp.com',
  databaseURL:
    'https://smarthome-c5a2f-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'smarthome-c5a2f',
  storageBucket: 'smarthome-c5a2f.appspot.com',
  messagingSenderId: '1064276878746',
  appId: '1:1064276878746:web:48e8c1770b9d9279958623',
  measurementId: 'G-9J6T9HTWK1',
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const storage = getStorage(app);
export {db, storage};
