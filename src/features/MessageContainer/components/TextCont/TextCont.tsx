import React from 'react';
import { TextContProps } from '../../types';

export default function TextCont({ text, style }: TextContProps) {
  return (
    <div
      style={{
        fontSize: 8,
        margin: '16px 16px 0px 16px',
        ...style,
      }}
    >
      {text}
    </div>
  );
}
