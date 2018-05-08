import { Component, OnInit } from '@angular/core';
import { MailroomMaterialModule } from './mailroom-material/mailroom-material.module';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef} from '@angular/core';
import { InboxComponent } from './inbox/inbox.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
