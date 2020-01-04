/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'gatsby';
import metadata from '../constants/metadata';
import logoSrc from '../../static/logo/st-michaels-school.png';

export default function Logo({ className }) {
  return (
    <Link to="/">
      <img src={logoSrc} className={className} alt={metadata.description} />
    </Link>
  );
}
