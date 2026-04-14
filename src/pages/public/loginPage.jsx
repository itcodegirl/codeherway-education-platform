import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <section className="page">
      <div className="container page__inner page__inner--narrow">
        <p className="eyebrow">Authentication</p>
        <h1>Log In</h1>
        <p className="page-copy">
          Temporary login page. Real auth UI will go here later.
        </p>

        <form className="auth-form-placeholder">
          <label>
            <span>Email</span>
            <input type="email" placeholder="you@example.com" />
          </label>

          <label>
            <span>Password</span>
            <input type="password" placeholder="••••••••" />
          </label>

          <button type="button" className="btn btn-primary">
            Log In
          </button>
        </form>

        <p className="page-copy-small">
          Need an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </section>
  );
}