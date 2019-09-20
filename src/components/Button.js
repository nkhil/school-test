/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'gatsby';

export default function Button({ text, path, className }) {
  return (
    <button className={className} type="button">
      <Link to={path}>{text}</Link>
    </button>
  );
}
