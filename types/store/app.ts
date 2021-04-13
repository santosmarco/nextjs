import { Action } from "redux";

export type AppState = {};

export interface InitAppAction extends Action<"INIT_APP"> {}

export type AppAction = InitAppAction;
