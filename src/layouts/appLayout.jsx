import { NavLink, Outlet } from 'react-router-dom';

export default function AppLayout() {
  return (
    <div className="app-layout">
      <aside className="app-sidebar" aria-label="Application sidebar">
        <div className="app-sidebar__brand">
          <NavLink to="/app/dashboard">CodeHerWay</NavLink>
        </div>

        <nav className="app-sidebar__nav" aria-label="Application navigation">
          <NavLink to="/app/dashboard">Dashboard</NavLink>
          <NavLink to="/app/profile">Profile</NavLink>
          <NavLink to="/app/settings">Settings</NavLink>
          <NavLink to="/admin">Admin</NavLink>
        </nav>
      </aside>

      <div className="app-shell">
        <header className="app-topbar">
          <div className="app-topbar__inner">
            <h1 className="app-topbar__title">Learning Platform</h1>
          </div>
        </header>

        <main className="app-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}