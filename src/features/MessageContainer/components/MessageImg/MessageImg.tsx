import React, { useState } from 'react';
import { MessageImgProps } from '../../types';

export default function MessageImg({ url, handleClick = () => null, style }: MessageImgProps) {
  const [imageSrc, setImageSrc] = useState(url);

  const handleImageError = () => {
    setImageSrc('https://placehold.co/600x400?text=Error');
  };
  return (
    <img
      src={imageSrc} // Replace with the actual path to your read icon
      alt={imageSrc}
      onClick={() => handleClick(url)}
      style={{
        width: '100%', // Stretch image to cover content area
        height: '100%', // Stretch image to cover content area
        objectFit: 'cover', // Ensure image covers the entire area
        cursor: 'pointer',
        ...style,
      }}
      onError={handleImageError}
    />
  );
}
