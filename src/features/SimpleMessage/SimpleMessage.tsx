import React from 'react';
import { clsx } from 'clsx';
import MessageInfoCont from '../MessageContainer/components/MessageInfoCont/MessageInfoCont';
import TextCont from '../../shared/ui/TextCont';
import { SimpleMessageProps } from './types';
import styles from './SimpleMessage.module.scss';
import { Avatar } from '../../shared/ui';

function SimpleMessage({
  message, forwardedRef, width = 300, height = 400,
  borderRadius = '15px', participantBackgroundColor = '#f1f2f6', ownerBackgroundColor = '#e3e7ff',
  fontSize = '14px', isOwner = false, handleImageClick, className, marginLeft,
}: SimpleMessageProps) {
  return (
    <div
      className={clsx(styles.SimpleMessageCont, className)}
      style={{
        width,
        maxHeight: height,
        borderRadius,
        backgroundColor: isOwner ? ownerBackgroundColor : participantBackgroundColor,
        marginLeft,
      }}
      ref={forwardedRef}
    >

      <div
        className={styles.SimpleMessageBody}
      >
        {message.isImage
          ? (
            <>
              <Avatar url={message.photoURL} handleClick={() => handleImageClick(message.photoURL)} borderRadius={borderRadius} />
              <MessageInfoCont
                message={message}
                isOwner={isOwner}
                className={styles.MessageInfoCont}
              />
            </>
          )
          : (message.photoURL ? (
            <>
              <TextCont
                fontSize={fontSize}
                className={styles.TextCont}
                text={message.text}
              />
              <Avatar
                url={message.photoURL}
                handleClick={() => handleImageClick(message.photoURL)}
                borderRadius={`0px 0px ${borderRadius} ${borderRadius}`}
                className={styles.Avatar}
              />
              <MessageInfoCont
                message={message}
                isOwner={isOwner}
                className={styles.MessageInfoCont}
              />
            </>
          )
            : (
              <>
                <TextCont
                  fontSize={fontSize}
                  className={styles.TextCont}
                  text={message.text}
                />
                <MessageInfoCont
                  message={message}
                  isOwner={isOwner}
                  className={styles.TextOnlyMessage}
                />
              </>
            )
          )}

      </div>

    </div>

  );
}

export default SimpleMessage;
