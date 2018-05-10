import { Component } from '@angular/core';
import { FilePreviewOverlayService } from '../file-preview-overlay.service';

import { FilePreviewOverlayRef } from '../file-preview-overlay-ref';

import { STATIC_FILE_DATE } from '../data';

@Component({
  selector: 'app-season-zero-for-your-consideration',
  templateUrl: './season-zero-for-your-consideration.component.html',
  styleUrls: ['./season-zero-for-your-consideration.component.css']
})
export class SeasonZeroForYourConsiderationComponent {
  files = STATIC_FILE_DATE;

  constructor(private previewDialog: FilePreviewOverlayService) { }

  showPreview(file) {
    let dialogRef: FilePreviewOverlayRef = this.previewDialog.open({
      image: file
    });
  }
}

