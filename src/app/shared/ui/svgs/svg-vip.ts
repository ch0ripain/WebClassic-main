import { Component } from '@angular/core';

@Component({
  selector: 'app-svg-vip',
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
          d="M17.3571 7.07157L8.99997 16.0716L0.642822 7.07157L4.49997 1.92871H13.5L17.3571 7.07157Z"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M0.642822 7.07129H17.3571"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M4.5 1.92871L9 7.07157L13.5 1.92871"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9 7.07129V16.0713"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  `,
  styles: ``,
})
export class SvgVip {}
