import { logout } from '@/redux/slice/authSlice';
import { clearMenu } from '@/redux/slice/menuSlice';

export const logoutClear = (dispatch) => {
    // 1. 토큰 제거
    localStorage.removeItem('accessToken');

    // 2. redux 초기화
    dispatch(logout());
    dispatch(clearMenu());
};