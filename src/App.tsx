import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux/es/exports";
import { decrement, increment, isLogin } from "./actions";
function App() {
  //useSelecter > storeからstateを取得する
  const counter = useSelector((state: any) => state.counter);
  const login = useSelector((state: any) => state.isLogin);

  //useDispatch > reducerにstateとactionを届ける
  const dispatch = useDispatch();

  //dispatchにactionをそのまま入れる書き方
  const useincrement = (num: number) => {
    dispatch({ type: "INCREMENT", payload: num });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1 className="App">Counter:{counter}</h1>
      <button onClick={() => useincrement(4)}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {login ? <h1>ログイン中</h1> : <h1>ログインして下さい</h1>}
      <button onClick={() => dispatch(isLogin())}>
        {login ? "ログアウト" : "ログイン"}
      </button>
    </div>
  );
}

export default App;
