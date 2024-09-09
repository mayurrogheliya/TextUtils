import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  const containerStyle = {
    minHeight: '70vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const h1Style = {
    fontSize: '6rem',
    fontWeight: 'bold',
    color: '#dc3545', // Danger red color
  };

  return (
    <div style={containerStyle} className="text-center">
      <div>
        <h1 style={h1Style} className="mb-4">404</h1>
        <h2 className="display-4 mb-4">Oops! Page Not Found</h2>
        <p className="lead mb-4">
          The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        <Link to="/" className="btn btn-primary">
          Go Back to Home
        </Link>
      </div>
    </div>
  );
}
export default PageNotFound
