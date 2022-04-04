import { doc, updateDoc } from "firebase/firestore";
import { firestore } from "../firebase.utils";


const updateItem = async (item,itemUpdated) => {
  try{
    const itemsRef = doc(firestore, `categories`, item.category, 'items', item.id);
    await updateDoc(itemsRef,itemUpdated);
  }catch(err){
    console.log(err)
  }
}