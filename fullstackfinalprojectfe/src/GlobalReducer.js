export const initialState = {
  user: null,
};

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'LOGIN':
      return {
        ...state,
        user: payload,
      };
    default:
      throw new Error();
  }
};
