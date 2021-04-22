import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAGWD-YEWH9tMnQBUGgfOMBNToGTMKkpoI',
  authDomain: 'crwn-db-105d2.firebaseapp.com',
  projectId: 'crwn-db-105d2',
  storageBucket: 'crwn-db-105d2.appspot.com',
  messagingSenderId: '782278576738',
  appId: '1:782278576738:web:3c0d2ad7dccfc740ab9f3b',
  measurementId: 'G-R8WGWGFHG4',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdDate = new Date();

    try {
      await userRef.set({ displayName, email, createdDate, ...additionalData });
    } catch (error) {
      console.log('Error creating user: ' + error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
