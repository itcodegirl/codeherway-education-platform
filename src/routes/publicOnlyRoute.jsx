import { Navigate } from 'react-router-dom';

function useMockAuth() {
  return {
    user: null,
    loading: false,
  };
}

export default function PublicOnlyRoute({ children }) {
  const { user, loading } = useMockAuth();

  if (loading) {
    return <div className="route-loading">Loading...</div>;
  }

  if (user) {
    return <Navigate to="/app/dashboard" replace />;
  }

  return children;
}