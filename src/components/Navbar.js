/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Link } from 'gatsby';
import { MdExpandMore } from 'react-icons/md';

export default function Navbar({ className }) {
  const [isBoardDetailsActive, setBoardDetailsActive] = useState(false);
  const toggleBoardDetailsActive = () => setBoardDetailsActive(!isBoardDetailsActive);
  const setBoardDetailsIsActive = () => setBoardDetailsActive(true);

  const [isMandatoryDisclosureSectionActive, setMandatoryDisclosureSection] = useState(false);
  const toggleMandatoryDisclosureSectionActive = () =>
    setMandatoryDisclosureSection(!isMandatoryDisclosureSectionActive);
  const setMandatoryDisclosureSectionToActive = () => setMandatoryDisclosureSection(true);

  return (
    <div className={className}>
      <ul className="nav-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        {/* eslint-disable-next-line jsx-a11y/mouse-events-have-key-events */}
        <li onMouseOut={toggleBoardDetailsActive}>
          <button
            type="button"
            onClick={toggleBoardDetailsActive}
            onMouseOver={toggleBoardDetailsActive}
            onFocus={toggleBoardDetailsActive}
            className="align-arrow"
          >
            <MdExpandMore size={16} color="#000" />
            Board Details
          </button>
          {/* eslint-disable-next-line jsx-a11y/mouse-events-have-key-events */}
          <ul
            className={`${isBoardDetailsActive ? 'show' : 'nav-dropdown'}`}
            onMouseOver={setBoardDetailsIsActive}
          >
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
        {/* eslint-disable-next-line jsx-a11y/mouse-events-have-key-events */}
        <li onMouseOut={toggleMandatoryDisclosureSectionActive}>
          <button
            type="button"
            onClick={toggleMandatoryDisclosureSectionActive}
            onMouseOver={toggleMandatoryDisclosureSectionActive}
            onFocus={toggleMandatoryDisclosureSectionActive}
            className="align-arrow"
          >
            <MdExpandMore size={16} color="#000" />
            Mandatory Public Disclosure
          </button>
          {/* eslint-disable-next-line jsx-a11y/mouse-events-have-key-events */}
          <ul
            className={`${isMandatoryDisclosureSectionActive ? 'show' : 'nav-dropdown'}`}
            onMouseOver={setMandatoryDisclosureSectionToActive}
          >
            <li>
              <Link to="/mandatory-public-disclosure">
                <span>Mandatory Public Disclosure</span>
              </Link>
            </li>
            <li>
              <Link to="/mandatory-public-disclosure/details-of-curriculum">
                <span>Details of Curriculum</span>
              </Link>
            </li>
            <li>
              <Link to="/mandatory-public-disclosure/management-committee">
                <span>Management Committee</span>
              </Link>
            </li>
            <li>
              <Link to="/mandatory-public-disclosure/school-leaving-certificate">
                <span>School leaving certificate</span>
              </Link>
            </li>
            <li>
              <Link to="/mandatory-public-disclosure/fee-structure">
                <span>Fee structure</span>
              </Link>
            </li>
            <li>
              <Link to="/mandatory-public-disclosure/fee-structure-norms">
                <span>Fee structure norms</span>
              </Link>
            </li>
            <li>
              <Link to="/mandatory-public-disclosure/self-affidavit">
                <span>Self Affidavit</span>
              </Link>
            </li>
            <li>
              <Link to="/mandatory-public-disclosure/infrastructure-and-facilities">
                <span>Infrastructure and facilities</span>
              </Link>
            </li>
            <li>
              <Link to="/mandatory-public-disclosure/academic-result-2021-22">
                <span>Academic results</span>
              </Link>
            </li>
            <li>
              <Link to="/mandatory-public-disclosure/admission-form">
                <span>Admission form</span>
              </Link>
            </li>
            <li>
              <Link to="/mandatory-public-disclosure/awards-and-recognition">
                <span>Awards and recognition</span>
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/admission-process">Admissions</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}
