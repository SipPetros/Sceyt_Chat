import React from 'react';
import { EmojiPickerProps } from '../../../features/InputContainer/types';
import styles from './EmojiPicker.module.scss';

function EmojiPicker({ onEmojiSelect }: EmojiPickerProps) {
  const emojis = ['😊', '😂', '😍', '🥰', '😎', '🤔', '😘', '😋', '🤣', '😇'];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleEmojiClick = (emoji: any) => {
    onEmojiSelect(emoji);
  };

  return (
    <div
      className={styles.EmojiPickerCont}
    >
      {emojis.map(emoji => (
        <span
          key={`${emoji}1`}
          onClick={() => handleEmojiClick(emoji)}
          className={styles.EmojiSpan}
        >
          {emoji}
        </span>
      ))}
    </div>
  );
}

export default EmojiPicker;
