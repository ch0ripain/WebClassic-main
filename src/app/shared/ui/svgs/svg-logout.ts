import { Component } from '@angular/core';

@Component({
  selector: 'app-svg-logout',
  imports: [],
  template: `
    <div class="h-4 w-4 [&>svg>g>path]:stroke-white [&>svg>g>path]:stroke-[1]">
      <svg
        class="h-full w-full"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_69_1274)">
          <path
            d="M14.9285 16.5004V19.6433C14.9285 20.06 14.7629 20.4597 14.4682 20.7544C14.1735 21.0491 13.7738 21.2147 13.3571 21.2147H2.35707C1.9403 21.2147 1.54061 21.0491 1.24591 20.7544C0.951205 20.4597 0.785645 20.06 0.785645 19.6433V2.35756C0.785645 1.94079 0.951205 1.54109 1.24591 1.24639C1.54061 0.951694 1.9403 0.786133 2.35707 0.786133H13.3571C13.7738 0.786133 14.1735 0.951694 14.4682 1.24639C14.7629 1.54109 14.9285 1.94079 14.9285 2.35756V5.50042"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.2144 11H21.2144"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M18.0713 7.85742L21.2141 11.0003L18.0713 14.1431"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_69_1274">
            <rect width="22" height="22" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  `,
  styles: ``,
})
export class SvgLogout {}
