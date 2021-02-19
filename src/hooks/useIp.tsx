import { useContext, useState, useEffect } from 'react';
import IpContext from '../context/IpContext';
import getIpInfo from '../utils/getIpInfo';
import validateIp from '../utils/validateIp';

export const useIp = (): {
  ip: string;
  setIp: React.Dispatch<React.SetStateAction<string>>;
  isValid: boolean;
  updateIpInfo: (ip: string) => void;
} => {
  const { setIpInfo, setLoading, ipInfo } = useContext(IpContext);
  const [ip, setIp] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean>(true);

  // Function that updates context to use in every component
  const updateIpInfo = (ip: string) => {
    const storedIp = ipInfo.ip;
    const validationResult = validateIp(ip);
    setIsValid(validationResult);

    // Checking for invalid input and requesting data already stored(i.e. multiple clicks by user)
    if (validationResult && storedIp !== ip) {
      setLoading(true);

      getIpInfo(ip).then((ipInfo) => {
        setIpInfo(ipInfo!);
        setLoading(false);
      });
    }
  };

  // Get Public IP info ONLY ONCE in initial render because the free API is really limited
  useEffect(() => {
    const controller = new AbortController();

    // Display alert message because ipify API won't work with any ad blocker
    window.alert(`Important! Please disable your ad blocker to be able to use ipify's API, this isn't a direct problem with this site. Thank you!`)

    if (Object.entries(ipInfo).length === 0) {
      updateIpInfo(ip);
    }

    return () => controller.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ip, setIp, isValid, updateIpInfo };
};
