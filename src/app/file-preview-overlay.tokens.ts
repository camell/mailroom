import { InjectionToken } from '@angular/core';

import { Image } from './file-preview-overlay.service';

export const FILE_PREVIEW_DIALOG_DATA = new InjectionToken<Image>('FILE_PREVIEW_DIALOG_DATA');


// file-preview-overlay-ref.ts

import { OverlayRef } from '@angular/cdk/overlay';
import { Observable, Subject } from 'rxjs';

import { filter, take } from 'rxjs/operators';

import { FilePreviewOverlayComponent } from './file-preview-overlay/file-preview-overlay.component';

export class FilePreviewOverlayRef {

  private _beforeClose = new Subject<void>();
  private _afterClosed = new Subject<void>();

  componentInstance: FilePreviewOverlayComponent;

  constructor(private overlayRef: OverlayRef) { }

  close(): void {
    this.componentInstance.animationStateChanged.pipe(
      filter(event => event.phaseName === 'start'),
      take(1)
    ).subscribe(() => {
      this._beforeClose.next();
      this._beforeClose.complete();
      this.overlayRef.detachBackdrop();
    });

    this.componentInstance.animationStateChanged.pipe(
      filter(event => event.phaseName === 'done' && event.toState === 'leave'),
      take(1)
    ).subscribe(() => {
      this.overlayRef.dispose();
      this._afterClosed.next();
      this._afterClosed.complete();

      this.componentInstance = null!;
    });

    this.componentInstance.startExitAnimation();
  }

  afterClosed(): Observable<void> {
    return this._afterClosed.asObservable();
  }

  beforeClose(): Observable<void> {
    return this._beforeClose.asObservable();
  }
}
