import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setMenuList } from '@/redux/slice/menuSlice';
import { menuApi } from '@/pages/common/menu/menuApi';

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

      // persist로 저장하면서 주석처리함
      // const { code, data } = await menuApi.reqGetMyMenuList();
      // if (code !== '0000') {
      //   return;
      // }
      // dispatch(setMenuList(data));

    } catch (error) {

      console.error(error);

    }
  };

  return null;
}

export default AuthInitializer;