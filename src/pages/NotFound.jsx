import { Link } from "react-router-dom";
import { ArrowLeft, Code2 } from "lucide-react";
import "../index.css";

export function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found-icon">
        <Code2 size={32} />
      </div>

      <span className="not-found-code">404</span>

      <h1>Page Not Found</h1>

      <p>The page you're looking for doesn't exist or may have been moved.</p>

      <Link to="/" className="not-found-button">
        <ArrowLeft size={16} />
        Back to Dashboard
      </Link>
    </div>
  );
}
