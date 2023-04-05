interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 4,
};

const counterReducer = (state: CounterState = initialState, action: any) => {
  switch (action.type) {
    case 'INCREASEMENTED': {
      const check = { ...state };
      check.value += action.payload;
      return {
        ...state,
        value: check.value,
      };
    }
    default:
      return state;
  }
};
export default counterReducer;
