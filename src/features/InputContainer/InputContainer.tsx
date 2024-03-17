import React, {
  KeyboardEvent, useRef, useState,
} from 'react';
import { useDispatch } from 'react-redux';
import { InputContainerProps } from './types';
import IconButton from '../../shared/ui/IconButton';
import {
  CloseIconBold, PlusIcon, SendMessageIcon, SmilingEmojiIcon,
} from '../../shared/Icons';
import { AddMessageActionType } from '../../store/messages/ActionTypes';
import {
  Avatar, DropDown, DropDownMenuButton, EmojiPicker,
} from '../../shared/ui';
import styles from './InputContainer.module.scss';

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
      dispatch({ type: AddMessageActionType.ADD_MESSAGE, payload: newMessage });
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
      className={styles.InputContainer}
      style={{
        width,
      }}
    >

      <div
        className={styles.TextFieldCont}
        style={{
          borderRadius,
          ...style,
        }}
      >
        <DropDown
          buttonIcon={<UploadFileIcon />}
        >
          <DropDownMenuButton
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
          className={styles.InputTextField}
        />
        <input
          type="file"
          onChange={handleFileChange}
          ref={fileInputRef}
          style={{ display: 'none' }}
          accept="image/*"
        />
        {file && (<Avatar url={file} className={styles.SmallAvatar} />)}
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
