import { AppAction, AppState } from "../../types";

const initialState: AppState = {};

const reducer = (state = initialState, action: AppAction): AppState => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
