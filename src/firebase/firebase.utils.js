import firebase from "firebase/compat/app";

import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB3FZ4sKjwqKl2uB6UURNYdgPVR3kmT1no",
  authDomain: "crown-db-7750f.firebaseapp.com",
  projectId: "crown-db-7750f",
  storageBucket: "crown-db-7750f.appspot.com",
  messagingSenderId: "589992106278",
  appId: "1:589992106278:web:fb763ee51f3ec00dfcc9e7",
  measurementId: "G-DST8Z5YPXK",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const collectionRef = firestore.collection("/users");

  const snapShot = await userRef.get();
  const collectionSnapShot = await collectionRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    try {
      await userRef.set({
        displayName,
        email,
        createdAt: new Date(),
        ...additionalData,
      });
    } catch (error) {
      console.error("error creating user", error.message);
    }
  }
  return userRef;
};

export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });
  return transformCollection.reduce((result, collection) => {
    result[collection.title.toLowerCase()] = collection;
    return result;
  }, {});
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
