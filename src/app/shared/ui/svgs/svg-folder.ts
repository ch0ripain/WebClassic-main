import { Component } from '@angular/core';

@Component({
  selector: 'app-svg-folder',
  imports: [],
  template: `
    <div
      class="h-6 w-6 [&>svg>g>path]:stroke-white [&>svg>g>path]:stroke-[1.5]"
    >
      <svg
        class="h-full w-full"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_43_225)">
          <path
            d="M19.2858 8.57164C19.2858 8.00332 19.06 7.45827 18.6582 7.05641C18.2563 6.65455 17.7112 6.42878 17.1429 6.42878H10.0001L7.94293 2.14307H2.85721C2.28889 2.14307 1.74385 2.36883 1.34198 2.77069C0.94012 3.17256 0.714355 3.7176 0.714355 4.28592V15.7145C0.714355 16.2828 0.94012 16.8279 1.34198 17.2297C1.74385 17.6316 2.28889 17.8574 2.85721 17.8574H17.1429C17.7112 17.8574 18.2563 17.6316 18.6582 17.2297C19.06 16.8279 19.2858 16.2828 19.2858 15.7145V8.57164Z"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_43_225">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  `,
  styles: ``,
})
export class SvgFolder {}
