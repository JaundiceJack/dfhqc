// Import action types
import { GET_MESSAGES, CLEAR_MESSAGES } from './types';

// Put any server/action messages into the current state
export const returnMessages = (msg, status, id = null) => {
  return {
    type: GET_MESSAGES,
    payload: { error: msg.error, warning: msg.warning, info: msg.info, status: status, id: id }
  }
}

// Remove any messages from the current state
export const clearMessages = () => { return { type: CLEAR_MESSAGES } }
