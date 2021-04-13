import firebase from "firebase";
import { SetUserAction, UserLoadedAction } from "../../types";

export const userLoaded = (): UserLoadedAction => ({
  type: "USER_LOADED",
});

export const setUser = (user: firebase.User | null): SetUserAction => ({
  type: "SET_USER",
  user,
});
