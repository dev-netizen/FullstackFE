import React, { useContext, useState } from 'react';
import { GlobalContext } from '../GlobalContextProvider';
import { login } from '../services/authService';
import { useHistory } from 'react-router-dom';

import css from './Login.module.css';

const Login = () => {
  const { loginRequest } = useContext(GlobalContext);
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const params = { email, password };
    const result = await login(params);

    if (result.success) {
      loginRequest(result.data);
      history.push('/home');
    } else alert(result.message);
  };

  return (
    <div className={css.mainContainer}>
      <div className={css.login}>
        <div className={css.field}>
          <span>Email:</span>
          <input type='text' onChange={onChangeEmail} />
        </div>
        <div className={css.field}>
          <span>Password:</span>
          <input type='password' onChange={onChangePassword} />
        </div>
        <div className={css.button}>
          <button className={css.button} onClick={onSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
