/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Link } from 'gatsby';
import { MdExpandMore } from 'react-icons/md';
import navbarLinks from '../constants/navbarLinks';
import Container from './styledComponents/Container';

export default function Navbar({ className }) {

  const [isActive, setIsActive] = useState(false);
  console.log("TCL: Navbar -> isActive", isActive)
  const handleClick = () => setIsActive(!isActive);

  return (
    <div className={className}>
      <ul className="nav-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <button type="button" onClick={handleClick} className="align-arrow">
            <MdExpandMore size={16} color="#000" />
            Board Details
          </button>
          <ul className={`${isActive ? 'show' : 'nav-dropdown'}`}>
            <li>
              <Link to="/management-committee">
                <span>Management committee</span>
              </Link>
            </li>
            <li>
              <Link to="/staff-particulars">
                <span>Staff Particulars</span>
              </Link>
            </li>
            <li>
              <Link to="/fee-structure">
                <span>Fee Structure</span>
              </Link>
            </li>
            <li>
              <Link to="/enrollment">
                <span>Enrollment</span>
              </Link>
            </li>
            <li>
              <Link to="/admission-process">
                <span>Admission Process</span>
              </Link>
            </li>
            <li>
              <Link to="/admission-form">
                <span>Admission Form</span>
              </Link>
            </li>
            <li>
              <Link to="/facilities">
                <span>Facilities</span>
              </Link>
            </li>
            <li>
              <Link to="/transfer-certificate">
                <span>Transfer Certificate</span>
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/">Admissions</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}
