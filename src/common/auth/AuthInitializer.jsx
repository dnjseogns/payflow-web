import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setMenuList } from '@/redux/slice/menuSlice';
import { menuApi } from '@/pages/menu/menuApi';

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

      const { code, data } = await menuApi.reqGetMyMenuList();

      if (code !== '0000') {
        return;
      }

      dispatch(setMenuList(data));

    } catch (error) {

      console.error(error);

    }
  };

  return null;
}

export default AuthInitializer;