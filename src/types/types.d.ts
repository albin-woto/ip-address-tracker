// The properties are optional just in case API changes something
export default interface IpInfo {
  // code only in error
  code?: number;
  ip?: string;
  location?: {
    country?: string;
    region?: string;
    city?: string;
    lat?: number;
    lng?: number;
    postalCode?: string;
    timezone?: string;
    geonameId?: number;
  };
  as?: object;
  isp?: string;
  proxy?: object;
}

export type IpContextT = {
  ipInfo: IpInfo;
  loading: boolean;
  setIpInfo: (ipInfo: IpInfo) => void;
  setLoading: (boolean) => void;
};

export interface ChangeViewProps {
  center: LatLngExpression;
  zoom: number;
}
