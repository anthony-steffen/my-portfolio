import { createContext } from 'react';

const StyledBackgroundContext: React.Context<string[]> = createContext<string[]>([]);

export default StyledBackgroundContext;