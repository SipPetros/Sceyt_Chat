import { MutableRefObject } from 'react';
import { Message } from '../../store/types';

export interface MessageContainerProps {
    pageSize?: number;
  }

export interface MessageContProps {
    message: Message,
    forwardedRef?: MutableRefObject<null>;
    isOwner: boolean,
    isPreviousSameUser: boolean
}

export interface TextContProps {
    text: string,
    fontSize: number | string,
    className?: string,
}

export interface MessageImgProps {
    url: string;
    // eslint-disable-next-line no-unused-vars
    handleClick?: (el: string) => void;
    borderRadius?: number | string;
    className?: string;
  }
