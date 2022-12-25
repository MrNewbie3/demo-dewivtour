import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../Firebase/Firebase";
export const image = "";
export const GoogleAuth = () => {
  signInWithPopup(auth, provider)
    .then(async (result) => {
      const credential = await GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      image = result.user.photoURL;
      localStorage.setItem("loginInfo", JSON.stringify(result));
    })
    .catch((error) => {});
};

export const jsonData = JSON.parse(localStorage.getItem("loginInfo"));
