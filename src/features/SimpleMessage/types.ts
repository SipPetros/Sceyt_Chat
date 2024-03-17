/* eslint-disable no-unused-vars */
import { MutableRefObject } from 'react';
import { Message } from '../../store/types';

export interface SimpleMessageProps {
    message: Message;
    forwardedRef?: MutableRefObject<null>;
    width?: number | string,
    height?: number | string,
    borderRadius?: number | string,
    participantBackgroundColor?: string,
    ownerBackgroundColor?: string,
    fontSize?: number | string,
    isOwner: boolean,
    handleImageClick: (el: string) => void,
    className?: string,
    marginLeft?: number | string,
  }
