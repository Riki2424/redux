export const increment = (number: number) => {
  return {
    type: "INCREMENT",
    payload: number,
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const isLogin = () => {
  return {
    type: "ISLOGIN",
  };
};
