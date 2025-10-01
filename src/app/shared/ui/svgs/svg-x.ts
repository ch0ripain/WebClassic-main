import { Component, input } from '@angular/core';

@Component({
  selector: 'app-svg-x',
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
        <g clip-path="url(#clip0_30_136)">
          <path
            d="M17.3571 0.642578L0.642822 17.3569"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M0.642822 0.642578L17.3571 17.3569"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_30_136">
            <rect width="18" height="18" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  `,
  styles: ``,
})
export class SvgX {}
