import { initializeApp } from "firebase/app";
import { getFirestore, getDoc, doc, setDoc, collection, addDoc} from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getDatabase } from "firebase/database";
const config = {
  apiKey: "AIzaSyD65oVjKam-cixUP_FTUEzz1awY2iuImfk",
  authDomain: "swn-web.firebaseapp.com",
  projectId: "swn-web",
  storageBucket: "swn-web.appspot.com",
  messagingSenderId: "983286559840",
  appId: "1:983286559840:web:f506023972752570597f05",
  measurementId: "G-2X4X8466DX"
  };

const app = initializeApp(config);

export const auth = getAuth(app);
export const firestore = getFirestore();
export const realTimeDb = getDatabase(app);

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
        await setDoc(userRef,{
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
  try{
    const transformedCollection = collections.docs.map(doc => {
      const { category, id, name, price } = doc.data();
  
      return {
        routeName: encodeURI(category.toLowerCase()),
        id,
        name,
        price
      };
    });
    
    return transformedCollection.reduce((accumulator, collection) => {
      accumulator[collection.category.toLowerCase()] = collection;
      console.log(accumulator)
     return accumulator;
    }, {});
  }catch(err){
      console.log("error converting Snapshot: ", err )
  }
    
  };

  export const addCollectionAndDocuments = async (
    collectionKey,
    objectsToAdd
  ) => {
    //const batch = writeBatch(firestore);
    const collectionRef = collection(firestore, collectionKey);
    
    objectsToAdd.forEach((object) => {
       const docRef = doc(collectionRef, object.title.toLowerCase());
                      setDoc(docRef, {title: object.title.toLowerCase()})
       object.items.forEach(item => {
            const prod = {
              id: item.id,
              name: item.name,
              price: item.price,
              imageUrl: item.imageUrl,
              category: object.title.toLowerCase()
            }
            const itemsRef = collection(docRef,'items');
                             addDoc(itemsRef,prod )
            //setDoc(iRef, item)
       })
    });
  
   // await batch.commit();
    console.log('done');
  };

  // export const addCollectionAndDocuments = async (
  //   collectionKey,
  //   objectsToAdd
  // ) => {
  //   const batch = writeBatch(firestore);
  //   const categoriesRef = collection(firestore, collectionKey);
    
  //   objectsToAdd.forEach((object) => {
  //         const categoryRef = doc(categoriesRef, object.title.toLowerCase());
  //         const itemsRef = collection(categoryRef, 'items' );
  //         object.items.forEach( (item) => {
  //           //var docRef = doc(itemsRef, item); //automatically generate unique id
  //           batch.set(itemsRef, item);
  //         })
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