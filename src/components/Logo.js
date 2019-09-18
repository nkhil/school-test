/* eslint-disable react/prop-types */
import React from 'react';
import metadata from '../constants/metadata';

export default function Logo({ className, src }) {
  return <img src={src} className={className} alt={metadata.description} />;
}
