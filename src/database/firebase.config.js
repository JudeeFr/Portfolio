// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpTlqK231dQx9PLzcmWb20DbbuBY22hks",
  authDomain: "judeefr.firebaseapp.com",
  projectId: "judeefr",
  storageBucket: "judeefr.appspot.com",
  messagingSenderId: "553292738879",
  appId: "1:553292738879:web:dc3c08d7297b4f08f7a38a",
  measurementId: "G-Q0XVPW7FY4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

	
// init services: used to reach out to get data
const db = getFirestore(app);
// collection reference 
export const webDev = collection(db, 'webDev')

// queries
// export const webDev = query(colRef, where("collection", "==", "webDev"))
