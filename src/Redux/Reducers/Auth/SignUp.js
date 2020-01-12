const initialState = {
  response: [],
  isPending: false,
  isRejected: false,
  isFulfilled: false,
};

const authSignUpReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case 'POST_REGISTER_PENDING':
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'POST_REGISTER_REJECTED':
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
      };
    case 'POST_REGISTER_FULFILLED':
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        response: action.payload.data,
      };
    default:
      return prevState;
  }
};

export default authSignUpReducer;
