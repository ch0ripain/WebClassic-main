import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-profile-characters',
  imports: [NgOptimizedImage],
  templateUrl: './profile-characters.html',
  styleUrl: './profile-characters.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileCharacters {}
