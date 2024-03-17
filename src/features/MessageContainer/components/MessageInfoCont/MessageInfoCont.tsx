import React from 'react';
import { Message } from '../../../../store/types';
import { ArrivedIcon, ReadIcon } from '../../../Icons';

interface MessageInfoContProps {
  message: Message;
  isOwner: boolean;
  style?: React.CSSProperties;
}

function MessageInfoCont({ message, isOwner, style }: MessageInfoContProps) {
  return (
    <div
      style={{
        display: 'flex',
        alignSelf: 'end',
        alignItems: 'center',
        zIndex: 1000,
        fontWeight: 'bold',
        margin: 8,
        ...style,
      }}
    >
      {message.sentAt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      {isOwner && (message.isRead ? <ReadIcon /> : <ArrivedIcon />
      )}
    </div>
  );
}

export default MessageInfoCont;
