import React from 'react';
import { Link, useResolvedPath, useMatch } from 'react-router-dom';
export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="logo">
        HomeBraiding
      </Link>
      <ul>
        <CustomLink to="/gallery">Gallery/Works</CustomLink>
        <CustomLink to="/booking">Booking</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
