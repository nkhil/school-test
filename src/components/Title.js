/* eslint-disable react/prop-types */
import React from 'react';
import metadata from '../constants/metadata';

export default function Title({ className }) {
  return (
    <div className={className}>
      <h1>{metadata.title}</h1>
    </div>
  );
}
