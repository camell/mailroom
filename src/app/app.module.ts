import { NgModule } from '@angular/core';

import {FlexLayoutModule} from '@angular/flex-layout';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MailroomMaterialModule } from './mailroom-material/mailroom-material.module';

import { AppComponent } from './app.component';
import { InboxComponent } from './inbox/inbox.component';
import { FilePreviewOverlayComponent } from './file-preview-overlay/file-preview-overlay.component';
import { FilePreviewOverlayToolbarComponent } from './file-preview-overlay-toolbar/file-preview-overlay-toolbar.component';
import { SeasonZeroForYourConsiderationComponent } from './season-zero-for-your-consideration/season-zero-for-your-consideration.component';

@NgModule({
  declarations: [
    AppComponent,
    InboxComponent,
    FilePreviewOverlayComponent,
    FilePreviewOverlayToolbarComponent,
    SeasonZeroForYourConsiderationComponent
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