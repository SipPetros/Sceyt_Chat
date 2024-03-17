import React from 'react';
import MessageContainer from '../MessageContainer/components/ChatContainer';
import InputContainer from '../InputContainer';

interface AppContainerProps {
  width?: number | string,
  height?: number | string,
  backgroundColor?: string,
}

export default function AppContainer({ width = '100%', height = '100vh', backgroundColor = '#ffffff' }: AppContainerProps) {
  return (
    <div
      style={{
        backgroundColor,
        width,
        height,
        margin: 'auto',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <MessageContainer />
      <InputContainer />
    </div>
  );
}
