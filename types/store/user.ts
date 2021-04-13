import firebase from "firebase";
import { Action } from "redux";

export type UserState = {
  loading: boolean;
  ready: boolean;
  user?: firebase.User | null;
};

export interface UserLoadedAction extends Action<"USER_LOADED"> {}

export interface SetUserAction extends Action<"SET_USER"> {
  user: firebase.User | null;
}

export type UserAction = UserLoadedAction | SetUserAction;
