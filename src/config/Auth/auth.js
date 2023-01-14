import { getRedirectResult, GoogleAuthProvider, signInWithPopup, signInWithRedirect, signOut, sendSignInLinkToEmail, createUserWithEmailAndPassword } from "firebase/auth";
import Swal from "sweetalert2";
import { actionCodeSettings, auth, provider } from "../Firebase/Firebase";

export let image = "";

export const GoogleAuth = async () => {
  await signInWithPopup(auth, provider)
    .then(async (result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      localStorage.setItem("loginInfo", JSON.stringify(result));
      const user = JSON.parse(localStorage.getItem("loginInfo"));
      image = user.photoURL;
    })
    .catch((error) => {});
};

export const jsonData = JSON.parse(localStorage.getItem("loginInfo"));

export const signOutMethod = () => {
  signOut(auth)
    .then(() => {
      localStorage.removeItem("loginInfo");
      localStorage.removeItem("Order Information");
      window.location.reload();
    })
    .catch((error) => {});
};

export const emailSignIn = (email) => {
  sendSignInLinkToEmail(auth, email, actionCodeSettings)
    .then(() => {
      window.localStorage.setItem("emailForSignIn", email);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

export const createAccount = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      window.localStorage.setItem("loginInfo", JSON.stringify(userCredential));
      console.log("Success login");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
};
