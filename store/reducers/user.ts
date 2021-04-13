import {
  SetUserAction,
  UserAction,
  UserLoadedAction,
  UserState,
} from "../../types";
import { ActionHandler } from "../../types/store/utils";

const initialState: UserState = {
  loading: true,
  ready: false,
};

const onUserLoaded: ActionHandler<"user", UserLoadedAction> = (state) => {
  return {
    ...state,
    loading: false,
    ready: true,
  };
};

const onSetUser: ActionHandler<"user", SetUserAction> = (state, { user }) => {
  return { ...state, user };
};

const reducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case "USER_LOADED":
      return onUserLoaded(state, action);
    case "SET_USER":
      return onSetUser(state, action);
    default:
      return state;
  }
};

export default reducer;
