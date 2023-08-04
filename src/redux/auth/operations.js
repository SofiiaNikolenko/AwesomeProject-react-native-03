import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase/config";
import { updateUserProfile, authSignOut, authStateChange } from "./authSlice";

export const registerDB =
  ({ login, email, password, avatar }) =>
  async (dispatch, getState) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayName: login,
        photoUrl: avatar,
      });
      const { displayName, uid, photoUrl } = auth.currentUser;

      dispatch(updateUserProfile({ userId: uid, login: displayName, email }));
    } catch (error) {
      console.log(error.message);
    }
  };

export const loginDB =
  ({ email, password }) =>
  async () => {
    try {
      const credentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(credentials.user);
      return credentials.user;
    } catch (error) {
      console.log("error.message", error.message);
    }
  };

export const authSignOutUser = () => async (dispatch, getState) => {
  try {
    await signOut(auth);
    dispatch(authSignOut());
  } catch (error) {
    console.log("error", error.message);
  }
};

export const authStateChanged = () => async (dispatch, getState) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const { uid, displayName, email, photoUrl } = user;
      dispatch(
        updateUserProfile({
          userId: uid,
          login: displayName,
          email,
          avatar: photoUrl,
        })
      );
      dispatch(authStateChange({ stateChange: true }));
    }
  });
};
