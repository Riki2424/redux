//　reducer > storeの状態を更新する。dispatchでstateとactionを受け取る。actionの内容に応じて新しい状態を返す
const isLoginReducer = (state = false, action: any) => {
  switch (action.type) {
    case "ISLOGIN":
      return !state;
    default:
      return state;
  }
};

export default isLoginReducer;
