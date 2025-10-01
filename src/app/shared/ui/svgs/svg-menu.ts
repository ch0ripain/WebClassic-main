import { Component } from '@angular/core';

@Component({
  selector: 'app-svg-menu',
  standalone: true,
  imports: [],
  template: `
    <div class="h-4 w-4 [&>svg>path]:stroke-white [&>svg>path]:stroke-[1]">
      <svg
        class="h-full w-full"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.3571 2.57141H0.642822"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M17.3571 9H0.642822"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M17.3571 15.4285H0.642822"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  `,
  styles: ``,
})
export class SvgMenu {}
