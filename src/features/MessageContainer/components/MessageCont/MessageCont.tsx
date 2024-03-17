import React, { useState } from 'react';
import { MessageContProps } from '../../types';
import SimpleMessage from '../../../SimpleMessage';
import Avatar from '../../../../shared/ui/Avatar';
import styles from './MessageCont.module.scss';

export default function MessageCont({ message, forwardedRef, isOwner, isPreviousSameUser }: MessageContProps) {
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const handleImageClick = (imageURL: string) => {
    setModalImage(imageURL);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalImage('');
  };
  return (
    <div style={{ alignSelf: isOwner ? 'end' : 'initial', display: 'flex', marginBottom: '16px' }}>
      {!isOwner
        ? (
          <>
            {!isPreviousSameUser && <Avatar url={message.photoURL} className={styles.UserAvatar} />}
            <SimpleMessage marginLeft={isPreviousSameUser ? '32px' : '8px'} message={message} forwardedRef={forwardedRef} isOwner={isOwner} handleImageClick={handleImageClick} />
          </>
        )
        : <SimpleMessage message={message} forwardedRef={forwardedRef} isOwner={isOwner} handleImageClick={handleImageClick} /> }
      {showModal && (
      <div
        className={styles.MessageCont}
        onClick={handleCloseModal}
      >
        <Avatar
          url={modalImage}
          className={styles.Avatar}
        />
      </div>
      )}
    </div>
  );
}
