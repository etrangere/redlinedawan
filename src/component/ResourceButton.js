import './ResourceButton.css';
import React from 'react';

export default function ResourceButton({ name, link }) {
  return (
    <a href={link} rel="noopener noreferrer" target="frame1">
      <div className='source-button'>{name}</div>
    </a>
  );
}
