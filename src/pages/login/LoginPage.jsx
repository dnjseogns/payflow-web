import { useState } from 'react';
import { useDispatch } from 'react-redux';
import LoginPageView from '@/pages/login/LoginPageView';
import { loginSuccess } from '@/redux/slice/authSlice';
import { setMenuList } from '@/redux/slice/menuSlice';
import { setCodeList } from '@/redux/slice/codeSlice';
import { loginApi } from '@/pages/login/loginApi';
import { menuApi } from '@/api/menuApi';
import { codeApi } from '@/api/codeApi';

function LoginPage() {
  const dispatch = useDispatch();
  
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');

  const loginBtnOnClick = async () => {
    try {
      // 로그인
      const reqParams = {
        userId,
        userPw
      };
      const {code, message, data} = await loginApi.reqPostLogin(reqParams);
      if(code != '0000'){
        throw new Error(message);
      }
      //server 인증용(accessToken 저장 후 아래 menu, code api 요청해야 함)
      localStorage.setItem('accessToken', data.accessToken); 
      
      //메뉴 api
      const menuResult = await menuApi.reqGetMyMenuList();
      if(menuResult.code != '0000'){
        throw new Error();
      }
      //code api
      const codeResult = await codeApi.reqGetCodeList();
      if(codeResult.code != '0000'){
        throw new Error();
      }

      
      
      //redux 저장
      dispatch(setCodeList(codeResult.data));
      dispatch(setMenuList(menuResult.data));
      //redux login 정보 저장 (client 사용 용도)
      dispatch(loginSuccess({
        accessToken: data.accessToken,
        userId: data.authResultDto.userId,
        userName: data.authResultDto.userName,
        roleCode: data.authResultDto.roleCode
      }));


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