import { initializeApp } from "firebase/app";
import { getFirestore, getDoc, doc, setDoc, writeBatch, collection } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const config = {
    apiKey: "AIzaSyDzLodTUhMfAdq8m6MhgJocUJHXqbi7psE",
    authDomain: "gg-shop-37f61.firebaseapp.com",
    projectId: "gg-shop-37f61",
    storageBucket: "gg-shop-37f61.appspot.com",
    messagingSenderId: "947706689254",
    appId: "1:947706689254:web:7fba6ee4e30a2c86cfed27",
    measurementId: "G-2R6M8S8H3M"
  };

const app = initializeApp(config);

export const auth = getAuth(app);
export const firestore = getFirestore();
//export const fsFunc = require('firebase-functions');


export const provider = new GoogleAuthProvider();
provider.setCustomParameters({promt: 'select_account'});

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = doc(firestore, "users",`${userAuth.uid}`);
    //const userRef = firestore.docment(`users/${userAuth.uid}`);
    const snapShot = await getDoc(userRef);
 if(!snapShot._document){
   console.log(userAuth.displayName)
     const { displayName, email } = userAuth;
     const createdAt = new Date();
     try{
       const r =  await setDoc(userRef,{
            displayName, 
            email, 
            createdAt, 
            ...additionalData
        })
    }catch(error){
        console.log('Error creando usuario', error.message)
    }
}
return userRef;
}

export const convertCollectionsSnapshotToMap = collections => {
    const transformedCollection = collections.docs.map(doc => {
      const { title, items } = doc.data();
  
      return {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items
      };
    });
  
    return transformedCollection.reduce((accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
    }, {});
  };

  // export const addCollectionAndDocuments = async (
  //   collectionKey,
  //   objectsToAdd
  // ) => {
  //   const batch = writeBatch(firestore);
  //   const collectionRef = collection(firestore, collectionKey);
    
  //   objectsToAdd.forEach((object) => {
  //      const docRef = doc(collectionRef, object.title.toLowerCase());
  //      batch.set(docRef, object);
  //   });
  
  //   await batch.commit();
  //   console.log('done');
  // };

  export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
      const unsubscribe = auth.onAuthStateChanged(userAuth => {
        unsubscribe();
        resolve(userAuth);
      }, reject);
    });
  };
//export const signOuts = () => signOut(auth);
export const signInWithGoogle = () => signInWithPopup(auth, provider);
//export const signRedirect = () => signInWithRedirect(auth, provider);

export default app;