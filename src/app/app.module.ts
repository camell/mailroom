import { NgModule } from '@angular/core';

import {FlexLayoutModule} from '@angular/flex-layout';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MailroomMaterialModule } from './mailroom-material/mailroom-material.module';

import { AppComponent } from './app.component';
import { InboxComponent } from './inbox/inbox.component';

@NgModule({
  declarations: [
    AppComponent,
    InboxComponent
  ],
  imports: [
    FlexLayoutModule,
    BrowserModule,
    BrowserAnimationsModule,
    MailroomMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
