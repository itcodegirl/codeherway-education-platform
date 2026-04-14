import { Navigate } from 'react-router-dom';

function useMockAuth() {
  return {
    user: { email: 'admin@codeherway.com' },
    profile: { role: 'admin' },
    loading: false,
  };
}

export default function AdminRoute({ children }) {
  const { user, profile, loading } = useMockAuth();

  if (loading) {
    return <div className="route-loading">Checking admin access...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (profile?.role !== 'admin') {
    return <Navigate to="/app/dashboard" replace />;
  }

  return children;
}