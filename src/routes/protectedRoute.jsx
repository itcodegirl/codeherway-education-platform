import { Navigate } from 'react-router-dom';

function useMockAuth() {
  return {
    user: { email: 'demo@codeherway.com' },
    loading: false,
  };
}

export default function ProtectedRoute({ children }) {
  const { user, loading } = useMockAuth();

  if (loading) {
    return <div className="route-loading">Checking access...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}