import { Link, NavLink, Outlet } from 'react-router-dom';

export default function PublicLayout() {
  return (
    <div className="public-layout">
      <header className="public-header">
        <div className="container public-header__inner">
          <Link to="/" className="brand">
            CodeHerWay
          </Link>

          <nav className="public-nav" aria-label="Public navigation">
            <NavLink to="/">Overview</NavLink>
            <NavLink to="/demo">Demo</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Sign Up</NavLink>
          </nav>
        </div>
      </header>

      <main className="public-main">
        <Outlet />
      </main>

      <footer className="public-footer">
        <div className="container">
          <p>Built by Jenna Zawaski</p>
        </div>
      </footer>
    </div>
  );
}