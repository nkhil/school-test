/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'gatsby';

// export const Button = ({ text, onClick, type, disabled }) => (
//   <button
//     type={type}
//     disabled={disabled}
//     onClick={onClick}
//     className={styles.button}
//   >
//     {text}
//   </button>
// );

export default function Button({ text, path, className }) {
  return (
    <button className={className} type="button">
      <Link to={path}>{text}</Link>
    </button>
  );
}
