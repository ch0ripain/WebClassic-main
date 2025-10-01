import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [NgOptimizedImage],
  templateUrl: './experience.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Experience {}
