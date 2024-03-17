import { Message } from '../types';
import { ADD_MESSAGE, LOAD_MORE_MESSAGES } from './ActionTypes';

export const addMessage = (message: Message) => ({
  type: ADD_MESSAGE,
  payload: message,
});

export const loadMoreMessages = (messages: Message[]) => ({
  type: LOAD_MORE_MESSAGES,
  payload: messages,
});
