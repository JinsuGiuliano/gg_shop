import { realTimeDb as db } from "../firebase.utils";
import { set, ref, get } from "firebase/database";

export const addMessage = (username, post) => {
  let localData = {
    username: username,
    post: post,
    timestamp: new Date().toLocaleString(),
  };

  get(ref(db, "allposts"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        let previousData = snapshot.val().postfeed;
        localData.key = snapshot.val().postfeed.length;
        previousData.push(localData);
        set(ref(db, "allposts"), {
          postfeed: previousData,
        });
      } else {
        let previousData = [];
        localData.key = 0;
        previousData.push(localData);
        set(ref(db, "allposts"), {
          postfeed: previousData,
        });
      }
    })
    .catch((error) => {
       console.log(error.message);
    });
};
