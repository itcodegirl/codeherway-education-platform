import { Link } from 'react-router-dom';

export default function DemoPage() {
  return (
    <section className="page">
      <div className="container page__inner">
        <p className="eyebrow">Public Demo</p>
        <h1>Interactive Preview</h1>
        <p className="page-copy">
          This is your public demo route. Real preview content will go here later.
        </p>

        <div className="demo-placeholder">Demo content placeholder</div>

        <div className="btn-row">
          <Link to="/signup" className="btn btn-primary">
            Create Account
          </Link>
          <Link to="/login" className="btn btn-secondary">
            Log In
          </Link>
        </div>
      </div>
    </section>
  );
}