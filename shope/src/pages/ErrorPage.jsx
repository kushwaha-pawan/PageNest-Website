import React from "react";
import { useRouteError, Link } from "react-router-dom";
import "./ErrorPage.css"; 

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="error-page">
      <h1>Oops!</h1>
      <p>Sorry, the page you're looking for doesn't exist or something went wrong.</p>
      {error?.statusText && <p className="error-detail">{error.statusText}</p>}
      {error?.message && <p className="error-detail">{error.message}</p>}

      <Link to="/" className="error-back-home">
        Go to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
