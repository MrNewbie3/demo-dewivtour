import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../Firebase/Firebase";

export let image = "";

export const GoogleAuth = () => {
  signInWithPopup(auth, provider)
    .then(async (result) => {
      const credential = await GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      image = result.user.photoURL;
      localStorage.setItem("loginInfo", JSON.stringify(result));
      window.location.reload();
    })
    .catch((error) => {
      console.log(error);
    });
};

export const jsonData = JSON.parse(localStorage.getItem("loginInfo"));

export const signOutMethod = () => {
  signOut(auth)
    .then(() => {
      localStorage.removeItem("loginInfo");
      window.location.reload();
    })
    .catch((error) => {});
};
