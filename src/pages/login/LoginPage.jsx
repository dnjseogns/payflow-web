import { useState } from 'react';
import { loginApi } from '@/pages/login/loginApi';
import LoginPageView from '@/pages/login/LoginPageView';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '@/redux/slice/authSlice';


function LoginPage() {
  const dispatch = useDispatch();
  
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');

  const loginBtnOnClick = async () => {
    try {
      const reqParams = {
        userId,
        userPw
      };
      const {code, message, data} = await loginApi.reqPostLogin(reqParams);

      console.log("data: ",data);

      if(code != '0000'){
        throw new Error(message);
      }

      dispatch(loginSuccess({
        accessToken: data.accessToken,
        userId: data.authResultDto.userId,
        userName: data.authResultDto.userName,
        roleCode: data.authResultDto.roleCode
      })); //client 사용 용도
      localStorage.setItem('accessToken', data.accessToken); //server 인증용
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <LoginPageView
      userId={userId}
      userPw={userPw}

      setUserId={setUserId}
      setUserPw={setUserPw}

      loginBtnOnClick={loginBtnOnClick}
    />
  );
}

export default LoginPage;