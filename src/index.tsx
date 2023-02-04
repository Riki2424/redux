import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import allReducer from "./reducers/allResucer";
import { Provider } from "react-redux/es/exports";

//createStore >　新しいstoreを作る(引数には、reducerを入れる)
//Providerで親コンポーネントをラッピングし、全てのコンポーネントで使用できるようにする(引数には、作ったstoreを入れる)
const store = createStore(allReducer);
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
