import { Component } from '@angular/core';

@Component({
  selector: 'app-svg-home',
  standalone: true,
  imports: [],
  template: `
    <div class="h-4 w-4 [&>svg>g>path]:stroke-white [&>svg>g>path]:stroke-[1]">
      <svg
        class="h-full w-full"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_134_429)">
          <path
            d="M0.642822 8.99972L8.99997 0.642578L17.3571 8.99972"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3.21436 10.9287V17.3573H14.7858V10.9287"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_134_429">
            <rect width="18" height="18" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  `,
  styles: ``,
})
export class SvgHome {}
