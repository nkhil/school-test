/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'gatsby';
import navbarLinks from '../constants/navbarLinks';

export default function Navbar({ className }) {
  return (
    <div className={className}>
      <ul>
        {navbarLinks.map((linkObject, i) => (
          <li key={i}>
            <Link to={linkObject.path}>{linkObject.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
