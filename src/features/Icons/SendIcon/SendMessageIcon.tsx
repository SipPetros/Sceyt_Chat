import React from 'react';
import { IconProps } from '../../InputContainer/types';

function SendMessageIcon({ width = '3.5em', height = '3.5em', style }: IconProps) {
  return (
    <svg
      style={{ cursor: 'pointer', ...style }}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
    >
      <path
        fill="#5059f6"
        d="M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10
          10A10 10 0 0 1 2 12A10 10 0 0 1 12 2M8 7.71v3.34l7.14.95l-7.14.95v3.34L18 12z"
      />
    </svg>
  );
}

export default SendMessageIcon;
