import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ProtectedRoute({ children }) {
  const isLogin = useSelector(state => state.auth.isLogin);

  if (!isLogin) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;