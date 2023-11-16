import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCOqy2k5JLbCuLVfuwFf4DTAK7FnVB39sY",
  authDomain: "project-1-450bf.firebaseapp.com",
  projectId: "project-1-450bf",
  storageBucket: "project-1-450bf.appspot.com",
  messagingSenderId: "933706227581",
  appId: "1:933706227581:web:7ecd73e35757718501f614",
  measurementId: "G-FT6Y6YF35K"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);