// import firebase from 'firebase/app';
// import 'firebase/firestore';

// var firebaseConfig = {
  // ENTER YOUR CONFIG HERE
// };

// const firebaseApp = firebase.intializeApp(firebaseConfig);
// const timestamp = firebase.firestore.FieldValue.serverTimestamp;

// export { timestamp };
// export default firebaseApp.firestore();

import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  // ENTER YOUR CONFIG HERE
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);

// const firebaseApp = firebase.intializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
// export default firebaseApp.firestore();
