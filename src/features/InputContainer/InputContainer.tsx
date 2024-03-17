import React, {
  KeyboardEvent, useRef, useState,
} from 'react';
import { useDispatch } from 'react-redux';
import { DropDrownMenuButton, EmojiPicker, DropDown } from './components';
import { InputContainerProps } from './types';
import { ADD_MESSAGE } from '../../store/messages/ActionTypes';
import IconButton from './components/IconButton';
import {
  CloseIconBold, PlusIcon, SendMessageIcon, SmilingEmojiIcon,
} from '../Icons';

function InputContainer({
  placeholder = 'Write a message...', borderRadius = '50px', style, UploadFileIcon = PlusIcon, EmojiIcon = SmilingEmojiIcon,
  SendIcon = SendMessageIcon, CloseIcon = CloseIconBold, width = '100%',
}: InputContainerProps) {
  const dispatch = useDispatch();
  const [value, setValue] = useState<string>('');
  const [file, setFile] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSendMessage = () => {
    const id = `${Date.now()}-${Math.floor(Math.random() * 1000000)}`;
    if (value || file) {
      const newMessage = {
        id,
        text: value,
        photoURL: file || '',
        isImage: !value && !!file,
        sentAt: new Date(),
        isRead: true,
        isOwner: true,
      };
      dispatch({ type: ADD_MESSAGE, payload: newMessage });
      setValue('');
      setFile('');
    }
  };

  const handlePressEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleEmojiSelect = (emoji:any) => {
    setValue(value + emoji);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (files) {
      setFile(URL.createObjectURL(files[0]));
    }
  };

  const handleButtonClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleClearInput = () => {
    setValue('');
    setFile('');
  };

  return (
    <div
      style={{
        position: 'relative',
        width,
        display: 'flex',
        alignItems: 'center',
      }}
    >

      <div
        style={{
          padding: '8px',
          border: '1px solid #ccc',
          borderRadius,
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          ...style,
        }}
      >
        <DropDown
          buttonIcon={<UploadFileIcon />}
        >
          <DropDrownMenuButton
            handleClick={handleButtonClick}
            btnText="Upload Image"
          />
        </DropDown>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          onKeyUp={handlePressEnter}
          placeholder={placeholder}
          style={{
            width: '100%',
            border: 'none', // No border
            outline: 'none', // Remove outline on focus
            background: 'transparent', // Transparent background
            fontSize: '16px',
            padding: '0px 8px',
          }}
        />
        <input
          type="file"
          onChange={handleFileChange}
          ref={fileInputRef}
          style={{ display: 'none' }}
          accept="image/*"
        />
        {file && (<img src={file} alt={file} style={{ width: 24, height: 24, marginRight: 8 }} />)}
        <DropDown
          buttonIcon={<EmojiIcon />}
        >
          <EmojiPicker onEmojiSelect={handleEmojiSelect} />
        </DropDown>
        {(value || file) && (
        <IconButton handleClick={handleClearInput}>
          <CloseIcon />
        </IconButton>
        ) }
      </div>
      <IconButton handleClick={handleSendMessage}>
        <SendIcon />
      </IconButton>
    </div>
  );
}

export default InputContainer;
