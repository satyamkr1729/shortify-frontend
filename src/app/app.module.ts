import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShortifyService } from './shortify.service';
import { ShortifyServiceImplService } from './shortify-service-impl.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    {provide: ShortifyService, useClass: ShortifyServiceImplService},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
