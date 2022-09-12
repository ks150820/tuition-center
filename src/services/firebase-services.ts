// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
// import {getAnalytics} from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import {getFirestore} from 'firebase/firestore/lite';
const firebaseConfig = {
  apiKey: 'AIzaSyBJtIpPahC73rWE2pxbSqGPfB7BD6OWQVM',
  authDomain: 'fir-examp-433c1.firebaseapp.com',
  projectId: 'fir-examp-433c1',
  storageBucket: 'fir-examp-433c1.appspot.com',
  messagingSenderId: '725147360424',
  appId: '1:725147360424:web:12e84daf89c2e23347769d',
  measurementId: 'G-QXQG3CF4F0',
}; // move it to a secure location
// const firebaseServices = () => {};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
export const firestore = getFirestore(app);

export const initFirebase = () => {
  initializeApp(firebaseConfig);
};
