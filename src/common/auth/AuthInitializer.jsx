import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { menuApi } from '@/api/menuApi';
import { setMenuList } from '@/redux/slice/menuSlice';
import { codeApi } from '@/api/codeApi';
import { setCodeList } from '@/redux/slice/codeSlice';
import { logoutClear } from '@/common/auth/authUtil';

function AuthInitializer() {
  const dispatch = useDispatch();

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    try {
      const accessToken =
        localStorage.getItem('accessToken');

      if (!accessToken) {
        logoutClear(dispatch);
        return;
      }

      //redux 세팅(menu, code)
      const menuResult = await menuApi.reqGetMyMenuList();
      if (menuResult.code !== '0000') {
        return;
      }
      const codeResult = await codeApi.reqGetCodeList();
      if (codeResult.code !== '0000') {
        return;
      }
      dispatch(setMenuList(menuResult.data));
      dispatch(setCodeList(codeResult.data));

    } catch (error) {

      console.error(error);

    }
  };

  return null;
}

export default AuthInitializer;