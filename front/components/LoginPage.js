import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Button, Input, Form } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequestAction } from '../reducers/user';

import Router from 'next/router';
import useInput from '../hooks/useInput';
import NavBar from './Navbar';
import LandingPage from './LandingPage';

const ButtonWrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
`;

const FormWrapper = styled(Form)`
  width: 400px;
  overflow: hidden;
  box-sizing: border-box;
`;

const Email = styled.div`
  width: 400px;
  margin-bottom: 15px;
`;

const Password = styled.div`
  width: 400px;
`;

const LoginForm = () => {
  const dispatch = useDispatch();
  const me = useSelector((state) => state.user.me);
  const logInLoading = useSelector((state) => state.user.logInLoading);
  // const logInDone = useSelector((state) => state.user.logInDone);
  const logInError = useSelector((state) => state.user.logInError);
  
  // 커스텀훅으로 중복제거
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [code, setCode] = useState('');

  const style = useMemo(() => ({ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%' }));

  useEffect(() => {
      setCode(new URL(window.location.href).searchParams.get('code'));
  }, [code]); 

  useEffect(() => {
      if (logInError) {
          alert(logInError);
      }
  }, [logInError]);
  
  // useEffect(() => {
  //     if (logInDone) {
  //         alert('로그인이 완료됐습니다.');
  //         Router.replace('/');
  //     }
  // }, [logInDone]);

  const onSubmitForm = useCallback(() => {
      dispatch(loginRequestAction({ email, password }));
  }, [email, password]);

  return (
      <>
        {me ? <LandingPage />
        :
        <>
          <NavBar />
          <div style={style}>
            <FormWrapper onFinish={onSubmitForm}>
                <Email>
                    <label htmlFor="user-email">이메일</label>
                    <br />
                    <Input
                    name="user-email"
                    type="email"
                    value={email}
                    onChange={onChangeEmail}
                    required
                    />
                </Email>
                <Password>
                    <label htmlFor="user-password">비밀번호</label>
                    <br />
                    <Input
                    name="user-password"
                    type="password"
                    value={password}
                    onChange={onChangePassword}
                    required
                    />
                </Password>
                <ButtonWrapper>
                    <Button type="primary" htmlType="submit" loading={logInLoading}>로그인</Button>
                    <Link href="/register"><a><Button>회원가입</Button></a></Link>
                </ButtonWrapper>
            </FormWrapper>
          </div>
        </>}
      </>
  );
};

export default LoginForm;
