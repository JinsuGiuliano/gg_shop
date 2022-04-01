import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../firebase.utils";

export const updateItem = async (item, {prodName,prodPrice,prodImageUrl},routeName) => {
    try{
      const itemRef = doc(firestore, `categories`, routeName);
      const itemSnapshot = await getDoc(itemRef);
      const itemIndex = itemSnapshot.data().indexs[item.id];
      console.log(itemSnapshot.data())
      console.log(itemIndex)
    }catch(err){
      console.log(err)
    }
}

