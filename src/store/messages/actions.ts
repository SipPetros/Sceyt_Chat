import { Message } from '../types';
import { AddMessageActionType } from './ActionTypes';

export type AddMessageType = {
  type: AddMessageActionType.ADD_MESSAGE,
  payload: Message,
}

export const addMessage = (message: Message): AddMessageType => ({
  type: AddMessageActionType.ADD_MESSAGE,
  payload: message,
});

export type MessagesAction = AddMessageType;
