import { NgModule } from '@angular/core';

import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

import {FlexLayoutModule} from '@angular/flex-layout';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MailroomMaterialModule } from './mailroom-material/mailroom-material.module';

import { AppComponent } from './app.component';
import { InboxComponent } from './inbox/inbox.component';
import { ScreenplaySwiperComponent } from './screenplay-swiper/screenplay-swiper.component';

import { SwiperModule, SwiperConfigInterface,
  SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

  const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
    observer: true,
    direction: 'horizontal',
    threshold: 50,
    spaceBetween: 5,
    slidesPerView: 1,
    centeredSlides: true
  };

@NgModule({
  declarations: [
    AppComponent,
    InboxComponent,
    ScreenplaySwiperComponent
  ],
  imports: [
    SwiperModule,
    FlexLayoutModule,
    BrowserModule,
    BrowserAnimationsModule,
    MailroomMaterialModule,
    HttpClientModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'stepper',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/icon-stepper.svg'));
    
    iconRegistry.addSvgIcon(
        'role-select',
        sanitizer.bypassSecurityTrustResourceUrl('assets/img/roles/role-select.svg'));
    
        iconRegistry.addSvgIcon(
          'timeline',
          sanitizer.bypassSecurityTrustResourceUrl('assets/icons/Timeline.svg'));

          iconRegistry.addSvgIcon(
            'notifications',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/notification.svg'));
  }
  

}
