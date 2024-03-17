import React from 'react';
import clsx from 'clsx';
import { IconProps } from '../../../features/InputContainer/types';
import styles from './SendMessageIcon.module.scss';

function SendMessageIcon({ width = '3.5em', height = '3.5em', className, color = '#5059f6' }: IconProps) {
  return (
    <svg
      className={clsx(styles.SendMessageIcon, className)}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
    >
      <path
        fill={color}
        d="M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10
          10A10 10 0 0 1 2 12A10 10 0 0 1 12 2M8 7.71v3.34l7.14.95l-7.14.95v3.34L18 12z"
      />
    </svg>
  );
}

export default SendMessageIcon;
