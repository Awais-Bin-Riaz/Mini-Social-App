import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import dotenv from "dotenv";
dotenv.config();

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "######################################",
  authDomain: "##################################",
  projectId: "##################",
  storageBucket: "#############################",
  messagingSenderId: "#############",
  appId: "#########################################",
  measurementId: "############",
};
const firebaseApp = initializeApp(firebaseConfig);

// Option 2: Access Firebase services using shorthand notation
export const storage = getStorage(firebaseApp);
