export class CodeDetails {
  code?: string;
  url?: string;
  timestamp?: string;
  visitCount?: string;
}

export class VisitDetails {
  code?: string;
  timestamp?: Date;
  os?: string;
  browser?: string;
  ip?: string;
  country?: string;
}

export class ApiResponse {
  success: boolean;
  data?: any;
  err?: string;
}

export class IP {
  status: string;
  country: string;
  countryCode: string;
  region: string;
  regionName: string;
  city: string;
  zip: string;
  lat: number;
  lon: number;
  timezone: string;
  isp: string;
  org: string;
  as: string;
  query: string;
}
