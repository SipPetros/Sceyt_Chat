/* eslint-disable react/function-component-definition */
import React from 'react';
import clsx from 'clsx';
import { Message } from '../../../../store/types';
import { ArrivedIcon, ReadIcon } from '../../../../shared/Icons';
import styles from './MessageInfoCont.module.scss';

interface MessageInfoContProps {
  message: Message;
  isOwner: boolean;
  className?: string;
}

const MessageInfoCont: React.FC<MessageInfoContProps> = ({ message, isOwner, className }) => (
  <div
    className={clsx(styles.MessageInfoContStyle, className)}
  >
    {message.sentAt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
    {isOwner && (message.isRead ? <ReadIcon /> : <ArrivedIcon />
    )}
  </div>
);

MessageInfoCont.defaultProps = {
  className: '',
};

export default MessageInfoCont;
