import {createContext} from 'react';

/**
 * context created for the test to make it shareable across the components
 */
export const LiveChatContext = createContext<liveChatContext | null>(null);

export default LiveChatContext;
