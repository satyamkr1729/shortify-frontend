import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IpDetectService } from './ip-detect.service';
import { Observable, of } from 'rxjs';
import { IP } from '../../shortify-ds';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IpDetectImplService implements IpDetectService {
  private apiBase = 'http://ip-api.com/json';
  constructor(private http: HttpClient) { }

  getInfo(): Observable<IP> {
    return this.http.get<IP>(this.apiBase).pipe(
      catchError((err, caught) => {
        console.log(err);
        return of(new IP());
      })
    );
  }
}
