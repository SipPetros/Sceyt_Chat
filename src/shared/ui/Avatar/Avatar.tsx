import React, { useState } from 'react';
import clsx from 'clsx';
import { MessageImgProps } from '../../../features/MessageContainer/types';
import styles from './MessageInfoImg.module.scss';

export default function Avatar({ url, handleClick = () => null, borderRadius, className }: MessageImgProps) {
  const [imageSrc, setImageSrc] = useState(url);

  const handleImageError = () => {
    setImageSrc('https://placehold.co/600x400?text=Error');
  };
  return (
    <img
      src={imageSrc} // Replace with the actual path to your read icon
      alt={imageSrc}
      onClick={() => handleClick(url)}
      className={clsx(styles.AvatarStyles, className)}
      style={{ borderRadius }}
      onError={handleImageError}
    />
  );
}
