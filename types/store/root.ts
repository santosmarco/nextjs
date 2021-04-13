import { AppAction, AppState } from "./app";
import { UserAction, UserState } from "./user";

export type RootState = {
  app: AppState;
  user: UserState;
};

export type RootAction = {
  app: AppAction;
  user: UserAction;
};
