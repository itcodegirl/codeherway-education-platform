import { Link } from 'react-router-dom';

export default function SignupPage() {
  return (
    <section className="page">
      <div className="container page__inner page__inner--narrow">
        <p className="eyebrow">Authentication</p>
        <h1>Create Account</h1>
        <p className="page-copy">
          Temporary signup page. Real auth UI will go here later.
        </p>

        <form className="auth-form-placeholder">
          <label>
            <span>Display Name</span>
            <input type="text" placeholder="Jenna" />
          </label>

          <label>
            <span>Email</span>
            <input type="email" placeholder="you@example.com" />
          </label>

          <label>
            <span>Password</span>
            <input type="password" placeholder="••••••••" />
          </label>

          <button type="button" className="btn btn-primary">
            Create Account
          </button>
        </form>

        <p className="page-copy-small">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </section>
  );
}