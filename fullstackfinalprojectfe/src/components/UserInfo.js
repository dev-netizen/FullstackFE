import React, { useContext } from 'react';
import { GlobalContext } from '../GlobalContextProvider';
import { useHistory } from 'react-router-dom';

import css from './Login.module.css';

const UserInfo = () => {
  const { loginRequest, globalState } = useContext(GlobalContext);
  const history = useHistory();

  const onLogout = async (event) => {
    loginRequest(null);
    history.push('/');
  };

  return (
    <div className={css.mainContainer}>
      <div className={css.login}>
        <button className={css.button} onClick={onLogout}>
          Logout
        </button>
        <div className={css.field}>
          <span>Name: {globalState.user.name}</span>
        </div>
        <div className={css.field}>
          <span>Last Name: {globalState.user.lastName}</span>
        </div>
        <div className={css.field}>
          <span>Email: {globalState.user.email}</span>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
