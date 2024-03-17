import React from 'react';
import { IconButtonProps } from '../../types';

export default function IconButton({ handleClick, children }:IconButtonProps) {
  return (
    <button onClick={handleClick} style={{ background: 'transparent', border: 'none' }}>
      {children}
    </button>
  );
}
