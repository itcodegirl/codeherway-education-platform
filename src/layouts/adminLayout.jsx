import { Link, NavLink, Outlet } from 'react-router-dom';

export default function AdminLayout() {
  return (
    <div className="admin-layout">
      <header className="admin-header">
        <div className="container admin-header__inner">
          <Link to="/app/dashboard">Back to App</Link>

          <nav className="admin-nav" aria-label="Admin navigation">
            <NavLink to="/admin">Admin Dashboard</NavLink>
          </nav>
        </div>
      </header>

      <main className="admin-main">
        <Outlet />
      </main>
    </div>
  );
}
