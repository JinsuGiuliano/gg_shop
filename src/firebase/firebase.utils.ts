import { initializeApp } from "firebase/app";
import { getFirestore, getDoc, doc, setDoc, collection, addDoc, QueryDocumentSnapshot} from "firebase/firestore";
import { getAuth, GoogleAuthProvider, NextOrObserver, signInWithPopup, User } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { Category, CategoryItem } from "../redux/shop/shop.types";
import { WishlistItem } from "../redux/wishlist/wish.types";
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
export const realTimeDb = getDatabase(app);

export const provider = new GoogleAuthProvider();
provider.setCustomParameters({promt: 'select_account'});

export type AdditionalData = {
  displayName?: string;
  isAdmin: boolean;
  wishListts: WishlistItem[]
}

export type UserData = {
  createdAt: Date;
  email: string;
  displayName: string;
}

export const createUserProfileDocument = async (
  userAuth: User, 
  additionalData = {} as AdditionalData
  ): Promise<void | QueryDocumentSnapshot<UserData>> => {
    if(!userAuth) return;

    const userRef = doc(firestore, "users",`${userAuth.uid}`);
    //const userRef = firestore.docment(`users/${userAuth.uid}`);
    const userSnapShot = await getDoc(userRef);
 if( !userSnapShot.exists()){
   console.log(userAuth.displayName)
     const { displayName, email } = userAuth;
     const createdAt = new Date();
     try{
        await setDoc(userRef,{
            displayName, 
            email, 
            createdAt, 
            ...additionalData
        } as UserData)
    }catch(error){
        console.log('Error creando usuario', error)
    }
}
return userSnapShot as QueryDocumentSnapshot<UserData>;
}


  export type ObjectToAdd = {
    title: string;
    items: CategoryItem[];
  }

  export const addCollectionAndDocuments = async<T extends ObjectToAdd> (
    collectionKey: string,
    objectsToAdd: T[]
  ): Promise<void> => {
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
       })
    });
  
    console.log('done');
  };

  export const getCurrentUser = (): Promise<User | null> => {
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

// export const convertCollectionsSnapshotToMap = (collections: QueryDocumentSnapshot<Category>[]): Category[] => {
//   try{
//     const transformedCollection = collections.docs.map(doc => {
//       const { category, id, name, price } = doc.data();
  
//       return {
//         routeName: encodeURI(category.toLowerCase()),
//         id,
//         name,
//         price
//       };
//     });
    
//     return transformedCollection.reduce((accumulator, collection) => {
//       accumulator[collection.category.toLowerCase()] = collection;
//       console.log(accumulator)
//      return accumulator;
//     }, {});
//   }catch(err){
//       console.log("error converting Snapshot: ", err )
//   }
    
//   };