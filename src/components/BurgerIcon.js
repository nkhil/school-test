/* eslint-disable react/prop-types */
import React from 'react';
import { MdMenu, MdClose } from 'react-icons/md';
import Flex from './styledComponents/Flex';

export default function BurgerIcon({ isOpen, handleIsOpen, className }) {
  return (
    <Flex className={className}>
      <button type="button" onClick={handleIsOpen}>
        <div style={{ color: 'black' }}>
          {!isOpen ? <MdMenu size={35} /> : <MdClose size={35} />}
        </div>
      </button>
    </Flex>
  );
}
