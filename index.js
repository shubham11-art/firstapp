import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import reduxStore from "../src/ReduxApp/store";


const root = ReactDOM.createRoot(document.getElementById("root"));

const persistor = persistStore(reduxStore);

root.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <PersistGate loading={<div>loading...</div>} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// import { ThemeProvider } from "@mui/material";
// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// // import { theme } from "./MaterialUI.js/theme";
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
