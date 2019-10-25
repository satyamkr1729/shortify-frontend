import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { CodeDetails, VisitDetails, ApiResponse } from '../../shortify-ds';
import { ShortifyService } from './shortify.service';
import { catchError } from 'rxjs/operators';

@Injectable()

export class ShortifyServiceImplService implements ShortifyService {
  private apiBase = 'http://localhost:8081';

  constructor(private http: HttpClient) { }

  getUrl(details: VisitDetails): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.apiBase + '/url', details, {params: new HttpParams().set('code', details.code)}).pipe(
      catchError((err, caught) => {
        console.log(err);
        return of({success: false, err: String(err)});
      })
    );
  }

  getCodeVisitDetails(code: string): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.apiBase + '/details', {params: new HttpParams().set('code', code)}).pipe(
      catchError((err, caught) => {
        console.log(err);
        return of({success: false, err: String(err)});
      })
    );
  }

  getAllCodeDetails(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.apiBase + '/list').pipe(
      catchError((err, caught) => {
        console.log(err);
        return of({success: false, err: String(err)});
      })
    );
  }

  addNewCode(url: string): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.apiBase + '/add', {url}).pipe(
      catchError((err, caught) => {
        console.log(err);
        return of({success: false, err: String(err)});
      })
    );
  }
}
