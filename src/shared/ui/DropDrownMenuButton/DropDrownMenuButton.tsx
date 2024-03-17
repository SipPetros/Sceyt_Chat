import React, { useState } from 'react';
import { DropDownMenuButtonProps } from '../../../features/InputContainer/types';
import styles from './DropDownMenuButton.module.scss';

export default function DropDrownMenuButton({ handleClick, btnText }: DropDownMenuButtonProps) {
  const [hoverButton, setHoveredButton] = useState(false);
  return (
    <button
      className={styles.DropDrownMenuButton}
      style={{
        backgroundColor: hoverButton ? '#e3e7ff' : 'transparent',
      }}
      onClick={handleClick}
      onMouseEnter={() => setHoveredButton(true)}
      onMouseLeave={() => setHoveredButton(false)}
    >
      {btnText}
    </button>

  );
}
