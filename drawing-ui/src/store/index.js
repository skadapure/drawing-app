import React, { useReducer } from "react";
import { reducer, initialState } from "./reducer";

export const Store = React.createContext();
export const Dispatch = React.createContext();

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Store.Provider value={state}>
      <Dispatch.Provider value={dispatch}>{props.children}</Dispatch.Provider>
    </Store.Provider>
  );
}

export function useStore() {
  const context = React.useContext(Store);
  if (context === undefined) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
}

export function useDispatch() {
  const context = React.useContext(Dispatch);
  if (context === undefined) {
    throw new Error("useDispatch must be used within a StoreProvider");
  }
  return context;
}