import { doc, getDoc, getDocs, collection } from "firebase/firestore";
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


export const getCategories =  (categoryListNames)=>{
  try{

    let CategoriesList = [];

    categoryListNames.forEach( async(name) => {

        let category = {
          title: name,
          items: []
        };

        const categoryItemsSnapshot = await getDocs(collection(firestore, 'categories', `${name}`, 'items'))
       
        categoryItemsSnapshot.forEach( ( item ) => {
            category.items.push(item.data())
        })
        CategoriesList.push(category)
    })
    return CategoriesList;
  }catch(err){
    console.log(err)
  }
}