const token = (state = 0, action) => {
  switch (action.type) {
    case "AUTHORIZE":
      return state + 1 ;
    case "SIGN_OUT":
      return state = 0;
    case "NON_AUTHORIZE":
      return state - 1;
    default:
      return state;
  }
}

export default token;
