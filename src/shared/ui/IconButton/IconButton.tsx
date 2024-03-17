import React from 'react';
import { IconButtonProps } from '../../../features/InputContainer/types';
import styles from './IconButton.module.scss';

export default function IconButton({ handleClick, children }:IconButtonProps) {
  return (
    <button onClick={handleClick} className={styles.IconButton}>
      {children}
    </button>
  );
}
