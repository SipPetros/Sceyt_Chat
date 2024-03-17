/* eslint-disable @typescript-eslint/no-explicit-any */
import { FunctionComponent, MouseEventHandler, ReactNode } from 'react';

export interface InputContainerProps {
    placeholder?: string,
    style? : React.CSSProperties,
    borderRadius?: string,
    UploadFileIcon?: FunctionComponent<IconProps>,
    EmojiIcon?: FunctionComponent<IconProps>,
    SendIcon?: FunctionComponent<IconProps>,
    CloseIcon?: FunctionComponent<IconProps>,
    width?: number | string,
  }

export interface IconProps {
      width?: number | string;
      height?: number | string;
      style?: React.CSSProperties;
  }

export interface EmojiPickerProps {
    // eslint-disable-next-line no-unused-vars
    onEmojiSelect: (el: any) => void
}

export interface DropDownMenuButtonProps {
    handleClick: MouseEventHandler<HTMLButtonElement>,
    btnText: string,
}

export interface IconButtonProps {
    handleClick: () => void,
    children: ReactNode,
}

export interface DropDownProps {
    buttonIcon: React.ReactNode;
    buttonText?: string;
    backgroundColor?: string;
    children: React.ReactNode
  }
