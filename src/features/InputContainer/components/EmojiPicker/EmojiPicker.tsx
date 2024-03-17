import React from 'react';
import { EmojiPickerProps } from '../../types';

function EmojiPicker({ onEmojiSelect }: EmojiPickerProps) {
  const emojis = ['😊', '😂', '😍', '🥰', '😎', '🤔', '😘', '😋', '🤣', '😇'];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleEmojiClick = (emoji: any) => {
    onEmojiSelect(emoji);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        padding: 14,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {emojis.map(emoji => (
        <span
          key={`${emoji}1`}
          onClick={() => handleEmojiClick(emoji)}
          style={{ fontSize: '24px', cursor: 'pointer', marginRight: '10px' }}
        >
          {emoji}
        </span>
      ))}
    </div>
  );
}

export default EmojiPicker;
