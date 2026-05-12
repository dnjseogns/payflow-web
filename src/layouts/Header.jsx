import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutClear } from '@/common/auth/authUtil';

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLogin = useSelector(state => state.auth.isLogin);
  const userId = useSelector(state => state.auth.user.userId); // 있으면 사용
  const userName = useSelector(state => state.auth.user.userName); // 있으면 사용

  const logoutBtnOnClick = () => {


    // 1. 토큰 제거
    localStorage.removeItem('accessToken');

    // 2. redux 초기화
    logoutClear(dispatch);
    clearMenu();

    // 3. 로그인 페이지 이동
    navigate('/login');
  };

  return (
    <header className="app-header">
      {/* LEFT - BRAND */}
      <div className="header-left">
        <div className="logo-box">
          <span className="logo">PAYFLOW</span>
        </div>

        <div className="system-title">
          Admin System
        </div>
      </div>

      {/* CENTER (옵션 - 타이틀 영역) */}
      <div className="header-center">
        <span className="notice-badge">🚧공지사항 개발 중</span>
      </div>

      {/* RIGHT - USER INFO */}
      <div className="header-right">
        {isLogin && (
          <>
            <span className="user-info">
              👤 {userId ? userName+"("+userId+")"+"님" : "고객님"}
            </span>

            <button className="logout-btn" onClick={logoutBtnOnClick}>
              Logout
            </button>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;