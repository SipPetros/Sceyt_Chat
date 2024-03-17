import React, { useState } from 'react';
import { MessageContProps } from '../../types';
import SimpleMessage from '../../../SimpleMessage';
import MessageImg from '../MessageImg';

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
            {!isPreviousSameUser && <MessageImg url={message.photoURL} style={{ width: '24px', height: '24px', borderRadius: '50px' }} />}
            <SimpleMessage style={{ marginLeft: isPreviousSameUser ? '32px' : '8px' }} message={message} forwardedRef={forwardedRef} isOwner={isOwner} handleImageClick={handleImageClick} />
          </>
        )
        : <SimpleMessage message={message} forwardedRef={forwardedRef} isOwner={isOwner} handleImageClick={handleImageClick} /> }
      {showModal && (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1000,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onClick={handleCloseModal}
      >
        <img
          src={modalImage}
          style={{ maxWidth: '90%', maxHeight: '90%' }}
        />
      </div>
      )}
    </div>
  );
}
