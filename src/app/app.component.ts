import { Component, OnInit } from '@angular/core';
import { ShortifyService } from './services/shortify-backend/shortify.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IpDetectService } from './services/ip-detect/ip-detect.service';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'shortify-frontend';

  constructor(private shortify: ShortifyService,
              private activatedRouter: ActivatedRoute,
              private router: Router,
              private ipDetector: IpDetectService,
              private deviceDetector: DeviceDetectorService
    ) {}

  ngOnInit() {
    const self = this;
    this.activatedRouter.params.subscribe((params) => {
      const code = params.code;
      if (code && code[code.length - 1] !== '+') {
        self.ipDetector.getInfo().subscribe((ipInfo) => {
          if (ipInfo.status === 'success') {
            self.shortify.getUrl({
              code,
              os: self.deviceDetector.os,
              browser: self.deviceDetector.browser,
              ip: ipInfo.query,
              country: ipInfo.country
            }).subscribe((response) => {
              if (response.success) {
                window.location.href = response.data.url;
              } else {
                console.log('[detail_component_error]: error fetching url => ' + response.err);
              }
            });
          } else {
            console.log('[Detail_component_error]: Error fetching ip info');
          }
        });
      } else {
        if (code) {
          this.router.navigate([`details/${code.substr(0, code.length - 1)}`]);
        }
      }
    });
  }
}
