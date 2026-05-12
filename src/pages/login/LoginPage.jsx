import { useState } from 'react';
import { loginApi } from '@/pages/login/loginApi';
import { menuApi } from '@/pages/menu/menuApi';
import LoginPageView from '@/pages/login/LoginPageView';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '@/redux/slice/authSlice';
import { setMenuList } from '@/redux/slice/menuSlice';

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

      if(code != '0000'){
        throw new Error(message);
      }

      //client 사용 용도
      dispatch(loginSuccess({
        accessToken: data.accessToken,
        userId: data.authResultDto.userId,
        userName: data.authResultDto.userName,
        roleCode: data.authResultDto.roleCode
      }));

      //server 인증용
      localStorage.setItem('accessToken', data.accessToken); 

      
      //메뉴 redux 저장(accessToken 저장 후 요청해야함)
      const menuResult = await menuApi.reqGetMyMenuList();
    
      if(menuResult.code != '0000'){
        throw new Error(message);
      }
      dispatch(setMenuList(menuResult.data));

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