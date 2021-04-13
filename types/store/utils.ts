import { RootAction, RootState } from "./root";

export type ActionHandler<
  T extends keyof RootState,
  U extends RootAction[T]
> = (state: RootState[T], action: U) => RootState[T];
