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
  data?: CodeDetails | CodeDetails[] | VisitDetails;
  err?: string;
}
