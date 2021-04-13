import { useSelector } from "react-redux";
import { RootState } from "../types";

const useStateSlice = (slice: keyof RootState) => {
  return useSelector<RootState, RootState[typeof slice]>(
    (state) => state[slice]
  );
};

export default useStateSlice;
