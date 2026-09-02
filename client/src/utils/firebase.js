
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-ace14.firebaseapp.com",
  projectId: "interviewiq-ace14",
  storageBucket: "interviewiq-ace14.firebasestorage.app",
  messagingSenderId: "765660877033",
  appId: "1:765660877033:web:6928358e5cfa1a76a86078"
};

const app = initializeApp(firebaseConfig);

/*FOR ENABLING AUTHENTICAION*/
const auth = getAuth(app)

/*for provider*/
const provider = new GoogleAuthProvider()

export {auth,provider} /*for using it in our  auth page we need to expot it */