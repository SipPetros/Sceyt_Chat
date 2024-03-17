import React from 'react';
import MessageInfoCont from '../MessageContainer/components/MessageInfoCont/MessageInfoCont';
import MessageImg from '../MessageContainer/components/MessageImg';
import TextCont from '../MessageContainer/components/TextCont';
import { SimpleMessageProps } from './types';

function SimpleMessage({
  message, forwardedRef, width = 300, height = 400,
  borderRadius = '15px', participantBackgroundColor = '#f1f2f6', ownerBackgroundColor = '#e3e7ff',
  fontSize = '14px', isOwner = false, handleImageClick, style,
}: SimpleMessageProps) {
  return (
    <div
      style={{
        width,
        maxHeight: height,
        borderRadius,
        backgroundColor: isOwner ? ownerBackgroundColor : participantBackgroundColor,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        ...style,
      }}
      ref={forwardedRef}
    >

      <div
        style={{
          position: 'relative', // Enable absolute positioning for image
          width: '100%', // Stretch to full width
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {message.isImage
          ? (
            <>
              <MessageImg url={message.photoURL} handleClick={() => handleImageClick(message.photoURL)} style={{ borderRadius }} />
              <MessageInfoCont
                message={message}
                isOwner={isOwner}
                style={{
                  top: 0,
                  fontSize: 8,
                  bottom: 8,
                  borderRadius: 15,
                  backgroundColor: '#00000080',
                  padding: 8,
                  color: 'white',
                  justifyContent: 'center',
                  position: 'absolute',
                }}
              />
            </>
          )
          : (message.photoURL ? (
            <>
              <TextCont
                style={{
                  fontSize,
                  margin: '16px 16px 0px 16px',
                }}
                text={message.text}
              />
              <MessageImg
                url={message.photoURL}
                handleClick={() => handleImageClick(message.photoURL)}
                style={{ borderRadius: `0px 0px ${borderRadius} ${borderRadius}`, marginTop: '16px' }}
              />
              <MessageInfoCont
                message={message}
                isOwner={isOwner}
                style={{
                  top: 0,
                  fontSize: 8,
                  bottom: 8,
                  borderRadius: 15,
                  backgroundColor: '#00000080',
                  padding: 8,
                  color: 'white',
                  justifyContent: 'center',
                  position: 'absolute',
                }}
              />
            </>
          )
            : (
              <>
                <TextCont
                  style={{
                    fontSize,
                    margin: '16px 16px 0px 16px',
                  }}
                  text={message.text}
                />
                <MessageInfoCont
                  message={message}
                  isOwner={isOwner}
                  style={{
                    fontSize: '8px',
                    alignSelf: 'end',
                    margin: 8,
                    display: 'flex',
                    alignItems: 'center',
                  }}
                />
              </>
            )
          )}

      </div>

    </div>

  );
}

export default SimpleMessage;
