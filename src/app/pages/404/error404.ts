import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-error-404',
  imports: [RouterLink],
  templateUrl: './error404.html',
  styleUrl: './error404.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Error404 {}
