import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./components/App";
import { FirebaseContextProvider } from "./firebase/useFirebaseContext";

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContextProvider>
      <App />
    </FirebaseContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// icons from https://www.flaticon.com/packs/emoji-people-1
