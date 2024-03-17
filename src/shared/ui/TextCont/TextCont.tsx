import React from 'react';
import { TextContProps } from '../../../features/MessageContainer/types';

export default function TextCont({ text, fontSize, className }: TextContProps) {
  return (
    <div
      style={{ fontSize }}
      className={className}
    >
      {text}
    </div>
  );
}
