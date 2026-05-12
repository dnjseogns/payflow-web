import '@/css/pages/login.css';

function LoginPageView({
  userId,
  userPw,

  setUserId,
  setUserPw,

  loginBtnOnClick
}) {

  return (
    <div className="login-container">

      <div className="login-box">

        <h2 className="title">
          Login
        </h2>

        <input
          className="input"
          type="text"
          placeholder="아이디"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />

        <input
          className="input"
          type="password"
          placeholder="비밀번호"
          value={userPw}
          onChange={(e) => setUserPw(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              loginBtnOnClick();
            }
          }}
        />

        <button
          className="button"
          onClick={loginBtnOnClick}
        >
          로그인
        </button>

      </div>

    </div>
  );
}

export default LoginPageView;