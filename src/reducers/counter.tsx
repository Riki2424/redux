//　reducer > storeの状態を更新する。dispatchでstateとactionを受け取る。actionの内容に応じて新しい状態を返す
const counterReducer = (state = 0, action: any) => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

export default counterReducer;
