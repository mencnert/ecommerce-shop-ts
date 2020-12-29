import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDDHeWeQ7ptOB5Jn5Ek9qEROeML5mKGqrI",
  authDomain: "clothing-shop-607bd.firebaseapp.com",
  databaseURL: "https://clothing-shop-607bd.firebaseio.com",
  projectId: "clothing-shop-607bd",
  storageBucket: "clothing-shop-607bd.appspot.com",
  messagingSenderId: "594921678561",
  appId: "1:594921678561:web:e60cc8b82dddeb282ef9a0",
  measurementId: "G-3JBVDFGF4D",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (
  userAuth: firebase.User | null,
  additionalData?: firebase.firestore.DocumentData
) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth: firebase.auth.Auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
