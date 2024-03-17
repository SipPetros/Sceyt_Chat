import { Message } from '../types';
import { AddMessageActionType } from './ActionTypes';
import { AddMessageType } from './actions';
import { messages } from './helpers';

interface MessageState {
  messages: Message[];
}

const initialState: MessageState = {
  messages,
};

// eslint-disable-next-line default-param-last
const messageReducer = (state = initialState, action: AddMessageType) => {
  switch (action.type) {
    case AddMessageActionType.ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    default:
      return state;
  }
};

export default messageReducer;
