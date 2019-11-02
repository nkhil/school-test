/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'gatsby';
import metadata from '../constants/metadata';

export default function Logo({ className, src }) {
  return (
    <Link to="/">
      <img src={src} className={className} alt={metadata.description} />
    </Link>
  );
}
