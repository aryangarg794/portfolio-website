'use client';
import * as React from 'react';
import Cursor from '@/components/cursor';

export const GlobalContext = React.createContext(null);

const GlobalProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    return (
        <GlobalContext.Provider value={null}>
            {children}
            <Cursor />
        </GlobalContext.Provider>
    )
}

export default GlobalProvider;