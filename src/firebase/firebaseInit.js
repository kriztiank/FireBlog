// import firebase from 'firebase/app';
// import 'firebase/firestore';

// var firebaseConfig = {
//   apiKey: 'AIzaSyBEf9DhUkDK-oFPzqsi9GU9RKiQ4WC957w',
//   authDomain: 'fireblogs-e58d8.firebaseapp.com',
//   projectId: 'fireblogs-e58d8',
//   storageBucket: 'fireblogs-e58d8.appspot.com',
//   messagingSenderId: '357143086292',
//   appId: '1:357143086292:web:e23b8fc0908e466b6b2741',
// };

// const firebaseApp = firebase.intializeApp(firebaseConfig);
// const timestamp = firebase.firestore.FieldValue.serverTimestamp;

// export { timestamp };
// export default firebaseApp.firestore();

import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyBEf9DhUkDK-oFPzqsi9GU9RKiQ4WC957w',
  authDomain: 'fireblogs-e58d8.firebaseapp.com',
  projectId: 'fireblogs-e58d8',
  storageBucket: 'fireblogs-e58d8.appspot.com',
  messagingSenderId: '357143086292',
  appId: '1:357143086292:web:e23b8fc0908e466b6b2741',
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);

// const firebaseApp = firebase.intializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
// export default firebaseApp.firestore();
