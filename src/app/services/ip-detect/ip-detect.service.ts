import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IP } from '../../shortify-ds';

@Injectable()
export abstract class IpDetectService {

  constructor() { }

  abstract getInfo(): Observable<IP>;
}
