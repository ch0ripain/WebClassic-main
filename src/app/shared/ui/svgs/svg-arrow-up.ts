import { Component } from '@angular/core';

@Component({
  selector: 'app-svg-arrow-up',
  standalone: true,
  imports: [],
  template: `
    <div class="h-6 w-6 [&>svg>path]:stroke-white [&>svg>path]:stroke-[3]">
      <svg
        class="h-full w-full"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24 38.2852V10.2852"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M36 22L24 10L12 22"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  `,
  styles: ``,
})
export class SvgArrowUp {}
