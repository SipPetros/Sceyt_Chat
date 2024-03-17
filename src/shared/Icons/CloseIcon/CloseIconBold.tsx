import React from 'react';
import clsx from 'clsx';
import { IconProps } from '../../../features/InputContainer/types';
import styles from './ClosedIconBold.module.scss';

function CloseIconBold({ width = '2em', height = '2em', className }: IconProps) {
  return (
    <svg
      className={clsx(styles.CloseIcon, className)}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
    >
      <path fill="#5059f6" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z" />
    </svg>
  );
}

export default CloseIconBold;
