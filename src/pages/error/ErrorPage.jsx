import { useNavigate } from 'react-router-dom';
import '@/css/pages/error.css';

function ErrorPage() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/dash'); // 로그인 기준 메인으로 이동
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="error-container">
      <div className="error-box">
        <h1 className="error-code">404</h1>
        <h2 className="error-title">페이지를 찾을 수 없습니다</h2>
        <p className="error-desc">
          요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
        </p>

        <div className="error-buttons">
          <button onClick={goHome} className="btn primary">
            홈으로 이동
          </button>
          <button onClick={goBack} className="btn">
            이전 페이지
          </button>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;