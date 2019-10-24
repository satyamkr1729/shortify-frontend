import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CodeDetails, VisitDetails, ApiResponse } from './shortify-ds';

@Injectable()

export abstract class ShortifyService {
  abstract getUrl(details: VisitDetails): Observable<ApiResponse>;
  abstract getCodeVisitDetails(code: string): Observable<ApiResponse>;
  abstract getAllCodeDetails(): Observable<ApiResponse>;
  abstract addNewCode(url: string): Observable<ApiResponse>;
}
