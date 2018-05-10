import { Component } from '@angular/core';
import { MailroomMaterialModule } from '../mailroom-material/mailroom-material.module';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

import { FilePreviewOverlayService } from '../file-preview-overlay.service';
import { FilePreviewOverlayRef } from '../file-preview-overlay-ref';
import { STATIC_FILE_DATE } from '../data';

const CATALYST_ICON = `

<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch -->
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="wcatalystIcon" fill="#FFFFFF" fill-rule="nonzero">
            <path d="M14.9038855,16.5666591 C14.3281652,16.5666591 13.8609407,16.1033708 13.8609407,15.531243 C13.8609407,14.9591151 14.3281652,14.4958268 14.9038855,14.4958268 C15.4796057,14.4958268 15.9468303,14.9591151 15.9468303,15.531243 C15.9468303,16.1033708 15.4796057,16.5666591 14.9038855,16.5666591 Z M14.9243354,16.120009 C15.2634467,16.120009 15.5378323,15.8561307 15.5378323,15.531243 C15.5378323,15.2063552 15.2634467,14.9424769 14.9243354,14.9424769 C14.5852241,14.9424769 14.3108384,15.2063552 14.3108384,15.531243 C14.3108384,15.8561307 14.5852241,16.120009 14.9243354,16.120009 Z M9.06999958,18.682141 C8.032213,18.682141 7.18999958,17.8454251 7.18999958,16.812141 C7.18999958,15.7788569 8.032213,14.942141 9.06999958,14.942141 C10.1077861,14.942141 10.9499996,15.7788569 10.9499996,16.812141 C10.9499996,17.8454251 10.1077861,18.682141 9.06999958,18.682141 Z M9.10686232,17.8754744 C9.7181404,17.8754744 10.2127447,17.3989004 10.2127447,16.812141 C10.2127447,16.2253816 9.7181404,15.7488077 9.10686232,15.7488077 C8.49558424,15.7488077 8.00097997,16.2253816 8.00097997,16.812141 C8.00097997,17.3989004 8.49558424,17.8754744 9.10686232,17.8754744 Z M12.3271984,19.8150237 C11.8867259,19.8150237 11.5296524,19.4696174 11.5296524,19.0435371 C11.5296524,18.6174568 11.8867259,18.2720505 12.3271984,18.2720505 C12.7676709,18.2720505 13.1247444,18.6174568 13.1247444,19.0435371 C13.1247444,19.4696174 12.7676709,19.8150237 12.3271984,19.8150237 Z M3.61554192,14.292804 C2.72330276,14.292804 2,13.5747224 2,12.688924 C2,11.8031255 2.72330276,11.085044 3.61554192,11.085044 C4.50778109,11.085044 5.23108384,11.8031255 5.23108384,12.688924 C5.23108384,13.5747224 4.50778109,14.292804 3.61554192,14.292804 Z M20.3844581,14.292804 C19.4922189,14.292804 18.7689162,13.5747224 18.7689162,12.688924 C18.7689162,11.8031255 19.4922189,11.085044 20.3844581,11.085044 C21.2766972,11.085044 22,11.8031255 22,12.688924 C22,13.5747224 21.2766972,14.292804 20.3844581,14.292804 Z M10.9570552,23.2258065 C10.3245819,23.2258065 9.81186094,22.7167866 9.81186094,22.0888789 C9.81186094,21.4609711 10.3245819,20.9519513 10.9570552,20.9519513 C11.5895285,20.9519513 12.1022495,21.4609711 12.1022495,22.0888789 C12.1022495,22.7167866 11.5895285,23.2258065 10.9570552,23.2258065 Z M11.9795501,14.5364313 C7.9136501,14.5364313 4.61758691,11.2823403 4.61758691,7.26821566 C4.61758691,3.25409099 7.9136501,0 11.9795501,0 C16.0454501,0 19.3415133,3.25409099 19.3415133,7.26821566 C19.3415133,11.2823403 16.0454501,14.5364313 11.9795501,14.5364313 Z" id="Combined-Shape"></path>
        </g>
    </g>
</svg>

`;

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent {
  files = STATIC_FILE_DATE;

  mobileQuery: MediaQueryList;

private _mobileQueryListener: () => void;

  constructor(private previewDialog: FilePreviewOverlayService,
    changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
  iconRegistry
    .addSvgIcon(
        'thumbs-up',
        sanitizer.bypassSecurityTrustResourceUrl('./assets/img/roles/thumbs-up.svg'))

    .addSvgIconLiteral('Catalyst',
            sanitizer.bypassSecurityTrustHtml(CATALYST_ICON));

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

  }

  showPreview(file) {
    let dialogRef: FilePreviewOverlayRef = this.previewDialog.open({
      image: file
    });
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}

