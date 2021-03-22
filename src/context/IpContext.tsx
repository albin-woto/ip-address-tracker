import React, { useState } from 'react';
import IpInfo, { IpContextT } from '../types/types';

// Create context with a undefined default value but assuring it will not be null
const IpContext = React.createContext<IpContextT>(undefined!);

export function IpContextProvider({ children }: { children: React.ReactNode }) {
  const [ipInfo, setIpInfo] = useState<IpInfo>({});
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <IpContext.Provider value={{ ipInfo, setIpInfo, loading, setLoading }}>
      {children}
    </IpContext.Provider>
  );
}

export default IpContext;
