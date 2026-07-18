import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="not-found">
      <div className="content-shell">
        <h1>Page not found</h1>
        <p>The page you requested does not exist.</p>
        <Link className="btn btn--primary" to="/about">
          Go to About
        </Link>
      </div>
    </div>
  );
}