import { doc, getDoc, getDocs, collection, query } from "firebase/firestore";
import { firestore } from "../firebase.utils";

export const updateItem = async (item, {prodName,prodPrice,prodImageUrl},routeName) => {
    try{
    const itemRef = doc(firestore, `categories`, routeName);
    const itemSnapshot = await getDoc(itemRef);
    const itemIndex = itemSnapshot.data().indexs[item.id];
    console.log(itemSnapshot.data())
    console.log(itemIndex)
    // let itemUpdate = {};
    // itemUpdate[`items.${itemIndex}`] = 
    // {
    //   name: prodName,
    //   price: prodPrice,
    //   imageUrl: prodImageUrl
    // }
    
    // const update =  await updateDoc( itemRef, {`items.${itemIndex}`:});
    // console.log(update)
    }catch(err){
      console.log(err)
    }
}

export const getCategoriesAndDocuments =  (sections) => {

  let categoryList = [];
    sections.forEach(async(section)=>{
      let category = {
        title: section.title,
        items: []
      };
      const collectionRef = collection(firestore, 'categories', `${section.title}`, 'items')
      const q = query(collectionRef);
      const querySnapshot = await getDocs(q);
      querySnapshot.docs.map(item => category.items.push(item.data()))
      categoryList.push(category)
    })
    return categoryList;

};
