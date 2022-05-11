
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDi7hrcpdUPKQnDzYeY_0_BJ7rrZGn2cOI",
  authDomain: "testapp-7853b.firebaseapp.com",
  projectId: "testapp-7853b",
  storageBucket: "testapp-7853b.appspot.com",
  messagingSenderId: "134714729418",
  appId: "1:134714729418:web:e84ed251e77593266a6533",
  measurementId: "G-VR0QXK3XRC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;