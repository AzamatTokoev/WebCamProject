import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDxVFCGbX6s8ecIEtiKx_Y23JWrVlbUhVo",
  authDomain: "webcam-14f36.firebaseapp.com",
  projectId: "webcam-14f36",
  storageBucket: "webcam-14f36.appspot.com",
  messagingSenderId: "835215553129",
  appId: "1:835215553129:web:5a202b5bd22cb9bd9e68f8",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
