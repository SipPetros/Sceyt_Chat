import React from 'react';
import clsx from 'clsx';
import { IconProps } from '../../../features/InputContainer/types';
import styles from './ReadIcon.module.scss';

function ReadIcon({ width = '2em', height = '2em', className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(styles.ReadIcon, className)}
      width={width}
      height={height}
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="#5059f6"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m2 12l5.25 5l2.625-3M8 12l5.25 5L22 7m-6 0l-3.5 4"
      />
    </svg>
  );
}

export default ReadIcon;
