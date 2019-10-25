import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShortifyService } from './services/shortify-backend/shortify.service';
import { ShortifyServiceImplService } from './services/shortify-backend/shortify-service-impl.service';
import { DetailComponent } from './detail/detail.component';

import { DeviceDetectorModule } from 'ngx-device-detector';
import { IpDetectService } from './services/ip-detect/ip-detect.service';
import { IpDetectImplService } from './services/ip-detect/ip-detect-impl.service';
@NgModule({
  declarations: [
    AppComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DeviceDetectorModule.forRoot()
  ],
  providers: [
    {provide: ShortifyService, useClass: ShortifyServiceImplService},
    {provide: IpDetectService, useClass: IpDetectImplService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
