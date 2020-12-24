import React, { createContext, useReducer } from 'react';

import { reducer, initialState } from './GlobalReducer';

const GlobalContext = createContext({});

const GlobalContextProvider = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialState);

  const loginRequest = (params) => {
    dispatch({ type: 'LOGIN', payload: params });
  };

  return (
    <GlobalContext.Provider
      value={{
        loginRequest,
        globalState: state,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalContextProvider };
