import React, { useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import MainLogoIcon from '../../assets/icons/MainLogoIcon';

const Login = () => {
  const [isLoginDisplay, setIsLoginDisplay] = useState(true);
  const [formValue, setFormValue] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Head>
        <title>Login / Sign Up</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Wrapper>
        <div className='container'>
          <MainLogoIcon />
          <form onSubmit={onSubmit}>
            <h1>{isLoginDisplay ? 'Login' : 'Sign Up'}</h1>
            <div className='input-container'>
              <input
                type='email'
                value={formValue.email}
                onChange={onChange}
                name='email'
                placeholder='Email address'
              />
              <input
                type='password'
                value={formValue.password}
                onChange={onChange}
                name='password'
                placeholder='Password'
              />
              {!isLoginDisplay && (
                <input
                  type='password'
                  value={formValue.confirmPassword}
                  onChange={onChange}
                  name='confirmPassword'
                  placeholder='Repeat Password'
                />
              )}
            </div>
            <button>
              <h3>
                {isLoginDisplay ? 'Login to your account' : 'Create an account'}
              </h3>
            </button>
            <footer>
              <h3>
                {isLoginDisplay
                  ? "Don't have an account?"
                  : 'Login to your account'}
              </h3>
              <span onClick={() => setIsLoginDisplay(!isLoginDisplay)}>
                {isLoginDisplay ? 'Sign Up' : 'Login'}
              </span>
            </footer>
          </form>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  height: 100%;
  border: 1px solid red;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 58.4px;
    width: 100%;
    padding: 24px;
  }

  form {
    width: 100%;
    background: #161d2f;
    padding: 24px;
    border-radius: 10px;
  }

  .input-container {
    margin: 40px 0;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  input {
    border-bottom: 1px solid #5a698f;
    padding-left: 1rem;
    padding-bottom: 18px;
    /* transition: border-color 0.3s linear; */
  }

  /* input:focus {
  } */

  footer {
    width: 100%;
    margin-top: 22px;
    display: flex;
    justify-content: center;
    gap: 9px;
  }

  button {
    width: 100%;
    color: #fff;
    background: #fc4747;
    border: 0;
    border-radius: 6px;
    padding: 14px;
  }

  h3 {
    font-weight: 300;
  }

  span {
    color: #fc4747;
  }
`;

export default Login;
