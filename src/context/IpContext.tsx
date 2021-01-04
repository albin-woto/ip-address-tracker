import React, { useState } from 'react';
import IpInfo, { IpContext } from '../types/types';

// Create context with a undefined default value but assuring it will not be null
const Context = React.createContext<IpContext>(undefined!);

export function IpContextProvider({ children }: { children: React.ReactNode }) {
  const [ipInfo, setIpInfo] = useState<IpInfo>({});

  return (
    <Context.Provider value={{ ipInfo, setIpInfo }}>
      {children}
    </Context.Provider>
  );
}

export default Context;
