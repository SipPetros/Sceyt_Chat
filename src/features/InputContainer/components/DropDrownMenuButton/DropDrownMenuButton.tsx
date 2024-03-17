import React, { useState } from 'react';
import { DropDownMenuButtonProps } from '../../types';

export default function DropDrownMenuButton({ handleClick, btnText }: DropDownMenuButtonProps) {
  const [hoverButton, setHoveredButton] = useState(false);
  return (
    <button
      style={{
        padding: 10,
        backgroundColor: hoverButton ? '#e3e7ff' : 'transparent',
        border: 'none',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
      }}
      onClick={handleClick}
      onMouseEnter={() => setHoveredButton(true)}
      onMouseLeave={() => setHoveredButton(false)}
    >
      {btnText}
    </button>

  );
}
