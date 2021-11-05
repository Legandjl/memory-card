import React from "react";
import { Firebase } from "./Firebase";
const FirebaseContext = React.createContext();

const FirebaseContextProvider = (props) => {
  return (
    <FirebaseContext.Provider value={Firebase()}>
      {props.children}
    </FirebaseContext.Provider>
  );
};

export { FirebaseContextProvider, FirebaseContext };
