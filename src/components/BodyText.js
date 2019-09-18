/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import ContentBlock from './styledComponents/ContentBlock';
import contentBlockCopy from '../constants/contentBlocks';

export default function BodyText({ className }) {
  return (
    <ul className={className}>
      {contentBlockCopy.map((contentBlock, i) => (
        <li key={i}>
          <ContentBlock
            title={contentBlock.title}
            body={contentBlock.body}
            buttonText={contentBlock.buttonText}
            buttonPath={contentBlock.buttonPath}
          />
        </li>
      ))}
    </ul>
  );
}
