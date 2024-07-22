// // import { initializeApp } from "firebase/app";
// // import { getAuth, signOut, GoogleAuthProvider } from "firebase/auth";

// // const firebaseConfig = {
// //     apiKey: "AIzaSyCBIbxnMfI9HYmcEJXLgoActJOPFuKvI_I",
// //     authDomain: "culture-festival-new.firebaseapp.com",
// //     databaseURL: "https://culture-festival-new-default-rtdb.europe-west1.firebasedatabase.app",
// //     projectId: "culture-festival-new",
// //     storageBucket: "culture-festival-new.appspot.com",
// //     messagingSenderId: "570329409284",
// //     appId: "1:570329409284:web:b0208562270d9361231251"
// //   };

// //   const app = initializeApp(firebaseConfig);
// // export const auth = getAuth(app);
// // export const googleProvider = new GoogleAuthProvider();
// // export { signOut };


// import { initializeApp } from "firebase/app";
// import { getAuth, signOut, GoogleAuthProvider } from "firebase/auth";
// import firebase from "firebase/compat/app";
// const firebaseConfig = {
//   apiKey: "AIzaSyB4PLaEZMyOg0j0F0Br_4Qk3OUGlydZPZM",
//   authDomain: "culture-2.firebaseapp.com",
//   databaseURL: "https://culture-2-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "culture-2",
//   storageBucket: "culture-2.appspot.com",
//   messagingSenderId: "20027048919",
//   appId: "1:20027048919:web:3cf868951998f918728192"
// };

// // const app = initializeApp(firebaseConfig);
// //  const auth = getAuth(app);
// //  const googleProvider = new GoogleAuthProvider();
// // export { signOut , googleProvider , auth}; 
// // let app;

// if (!firebase.apps.length) {
//   app = firebase.initializeApp(firebaseConfig);
// } else {
//   app = firebase.app();
// }

// // You can now use the app instance to access Firebase services
// const auth = app.auth();


import { initializeApp, getApps } from "firebase/app";
import { getAuth, signOut, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyB4PLaEZMyOg0j0F0Br_4Qk3OUGlydZPZM",
  authDomain: "culture-2.firebaseapp.com",
  databaseURL: "https://culture-2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "culture-2",
  storageBucket: "culture-2.appspot.com",
  messagingSenderId: "20027048919",
  appId: "1:20027048919:web:3cf868951998f918728192"
};

let app;

if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}
export const db = getDatabase(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { signOut, googleProvider, auth };
