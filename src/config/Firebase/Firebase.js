// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0ZoHhFZ8WADPWYawzlhnZZdyfvOAg8h8",
  authDomain: "dewi-vtour.firebaseapp.com",
  projectId: "dewi-vtour",
  storageBucket: "dewi-vtour.appspot.com",
  messagingSenderId: "716663329690",
  appId: "1:716663329690:web:32c5f313177cb715c66023",
  measurementId: "G-TEQPCNHF0L",
};

export const actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be in the authorized domains list in the Firebase Console.
  url: "https://www.example.com/finishSignUp?cartId=1234",
  // This must be true.
  handleCodeInApp: true,
  iOS: {
    bundleId: "com.example.ios",
  },
  android: {
    packageName: "com.example.android",
    installApp: true,
    minimumVersion: "12",
  },
  dynamicLinkDomain: "example.page.link",
};

// Initialize Firebase
const Firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(Firebase);
export const auth = getAuth(Firebase);
export const provider = new GoogleAuthProvider();
export default Firebase;
