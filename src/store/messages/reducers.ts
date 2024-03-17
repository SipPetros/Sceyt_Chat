import { Message } from '../types';
import { ADD_MESSAGE, LOAD_MORE_MESSAGES } from './ActionTypes';
import { messages } from './helpers';

interface MessageState {
  messages: Message[];
}

const initialState: MessageState = {
  messages,
};

// eslint-disable-next-line default-param-last, @typescript-eslint/no-explicit-any
const messageReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    case LOAD_MORE_MESSAGES:
      return {
        ...state,
        messages: [...state.messages, ...action.payload],
      };
    default:
      return state;
  }
};

export default messageReducer;
