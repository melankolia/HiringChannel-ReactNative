const initialState = {
  engineerBeta: [],
  isPending: false,
  isRejected: false,
  isFulfilled: false,
};

const engineerReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case 'GET_ENGINEER_PENDING':
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'GET_ENGINEER_REJECTED':
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
      };
    case 'GET_ENGINEER_FULFILLED':
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        engineerBeta: action.payload.data[0],
      };
    default:
      return prevState;
  }
};

export default engineerReducer;
