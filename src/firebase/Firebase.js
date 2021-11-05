import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDoc, doc, updateDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyASiJ4jr5ZWD3hekOAoFPZM8cx7KbaDwo8",
  authDomain: "memory-card-83fbf.firebaseapp.com",
  projectId: "memory-card-83fbf",
  storageBucket: "memory-card-83fbf.appspot.com",
  messagingSenderId: "990844800969",
  appId: "1:990844800969:web:2b46b4ab6b06e06ea26218",
  measurementId: "G-97J2RP3EPW",
};

//https://saveyourtime.medium.com/firebase-cloud-firestore-add-set-update-delete-get-data-6da566513b1b

const Firebase = () => {
  initializeApp(firebaseConfig);
  const db = getFirestore();
  const publicMethods = {};
  const docRef = doc(db, "highscore", "currentHighScore");

  publicMethods.getHighScore = async () => {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data().highscore;
    } else {
      return 0;
    }
  };

  publicMethods.updateHighScore = async (score) => {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const current = docSnap.data().highscore;
      if (score > current) {
        await updateDoc(docRef, {
          highscore: score,
        });
      }
    } else {
      // doc.data() will be undefined in this case
      throw new Error("no matching document found");
    }
  };

  return publicMethods;
};

export { Firebase };
