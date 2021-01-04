import IpInfo from '../types/types';

const API_KEY = process.env.REACT_APP_API_KEY;

const getIpInfo = async (ip?: string) => {
  try {
    const response = await fetch(
      // If I make a request without ip, it will return the public IP info
      ip
        ? `https://geo.ipify.org/api/v1?apiKey=${API_KEY}&ipAddress=${ip}`
        : `https://geo.ipify.org/api/v1?apiKey=${API_KEY}`
    );
    const ipInfo: IpInfo = await response.json();

    return ipInfo;
  } catch (error) {
    console.error(error);
  }
};

export default getIpInfo;
