import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <section className="page">
      <div className="container page__inner">
        <p className="eyebrow">Frontend Portfolio Project</p>
        <h1>CodeHerWay Education Platform</h1>
        <p className="page-copy">
          A clean foundation for an interactive learning platform built with React,
          real routing, and scalable frontend architecture.
        </p>

        <div className="btn-row">
          <Link to="/demo" className="btn btn-primary">
            Try Demo
          </Link>
          <Link to="/login" className="btn btn-secondary">
            Log In
          </Link>
        </div>
      </div>
    </section>
  );
}