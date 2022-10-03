import {createContext} from 'react';

/**
 * context created for the test to make it shareable across the components
 */
export const TestContext = createContext<contextType | null>(null);

export default TestContext;
