/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'gatsby';
import metadata from '../constants/metadata';

export default function Title({ className }) {
  return (
    <div className={className}>
      <Link to="/">
        <h1>{metadata.title}</h1>
      </Link>
    </div>
  );
}
